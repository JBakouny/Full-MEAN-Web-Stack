To run the angular application you should run the following commands in two seperate terminals:

under [```json-server```](./json-server):

```
json-server --watch db.json -d 2000
```

under [```angular/conFusion```](./angular/conFusion/):

```
npm install
ng serve --open
```

POST methods do not work yet as they are configured for MongoDB
