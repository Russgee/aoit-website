// ==== imports ======
const ProgressBar = require('progressbar.js')

var el = (t, a) => a ? document.querySelectorAll(t) : document.querySelector(t);

const menuToggle = el("#menu");
const mainMenu = el("#mobile-nav ul");
const nav = el(".nav");
const navItemContainer = el("#nav-item-container");
const body = el("body");

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

const form = el("form");
const selector = el("#dropdown");
const formHeading = el(".form-desc");

const formTypes = [
  {
    type: "Instructional Support Services Inquiry",
    form: "iss"
  },
  {
    type: "Request an IEP Copy",
    form: "iep-request"
  },
  {
    type: "Grade Concern",
    form: "guidance"
  },
  {
    type: "Working Papers Request", 
    form: "office"
  },
  {
    type: "Transcript Request", 
    form: "transcript"
  },
  {
    type: "Career and Technical Education",
    form: "cte"
  },
  {
    type: "Metrocard Inquiry",
    form: "office"
  },
  {
    type: "General Question",
    form: "office"
  },
  {
    type: "Admissions Info",
    form: "guidance"
  },
  {
    type: "Disciplinary Concern",
    form: "rid"
  },
  {
    type: "Other / Consulta en español ",
    form: "office"
  }
];

formTypes.forEach((n) => selector.insertAdjacentHTML("beforeend", `<option value="${n.form}">${n.type}</option>`));

// optimize hiding and showing
// var hideOrDefault = (nameObjs) => {
//   nameObjs.forEach( (v, i) => {
//     el(v.title).style.display = "none";
//   });
// };

var showOrHide = (name, status) => {
  el(name).style.display = status;

  if (name === ".dvAddress") {
    el(`${name} input`, true).forEach(function(n) {
      if (n.id !== "address2") {
        n.setAttribute("required", true);
      }
    })
  }
}

var resetFormSections = () => {
  el(".dvAddress").style.display = "none";

  el(`${name} input`, true).forEach(function(n) {
    if (n.id !== "address2") {
      n.removeAttribute("required");
    }
  })
}

selector.addEventListener("change", function() {
  const formType = this.value;
  
  form.name = formType;
  el("input[name='form-name']").value = formType;

  var html = "", 
      msgStart = "Your inquiry will be directed to ";
  
  resetFormSections();
  
  switch (formType) {
    case "iss":
      html = msgStart + "Ms. Slater, our ISS Coordinator.";
      break;
    case "iep-request":
      html = msgStart + "Ms. Slater, our ISS Coordinator.";
      break;
    case "guidance":
      html = msgStart + "our guidance team, Ms. Cooper and Ms. Desroches.";
      break;
    case "transcript":
      html = msgStart + "our guidance team, Ms. Cooper and Ms. Desroches.";
      showOrHide(".dvAddress", "flex");
      break;
    case "office":
      html = msgStart + "our main office staff and Parent Coordinator, Mr. Martinez.";
      break;
    case "cte":
      html = msgStart + "our CTE team.";
      break;
    case "rid":
      html = msgStart + "our RID team lead, Mr. Mollison.";
      break;
    default:
        html = msgStart + "our office staff.";
        break;
  }

  formHeading.innerHTML = `<p class="text-center font-semibold text-aoit-900">${html}</p>`;
});

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var htmlStates = states.map((s, i) => `<option value="${s.toLowerCase()}"> ${ s }</option>`);

el("#states").insertAdjacentHTML("beforeend", htmlStates);


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

/*
  makeRequest("/", { 
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  }, () => body.insertAdjacentHTML("beforeend", printModal(null)), (error) => { 
    printModal(error);
    myForm.reset();
  });
*/

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

// REMOVE IN NEXT UPDATE
// if (window.location.pathname === "/about/bell-schedule/") {
if( window.location.pathname.split("/").includes("bell-schedule") ){
  let date = new Date();

  function formatMinutes(min) {
    return min.toString().padStart(2, '0');
  }

  //// TODO: make this work in the future where cells are higlighted based on current time correlated by the current period.

  const regBellSchedule =  el(".normal  table  tr", true);
  
  let currentTime = `${date.getHours() + "" + formatMinutes(date.getMinutes())}`;

    var index = -1;

    switch (true) {
      case (currentTime >= 840 && currentTime <= 925):
        index = 1;
        break;
      case (currentTime >= 929 && currentTime <= 1014):
        index = 2;
          break;
      case (currentTime >= 1018 && currentTime <= 1103):
        index = 3;
        break;
      case (currentTime >= 1107 && currentTime <= 1152):
        index = 4;
        break;
      case (currentTime >= 1156 && currentTime <= 1241):
        index = 5;
        break;
      case (currentTime >= 1245 && currentTime <= 1320):
        index = 6;
        break;
      case (currentTime >= 1322 && currentTime <= 1407):
        index = 7;
        break;
      case (currentTime >= 1410 && currentTime <= 1455):
        index = 8;
        break;
  }

  if(index > -1){
    regBellSchedule[index].classList.add("bg-aoit-300");
    regBellSchedule[index].style.backgroundColor = "yellow";
  }  
}

 const header = document.querySelector("header");
 const footer = document.querySelector("footer .social-media");
 const backToTopButton = document.querySelector("#toTop");
 let headerIntersecting;

  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        backToTopButton.style.display = 'none';
      } else {
        backToTopButton.style.display = 'block';
      }
  });

  observer.observe(header);
  observer.observe(footer);

  // ==== CALENDAR CODE ======

if (window.location.pathname === "/en/" || window.location.pathname === "/es/") {
  const CALENDAR_ID = 'c_2df89eb3b489793160cfcfbd402552c767b0c1421651d8382e804a7c1da77c83@group.calendar.google.com';
  const CLIENT_ID = '900934217608-3dhrgkhtngn8ut3qhtm1uds3rll7jl4g.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyBPgM0s7e1F3LmzHwEn5Ep561IMnuZ0qXI';
  const URL_ROOT = 'https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events?key=' + API_KEY;


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
              const MONTHS = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
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
          
          makeRequest(URL_ROOT, { method: "GET" }, (d) => {
              data = d.items;
              const now = new Date();

              let futureEvents = d.items.filter(event => {
                if (event.status === "confirmed") {
                  const eventDate = new Date(event.end.dateTime || event.end.date);
                  return eventDate >= now;
                }
              })

              futureEvents = futureEvents.sort((a, b) => {
                const dateA = new Date(a.start.dateTime || a.start.date);
                const dateB = new Date(b.start.dateTime || b.start.date);
    
                return dateA - dateB;
            });

            futureEvents = futureEvents.slice(0, 8);
              
            if (futureEvents.length <= 0) {
              events.insertAdjacentHTML("beforeend", `
              <div class="lg:col-start-2 lg:col-end-4 text-center text-xl text-aoit-700 opacity-60">
                <span class="material-symbols-outlined text-5xl">
                  event_busy
                </span>
                <p>There are no upcoming events.</p>
              </div>`);
            } else {
              futureEvents.forEach((n) => {
                    var post = n;
                    var curr_date = processDate(post.start.dateTime || post.start.date );
                    
                    events.insertAdjacentHTML("beforeend", 
                        `<article class="cal-event w-96 rounded-cell backdrop-blur bg-aoit-50/25 text-white rounded-xl py-2 px-4 bg-aoit-50 mb-8 flex flex-col justify-evenly lg:mb-0">
                                <div class="flex gap-x-4 flex-wrap items-center xl:flex-nowrap">
                                <div class="flex flex-col gap-3">
                                    <time class="bg-aoit-200 text-aoit-500 font-bold p-2 w-28 h-28 rounded-lg box-border text-center flex items-center justify-center lg:w-16">
                                        <div>
                                            <span class="text-2xl">${ curr_date.monthDate }</span>
                                            <span class="block font-light lg:text-sm">${ curr_date.month }<br>${ curr_date.year  }</span>
                                        </div>
                                    </time>
                                  </div>

                                    <div class="mt-6 mx-auto xl:mt-0">
                                        <strong class="text-white text-lg">
                                            ${ setContent(post, "summary") }
                                        </strong>
                                        <span class="block text-white">
                                          ${
                                            n.start.dateTime && n.end.dateTime 
                                              ? `${processTime(n.start.dateTime)} to ${processTime(n.end.dateTime)}`
                                              : ""
                                          }
                                        </span>
                                        
                                     
                                    </div>
                                </div>                            
                        </article>`);
              });
            }
                  
          }, (err) => console.log(err));
}

        function makeRequest(url, props, success, error) {

            fetch(url, props)
                .then(resp => resp.json())
                .then(data => success(data))
                .catch(err => error(err));
        }



