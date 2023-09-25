const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserCadModel = require('./models/UserCad');

const port = 3005;

// Isto vem antes do Mongoose
app.use(cors());
app.use(express.json());

// Adaptação
const pass = "Zbdac3r-1ex_zyk";
const initbco = 'mongodb+srv://admin:';
const finbco = '@cluster0.epsupyi.mongodb.net/crud?retryWrites=true&w=majority';
const conectbco = initbco + pass + finbco;


// Aqui podemos por a conexão com MongoDB
mongoose.connect(
    // Abaixo temos a string de conexão com os dados em variáveis
    conectbco,
    {  // abaixo temos 1 configurações padrões do Banco MongoDB
        useNewUrlParser: true,
    }
)
.then((res) => console.log(`Connection Success in DB Cloud ${res}`))
.catch((err) => console.log(`Error in connection with DataBase MongoDB ${err}`));

app.post('/register', (req, res) => {
    UserCadModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err) )

});


app.listen(port, () => {
    console.log(`Server app is listening at ${port}`)
});
