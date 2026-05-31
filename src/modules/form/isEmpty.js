"use strict";

const form = document.querySelector("form");
const tutorName = document.getElementById("tutorName");
const pet = document.getElementById("pet_Name");
const phone = document.getElementById("contact");
const description = document.getElementById("description");
const calendar = document.getElementById("calendar");
const clock = document.getElementById("select");

export function isEmpty() {
  if (
    !tutorName.value.trim() ||
    !pet.value.trim() ||
    !phone.value.trim() ||
    !description.value.trim() ||
    !calendar.value.trim() ||
    !clock.value.trim()
  ) {
    alert("Preencha todos os campos para realizar o agendamento!");
    return true;
  }
  return false;
  console.log("Deu certo!");
}
