const myLibrary = [
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        pages: 310,
        read: false 
    }
];

const addBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit-btn');
const library = document.getElementById('library');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function storeBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    myLibrary.push(new Book(title, author, pages, read));
    display();
    console.log(myLibrary);
}

function display(){
    library.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];
        const card = document.createElement('div');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('button');
        const deleteBtn = document.createElement('button');
    
        card.className = 'card';
        bookTitle.className = 'book-title';
        bookAuthor.className = 'book-author';
        bookPages.className = 'book-pages';
        bookRead.className = 'book-read';
        deleteBtn.className = 'delete-book';
    
        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pages + ' pages';
        deleteBtn.textContent = "DELETE";

        deleteBtn.addEventListener("click", function() {
            myLibrary.splice(card[i], 1);
            card.remove();
            console.log(myLibrary);
        });

        if (book.read == false) {
            bookRead.textContent = "Not Read";
        } else {
            bookRead.textContent = "Read";
        }
    
        if(book.read) {
            bookRead.style.backgroundColor = 'green';
            bookRead.style.borderColor = 'black';
            bookRead.style.color = 'white';
        } else {
            bookRead.style.borderColor = 'black';
            bookRead.style.backgroundColor = 'red';
            bookRead.style.color = 'white';
        }

        bookRead.addEventListener('click', () => {
            if(book.read) {
                book.read = false;
                bookRead.textContent = "Not Read"
                bookRead.style.borderColor = 'black';
                bookRead.style.backgroundColor = 'red';
                bookRead.style.color = 'white';

            } else {
                book.read = true;
                bookRead.textContent = 'Read';
                bookRead.style.backgroundColor = 'green';
                bookRead.style.borderColor = 'black';
                bookRead.style.color = 'white';
            }
        });
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        card.appendChild(deleteBtn);
        library.appendChild(card);
    };
}

document.addEventListener("DOMContentLoaded", () => display(myLibrary));

function clear() {
    document.getElementById("form").reset();
}

addBtn.addEventListener("click",() => {
    dialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
    dialog.close();
    storeBook();
    e.preventDefault();
    clear();
});


