"use strict";
const dayjs = require("dayjs");

const form = document.querySelector("form");
const calendar = document.getElementById("calendar");
const clock = document.getElementById("select");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("DEU CERTO!");
});
