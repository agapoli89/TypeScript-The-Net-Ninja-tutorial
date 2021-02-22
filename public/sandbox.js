"use strict";
var form = document.querySelector(".new-item-form");
var type = document.getElementById("type");
var tofrom = document.getElementById("tofrom");
var details = document.getElementById("details");
var amount = document.getElementById("amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
