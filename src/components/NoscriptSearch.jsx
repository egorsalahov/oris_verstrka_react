import React from 'react';

const NoscriptSearch = () => {
  return (
    <>
      <noscript>
    <div>
      <img
        alt="Top.Mail.Ru"
        src="/images/counter.gif"
        style={{
          border: "0",
          left: "-9999px",
          position: "absolute",
        }}
      />
    </div>
  </noscript>
  <div id="myCustomTooltip">
    <div
      style={{
        alignItems: "center",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "12px",
        paddingBottom: "8px",
      }}>
      <div
        id="tooltipTitle"
        style={{
          color: "#333",
          fontSize: "16px",
          fontWeight: "bold",
        }}>
        Выбор
      </div>
      <div
        id="monthNav"
        style={{
          display: "none",
          gap: "8px",
        }}>
        <button className="nav-btn" id="prevMonth">
          {`<`}
        </button>
        <button className="nav-btn" id="nextMonth">
          {`>`}
        </button>
      </div>
    </div>
    <div id="tooltipContent" />
    <div
      id="tooltipFooter"
      style={{
        display: "none",
        marginTop: "15px",
        pt: "10px",
      }}>
      <button
        id="applyBtn"
        style={{
          background: "#c50076",
          border: "none",
          borderRadius: "25px",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          padding: "10px",
          width: "100%",
        }}>
        Применить
      </button>
    </div>
  </div>
  <script
    dangerouslySetInnerHTML={{
      __html:
        "// Состояние приложенияlet adults = 2;let selectedChildren = [];let dateSelection = [];let nightSelection = [];let currentMonthIdx = 0;const monthsData = [    { name: 'Февраль', short: 'фев', days: Array.from({length: 28}, (_, i) => i + 1) },    { name: 'Март', short: 'мар', days: Array.from({length: 31}, (_, i) => i + 1) }];// Главный обработчик кликовwindow.onclick = function(event) {    const tooltip = document.getElementById('myCustomTooltip');    const content = document.getElementById('tooltipContent');    const title = document.getElementById('tooltipTitle');    const footer = document.getElementById('tooltipFooter');    const nav = document.getElementById('monthNav');    const trigger = event.target.closest('.TVDepartureFilter, .TVCountryFilter, .TVFlyDatesFilter, .TVNightsFilter, .TVTouristsFilter');        if (!trigger) {        if (!tooltip.contains(event.target)) tooltip.style.display = 'none';        return;    }    // Позиционирование    tooltip.style.display = 'block';    tooltip.style.left = event.pageX + 'px';    tooltip.style.top = (event.pageY + 10) + 'px';        // Сброс вида    content.innerHTML = '';    footer.style.display = 'none';    nav.style.display = 'none';    // 1. ЛОГИКА: ТУРИСТЫ    if (trigger.closest('.TVTouristsFilter')) {        renderTouristsUI(trigger);    }    // 2. ЛОГИКА: ГОРОД / СТРАНА    else if (trigger.closest('.TVDepartureFilter, .TVCountryFilter')) {        const isCity = trigger.closest('.TVDepartureFilter');        title.innerText = isCity ? 'Город вылета' : 'Страна';        const list = isCity ? ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Новосибирск'] : ['Турция', 'Египет', 'ОАЭ', 'Таиланд', 'Россия'];                list.forEach(item => {            const div = document.createElement('div');            div.innerText = item;            div.style = 'padding: 10px; cursor: pointer; border-bottom: 1px solid #f9f9f9;';            div.onclick = () => {                trigger.querySelector('.TVMainSelectContent').innerText = item;                tooltip.style.display = 'none';            };            content.appendChild(div);        });    }    // 3. ЛОГИКА: ДАТЫ    else if (trigger.closest('.TVFlyDatesFilter')) {        nav.style.display = 'flex';        dateSelection = [];        renderCalendar(trigger);    }    // 4. ЛОГИКА: НОЧИ    else if (trigger.closest('.TVNightsFilter')) {        title.innerText = 'Ночей от:';        nightSelection = [];        const grid = document.createElement('div');        grid.style = 'display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px;';        for (let i = 1; i <= 28; i++) {            const d = document.createElement('div');            d.innerText = i;            d.style = 'padding: 8px; text-align: center; border: 1px solid #eee; cursor: pointer; border-radius: 6px; font-size: 13px; background: #f8f9fa;';            d.onclick = function() {                this.style.background = '#333'; this.style.color = 'white';                nightSelection.push(i);                if (nightSelection.length === 2) {                    nightSelection.sort((a,b)=>a-b);                    trigger.querySelector('.TVMainSelectContent').innerText = \`${nightSelection[0]} - ${nightSelection[1]}\`;                    setTimeout(()=>tooltip.style.display='none', 400);                }            };            grid.appendChild(d);        }        content.appendChild(grid);    }};// --- ФУНКЦИИ ДЛЯ ТУРИСТОВ ---function renderTouristsUI(trigger) {    const content = document.getElementById('tooltipContent');    const title = document.getElementById('tooltipTitle');    const footer = document.getElementById('tooltipFooter');    title.innerText = 'Туристы';    footer.style.display = 'block';        content.innerHTML = \`        <div style=\"display: flex; justify-content: space-between; align-items: center; background: #f0f3f5; padding: 10px 15px; border-radius: 30px; margin-bottom: 15px;\">            <button class=\"cnt-btn-main\" onclick=\"updateAdults(-1)\">—</button>            <div style=\"font-weight: bold;\"><span id=\"adultCount\">${adults}</span> взрослых</div>            <button class=\"cnt-btn-main\" onclick=\"updateAdults(1)\">+</button>        </div>        <div id=\"selectedChildrenList\"></div>        <div id=\"ageSelector\" style=\"display: none; border-top: 1px solid #eee; padding-top: 10px; margin-top: 10px;\">            <div style=\"text-align: center; color: #666; font-size: 13px; margin-bottom: 10px;\">Выберите возраст ребенка</div>            <div class=\"age-grid\" id=\"ageGrid\"></div>        </div>        <button id=\"addChildBtn\" onclick=\"showAgeSelector()\" style=\"width: 100%; padding: 12px; background: #f0f3f5; border: none; border-radius: 30px; color: #5e6d7a; cursor: pointer; font-weight: bold; margin-top: 10px;\">            + Добавить ребенка        </button>    \`;    renderSelectedChildren();        document.getElementById('applyBtn').onclick = () => {        let txt = \`${adults} взросл\`;        if (selectedChildren.length > 0) txt = \`${adults} взр ${selectedChildren.length} реб\`;        trigger.querySelector('.TVMainSelectContent').innerText = txt;        document.getElementById('myCustomTooltip').style.display = 'none';    };}window.updateAdults = (val) => {    adults = Math.max(1, adults + val);    const el = document.getElementById('adultCount');    if (el) el.innerText = adults;};window.showAgeSelector = () => {    const selector = document.getElementById('ageSelector');    const addBtn = document.getElementById('addChildBtn');    const ageGrid = document.getElementById('ageGrid');    selector.style.display = 'block';    addBtn.style.display = 'none';    ageGrid.innerHTML = '';        const ages = ['до 2 лет', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет', '13 лет', '14 лет', '15 лет'];    ages.forEach(age => {        const btn = document.createElement('div');        btn.className = 'age-item';        btn.innerText = age;        btn.onclick = () => {            selectedChildren.push(age);            selector.style.display = 'none';            addBtn.style.display = (selectedChildren.length >= 3) ? 'none' : 'block';            renderSelectedChildren();        };        ageGrid.appendChild(btn);    });};window.renderSelectedChildren = () => {    const list = document.getElementById('selectedChildrenList');    if (!list) return;    list.innerHTML = '';    selectedChildren.forEach((age, idx) => {        const item = document.createElement('div');        item.style = 'display:flex; justify-content:space-between; align-items:center; background:#fff; border:1px solid #eee; padding:8px 12px; border-radius:15px; margin-bottom:5px; font-size:13px;';        item.innerHTML = \`<span>Ребенок ${idx+1} (${age})</span> <span onclick=\"selectedChildren.splice(${idx},1); renderSelectedChildren();\" style=\"color:#c50076; cursor:pointer; font-weight:bold;\">&times;</span>\`;        list.appendChild(item);    });    const addBtn = document.getElementById('addChildBtn');    if (addBtn) addBtn.style.display = (selectedChildren.length >= 3) ? 'none' : 'block';};// --- ФУНКЦИИ ДЛЯ КАЛЕНДАРЯ ---function renderCalendar(trigger) {    const content = document.getElementById('tooltipContent');    const title = document.getElementById('tooltipTitle');    const month = monthsData[currentMonthIdx];    title.innerText = month.name + ' 2026';    content.innerHTML = '';    const grid = document.createElement('div');    grid.style = 'display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;';        month.days.forEach(day => {        const d = document.createElement('div');        d.innerText = day;        d.style = 'padding: 8px 0; text-align: center; border: 1px solid #f0f0f0; cursor: pointer; border-radius: 4px; font-size: 13px;';        d.onclick = function() {            this.style.background = '#c50076'; this.style.color = 'white';            dateSelection.push({day, month: month.short});            if (dateSelection.length === 2) {                trigger.querySelector('.TVMainSelectContent').innerText = \`${dateSelection[0].day} ${dateSelection[0].month} - ${dateSelection[1].day} ${dateSelection[1].month}\`;                setTimeout(()=>document.getElementById('myCustomTooltip').style.display='none', 400);            }        };        grid.appendChild(d);    });    content.appendChild(grid);}document.getElementById('prevMonth').onclick = (e) => {     e.stopPropagation();     if (currentMonthIdx > 0) { currentMonthIdx--; renderCalendar(document.querySelector('.TVFlyDatesFilter')); }};document.getElementById('nextMonth').onclick = (e) => {     e.stopPropagation();     if (currentMonthIdx < monthsData.length - 1) { currentMonthIdx++; renderCalendar(document.querySelector('.TVFlyDatesFilter')); }};",
    }}
  />
    </>
  );
};

export default NoscriptSearch;