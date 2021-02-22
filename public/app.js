import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Aga", "buy a book", 30);
docTwo = new Payment("Vet", "visit with Foks", 50);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs); */
/*
const invOne = new Invoice("Doggest", "lesson with the dog", 200);
const invTwo = new Invoice("Cattest", "lesson with the cat", 300);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format())); */
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
