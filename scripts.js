var sideBarFlag = true;
var isPcSize = window.matchMedia("(min-width: 800px)")
var navBarSize = 33;

var expProHtml = '\
    <h2>Expérience Profesionnelle</h2>\
    <h4>2021 - 2022 | Consultant | Amaris Consulting</h4>\
    <h5>Gestion de l\'application EISEC pour Euro-Information | Développement en Java et PowerBuilder</h5>\
    <p>- Prise en charge et résolution de tickets d\'incidents</p>\
    <p>- Développement, test et livraisons de correctifs et d\'évolutions de l\'application<p>\
    <p>- Création/Modification de scripts SQL/PLSQL <p>\
    <p>- Gestion de l\'arbre de décision de l\'octroi</p>\
    ';

var formationsHtml = '\
<h2>Formation</h2>\
<h4>2019 | Formation Développeur Java EE - Afpa et Aston</h4>\
<h5>Formation de 4 mois au développement Java EE</h5>';

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

loadContentCloseNav('expPro');

if (isPcSize){ 
  document.getElementById("navBtn").style.display = "none"; 
  navBarSize = 15;
  openCloseNav();
}


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

  function loadContent(part) {
    var partToLoad ='';
    switch (part) {
      case 'expPro':
        partToLoad = expProHtml
        break;
      case 'formations':
        partToLoad = formationsHtml
        break;
      case 'competences':
        partToLoad = competencesHtml
        break;
      case 'logiciels':
        partToLoad = logicielsHtml
      break;
      case 'contact':
        partToLoad = contactHtml
      break;
    }
    document.getElementById("content").innerHTML = partToLoad;
}

function loadContentCloseNav(part) {
  loadContent(part);
  openCloseNav();
}

