//save the user's selected color as the background color and save it in the chrome.storage to retrieve it later
function save_options() {
  var color = String("#" + document.getElementById('color').value);
  chrome.storage.sync.set({color: color}, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
//set background color to default grey (#D1D1D1)
function restore_options() {
  chrome.storage.sync.set({color: "#D1D1D1"}, function(items) {
    var status = document.getElementById('status');
    status.textContent = 'Options Restored';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
    document.getElementById('color').value = "D1D1D1";
  });
}
document.getElementById('restore').addEventListener('click',restore_options);
document.getElementById('save').addEventListener('click',save_options);