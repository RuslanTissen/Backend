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
