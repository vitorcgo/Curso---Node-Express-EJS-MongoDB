const mongoose = require("mongoose");

const connecToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs.tafj8ta.mongodb.net/database?retryWrites=true&w=majority&appName=Nodejs`
    );
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar ao banco de dados", error);
  }
};

module.exports = connecToDatabase;
