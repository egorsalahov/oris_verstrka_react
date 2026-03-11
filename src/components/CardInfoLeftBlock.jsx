import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardOptions from '../components/CardOptions';

const CardInfoLeftBlock = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tours.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const foundTour = data.find(t => t.id === parseInt(id));
        setTour(foundTour);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ tours.json:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading || !tour) {
    return (
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
                 <div className="TVTourFlightPortNames">Загрузка...</div>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    );
  }

  // ✅ ТОЧНАЯ дата возврата из tour.dates
  const returnDate = tour.dates.split(' - ')[1];

  return (
    <div className="TVTourCardInfoLeftBlock">
      <CardOptions />
      
      <div className="TVTourCardInfoFlights">
        <div className="TVTourFlightsListControl">
        
         <div className="TVTourFlightPreview" />
         <div className="TVTourFlightPreview" />
        
         <div className="TVTourFlightsList">
          
          {/* РЕЙС ТУДА — ДАННЫЕ ИЗ tours.json */}
          <div className="TVTourFlightControl TVFontSize-M TVTextTransform-Uppercase TVGapSize-M">
            <div className="TVTourFlightIcon" />
            
            <div className="TVTourFlightTimeBlock">
              <div className="TVTourFlightTime">
                <div>09:55</div>
                <div>15:15</div>
              </div>
              <div className="TVTourFlightDepartureDate">{tour.outboundDate}</div>
            </div>
            
            <div className="TVTourFlightPortBlock">
              <div className="TVTourFlightPortNames">
                {tour.departureCity} - {tour.city}
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
                  backgroundImage: `url('https://picsum.photos/40/30?random=${tour.id}')`,
                }}
              />
              <div>
                <div className="TVTourFlightAirlineName TVOneAirline">
                  {tour.airline}
                </div>
                <div className="TVTourFlightType">Чартерный</div>
              </div>
            </div>
            
            <div className="TVTourFlightInfo" />
          </div>

          {/* РЕЙС ОБРАТНО — ДАННЫЕ ИЗ tours.json */}
          <div className="TVTourFlightControl TVTourFlightReverse TVFontSize-M TVTextTransform-Uppercase TVGapSize-M">
            <div className="TVTourFlightIcon" />
            
            <div className="TVTourFlightTimeBlock">
              <div className="TVTourFlightTime">
                <div>16:20</div>
                <div>21:05</div>
              </div>
              <div className="TVTourFlightDepartureDate">{returnDate}</div>
            </div>
            
            <div className="TVTourFlightPortBlock">
              <div className="TVTourFlightPortNames">
                {tour.city} - {tour.departureCity}
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
                  backgroundImage: `url('https://picsum.photos/40/30?random=${tour.id + 1}')`,
                }}
              />
              <div>
                <div className="TVTourFlightAirlineName TVOneAirline">
                  {tour.airline}
                </div>
                <div className="TVTourFlightType">Чартерный</div>
              </div>
            </div>
            
            <div className="TVTourFlightInfo" />
          </div>
          
        </div>
        
        <div className="TVTourFlightMessage TVTourFlightDummy TVHide" />
        <div className="TVTourFlightMessage TVTourFlightUnknown TVHide" />
        <div className="TVTourFlightMoreButton" />
        </div>

        {/* СКРЫТЫЕ БЛОКИ — НЕ ТРОГАЕМ */}
        <div className="TVTourFlightSelectionListControl TVHide">
         <div className="TVTourFlightSelectionTitle">
           <div className="TVTourFlightSelectionDeparture">
             {tour.departureCity} (DME)
           </div>
           <div className="TVTourFlightSelectionArrival">
             {tour.city} (IST)
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
                     <div className="TVFlightInfoTime">09:55 - 15:15</div>
                     <div className="TVFlightInfoBlock TVDirectFlight">
                       <div className="TVFlightInfoText">5 ч 20 м</div>
                       <div className="TVFlightConnectionInfo" />
                     </div>
                   </div>
                 </div>
                 <div className="TVFlightSelectionBlock">
                   <div className="TVFlightInfoControl">
                     <div className="TVFlightInfoTime">16:20 - 21:05</div>
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
                         backgroundImage: `url('https://picsum.photos/40/30?random=${tour.id}')`,
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
        Внимание! В состав тура в <strong>{tour.country}</strong> из <strong>{tour.departureCity}</strong> включен перелет регулярным авиарейсом.
        <b>Цена не окончательная</b>, она может меняться в зависимости
        от тарифа авиакомпании. Отправьте запрос для уточнения стоимости
        тура.
      </div>
    </div>
  );
};

export default CardInfoLeftBlock;
