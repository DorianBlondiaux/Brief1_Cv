var sideBarFlag = true;
var isPcSize = window.matchMedia("(min-width: 800px)").matches;
var navBarSize = 33;
var lastId = "";
var ratio = 1.2;

console.log(window.innerWidth);
console.log(isPcSize);

var expProHtml = '\
    <h2>Expérience Profesionnelle</h2>\
    <h4>2021 - 2022 | Consultant | Amaris Consulting</h4>\
    <h5>Gestion de l\'application EISEC pour Euro-Information | Développement en Java et PowerBuilder</h5>\
    <p>- Prise en charge et résolution de tickets d\'incidents</p>\
    <p>- Développement, test et livraisons de correctifs et d\'évolutions de l\'application<p>\
    <p>- Création/Modification de scripts SQL/PLSQL </p>\
    <p>- Gestion de l\'arbre de décision de l\'octroi</p>\
    <h4>2019 - 2021 | Développeur Junior Java EE| Open</h4>\
    <h5>Gestion de l’application conseiller Crédit du Nord :</h5>\
    <p>- Prise en charge et résolution de tickets d’incidents</p>\
    <p>- Développement, tests et livraisons de correctifs et d’évolutions de l’application</p>\
    <p>- Récupération, analyses de logs et analyses de code</p>\
    <p>- Rédaction de  devis, fiches de tests et conceptions techniques</p>\
    <h5>2018 (3 mois) | Analyste Développeur | Schaeffer Productique</h5>\
    <p>- Programmation en Progress 4GL sur leur ERP Textile « Solin »</p>\
    <p>- Modifications en base de données via  Progress  4GL</p>\
    <p>- Assistance utilisateurs : Débug de programmes, aide en ligne, connexion bureau à distance, configuration de boites mail</p>\
    ';

var formationsHtml = '\
<h2>Formation</h2>\
<h4>2019 | Formation Développeur Java EE - Afpa et Aston</h4>\
<h5>Formation de 4 mois au développement Java EE</h5>\
<p>Réalisation d’un projet de fin de formation nommé « Leveltek » développé avec Spring Boot et Angular,\
 qui permet à un développeur d’évaluer son niveau et à des Rh de rechercher ces derniers avec des compétences précises.</p>\
<h5>2016 – BTS SIO – Lycée Gaston Berger LILLE</h5>\
<p>Bts informatique option SLAM (Spécialisé en développement)  Langages étudiés : Java, Php, C#, Python, Javascript, Html, Css</p>\
<h5>2014 – BAC S – Lycée Sacré Cœur Tourcoing</h5>\
';

var competencesHtml = '\
<h2>Compétences</h2>\
<ul>\
  <li>Java</li>\
  <li>PHP</li>\
  <li>Javascript</li>\
  <li>HTML, CSS</li>\
  <li>SQLP/PLSQL</li>\
  <li>Java EE</li>\
  <li>Spring Boot</li>\
  <li>Angular</li>\
  <li>Git</li>\
</ul>\
';

var logicielsHtml = '\
<h2>Logiciels Utilisés</h2>\
<ul>\
  <li>Eclipse</li>\
  <li>Microsoft Visual Studio Code</li>\
  <li>Netbeans</li>\
  <li>MySQLWorkBench</li>\
  <li>SpringToolSuite</li>\
  <li>WinDev</li>\
</ul>\
';

var contactHtml = '\
<h2>Contact</h2>\
<div class="grid-container">\
    <img class="item1" src="images/phone.png" alt="Telephone" width="45" height="45"/>\
    <a class="item2">TELEPHONE</a>\
    <a class="item3">06 51 61 98</a>\
  </div>\
<div class="grid-container">\
    <img class="item1" src="images/mail.png" alt="Email" width="45" height="45"/>\
    <a class="item2">EMAIL</a>\
    <a class="item3">blondiaux.dorian@outlook.fr</a>\
</div>\
<div class="grid-container">\
    <img class="item1" src="images/adress.png" alt="Email" width="45" height="45"/>\
    <a class="item2">ADRESSE</a>\
    <a class="item3">3 Allée de sorbiers 59 560 COMINES</a>\
</div>\
';

if (isPcSize){ 
  document.getElementById("navBtn").style.visibility = "hidden"; 
  navBarSize = 15;
  openCloseNav();
  changeFontSize(document.body);
}

loadContentCloseNav('expPro');

  function openCloseNav(){
    if(sideBarFlag){
      document.getElementById("leftNavbar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }else{
      document.getElementById("leftNavbar").style.width = navBarSize + "%";
      document.getElementById("main").style.marginLeft = navBarSize + "%";
    }
    sideBarFlag = !sideBarFlag;
  }

  function loadContent(id) {
    var partToLoad ='';
    
    // Gestion du changement de couleur des éléments  de la sidebar quand séléctionnés
    sidebarSelection(id);
    
    //Chargement html main
    switch (true) {
      case id.includes('expPro'):
        partToLoad = expProHtml
        break;
      case id.includes('formations'):
        partToLoad = formationsHtml
        break;
      case id.includes('competences'):
        partToLoad = competencesHtml
        break;
      case id.includes('logiciels'):
        partToLoad = logicielsHtml
      break;
      case id.includes('contact'):
        partToLoad = contactHtml
      break;
    }
    document.getElementById("content").innerHTML = partToLoad;

    //Ajustement taille police 
    if(!id.includes('expPro') && !id.includes('formations')){
      ratio = 0.9;
      changeFontSize(document.getElementById("content"));
    }
    lastId = id;
}

function loadContentCloseNav(id) {
  loadContent(id);
  openCloseNav();
}

function sidebarSelection(id){
  var bisMenu = id;
  if(id != lastId){
    if(id.includes('2')){
      bisMenu = bisMenu.substring(0, id.length - 1 );
    }else{
      bisMenu += '2';
    }

    document.getElementById(id).style.color = "white";
    document.getElementById(bisMenu).style.color = "white";
      
    if(document.getElementById(lastId)){
      var bisLastMenu = lastId;
      if(lastId.includes('2')){
        bisLastMenu = bisLastMenu.substring(0, lastId.length - 1 );
      }else{
        bisLastMenu += '2';
      }

      document.getElementById(lastId).style.color = "#999";
      document.getElementById(bisLastMenu).style.color = "#999";
    }
  }
}

function changeFontSize(element){
    var originalSize = element.getAttribute("data-orgFontSize");
    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    if (!originalSize) {
        originalSize = currentSize;
        element.setAttribute("data-orgFontSize", currentSize);
    }

    if (originalSize) {    
        const size = parseFloat(originalSize.replace("px",""));
        element.style.fontSize = (size * ratio)  + "px";
        for(var i=0; i < element.children.length; i++){
            changeFontSize(element.children[i]);
        }
    }
}

