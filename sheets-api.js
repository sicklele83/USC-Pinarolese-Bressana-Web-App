// =====================================================================
// SHEETS-API.JS — Modulo di sincronizzazione via Google Apps Script
// =====================================================================
//
// COME ATTIVARE:
//   1. Vai su script.google.com → Nuovo progetto
//   2. Incolla il codice Apps Script riportato in fondo a questo file
//   3. Clicca Distribuisci → Nuova distribuzione → Tipo: App web
//      - Esegui come: Me
//      - Chi ha accesso: Chiunque (anche anonimi)
//   4. Copia l'URL generato (es. https://script.google.com/macros/s/XXX/exec)
//   5. Incollalo qui sotto nella costante APPS_SCRIPT_URL
// =====================================================================

// ▼▼▼ INCOLLA QUI L'URL DELLA TUA WEB APP APPS SCRIPT ▼▼▼
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFHSIb7K7dUA2BbP1GiA-a7C-HRNjouxTQ2Z6vZi4rPU6Jxnl5B1lezvooksiS974s/exec";
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// ---------------------------------------------------------------
// fetchDataFromSheets(url)
// ---------------------------------------------------------------
async function fetchDataFromSheets(url) {
  if (!url || url === "CONST_URL_APPS_SCRIPT") {
    console.warn("[sheets-api] APPS_SCRIPT_URL non configurato.");
    return null;
  }
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (e) {
    console.error("[sheets-api] Errore fetch:", e.message);
    showSheetsStatus("⚠️ Apps Script: " + e.message);
    return null;
  }
}

// ---------------------------------------------------------------
// injectSheetsData(data)
// Inietta i dati ricevuti dall'API nel DATA store e aggiorna il DOM.
// ---------------------------------------------------------------
function injectSheetsData(data) {
  if (!data) return;

  // --- Notizie ---
  if (Array.isArray(data.notizie)) {
    DATA.notizie = data.notizie.map((r, i) => ({
      id:     i + 1,
      titolo: r.titolo || "",
      data:   r.data   || "",
      corpo:  r.corpo  || r.testo || ""
    }));
  }

  // --- Partite ---
  if (Array.isArray(data.partite)) {
    DATA.partite = data.partite.map((r, i) => ({
      id:        i + 1,
      squadra:   r.squadra   || "",
      data:      r.data      || "",
      ora:       r.ora       || "",
      casa:      r.casa      || "",
      ospite:    r.ospite    || "",
      golCasa:   r.golcasa   !== "" && r.golcasa   !== undefined ? parseInt(r.golcasa)   : undefined,
      golOspite: r.golospite !== "" && r.golospite !== undefined ? parseInt(r.golospite) : undefined,
      luogo:     r.luogo     || "",
      tipo:      r.tipo      || "prossima"
    }));
  }

  // --- Squadre (struttura: nome, girone, staff, allenamenti, luogo, maps) ---
  if (Array.isArray(data.squadre) && data.squadre.length > 0) {
    DATA.squadre = data.squadre.map((r, i) => ({
      id:                i + 1,
      nome:              r.nome              || "",
      girone:            r.girone            || "",
      giocatori:         [],
      staff:             r.staff ? r.staff.split(";").map(s => s.trim()).filter(Boolean) : [],
      allenamenti:       r.allenamenti       || "",
      luogoAllenamenti:  r.luogoallenamenti  || r.luogo || "",
      mapsAllenamenti:   r.mapsallenamenti   || r.maps  || ""
    }));
  }

  // --- Giocatori (associati alle squadre per nome) ---
  if (Array.isArray(data.giocatori)) {
    DATA.squadre.forEach(sq => {
      sq.giocatori = [];
      const match = data.giocatori.filter(
        r => r.squadra && r.squadra.toLowerCase() === sq.nome.toLowerCase()
      );
      sq.giocatori = match.map(r => ({
        nome:   r.nome   || "",
        maglia: parseInt(r.numero || r.maglia) || 0,
        ruolo:  (r.ruolo || "").toUpperCase()
      }));
    });
  }

  // --- Campi Altrui ---
  if (Array.isArray(data.campiAltri)) {
    DATA.campiAltri = data.campiAltri.map((r, i) => ({
      id:        i + 1,
      squadra:   r.squadra   || "",
      nome:      r.nome      || r.campo || "",
      indirizzo: r.indirizzo || "",
      maps:      r.maps      || ""
    }));
  }

  // --- Campi Propri ---
  if (Array.isArray(data.campiPropri) && data.campiPropri.length > 0) {
    DATA.campiPropri = data.campiPropri.map((r, i) => ({
      id:        i + 1,
      nome:      r.nome      || "",
      indirizzo: r.indirizzo || "",
      maps:      r.maps      || ""
    }));
  }

  // --- Sponsor ---
  if (Array.isArray(data.sponsor) && data.sponsor.length > 0) {
    DATA.sponsor = data.sponsor.map((r, i) => ({
      id:        i + 1,
      nome:      r.nome      || "",
      banner:    r.banner    || "",
      indirizzo: r.indirizzo || "",
      telefono:  r.telefono  || "",
      maps:      r.maps      || ""
    }));
  }

  // --- Collaborazioni ---
  if (Array.isArray(data.collaborazioni) && data.collaborazioni.length > 0) {
    DATA.collaborazioni = data.collaborazioni.map((r, i) => ({
      id:        i + 1,
      nome:      r.nome      || "",
      banner:    r.banner    || "",
      facebook:  r.facebook  || "",
      instagram: r.instagram || "",
      indirizzo: r.indirizzo || "",
      telefono:  r.telefono  || ""
    }));
  }

  // --- Wallpaper ---
  if (Array.isArray(data.wallpaper) && data.wallpaper.length > 0) {
    DATA.wallpaper = data.wallpaper.map((r, i) => ({
      id:       i + 1,
      titolo:   r.titolo   || "",
      immagine: r.immagine || ""
    }));
  }

  // --- Contatti ---
  if (Array.isArray(data.contatti) && data.contatti.length > 0) {
    DATA.contatti = data.contatti.map(r => ({
      tipo:   r.tipo   || "",
      valore: r.valore || "",
      maps:   r.maps   || "",
      tel:    r.tel    || ""
    }));
  }

  // --- Società ---
  if (Array.isArray(data.societa) && data.societa.length > 0) {
    DATA.societa = (data.societa[0].testo || "").replace(/\\n/g, "\n");
  }

  // --- Eventi ---
  if (Array.isArray(data.eventi)) {
    DATA.eventi = data.eventi.map((r, i) => ({
      id:          i + 1,
      titolo:      r.titolo      || "",
      data:        r.data        || "",
      ora:         r.ora         || "",
      luogo:       r.luogo       || "",
      descrizione: r.descrizione || "",
      mapsUrl:     r.maps        || ""
    }));
  }

  // Persiste e aggiorna UI
  saveData(DATA);
  try { renderHome();    } catch (_) {}
  try { renderNotizie(); } catch (_) {}
  try { renderPartite(); } catch (_) {}
  try { renderSquadre(); } catch (_) {}
  try { renderEventi();  } catch (_) {}
  try { renderAltro();   } catch (_) {}
}

// ---------------------------------------------------------------
// syncFromAppsScript()
// ---------------------------------------------------------------
async function syncFromAppsScript() {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "CONST_URL_APPS_SCRIPT") return;
  showSheetsStatus("⏳ Aggiornamento da Apps Script...");
  const data = await fetchDataFromSheets(APPS_SCRIPT_URL);
  if (data) {
    injectSheetsData(data);
    showSheetsStatus("✅ Aggiornato da Apps Script");
  }
}

// ---------------------------------------------------------------
// CODICE DA INCOLLARE SU GOOGLE APPS SCRIPT
// (script.google.com → Nuovo progetto → incolla tutto qui sotto)
// ---------------------------------------------------------------
//
//  const SHEET_ID = "1PyjvETJgeUSI-YvyULD1RvSCx703ew1hHVGM8nzJ77o";
//
//  function doGet() {
//    const ss = SpreadsheetApp.openById(SHEET_ID);
//    const result = {};
//
//    // Chiave = nome variabile JS, valore = colonne attese nel foglio
//    // Il nome del TAB nel foglio = chiave con prima lettera maiuscola
//    // (es. "notizie" → tab "Notizie", "campiAltri" → tab "CampiAltri")
//    const fogli = {
//      notizie:        ["titolo", "data", "corpo"],
//      partite:        ["squadra", "data", "ora", "casa", "ospite", "golcasa", "golospite", "luogo", "tipo"],
//      giocatori:      ["squadra", "numero", "nome", "ruolo"],
//      campiAltri:     ["squadra", "nome", "indirizzo", "maps"],
//      campiPropri:    ["nome", "indirizzo", "maps"],
//      eventi:         ["titolo", "data", "ora", "luogo", "descrizione", "maps"],
//      squadre:        ["nome", "girone", "staff", "allenamenti", "luogoallenamenti", "mapsallenamenti"],
//      sponsor:        ["nome", "banner", "indirizzo", "telefono", "maps"],
//      collaborazioni: ["nome", "banner", "facebook", "instagram", "indirizzo", "telefono"],
//      wallpaper:      ["titolo", "immagine"],
//      contatti:       ["tipo", "valore", "maps", "tel"],
//      societa:        ["testo"]
//    };
//
//    for (const [chiave, colonne] of Object.entries(fogli)) {
//      try {
//        const tabName = chiave.charAt(0).toUpperCase() + chiave.slice(1);
//        const tab = ss.getSheetByName(tabName);
//        if (!tab) { result[chiave] = []; continue; }
//        const rows = tab.getDataRange().getValues();
//        if (rows.length < 2) { result[chiave] = []; continue; }
//        const headers = rows[0].map(h => String(h).trim().toLowerCase());
//        result[chiave] = rows.slice(1)
//          .filter(r => r.some(c => c !== ""))
//          .map(r => {
//            const obj = {};
//            headers.forEach((h, i) => {
//              const val = r[i];
//              if (val instanceof Date) {
//                obj[h] = Utilities.formatDate(val, "Europe/Rome", "yyyy-MM-dd");
//              } else {
//                obj[h] = val !== null && val !== undefined ? String(val) : "";
//              }
//            });
//            return obj;
//          });
//      } catch(e) {
//        result[chiave] = [];
//      }
//    }
//
//    return ContentService
//      .createTextOutput(JSON.stringify(result))
//      .setMimeType(ContentService.MimeType.JSON);
//  }
//
// ---------------------------------------------------------------
// STRUTTURA DEI TAB NEL FOGLIO GOOGLE SHEETS:
//
//  Notizie:        titolo | data | corpo
//  Partite:        squadra | data | ora | casa | ospite | golcasa | golospite | luogo | tipo
//  Giocatori:      squadra | numero | nome | ruolo
//  CampiAltri:     squadra | nome | indirizzo | maps
//  CampiPropri:    nome | indirizzo | maps
//  Eventi:         titolo | data | ora | luogo | descrizione | maps
//  Squadre:        nome | girone | staff | allenamenti | luogoallenamenti | mapsallenamenti
//                  (staff: più voci separate da ; es. "Mister: Rossi;Assistente: Bianchi")
//  Sponsor:        nome | banner | indirizzo | telefono | maps
//                  (banner: URL immagine)
//  Collaborazioni: nome | banner | facebook | instagram | indirizzo | telefono
//  Wallpaper:      titolo | immagine
//                  (immagine: URL immagine)
//  Contatti:       tipo | valore | maps | tel
//                  (tipo: "indirizzo" / "email" / "telefono" / "persona")
//  Societa:        testo
//                  (una sola riga; vai a capo nel testo con Ctrl+Invio nella cella)
// ---------------------------------------------------------------
