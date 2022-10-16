document.onreadystatechange = function () {
  // page fully load
  if (document.readyState == "complete") {
    // hide loader after 2 seconds
    setTimeout(function(){ 
      document.getElementById('loader').style.display = 'none';
    }, 2500);
  }
}
