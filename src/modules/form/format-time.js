"use strick";

import dayjs from "dayjs";

const calendar = document.getElementById("calendar");
const date = document.getElementById("date");
const clock = document.getElementById("select");

date.value = dayjs().format("YYYY-MM-DD");

//Define a data minima como sendo o hoje e ja deixa carregado o dia no calendario
//calendar.value = dayjs().format("YYYY-MM-DD");

calendar.min = dayjs().format("YYYY-MM-DD");

calendar.addEventListener("click", () => {
  calendar.showPicker();
});

calendar.addEventListener("input", () => {
  clock.value = dayjs().add(1, "hour").format("HH");
  dayVerify(calendar.value);
});

//Define a hora minima como sendo agora mais 1 hora e carrega no select
function dayVerify(value) {
  const currentDay = dayjs().format("YYYY-MM-DD");

  [...clock.options].forEach((option) => {
    option.disabled = false;
  });

  if (value === currentDay) {
    const currentHour = Number(dayjs().format("H"));

    [...clock.options].forEach((option) => {
      const optionHour = Number(option.value);

      if (optionHour <= currentHour) {
        option.disabled = true;
        console.log("desabilitou");
      }
    });
  }
}
clock.value = dayjs().add(1, "hour").format("HH");
