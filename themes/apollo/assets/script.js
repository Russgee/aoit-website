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
    nav.classList.toggle("h-screen");
    nav.classList.toggle("w-screen");
    body.classList.toggle("h-full");
    body.classList.toggle("overflow-hidden");

    nav.classList.toggle("container");
    nav.classList.toggle("mx-auto");

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

var showOrHide = (name, status) => {
  const element = el(name);
  if (element) {
    element.style.display = status;

    if (name === ".dvAddress") {
      el(`${name} input`, true).forEach(function(n) {
        if (n.id !== "address2") {
          n.setAttribute("required", true);
        }
      });
    }
  }
};

var resetFormSections = () => {
  const addressSection = el(".dvAddress");
  if (addressSection) {
    addressSection.style.display = "none";
    
    el(".dvAddress input", true).forEach(function(n) {
      if (n.id !== "address2") {
        n.removeAttribute("required");
      }
    });
  }
};

if (selector) {
  selector.addEventListener("change", function() {
    const formType = this.value;
    
    if (form) {
      form.name = formType;
      const formNameInput = el("input[name='form-name']");
      if (formNameInput) {
        formNameInput.value = formType;
      }
    }

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
        showOrHide(".dvAddress", "block");
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

    if (formHeading) {
      formHeading.innerHTML = `<p class="text-center font-semibold text-aoit-900 mt-2">${html}</p>`;
    }
  });
}

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

// Populate states dropdown
const statesDropdown = el("#states");
if (statesDropdown) {
  statesDropdown.innerHTML = '<option value="">Select State</option>';
  states.forEach(state => {
    statesDropdown.insertAdjacentHTML("beforeend", `<option value="${state}">${state}</option>`);
  });
}

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

if (window.location.pathname.split("/").includes("bell-schedule")) {
  function updateBellScheduleHighlight() {
    let date = new Date();
    let currentTime = date.getHours() * 100 + date.getMinutes();

    const regBellSchedule = el(".normal table tr", true);
    
    const scheduleRanges = [
      { start: 840, end: 925, index: 1 },
      { start: 929, end: 1014, index: 2 },
      { start: 1018, end: 1103, index: 3 },
      { start: 1107, end: 1152, index: 4 },
      { start: 1156, end: 1241, index: 5 },
      { start: 1245, end: 1320, index: 6 },
      { start: 1322, end: 1407, index: 7 },
      { start: 1410, end: 1455, index: 8 }
    ];

    // Remove previous highlight
    regBellSchedule.forEach(row => row.classList.remove("bg-aoit-300"));

    const currentPeriod = scheduleRanges.find(range => 
      currentTime >= range.start && currentTime <= range.end
    );

    if (currentPeriod) {
      regBellSchedule[currentPeriod.index].classList.add("bg-aoit-300");
    }
  }

  // Initial call
  updateBellScheduleHighlight();

  // Update every minute
  setInterval(updateBellScheduleHighlight, 60000);
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
              // Log all events received from the API
              console.log('All events received from Google Calendar API:', d);
              console.log('Calendar items:', d.items);
              
              // Filter events from March 2025 onward
              const march2025 = new Date('2025-03-01T00:00:00');
              const eventsFromMarch2025 = d.items.filter(event => {
                try {
                  // Check if event and start properties exist
                  if (!event || !event.start) {
                    console.warn('Event missing start property:', event);
                    return false;
                  }
                  const eventDate = new Date(event.start.dateTime || event.start.date);
                  return eventDate >= march2025;
                } catch (err) {
                  console.error('Error processing event for March 2025 filter:', event, err);
                  return false;
                }
              });
              
              // Log events from March 2025 onward
              console.log('Events from March 2025 onward:', eventsFromMarch2025);
              
              // Filter events specifically in March 2025 (not before or after)
              const march2025Start = new Date('2025-03-01T00:00:00');
              const march2025End = new Date('2025-03-31T23:59:59');
              
              const eventsInMarch2025 = d.items.filter(event => {
                try {
                  // Check if event has required properties
                  if (!event || !event.start) {
                    return false;
                  }
                  
                  // Get start and end dates
                  const eventStartDate = new Date(event.start.dateTime || event.start.date);
                  
                  // For end date, if not present, use start date (for single-day events)
                  let eventEndDate;
                  if (event.end) {
                    eventEndDate = new Date(event.end.dateTime || event.end.date);
                  } else {
                    // If no end date, assume it's the same as start date
                    eventEndDate = new Date(eventStartDate);
                  }
                  
                  // Check if the event overlaps with March 2025
                  // An event overlaps if:
                  // 1. It starts before March ends AND
                  // 2. It ends after March begins
                  return eventStartDate <= march2025End && eventEndDate >= march2025Start;
                } catch (err) {
                  console.error('Error checking if event is in March 2025:', event, err);
                  return false;
                }
              });
              
              // Log only events in March 2025
              console.log('Events occurring in March 2025 (including overlapping events):', eventsInMarch2025);
              
              // Log details of each March 2025 event for easier reading
              console.log('March 2025 Events Details (including overlapping events):');
              eventsInMarch2025.forEach((event, index) => {
                try {
                  if (event && event.start) {
                    const startDate = new Date(event.start.dateTime || event.start.date);
                    let endDate;
                    if (event.end) {
                      endDate = new Date(event.end.dateTime || event.end.date);
                    } else {
                      endDate = new Date(startDate);
                    }
                    
                    // Format dates for better readability
                    const formatDate = (date) => {
                      return date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      });
                    };
                    
                    console.log(`Event ${index + 1}:`, {
                      summary: event.summary || 'No title',
                      description: event.description || 'No description',
                      startDate: formatDate(startDate),
                      endDate: formatDate(endDate),
                      status: event.status || 'No status',
                      location: event.location || 'No location',
                      htmlLink: event.htmlLink || 'No link'
                    });
                  }
                } catch (err) {
                  console.error('Error logging March 2025 event details:', err);
                }
              });
              
              // Also check for any events with "Parent-Teacher" in the title or description
              const ptcEvents = d.items.filter(event => {
                try {
                  if (!event) return false;
                  
                  const summary = (event.summary || '').toLowerCase();
                  const description = (event.description || '').toLowerCase();
                  
                  return summary.includes('parent-teacher') || 
                         summary.includes('parent teacher') ||
                         description.includes('parent-teacher') ||
                         description.includes('parent teacher');
                } catch (err) {
                  return false;
                }
              });
              
              console.log('Parent-Teacher Conference related events (any date):', ptcEvents);
              
              // Specifically look for March 19, 2025 events
              const march19_2025 = new Date('2025-03-19T00:00:00');
              const march20_2025 = new Date('2025-03-20T00:00:00');
              
              console.log('Looking for events on March 19, 2025...');
              
              // First, log all raw events to see their exact structure
              console.log('All raw events:', d.items);
              
              // Check each event individually with detailed logging
              d.items.forEach((event, index) => {
                try {
                  console.log(`Examining event ${index}:`, event);
                  
                  // Check if this event has a date close to March 19, 2025
                  if (event && event.start) {
                    const startDate = new Date(event.start.dateTime || event.start.date);
                    const startMonth = startDate.getMonth() + 1; // JavaScript months are 0-indexed
                    const startDay = startDate.getDate();
                    const startYear = startDate.getFullYear();
                    
                    console.log(`Event ${index} date: ${startYear}-${startMonth}-${startDay}`);
                    
                    // Check if this is a March 19, 2025 event
                    if (startMonth === 3 && startDay === 19 && startYear === 2025) {
                      console.log('FOUND MARCH 19, 2025 EVENT:', event);
                      
                      // Check event status
                      console.log('Event status:', event.status);
                      
                      // Check if it's in the filtered March 2025 events
                      const isInMarchEvents = eventsInMarch2025.includes(event);
                      console.log('Is this event in the filtered March 2025 events?', isInMarchEvents);
                      
                      // Check if it's in future events
                      const isInFutureEvents = futureEvents.includes(event);
                      console.log('Is this event in future events?', isInFutureEvents);
                      
                      // Check why it might not be in future events
                      if (!isInFutureEvents) {
                        if (!event.status) {
                          console.log('Event missing status property');
                        } else if (event.status !== "confirmed") {
                          console.log('Event status is not "confirmed", it is:', event.status);
                        }
                        
                        if (!event.end) {
                          console.log('Event missing end property');
                        }
                      }
                    }
                    
                    // Also check for events that are close to March 19
                    if (startMonth === 3 && (startDay >= 18 && startDay <= 20) && startYear === 2025) {
                      console.log('FOUND EVENT CLOSE TO MARCH 19, 2025:', event);
                    }
                  } else {
                    console.log(`Event ${index} has no start date`);
                  }
                } catch (err) {
                  console.error(`Error examining event ${index}:`, err);
                }
              });
              
              // Also check for any events with March 19 in the title or description
              const march19Events = d.items.filter(event => {
                try {
                  if (!event) return false;
                  
                  const summary = (event.summary || '').toLowerCase();
                  const description = (event.description || '').toLowerCase();
                  
                  return summary.includes('march 19') || 
                         description.includes('march 19') ||
                         summary.includes('3/19') ||
                         description.includes('3/19') ||
                         summary.includes('03/19') ||
                         description.includes('03/19');
                } catch (err) {
                  return false;
                }
              });
              
              console.log('Events with "March 19" in title or description:', march19Events);
              
              const now = new Date();

              let futureEvents = d.items.filter(event => {
                try {
                  if (!event || !event.status || !event.end) {
                    console.warn('Event missing required properties:', event);
                    return false;
                  }
                  
                  if (event.status === "confirmed") {
                    // Use date as fallback if dateTime is not available
                    const eventDate = new Date(event.end.dateTime || event.end.date);
                    return eventDate >= now;
                  }
                  return false;
                } catch (err) {
                  console.error('Error processing event for future events filter:', event, err);
                  return false;
                }
              })

              // Log filtered future events
              console.log('Filtered future events:', futureEvents);

              futureEvents = futureEvents.sort((a, b) => {
                try {
                  if (!a.start || !b.start) {
                    console.warn('Event missing start property during sort:', { a, b });
                    return 0;
                  }
                  
                  const dateA = new Date(a.start.dateTime || a.start.date);
                  const dateB = new Date(b.start.dateTime || b.start.date);
      
                  return dateA - dateB;
                } catch (err) {
                  console.error('Error sorting events:', { a, b }, err);
                  return 0;
                }
            });

            // Log sorted events
            console.log('Sorted future events:', futureEvents);

            futureEvents = futureEvents.slice(0, 8);
              
            // Log final events to be displayed
            console.log('Final events to display (limited to 8):', futureEvents);
              
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
                try {
                    var post = n;
                    
                    // Check if start property exists
                    if (!post.start) {
                      console.warn('Event missing start property during rendering:', post);
                      return; // Skip this event
                    }
                    
                    var curr_date = processDate(post.start.dateTime || post.start.date);
                    
                    events.insertAdjacentHTML("beforeend", 
                        `<article class="cal-event min-h-20 min-w-[15rem] rounded-cell backdrop-blur-md bg-aoit-50/25 text-white rounded-xl p-3 mb-4 flex items-center lg:mb-0 xl:w-[20rem]">
                            <time class="bg-aoit-200 text-aoit-500 font-bold p-2 w-18 h-20 rounded-lg text-center flex flex-col justify-center mr-3">
                                <span class="text-xl">${curr_date.monthDate}</span>
                                <span class="text-xs">${curr_date.month}</span>
                                <span class="text-xs">${curr_date.year}</span>
                            </time>
                            <div>
                                <strong class="text-white text-sm block">
                                    ${setContent(post, "summary")}
                                </strong>
                                <span class="text-white text-xs">
                                    ${
                                        (n.start && n.start.dateTime && n.end && n.end.dateTime)
                                        ? `${processTime(n.start.dateTime)} - ${processTime(n.end.dateTime)}`
                                        : ""
                                    }
                                </span>
                            </div>
                        </article>`);
                } catch (err) {
                    console.error('Error rendering event:', n, err);
                }
              });
            }
                  
          }, (err) => {
              // Log any errors that occur during the API request
              console.error('Error fetching calendar events:', err);
          });
}

        function makeRequest(url, props, success, error) {

            fetch(url, props)
                .then(resp => resp.json())
                .then(data => success(data))
                .catch(err => error(err));
        }



