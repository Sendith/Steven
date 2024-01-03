import $ from 'jquery';

$(document).ready(function () {
  // Configura la posición a partir de la cual deseas que el scroll suba al principio
  var puntoScrollSubida = 3500;

  // Agrega un evento de scroll al documento
  $(document).on("scroll", function () {
    // Obtiene la posición actual del scroll
    var desplazamientoActual = $(document).scrollTop();
    let navegadors=$('.h2__Steven')
    let linkedin=$('.h2__linkedin')
    let whats=$('.h2__whats')
    let github=$('.h2__github')
    let dos=$('._dos')
    if (desplazamientoActual > puntoScrollSubida) {
      // Si sí, anima el scroll hacia arriba
      navegadors.css("color", "white");
      linkedin.css("color", "white");
      whats.css("color", "white");
      github.css("color", "white");
      dos.css("color", "white");
    }

    if (desplazamientoActual < puntoScrollSubida) {
      // Si sí, anima el scroll hacia arriba
      navegadors.css("color", "black");
      linkedin.css("color", "black");
      whats.css("color", "black");
      github.css("color", "black");
      dos.css("color", "black");
    }
  });
});
//Funciona al hacerle al hover
$(document).ready(function() {
    var escondidos = $(".escondido");
    $("#pro1").mouseover(function() {
      if (escondidos.css("display") == "none" && (escondidos.css("animation-play-state") == "paused" || escondidos.css("animation-play-state") == "running")) {
        $("#pro1").off("mouseleave");
        escondidos.css("display", "block");
        escondidos.css("animation-name", "apareciendo");
        escondidos.css("animation-play-state", "running");
        escondidos.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
          $("#pro1").on("mouseleave");
        });
      }
    });


    $("#pro1").mouseout(function() {
      if (escondidos.css("animation-name") == "apareciendo" && escondidos.css("animation-play-state") == "running") {
        escondidos.css("animation-name", "bajando");
        escondidos.css("animation-play-state", "running");
        escondidos.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
          escondidos.css("display", "none");
        });
      }
    });
    


    $(".escondido").click(function() {
    $("#pro1").on("mouseover");
    $("#pro1").on("mouseout");
    var escondidos = $(".escondido");
    escondidos.css("margin-top", "300px");/**/
    escondidos.css("animation-name", "desapareciendo");

  

    escondidos.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
      escondidos.css("display", "none");
      escondidos.css("animation-play-state", "paused");
      escondidos.css("margin-top", "auto");
      escondidos.css('transform', 'rotate(25deg)');
    return false; 
      });
    });

    $("#pro1").click(function() {
      var escondidos = $(".escondido");
      if (escondidos.css("display") == "block" && escondidos.css("animation-play-state") == "running") {
        escondidos.css("display", "block");
        escondidos.css('transform', 'rotate(0deg)');
        escondidos.css("animation-name", "subiendo");
        escondidos.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        escondidos.css("margin-top", "-300px");/**/
        });
      }
    });
  });


  export default $