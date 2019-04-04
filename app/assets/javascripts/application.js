// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require jquery-ui
//= require html.sortable
//= require particles.js
//= require materialize
//= require turbolinks

//= require_tree .

document.addEventListener('turbolinks:load', function() {
  var dropdown = document.querySelectorAll('.dropdown-trigger');
  var sideNav = document.querySelectorAll('.sidenav');

  var options = {
    hover: true
  };

  var dropdownInstances = M.Dropdown.init(dropdown, options);
  var sidenavInstances = M.Sidenav.init(sideNav);

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 260,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 150,
          size: 0,
          duration: 1,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 20
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
});

document.addEventListener('turbolinks:before-render', function() {
  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.getInstance(elem);
  if (instance) {
    instance.destroy();
  }
});
