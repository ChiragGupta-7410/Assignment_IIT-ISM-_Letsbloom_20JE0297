const app = require("./app.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server Shutting Down Due To Uncaught Exception`);

  process.exit(1);
});

const connectDatabase = () => {
  const productDatabaseUri = process.env.MONGODB_URI;

  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  };

  mongoose
    .connect(productDatabaseUri, connectionParams)
    .then((data) => {
      console.log(`Database Connected on Port: ${data.connection.port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

dotenv.config({ path: ".env" });

connectDatabase();

const port = process.env.PORT;

const server = app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is working on http://localhost:${port}`);
});

// Handling Unhandled Promise Rejection Error
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server Shutting Down Due To Unhandled Promise Rejection`);

  server.close(() => process.exit(1));
});
