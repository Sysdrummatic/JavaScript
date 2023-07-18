class DataBaseService {
  save(email, price, timestamp) {
    console.log(`Zapisano w bazie danych: ${email} ${price} ${timestamp}`);
  }
}

module.exports = DataBaseService;
