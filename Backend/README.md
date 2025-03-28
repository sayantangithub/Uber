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

# Captain API Documentation

## Endpoint: Register Captain

**POST /captain/register**

### Request Body

```json
{
  "fullname": {
    "firstname": "John", // required, min length: 3
    "lastname": "Doe" // optional, min length: 3 if provided
  },
  "email": "john@example.com", // required, must be valid email format
  "password": "pass123", // required, min length: 6
  "vehicle": {
    "color": "Black", // required, min length: 3
    "plate": "ABC123", // required, min length: 3
    "capacity": 4, // required, min: 1
    "vehicleType": "car" // required, enum: ["car", "motorcycle", "auto"]
  }
}
```

### Response: Success (201)

```json
{
  "captain": {
    "_id": "6123456789abcdef01234567", // MongoDB generated ID
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "status": "inactive", // default status for new captains
    "socketId": "", // optional, used for real-time updates
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car",
      "location": {
        // optional, for tracking
        "lat": null,
        "lng": null
      }
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // JWT token, expires in 24h
}
```

## Endpoint: Login Captain

**POST /captain/login**

### Request Body

```json
{
  "email": "john@example.com", // required, must be valid email
  "password": "pass123" // required, min length: 6
}
```

### Response: Success (200)

```json
{
  "captain": {
    // same as register response
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // JWT token, expires in 24h
}
```

### Response: Error (401)

```json
{
  "message": "Invalid email or password"
}
```

## Endpoint: Get Captain Profile

**GET /captain/profile**

### Headers

```
Authorization: Bearer <token>    // JWT token required
```

### Response: Success (200)

```json
{
  "captain": {
    // same as register response without sensitive data
    "_id": "6123456789abcdef01234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car",
      "location": {
        "lat": null,
        "lng": null
      }
    }
  }
}
```

## Endpoint: Logout Captain

**GET /captain/logout**

### Headers

```
Authorization: Bearer <token>    // JWT token required
```

### Response: Success (200)

```json
{
  "message": "Logout successfully"
}
```

### Response: Error (401)

```json
{
  "message": "Unauthorized" // Invalid or expired token
}
```
