import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { showSchedules } from "../../modules/schedules/showSchedules.js";

const selectedDate = document.getElementById("date");

selectedDate.addEventListener("click", () => {
  selectedDate.showPicker();
});

selectedDate.addEventListener("input", () => {
  schedulesDay();
});

export async function schedulesDay() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay(date);
  console.log(dailySchedules);
  showSchedules(dailySchedules);
}
