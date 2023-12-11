const express = require('express');
const app = express();
const port = 3000;
const { create } = require('express-handlebars');
const { renderHomeView } = require('./controllers/home');

const handlebars = create({
    layoutsDir: './client/layouts',
    extname: ".hbs",
})

app.engine('hbs', handlebars.engine);

app.set('view engine', 'hbs');
app.set('views', './client');
app.enable('view cache');
app.use(express.static('./public'))
app.get('/', renderHomeView);

app.listen(port, () => console.log(`App listening to port ${port}`));
