// EX#21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define an interface for a Book
interface Book {
    title: string;
    author: string;
    pages: number;
    publicationYear: number;
    ISBN: string;
  }
  
  // Create a function to create a Book object
  function createBook(title: string, author: string, pages: number, publicationYear: number, ISBN: string): Book {
    return {
      title,
      author,
      pages,
      publicationYear,
      ISBN
    };
  }
  
  // Create a Book object
  const myBook: Book = createBook("Alchemist", "Paulo Coelho", 208, 1988, "9780062315007");
  
  // Log the Book object
  console.log(myBook);