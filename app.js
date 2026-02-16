const RESERVATION_EMAIL = "reservierung@lepetitcafe.example";
const RESERVATION_DURATION_MIN = 90;
const MAX_TABLES = 10;

const EMAILJS_PUBLIC_KEY = "NQIPMec1dv7ktExg1";
const EMAILJS_SERVICE_ID = "service_wgt7o4j";
const EMAILJS_TEMPLATE_ID = "Template_5cgb2ek";

const OPENING_HOURS = [
  { day: "Montag", hours: "10:30 – 18:00" },
  { day: "Dienstag", hours: "10:30 – 18:00" },
  { day: "Mittwoch", hours: "geschlossen" },
  { day: "Donnerstag", hours: "10:30 – 18:00" },
  { day: "Freitag", hours: "10:30 – 18:00" },
  { day: "Samstag", hours: "10:30 – 18:00" },
  { day: "Sonntag", hours: "10:30 – 18:00" },
];

const ADDONS = [
  { name: "Oatly / Hafermilch", price: "0,70€" },
  { name: "Laktosefreie Milch", price: "0,70€" },
  { name: "Mandelmilch", price: "1,00€" },
  { name: "Kokosmilch", price: "1,00€" },
  { name: "Karamellmilch", price: "1,30€" },
  { name: "Vanillemilch", price: "1,30€" },
  { name: "Sirup: Karamell", price: "1,00€" },
  { name: "Sirup: Haselnuss", price: "1,00€" },
  { name: "Sirup: Mandel", price: "1,00€" },
  { name: "Sirup: Vanille", price: "1,00€" },
  { name: "Sirup: Chocolate", price: "1,00€" },
];

const MENU = [
  { id:"coffee", label:"Kaffee & Hot Drinks", items:[
    { name:"Espresso", price:"3,50€" },
    { name:"Espresso Macchiato", price:"4,00€" },
    { name:"Doppelter Espresso", price:"5,50€" },
    { name:"Café Crema (klein)", price:"4,90€" },
    { name:"Café Crema (groß)", price:"5,50€" },
    { name:"Cappuccino (klein)", price:"5,50€" },
    { name:"Cappuccino (groß)", price:"5,50€" },
    { name:"Goldene Milch", price:"3,80€" },
    { name:"Chai Latte", price:"4,90€" },
    { name:"Latte Macchiato", price:"4,50€" },
    { name:"Orangensaft–Espresso", price:"6,00€" },
    { name:"Espresso Tonic", price:"7,40€" },
    { name:"Pink Iced Coffee", price:"6,50€" },
  ]},
  { id:"tea_matcha", label:"Tee & Matcha", items:[
    { name:"Kamillentee", price:"3,50€" },
    { name:"Früchtetee", price:"3,50€" },
    { name:"Pfefferminztee", price:"3,50€" },
    { name:"Darjeeling", price:"3,50€" },
    { name:"The le petit café", price:"5,50€", desc:"Frische Minze, 2 Scheiben Zitrone, 1 Scheibe Orange, Ingwer & Honig" },
    { name:"Iced Mango Matcha", price:"7,50€" },
    { name:"Iced Raspberry Matcha", price:"7,50€" },
    { name:"Matcha Latte", price:"7,50€" },
    { name:"Iced Matcha Latte", price:"6,50€" },
    { name:"Iced Blueberry Matcha", price:"6,50€" },
  ]},
  { id:"iced", label:"Cold Coffee Creations", items:[
    { name:"Iced Coffee", price:"4,40€" },
    { name:"Iced Latte Macchiato", price:"6,50€" },
  ]},
  { id:"pancakes", label:"Pancakes", items:[
    { name:"Classic Maple", price:"8,50€", desc:"Drei Pancakes, Ahornsirup, Puderzucker, frische Beeren" },
    { name:"Schocko Pancake", price:"9,90€", desc:"Schockosoße, frische Bananescheiben, Puderzucker" },
    { name:"Lotus Pancake", price:"13,90€", desc:"Lotussoße, eine Kugel Vanilleeis, Früchte" },
  ]},
  { id:"pancake_extras", label:"Pancake Extras", items:[
    { name:"Nutella", price:"1,00€" },
    { name:"Lotus", price:"1,00€" },
    { name:"Ahornsirup", price:"1,00€" },
    { name:"Haselnusskrokant", price:"0,80€" },
    { name:"Sahne", price:"1,00€" },
    { name:"Bananescheiben", price:"1,20€" },
    { name:"Vanilleeis", price:"1,50€" },
  ]},
  { id:"softdrinks", label:"Softdrinks & Säfte", items:[
    { name:"Coca Cola (0,2 L)", price:"3,20€" },
    { name:"Coca Cola Zero", price:"3,20€" },
    { name:"Fanta", price:"3,20€" },
    { name:"Sprite", price:"3,20€" },
    { name:"Stilles Wasser", price:"3,10€" },
    { name:"Mineralwasser", price:"3,10€" },
    { name:"Orangensaft (0,4 L)", price:"6,00€" },
    { name:"Orangensaft (0,2 L)", price:"5,00€" },
    { name:"Apfelsaft", price:"5,00€" },
    { name:"Ananassaft", price:"5,00€" },
    { name:"Maracujasaft", price:"4,00€" },
    { name:"Weitere Säfte (0,2 L)", price:"3,80€", desc:"Apfel / Ananas / Maracuja" },
  ]},
  { id:"brunch", label:"Brunch", items:[
    { name:"Bonjour Pariser Brunch", price:"14,90€", desc:"Rührei mit Kräutern, Croissant, Käse, Geflügel Bacon, Butter, Konfitüre inkl. Kaffee" },
    { name:"Petit Déjeuner", price:"14,90€", desc:"Croissant, Butter & Marmelade + Kaffee" },
    { name:"Orientalisches Frühstück zum Verlieben", price:"15,90€", desc:"Käsevarianten, hausgemachte Frischkäsevariationen, hausgemachte Marmelade, Tomaten- & Gurkenscheiben, Butter, Oliven, Fladenbrot, Auswahl: Sucuk, Rührei oder Menemen" },
    { name:"Le Brunch Burger", price:"11,90€", desc:"Brioche Burger, Geflügel Bacon, Käse, Avocado, Tomate, Salat & Mayonnaise" },
    { name:"Simit Deluxe", price:"9,90€", desc:"Knuspriger Sesamring mit geschmolzenem Käse, getoppt mit Spiegelei. Serviert mit Gurke, Tomate & Käse." },
    { name:"Panini Caprese", price:"10,90€", desc:"Geröstetes Paninibrot mit Basilikum-Pesto, Tomatenscheiben & geschmolzenem Käse, dazu Beilagensalat" },
  ]},
  { id:"brunch_extras", label:"Brunch Extras", items:[
    { name:"Menemen", price:"9,50€" },
    { name:"Sucuk", price:"6,50€" },
    { name:"Omlet mit Gemüse", price:"8,50€" },
    { name:"Omlet mit Käse", price:"6,50€" },
  ]},
  { id:"bagels", label:"Bagels", items:[
    { name:"Bagel Benedict", price:"15,90€", desc:"Bärlauch-Frischkäse, Spiegelei & Geflügelbacon (+ Beilagensalat)" },
    { name:"Bella Verde", price:"13,90€", desc:"Grillgemüse, hausgemachte Paprikacreme, Kirschtomaten, Rucola (+ Beilagensalat)" },
    { name:"Bärlauch Sunrise", price:"12,90€", desc:"Räucherlachs-Frischkäse, Avocado, Spiegelei & cremige Hollandaise (+ Beilagensalat)" },
    { name:"Geflügel Bagel", price:"15,90€", desc:"Hähnchenfillet, hausgemachte Dattel- & Currycreme, Rucola (+ Beilagensalat)" },
  ]},
  { id:"stullen", label:"Stullen", items:[
    { name:"Stullen Mediterrane – Ziegenkäse", price:"14,50€", desc:"Frischkäse, Avocado, Spiegelei, Sauce Hollandaise, Beilagensalat" },
    { name:"Stullen Verde", price:"15,90€", desc:"Avocado, Rührei, Tomaten, Petersilie, Beilagensalat" },
    { name:"Stullen Benedict Deluxe", price:"13,50€", desc:"Ziegenkäse, gegrilltes Gemüse, Kirschtomaten, Beilagensalat" },
  ]},
  { id:"extras", label:"Extras (Bagel/Stulle)", items:[
    { name:"Räucherlachs", price:"2,00€" },
    { name:"Geflügel Bacon", price:"3,50€" },
    { name:"Extra Sucuk", price:"3,00€" },
    { name:"Grillgemüse (Zucchini, Paprika, Aubergine)", price:"2,50€" },
    { name:"Spiegelei", price:"3,50€" },
    { name:"Avocado", price:"4,00€" },
  ]},
  { id:"detox", label:"Detox Wasser", items:[
    { name:"Detox Wasser (0,4 L)", price:"5,50€", desc:"Gurke, Limette, Minze, Wasser" },
    { name:"Detox Wasser Refresher (0,4 L)", price:"5,50€", desc:"Basilikum, Orange, Salatgurke, Wasser" },
  ]},
  { id:"signature", label:"Signature Drinks (alkoholfrei)", items:[
    { name:"Holunder Zitronen Limonade", price:"6,50€", desc:"Holunderblütensirup, Zitronenlimonade, Wasser" },
    { name:"Lavendel Zitrone Limonade", price:"6,50€", desc:"Lavendelsirup, Zitronenlimonade, Wasser" },
    { name:"Moskito", price:"8,90€", desc:"Minze, Limette, brauner Rohrzucker, Ginger Ale" },
    { name:"Bora Bora", price:"8,90€", desc:"Marakujasaft, Ananassaft, Zitronensaft, Grenadine" },
    { name:"Blue Dream", price:"8,90€", desc:"Blue Curacao, Sirup, Limette, Zitronenlimonade" },
    { name:"Pink Punch", price:"8,90€", desc:"Dragonfruit, Limette, Minze, Wildberry" },
    { name:"London Mule (alkoholfrei)", price:"12,00€", desc:"Gin, Limettensaft, Ginger Beer" },
  ]},
];

const $ = (sel, parent=document) => parent.querySelector(sel);

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function pickRecommendations(){
  const picks = [
    { cat: "Tee & Matcha", name: "Iced Mango Matcha", price: "7,50€" },
    { cat: "Pancakes", name: "Lotus Pancake", price: "13,90€" },
    { cat: "Bagels", name: "Bagel Benedict", price: "15,90€" },
    { cat: "Signature", name: "Moskito", price: "8,90€" },
  ];
  const ul = $("#recommendations");
  if (!ul) return;
  ul.innerHTML = "";
  picks.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<div><div class="name">${escapeHtml(p.name)}</div><div class="meta">${escapeHtml(p.cat)}</div></div><div class="price">${escapeHtml(p.price)}</div>`;
    ul.appendChild(li);
  });
}

function renderAddons(){
  const wrap = $("#addons");
  if (!wrap) return;
  wrap.innerHTML = "";
  ADDONS.forEach(a => {
    const el = document.createElement("div");
    el.className = "addon";
    el.innerHTML = `<b>${escapeHtml(a.name)}</b><span>${escapeHtml(a.price)}</span>`;
    wrap.appendChild(el);
  });
}

function renderHours(){
  const wrap = $("#hours");
  if (!wrap) return;
  wrap.innerHTML = "";
  OPENING_HOURS.forEach(h => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<b>${escapeHtml(h.day)}</b><span>${escapeHtml(h.hours)}</span>`;
    wrap.appendChild(row);
  });
}

function renderMenuStatic(){
  const wrap = $("#menuStatic");
  if (!wrap) return;
  wrap.innerHTML = "";

  MENU.forEach(cat => {
    const catEl = document.createElement("section");
    catEl.className = "menu-cat";
    catEl.id = `cat-${cat.id}`;

    catEl.innerHTML = `
      <div class="menu-cat__head">
        <h3 class="menu-cat__title">${escapeHtml(cat.label)}</h3>
      </div>
      <div class="menu-cat__grid"></div>
    `;

    const grid = catEl.querySelector(".menu-cat__grid");

    cat.items.forEach(it => {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
        <div class="item__top">
          <div class="item__name">${escapeHtml(it.name)}</div>
          <div class="item__price">${escapeHtml(it.price || "")}</div>
        </div>
        ${it.desc ? `<div class="item__desc">${escapeHtml(it.desc)}</div>` : ""}
      `;
      grid.appendChild(item);
    });

    wrap.appendChild(catEl);
  });
}

function setupScrollTop(){
  const btn = $("#scrollTop");
  if (!btn) return;
  btn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

function showReservationError(msg){
  const el = $("#reservationError");
  if (!el) return;
  el.textContent = msg || "";
  el.hidden = !msg;
}

function setupReservationForm(){
  const form = $("#reservationForm");
  if (!form) return;

  const saveBtn = $("#saveDraft");
  const tablesInput = form.elements["tables"];
  const KEY = "lpc_reservation_draft_v1";

  const draft = localStorage.getItem(KEY);
  if (draft) {
    try {
      const data = JSON.parse(draft);
      for (const [k,v] of Object.entries(data)) {
        const el = form.elements[k];
        if (el) el.value = v;
      }
    } catch {}
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const data = Object.fromEntries(new FormData(form).entries());
      localStorage.setItem(KEY, JSON.stringify(data));
      saveBtn.textContent = "Gespeichert ✓";
      setTimeout(()=> saveBtn.textContent = "Entwurf speichern", 1400);
    });
  }

  if (tablesInput) {
    tablesInput.addEventListener("input", () => {
      showReservationError("");
      const n = Number(tablesInput.value || 0);
      if (!Number.isFinite(n)) return;
      if (n > MAX_TABLES) tablesInput.value = String(MAX_TABLES);
      if (n < 1) tablesInput.value = "1";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showReservationError("");

    const data = Object.fromEntries(new FormData(form).entries());
    const tables = Number(data.tables);

    if (!Number.isFinite(tables) || tables < 1) {
      showReservationError("Bitte gib eine gültige Anzahl an Tischen ein (mindestens 1).");
      return;
    }
    if (tables > MAX_TABLES) {
      showReservationError(`Maximal ${MAX_TABLES} Tische möglich.`);
      return;
    }

    // Zusätzliche Regeln: Mittwoch (Ruhetag) + Uhrzeit 10:30–16:30
    if (!data.date) {
      showReservationError("Bitte wähle ein Datum.");
      return;
    }
    if (!data.time) {
      showReservationError("Bitte wähle eine Uhrzeit.");
      return;
    }
    const dt = parseISODateLocal(String(data.date));
    if (!dt) {
      showReservationError("Ungültiges Datum. Bitte erneut auswählen.");
      return;
    }
    const day = dt.getDay(); // 0=So ... 3=Mi
    if (day === 3) {
      showReservationError("Mittwoch ist unser Ruhetag. Bitte wähle einen anderen Tag.");
      return;
    }
    const minM = timeToMinutes("10:30");
    const maxM = timeToMinutes("16:30");
    const tM = timeToMinutes(String(data.time));
    if (!Number.isFinite(tM) || tM < minM || tM > maxM) {
      showReservationError("Reservierungen sind nur zwischen 10:30 und 16:30 Uhr möglich.");
      return;
    }

    // Time-Input zur Sicherheit hart setzen (falls Browser/Autofill spinnt)
    const timeEl = form.elements["time"]; 
    if (timeEl) {
      timeEl.min = "10:30";
      timeEl.max = "16:30";
      timeEl.step = "1800";
    }

    const lines = [
      `Name: ${data.name}`,
      `Personen: ${data.people}`,
      `Tische: ${tables}`,
      `Datum: ${data.date}`,
      `Uhrzeit: ${data.time}`,
      data.phone ? `Telefon: ${data.phone}` : null,
      data.email ? `E-Mail: ${data.email}` : null,
      data.note ? `Nachricht: ${data.note}` : null,
      "",
      `Hinweis: Die Reservierung gilt für ${RESERVATION_DURATION_MIN} Minuten (1,5 Stunden).`,
      "Bitte bestätigen Sie die Reservierung per Antwort.",
    ].filter(Boolean);

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sende …";
    }

    const params = {
      name: data.name,
      people: data.people,
      tables: String(tables),
      date: data.date,
      time: data.time,
      phone: data.phone || "-",
      email: data.email || "-",
      note: data.note || "-",
    };

    // EmailJS sendet direkt – kein Mail-Client nötig
    if (typeof window.emailjs === "undefined" || typeof window.emailjs.send !== "function") {
      showReservationError("E-Mail-Service konnte nicht geladen werden (AdBlock/Tracking-Schutz?). Bitte deaktivieren oder später erneut versuchen.");
      return;
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
      .then(() => {
        showReservationError("Reservierung wurde gesendet ✓");
        localStorage.removeItem(KEY);
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS send failed:", err);
        showReservationError("Senden fehlgeschlagen. Bitte später erneut versuchen.");
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Reservierung per E-Mail senden";
        }
      });
  });
}



function setupMobileMenu(){
  const header = document.querySelector(".header");
  const btn = document.querySelector("#navToggle");
  const nav = document.querySelector("#mainNav");
  if (!header || !btn || !nav) return;

  const close = () => {
    header.classList.remove("nav-open");
    btn.setAttribute("aria-expanded","false");
    btn.setAttribute("aria-label","Menü öffnen");
  };
  const open = () => {
    header.classList.add("nav-open");
    btn.setAttribute("aria-expanded","true");
    btn.setAttribute("aria-label","Menü schließen");
  };
  const toggle = () => (header.classList.contains("nav-open") ? close() : open());

  btn.addEventListener("click", toggle);

  // Beim Klick auf einen Link wieder schließen
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  // Wenn man größer als Mobile wird: Menü zurücksetzen
  const mq = window.matchMedia("(max-width: 920px)");
  const onChange = () => { if (!mq.matches) close(); };
  mq.addEventListener?.("change", onChange);
  window.addEventListener("resize", onChange);

  // Klick außerhalb schließt das Menü
  document.addEventListener("click", (e) => {
    if (!header.classList.contains("nav-open")) return;
    if (btn.contains(e.target) || nav.contains(e.target)) return;
    close();
  });
}

function setupMobileFriendlyMenu(){
  const mql = window.matchMedia("(max-width: 920px)");
  const toggleBtn = document.querySelector("#menuToggle");
  const menuWrap = document.querySelector("#menuWrap");
  const menuStatic = document.querySelector("#menuStatic");

  if (!toggleBtn || !menuWrap) return;

  function syncState(){
    const isMobile = mql.matches;
    if (isMobile){
      toggleBtn.hidden = false;
      if (!toggleBtn.dataset.bound){
        toggleBtn.addEventListener("click", () => {
          const collapsed = menuWrap.classList.toggle("is-collapsed");
          toggleBtn.textContent = collapsed ? "Menü anzeigen" : "Menü schließen";
          toggleBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
          if (!collapsed){
            // nach dem Öffnen kurz ins Menü scrollen
            menuWrap.scrollIntoView({behavior:"smooth", block:"start"});
          }
        });
        toggleBtn.dataset.bound = "1";
      }

      if (!menuWrap.dataset.initedMobile){
        // standard: eingeklappt, damit man nicht endlos scrollen muss
        menuWrap.classList.add("is-collapsed");
        toggleBtn.textContent = "Menü anzeigen";
        toggleBtn.setAttribute("aria-expanded", "false");
        menuWrap.dataset.initedMobile = "1";
      }
    } else {
      // Desktop: immer sichtbar
      toggleBtn.hidden = true;
      menuWrap.classList.remove("is-collapsed");
      toggleBtn.textContent = "Menü anzeigen";
      toggleBtn.setAttribute("aria-expanded", "true");

      // Desktop: Kategorien offen
      if (menuStatic){
        menuStatic.querySelectorAll(".menu-cat").forEach(el => el.classList.add("is-open"));
      }
    }
  }

  // Accordion per Event Delegation (funktioniert auch nach Re-Render)
  if (menuStatic && !menuStatic.dataset.bound){
    menuStatic.addEventListener("click", (e) => {
      if (!mql.matches) return;
      const head = e.target.closest(".menu-cat__head");
      if (!head) return;
      const cat = head.closest(".menu-cat");
      if (!cat) return;
      cat.classList.toggle("is-open");
    });
    menuStatic.dataset.bound = "1";
  }

  // initial + on resize
  syncState();
  if (mql.addEventListener){
    mql.addEventListener("change", syncState);
  } else {
    // Safari fallback
    mql.addListener(syncState);
  }
}


function setupYear(){
  const el = $("#year");
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
}

function init(){
  // EmailJS initialisieren (für GitHub Pages)
  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  pickRecommendations();
  renderMenuStatic();
  renderAddons();
  renderHours();
  setupScrollTop();
  setupReservationForm();
  setupYear();
      setupMobileMenu();
  setupMobileFriendlyMenu();
}

document.addEventListener("DOMContentLoaded", init);
