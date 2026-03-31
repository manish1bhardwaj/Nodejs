const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/SSR-CB")
    .then(()=>{
        console.log("Db Connect");
    })
    .catch(()=>{
        console.log("Do not Connect");
    })
const Products = require("./models/products");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/products", async (req, res) => {
    const products = await Products.find({});
    res.render("products", { products });
});

app.get("/products/new", (req, res) => {
    res.render("new");
});

app.get("/products/:id/edit", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.render("edit", { product });
    } catch (err) {
        res.status(400).send("Invalid product id");
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.render("show", { product });
    } catch (err) {
        res.status(400).send("Invalid product id");
    }
});

app.post("/products", async (req, res) => {
    try {
        const { name, image, price, desc } = req.body;
        await Products.create({ name, image, price, desc });
        res.redirect("/products");
    } catch (err) {
        res.status(400).send("Unable to add product");
    }
});

app.post("/products/:id/update", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image, price, desc } = req.body;
        await Products.findByIdAndUpdate(
            id,
            { name, image, price, desc },
            { runValidators: true }
        );
        res.redirect("/products");
    } catch (err) {
        res.status(400).send("Unable to update product");
    }
});

app.post("/products/:id/delete", async (req, res) => {
    try {
        const { id } = req.params;
        await Products.findByIdAndDelete(id);
        res.redirect("/products");
    } catch (err) {
        res.status(400).send("Unable to delete product");
    }
});

const port = 4000;
app.listen(port,()=>{
    console.log("Server running at port 4000");
});