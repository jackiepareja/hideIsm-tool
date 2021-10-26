
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {


    if (request.message === "clicked_browser_action") {
      // let product_grid = $('section[aria-label="Product Grid"]');

      const error_message = document.querySelector('.faceted-grid__message');
      error_message.textContent = '';


      $(document).ready(
        function () {
          console.log('is document.ready loading?')
          // get cid from url
          const wipUrl = location.protocol + '//' + location.host + location.pathname + '?cid';
          const queryString = window.location.href;
          const searchParams = new URLSearchParams(queryString);

          const urlCid = searchParams.get(wipUrl);

          let urls = window.location.href;
          let searchParams = new URLSearchParams(urls);

          // product pull
          let call = "/resources/productSearch/v1/search?isFacetsEnabled=false&pageId=0&cid=" + urlCid;

          // let call = "/resources/productSearch/v1/search?isFacetsEnabled=false&pageId=0&cid=1185272"

          var apiKeyHeader = 'AcMF0EUkgmGA8GVOeouRpDzSDhHCfsOv';

          jQuery.ajaxSetup({
            headers: {
              'apiKey': apiKeyHeader
            }
          });

          // populate products
          jQuery.get(call, function (res) {
            let products = res.productCategoryFacetedSearch.productCategory.childCategories[0].childProducts;

            error_message.style.display = 'flex';
            error_message.style.flexWrap = 'wrap';
            error_message.style.maxWidth = '100%';



            for (var i = 0; i < 10; i++) {
              jQuery(error_message).append('<div style="font-size: 85%; width: 25%;" className="css-1tlgavl"><div class="dummy_product css-11ltxe6"><div spacing="0.5" class="css-1ohx80u"><div class="product-card css-1u39os9"><div class="product-card__image-wrapper css-cet0rr" id="product983000002"><a class="css-0" href="/browse/product.do?pid=' + products[i].businessCatalogItemId + '"><img class="product-card__image" src="' + products[i].categoryLargeImage.path + '"></a><div class="css-1tt204t" style="font-family: Avenir Next, sans-serif;color: rgb(102, 102, 102);line-height: 1.4;text-transform: none;font-weight: normal;font-size: 0.8125rem;letter-spacing: 1px;">' + products[i].name + '<div><div class="product-card-price"><div><span>' + products[i].priceFormatXhtml + '</span></div></div></div></div></div></div></div></div></div>');

            }
          });
        }
      )

    }
  }
)