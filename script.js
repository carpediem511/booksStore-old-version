
// ввожу счётчик для книг, чтобы в id записывались значения

let booksCounter = 1;

const books = [ //создать массив из книг
  {
    // id: 1,
    id: booksCounter++,
    title: "Гарри Поттер и философский камень",
    authors: "Джоан Роулинг",
    year: "1997",
    image: "./book1.jpg"
  },

  {
    // id: 2,
    id: booksCounter++,
    title: "Гарри Поттер и тайная комната",
    authors: "Джоан Роулинг",
    year: "1998",
    image: "./book2.jpg"
  },

  {
    // id: 3,
    id: booksCounter++,
    title: "Гарри Поттер и узник Азкабана",
    authors: "Джоан Роулинг",
    year: "1999",
    image: "./book3.jpg"
  },

  {
    // id: 4,
    id: booksCounter++,
    title: "Гарри Поттер и кубок огня",
    authors: "Джоан Роулинг",
    year: "2000",
    image: "./book4.jpg"
  }
]

const list2 = document.getElementById("list") //найти в HTML контейнер с книгами

function renderBooks() { // ввести функцию - визуализировать книги
  list2.innerHTML = "" // пока в контейнере пусто
  books.forEach((book) => { // добавляю в html контейнер, в котором описаны свойства книг
    list2.innerHTML += ` 
    <div class="bookStyle"> 
      <div class="book">
        <div class="book-image"><img src="${book.image}" class="book-image-style"/></div>
        <div class="book-title">${book.title}</div>
        <div class="book-year">${book.year}</div>
        <div class="book-author">${book.authors}</div>
        <div class="book-buttons">
          <button class="book-button">Изменить</button>
          <button onclick="deleteBook(${book.id})" class="book-button">Удалить</button>
        </div>
      </div>
    </div>
    `
  })
}

function deleteBook(id) { //создаю функцию для удаления книги, кнопка "Удалить"
  const bookDel = books.find((findBook) => {
    return findBook.id === id //найти книгу по id
  })

  const bookIndex = books.indexOf(bookDel) //присвоить переменной индексы книг из массива
  
  books.splice(bookIndex, 1)

  renderBooks()
}

function addBook() { //Функция "добавить книгу"

  const bookProperties = document.getElementById("bookPropertiesId") //найти контейнер в html

  // Дальше проверка: если элемент не пустой, то нужно выйти из функции заранее при помощи "return"
  if (bookProperties.childElementCount) return;

  bookProperties.innerHTML = `
  <div class="propertiesNewBook" id="propertiesNewBookId">
    <input id="bookName" class="inputStyle" placeholder="Имя книги">
    <input id="bookAuthor" class="inputStyle" placeholder="Автор книги">
    <input id="bookYear" class="inputStyle" placeholder="Год публикации книги">
    <input id="bookImage" class="inputStyle"placeholder="Ссылка на изображение">
    <button id="bookSave" onclick="saveBook()">Сохранить</button>
    
  </div>
  `
}  

const addBookButton = document.getElementById("addBookButton") //найти кнопку "Добавить книгу" в html
addBookButton.addEventListener("click", addBook) //привязать к кнопке функцию, по клику на неё

function showForm() { //создать функцию "показать форму"
  let openForm = document.getElementById("bookPropertiesId") //найти контейнер в html
  let buttonClick = document.getElementById("bookSave") //найти кнопку "сохранить книгу"

  let isOpen = false //ввести переменную, которая говорит, что если форма открыта, то это неверно

  if (buttonClick) { // если нажали на кнопку "сохранить"
    
    if (isOpen) { // если форма уже была открыта, значит нажали еще раз - закрываем
      openForm.style.display = "none" //скрываем контейнер
      isOpen = false // установить закрытым

    } else { // иначе
      openForm.style.display = ""
      isOpen = true // установить открытым
    }
  }
}

function saveBook () { //ввести функцию "сохранить книгу"
  const bookNameValue = document.getElementById("bookName").value //получить значение из поля "имя"
  const bookAuthorValue = document.getElementById("bookAuthor").value //получить значение из поля "автор"
  const bookYearValue = document.getElementById("bookYear").value //получить значение из поля "год"
  const bookImageValue = document.getElementById("bookImage").value //получение значение из поля "ссылка"

  const book = { //ввести переменную, где будут храниться все эти значения value

    id: booksCounter++,
    title: bookNameValue,
    authors: bookAuthorValue,
    year: bookYearValue,
    image: bookImageValue
  }

  books.push(book) //добавить книгу
  renderBooks() //отобразить книгу
  hideField() //скрыть форму
}

function hideField() { //ввести функцию "скрыть форму"
  const hideForm = document.getElementById("propertiesNewBookId") //найти контейнер, который надо скрыть
  hideForm.remove() // удалить форму
}

renderBooks()