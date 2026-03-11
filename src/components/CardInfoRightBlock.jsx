import React from 'react';

const CardInfoRightBlock = () => {
  return (
    <>
      <div className="TVTourCardInfoRightBlock">
              <div className="TVTourCardActionControl">
                <div className="TVTourCardActionPrice">
                  <div className="TVTourCardPriceControl TVGapSize-M">
                    <div
                      className="TVTourCardPriceValueWrapper TVAlignItems-center"
                      style={{
                        "--price-min-height": "32px",
                      }}>
                      <div className="TVTourCardPriceValue TVFontSize-M TVFontWeightSize-M">
                        49 728
                      </div>
                      <div className="TVTourCardPriceSuffix">
                        <div className="TVTourCardPriceCurrency TVFontSize-M TVFontWeightSize-M">
                          РУБ
                        </div>
                        <div className="TVTourCardPriceType TVFontSize-M TVFontWeightSize-M">
                          за номер
                        </div>
                      </div>
                      <div className="TVTourCardPriceWaiter">
                        <div className="TVSpinner TVSize-M TVColorBlue440 TVHide">
                          <div className="TVSpinnerDoubleOuter" />
                          <div className="TVSpinnerDoubleInner" />
                        </div>
                      </div>
                      <div
                        className="TVTourCardPriceAddToCart TVButtonHover TVHide"
                        style={{
                          "--add-to-cart-padding": "7px",
                        }}
                        title="Добавить в избранное">
                        <div className="TVAddCartButton TVSize-XXL">
                          <div className="TVAddCartIcon">
                            <svg
                              className="TVAddCartButtonHeartIcon"
                              height="17.172"
                              viewBox="0 0 20 17.172"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="m9.353 16.919-6.784-6.56a.824.824 0 0 1-.148-.125 1.875 1.875 0 0 0-.158-.145l-.023-.017-.017-.023c-.122-.158-.324-.4-.6-.714l-.008-.01a11.074 11.074 0 0 1-.74-1.088 5.3 5.3 0 0 1-.6-1.347 4.712 4.712 0 0 1-.276-1.6 5.215 5.215 0 0 1 1.438-3.9 5.448 5.448 0 0 1 4.011-1.4 4.954 4.954 0 0 1 1.438.239 5.865 5.865 0 0 1 1.347.633 9.542 9.542 0 0 1 1.054.778 8.092 8.092 0 0 1 .711.6 7.229 7.229 0 0 1 .706-.6 9.542 9.542 0 0 1 1.054-.778 5.853 5.853 0 0 1 1.348-.633 4.955 4.955 0 0 1 1.438-.239 5.459 5.459 0 0 1 4.014 1.4 5.131 5.131 0 0 1 1.434 3.687v.209c0 1.643-.857 3.354-2.545 5.081h-.007l-6.8 6.54a.952.952 0 0 1-1.29 0ZM4.411 1.868a5.313 5.313 0 0 0-.973.327 3.713 3.713 0 0 0-.859.606 3.194 3.194 0 0 0-.528 1 4.766 4.766 0 0 0-.219 1.5 5.558 5.558 0 0 0 1.966 3.754l6.2 5.977 6.205-5.98a5.568 5.568 0 0 0 1.964-3.751v-.175a4.766 4.766 0 0 0-.217-1.324 3.255 3.255 0 0 0-.531-1 3.727 3.727 0 0 0-.858-.606 5.338 5.338 0 0 0-.973-.327 8.907 8.907 0 0 0-1.034-.071 3.955 3.955 0 0 0-1.148.252 4.456 4.456 0 0 0-1.125.687l-.016.017a10.68 10.68 0 0 0-.88.7l-.058.051a12.73 12.73 0 0 0-.362.383c-.095.1-.182.2-.273.29a.945.945 0 0 1-1.384 0c-.087-.087-.176-.182-.267-.279-.114-.125-.229-.253-.369-.391l-.062-.054c-.249-.212-.531-.454-.872-.693l-.02-.017a4.369 4.369 0 0 0-1.125-.687 3.952 3.952 0 0 0-1.145-.252 9.12 9.12 0 0 0-1.037.063Z" />
                            </svg>
                          </div>
                          <div className="TVAddCartWaiter TVHide">
                            <div className="TVSpinner TVSize-S TVColorBlue400">
                              <div className="TVSpinnerDoubleOuter" />
                              <div className="TVSpinnerDoubleInner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="TVTourCardInstantConfirmation">
                      <div
                        className="TVInstantConfirmationControl TVSize-M TVColorRed560"
                        title="Мгновенное подтверждение - Гарантия мест в отеле">
                        <t-span class="TVInstantConfirmationContent TVFontSize-M TVFontWeightSize-M">
                          Гарантия мест в отеле
                        </t-span>
                      </div>
                    </div>
                    <div className="TVTourCardIncludePrices TVHide" />
                    <div className="TVTourCardPreviewIncludePrice" />
                    <div className="TVTourCardPreviewIncludePrice" />
                    <div className="TVTourCardPreviewIncludePrice" />
                  </div>
                </div>
                <div className="TVTourCardActionItems">
                  <div className="TVTourCardActionALtTours TVButtonHover">
                    Найти дешевле
                  </div>
                  <a
                    className="TVTourCardActionContinue TVButtonHover"
                    href=""
                    rel="nofollow noopener"
                    target="_blank">
                    Заявка на тур
                  </a>
                </div>
              </div>
            </div>
    </>
  );
};

export default CardInfoRightBlock;