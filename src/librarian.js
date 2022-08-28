class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;

  }
  greetPatron() {
    return `Hello, ${this.name}!`
  }
}

module.exports = Librarian;
