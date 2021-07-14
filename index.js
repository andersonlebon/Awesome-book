function addItem(title, author){
  books.push({title:title.value, author:author.value})
  list.innerHTML = "";
  books.forEach(abook => {
    let book = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'REMOVE';
    book.innerHTML = `<p>${abook.title}</p>
  <p>${abook.author} </p>`;
  deleteBtn.id = abook.title;
  deleteBtn.className =  "removeBtn"
deleteBtn.addEventListener('click', () => {
    console.log(deleteBtn);
    if(deleteBtn.id === abook.id) {
    const index = books.findIndex((rBook) => rBook.title === deleteBtn.id);
    books.splice(index, 1);
    console.log(books);
    list.innerHTML = '';
    books.forEach(remainBook => {
      let book = document.createElement('li');
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'REMOVE';
      book.innerHTML = `<p>${remainBook.title}</p>
  <p>${remainBook.author} </p>`;
      deleteBtn.id = remainBook.title;
      deleteBtn.className = 'removeBtn';
      list.appendChild(book);
      book.appendChild(deleteBtn);
    })
  }
  list.appendChild(book)
  book.appendChild(deleteBtn);
})
  })


}