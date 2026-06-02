"use strict";

import { isEmpty } from "./isEmpty.js";
import { scheduleNew } from "../../services/schedule-new.js";
import { blockSchedule } from "../form/format-time.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
//import { schema } from "webpack-dev-server";

const dayjs = require("dayjs");

const form = document.querySelector("form");
const tutorName = document.getElementById("tutorName");
const pet = document.getElementById("pet_Name");
const phone = document.getElementById("contact");
const description = document.getElementById("description");
const calendar = document.getElementById("calendar");
const clock = document.getElementById("select");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isEmpty()) {
    return;
  } else {
    const schedule = {
      name: tutorName.value,
      petName: pet.value,
      contact: phone.value,
      service: description.value,
      date: calendar.value,
      time: clock.value,
    };
    const existing = await scheduleFetchByDay(calendar.value);

    const conflict = existing.some((item) => item.time === schedule.time);

    if (conflict) {
      alert("Horário já ocupado");
      return;
    }

    await scheduleNew(schedule);
  }
});
