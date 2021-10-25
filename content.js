
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      // let product_grid = $('section[aria-label="Product Grid"]');

      const error_message = document.querySelector('.faceted-grid__message');
      error_message.textContent = '';




      $(window).load(function () {
        let categoryCid = 1006482;
        let bizID_01 = 1185272;
        let stateAPI = __CATEGORY_PAGE_STATE__.contentData.category[categoryCid][bizID_01];

        console.log(stateAPI);


      })

      $(document).ready(function () {



        // product pull
        let call = "/resources/productSearch/v1/search?isFacetsEnabled=false&pageId=0&cid=1006482";

        var apiKeyHeader = 'AcMF0EUkgmGA8GVOeouRpDzSDhHCfsOv';

        jQuery.ajaxSetup({
          headers: {
            'apiKey': apiKeyHeader
          }
        });


        jQuery.get(call, function (res) {
          var products = res.productCategoryFacetedSearch.productCategory.childCategories[0].childProducts;
          error_message.style.display = 'flex';
          error_message.style.flexWrap = 'wrap';
          error_message.style.maxWidth = '100%';

          $(error_message).append('<div spacing="0.5" class="css-e213ev"><div class="css-13o7eu2"><div data-testid="InSortMarketingBanner" role="button" tabindex="0"><div class="" style="display: block; padding: 0px; width: 100vw; max-width: 100%;"><div class="css-3smxlu"><div><div class="css-ohwg9z"><div class="css-10waciu"><div class="css-11d1iut"><div class="css-1jqblft"><div class="slick-slider slick-initialized" dir="ltr"><button class="slick-arrow slick-prev"><img src="/Asset_Archive/ONWeb/content/0017/036/258/assets/carousel/Certona_Left_Arrow_OFF.svg"></button><div class="slick-list" style="padding: 0px;"><div class="slick-track" style="width: 2904px; opacity: 1;"><div data-index="0" class="slick-slide slick-active slick-center slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 484px; position: relative; left: 0px; opacity: 1; transition: opacity 500ms ease 0s, visibility 500ms ease 0s;"><div><div tabindex="-1" style="width: 100%; display: inline-block;"><div class="mkt-svg-overlay"><div class="mkt-svg-overlay__bg-container" role="button" tabindex="0"><div><div class="mkt-svg-overlay__image-padding"><picture><source media="(max-width:767px)" srcset="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_S_SLIDE_1@2x.jpg"><img alt="" src="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_XL_SLIDE_1@2x.jpg"></picture></div></div><div class="mkt-svg-overlay__svg-container"><div role="link" tabindex="-1"><picture><source media="(max-width: 767px)" srcset="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_S.svg"><img alt="Shop Cold Weather Train" src="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_XL.svg"></picture></div></div></div></div></div></div></div><div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 484px; position: relative; left: -484px; opacity: 0; transition: opacity 500ms ease 0s, visibility 500ms ease 0s;"><div><div tabindex="-1" style="width: 100%; display: inline-block;"><div class="mkt-svg-overlay"><div class="mkt-svg-overlay__bg-container" role="button" tabindex="0"><div><div class="mkt-svg-overlay__image-padding"><picture><source media="(max-width:767px)" srcset="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_S_SLIDE_2@2x.jpg"><img alt="" src="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_XL_SLIDE_2@2x.jpg"></picture></div></div><div class="mkt-svg-overlay__svg-container"><div role="link" tabindex="-1"><picture><source media="(max-width: 767px)" srcset="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_S.svg"><img alt="Shop Cold Weather Train" src="/Asset_Archive/ATWeb/content/0027/760/169/assets/HOL1_NA_RanierTight_ISM_XL.svg"></picture></div></div></div></div></div></div></div></div></div><button class="slick-arrow slick-next"><img src="/Asset_Archive/ONWeb/content/0017/036/258/assets/carousel/Certona_Right_Arrow_OFF.svg"></button></div></div></div></div></div></div></div></div></div></div></div>');

          for (var i = 0; i < 10; i++) {
            jQuery(error_message).append('<div style="font-size: 85%; width: 25%;" className="css-1tlgavl"><div class="dummy_product css-11ltxe6"><div spacing="0.5" class="css-1ohx80u"><div class="product-card css-1u39os9"><div class="product-card__image-wrapper css-cet0rr" id="product983000002"><a class="css-0" href="/browse/product.do?pid=' + products[i].businessCatalogItemId + '"><img class="product-card__image" src="' + products[i].categoryLargeImage.path + '"></a><div class="css-1tt204t" style="font-family: Avenir Next, sans-serif;color: rgb(102, 102, 102);line-height: 1.4;text-transform: none;font-weight: normal;font-size: 0.8125rem;letter-spacing: 1px;">' + products[i].name + '<div><div class="product-card-price"><div><span>' + products[i].priceFormatXhtml + '</span></div></div></div></div></div></div></div></div></div>');

          }
        });

      }
      )





    }


  }
)