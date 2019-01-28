var nav_calendar = document.getElementById('nav-calendar');
var calendar = document.getElementById('calendar');
var today = new Date();

function redatenext() {
  today.setMonth(today.getMonth() + 1);
  removElemChild(nav_calendar);
  removElemChild(calendar);

  renderNav(today);
  renderCalendar(today);

  return console.log('next');
}
function redateprew() {
  today.setMonth(today.getMonth() - 1);
  removElemChild(nav_calendar);
  removElemChild(calendar);

  renderNav(today);
  renderCalendar(today);

  return console.log('prew');
}

function removElemChild(_elem){
  while (_elem.lastChild) {
    _elem.removeChild(_elem.lastChild);
  }
};

function renderNav(_date) {

  var prew_date = new Date(_date);
  prew_date.setMonth(_date.getMonth() - 1, 1);

  var next_date = new Date(_date);
  next_date.setMonth(_date.getMonth() + 1, 1);

  var prewmon = document.createElement('h3');
  prewmon.setAttribute( 'class', 'nav_calendar');
  prewmon.setAttribute( 'id', 'prew_mon');
  prewmon.textContent = prew_date.toLocaleString('ru', {month: 'short'});
  nav_calendar.appendChild(prewmon);

  var thismon = document.createElement('h3');
  thismon.setAttribute( 'class', 'nav_calendar');
  thismon.textContent = today.toLocaleString('ru', {month: 'long'});
  nav_calendar.appendChild(thismon);

  var nextmon = document.createElement('h3');
  nextmon.setAttribute( 'class', 'nav_calendar');
  nextmon.setAttribute( 'id', 'next_mon');
  nextmon.textContent = next_date.toLocaleString('ru', {month: 'short'});
  nav_calendar.appendChild(nextmon);
};

function renderCalendar(_date) {

  var temp_date = new Date(_date);
  temp_date.setMonth(temp_date.getMonth(), 1);

  for (let i = 0; i < 6; i++) {
    var tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      if (temp_date.getDay() != j) {
      var td = document.createElement('td');
      tr.appendChild(td);
      } else {
        if(temp_date.getMonth() != today.getMonth()){
          var td = document.createElement('td');
          tr.appendChild(td);
        } else{
          var td = document.createElement('td');
          td.setAttribute('class', 'calendar-day');
          td.setAttribute('date', temp_date.getDate() + '-' + temp_date.getMonth() + '-' + temp_date.getFullYear());
          td.textContent = temp_date.getDate();
          tr.appendChild(td);
          temp_date.setDate(temp_date.getDate()+1);
        }
      }
    }
    calendar.appendChild(tr);
  };
};

/* <script>
  renderNav(today);
  renderCalendar(today);
  document.addEventListener('mouseover' , function(){
    prew_mon.addEventListener("click" , redateprew, false );
    next_mon.addEventListener("click" , redatenext, false );
  });
</script> */
