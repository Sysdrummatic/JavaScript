const utils = require("./utils");
// Passing tests
it("should add two numbers", () => {
  let res = utils.add(33, 11);
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});

it("should async add two numbers", (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    if (sum !== 7) {
      throw new Error(`Expected 7, but got ${sum}.`);
    }
    done();
  });
});

it("should square a number", () => {
  let res = utils.square(3);
  if (res !== 9) {
    throw new Error(`Expected 9, but got ${res}.`);
  }
});

it("should async square a number", (done) => {
  utils.asyncSquare(3, (square) => {
    if (square !== 9) {
      throw new Error(`Expected 9, but got ${square}.`);
    }
    done();
  });
});

//Failing tests

it("should fail during adding two numbers", () => {
  let res = utils.add(33, 11);
  if (res !== 45) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});

it("should fail during async adding two numbers", (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    if (sum !== 8) {
      throw new Error(`Expected 7, but got ${sum}.`);
    }
    done();
  });
});

it("should fail during squaring a number", () => {
  let res = utils.square(3);
  if (res !== 10) {
    throw new Error(`Expected 9, but got ${res}.`);
  }
});

it("should fail during async squaring a number", (done) => {
  utils.asyncSquare(3, (square) => {
    if (square !== 10) {
      throw new Error(`Expected 9, but got ${square}.`);
    }
    done();
  });
});

// Zainstalować pakiet npm i mocha
// Utworzyć plik testowy korespondujący np: z plikiem utils.js
// Uruchomić testy z poziomu konsoli: npm test
