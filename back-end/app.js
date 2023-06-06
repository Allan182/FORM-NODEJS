const express = require('express');
const session = require('express-session');

const port = 3000;
var path = require('path');
const app = express();


app.use(session({ secret: "FH2HASXXZSADAC1ASD5SAD2ASD41X5X4X7E" }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, './views'));


app.listen(port, () => {
    console.log("Servidor Rodando");
})
