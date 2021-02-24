function removeAdsClasses(adsClasses) {
  adsClasses.forEach((elementTag) => {
    removeElement(elementTag);
  });
}

function removeElement(elementTag) {
  const adsElements = document.querySelectorAll(elementTag);
  adsElements.forEach((element) => {
    element.remove();
  });
}

function loadAdsSelectors() {
  const url = chrome.runtime.getURL('../data/adsSelectors.json');
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function run() {
  setInterval(() => {
    let skipButtion = document.querySelector('.ytp-ad-skip-button');
    if (skipButtion) skipButtion.click();
  }, 10);

  loadAdsSelectors().then((adsSelectors) => {
    removeAdsClasses(adsSelectors);
  });
}

run();
