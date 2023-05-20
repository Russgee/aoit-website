// ==== imports ======
const ProgressBar = require('progressbar.js')
const ics = require('ics')

const menuToggle = document.querySelector("#menu");
const mainMenu = document.querySelector("#mobile-nav ul");
const nav = document.querySelector(".nav");
const navItemContainer = document.querySelector("#nav-item-container");
const body = document.querySelector("body");

menuToggle.addEventListener("click", function() {
    mainMenu.classList.toggle("hidden");

    if (menuToggle.innerText === "menu") {
      menuToggle.innerText = "close";
    } else {
      menuToggle.innerText = "menu";
    }
    
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
  
  grad.animate(0.91);

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
  
  college.animate(0.89);

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

  safety.animate(0.88);

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

// global contact code 

const form = document.querySelector("#form");

const printModal = (error) => {
  const modalData = {
    successIcon: "success.svg",
    successBody: "Thank you for reaching out. Someone from our school will be in touch very soon.",
    errorIcon: "error.svg",
    errorBody: `Something went wrong: ${error}. Please try again.`
  }

  const modalIcon = error ? modalData.errorIcon : modalData.successIcon;
  const modalTitle = error ? "Error!" : "Success!";
  const modalBody = error ? error : modalData.successBody;

  const modal = `
  <dialog open class="open:fixed open:top-0 open:h-screen open:w-screen open:z-50 open:bg-slate-800/75 open:flex open:justify-center" id="modal">
    <div class="bg-white text-black w-11/12 p-8 rounded-2xl self-end text-center fade-in mb-28 md:w-3/12 md:p-14 md:self-center md:mb-0">
      <form method="dialog" id="closeModal" class="flex justify-end mb-4 hover:cursor-pointer">
        <button class="text-center">
          <img src="/close.svg" class="w-6 block mx-auto" alt="Click or tap anywhere to close the form submission modal">
          Close
        </button>
      </form>

      <img class="block mx-auto w-24 mb-6" src="/${modalIcon}" alt="${modalTitle}">
      <strong class="text-2xl block mb-2">${modalTitle}</strong>
      <p>${modalBody}</p>
    </div>
  </dialog>`

  return modal;
}

const handleSubmit = (event) => {
  event.preventDefault();
  
  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => body.insertAdjacentHTML("beforeend", printModal(null)))
    .catch((error) => printModal(error));
};

form.addEventListener("submit", handleSubmit);