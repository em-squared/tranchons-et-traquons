const start = [
  "dans une auberge",
  "dans un monastère",
  "dans un village en ruine",
  "au marché d'une grande cité",
  "à cheval dans une plaine",
  "en train d'escalader une montagne",
  "sur un navire",
  "chez une voyante",
  "en plein(e) tempête/blizzard/déluge",
  "à une fête populaire",
  "nettoient leurs affaires dans un lavoir",
  "dans une foule assistant à une exécution capitale",
  "dans un bordel",
  "dans une bibliothèque",
  "dans une forteresse",
  "chez un apothicaire",
];

const threat = [
  "d'une disparition d'un objet/d'un lieu/d'individus",
  "d'une vagues de crimes (vols, assassinats, rackets...)",
  "d'une découverte de ruines, d'un gisement d'or...",
  "d'une méprise sur l'identité des aventuriers",
  "d'escarmouches le long de la frontière",
  "d'une révolte/d'un soulèvement/d'une guerre civile",
  "d'un phénomène étrange (météorite, éclipse sans fin)",
  "d'un siège",
  "d'une menace/attaque directe contre les aventuriers",
  "de négociations difficiles (pays, guildes, cités...)",
  "d'une hallucinations/folie collective",
  "du départ d'une caravane/expédition/flotte",
  "d'un problème religieux : inquisition, messie...",
  "d'une épidémie",
  "de l'évasion d'individu(s) dangereux",
  "d'une invasion de mort-vivants",
];

const opposition = {
  who: [
    "des érudits/mages",
    "des nobles",
    "des brigands",
    "des cultistes",
    "des déserteurs",
    "des marchands",
    "un ancien dieu",
    "des mort-vivants",
    "des assassins",
    "une relique",
    "des soldats",
  ],
  what: [
    "hommes-serpents",
    "elfes",
    "humains",
    "drakkens",
    "nains",
    "sangrelins",
    "halflings",
    "visage-miroirs",
    "wolfens",
    "krislings",
    "d'origine inconnue",
  ],
};

const action = [
  "participer à un tournoi/un concours",
  "retrouver/voler/capturer un objet/un individu",
  "protéger un lieu",
  "conquérir/nettoyer un lieu",
  "aider/empêcher une alliance/des négociations",
  "explorer un lieu/territoire/plan inconnu",
  "escorter un objet/individu",
  "trouver l'identité des coupables",
  "découvrir les plans de l'adversaire",
  "gérer un commerce/un village/un convoi",
  "sauver/libérer une ou plusieurs personnes",
  "détruire/tuer un objet/un individu/un savoir...",
  "refermer/condamner un portail/un temple...",
  "s'échapper d'une prison/forteresse assiégée...",
  "négocier/s'allier avec un adversaire",
  "échapper à un groupe d'assassin, chasseurs...",
];

const complication = [
  "l'intervention des aventuriers doit rester secrète",
  "un traître se trouve parmi les alliés des PJs",
  "les aventuriers ont perdu la mémoire",
  "des innocents/ressources doivent être sacrifié(e)s",
  "le temps des aventuriers pour agir est compté",
  "les aventuriers sont suivis par un autre groupe",
  "les aventuriers ont changé de corps",
  "les aventuriers n'ont pas leur équipement",
  "les méchants sont les gentils et vice-versa",
  "une partie des PNJs sont des rêves/illusions",
  "les aventuriers sont maudits, empoisonnés...",
];

export { start, threat, opposition, action, complication };
