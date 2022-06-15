const { engine } = require('express-handlebars');
const path = require('path');


const initHandlebars = (app) => {
    app.engine('hbs', engine());
    app.set('view engine', 'hbs');
    app.set('views', path.resolve(__dirname, '../views'));
};

module.exports = initHandlebars;