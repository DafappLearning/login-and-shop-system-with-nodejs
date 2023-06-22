# Address API Spec

## Create Address API

Enpoint : POST /api/contact/:contactId/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jalan",
  "city": "Kota",
  "province": "Provinsi",
  "country": "Negara",
  "postal_code": "Code"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "Code"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Country required"
}
```

## Update Address API

Enpoint : PUT /api/contact/:contactId/addresses/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jalan",
  "city": "Kota",
  "province": "Provinsi",
  "country": "Negara",
  "postal_code": "Code"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "Code"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Country required"
}
```

## Get Address API

Enpoint : GET /api/contact/:id/addresses/:addressId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "Code"
  }
}
```

Response Body Errors :

```json
{
  "errors": "contact is not found"
}
```

## List Address API

Enpoint : GET /api/contact/:contactId/addresses

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan",
      "city": "Kota",
      "province": "Provinsi",
      "country": "Negara",
      "postal_code": "Code"
    },
    {
      "id": 2,
      "street": "Jalan",
      "city": "Kota",
      "province": "Provinsi",
      "country": "Negara",
      "postal_code": "Code"
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

## Remove Address API

Enpoint : DELETE /api/contact/:contactId/addresses/:addressId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "ok"
}
```

Response Body Errors :

```json
{
  "errors": "address is not found"
}
```
