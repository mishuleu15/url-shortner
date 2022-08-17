const Express = require('express');
const connectDB = require('./db');

const app = Express();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

const PORT = 3333;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
