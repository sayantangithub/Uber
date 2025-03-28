# Backend API Documentation

## Endpoint

**POST /user/register**

## Description

This endpoint allows a user to register by providing the required fields.  
Validation errors will result in a 400 status code response.

## Request Body

The JSON payload should follow the structure below:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "pass123"
}
```

## Response Types

### Successful Response

- **Status Code:** 201
- **Response Body Type:**

```json
{
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": "string (optional)"
  },
  "token": "string"
}
```

## Example of Successful Response

```json
{
  "user": {
    "_id": "6123456789abcdef01234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": ""
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Endpoint

**POST /user/login**

## Description

This endpoint allows an existing user to login by providing valid credentials.  
Validation errors will result in a 400 status code response, while invalid credentials will return a 401 status code.

## Request Body

The JSON payload should follow the structure below:

```json
{
  "email": "john@example.com",
  "password": "pass123"
}
```

## Response Types

### Successful Response

- **Status Code:** 200
- **Response Body Type:**

```json
{
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": "string (optional)"
  },
  "token": "string"
}
```

### Error Response (Invalid Credentials)

- **Status Code:** 401
- **Response Body Type:**

```json
{
  "message": "Invalid email or password"
}
```

### Validation Error Response

- **Status Code:** 400
- **Response Body Type:**

```json
{
  "errors": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
```

## Example of Successful Response

```json
{
  "user": {
    "_id": "6123456789abcdef01234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": ""
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Endpoint

**GET /user/profile**

## Description

This endpoint returns the profile information of the authenticated user.  
Requires authentication token in the request header or cookies.

## Headers

```
Authorization: Bearer <token>
```

## Response Types

### Successful Response

- **Status Code:** 200
- **Response Body Type:**

```json
{
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": "string (optional)"
  }
}
```

### Error Response (Unauthorized)

- **Status Code:** 401
- **Response Body Type:**

```json
{
  "message": "Unauthorized"
}
```

## Endpoint

**GET /user/logout**

## Description

This endpoint logs out the user by invalidating their token.  
Requires authentication token in the request header or cookies.

## Headers

```
Authorization: Bearer <token>
```

## Response Types

### Successful Response

- **Status Code:** 200
- **Response Body Type:**

```json
{
  "message": "Logout success"
}
```

### Error Response (Unauthorized)

- **Status Code:** 401
- **Response Body Type:**

```json
{
  "message": "Unauthorized"
}
```
