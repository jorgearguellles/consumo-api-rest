# consume-api-rest

JavaScript on Frontend have two mean responsibilities:

1. Interact with users
2. Communicate with backend side related users interacting. JS work like a bright between User to Backend

- ¿What is a API?

API = Application Programing Interface

An interface is a mechanism that allows users to interact with a robot (Frontend to Backend / Backend to Other Backend)

- ¿What is REST?

REST = Representational State Transfer

- ¿What is a API REST?

An API REST is a mechanism that allows users(Frontend) to interact with Backend through internet(HTTPS) by JSON format.

## Endpoints and query parameters

- ¿What is a Endpoint?

An Endpoint is a route and look like a url.
Examples:

- api.com/animal/width/gender
- api.com/cars/brand/color
- api.com/fruits

- ¿What is a Query Parameters?

A query parameters is extra information about endpoint and we use it to do a super specific request.

- Query parameters are after base url
- The first Query parameter start with **?**
- The next query parameters start with **&**

look like this:

```js
const API_KEY = "6ca6d996-2865-4211-a021-fd4e7a0aaeed";
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`;
```

## What is a HTTPS Status?

- 1xx means affirmative answers
- 2xx means frontend and backend are good!
- 3xx means redirect
- 4xx means frontend do a wrong request
- 5xx means backend error

## What is an API Keys

API KEYs are a way the backend has to identify who is making the requests.

- Authentication: regarding ID
- Authorization: regarding access and permissions

## HTTP Methods

- HTTP: Hyper Text Transfer Protocol

HTTP methods is a way that Frontend say to backend what kind of request is sending.

A CRUD is:

- POST: **C**reate
- GET: **R**ead
- PUT / PATCH: **U**pdate
  - PUT: Edit all info
  - PATCH Edit a chunk of the info
- DELETE: **E**rase

### ¿What are the HTTPS Headers?

- [API Headers – What Are They? Examples & More [Explained]](https://apipheny.io/api-headers/)
- [HTTP headers MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

#### Auth Header

```js
const res = await fetch(API_URL_FAVORITES, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "6ca6d996-2865-4211-a021-fd4e7a0aaeed",
  },
  body: JSON.stringify({
    image_id: id,
  }),
});
const data = await res.json();
```

#### Content-Type Header

- [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

#### FormData

How to use a FormData instance for:

- get all data inputs by users
- add info on inputs
