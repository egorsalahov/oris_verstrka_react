import React from 'react';

const TourHeader = () => {
  return (
    <>
      <div className="TVTourCardWindowHeaderBlock">
      <div className="TVTourCardWindowHeader">
        <div className="TVTourCardHeaderBtn TVMenuIcon" title="Открыть меню" />
        <div className="TVTourCardHeaderBtn TVShareIcon" title="Поделиться">
          <svg
            className="TVShareIconSvg"
            fill="#5c6672"
            height="18.854"
            viewBox="0 0 17.428 18.854"
            width="17.428"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.308,18.822H4.114a5.293,5.293,0,0,1-2.48-.32A2.918,2.918,0,0,1,.352,17.218a5.3,5.3,0,0,1-.32-2.482V10.142A5.321,5.321,0,0,1,.256,8.061,2.916,2.916,0,0,1,1.845,6.472a5.327,5.327,0,0,1,2.082-.224,1.023,1.023,0,0,1,0,2.045,5.506,5.506,0,0,0-1.3.067.9.9,0,0,0-.482.482,5.56,5.56,0,0,0-.069,1.3v4.594a5.516,5.516,0,0,0,.1,1.552.887.887,0,0,0,.389.391,5.538,5.538,0,0,0,1.551.1H13.31a5.53,5.53,0,0,0,1.55-.1.9.9,0,0,0,.391-.391,5.534,5.534,0,0,0,.1-1.551v-4.6a5.606,5.606,0,0,0-.067-1.3.9.9,0,0,0-.482-.483,5.6,5.6,0,0,0-1.3-.068,1.022,1.022,0,1,1,0-2.044,5.322,5.322,0,0,1,2.081.223,2.923,2.923,0,0,1,1.589,1.59,5.318,5.318,0,0,1,.223,2.08v4.6a5.281,5.281,0,0,1-.319,2.48A2.922,2.922,0,0,1,15.791,18.5a5.281,5.281,0,0,1-2.483.321ZM7.791,10.571h0V3.107L6.378,4.217A1.022,1.022,0,0,1,5.116,2.609L8.151.229a1.017,1.017,0,0,1,.37-.2h.041l.05-.012A.256.256,0,0,1,8.695,0H8.92l.056.007H9.04l.023.008h.022a1.032,1.032,0,0,1,.391.2L12.51,2.6a1.024,1.024,0,0,1-1.26,1.615L9.836,3.108v7.463a1.023,1.023,0,1,1-2.045,0Z" />
          </svg>
        </div>
        <a
          className="TVTourCardOperatorLinkBlock TVDisabled"
          href=""
          rel="nofollow noopener"
          target="_blank"
          title="">
          <div className="TVTourCardHeaderBtn TVOperatorIcon TVHide" />
          <div className="TVTourCardOperatorName TVHide" />
          <img
            className="TVTourCardOperatorLogo"
            src="//tourvisor.ru/pics/operators/mobilelogo/25.svg"
          />
        </a>
        <div className="TVTourCardOperatorBlock TVDisabled TVHide">
          <div className="TVTourCardHeaderBtn TVOperatorIcon TVHide" />
          <div className="TVTourCardOperatorName TVHide" />
          <img
            className="TVTourCardOperatorLogo"
            src="//tourvisor.ru/pics/operators/mobilelogo/25.svg"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default TourHeader;