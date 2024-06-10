## GET

- make sure the HTTP Method is GET
- URL should come after the HTTP Method
- if you are trying to get all (an array) do not put an id at the end
- if you are trying to get one (object) you need to put an id at the end
- no headers needed
- no body needed


## POST (insert)

- make sure the HTTP Method is POST (NOT GET)
- you don't want an id in the URL
- you need an HTTP Header to tell the server about the content-type
  ```http
    Content-Type: application/json
  ```
- you need a JSON object in the body
- the JSON object should not have an id property (it is generated on the server by the API)
- JSON objects can not have a trailing comma after the last property


## PUT (update)

- make sure the HTTP Method is PUT (NOT GET)
- you DO want an id in the URL, so you can tell the server what to update
- you need an HTTP Header to tell the server about the content-type
  ```http
    Content-Type: application/json
  ```
- you need a JSON object in the body
- the JSON object should not have an id property (it is generated on the server by the API)
- JSON objects can not have a trailing comma after the last property

## DELETE

- make sure the HTTP Method is DELETE
- URL should come after the HTTP Method
- you need to put an id at the end
- no headers needed
- no body needed