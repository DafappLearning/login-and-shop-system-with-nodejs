# User API Spec

## Register User API

Enpoint: POST /api/users

Request Body :

```json
{
  "username": "Kazumi",
  "password": "1234567",
  "name": "Akane izumi"
}
```

Response Body Success :

```json
{
  "username": "Kazumi",
  "name": "Akane izumi"
}
```

Response Body Errors :

```json
{
  "errors": "username Already registered"
}
```

## Login User API

Enpoint : POST /api/users/login

Request Body :

```json
{
  "username": "Kazumi",
  "password": "1234567"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Incorrect username or password"
}
```

## Update User API

Enpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "Akane izumi", // opsional
  "password": "1234567" // opsional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "Kazumi",
    "name": "Akane izumi"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Enpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "Kazumi",
    "name": "Akane izumi"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Username not found"
}
```

## Logout User API

Enpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "Ok"
}
```

Response Body Errors :

```json
{
  "errors": "Unauthorized"
}
```
