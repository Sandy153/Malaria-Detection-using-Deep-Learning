const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/shopezDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});