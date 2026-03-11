import React from 'react';
import CardOptions from '../components/CardOptions';

const CardInfoLeftBlock = () => {
  return (
    <>
      <div className="TVTourCardInfoLeftBlock">
              <CardOptions />
              <div className="TVTourCardInfoFlights">
                <div className="TVTourFlightsListControl">
                  <div className="TVTourFlightPreview" />
                  <div className="TVTourFlightPreview" />
                  <div className="TVTourFlightsList">
                    <div className="TVTourFlightControl TVFontSize-M TVTextTransform-Uppercase TVGapSize-M">
                      <div className="TVTourFlightIcon" />
                      <div className="TVTourFlightTimeBlock">
                        <div className="TVTourFlightTime">
                          <div>09:55</div>
                          <div>15:15</div>
                        </div>
                        <div className="TVTourFlightDepartureDate">1 мар</div>
                      </div>
                      <div className="TVTourFlightPortBlock">
                        <div className="TVTourFlightPortNames">
                          Домодедово - Стамбул
                        </div>
                        <div className="TVTourFlightConnectionBlock TVNonstop">
                          <div className="TVTourFlightDuration">5 ч 20 м</div>
                          <div className="TVTourFlightConnection" />
                        </div>
                      </div>
                      <div className="TVTourFlightAirlineBlock">
                        <div
                          className="TVTourFlightAirline"
                          style={{
                            backgroundImage:
                              'url("https://tourvisor.ru/pics/aircompany/U6.svg")',
                          }}
                        />
                        <div>
                          <div className="TVTourFlightAirlineName TVOneAirline">
                            Уральские авиалинии
                          </div>
                          <div className="TVTourFlightType">Регулярный</div>
                        </div>
                      </div>
                      <div className="TVTourFlightInfo" />
                    </div>
                    <div className="TVTourFlightControl TVTourFlightReverse TVFontSize-M TVTextTransform-Uppercase TVGapSize-M">
                      <div className="TVTourFlightIcon" />
                      <div className="TVTourFlightTimeBlock">
                        <div className="TVTourFlightTime">
                          <div>16:20</div>
                          <div>21:05</div>
                        </div>
                        <div className="TVTourFlightDepartureDate">7 мар</div>
                      </div>
                      <div className="TVTourFlightPortBlock">
                        <div className="TVTourFlightPortNames">
                          Стамбул - Домодедово
                        </div>
                        <div className="TVTourFlightConnectionBlock TVNonstop">
                          <div className="TVTourFlightDuration">4 ч 45 м</div>
                          <div className="TVTourFlightConnection" />
                        </div>
                      </div>
                      <div className="TVTourFlightAirlineBlock">
                        <div
                          className="TVTourFlightAirline"
                          style={{
                            backgroundImage:
                              'url("https://tourvisor.ru/pics/aircompany/U6.svg")',
                          }}
                        />
                        <div>
                          <div className="TVTourFlightAirlineName TVOneAirline">
                            Уральские авиалинии
                          </div>
                          <div className="TVTourFlightType">Регулярный</div>
                        </div>
                      </div>
                      <div className="TVTourFlightInfo" />
                    </div>
                  </div>
                  <div className="TVTourFlightMessage TVTourFlightDummy TVHide" />
                  <div className="TVTourFlightMessage TVTourFlightUnknown TVHide" />
                  <div className="TVTourFlightMoreButton" />
                </div>
                <div className="TVTourFlightSelectionListControl TVHide">
                  <div className="TVTourFlightSelectionTitle">
                    <div className="TVTourFlightSelectionDeparture">
                      Домодедово (DME)
                    </div>
                    <div className="TVTourFlightSelectionArrival">
                      Стамбул (IST)
                    </div>
                    <div className="TVTourFlightSelectionClose" />
                  </div>
                  <div className="TVTourFlightSelectionContent">
                    <div className="TVFlightSelectionListTitle">
                      <div className="TVFlightSelectionListTitleForward" />
                      <div className="TVFlightSelectionListTitleReversed" />
                      <div className="TVFlightSelectionListTitleAirline" />
                    </div>
                    <div className="TVTourFlightSelectionList TVStyleScroll">
                      <div className="TVFlightSelectionList">
                        <div className="TVSpinner TVFlightSelectionListWaiter TVSize-M TVColorBlue440 TVHide">
                          <div className="TVSpinnerDoubleOuter" />
                          <div className="TVSpinnerDoubleInner" />
                        </div>
                        <div className="TVFlightSelectionControl">
                          <div className="TVFlightSelectionBlock">
                            <div className="TVFlightInfoControl">
                              <div className="TVFlightInfoTime">
                                09:55 - 15:15
                              </div>
                              <div className="TVFlightInfoBlock TVDirectFlight">
                                <div className="TVFlightInfoText">5 ч 20 м</div>
                                <div className="TVFlightConnectionInfo" />
                              </div>
                            </div>
                          </div>
                          <div className="TVFlightSelectionBlock">
                            <div className="TVFlightInfoControl">
                              <div className="TVFlightInfoTime">
                                16:20 - 21:05
                              </div>
                              <div className="TVFlightInfoBlock TVDirectFlight">
                                <div className="TVFlightInfoText">4 ч 45 м</div>
                                <div className="TVFlightConnectionInfo" />
                              </div>
                            </div>
                          </div>
                          <div className="TVFlightSelectionBlock">
                            <div className="TVFlightSelectionAirlines">
                              <div
                                className="TVAirline"
                                style={{
                                  backgroundImage:
                                    'url("https://tourvisor.ru/pics/aircompany/U6.svg")',
                                }}
                              />
                            </div>
                            <div className="TVFlightSelectionButtonBlock">
                              <div className="TVFlightSelectionButton TVSelectionButton" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TVOrderWarningMessage">
                Внимание! В состав тура включен перелет регулярным авиарейсом.
                <b>Цена не окончательная</b>, она может меняться в зависимости
                от тарифа авиакомпании. Отправьте запрос для уточнения стоимости
                тура.
              </div>
            </div>
    </>
  );
};

export default CardInfoLeftBlock;