"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount}PLN for ${this.details}`;
    }
}
const invOne = new Invoice("Doggest", "lesson with the dog", 200);
const invTwo = new Invoice("Cattest", "lesson with the cat", 300);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
