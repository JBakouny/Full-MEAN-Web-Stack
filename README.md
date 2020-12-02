# Running the app
To run the angular application you should run the following commands in two seperate terminals:

- under [```json-server```](./json-server):

```
json-server --watch db.json -d 2000
```

- under [```angular/conFusion```](./angular/conFusion/):

```
npm install
ng serve --open
```


# How to write data to the database?
A HTTP POST method is used to write a feedback in the database. It can be consulted under:

- The feedback service: [```angular/conFusion/src/app/services/feedback.service.ts```](./angular/conFusion/src/app/services/feedback.service.ts)

- The contact component: [```angular/conFusion/src/app/contact/contact.component.ts```](./angular/conFusion/src/app/contact/contact.component.ts)


##### Notes
POST methods for comments do not work with json-server as they are already configured for MongoDB.

