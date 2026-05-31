let currentDate = new Date();
let selectedDays = new Set();
let reservedDays = new Set(JSON.parse(localStorage.getItem('reservedDays') || '[]'));


document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('loggedIn')) {
    document.getElementById('cadastro-modal').classList.add('show');
  } else {
    initCalendar();
  }

  const cadastroForm = document.getElementById('cadastro-form');
  if (cadastroForm) {
    cadastroForm.addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value
      }));
      document.getElementById('cadastro-modal').classList.remove('show');
      initCalendar();
    });
  }
});

function initCalendar() {
  renderCalendar();

  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');
  const reserveBtn = document.getElementById('reserve-button');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
  }

  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      if (selectedDays.size === 0) {
        alert('Selecione pelo menos um dia para reservar.');
        return;
      }
      reservedDays = new Set([...reservedDays, ...selectedDays]);
      localStorage.setItem('reservedDays', JSON.stringify([...reservedDays]));
      selectedDays.clear();
      renderCalendar();
      alert('Estoque reservado para os dias selecionados!');
    });
  }
}

function renderCalendar() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  document.getElementById('month-year').textContent = `${getMonthName(month)} ${year}`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  daysOfWeek.forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.style.fontWeight = 'bold';
    dayHeader.style.textAlign = 'center';
    dayHeader.style.color = 'var(--primary)';
    dayHeader.textContent = day;
    grid.appendChild(dayHeader);
  });

  let date = new Date(startDate);
  while (date <= lastDay || grid.children.length % 7 !== 0) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    if (date.getMonth() === month) {
      dayDiv.textContent = date.getDate();
      const dateStr = date.toDateString();

      if (selectedDays.has(dateStr)) {
        dayDiv.classList.add('selected');
      } else if (reservedDays.has(dateStr)) {
        dayDiv.classList.add('reserved');
      }

      dayDiv.addEventListener('click', () => {
        if (reservedDays.has(dateStr)) return;
        if (selectedDays.has(dateStr)) {
          selectedDays.delete(dateStr);
          dayDiv.classList.remove('selected');
        } else {
          selectedDays.add(dateStr);
          dayDiv.classList.add('selected');
        }
      });
    }

    grid.appendChild(dayDiv);
    date.setDate(date.getDate() + 1);
  }
}

function getMonthName(month) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return months[month];
}
