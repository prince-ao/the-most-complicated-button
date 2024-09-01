# API Specification

## Endpoints

### 1. Get Click Count

- **URL**: `/api/click`
- **Method**: `GET`
- **Headers**:
  - `from` (optional): A unique identifier for the client or source.
- **Responses**:
  - **201 Created**: If the `from` header is not provided or no record exists for the given `from` value.
    - **Body**:
      ```json
      {
        "clicks": 0,
        "uuid": "<generated-uuid>"
      }
      ```
  - **200 OK**: If a record exists for the given `from` value.
    - **Body**:
      ```json
      {
        "clicks": <number-of-clicks>
      }
      ```

### 2. Increment Click Count

- **URL**: `/api/click`
- **Method**: `PATCH`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body**:
  - `from` (required): A unique identifier for the client or source.
  - **Example**:
    ```json
    {
      "from": "<unique-identifier>"
    }
    ```
- **Responses**:
  - **400 Bad Request**: If the `from` field is not provided in the request body.
    - **Body**:
      ```json
      {
        "message": "failure"
      }
      ```
  - **200 OK**: If the click count is successfully incremented.
    - **Body**:
      ```json
      {
        "message": "success"
      }
      ```
