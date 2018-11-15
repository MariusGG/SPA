

function navigate(){

    // Get the id of <main>"content"
  var contentAtMain = document.getElementById("content"),

      // removing the "#" character.
      pageId = location.hash.substr(1);

  // setting the content from from page Id's
  contentAtMain.innerHTML = pageId;
}

if(!location.hash) {


  location.hash = "#home";
}

navigate();

// Navigate when the pageID changes.
window.addEventListener("hashchange", navigate)
