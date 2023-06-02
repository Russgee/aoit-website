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

if (window.location.pathname === "/") {
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

// bell schedule code
if (window.location.pathname === "/about/bell-schedule/") {
  let date = new Date();
  const bell = document.querySelector(".normal");
  const weds = document.querySelector(".weds");



  if (date.getDay() !== 6 && date.getDay() !== 3) {
    bell.classList.add("bg-aoit-400", "text-white")
  } else if (date.getDay() === 3) {
      weds.classList.add("bg-aoit-400", "text-white")
  }




//// TODO: make this work in the future where cells are higlighted based on current time correlated by the current period.

// const regBellSchedule =  document.querySelectorAll(".normal  table  tr");

// let currentTime = `${parseInt(date.getHours())}${parseInt(date.getMinutes())}`;
// console.log(parseInt(currentTime));

  // switch (currentTime) {
  //   case (currentTime >= 820 && currentTime <= 910):
  //     regBellSchedule[0].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 914 && currentTime <= 104):
  //       regBellSchedule[1].classList.add("bg-pink-300");
  //       break;
  //   case (currentTime >= 108 && currentTime <= 1058):
  //     regBellSchedule[2].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 112 && currentTime <= 1152):
  //     regBellSchedule[3].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 1156 && currentTime <= 1246):
  //     regBellSchedule[4].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 1250 && currentTime <= 1325):
  //     regBellSchedule[5].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 1327 && currentTime <= 1417):
  //     regBellSchedule[6].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 1420 && currentTime <= 1510):
  //     regBellSchedule[7].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 1510 && currentTime <= 160):
  //     regBellSchedule[8].classList.add("bg-pink-300");
  //     break;
  //   case (currentTime >= 0 && currentTime <= 10):
  //     regBellSchedule[0].classList.add("bg-pink-300");
  //     break;     
  // }
  
}

 const header = document.querySelector("header");
  const backToTopButton = document.querySelector("#toTop");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        backToTopButton.classList.toggle("hidden");
      } else if (entry.isIntersecting) {
        backToTopButton.classList.add("hidden");
      }
    })
  });

  observer.observe(header);

  // ==== CALENDAR CODE ======
