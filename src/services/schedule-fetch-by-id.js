import { apiConfig } from "./api-config.js";

export async function secheduleFetchById(id) {}

try {
  const response = await fetch(`${apiConfig.baseURL}/schedules`);
  const data = await response.json();

  const idSchedule = data.filter((schedule) => {});
} catch (error) {
  console.log(error);
  alert("Não foi possivel remover o agendamento. Tente novamente mais tarde.");
}
