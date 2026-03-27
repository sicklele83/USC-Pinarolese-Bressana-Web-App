// =====================================================================
// SHEETS-API.JS — Injection dei dati Google Sheets nel DATA store
// =====================================================================
//
// Questo file contiene solo injectSheetsData(data), chiamata da
// syncFromSheets() in app.js dopo aver fetchato tutti i tab via gviz.
//
// I dati arrivano già convertiti in array di oggetti da sheetsTableToRows().
// Ogni sezione è opzionale: se il tab non esiste nel foglio, resta
// il valore di default definito in DEFAULT_DATA (app.js).
// =====================================================================

// ---------------------------------------------------------------
// injectSheetsData(data)
// data = oggetto con chiavi opzionali: notizie, partite, giocatori,
//   campiAltri, campiPropri, eventi, squadre, sponsor, collaborazioni,
//   wallpaper, contatti, societa
// ---------------------------------------------------------------
function injectSheetsData(data) {
  if (!data) return;

  // --- Notizie ---
  if (Array.isArray(data.notizie)) {
    DATA.notizie = data.notizie.map((r, i) => ({
      id:     i + 1,
      titolo: r.titolo || '',
      data:   r.data   || '',
      corpo:  r.corpo  || r.testo || ''
    }));
  }

  // --- Partite ---
  if (Array.isArray(data.partite)) {
    DATA.partite = data.partite.map((r, i) => ({
      id:        i + 1,
      squadra:   r.squadra   || '',
      data:      r.data      || '',
      ora:       r.ora       || '',
      casa:      r.casa      || '',
      ospite:    r.ospite    || '',
      golCasa:   r.golcasa   !== '' && r.golcasa   !== undefined ? parseInt(r.golcasa)   : undefined,
      golOspite: r.golospite !== '' && r.golospite !== undefined ? parseInt(r.golospite) : undefined,
      luogo:     r.luogo     || '',
      tipo:      r.tipo      || 'prossima'
    }));
  }

  // --- Squadre (struttura: nome, girone, staff, allenamenti, luogo, maps) ---
  if (Array.isArray(data.squadre) && data.squadre.length > 0) {
    DATA.squadre = data.squadre.map((r, i) => ({
      id:               i + 1,
      nome:             r.nome             || '',
      girone:           r.girone           || '',
      giocatori:        [],
      staff:            r.staff ? r.staff.split(';').map(s => s.trim()).filter(Boolean) : [],
      allenamenti:      r.allenamenti      || '',
      luogoAllenamenti: r.luogoallenamenti || r.luogo || '',
      mapsAllenamenti:  r.mapsallenamenti  || r.maps  || ''
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
        nome:   r.nome   || '',
        maglia: parseInt(r.numero || r.maglia) || 0,
        ruolo:  (r.ruolo || '').toUpperCase()
      }));
    });
  }

  // --- Altri Campi da Gioco ---
  if (Array.isArray(data.campiAltri)) {
    DATA.campiAltri = data.campiAltri.map((r, i) => ({
      id:        i + 1,
      squadra:   r.squadra   || '',
      nome:      r.nome      || r.campo || '',
      indirizzo: r.indirizzo || '',
      maps:      r.maps      || ''
    }));
  }

  // --- Campi Propri ---
  if (Array.isArray(data.campiPropri) && data.campiPropri.length > 0) {
    DATA.campiPropri = data.campiPropri.map((r, i) => ({
      id:        i + 1,
      nome:      r.nome      || '',
      indirizzo: r.indirizzo || '',
      maps:      r.maps      || ''
    }));
  }

  // --- Sponsor ---
  if (Array.isArray(data.sponsor) && data.sponsor.length > 0) {
    DATA.sponsor = data.sponsor.map((r, i) => ({
      id:        i + 1,
      nome:      r.nome      || '',
      banner:    r.banner    || '',
      indirizzo: r.indirizzo || '',
      telefono:  r.telefono  || '',
      maps:      r.maps      || ''
    }));
  }

  // --- Collaborazioni ---
  if (Array.isArray(data.collaborazioni) && data.collaborazioni.length > 0) {
    DATA.collaborazioni = data.collaborazioni.map((r, i) => ({
      id:        i + 1,
      nome:      r.nome      || '',
      banner:    r.banner    || '',
      facebook:  r.facebook  || '',
      instagram: r.instagram || '',
      indirizzo: r.indirizzo || '',
      telefono:  r.telefono  || ''
    }));
  }

  // --- Wallpaper ---
  if (Array.isArray(data.wallpaper) && data.wallpaper.length > 0) {
    DATA.wallpaper = data.wallpaper.map((r, i) => ({
      id:       i + 1,
      titolo:   r.titolo   || '',
      immagine: r.immagine || ''
    }));
  }

  // --- Contatti ---
  if (Array.isArray(data.contatti) && data.contatti.length > 0) {
    DATA.contatti = data.contatti.map(r => ({
      tipo:   r.tipo   || '',
      valore: r.valore || '',
      maps:   r.maps   || '',
      tel:    r.tel    || ''
    }));
  }

  // --- Società (una riga con colonna "testo") ---
  if (Array.isArray(data.societa) && data.societa.length > 0) {
    DATA.societa = (data.societa[0].testo || '').replace(/\\n/g, '\n');
  }

  // --- Eventi ---
  if (Array.isArray(data.eventi)) {
    DATA.eventi = data.eventi.map((r, i) => ({
      id:          i + 1,
      titolo:      r.titolo      || '',
      data:        r.data        || '',
      ora:         r.ora         || '',
      luogo:       r.luogo       || '',
      descrizione: r.descrizione || '',
      mapsUrl:     r.maps        || r.mapsurl || ''
    }));
  }

  // Persiste e aggiorna tutte le sezioni del DOM
  saveData(DATA);
  try { renderHome();    } catch (_) {}
  try { renderNotizie(); } catch (_) {}
  try { renderPartite(); } catch (_) {}
  try { renderSquadre(); } catch (_) {}
  try { renderEventi();  } catch (_) {}
  try { renderAltro();   } catch (_) {}
}
