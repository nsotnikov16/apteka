const calendar = document.querySelector(".calendar")
if (calendar) {
  const calendarBtn = calendar.querySelector('.calendar__btn')
  const calendarExpand = calendar.querySelector('.calendar__expand')
  calendarBtn.addEventListener('click', () => calendarExpand.classList.toggle('open'))
  function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
      D = new Date(year, month, Dlast),
      DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
      calendar = "<tr>",
      month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
    if (DNfirst != 0) {
      for (var i = 1; i < DNfirst; i++) calendar += "<td>";
    } else {
      for (var i = 0; i < 6; i++) calendar += "<td>";
    }
    for (var i = 1; i <= Dlast; i++) {
      if (
        i == new Date().getDate() &&
        D.getFullYear() == new Date().getFullYear() &&
        D.getMonth() == new Date().getMonth()
      ) {
        calendar += `<td class="calendar__day active">` + i;
      } else {
        calendar += '<td class="calendar__day">' + i;
      }
      if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
        calendar += "<tr>";
      }
    }
    for (var i = DNlast; i < 7; i++) calendar += "<td>&nbsp;";
    document.querySelector("#" + id + " tbody").innerHTML = calendar;
    document.querySelector("#" + id + " thead td:nth-child(2)").innerHTML =
      month[D.getMonth()] + ", " + D.getFullYear() + " г.";
    document.querySelector(
      "#" + id + " thead td:nth-child(2)"
    ).dataset.month = D.getMonth();
    document.querySelector(
      "#" + id + " thead td:nth-child(2)"
    ).dataset.year = D.getFullYear();
    document.querySelector(
      "#" + id + " thead td:nth-child(2)"
    ).dataset.fulldate = `${D.getMonth() + 1}` + "." + D.getFullYear();
    document
      .querySelector("#" + id + " thead td:nth-child(2)")
      .classList.add("fulldate");

    if (document.querySelectorAll("#" + id + " tbody tr").length < 6) {
      // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      document.querySelector("#" + id + " tbody").innerHTML +=
        "<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;";
    }
  }
  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector(
    "#calendar2 thead tr:nth-child(1) td:nth-child(1)"
  ).onclick = function ({target}) {
    Calendar2(
      "calendar2",
      document.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
      parseFloat(
        document.querySelector("#calendar2 thead td:nth-child(2)").dataset.month
      ) - 1
    );
    calendarBtn.querySelector('.calendar__now').textContent = document.querySelector(".fulldate").textContent
    abc();
  };
  // переключатель плюс месяц
  document.querySelector(
    "#calendar2 thead tr:nth-child(1) td:nth-child(3)"
  ).onclick = function () {
    Calendar2(
      "calendar2",
      document.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
      parseFloat(
        document.querySelector("#calendar2 thead td:nth-child(2)").dataset.month
      ) + 1
    );
    calendarBtn.querySelector('.calendar__now').textContent = document.querySelector(".fulldate").textContent
    abc();
  };

  function abc() {
    const days = document.querySelectorAll(".calendar__day");
    const calendarInput = document.querySelector(".calendar input");

    days.forEach((day, ind, arr) => {
      day.addEventListener("click", (evt) => {
        let currentData =
          evt.target.textContent +
          `.` +
          document.querySelector(".fulldate").dataset.fulldate;
        calendarInput.value = currentData;
        arr.forEach((el) => {
          el.classList.remove("active");
          if (evt.target === el) el.classList.add("active");
        });
      });
    });
  }

  abc();

  //Сюда свою функцию
  const calendarForm = document.querySelector(".calendar form");
  calendarForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  //
}
