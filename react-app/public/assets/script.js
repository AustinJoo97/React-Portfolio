let aboutMeButton = document.getElementById('aboutMeButton');
let projectsButton = document.getElementById('projectsButton');
let contactMeButton = document.getElementById('contactMeButton');
let navDropdown = document.getElementById('navDropdown');

// aboutMeButton.addEventListener('click', function(){
//     document.getElementById('aboutMeTitle').scrollIntoView();
// });

// projectsButton.addEventListener('click', function(){
//     document.getElementById('projectsDisplayTitle').scrollIntoView();
// });

// contactMeButton.addEventListener('click', function(){
//     document.getElementById('contactsTitle').scrollIntoView();
// });

navDropdown.addEventListener('change', function(event){
    if(event.target.value === 'About Me'){
        document.getElementById('aboutMeTitle').scrollIntoView();
    } else if(event.target.value === 'Projects'){
        document.getElementById('projectsDisplayTitle').scrollIntoView();
    } else if(event.target.value === 'Contact Me'){
        document.getElementById('contactsTitle').scrollIntoView();
    }
    event.target.value = 'Select';
    return;
})