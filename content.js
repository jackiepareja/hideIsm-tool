
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      let elParent = document.querySelectorAll('.product-card-grid__root');

      elParent.forEach(el => {
        let notFirst = $(el.children).slice(1)
        for (let i = 0; i < notFirst.length; i++) {
          notFirst[i].style.display = "none";
        }
      })

    }
  }
);