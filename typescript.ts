function readBook(author: "Jack London", book: "The call of the wild"): void;
function readBook(author: "Steven King", book: "It"): void;
function readBook(
  author: "Jack London" | "Steven King",
  book: "The call of the wild" | "It",
) {
  console.log(author, book);
}

// readBook("Jack London", "It"); // Invalid
readBook("Steven King", "It"); // Valid
