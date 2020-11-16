chrome.browserAction.onClicked.addListener(function(item) {
  chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
      const url = e[0].url;
      chrome.tabs.update({ url: url + "&emi=AN1VRQENFRJN5" });
    });
});
