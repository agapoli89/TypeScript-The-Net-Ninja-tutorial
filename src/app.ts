class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(client: string, details: string, amount: number) {
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

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.getElementById("type") as HTMLSelectElement;
const tofrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
