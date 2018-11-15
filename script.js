

function navigate(){
  // Get the id of <main>"content"
  var contentAtMain = document.getElementById("content"),
      // removing the "#" character.
      pageId = location.hash.substr(1);
  // setting the content from page Id's
  contentAtMain.innerHTML = getPageContent(pageId);
  setActiveLink(pageId);
}

if(!location.hash) {
  // default to #home
  location.hash = "#home";
}

navigate();

// Navigate when the pageID changes.
window.addEventListener("hashchange", navigate)


// Gets page content for the given page Id's below.
function getPageContent(pageId){

  // Content for each navigation link.
  var intros = {
    home: "Welcome to the home page.",
    about: "This is the About page.",
    contact: "This is the Contact page."
  };
  return intros[pageId];
}

// function below will set a class of active when a nav is clicked
function setActiveLink(pageId){
  var links = document.querySelectorAll("#nav_links a"),
      i, link, pageName;
  for(i = 0; i < links.length; i++){
    link = links[i];
    pageName = link.getAttribute("href").substr(1);
    if(pageName === pageId) {
      link.setAttribute("class", "active");
    } else {
      link.removeAttribute("class");
    }
  }
}
