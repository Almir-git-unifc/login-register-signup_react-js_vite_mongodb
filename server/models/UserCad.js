const mongoose = require("mongoose");
const UserCadSchema = new mongoose.Schema ({
    name: String,
    email: String,
    password: String,
});
//   mongoose.model("tabela-de-dados", nome-Schema);
const UserCadModel = mongoose.model("register", UserCadSchema)
module.exports = UserCadModel