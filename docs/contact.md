# Contact API Spec

## Create Contact API

Enpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Akane",
  "last_name": "izumi",
  "email": "kazumi@gmail.com",
  "phone": "+7419231"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Akane",
    "last_name": "izumi",
    "email": "kazumi@gmail.com",
    "phone": "+7419231"
  }
}
```

Response Body Errors :

```json
{
  "errors": "username already used"
}
```

## Update Contact API

Enpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Akane",
  "last_name": "izumi",
  "email": "kazumi@gmail.com",
  "phone": "+7419231"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Akane",
    "last_name": "izumi",
    "email": "kazumi@gmail.com",
    "phone": "+7419231"
  }
}
```

Response Body Errors :

```json
{
  "errors": "username already used"
}
```

## Get Contact API

Enpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Akane",
    "last_name": "izumi",
    "email": "kazumi@gmail.com",
    "phone": "+7419231"
  }
}
```

Response Bode Errors :

```json
{
  "errors": "contact is not found"
}
```

## Search Contact API

Enpoint : GET /api/contacts

Headers :

- Authorization : token

Query params :

- name : Search by first_name or last_name, using like, opsional
- email : Search by email using like, opsional
- phone : Search by phone using like, opsional
- page : Search by page , default 1
- size : size per page , default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Akane",
      "last_name": "izumi",
      "email": "kazumi@gmail.com",
      "phone": "+7419231"
    },
    {
      "id": 2,
      "first_name": "Akane",
      "last_name": "izumi",
      "email": "kazumi@gmail.com",
      "phone": "+7419231"
    }
    "paging" : {
      "data" : 1,
      "total_page" : 1,
      "total_item" : 1,
    }
  ]
}
```

Response Body Errors :

```json
{
  "errors": "contact is not found"
}
```

## Remove Contact API

Enpoint : DELETE /api/contacts/:id

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
  "errors": "contact is not found"
}
```
