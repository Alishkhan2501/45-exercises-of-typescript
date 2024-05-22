// Create a function to create a Book object
function createBook(title, author, pages, publicationYear, ISBN) {
    return {
        title: title,
        author: author,
        pages: pages,
        publicationYear: publicationYear,
        ISBN: ISBN
    };
}
// Create a Book object
var myBook = createBook("Alchemist", "Paulo Coelho", 208, 1988, "9780062315007");
// Log the Book object
console.log(myBook);
