const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MlsQZA5KUVkF7qQm3RoSFsAGJfdebjtor148SLtL7vj1QJPHh5YVOYjDOEvWVz9jU8aaUUoZAPzBNEEaB5HzmbA00ZiZWM3u7"
);

// - API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //If okay created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - Listen Commands
exports.api = functions.https.onRequest(app);