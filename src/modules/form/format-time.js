"use strick";

import dayjs from "dayjs";

const calendar = document.getElementById("calendar");
const clock = document.getElementById("select");

//Define a data minima como sendo o hoje e ja deixa carregado o dia no calendario
calendar.value = dayjs().format("YYYY-MM-DD");
calendar.min = dayjs().format("YYYY-MM-DD");

calendar.addEventListener("click", () => {
  calendar.showPicker();
});

//Define a hora minima como sendo agora mais 1 hora e carrega no select
const currentHour = Number(dayjs().format("H"));

[...clock.options].forEach((option) => {
  const optionHour = Number(option.value);

  if (optionHour <= currentHour) {
    option.disabled = true;
  }
});
clock.value = dayjs().add(1, "hour").format("HH");
