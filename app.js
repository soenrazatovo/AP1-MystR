let path = window.location.pathname;
let page = path.split("/").pop();

const popupWindow = document.getElementById("popup-window");
const closeButton = document.getElementById("close-button");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");

const links = document.querySelectorAll("#legal h3");

const innerHTMLs = [
  [
    "Mentions légales",
    "Dénomination sociale : Mystr \n Forme juridique : Société à responsabilité limitée (SARL) \n Capital social : 30 000 € \n Nombre d’associés : Trois \n Siège social : 18 Rue du Vieux Château, 78000 Versailles \n RCS : Versailles n° B 921 845 376 \n SIRET : 921 845 376 00019 \n Code APE : 93.29Z – Autres activités récréatives et de loisirs \n Numéro de TVA intracommunautaire : FR12 123456789 \n Directeur / Gérants de la publication : Leger Mathis \n Contact : contact@Mystr.fr \n \n Hébergeur : Netlify, Inc. \n Adresse : 2325 3rd Street, Suite 215, San Francisco, California 94107, United States \n Téléphone : +1 (415) 691-1573 \n L’ensemble des éléments présents sur ce site (textes, images, graphismes, logos, vidéos, icônes…) est la propriété exclusive de MystR, sauf mention contraire. \n Toute reproduction, distribution, modification ou utilisation, même partielle, est strictement interdite sans autorisation écrite. \n",
  ],
  [
    "Conditions Générales d’Utilisation",
    "1. Objet\nLes présentes CGU définissent les règles d’utilisation du site internet [Nom du site], destiné à présenter les activités, services et informations de l’entreprise.\n\n2. Acceptation\nEn naviguant sur le site, l’utilisateur accepte pleinement et sans réserve les présentes CGU. Si l’utilisateur n’adhère pas à ces conditions, il est invité à quitter le site.\n\n3. Accès au site\nLe site est accessible gratuitement à tout utilisateur disposant d’une connexion internet.\nL’éditeur se réserve le droit de suspendre ou de fermer l’accès au site pour maintenance ou mise à jour.\n\n4. Contenu\nLe site présente des informations générales sur l’entreprise et ses services.\nL’éditeur s’efforce de fournir des informations exactes mais ne peut garantir l’absence d’erreurs ou d’omissions.\nLe contenu est fourni à titre informatif et ne constitue pas un engagement contractuel.\n\n5. Propriété intellectuelle\nLes textes, images, logos et autres éléments présents sur le site sont protégés par le droit d’auteur et le droit des marques.\nToute reproduction ou utilisation non autorisée est interdite.\n\n6. Responsabilité\nL’éditeur ne peut être tenu responsable des dommages liés à l’utilisation du site ou à l’impossibilité d’y accéder.\nL’utilisateur est responsable de son matériel et de sa connexion internet.\n\n7. Liens externes\nLe site peut contenir des liens vers des sites tiers. L’éditeur n’est pas responsable du contenu de ces sites externes.\n\n8. Données personnelles\nLe site peut collecter des données personnelles (par exemple via un formulaire de contact).\nCes données sont utilisées uniquement pour répondre aux demandes des utilisateurs et ne sont pas transmises à des tiers sans consentement.\nL’utilisateur dispose d’un droit d’accès, de rectification et de suppression de ses données conformément au RGPD.\n\n9. Modification des CGU\nL’éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les nouvelles conditions s’appliquent dès leur mise en ligne.\n\n10. Droit applicable\nLes présentes CGU sont régies par le droit français. En cas de litige, compétence exclusive est attribuée aux tribunaux français.",
  ],
  [
    "Politique de confidentialité",
    "1. Collecte des données\nLe site mystresport.com peut collecter des données personnelles via :\n- Formulaire de contact (nom, prénom, adresse e-mail, téléphone).\n- Cookies de navigation (statistiques anonymes).\n\n2. Finalité\nLes données collectées sont utilisées uniquement pour :\n- Répondre aux demandes des utilisateurs.\n- Améliorer l’expérience de navigation.\n- Assurer le bon fonctionnement du site.\n\n3. Conservation\nLes données sont conservées pendant une durée maximale de [X mois/années] et uniquement pour les finalités mentionnées.\n\n4. Partage\nLes données ne sont jamais vendues ni transmises à des tiers, sauf obligation légale.\n\n5. Droits des utilisateurs\nConformément au RGPD, chaque utilisateur dispose de droits :\n- Droit d’accès, de rectification et de suppression de ses données.\n- Droit d’opposition au traitement.\n- Droit à la portabilité.\nPour exercer ces droits, l’utilisateur peut contacter l’éditeur à l’adresse suivante : conctact@mystr-esport.fr\n\n6. Cookies\nLe site utilise des cookies pour améliorer la navigation et réaliser des statistiques anonymes.\nL’utilisateur peut paramétrer son navigateur pour refuser les cookies.\n\n7. Sécurité\nL’éditeur met en œuvre des mesures techniques et organisationnelles pour protéger les données personnelles contre toute perte, accès non autorisé ou divulgation.",
  ],
  ["FAQ", "Retrouver notre FAQ sur https://mystr-faq.com"],
];
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    popupWindow.style.display = "block";
    popupTitle.innerText = innerHTMLs[i][0];
    popupText.innerText = innerHTMLs[i][1];
  });
}

closeButton.addEventListener("click", () => {
  popupWindow.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popupWindow) {
    popupWindow.style.display = "none";
  }
});

if (page === "index.html") {
  const smoke = document.querySelector(
    "main section:nth-child(1) img:nth-child(2)"
  );
  let degree = 0;

  function rotate() {
    step = 0.1;
    degree += step;
    if (degree > 360) {
      degree -= 360;
    }
    smoke.style.transform = "rotate(-" + degree + "deg)";
    setTimeout(rotate, 20);
  }

  rotate();
}

if (page === "roster.html" || page === "index.html") {
  const left_arrows = document.getElementsByClassName("left-arrow");
  const right_arrows = document.getElementsByClassName("right-arrow");
  const carousel = document.getElementsByClassName("carousel");

  for (let i = 0; i < carousel.length; i++) {
    left_arrows[i].addEventListener("click", () => {
      carousel[i].scrollBy({ top: 0, left: -300, behavior: "smooth" });
    });
    right_arrows[i].addEventListener("click", () => {
      carousel[i].scrollBy({ top: 0, left: 300, behavior: "smooth" });
    });
  }
}

if (page === "boutique.html") {
  const searchbar = document.querySelector("#searchbar input");
  const names = document.querySelectorAll(".article h2:nth-child(2)");
  console.log(names);
  searchbar.addEventListener("input", () => {
    for (let i = 0; i < names.length; i++) {
      if (
        names[i].innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
      ) {
        names[i].parentElement.style.display = "flex";
      } else {
        names[i].parentElement.style.display = "none";
      }
    }
  });

  const articles = document.querySelectorAll(".article");
  const article_img_orange = document.querySelectorAll(".article-image-1");
  const article_img_purple = document.querySelectorAll(".article-image-2");
  const article_color_orange = document.querySelectorAll(".article-color-1");
  const article_color_purple = document.querySelectorAll(".article-color-2");

  for(let i=0; i<articles.length; i++){
    article_color_orange[i].addEventListener("click", () => {
      article_img_orange[i].style.display = "block";
      article_img_purple[i].style.display = "none";
      articles[i].style.backgroundColor = "#FF8800";
    });
    article_color_purple[i].addEventListener("click", () => {
      article_img_orange[i].style.display = "none";
      article_img_purple[i].style.display = "block";
      articles[i].style.backgroundColor = "#7151A9";
    });
  }
}
