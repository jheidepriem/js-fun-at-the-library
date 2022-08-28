function createTitle(bookIdea) {
  bookIdea = `The ${bookIdea}`;
    return bookIdea;
}
function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
    }
return character;
}

function saveReview(comment, reviews) {
    if(reviews.includes(comment) === false) {
      return reviews.push(comment);
  }
}

function calculatePageCount(bookTitle, bookPageCount) {
  var bookPageCount = (bookTitle.length * 20);
    return bookPageCount;

}

function writeBook(bookTitle, bookCharacter, genre) {
  var newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre,
    }
  return newBook;
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75



}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
   calculatePageCount,
   writeBook,
   editBook
}
