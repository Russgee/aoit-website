// ==== imports ======
const ProgressBar = require('progressbar.js')
const ics = require('ics')

const menuToggle = document.querySelector("#menu");
const mainMenu = document.querySelector(".nav ul");
const nav = document.querySelector(".nav");
const navItemContainer = document.querySelector("#nav-item-container");
const body = document.querySelector("body");

menuToggle.addEventListener("click", function() {
    mainMenu.classList.toggle("hidden");
    nav.classList.toggle("bg-aoit-700");
    nav.classList.toggle("h-full");
    body.classList.toggle("h-full");
    body.classList.toggle("overflow-hidden");

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

/* === TIME HANDLING CODE === */

function parseTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const currentDate = new Date();
  const parsedTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    parseInt(hours),
    parseInt(minutes)
  );
  return parsedTime;
}

function calculateDuration(startTime, endTime) {
  const durationMs = endTime - startTime;
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
  return { hours, minutes };
}

function calculateTimeDuration(start, end) {
  const startTime = parseTime(start);
  const endTime = parseTime(end);
  const duration = calculateDuration(startTime, endTime);
  return duration;
}

function separateDate(dateString) {
  const separatedArray = dateString.split('-');
  return separatedArray;
}

function replaceDashWithComma(dateArray) {
  const replacedArray = dateArray.map((element) => element.replace('-', ','));
  return replacedArray;
}

function separateDateWithComma(dateString) {
  const dateArray = separateDate(dateString);
  const separatedArrayWithComma = replaceDashWithComma(dateArray);

  return separatedArrayWithComma.map((element => parseInt(element)));;
}
  
if (window.location.pathname === "/") {
  let events = document.querySelectorAll(".cal-event .btn");
  events.forEach(function(n) {
   const fileName = `${n.dataset.title}-${n.dataset.startDate}.ics`;

   n.addEventListener("click", (e) => {
    e.preventDefault();

    let event = {
      start: separateDateWithComma(n.dataset.startDate),
      duration: calculateTimeDuration(n.dataset.startTime, n.dataset.endTime),
      title: n.dataset.title,
      description: '',
      location: "",
      url: "https://aoiths.org",
      status: "CONFIRMED",
      organizer: { name: 'Academy of Innovative Technology', email: 'info@aoiths.org'},
    }

     ics.createEvent(event, (error, value) => {
      if (error) {
        console.log(error)
        return
      }

      const file = new File([value], fileName, { type: 'plain/calendar' });
      console.log({file});

      let url = URL.createObjectURL(file);
      const webcalUrl = url.replace(/^http(s?):\/\//i, 'webcal://');
      console.log(url);

      const anchor = document.createElement('a');
      anchor.href = webcalUrl;
      anchor.download = fileName;
    
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    
      URL.revokeObjectURL(url);
      })
   });
  });
}