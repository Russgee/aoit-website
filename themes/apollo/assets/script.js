// ==== imports ======
const ProgressBar = require('progressbar.js')

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

if (window.location.pathname === "/en/" || window.location.pathname === "/es/") {
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

    myForm.reset();
};

form.addEventListener("submit", handleSubmit);

// bell schedule code
if (window.location.pathname === "/about/bell-schedule/") {
  let date = new Date();
  const bell = document.querySelector(".normal");
  const weds = document.querySelector(".weds");

  let dayIndex = date.getDay();

  if (dayIndex !== 6 && dayIndex !== 3) {
    bell.classList.add("bell-toggled", "bg-aoit-400", "text-white", "p-6", "rounded-3xl", "overflow-auto")
  } else if (dayIndex === 3) {
    weds.classList.add("bell-toggled", "bg-aoit-400", "text-white", "p-6", "rounded-3xl", "overflow-auto")
  }


function formatMinutes(min) {
  return min.toString().padStart(2, '0');
}

//// TODO: make this work in the future where cells are higlighted based on current time correlated by the current period.

const regBellSchedule =  document.querySelectorAll(".normal  table  tr");

// let currentTime = `${parseInt(date.getHours())}${parseInt(date.getMinutes())}`;
let currentTime = `${date.getHours() + "" + formatMinutes(date.getMinutes())}`;

console.log(currentTime);

  var index = -1;

  switch (true) {
    case (currentTime >= 820 && currentTime <= 910):
      index = 1;
      break;
    case (currentTime >= 914 && currentTime <= 1004):
      index = 2;
        break;
    case (currentTime >= 1008 && currentTime <= 1058):
      index = 3;
      break;
    case (currentTime >= 1102 && currentTime <= 1152):
      index = 4;
      break;
     case (currentTime >= 1156 && currentTime <= 1246):
      index = 5;
       break;
     case (currentTime >= 1250 && currentTime <= 1325):
      index = 6;
       break;
     case (currentTime >= 1327 && currentTime <= 1417):
      index = 7;
       break;
    case (currentTime >= 1420 && currentTime <= 1510):
      index = 8;
      break;
    case (currentTime >= 1510 && currentTime <= 1600):
      index = 9;
      break;
 }

 if(index > -1){
  regBellSchedule[index].classList.add("bg-aoit-300");
 }  
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

const CALENDAR_ID = 'c_2df89eb3b489793160cfcfbd402552c767b0c1421651d8382e804a7c1da77c83@group.calendar.google.com';
const CLIENT_ID = '900934217608-3dhrgkhtngn8ut3qhtm1uds3rll7jl4g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBPgM0s7e1F3LmzHwEn5Ep561IMnuZ0qXI';
const URL_ROOT = 'https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events?key=' + API_KEY;
var el = (t, a) => a ? document.querySelectorAll(t) : document.querySelector(t);

        var data = [];
        const events = el(".events");

        function processTime(_date){
            var t =  new Date(_date);

            return t.toLocaleTimeString(navigator.language, { 
                hour: '2-digit', 
                minute: '2-digit'
            });
        }

        function processDate(_date){
            var t =  new Date(_date);
            const MONTHS = ["January", "Feburary", "March", "April", "May", "June"]; 
            const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            return {
                numDay: t.getDay(),
                year: t.getFullYear(),
                month: MONTHS[t.getMonth()],
                monthDate: t.getDate()
            }
    
        }
        
        function getEventTypeById(id){

            const CATEGORY = ["Trips", "Family", "Work Based Learning", "Senior", "College Prep"];

            return CATEGORY[id];
        }


        var parseCategoryFromTitle = (title, getCategory) => getCategory ? title.slice(1).split("]")[0] : title.split("]")[1];

        var setContent = (post, title) => (post[title] != null || post[title] != undefined) ? post[title] : " ------ ";
        
        

        makeRequest(URL_ROOT, "GET", (d) => {
            data = d.items;
                    
            d.items.reverse().forEach((n) => {

                var post = n;
                var curr_date = processDate(post.start.dateTime);

                events.insertAdjacentHTML("beforeend", 
                    `<article class="cal-event rounded-cell bg-aoit-50 mb-8 flex flex-col justify-evenly lg:mb-0">
                        <span class="bg-aoit-200 text-aoit-500 rounded-full inline-block px-4 py-1 self-start font-bold"> ${ parseCategoryFromTitle(setContent(post, "summary"), true)  }</span>
                            <div class="my-6 flex justify-between">
                                <time class="bg-aoit-200 text-aoit-500 font-bold p-4 w-28 h-28 rounded-lg box-border text-center flex items-center justify-center lg:w-24 lg:w-24">
                                    <div>
                                        <span class="text-5xl lg:text-3xl">${ curr_date.monthDate }</span>
                                        <span class="block font-light lg:text-sm">${ curr_date.month }&nbsp;${ curr_date.year  }</span>
                                    </div>
                                </time>

                                <div>
                                    <strong class="text-aoit-500 text-lg md:text-xl">
                                        ${ parseCategoryFromTitle(setContent(post, "summary")) }
                                    </strong>
                                    <span class="block text-aoit-500">${ processTime(n.start.dateTime)} to ${ processTime(n.end.dateTime) }</span>
                                </div>
                            </div>
                            
                            <div>
                              <p>${ setContent(post, "description") }</p>
                            
                              <hr class="my-8">
                            </div>

                        <div class="flex flex-nowrap justify-center">
                            <a class="btn gap-2 flex hover:bg-aoit-500 hover:text-white" href="${n.htmlLink}"><span class="material-symbols-outlined">
                                calendar_add_on
                                </span> Add to calendar</a>
                        </div>
                    </article>`);
            });
                
        }, (err) => console.log(err));

        function makeRequest(url, action, success, error) {

            fetch(url, { method: action })
                .then(resp => resp.json())
                .then(data => success(data))
                .catch(err => error(err));
        }

  