/* =====================================================================
   HER REDIGERER DU BUTIKKEN. Resten av siden (index.html) trenger du ikke røre.

   BUTIKK: e-posten bestillinger sendes til, og fast fraktpris i kr.

   PRODUKTER: ett plagg per blokk { ... }. Husk komma mellom blokkene.
     id        Unikt nummer. Høyest nummer vises først ved «Nyeste først».
               Nytt plagg? Bruk neste ledige nummer (nå 26).
     navn      Overskriften i butikken.
     kat       "Herre" eller "Dame".
     type      jakke | genser | hettegenser | skjorte | tskjorte | bukse | shorts | sko | kjole | skjort
               (typen styrer filteret, og tegningen hvis bildet mangler)
     str       Størrelse, for eksempel "M" eller "W32". Tom ("") hvis du ikke vet.
     merke     Merke. Tom ("") hvis du ikke vet.
     tilstand  For eksempel "Som ny", "Meget pen", "Pen" eller "Brukt med sjel". Tom hvis du ikke vet.
     pris      Pris i hele kroner, for eksempel 350. null = «Pris kommer» (kan ikke bestilles ennå).
     mal       Mål, for eksempel "Bryst 100 cm, lengde 70 cm". Tom hvis du ikke har målt.
     tekst     Kort beskrivelse. Skriv gjerne om slitasje og feil.
     bilder    Liste med bildefiler i mappen «bilder». Første bilde er forsidebildet.
     solgt     Skriv solgt:true på plagget når det er solgt (valgfritt).
   ===================================================================== */

const BUTIKK = {
  epost: "Joakimmk02@gmail.com",   // hit sendes bestillingene
  frakt: 69                          // fast fraktpris i kr
};

const PRODUKTER = [
  { id: 25, navn: "Alpha Industries bomberjakke", kat: "Herre", type: "jakke", str: "M", merke: "Alpha Industries", tilstand: "Lite brukt", pris: "500", mal: "",
    tekst: "Svart bomberjakke med pelskant på hetten, patcher på ermet og rød tag på lommen.",
    bilder: ["bilder/alpha-bomber-1.jpg", "bilder/alpha-bomber-2.jpg", "bilder/alpha-bomber-3.jpg"] },

  { id: 24, navn: "Levi's hettegenser, svart", kat: "Herre", type: "hettegenser", str: "M", merke: "Levi's", tilstand: "Lite brukt", pris: 200, mal: "",
    tekst: "Svart hettegenser med rød Levi's-logo på brystet og stor lomme foran.",
    bilder: ["bilder/levis-hettegenser-svart-1.jpg"] },

  { id: 23, navn: "Jean Paul genser med glidelås, hvit", kat: "Herre", type: "genser", str: "S", merke: "Jean Paul", tilstand: "Som ny", pris: solgt, mal: "",
    tekst: "Hvit kabelstrikket genser med glidelås i halsen.",
    bilder: ["bilder/jeanpaul-zipgenser-1.jpg", "bilder/jeanpaul-zipgenser-2.jpg"] },

  { id: 22, navn: "Høstjakke", kat: "Herre", type: "jakke", str: "M", merke: "Henry choice", tilstand: "Som ny!", pris: solgt, mal: "",
    tekst: "Marineblå parkas med lodden krage, rutete fôr og store lommer foran.",
    bilder: ["bilder/parkas-1.jpg", "bilder/parkas-2.jpg"] },

  { id: 21, navn: "Pull&Bear bomberjakke", kat: "Herre", type: "jakke", str: "M", merke: "Pull&Bear", tilstand: "Lite brukt!", pris: 150, mal: "",
    tekst: "Svart bomberjakke med rødbrunt fôr og lomme med glidelås på ermet.",
    bilder: ["bilder/pullbear-bomber-1.jpg", "bilder/pullbear-bomber-2.jpg"] },

  { id: 20, navn: "Hollister hettegenser, rød", kat: "Herre", type: "hettegenser", str: "M", merke: "Hollister", tilstand: "", pris: 170, mal: "",
    tekst: "Rød og hvit hettegenser med liten måke-logo.",
    bilder: ["bilder/hollister-hettegenser-rod-1.jpg", "bilder/hollister-hettegenser-rod-2.jpg"] },

  { id: 19, navn: "Levi's hettegenser, grå", kat: "Herre", type: "hettegenser", str: "M", merke: "Levi's", tilstand: "", pris: null, mal: "",
    tekst: "Grå hettegenser i relaxed fit med rød Levi's-logo på brystet.",
    bilder: ["bilder/levis-hettegenser-gra-1.jpg", "bilder/levis-hettegenser-gra-2.jpg"] },

  { id: 18, navn: "BOSS genser, hvit vaffelstrikk", kat: "Herre", type: "genser", str: "", merke: "BOSS", tilstand: "", pris: null, mal: "",
    tekst: "Hvit genser i vaffelstrikk med liten BOSS-logo.",
    bilder: ["bilder/boss-genser-1.jpg"] },

  { id: 17, navn: "Superdry T-skjorte, hvit", kat: "Herre", type: "tskjorte", str: "", merke: "Superdry", tilstand: "", pris: null, mal: "",
    tekst: "Hvit T-skjorte med stor Superdry-logo i hevet stoff.",
    bilder: ["bilder/superdry-tskjorte-1.jpg"] },

  { id: 16, navn: "Puma joggesko", kat: "Herre", type: "sko", str: "", merke: "Puma", tilstand: "", pris: null, mal: "",
    tekst: "Svarte joggesko med røde og hvite detaljer.",
    bilder: ["bilder/puma-sko-1.jpg"] },

  { id: 15, navn: "Zara skjorte, hvit", kat: "Herre", type: "skjorte", str: "M", merke: "Zara", tilstand: "Som ny", pris: null, mal: "",
    tekst: "Hvit skjorte med kinakrage i lett, krøllet stoff.",
    bilder: ["bilder/zara-skjorte-1.jpg"] },

  { id: 14, navn: "Stripete skjorte, blå og hvit", kat: "Herre", type: "skjorte", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Blå og hvit stripet skjorte.",
    bilder: ["bilder/stripete-skjorte-1.jpg"] },

  { id: 13, navn: "Jean Paul chinos, marine", kat: "Herre", type: "bukse", str: "M", merke: "Jean Paul", tilstand: "Som ny", pris: null, mal: "",
    tekst: "Marineblå chinos med liten trefarget detalj på lommen.",
    bilder: ["bilder/jeanpaul-chinos-1.jpg", "bilder/jeanpaul-chinos-2.jpg"] },

  { id: 12, navn: "Beige bukse", kat: "Herre", type: "bukse", str: "M", merke: "", tilstand: "Som ny", pris: null, mal: "",
    tekst: "Beige bukse med strikk i livet.",
    bilder: ["bilder/beige-bukse-1.jpg"] },

  { id: 11, navn: "Lyse bukser med strikk i livet", kat: "Herre", type: "bukse", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Lyse, luftige bukser med strikk i livet.",
    bilder: ["bilder/linbukse-1.jpg"] },

  { id: 10, navn: "Jean Paul shorts", kat: "Herre", type: "shorts", str: "M", merke: "Jean Paul", tilstand: "Som ny", pris: null, mal: "",
    tekst: "Mørke chinosshorts med liten trefarget detalj på lommen.",
    bilder: ["bilder/jeanpaul-shorts-1.jpg", "bilder/jeanpaul-shorts-2.jpg"] },

  { id: 9, navn: "Grå stripete shorts", kat: "Herre", type: "shorts", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Grå og hvit stripete shorts med snøring i livet.",
    bilder: ["bilder/gra-stripete-shorts-1.jpg"] },

  { id: 8, navn: "Blåmelerte shorts", kat: "Herre", type: "shorts", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Blåmelerte shorts med snøring.",
    bilder: ["bilder/bla-shorts-1.jpg"] },

  { id: 7, navn: "Hollister T-skjorte, turkis", kat: "Herre", type: "tskjorte", str: "", merke: "Hollister", tilstand: "", pris: null, mal: "",
    tekst: "Turkis T-skjorte med Hollister California-trykk på brystet.",
    bilder: ["bilder/hollister-tskjorte-turkis-1.jpg"] },

  { id: 6, navn: "Hollister T-skjorte, marine", kat: "Herre", type: "tskjorte", str: "", merke: "Hollister", tilstand: "", pris: null, mal: "",
    tekst: "Marineblå T-skjorte med liten måke-logo.",
    bilder: ["bilder/hollister-tskjorte-marine-1.jpg", "bilder/hollister-tskjorte-marine-2.jpg"] },

  { id: 5, navn: "Hollister T-skjorte, gråmelert", kat: "Herre", type: "tskjorte", str: "", merke: "Hollister", tilstand: "", pris: null, mal: "",
    tekst: "Gråmelert T-skjorte med liten måke-logo.",
    bilder: ["bilder/hollister-tskjorte-gra-1.jpg"] },

  { id: 4, navn: "H&M T-skjorte, svart ribbestrikk", kat: "Herre", type: "tskjorte", str: "", merke: "H&M", tilstand: "", pris: null, mal: "",
    tekst: "Svart T-skjorte i ribbestrikk.",
    bilder: ["bilder/hm-ribbe-tskjorte-1.jpg"] },

  { id: 3, navn: "T-skjorte med Tokyo-trykk", kat: "Herre", type: "tskjorte", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Hvit T-skjorte med stort trykk av fugler og blomster og teksten TOKYO.",
    bilder: ["bilder/tokyo-tskjorte-1.jpg"] },

  { id: 2, navn: "Beige kordfløyelsjakke", kat: "Herre", type: "jakke", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Beige jakke i kordfløyel med brystlommer og knapper.",
    bilder: ["bilder/kordfloyel-jakke-1.jpg"] },

  { id: 1, navn: "Grå jakke med norsk flagg", kat: "Herre", type: "jakke", str: "", merke: "", tilstand: "", pris: null, mal: "",
    tekst: "Grå jakke med glidelås og patch med norsk flagg på brystet.",
    bilder: ["bilder/flagg-jakke-1.jpg"] }
];
