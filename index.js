let myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead (index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    myLibrary.forEach((temp,index) => {
        let book = temp;
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="remove-btn" onclick="removeBook(${index})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${index})">Toggle Read</button>
            </div>
        `;
        libraryEl.appendChild(bookEl);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").checked;
    let newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);
    render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
});

