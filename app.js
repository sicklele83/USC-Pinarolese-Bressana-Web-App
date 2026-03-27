// ===================== DATA STORE =====================
const DEFAULT_DATA = {
  notizie: [],
  eventi: [],
  partite: [
  ],
  squadre: [
    { id: 1, nome: "Allievi 2010", girone: "Girone A", giocatori: [
        {nome:"Mario Rossi", maglia:1, ruolo:"P"}, {nome:"Luca Bianchi", maglia:3, ruolo:"D"}, {nome:"Giovanni Verdi", maglia:5, ruolo:"D"}, {nome:"Antonio Neri", maglia:8, ruolo:"C"}, {nome:"Federico Russo", maglia:10, ruolo:"A"}
      ], staff: ["Mister: Carlo Colombo", "Assistente: Marco Ferrari"], allenamenti: "Lunedì e Mercoledì 17:30, Sabato 10:00", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 2, nome: "Giovanissimi 2012", girone: "Girone B", giocatori: [
        {nome:"Paolo Conti", maglia:1, ruolo:"P"}, {nome:"Simone Romano", maglia:6, ruolo:"D"}, {nome:"Davide Esposito", maglia:9, ruolo:"A"}
      ], staff: ["Mister: Luigi De Luca"], allenamenti: "Martedì e Giovedì 17:00, Sabato 10:30", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 3, nome: "Esordienti 2013", girone: "Girone C", giocatori: [
        {nome:"Andrea Mancini", maglia:1, ruolo:"P"}, {nome:"Riccardo Costa", maglia:4, ruolo:"C"}, {nome:"Stefano Ricci", maglia:11, ruolo:"A"}
      ], staff: ["Mister: Roberto Lombardi"], allenamenti: "Lunedì e Mercoledì 17:00, Sabato 11:00", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 4, nome: "Esordienti 2014/A", girone: "Girone C", giocatori: [
        {nome:"Francesco Giordano", maglia:1, ruolo:"P"}, {nome:"Matteo Moretti", maglia:7, ruolo:"A"}
      ], staff: ["Mister: Sergio Barbieri"], allenamenti: "Martedì e Giovedì 17:00, Sabato 11:00", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 5, nome: "Esordienti 2014/B", girone: "Girone D", giocatori: [
        {nome:"Giacomo Greco", maglia:1, ruolo:"P"}, {nome:"Lorenzo Serrano", maglia:5, ruolo:"D"}
      ], staff: ["Mister: Daniele Marini"], allenamenti: "Lunedì e Mercoledì 17:00, Sabato 11:30", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 6, nome: "Pulcini 2015", girone: "Girone A", giocatori: [
        {nome:"Alessandro Bruno", maglia:1, ruolo:"P"}, {nome:"Nicolò Gallo", maglia:9, ruolo:"A"}
      ], staff: ["Mister: Pietro De Santis"], allenamenti: "Martedì e Giovedì 17:30, Sabato 10:00", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 7, nome: "Pulcini 2016", girone: "Girone B", giocatori: [
        {nome:"Tommaso Caruso", maglia:1, ruolo:"P"}, {nome:"Edoardo Leone", maglia:10, ruolo:"C"}
      ], staff: ["Mister: Emanuele Rinaldi"], allenamenti: "Lunedì e Mercoledì 17:30, Sabato 10:00", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 8, nome: "Primi Calci 2017", girone: "Girone A", giocatori: [
        {nome:"Samuel Ferrari", maglia:1, ruolo:"P"}, {nome:"Mattia Rizzo", maglia:6, ruolo:"C"}
      ], staff: ["Mister: Vincenzo Palermo"], allenamenti: "Martedì e Giovedì 17:30, Sabato 10:30", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 9, nome: "Primi Calci 2018 A", girone: "Girone B", giocatori: [
        {nome:"Gabriel Esposito", maglia:1, ruolo:"P"}
      ], staff: ["Mister: Massimo Testa"], allenamenti: "Lunedì e Mercoledì 17:30, Sabato 10:30", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 10, nome: "Primi Calci 2018 B", girone: "Girone C", giocatori: [
        {nome:"Lorenzo Ferrara", maglia:1, ruolo:"P"}
      ], staff: ["Mister: Antonio Sanna"], allenamenti: "Martedì e Giovedì 17:30, Sabato 10:30", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" },
    { id: 11, nome: "Piccoli Amici 2019-2020", girone: "Girone D", giocatori: [
        {nome:"Matteo Conti", maglia:1, ruolo:"P"}, {nome:"Luca Romano", maglia:2, ruolo:"D"}, {nome:"Andrea Russo", maglia:3, ruolo:"D"}, {nome:"Paolo Verdi", maglia:4, ruolo:"D"}, {nome:"Marco Neri", maglia:5, ruolo:"C"}, {nome:"Giovanni Bianchi", maglia:6, ruolo:"C"}, {nome:"Antonio Ferrari", maglia:7, ruolo:"C"}, {nome:"Simone Costa", maglia:9, ruolo:"A"}, {nome:"Davide Bruno", maglia:11, ruolo:"A"}
      ], staff: ["Mister: Roberto Greco"], allenamenti: "Martedì e Giovedì 17:30, Sabato 10:00", luogoAllenamenti: "Campo Sportivo Via Roma, Pinarolo Po", mapsAllenamenti: "" }
  ],
  societa: "U.S.C. Pinarolese Bressana è una società calcistica giovanile con sede a Pinarolo Po (PV). Fondata nel 1960 la nostra società mette da sempre al centro il divertimento, l'educazione dei bambini e i ragazzi, prima ancora dei risultati.\nCrediamo nello sport come strumento educativo, dove divertirsi è importante quanto imparare.\nOffriamo un ambiente sicuro, guidato da adulti responsabili che trasmettono valori, rispetto e passione.\nDa noi si cresce insieme, dentro e fuori dal campo, diventando prima persone e poi calciatori.",
  contatti: [
    { tipo: "indirizzo", valore: "Campo Sportivo Via Roma, Pinarolo Po (PV)", maps: "https://maps.google.com/?q=Campo+Sportivo+Via+Roma+Pinarolo+Po" },
    { tipo: "email", valore: "uscpinarolese@gmail.com", maps: "" },
    { tipo: "telefono", valore: "0383 000000", maps: "" },
    { tipo: "indirizzo", valore: "Segreteria Via Fittizia 12, Pinarolo Po (PV)", maps: "https://maps.google.com/?q=Via+Fittizia+12+Pinarolo+Po" },
    { tipo: "indirizzo", valore: "Spogliatoi Via Esempio 5, Pinarolo Po (PV)", maps: "https://maps.google.com/?q=Via+Esempio+5+Pinarolo+Po" },
    { tipo: "indirizzo", valore: "Campo Allenamenti Via Prova 8, Pinarolo Po (PV)", maps: "https://maps.google.com/?q=Via+Prova+8+Pinarolo+Po" },
    { tipo: "persona", valore: "Presidente: Marco Gioannini - Cel. 3382581122", maps: "", tel: "3382581122" },
    { tipo: "persona", valore: "Vicepresidente: Claudio Bianchini - Cel. 3939337697", maps: "", tel: "3939337697" }
  ],
  collaborazioni: [
    { id: 1, nome: "Atleti Al Tuo Fianco", indirizzo: "", telefono: "", maps: "", banner: "images/img3.jpg", facebook: "https://www.facebook.com/atletialtuofianco/?locale=it_IT", instagram: "https://www.instagram.com/atletialtuofianco/" }
  ],
  sponsor: [
    { id: 1, nome: "Al Castello", indirizzo: "Via Depretis Agostino, 126, Pinarolo Po", telefono: "0383 812035", maps: "https://maps.app.goo.gl/xjHHBY3uFRTnLGEQA?g_st=ic", banner: "images/img4.jpg" }
  ],
  wallpaper: [
    { id: 1, titolo: "Campo Pinarolese", immagine: "images/img5.jpg" },
    { id: 2, titolo: "Stemma USC Pinarolese Bressana", immagine: "images/img6.jpg" },
    { id: 3, titolo: "Stadio Pinarolese", immagine: "images/img7.jpg" }
  ],
  campiPropri: [
    { id: 1, nome: "Campo Sportivo Pinarolo Po", indirizzo: "Via Franco Barbieri, 7, 27040 Pinarolo Po (PV)", maps: "https://maps.app.goo.gl/Vy2VQgPx3fVwgpCK8" },
    { id: 2, nome: "Campo Sportivo Comunale Bressana Bottarone", indirizzo: "Piazza Marconi Guglielmo, 9, 27042 Bressana (PV)", maps: "https://maps.app.goo.gl/dLd7B7osqbx297M16" },
    { id: 3, nome: "Centro Sportivo Comunale Thomas Arrivati - Barbianello", indirizzo: "Via Barbiano, 27041 Barbianello (PV)", maps: "https://maps.app.goo.gl/p9LSHHCxCcdFHaEy5" },
    { id: 4, nome: "Palestra Comunale", indirizzo: "Via Agostino Depretis, 14a, 27040 Pinarolo Po (PV)", maps: "https://maps.app.goo.gl/6JDuRaf37SBVQjJZA" }
  ],
  campiAltri: [],
  documenti: [
    { id: 1, titolo: "Modulo di Iscrizione", descrizione: "Modulo da compilare per iscrivere il proprio figlio alla società", url: "" },
    { id: 2, titolo: "Liberatoria Medica", descrizione: "Dichiarazione medica obbligatoria per la partecipazione alle attività sportive", url: "" },
    { id: 3, titolo: "Informativa Privacy", descrizione: "Consenso al trattamento dei dati personali ai sensi del GDPR", url: "" }
  ]
};

// ===================== GOOGLE SHEETS SYNC =====================
// SHEETS_ID deve stare QUI, prima di loadData
const SHEETS_ID = localStorage.getItem('pinarolese_sheets_id') || "1PyjvETJgeUSI-YvyULD1RvSCx703ew1hHVGM8nzJ77o";

// Campi gestiti da Sheets: vengono sempre presi dal foglio, mai dal localStorage
const SHEETS_FIELDS = ['notizie', 'partite', 'eventi', 'campiAltri', 'campiPropri', 'sponsor', 'collaborazioni', 'wallpaper', 'contatti', 'squadre', 'societa'];

function loadData() {
  try {
    const saved = localStorage.getItem('pinarolese_data');
    const base = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DATA));
    // Se Sheets è configurato, resetta i campi gestiti ai DEFAULT
    // così non restano mai dati vecchi in cache
    if (SHEETS_ID) {
      SHEETS_FIELDS.forEach(f => { base[f] = JSON.parse(JSON.stringify(DEFAULT_DATA[f])); });
      // Svuota anche i giocatori di tutte le squadre
      base.squadre.forEach(sq => { sq.giocatori = []; });
    }
    return base;
  } catch(e) { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
function saveData(d) {
  localStorage.setItem('pinarolese_data', JSON.stringify(d));
}

let DATA = loadData();

function showSheetsStatus(msg) {
  const el = document.getElementById('sheets-status');
  if (!el) return;
  el.textContent = msg;
  el.style.display = msg ? 'block' : 'none';
}

// Avvia la sync al caricamento via Apps Script (funziona anche da file://)
window.addEventListener('DOMContentLoaded', () => {
  if (typeof syncFromAppsScript === 'function') {
    syncFromAppsScript();
  }
});

// Nomi esatti dei fogli (tab) nel tuo Google Sheets — devono corrispondere ESATTAMENTE
const SHEET_PARTITE      = "Partite";
const SHEET_GIOCATORI    = "Giocatori";
const SHEET_NOTIZIE      = "Notizie";
const SHEET_EVENTI       = "Eventi";
const SHEET_CAMPI_ALTRI  = "CampiAltri";

function fetchSheet(sheetName) {
  return new Promise((resolve) => {
    if (!SHEETS_ID) { resolve(null); return; }
    const cbName = '_gsq_' + sheetName.replace(/\W/g, '') + '_' + Date.now();
    const url = 'https://docs.google.com/spreadsheets/d/' + SHEETS_ID +
      '/gviz/tq?tqx=out:json;responseHandler:' + cbName +
      '&sheet=' + encodeURIComponent(sheetName) + '&headers=1';
    const timer = setTimeout(() => {
      delete window[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);
      resolve(null);
    }, 8000);
    window[cbName] = (data) => {
      clearTimeout(timer);
      delete window[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);
      resolve(data.table || null);
    };
    const script = document.createElement('script');
    script.src = url;
    script.onerror = () => {
      clearTimeout(timer);
      delete window[cbName];
      resolve(null);
    };
    document.head.appendChild(script);
  });
}

function normalizeSheetValue(cell) {
  if (!cell || cell.v === null || cell.v === undefined) return '';
  // Le celle Data in Sheets arrivano come stringa "Date(2026,2,15)" (mese 0-based)
  const dateMatch = String(cell.v).match(/^Date\((\d+),(\d+),(\d+)\)$/);
  if (dateMatch) {
    const y = dateMatch[1];
    const m = String(parseInt(dateMatch[2]) + 1).padStart(2, '0');
    const d = String(dateMatch[3]).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }
  // Usa il valore formattato (f) se disponibile per orari e testi, altrimenti il valore grezzo
  return cell.f !== undefined && cell.f !== null ? String(cell.f) : String(cell.v);
}

function sheetsTableToRows(table) {
  if (!table || !table.rows) return [];
  const headers = table.cols.map(c => (c.label || '').trim().toLowerCase());
  return table.rows.map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      const cell = row.c && row.c[i];
      obj[h] = normalizeSheetValue(cell);
    });
    return obj;
  }).filter(r => Object.values(r).some(v => v !== ''));
}

// Converte un link Google Drive condivisibile in link diretto al PDF
function driveLinkToDirect(url) {
  if (!url) return '';
  // https://drive.google.com/file/d/FILE_ID/view  →  /uc?export=download&id=FILE_ID
  const m = url.match(/\/file\/d\/([^/]+)/);
  if (m) return `https://drive.google.com/uc?export=download&id=${m[1]}`;
  // Link già in formato /open?id=...
  const m2 = url.match(/[?&]id=([^&]+)/);
  if (m2) return `https://drive.google.com/uc?export=download&id=${m2[1]}`;
  return url; // usa così com'è se non riconoscibile
}

async function syncFromSheets() {
  if (!SHEETS_ID) return;
  showSheetsStatus('⏳ Aggiornamento da Google Sheets...');
  const hn = document.getElementById('home-news');
  if (hn) hn.innerHTML = '<div style="text-align:center;padding:20px;font-size:13px;color:var(--testo-muted)">⏳ Caricamento notizie...</div>';

  // Tutti i fetch in parallelo: evita che tab mancanti causino attese cumulative
  const [tPartite, tGioc, tNotizie, tEventi, tCampiAltri] = await Promise.all([
    fetchSheet(SHEET_PARTITE).catch(() => null),
    fetchSheet(SHEET_GIOCATORI).catch(() => null),
    fetchSheet(SHEET_NOTIZIE).catch(() => null),
    fetchSheet(SHEET_EVENTI).catch(() => null),
    fetchSheet(SHEET_CAMPI_ALTRI).catch(() => null)
  ]);

  let updated = [];

  // --- PARTITE ---
  if (tPartite) {
    const rows = sheetsTableToRows(tPartite);
    DATA.partite = rows.map((r, i) => ({
      id: i + 1,
      squadra:   r['squadra']   || '',
      data:      r['data']      || '',
      ora:       r['ora']       || '',
      casa:      r['casa']      || '',
      ospite:    r['ospite']    || '',
      golCasa:   r['golcasa']   !== '' ? parseInt(r['golcasa'])   : undefined,
      golOspite: r['golospite'] !== '' ? parseInt(r['golospite']) : undefined,
      luogo:     r['luogo']     || '',
      tipo:      r['tipo']      || 'prossima'
    }));
    updated.push('Partite');
  }

  // --- GIOCATORI ---
  if (tGioc) {
    const rows = sheetsTableToRows(tGioc);
    DATA.squadre.forEach(sq => {
      sq.giocatori = [];
      const gioc = rows.filter(r => r['squadra'] && r['squadra'].toLowerCase() === sq.nome.toLowerCase());
      if (gioc.length > 0) {
        sq.giocatori = gioc.map(r => ({
          nome:   r['nome']   || '',
          maglia: parseInt(r['maglia']) || 0,
          ruolo:  (r['ruolo'] || '').toUpperCase()
        }));
      }
    });
    updated.push('Giocatori');
  }

  // --- NOTIZIE ---
  if (tNotizie) {
    const rows = sheetsTableToRows(tNotizie);
    DATA.notizie = rows.map((r, i) => ({
      id:     i + 1,
      titolo: r['titolo'] || '',
      data:   r['data']   || '',
      corpo:  r['corpo']  || r['testo'] || ''
    }));
    updated.push('Notizie');
  }

  // --- EVENTI ---
  if (tEventi) {
    const rows = sheetsTableToRows(tEventi);
    DATA.eventi = rows.map((r, i) => ({
      id:          i + 1,
      titolo:      r['titolo']      || '',
      descrizione: r['descrizione'] || '',
      data:        r['data']        || '',
      ora:         r['ora']         || '',
      luogo:       r['luogo']       || '',
      mapsUrl:     r['maps']        || r['mapsurl'] || ''
    }));
    updated.push('Eventi');
  }

  // --- ALTRI CAMPI ---
  if (tCampiAltri) {
    const rows = sheetsTableToRows(tCampiAltri);
    DATA.campiAltri = rows.map((r, i) => ({
      id:        i + 1,
      squadra:   r['squadra']   || '',
      nome:      r['nome']      || r['campo'] || '',
      indirizzo: r['indirizzo'] || '',
      maps:      r['maps']      || r['coordinate'] || ''
    }));
    updated.push('CampiAltri');
  }

  saveData(DATA);

  try { renderHome(); } catch(e) {}
  if (document.getElementById('page-partite')?.style.display !== 'none') renderPartite();
  if (document.getElementById('page-squadre')?.style.display !== 'none') renderSquadre();
  if (document.getElementById('page-notizie')?.style.display !== 'none') renderNotizie();

  const msg = updated.length
    ? '✅ Aggiornato: ' + updated.join(', ')
    : '⚠️ Nessun foglio trovato — controlla i nomi dei tab';
  showSheetsStatus(msg);
  setTimeout(() => showSheetsStatus(''), 4000);
}


// ===================== TEMA =====================
let temaAttivo = localStorage.getItem('pinarolese_tema') || 'chiaro';

function applyTema(tema) {
  document.body.classList.remove('tema-scuro', 'tema-navy');
  if(tema === 'scuro') document.body.classList.add('tema-scuro');
  if(tema === 'navy') document.body.classList.add('tema-navy');
  // Forza color-scheme: il browser non deve mai sovrascrivere con la modalità del device
  document.body.style.colorScheme = (tema === 'chiaro') ? 'light' : 'dark';
}

function setTema(tema) {
  temaAttivo = tema;
  localStorage.setItem('pinarolese_tema', tema);
  applyTema(tema);
  renderAltro(); // aggiorna i pulsanti attivi
}

// Applica tema salvato all'avvio
applyTema(temaAttivo);

// ===================== SQUADRA PREFERITA =====================
// ---- Squadra preferita: usa cookie invece di localStorage ----
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expires + ';path=/;SameSite=Lax';
}
function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, null);
}
let squadraPreferitaId = parseInt(getCookie('pinarolese_preferita')) || null;

function togglePreferita(id, event) {
  if(event) event.stopPropagation();
  squadraPreferitaId = squadraPreferitaId === id ? null : id;
  setCookie('pinarolese_preferita', squadraPreferitaId || '', 365);
  renderSquadre();
  // Aggiorna il select partite se visibile
  const sel = document.getElementById('partite-squadra-filter');
  if(sel) populateSquadraFilter(sel.value);
}

function togglePreferitaDetail(id) {
  squadraPreferitaId = squadraPreferitaId === id ? null : id;
  setCookie('pinarolese_preferita', squadraPreferitaId || '', 365);
  const btn = document.getElementById('fav-detail-btn');
  if(btn) {
    const isPreferita = squadraPreferitaId === id;
    btn.className = 'fav-detail-btn' + (isPreferita ? ' attiva' : '');
    btn.innerHTML = starIcon(isPreferita) + (isPreferita ? 'Preferita' : 'Aggiungi ai preferiti');
  }
  const banner = document.getElementById('fav-home-banner');
  if(banner) renderFavHomeBanner();
  // Aggiorna il select partite se visibile
  const sel = document.getElementById('partite-squadra-filter');
  if(sel) populateSquadraFilter(sel.value);
}

function starIcon(filled) {
  return filled
    ? `<svg viewBox="0 0 24 24" fill="var(--arancione)" stroke="var(--arancione)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
}

function renderFavHomeBanner() {
  const existing = document.getElementById('fav-home-banner');
  if(!squadraPreferitaId) { if(existing) existing.remove(); return; }
  const s = DATA.squadre.find(x => x.id === squadraPreferitaId);
  if(!s) { if(existing) existing.remove(); return; }
  const gradient = getCatGradient(s.nome);
  const photoHtml = s.foto
    ? `<img src="${s.foto}" alt="${s.nome}"/>`
    : `<div style="width:100%;height:100%;background:${gradient};display:flex;align-items:center;justify-content:center">
        <svg width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="opacity:0.6">
          <circle cx="50" cy="50" r="48" fill="white"/><polygon points="50,18 62,27 58,41 42,41 38,27" fill="${gradient.includes('f47c20')?'#f47c20':'#1e90d6'}"/>
        </svg></div>`;
  const html = `<div id="fav-home-banner" class="fav-home-banner" onclick="showPage('squadre');setTimeout(()=>openSquadra(${s.id}),50)">
    <div class="fav-home-photo" style="background:${gradient}">${photoHtml}</div>
    <div class="fav-home-text">
      <div class="fav-home-label">${starIcon(true).replace('viewBox','style="width:10px;height:10px;vertical-align:middle;margin-right:2px" viewBox')} La mia squadra</div>
      <div class="fav-home-nome">${s.nome}</div>
      <div class="fav-home-sub">${s.giocatori.length} in rosa</div>
    </div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--testo-muted)" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
  </div>`;
  if(existing) { existing.outerHTML = html; }
  else {
    const sectionTitle = document.querySelector('#page-home .section-title');
    if(sectionTitle) sectionTitle.insertAdjacentHTML('beforebegin', html);
  }
}

// ===================== NAVIGATION =====================
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  // Trova il nav btn corretto per nome pagina se btn non passato
  if(btn) {
    btn.classList.add('active');
  } else {
    const map = {home:0, eventi:1, partite:2, squadre:3, altro:4};
    const idx = map[name];
    if(idx !== undefined) document.querySelectorAll('.nav-btn')[idx].classList.add('active');
  }
  if(name === 'home') renderHome();
  if(name === 'notizie') renderNotizie();
  if(name === 'eventi') renderEventi();
  if(name === 'partite') renderPartite();
  if(name === 'squadre') renderSquadre();
  if(name === 'altro') renderAltro();
}

// ===================== HOME =====================
function formatDate(d) {
  const months = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  const dt = new Date(d);
  return dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear();
}

function renderHome() {
  renderFavHomeBanner();
  const container = document.getElementById('home-news');
  if (!container) return;
  if (!DATA.notizie || !DATA.notizie.length) {
    container.innerHTML = '';
    return;
  }
  const latest = [...DATA.notizie].sort((a,b) => b.data.localeCompare(a.data)).slice(0, 5);
  container.innerHTML = `
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--testo);margin-bottom:10px;">Ultime News</div>
    ${latest.map(n => `
      <div class="news-card" onclick="this.classList.toggle('expanded')">
        <h3>${n.titolo}</h3>
        <div class="date">${formatDate(n.data)}</div>
        <div class="body">${n.corpo}</div>
      </div>
    `).join('')}
  `;
}

function renderNotizie() {
  const list = document.getElementById('notizie-list');
  if(!DATA.notizie.length) {
    list.innerHTML = `<div class="empty-state" style="padding:60px 20px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"/></svg><p>Nessuna notizia</p></div>`;
    return;
  }
  list.innerHTML = [...DATA.notizie].sort((a,b)=>b.data.localeCompare(a.data)).map(n => `
    <div class="news-card" onclick="this.classList.toggle('expanded')">
      <h3>${n.titolo}</h3>
      <div class="date">${formatDate(n.data)}</div>
      <div class="body">${n.corpo}</div>
    </div>
  `).join('');
}

function renderEventi() {
  const list = document.getElementById('eventi-list');
  if(!DATA.eventi.length) {
    list.innerHTML = `<div class="empty-state" style="padding:60px 20px"><p>Nessun evento in programma</p></div>`;
    return;
  }
  list.innerHTML = [...DATA.eventi].sort((a,b)=>a.data.localeCompare(b.data)).map(e => {
    const imgHtml = e.immagine
      ? `<img src="${e.immagine}" style="width:100%;height:160px;object-fit:cover" alt="${e.titolo}"/>`
      : `<div class="event-img"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="6"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="6" x2="12" y2="18"/><path d="M5 9c0 0 3 1 7 1s7-1 7-1"/><path d="M5 15c0 0 3-1 7-1s7 1 7 1"/></svg></div>`;
    const mapUrl = e.mapsUrl
      ? `<a class="event-map-btn" href="${e.mapsUrl}" target="_blank" rel="noopener">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
           Apri su Google Maps
         </a>` : '';
    return `
    <div class="event-card">
      ${imgHtml}
      <div class="event-body">
        <h3>${e.titolo}</h3>
        <p>${e.descrizione}</p>
        <div class="event-meta">
          <div class="event-meta-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${formatDate(e.data)}
          </div>
          <div class="event-meta-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${e.ora}
          </div>
          <div class="event-meta-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${e.luogo}
          </div>
        </div>
        ${mapUrl}
      </div>
    </div>`;
  }).join('');
}

// ===================== PARTITE =====================
// ===================== PARTITE =====================
let partiteTab = 'all';
let calMese = null;
let calSelectedDate = null;
let calAperto = true;

function toggleCalendario() {
  calAperto = !calAperto;
  const btn = document.getElementById('cal-toggle-btn');
  const coll = document.getElementById('cal-collapsible');
  if(btn) btn.classList.toggle('open', calAperto);
  if(coll) coll.classList.toggle('open', calAperto);
}

function setPartiteTab(tab) {
  partiteTab = tab;
  calSelectedDate = null;
  ['all','future','past'].forEach(t => {
    const btn = document.getElementById('tab-' + t);
    if(btn) btn.className = 'partite-tab' + (t === tab ? ` tab-active-${t==='all'?'all':t==='future'?'future':'past'}` : '');
  });
  renderPartite();
}

function renderFavBanner() {
  const container = document.getElementById('fav-banner-container');
  if(!container) return;
  const fav = DATA.squadre.find(s => s.id === squadraPreferitaId);
  container.innerHTML = `
    <div class="fav-banner">
      <span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="${fav ? 'var(--azzurro)' : 'none'}" stroke="var(--azzurro)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        ${fav ? fav.nome : 'Nessuna preferita'}
      </span>
      <button onclick="openFavModal()">Cambia</button>
    </div>`;
}

function openFavModal() {
  const overlay = document.getElementById('fav-modal-overlay');
  const list    = document.getElementById('fav-modal-list');
  list.innerHTML = DATA.squadre.map(s => `
    <div class="fav-modal-item${s.id === squadraPreferitaId ? ' selected' : ''}" onclick="setFavSquadra(${s.id})">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="${s.id === squadraPreferitaId ? 'var(--azzurro)' : 'none'}" stroke="var(--azzurro)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      ${s.nome}
    </div>`).join('');
  overlay.classList.add('open');
}

function closeFavModal(e) {
  if(e.target.id === 'fav-modal-overlay') {
    document.getElementById('fav-modal-overlay').classList.remove('open');
  }
}

function setFavSquadra(id) {
  squadraPreferitaId = id;
  setCookie('pinarolese_preferita', id || '', 365);
  document.getElementById('fav-modal-overlay').classList.remove('open');
  renderFavBanner();
  populateSquadraFilter('');
  renderPartite();
}

function onSquadraFilterChange() {
  calSelectedDate = null;
  renderPartite();
}

function populateSquadraFilter(keepValue) {
  const sel = document.getElementById('partite-squadra-filter');
  if(!sel) return;
  const fav = DATA.squadre.find(s => s.id === squadraPreferitaId);
  const others = DATA.squadre.filter(s => s.id !== squadraPreferitaId);

  let html = '<option value="">Tutte le squadre</option>';
  if(fav) {
    html += `<option value="${fav.nome}" style="font-weight:700">⭐ ${fav.nome}</option>`;
    if(others.length) html += '<option disabled>──────────────</option>';
  }
  html += others.map(s => `<option value="${s.nome}">${s.nome}</option>`).join('');
  sel.innerHTML = html;

  // Ripristina il valore precedente se ancora valido
  if(keepValue) sel.value = keepValue;

  // Se c'è una preferita e non c'è ancora nessun filtro, pre-seleziona la preferita
  if(fav && !keepValue && sel.value === '') sel.value = fav.nome;
}

function renderPartite() {
  const sel = document.getElementById('partite-squadra-filter');
  const currVal = sel ? sel.value : '';
  renderFavHomeBanner();
  populateSquadraFilter(currVal);

  if(!calMese) {
    const now = new Date();
    calMese = { year: now.getFullYear(), month: now.getMonth() };
  }

  const list = document.getElementById('partite-list');
  const squadraFilter = sel ? sel.value : '';

  let partite = [...DATA.partite];
  if(squadraFilter) partite = partite.filter(p => p.squadra === squadraFilter);

  const today = new Date().toISOString().split('T')[0];
  if(partiteTab === 'future') partite = partite.filter(p => p.tipo === 'prossima' || p.data >= today);
  if(partiteTab === 'past')   partite = partite.filter(p => p.tipo === 'risultato' || p.data < today);
  if(calSelectedDate) partite = partite.filter(p => p.data === calSelectedDate);

  partite.sort((a,b) => partiteTab === 'future' ? a.data.localeCompare(b.data) : b.data.localeCompare(a.data));

  if(!partite.length) {
    list.innerHTML = `<div class="empty-state" style="padding:40px 20px">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="5" style="margin:0 auto 12px;display:block;opacity:0.2">
        <circle cx="50" cy="50" r="46"/><polygon points="50,35 63,44 58,59 42,59 37,44"/>
        <line x1="50" y1="35" x2="50" y2="4"/><line x1="63" y1="44" x2="88" y2="28"/>
        <line x1="58" y1="59" x2="78" y2="82"/><line x1="42" y1="59" x2="22" y2="82"/>
        <line x1="37" y1="44" x2="12" y2="28"/>
      </svg>
      <p>Nessuna partita trovata</p>
    </div>`;
    return;
  }

  const byMonth = {};
  partite.forEach(p => {
    const key = p.data.substring(0,7);
    if(!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(p);
  });
  const months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

  list.innerHTML = Object.keys(byMonth)
    .sort((a,b) => partiteTab==='future' ? a.localeCompare(b) : b.localeCompare(a))
    .map(key => {
      const [y, m] = key.split('-');
      const label = months[parseInt(m)-1] + ' ' + y;
      return `
        <div style="padding:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--testo-muted);margin-top:8px">${label}</div>
        ${byMonth[key].map(p => `
          <div class="partita-card" style="${calSelectedDate===p.data?'border-left:3px solid var(--azzurro)':''}">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div class="partita-squadra">${p.squadra}</div>
              <span class="badge ${p.tipo==='risultato'?'badge-blue':'badge-orange'}">${p.tipo==='risultato'?'Risultato':'Prossima'}</span>
            </div>
            <div class="partita-date">${formatDate(p.data)}${p.ora ? ' · Ore '+p.ora : ''}</div>
            <div class="partita-teams">
              <div class="partita-team">${p.casa}</div>
              ${p.tipo==='risultato'
                ? `<div class="partita-score">${p.golCasa} - ${p.golOspite}</div>`
                : `<div class="partita-score upcoming">Ore ${p.ora||'--'}</div>`}
              <div class="partita-team away">${p.ospite}</div>
            </div>
            <div class="partita-luogo">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${p.luogo}
            </div>
          </div>
        `).join('')}
      `;
    }).join('');
}

function renderCalendario() {
  const container = document.getElementById('cal-container');
  if(!container || !calMese) return;

  const { year, month } = calMese;
  const months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  const days = ['L','M','M','G','V','S','D'];

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  let startDow = firstDay.getDay() - 1;
  if(startDow < 0) startDow = 6;

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const sel = document.getElementById('partite-squadra-filter');
  const squadraFilter = sel ? sel.value : '';

  const matchDates = {};
  DATA.partite.forEach(p => {
    if(!p.data || !p.data.startsWith(`${year}-${String(month+1).padStart(2,'0')}`)) return;
    if(squadraFilter && p.squadra !== squadraFilter) return;
    if(!matchDates[p.data]) matchDates[p.data] = [];
    matchDates[p.data].push(p.tipo);
  });
  // Aggiungi anche gli eventi al calendario
  (DATA.eventi || []).forEach(e => {
    if(!e.data || !e.data.startsWith(`${year}-${String(month+1).padStart(2,'0')}`)) return;
    if(!matchDates[e.data]) matchDates[e.data] = [];
    matchDates[e.data].push('evento');
  });

  let cells = '';
  cells += days.map(d => `<div class="cal-day-name">${d}</div>`).join('');
  for(let i=0; i<startDow; i++) cells += `<div class="cal-day cal-empty"></div>`;
  for(let d=1; d<=daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === calSelectedDate;
    const matches = matchDates[dateStr] || [];
    const hasFuture = matches.includes('prossima');
    const hasResult = matches.includes('risultato');
    const hasEvento = matches.includes('evento');
    let cls = 'cal-day';
    if(isSelected) cls += ' cal-selected';
    else if(hasFuture) cls += ' cal-has-future';
    else if(hasResult) cls += ' cal-has-result';
    else if(hasEvento) cls += ' cal-has-evento';
    if(isToday) cls += ' cal-today';
    const dot = isSelected
      ? (hasFuture||hasResult||hasEvento ? `<div class="cal-dot cal-dot-white"></div>` : '')
      : hasFuture ? `<div class="cal-dot cal-dot-orange"></div>`
      : hasResult ? `<div class="cal-dot cal-dot-green"></div>`
      : hasEvento ? `<div class="cal-dot cal-dot-purple"></div>` : '';
    const clickable = matches.length > 0 ? `onclick="selectCalDay('${dateStr}')"` : '';
    cells += `<div class="${cls}" ${clickable}><span>${d}</span>${dot}</div>`;
  }

  container.innerHTML = `
    <div class="cal-header">
      <button class="cal-nav-btn" onclick="calNav(-1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="cal-month-label">${months[month]} ${year}</div>
      <button class="cal-nav-btn" onclick="calNav(1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
    <div class="cal-grid">${cells}</div>
    ${calSelectedDate ? `<div style="text-align:center;margin-top:8px"><button class="btn-secondary" style="font-size:12px;padding:5px 12px" onclick="selectCalDay(null)">Mostra tutte</button></div>` : ''}
  `;
}

function calNav(dir) {
  let { year, month } = calMese;
  month += dir;
  if(month > 11) { month = 0; year++; }
  if(month < 0) { month = 11; year--; }
  calMese = { year, month };
  renderCalendario();
}

function selectCalDay(date) {
  calSelectedDate = date;
  renderCalendario();
  renderPartite();
  if(date) {
    const list = document.getElementById('partite-list');
    if(list) setTimeout(() => list.scrollIntoView({behavior:'smooth', block:'start'}), 50);
  }
}


// ===================== SQUADRE =====================
// Gradient per categoria
const CAT_GRADIENTS = {
  'Allievi':    'linear-gradient(135deg, #1e90d6 0%, #0d5fa0 100%)',
  'Giovanissimi': 'linear-gradient(135deg, #f47c20 0%, #c45a00 100%)',
  'Esordienti': 'linear-gradient(135deg, #16a34a 0%, #0f6630 100%)',
  'Pulcini':    'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
  'Primi Calci':'linear-gradient(135deg, #db2777 0%, #881337 100%)',
  'Piccoli Amici': 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
};

function getCatGradient(nome) {
  for(const [k,v] of Object.entries(CAT_GRADIENTS)) {
    if(nome.startsWith(k)) return v;
  }
  return 'linear-gradient(135deg, #1e90d6 0%, #0a3d6b 100%)';
}

function getCat(nome) {
  const cats = ['Allievi','Giovanissimi','Esordienti','Pulcini','Primi Calci','Piccoli Amici'];
  for(const c of cats) { if(nome.startsWith(c)) return c; }
  return 'Squadra';
}

function getAnno(nome) {
  const m = nome.match(/\d{4}(?:[\/\-]\d+)?(?:[AB])?(?:\-\d{4})?/);
  return m ? m[0] : '';
}

function renderSquadre() {
  document.getElementById('squadre-main').style.display = '';
  document.getElementById('squadra-detail-view').style.display = 'none';

  const list = document.getElementById('squadre-list');
  if(!DATA.squadre.length) {
    list.innerHTML = `<div class="empty-state" style="padding:60px 20px"><p>Nessuna squadra</p></div>`;
    return;
  }
  // Mette la preferita in cima
  const sorted = [...DATA.squadre].sort((a,b) => {
    if(a.id === squadraPreferitaId) return -1;
    if(b.id === squadraPreferitaId) return 1;
    return 0;
  });
  list.innerHTML = sorted.map(s => {
    const cat = getCat(s.nome);
    const anno = getAnno(s.nome);
    const gradient = getCatGradient(s.nome);
    const isPreferita = s.id === squadraPreferitaId;
    const photoHtml = s.foto
      ? `<img src="${s.foto}" alt="${s.nome}"/>`
      : `<div class="squadra-card-photo-placeholder">
           <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="opacity:0.55">
             <circle cx="50" cy="50" r="48" fill="white" stroke="rgba(255,255,255,0.6)" stroke-width="3"/>
             <polygon points="50,18 62,27 58,41 42,41 38,27" fill="rgba(255,255,255,0.7)"/>
             <polygon points="76,34 88,43 84,57 72,53 68,39" fill="rgba(255,255,255,0.7)"/>
             <polygon points="82,65 78,79 64,79 60,65 72,57" fill="rgba(255,255,255,0.7)"/>
             <polygon points="50,82 38,79 36,65 50,58 64,65 62,79" fill="rgba(255,255,255,0.7)"/>
             <polygon points="18,65 14,51 28,41 36,53 32,67" fill="rgba(255,255,255,0.7)"/>
             <polygon points="24,34 36,27 42,41 28,53 16,43" fill="rgba(255,255,255,0.7)"/>
           </svg>
         </div>`;
    return `
    <div class="squadra-card${isPreferita?' ' : ''}" style="${isPreferita?'border-color:var(--arancione);box-shadow:0 4px 16px rgba(244,124,32,0.2)':''}" onclick="openSquadra(${s.id})">
      <div class="squadra-card-photo" style="background:${gradient};position:relative">
        ${photoHtml}
        <button class="fav-btn${isPreferita?' attiva':''}" onclick="togglePreferita(${s.id},event)" title="${isPreferita?'Rimuovi dai preferiti':'Aggiungi ai preferiti'}">
          ${isPreferita
            ? `<svg viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
            : `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`}
        </button>
      </div>
      <div class="squadra-card-body">
        <div class="squadra-card-cat">${cat}${isPreferita?' <span style="color:var(--arancione);font-size:10px">★</span>':''}</div>
        <div class="squadra-card-nome">${anno || s.nome.replace(cat,'').trim()}</div>
        <div class="squadra-card-anno">${s.giocatori.length} in rosa</div>
      </div>
      <div class="squadra-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </div>`;
  }).join('');
}

function openSquadra(id) {
  const s = DATA.squadre.find(x => x.id === id);
  if(!s) return;
  const prossima = DATA.partite.find(p => p.squadra === s.nome && p.tipo === 'prossima');

  document.getElementById('squadre-main').style.display = 'none';
  const detail = document.getElementById('squadra-detail-view');
  detail.style.display = '';

  const photoHtml = s.foto
    ? `<img src="${s.foto}" style="width:100%;height:100%;object-fit:cover;display:block" alt="${s.nome}"/>`
    : `<div style="display:flex;align-items:center;justify-content:center;height:100%"><svg width="64" height="64" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="opacity:0.5"><circle cx="50" cy="50" r="48" fill="white" stroke="rgba(255,255,255,0.8)" stroke-width="3"/><polygon points="50,18 62,27 58,41 42,41 38,27" fill="rgba(255,255,255,0.8)"/><polygon points="76,34 88,43 84,57 72,53 68,39" fill="rgba(255,255,255,0.8)"/><polygon points="82,65 78,79 64,79 60,65 72,57" fill="rgba(255,255,255,0.8)"/><polygon points="50,82 38,79 36,65 50,58 64,65 62,79" fill="rgba(255,255,255,0.8)"/><polygon points="18,65 14,51 28,41 36,53 32,67" fill="rgba(255,255,255,0.8)"/><polygon points="24,34 36,27 42,41 28,53 16,43" fill="rgba(255,255,255,0.8)"/></svg></div>`;

  detail.innerHTML = `
    <button class="back-btn" onclick="renderSquadre()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Squadre
    </button>
    <div class="squadra-header">
      <div class="squadra-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
      <div style="flex:1"><h2>${s.nome}</h2></div>
      <button id="fav-detail-btn" class="fav-detail-btn${s.id === squadraPreferitaId ? ' attiva' : ''}" onclick="togglePreferitaDetail(${s.id})">
        ${starIcon(s.id === squadraPreferitaId)}
        ${s.id === squadraPreferitaId ? 'Preferita' : 'Preferita'}
      </button>
    </div>
    <div class="squadra-photo">${photoHtml}</div>
    ${prossima ? `
    <div class="accordion-item">
      <div class="accordion-header open" onclick="toggleAccordion(this)">
        PROSSIMA PARTITA
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
      </div>
      <div class="accordion-body">
        <div class="next-match">
          <div class="day">${formatDate(prossima.data)}</div>
          <div class="teams">${prossima.casa} <span style="font-weight:400">vs</span> ${prossima.ospite} <span class="ora">${prossima.ora ? 'Ore '+prossima.ora : ''}</span></div>
          <div class="luogo" style="display:flex;align-items:center;gap:4px"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ${prossima.luogo}</div>
        </div>
      </div>
    </div>` : ''}
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        ROSA (${s.giocatori.length})
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="accordion-body">
        ${s.giocatori.length ? s.giocatori
            .slice().sort((a,b) => (a.maglia||99)-(b.maglia||99))
            .map(g => {
              const nome = typeof g === 'string' ? g : g.nome;
              const maglia = typeof g === 'object' && g.maglia ? g.maglia : '—';
              const ruolo = typeof g === 'object' && g.ruolo ? g.ruolo : '';
              const ruoloLabel = {P:'Por',D:'Dif',C:'Cen',A:'Att'}[ruolo]||ruolo;
              const ruoloClass = {P:'role-P',D:'role-D',C:'role-C',A:'role-A'}[ruolo]||'role-other';
              return `<div class="player-row">
                <span class="player-num">${maglia}</span>
                <span class="player-name">${nome}</span>
                ${ruoloLabel ? `<span class="player-role ${ruoloClass}">${ruoloLabel}</span>` : ''}
              </div>`;
            }).join('')
          : '<p style="font-size:13px;color:var(--testo-muted)">Nessun giocatore in rosa</p>'}
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        STAFF TECNICO
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="accordion-body">
        ${s.staff.length ? s.staff.map(m => `<div class="player-row">${m}</div>`).join('') : '<p style="font-size:13px;color:var(--testo-muted)">Nessuno staff inserito</p>'}
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        ALLENAMENTI
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="accordion-body">
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:6px;font-size:14px;color:var(--testo-muted)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${s.allenamenti || 'Orari non ancora inseriti'}
          </div>
          ${s.luogoAllenamenti ? `
          <div style="display:flex;align-items:center;gap:6px;font-size:14px;color:var(--testo-muted)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" style="flex-shrink:0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${s.luogoAllenamenti}
          </div>` : ''}
          ${s.mapsAllenamenti ? `
          <a class="event-map-btn" href="${s.mapsAllenamenti}" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:2px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Apri su Google Maps
          </a>` : ''}
        </div>
      </div>
    </div>
  `;
}

function toggleAccordion(header) {
  header.classList.toggle('open');
}

function toggleAltroCard(btn) {
  const body = btn.closest('.altro-card').querySelector('.altro-card-body');
  const chevron = btn.querySelector('.altro-card-chevron');
  body.classList.toggle('open');
  chevron.classList.toggle('open');
}

// ===================== ALTRO =====================
function renderAltro() {
  document.getElementById('altro-content').innerHTML = `
    <div class="altro-card" id="sezione-Società">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        La Società
      </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        <p style="white-space: pre-line;margin-bottom:14px">${DATA.societa}</p>
      <img src="images/img8.jpg" alt="Alla radice di tutto c'è che i ragazzini si devono divertire a giocare a calcio - Johan Cruijff" style="width:100%;border-radius:10px;display:block;margin-top:4px">
      <div style="height:1px;background:var(--grigio);margin-bottom:12px">
      </div>
    </div>
    </div>
    <div class="altro-card" id="sezione-Contatti">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>
          Contatti
        </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
          ${DATA.contatti.map(c => {
            const svgPin    = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
            const svgMail   = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
            const svgPhone  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>`;
            const svgPerson = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
            if (c.tipo === 'indirizzo') return `
              <div style="display:flex;align-items:flex-start;gap:10px;font-size:14px">
                ${svgPin}
                <span style="color:var(--testo-muted)">${c.valore}${c.maps ? ` <a href="${c.maps}" target="_blank" rel="noopener" style="color:var(--azzurro);font-size:12px;font-weight:600;margin-left:4px">Maps →</a>` : ''}</span>
              </div>`;
            if (c.tipo === 'email') return `
              <div style="display:flex;align-items:center;gap:10px;font-size:14px">
                ${svgMail}
                <a href="mailto:${c.valore}" style="display:inline-flex;align-items:center;gap:5px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:5px 10px;border-radius:20px">${c.valore}</a>
              </div>`;
            if (c.tipo === 'telefono') return `
              <div style="display:flex;align-items:center;gap:10px;font-size:14px">
                ${svgPhone}
                <a href="tel:${c.valore.replace(/\s/g,'')}" style="display:inline-flex;align-items:center;gap:5px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:5px 10px;border-radius:20px">${c.valore}</a>
              </div>`;
            if (c.tipo === 'persona') return `
              <div style="display:flex;align-items:center;gap:10px;font-size:14px">
                ${svgPerson}
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <span style="color:var(--testo-muted)">${c.valore}</span>
                  ${c.tel ? `<a href="tel:${c.tel.replace(/\s/g,'')}" class="btn-tel" style="display:inline-flex;align-items:center;gap:5px;text-decoration:none;color:white;font-size:11px;font-weight:600;background:var(--arancione);padding:5px 10px;border-radius:20px">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>
                    ${c.tel}
                  </a>` : ''}
                </div>
              </div>`;
            return '';
          }).join('')}
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <a href="https://www.facebook.com/USCpinarolesebressana?locale=it_IT" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:7px 13px;border-radius:20px">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--azzurro)" stroke="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            Facebook
          </a>
          <a href="https://www.instagram.com/usc_pinarolese_bressana/" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:7px 13px;border-radius:20px">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--azzurro)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="var(--azzurro)" stroke="none"/></svg>
            Instagram
          </a>
          <a href="https://whatsapp.com/channel/0029VaJqs5bJf05UX4pjiX0K" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:#25D366;font-size:13px;font-weight:600;background:rgba(37,211,102,0.12);padding:7px 13px;border-radius:20px">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.386a.75.75 0 00.918.919l5.624-1.456A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.354l-.355-.211-3.676.952.975-3.596-.232-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
    <div class="altro-card" id="sezione-CampiPropri">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          I Nostri Campi da Gioco
        </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        ${DATA.campiPropri.map(c => `
          <div class="campo-item">
            <div class="campo-nome">${c.nome}</div>
            ${c.indirizzo ? `<div class="campo-indirizzo">${c.indirizzo}</div>` : ''}
            ${c.maps ? `<a href="${c.maps}" target="_blank" rel="noopener" class="campo-maps-btn">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--azzurro)" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Apri in Maps
            </a>` : ''}
          </div>`).join('')}
      </div>
    </div>
    <div class="altro-card" id="sezione-Sponsor">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        Sponsor
      </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        ${DATA.sponsor.map(s => `
          <div style="margin-bottom:4px">
            ${s.banner ? `<a href="${s.maps || '#'}" target="_blank" rel="noopener" style="display:block;margin-bottom:10px">
              <img src="${s.banner}" alt="${s.nome}" style="width:100%;height:auto;border-radius:10px;display:block">
            </a>` : `<div style="font-weight:700;color:var(--testo);margin-bottom:8px;font-size:14px">${s.nome}</div>`}
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${s.maps ? `<a href="${s.maps}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:7px 13px;border-radius:20px">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Maps
              </a>` : ''}
              ${s.telefono ? `<a href="tel:${s.telefono.replace(/\s/g,'')}" style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:#16a34a;font-size:13px;font-weight:600;background:rgba(22,163,74,0.12);padding:7px 13px;border-radius:20px">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>
                Chiama
              </a>` : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="altro-card" id="sezione-Collaborazioni">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        Collaborazioni
      </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        <div class="collab-list">
        ${Array.isArray(DATA.collaborazioni) ? DATA.collaborazioni.map(c => `
          <div class="collab-item">
            ${c.banner ? `<a href="${c.facebook || c.instagram || '#'}" target="_blank" rel="noopener" style="display:block;margin-bottom:10px">
              <img src="${c.banner}" alt="${c.nome}" style="width:100%;object-fit:cover;border-radius:10px;display:block;cursor:pointer;transition:opacity 0.2s" onmouseover="this.style.opacity=0.88" onmouseout="this.style.opacity=1">
            </a>` : `<div class="collab-nome">${c.nome}</div>`}
            ${c.indirizzo ? `<div class="sponsor-info" style="font-size:12px;margin-bottom:4px"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ${c.indirizzo}</div>` : ''}
            ${c.telefono ? `<div class="sponsor-info" style="font-size:12px;margin-bottom:4px"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg> ${c.telefono}</div>` : ''}
            ${(c.facebook || c.instagram) ? `<div style="display:flex;gap:10px;margin-top:8px">
              ${c.facebook ? `<a href="${c.facebook}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:6px 12px;border-radius:20px">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--azzurro)" stroke="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                Facebook
              </a>` : ''}
              ${c.instagram ? `<a href="${c.instagram}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;color:var(--azzurro);font-size:13px;font-weight:600;background:var(--azzurro-light);padding:6px 12px;border-radius:20px">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--azzurro)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="var(--azzurro)" stroke="none"/></svg>
                Instagram
              </a>` : ''}
            </div>` : ''}
          </div>`).join('') : `<p>${DATA.collaborazioni}</p>`}
      </div>
      </div>
    </div>
    <div class="altro-card" id="sezione-CampiAltri">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Altri Campi da Gioco
        </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        ${(!DATA.campiAltri || !DATA.campiAltri.length)
          ? `<p style="font-size:13px;color:var(--testo-muted);text-align:center;padding:16px 0">Nessun campo disponibile.</p>`
          : DATA.campiAltri.map(c => `
            <div class="campo-item">
              ${c.squadra ? `<div class="campo-squadra">${c.squadra}</div>` : ''}
              <div class="campo-nome">${c.nome}</div>
              ${c.indirizzo ? `<div class="campo-indirizzo">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${c.indirizzo}
              </div>` : ''}
              ${c.maps ? `<a href="${c.maps}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;text-decoration:none;color:var(--azzurro);font-size:12px;font-weight:600;background:var(--azzurro-light);padding:5px 10px;border-radius:20px;margin-top:4px">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--azzurro)" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Apri in Maps
              </a>` : ''}
            </div>`).join('')}
      </div>
    </div>
    <div class="altro-card" id="sezione-Wallpaper">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        Wallpaper
      </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        ${(!DATA.wallpaper || !DATA.wallpaper.length)
        ? `<p style="font-size:13px;color:var(--testo-muted);text-align:center;padding:16px 0">Nessun wallpaper disponibile.</p>`
        : `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            ${DATA.wallpaper.map(w => `
              <div style="position:relative;border-radius:12px;overflow:hidden;aspect-ratio:16/9;background:var(--grigio-chiaro);box-shadow:var(--card-shadow)">
                ${w.immagine ? `<img src="${w.immagine}" style="width:100%;height:100%;object-fit:cover;display:block"/>` : ''}
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.72) 0%,transparent 55%);display:flex;flex-direction:column;justify-content:flex-end;padding:8px 10px">
                  <div style="color:white;font-size:11px;font-weight:700;line-height:1.3;margin-bottom:6px;text-shadow:0 1px 3px rgba(0,0,0,0.5)">${w.titolo}</div>
                  <a href="${w.immagine||'#'}" download="${w.titolo}.jpg"
                    style="display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.92);border-radius:8px;padding:5px 9px;color:var(--azzurro);text-decoration:none;font-size:11px;font-weight:700;font-family:'Barlow',sans-serif;width:fit-content"
                    title="Scarica">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Scarica
                  </a>
                </div>
              </div>`).join('')}
          </div>`}
      </div>
    </div>
    <div class="altro-card">
      <div class="altro-card-header" onclick="toggleAltroCard(this)">
        <h3 style="display:flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azzurro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        Tema
      </h3>
        <svg class="altro-card-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="altro-card-body">
        <div class="tema-selector" id="tema-selector">
        <button class="tema-btn ${temaAttivo==='chiaro'?'attivo':''}" onclick="setTema('chiaro')"
          style="background:#f5f7fa;border-color:${temaAttivo==='chiaro'?'#1e90d6':'#e2e8f0'}">
          <div class="tema-btn-preview" style="background:#ffffff">
            <div class="tema-btn-dot" style="background:#1e90d6"></div>
            <div class="tema-btn-dot" style="background:#f47c20"></div>
          </div>
          <div class="tema-btn-label" style="color:#111111">Chiaro</div>
        </button>
        <button class="tema-btn ${temaAttivo==='scuro'?'attivo':''}" onclick="setTema('scuro')"
          style="background:#111111;border-color:${temaAttivo==='scuro'?'#60b8f0':'#2a2a2a'}">
          <div class="tema-btn-preview" style="background:#000000">
            <div class="tema-btn-dot" style="background:#60b8f0"></div>
            <div class="tema-btn-dot" style="background:#f47c20"></div>
          </div>
          <div class="tema-btn-label" style="color:#ffffff">Scuro</div>
        </button>
        <button class="tema-btn ${temaAttivo==='navy'?'attivo':''}" onclick="setTema('navy')"
          style="background:#0d2137;border-color:${temaAttivo==='navy'?'#f47c20':'#1a3550'}">
          <div class="tema-btn-preview" style="background:#071525">
            <div class="tema-btn-dot" style="background:#f47c20"></div>
            <div class="tema-btn-dot" style="background:#ffffff"></div>
          </div>
          <div class="tema-btn-label" style="color:#f0f6ff">Navy</div>
        </button>
      </div>
    </div>
    <div class="app-credits" style="display:flex;flex-direction:column;align-items:center;gap:4px">
      ${(typeof APPS_SCRIPT_URL !== 'undefined' && APPS_SCRIPT_URL !== 'CONST_URL_APPS_SCRIPT') ? `<button onclick="syncFromAppsScript()" style="background:none;border:none;color:var(--testo-muted);font-size:9px;opacity:0.4;cursor:pointer;font-family:inherit;padding:2px 6px;display:flex;align-items:center;gap:3px">
        <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
        sync sheets
      </button>` : SHEETS_ID ? `<button onclick="syncFromSheets()" style="background:none;border:none;color:var(--testo-muted);font-size:9px;opacity:0.4;cursor:pointer;font-family:inherit;padding:2px 6px;display:flex;align-items:center;gap:3px">
        <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
        sync sheets
      </button>` : ''}
      &copy; 2026 Samuele Ortolani
    </div>
  `;
}

function scrollToSection(name) {
  const el = document.getElementById('sezione-'+name);
  if(el) { showPage('altro', null); setTimeout(()=>el.scrollIntoView({behavior:'smooth'}),100); }
}

// ===================== INIT =====================
renderHome();
renderAltro();