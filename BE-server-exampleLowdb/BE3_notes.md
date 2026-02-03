## В этом блоке:

- A fake database
- POST requests
- Middleware
- Routing
- Environment/deploying

  ## Что умеет Бэкенд? (Backend Capabilities)

- Надежно сохранять и загружать данные (Базы данных).
- Работать с файловой системой (Чтение/Запись файлов).
- Делать запросы «сервер-сервер» (Скрываем логику от клиента).
- Главное: Бэкенд работает 24/7, даже когда браузер пользователя закрыт.

## Хранение данных: Эволюция

- Оперативная память (Memory) — Done (быстро, но до первой перезагрузки).
- Файлы (Files) — Done (надежно, но сложно масштабировать).
- Базы данных (Databases) — Next Step (профессиональный стандарт).

## Mock / Fake database

- Mock database for quick prototyping
- Reading and writing to json file: `lowdb`

## POST Requests

- Used mainly for Creating something
- Can have a request body / payload

```js
const newUser = { name: "Sharik", age: "eternal" };

const config = {
  method: "POST",
  body: JSON.stringify(newUser), // POST requests (unlike GET) can have a request body
  headers: {
    "Content-Type": "application/json",
    "API-KEY": "123",
  },
};

fetch("http://localhost:2547?key=123", config)
  .then((res) => res.json())
  .then((stuff) => console.log(stuff));
```

- REST API
  - Usually the resources are represented with JSON
  - Accessing resources from a server using HTTP requests
    - GET /users
    - GET /users/1
    - GET /users/2
    - GET /users/2/posts
    - POST /users ------ creates a new user
    - POST /feedback --- creates a new "feedback" for the admins to read
  - Different resources (users, posts, etc.) have different endpoints
