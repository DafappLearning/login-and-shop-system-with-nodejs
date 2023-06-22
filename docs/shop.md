# Shop API Spec

## Create Shop API

Enpoint : POST /api/shops

Headers :

- Authorization : token

Request Body :

```json
{
  "item_name": "Shadow dragon",
  "price": "10000",
  "category": "Adopt Me!",
  "description": "Shadow dragon is pets for game adopt me"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "item_name": "Shadow dragon",
    "price": "10000",
    "category": "Adopt Me!",
    "description": "Shadow dragon is pets for game adopt me"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Unauthorized"
}
```

## Update Shop API

Enpoint : PUT /api/shops/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "item_name": "Shadow dragon",
  "price": "10000",
  "category": "Adopt Me!",
  "description": "Shadow dragon is pets for game adopt me"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "item_name": "Shadow dragon",
    "price": "10000",
    "category": "Adopt Me!",
    "description": "Shadow dragon is pets for game adopt me"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Unauthorized"
}
```

## Get Contact API

Enpoint : GET /api/shops/:id

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "item_name": "Shadow dragon",
    "price": "10000",
    "category": "Adopt Me!",
    "description": "Shadow dragon is pets for game adopt me",
    "owner": "Akane"
  }
}
```

Response Bode Errors :

```json
{
  "errors": "Unauthorized"
}
```

## Search Contact API

Enpoint : GET /api/contacts

Headers :

- Authorization : token

Query params :

- item name : Search by item name, using like, opsional
- price : Search by price using like, opsional
- category : Search by category using like, opsional

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "item_name": "Shadow dragon",
      "price": "10000",
      "category": "Adopt Me!",
      "description": "Shadow dragon is pets for game adopt me",
      "owner": "Akane"
    },
    {
      "id": 2,
      "item_name": "Shadow dragon",
      "price": "20000",
      "category": "Adopt Me!",
      "description": "Shadow dragon is pets for game adopt me",
      "owner": "Kazumi"
    }
  ]
}
```

Response Body Errors :

```json
{
  "errors": "item is not found"
}
```

## Remove Contact API

Enpoint : DELETE /api/shops/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "Ok"
}
```

Response Bode Errors :

```json
{
  "errors": "Unauthorized"
}
```
