var sideBarFlag = false;

var expProHtml = '\
    <h2>Expérience Profesionnelle</h2>\
    <h4>2021 - 2022 | Consultant | Amaris Consulting</h4>\
    <h5>Gestion de l\'application EISEC pour Euro-Information | Développement en Java et PowerBuilder</h5>\
    <p>- Prise en charge et résolution de tickets d\'incidents</p>\
    <p>- Développement, test et livraisons de correctifs et d\'évolutions de l\'application<p>\
    <p>- Création/Modification de scripts SQL/PLSQL <p>\
    <p>- Gestion de l\'arbre de décision de l\'octroi</p>\
    </div>';

var formationsHtml = '\
<h2>Formation</h2>\
<h6>2019 | Formation Développeur Java EE - Afpa et Aston</h6>\
<h7>Formation de 4 mois au développement Java EE</h7>';

var competencesHtml = '\
<li>Java</li>\
<li>PHP</li>\
<li>Javascript</li>\
<li>HTML, CSS</li>\
<li>SQLP/PLSQL</li>\
<li>Java EE</li>\
<li>Spring Boot</li>\
<li>Angular</li>\
<li>Git</li>\
';

var logicielsHtml = '\
<li>Eclipse</li>\
<li>Microsoft Visual Studio Code</li>\
<li>Netbeans</li>\
<li>MySQLWorkBench</li>\
<li>SpringToolSuite</li>\
<li>WinDev</li>\
'
;

var contactHtml = '\
<a>TELEPHONE</a>\
<a>EMAIL</a>\
<a>ADRESSE</a>\
';

load_content('expPro');

  function openCloseNav(){
    if(sideBarFlag){
      document.getElementById("leftNavbar").style.width = "0";
    }else{
      document.getElementById("leftNavbar").style.width = "250px";
    }
    sideBarFlag = !sideBarFlag;
  }

  function load_content(part) {
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

