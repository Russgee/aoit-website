// ==== imports ======
const ProgressBar = require('progressbar.js')

const menuToggle = document.querySelector("#menu");
const mainMenu = document.querySelector(".nav ul");
const nav = document.querySelector(".nav");
const navItemContainer = document.querySelector("#nav-item-container");

menuToggle.addEventListener("click", function() {
    mainMenu.classList.toggle("hidden");
    nav.classList.toggle("bg-aoit-700");
    nav.classList.toggle("h-full");

    navItemContainer.classList.toggle("text-white");
})

// progress bar code 

var grad = new ProgressBar.Circle("#grad-rate", {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#7EE6E5', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
  });
  grad.text.style.fontFamily = 'Inter, sans-serif';
  grad.text.style.fontSize = '2rem';
  grad.text.style.color = 'white';
  grad.text.style.fontWeight = 'bold';
  
  grad.animate(0.9);

  var college = new ProgressBar.Circle("#college-rate", {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#7EE6E5', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
  });

  college.text.style.fontFamily = 'Inter, sans-serif';
  college.text.style.fontSize = '2rem';
  college.text.style.color = 'white';
  college.text.style.fontWeight = 'bold';
  
  college.animate(0.9);

  var safety = new ProgressBar.Circle("#safety-rate", {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#7EE6E5', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
  });

  safety.animate(0.9);

  safety.text.style.fontFamily = 'Inter, sans-serif';
  safety.text.style.fontSize = '2rem';
  safety.text.style.color = 'white';
  safety.text.style.fontWeight = 'bold';
  
  // === mapbox code ===