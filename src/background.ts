export {}

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://web.okjike.com" });
});
