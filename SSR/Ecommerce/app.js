const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcrypt");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "ecommerce-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 2 * 60 * 60 * 1000
        }
    })
);

app.use((req, res, next) => {
    res.locals.currentUser = req.session.user || null;
    next();
});

mongoose.connect("mongodb://localhost:27017/SSR-CB")
    .then(()=>{
        console.log("Db Connect");
    })
    .catch(()=>{
        console.log("Do not Connect");
    })
const Products = require("./models/products");
const Users = require("./models/Users");

const isAuth = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect("/login");
};

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await Users.findOne({ username });

        if (existingUser) {
            return res.redirect("/signup");
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await Users.create({ username, email, password: hashPassword });
        res.redirect("/login");
    } catch (err) {
        res.status(400).send("Unable to signup");
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ username });

        if (!user) {
            return res.redirect("/login");
        }

        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            return res.redirect("/login");
        }

        req.session.user = user.username;
        res.redirect("/products");
    } catch (err) {
        res.status(400).send("Unable to login");
    }
});

app.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

app.get("/products", async (req, res) => {
    const products = await Products.find({});
    res.render("products", { products });
});

app.get("/products/new", isAuth, (req, res) => {
    res.render("new");
});

app.get("/products/:id/edit", isAuth, async (req, res) => {
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

app.get("/products/:id/purchase", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.render("purchase", { product });
    } catch (err) {
        res.status(400).send("Invalid product id");
    }
});

app.post("/products/:id/purchase", isAuth, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }

        const quantity = Math.max(1, Number(req.body.quantity) || 1);
        const totalAmount = Number(product.price) * quantity;

        res.render("order-success", { product, quantity, totalAmount });
    } catch (err) {
        res.status(400).send("Unable to place order");
    }
});

app.post("/products", isAuth, async (req, res) => {
    try {
        const { name, image, price, desc } = req.body;
        await Products.create({ name, image, price, desc });
        res.redirect("/products");
    } catch (err) {
        res.status(400).send("Unable to add product");
    }
});

app.post("/products/:id/update", isAuth, async (req, res) => {
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

app.post("/products/:id/delete", isAuth, async (req, res) => {
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