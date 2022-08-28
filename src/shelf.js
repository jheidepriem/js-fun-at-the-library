

function shelfBook(bookName, sciFiShelf){
  if (sciFiShelf.length < 3) {
    return sciFiShelf.unshift(bookName);
  }
}

function unshelfBook(booktitle, sciFiShelf){
  for(var i = 0; i < sciFiShelf.length; i++){
    if(sciFiShelf[i].title === booktitle){
    sciFiShelf.splice(i, 1)
    }
  }
}
function listTitles(shelf){
  var string = [];
  for(var i = 0; i < shelf.length; i++){
    string.push(shelf[i].title)
  }
return string.join(`, `)
// return `${string[0]}, ${string[1]}, ${string[2]}`
}
function searchShelf(shelf, title){
  var matchingTitles = [];
  for(var i = 0; i < shelf.length; i++){
    matchingTitles.push(shelf[i].title)
  }
  if(matchingTitles.includes(title)){
  return true
}
  return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
