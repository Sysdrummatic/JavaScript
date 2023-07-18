const TicketManager = require("./ticketManager");
const ticketManager = new TicketManager(10);

ticketManager.on("buy", (email, price, timestamp) => {
  console.log(`Kupiono bilet: ${email} ${price} ${timestamp}`);
});

ticketManager.once("buy", () => {
  console.log("Kupiono jeden bilet");
});

ticketManager.buy("test1@mail.com", 20);
ticketManager.buy("test2@mail.com", 15);
