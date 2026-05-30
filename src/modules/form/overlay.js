"use strict";

const closeWindow = document.getElementById("close");
const agendDisplay = document.getElementById("agendDisplay");

const newAgend = document.getElementById("newAgend");

const form = document.querySelector("form");

closeWindow.addEventListener("click", () => {
  form.classList.add("hidden");
  agendDisplay.classList.remove("overlay");
});

newAgend.addEventListener("click", () => {
  agendDisplay.classList.add("overlay");
  form.classList.remove("hidden");
});
