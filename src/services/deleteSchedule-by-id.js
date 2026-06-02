import { apiConfig } from "./api-config";

import { scheduleFetchByDay } from "./schedule-fetch-by-day";

export async function removeSchedule(id) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento removido com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Erro ao remover o agendamento!");
  }
}
