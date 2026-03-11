
const btn = document.getElementById('color-button');


btn.addEventListener('click', function() {

    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});
function openTab(evt, tabName) {
  var content = document.getElementsByClassName("tab-content");
  for (var i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    content[i].style.display = "none";
  }

  var buttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  const activeTab = document.getElementById(tabName);
  activeTab.style.display = "block";
  
  setTimeout(() => {
    activeTab.classList.add("active");
  }, 10);

  evt.currentTarget.classList.add("active");
}


window.onload = function() {
    const hours = new Date().getHours();
    const heroTitle = document.querySelector('.hero-title');
    
    if (hours < 12) {
        heroTitle.innerHTML = "Good Morning! Welcome to My Site";
    } else if (hours < 18) {
        heroTitle.innerHTML = "Good Afternoon! Welcome to My Site";
    } else {
        heroTitle.innerHTML = "Good Evening! Welcome to My Site";
    }
};
