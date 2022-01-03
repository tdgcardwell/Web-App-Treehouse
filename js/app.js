let notifications = 0;

// this would be set by the app itself in 'real life'.
let notificationDetails = [
  {name: "Juliet Montague",
  number: 3,
  what: "sent you a message",
  when: "2 hours ago"},
  {name: "Juliet Montague",
  number: 3,
  what: "liked your post <strong>Front, Back, and Somewhere In-Between</strong>.",
  when: "2 hours ago"}
];

notifications = notificationDetails.length;

if (notifications) {
  // show the alertbar
  $('.alert').addClass('alerts');
  // also add notification icon to top
  $('.bell').after('<span class="bell-ring">o</span>');

  // and display those:
  // something to collect the info...
  let notificationsToInsert = "";

  // loop through each, building info
  for (let i=0; i<notificationDetails.length; i++) {
    let eachOne = `<div class="activity"><img class="avatar" src="imgs/members/member-${notificationDetails[i]["number"]}.jpg" alt="${notificationDetails[i]["name"]}"><br><span class="activity-message">${notificationDetails[i]["name"]} ${notificationDetails[i]["what"]}</span><br><span class="activity-message">${notificationDetails[i]["when"]}</span></div>`;
    notificationsToInsert += eachOne;
  }

  // add it.
  $(".dropdown").append(notificationsToInsert);

}

// hide the alertbar when the X is clicked.
$('.closeOut').click(function() {
  $('.alert').slideUp();
});

// notification dropdown
$('.bell').click(function(){
  $('.dropdown').slideToggle();
});


// --------------------------- New Members

// an array with info of new members - which would be set by the app in real life
let newMembers = [
  {name: "Victoria Chambers",
  number: 1,
  email: "victoria.chambers80@example.com",
  joinDate: "12/15/21"},
  {name: "Algernon Fudginton",
  number: 2,
  email: "yourbrotherken@example.com",
  joinDate: "11/15/21"},
  {name: "Juliet Montague",
  number: 3,
  email: "jules.capulet92@example.com",
  joinDate: "10/15/21"},
  {name: "Sven Hasselbläd",
  number: 4,
  email: "77hesitancy@example.com",
  joinDate: "09/15/21"}
];

// something to collect the info...
let membersToInsert = "";

// loop through each, building info
for (let i=0; i<newMembers.length; i++) {
  let eachOne = `<div class="new-member"><img class="avatar" src="imgs/members/member-${newMembers[i]["number"]}.jpg" alt='${newMembers[i]["name"]}'><h4>${newMembers[i]["name"]}</h4><span class="email">${newMembers[i]["email"]}</span><br/><span class="date">${newMembers[i]["joinDate"]}</span></div>`;
  membersToInsert += eachOne;
}

// add it.
$('#new-members h3').after(membersToInsert);


// --------------------------- Recent Activity

// an array with Recent Activity - which would be set by the app in real life
let recentActivity = [
  {name: "Victoria Chambers",
  number: 1,
  what: "commented on <strong>WebApp's SEO Tips</strong>",
  when: "Just Now"},
  {name: "Algernon Fudginton",
  number: 2,
  what: "commented on <strong>WebApp's SEO Tips</strong>",
  when: "1 hour ago"},
  {name: "Juliet Montague",
  number: 3,
  what: "liked <strong>WebApp's SEO Tips</strong>",
  when: "2 hours ago"},
  {name: "Juliet Montague",
  number: 3,
  what: "commented on <strong>WebApp's SEO Tips</strong>",
  when: "2 hours ago"}
];

// something to collect the info...
let activityToInsert = "";

// loop through each, building info
for (let i=0; i<recentActivity.length; i++) {
  let eachOne = `<div class="activity"><img class="avatar" src="imgs/members/member-${recentActivity[i]["number"]}.jpg" alt="${recentActivity[i]["name"]}"><br><span class="activity-message">${recentActivity[i]["name"]} ${recentActivity[i]["what"]}</span><br><span class="activity-message">${recentActivity[i]["when"]}</span></div>`;
  activityToInsert += eachOne;
}

// add it.
$('#recent-activity h3').after(activityToInsert);


//  ------------------ settings

// gotta declare it outside of a function
let storedSettings;

// if there are stored settings...
if (localStorage.length > 0) {
  // ... get those stored settings
  storedSettings = JSON.parse(localStorage.getItem('locallyStored'));
  console.log('settings retrieved');
} else {
  // otherwise default to true for both, and 0 for timezone
  storedSettings = {
    emailNotifications : true,
    setProfileToPublic : true,
    timeZone: 0
  };
}

// and adjust the sliders
let emailNotifications = $('#emailNotifications');
let setProfileToPublic = $('#setProfileToPublic');

if (storedSettings.emailNotifications) {
  emailNotifications.prop("checked", true);
}

if (storedSettings.setProfileToPublic) {
  setProfileToPublic.prop("checked", true);
}

// set the menu
// we want to filter by timeZoneId
let storedZone = $('#time_zones option').filter('[timeZoneId =' + storedSettings.timeZone + ']');
// then we want to give that one the property 'selected'
storedZone.prop("selected", true);


// googled "jquery boolean checkbox" to see how to concisely do that. which got me to here: https://stackoverflow.com/questions/37301563/how-to-get-bool-value-from-checkbox-in-javascript-jquery - Which I then adapted for my needs.

emailNotifications.change(function() {
  if ($(this).is(":checked")) {
    storedNotify = true;
  } else {
    storedNotify = false;
  }
  storedSettings.emailNotifications = storedNotify;
  // console.log(storedSettings);
});

setProfileToPublic.change(function() {
  if ($(this).is(":checked")) {
    storedPublic = true;
  } else {
    storedPublic = false;
  }
  storedSettings.setProfileToPublic = storedPublic;
  // console.log(storedSettings);
});

// data attributes - look these up, and use to make this 1 function.


// what about the timezone?
let timezones = $('#time_zones');
let timezone;

// this is super helpful: https://oscarotero.com/jquery/ !!

timezones.change(function(){
  // attr this time!
  timezone = $('#time_zones option').filter(':selected').attr("timeZoneId");
  // alert(timezone);
  storedSettings.timeZone = timezone;
})


// save the stored settings to local storage
function saveSettings() {
  localStorage.setItem('locallyStored', JSON.stringify(storedSettings));
  console.log('settings saved');
  alert('settings saved');
};


// let's mess with these buttons
let saveButton = $('#saveButton')
saveButton.click(function() {
  event.preventDefault();
  saveSettings();
});

let cancelButton = $('#cancelButton')
cancelButton.click(function() {
  event.preventDefault();
  localStorage.clear()
  alert('settings reset');
});

// while we're at it - the send button needs attention
let sendButton = $('#sendButton')
sendButton.click(function() {
  event.preventDefault();
  // in real life send the message, for now display a fake confirmation.
});


// borrowing/adjusting my searchbar code from previous photogallery project:
// https://tdgcardwell.github.io/Project-5_Interactive-Photo-Gallery/

// get the information to search - probably would be an array from the app in "real life" - so I guess for now I'll just build one. Could probably be combined with the 'new members' array, but unnecessary right now.

let users = ['Victoria Chambers', 'Algernon Fudginton', 'Juliet Montague', 'Sven Hasselbläd', 'Kris Kringle'];


// function
function captionSearch() {

  // get input from search bar value
  let searchString = document.getElementById('searchbar').value

  // convert to lower case, so that search is not case sensitive
  searchString=searchString.toLowerCase();

  // FOR each user
  for (i = 0; i < users.length; i++) {

    // IF searchString to lowercase is NOT included
    if (users[i].toLowerCase().includes(searchString)) {

      console.log(users[i]);

      // set to display none
      // images[i].style.display="none";

    // ELSE
    // }else {

      // display as normal
      // images[i].style.display="block";

    //ENDIF
  // ENDFOR
// end function
    }
  }
}


// Add the function to the searchbar
// <input type="text" oninput="captionSearch()" name="search" placeholder="Search" id="searchbar" class="search">

let searchForUser = $('#searchbar');

// when something changes (ie something is typed, or deleted), run the function.
searchForUser.change(captionSearch());
