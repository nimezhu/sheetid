function myFunction() {
  var copyText = document.getElementById("id");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
  window.close()
}
(function(){
  chrome.tabs.getSelected(null, function(tab) {
      var re = /d\/(\S+)\/edit/i;
      var found = tab.url.match(re);
      if (found.length >= 2) {
        document.getElementById("id").value=found[1]
      } else {
        document.getElementById("id").value="no sheet id found"
      }
  });
  document.getElementById("copy").onclick = myFunction
})()
