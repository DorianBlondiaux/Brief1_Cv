var expProHtml = '<div class="navBarChoix">\
    <h2>Expérience Profesionnelle</h2>\
    <h6>2021 - 2022 | Consultant | Amaris Consulting</h6>\
    <h7>Gestion de l\'application EISEC pour Euro-Information | Développement en Java et PowerBuilder</h7>\
    </div>';

var formationsHtml = '<div class="navBarChoix">\
<h2>Formation</h2>\
<h6>2019 | Formation Développeur Java EE - Afpa et Aston</h6>\
<h7>Formation de 4 mois au développement Java EE</h7>\
</div>';

load_content('expPro');

function openNav() {
    document.getElementById("leftNavbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("leftNavbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
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
    }

    document.getElementById("content").innerHTML = partToLoad;
}

