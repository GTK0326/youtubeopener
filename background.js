
function CloseTrigger(){
  chrome.tabs.query( {url:"https://www.google.tk/?gl=tk*"}, function (tabs) {
  		var tab = tabs[0];
      chrome.tabs.remove(tab.id);
  });
}


function YoutubeOpen() {
  chrome.tabs.query( {url:"https://www.youtube.com/watch?v=*"}, function (tabs) {
  		var tab = tabs[0];
  		//tab.urlに開いているタブのURLが入っている
      var tab1 = tab.url;
      tab1 = tab1.substring(0,43);
      chrome.tabs.remove(tab.id);
      chrome.tabs.create({url:tab1});
  });
}

chrome.browserAction.onClicked.addListener(CloseTrigger);
chrome.browserAction.onClicked.addListener(YoutubeOpen);


chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {  // 1
        chrome.tabs.getSelected(function(tab) {  // 2
//            callback(tab.title);
            YoutubeOpen();
            CloseTrigger();
        });
        // 3
        return true;
    }
);
