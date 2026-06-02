const date = document.getElementById("date");

import { removeSchedule } from "./deleteSchedule-by-id";
import { scheduleNew } from "./schedule-new";
import { scheduleFetchByDay } from "./schedule-fetch-by-day";
import { showSchedules } from "../modules/schedules/showSchedules.js";
import { apiConfig } from "./api-config.js";

async function schedules() {
  const response = await fetch(`${apiConfig.baseURL}/schedules`);
  const data = await response.json();
  return data;
}

const data = await schedules();

document.addEventListener("click", async (event) => {
  const button = event.target.closest(".remove");

  console.log("clicou");
  if (!button) return;

  const id = button.id;

  console.log("ID do agendamento:", id);

  await removeSchedule(id);

  const data = await schedules();

  await showSchedules(data);
  //const data = await scheduleFetchByDay(date.value);
  //console.log(data); // aqui você vai re-renderizar depois
});
