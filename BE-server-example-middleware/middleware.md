## Middleware

- A function that handles an incoming request or passes it to another function
  - A middleware function can send a response
  - A middleware function can edit the request
  - A middleware function can stop or continue the processing of a request
- All of our endpoint functions are technically middleware functions too!

```js
app.get("/users", (req, res) => {
  res.send("Users endpoint here");
});
```

      - We can use middleware
        - For requests to a specific method and path
        - For all requests

- Usually middleware functions are added for all methods at once

- The generic middleware function declaration will look like this

  ```js
  // For all request methods (GET, POST...) to *any* path
  app.use((req, res, next) => {
    // do something
    next(); // continue processing request in the next middleware
  });

  // For all request methods (GET, POST...) to a specific path ("/users")
  app.use("/users", (req, res, next) => {
    // do something
    next(); // continue processing request in the next middleware
  });

  app.get("/users", (req, res) => {
    // do something
    res.send("Hi from GET /users");
  });
  ```

- When reading/writing middleware, the order counts!
  - Middleware that was declared ("used") first, will run first
  - If a middleware stops processing a request, the next middleware will not run

- Middleware callback function signature: `(req, res, next) => { ... }`
- Live coding: a request logger middleware

## Handling Errors

- We can have a global error handling middleware
  - It needs to be the very last middleware, though!

- Global Error handling middleware signature:
  - `(err, req, res, next) => { ... }`

- We would get to that middleware if we call `next()` and give it a value
  - Such as

  ```js
  app.get("/users", (req, res, next) => {
    next(new Error("BAD STUFF"));
  });

  app.use((err, req, res, next) => {
    console.error("Global Error Handler received an error!", err);
    res.send({ message: err.message });
  });
  ```

## EXAMPLE APP

- https://github.com/FBW-E07/BE-Server-Example-Middleware

## Homework:

Ваша задача — создать Express сервер для фильтрации анкет кандидатов в DevHotSpot.

JSON объект кандидата:

{ "firstName": "иван", "lastName": "иванов", "age": "25", "groupCode": "DHS10", "skills": ["Node.js", "React"], "email": "ivan@example.org" }

Часть 1: Эндпоинт /validateUser (POST)

Создайте Middleware, которые:

Проверяют наличие полей: firstName, lastName, age, groupCode, email.

Пропускают только тех, кому 18+ лет.

(Проверяют, что groupCode строго равен "DHS10".)

Если всё ОК — статус 200 и сообщение "Кандидат прошел!". Если ошибка — статус 400 и причина (например, "Ошибка: возраст 18+").

Часть 2: Эндпоинт /sanitizeUser (POST)

Создайте Middleware для очистки:

Capitalize: Имя и Фамилия должны начинаться с заглавной буквы.

Sort: Сортировка массива skills по алфавиту.

Type: Преобразование age из строки в число (number).

API должен всегда возвращать стабильный JSON.
