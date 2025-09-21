const  express = request;

const  app = express();

app.get('/hello',(res, req) => {res.send("Hello World!");})

app.get('/bye',(res, req) => {res.send("Goodbye World!");})
