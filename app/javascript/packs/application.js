document.addEventListener('turbolinks:load', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {
    hover: true
  };
  var instances = M.Dropdown.init(elems, options);

  particlesJS.load(
    'particles-js',
    'assets/javascript/particles.json',
    function() {
      console.log('callback - particles.js config loaded');
    }
  );
});
