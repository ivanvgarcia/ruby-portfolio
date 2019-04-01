document.addEventListener('turbolinks:load', function() {
  console.log('ok');
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {
    hover: true
  };
  var instances = M.Dropdown.init(elems, options);

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
});
