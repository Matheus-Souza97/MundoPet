"use strict";

import { apiConfig } from "../services/api-config.js";
export async function scheduleNew({
  name,
  petName,
  contact,
  service,
  date,
  time,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        petName,
        contact,
        service,
        date,
        time,
      }),
    });
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível realizar o agendamento. Tente novamente mais tarde.",
    );
  }
}
