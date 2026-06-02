import dayjs from "dayjs";

import { apiConfig } from "../../services/api-config.js";

const container = document.querySelector(".cards");

export async function showSchedules(schedules) {
  try {
    container.innerHTML = "";
    console.log(schedules);

    const cardsMorning = document.createElement("div");
    cardsMorning.classList.add("cards-wrapper");
    cardsMorning.id = "cardsMorning";

    const cardsAfternnon = document.createElement("div");
    cardsAfternnon.classList.add("cards-wrapper");
    cardsAfternnon.id = "cardsAfternoon";

    const cardsNight = document.createElement("div");
    cardsNight.classList.add("cards-wrapper");
    cardsNight.id = "cardsNight";

    const morning = document.createElement("div");
    morning.id = "morning";

    const afternoon = document.createElement("div");
    afternoon.id = "afternoon";

    const night = document.createElement("div");
    night.id = "night";

    const imgMorning = document.createElement("img");
    imgMorning.setAttribute("src", "src/assets/morning.svg");

    const imgAfternoon = document.createElement("img");
    imgAfternoon.setAttribute("src", "src/assets/afternoon.svg");

    const imgNight = document.createElement("img");
    imgNight.setAttribute("src", "src/assets/night.svg");

    const periodMorning = document.createElement("h2");
    periodMorning.classList.add("periodMorning");
    periodMorning.id = "period";

    const periodAfternoon = document.createElement("h2");
    periodAfternoon.classList.add("periodAfternoon");
    periodAfternoon.id = "period";

    const periodNight = document.createElement("h2");
    periodNight.classList.add("periodNight");
    periodNight.id = "period";

    const hourMorning = document.createElement("h2");
    hourMorning.classList.add("hourMorning");
    hourMorning.id = "hour";

    const hourAfternoon = document.createElement("h2");
    hourAfternoon.classList.add("hourAfternoon");
    hourAfternoon.id = "hour";

    const hourNight = document.createElement("h2");
    hourNight.classList.add("hourNight");
    hourNight.id = "hour";

    const agendamentsWarapperMorning = document.createElement("div");
    agendamentsWarapperMorning.classList.add("agendaments-warapper");
    agendamentsWarapperMorning.id = "agendamentsWarapperMorning";

    const agendamentsWarapperAfternoon = document.createElement("div");
    agendamentsWarapperAfternoon.classList.add("agendaments-warapper");
    agendamentsWarapperAfternoon.id = "agendamentsWarapperAfternoon";

    const agendamentsWarapperNight = document.createElement("div");
    agendamentsWarapperNight.classList.add("agendaments-warapper");
    agendamentsWarapperNight.id = "agendamentsWarapperNight";

    const listMorning = document.createElement("ul");
    listMorning.id = "listMorning";

    const listAfternoon = document.createElement("ul");
    listAfternoon.id = "listAfternoon";

    const listNight = document.createElement("ul");
    listNight.id = "listNight";

    periodMorning.append(imgMorning);
    periodMorning.append(" Manhã");
    hourMorning.innerHTML = "09h-12h";

    periodAfternoon.append(imgAfternoon);
    periodAfternoon.append(" Tarde");
    hourAfternoon.innerHTML = "13h-18h";

    periodNight.append(imgNight);
    periodNight.append(" Noite");
    hourNight.innerHTML = "19h-21h";

    morning.append(periodMorning, hourMorning);
    agendamentsWarapperMorning.append(listMorning);
    cardsMorning.append(morning, agendamentsWarapperMorning);

    afternoon.append(periodAfternoon, hourAfternoon);
    agendamentsWarapperAfternoon.append(listAfternoon);
    cardsAfternnon.append(afternoon, agendamentsWarapperAfternoon);

    night.append(periodNight, hourNight);
    agendamentsWarapperNight.append(listNight);
    cardsNight.append(night, agendamentsWarapperNight);

    schedules.sort((a, b) => a.time - b.time);

    for (let index = 0; index < schedules.length; index++) {
      const li = document.createElement("li");

      const info = document.createElement("div");
      info.id = "info";

      const checkin = document.createElement("h3");
      checkin.id = "checkin";

      const petNameDisplay = document.createElement("h3");
      petNameDisplay.id = "petName";

      const clientName = document.createElement("h3");
      clientName.id = "clientName";

      const p = document.createElement("p");
      p.id = "service";

      const a = document.createElement("a");
      a.classList.add("remove");

      clientName.textContent = ` / ${schedules[index].name}`;
      petNameDisplay.textContent = schedules[index].petName;
      p.textContent = schedules[index].service;
      a.textContent = "Remover agendamento";
      a.id = schedules[index].id;
      checkin.textContent = `${schedules[index].time}h`;

      info.append(checkin, petNameDisplay, clientName);

      li.append(info, p, a);

      let hourValue = Number(schedules[index].time);
      if (hourValue <= 12) {
        listMorning.append(li);
      } else if (hourValue <= 18) {
        listAfternoon.append(li);
      } else {
        listNight.append(li);
      }

      if (listMorning.children.length > 0) {
        container.append(cardsMorning);
      }

      if (listAfternoon.children.length > 0) {
        container.append(cardsAfternnon);
      }

      if (listNight.children.length > 0) {
        container.append(cardsNight);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
