let books = [];
function addBooks(){
    const bookName = document.getElementById('bookName').ariaValueMax;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName &&bookDescription && !isNaN(pageNumber)){
        const book = {
            name:  bookName,
            authorName: authorName,
            bookDescription:  bookDescription,
            pagesNumber:  pagesNumber
        };
        books.push(book);
        showbooks();
    }else{
        alert("please fill in all fields correctly");
    }
}
function showbooks(){
    const bookDiv = books.map((book, index) => "<h1> book Number:  " + index +1   + "</h1>")
    "<p><strong>Book Name:</strong>" + book.name + "</p>"
    "<p><strong>Author Name:</strong>" + book.authorName + "</p>"
    "<p><strong>Book Description:</strong>" + book.bookDescription + "</p>"
     "<p><strong>No. of Pages:</strong>" + book.pagesNumber + "page(s)</p>"
};
document.getElementById('books').innerHTML = booksDiv.join('');   