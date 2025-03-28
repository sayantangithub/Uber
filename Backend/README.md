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
