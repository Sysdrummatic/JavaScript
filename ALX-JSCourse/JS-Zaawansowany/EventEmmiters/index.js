const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DataBaseService = require("./dataBaseService");

const ticketManager = new TicketManager(5);
const emailService = new EmailService();
const dataBaseService = new DataBaseService();
const onBuy = () => {
  console.log(`Niebawem usuwam listenera`);
};

ticketManager.on("buy", (email, price, timestamp) => {
  emailService.send(email);
  dataBaseService.save(email, price, timestamp);
});

ticketManager.on("error", (err) => {
  console.log(`Błąd: ${err.message}`);
});

// ticketManager.off("buy", onBuy);
// ticketManager.removeAllListeners("buy");

console.log(
  `Mamy ${ticketManager.listenerCount("buy")} listenerów na zdarzenie buy`
);
console.log(
  `Mamy ${ticketManager.listenerCount("error")} listenerów na zdarzenie error`
);

ticketManager.buy("test2020@mail.pl", 20);
ticketManager.buy("test2020@mail.pl", 20);
ticketManager.buy("test2020@mail.pl", 20);
ticketManager.buy("test2020@mail.pl", 20);
ticketManager.buy("test2020@mail.pl", 20);
ticketManager.buy("test2020@mail.pl", 20);
