//set default background color as grey (#D1D1D1)
chrome.storage.sync.set({'color': "#D1D1D1" ,'fontStyle':'bold'}, function() {});
//load the content_script.js file and execute its code
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});