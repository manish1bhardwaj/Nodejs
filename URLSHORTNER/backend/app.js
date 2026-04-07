const express = require("express");
const app = express();
const cors = require("cors");
const validUrl = require('valid-url');
const shortId = require('shortid');


const mongoose = require("mongoose");
const Url = require("./models/Url");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/UrlShortner")
    .then(() => { console.log("DB is connected") })
    .catch(() => { console.log("DB is not connected") })

app.post("/shorturl", async (req, res) => {
    // console.log(req.body);
    try {
        const { originalUrl } = req.body;
        if (!validUrl.isUri(originalUrl)) {
            return res.status(400).json({ msg: "Invalid" });
        }
        let existing = await Url.findOne({ originalUrl });
        if (existing) {
            return res.status(200).json({ msg: "URL already exist", shortUrl: `http://localhost:3000/${existing.shortCode}` });
        }

        let shortCode = shortId.generate();
        await Url.create({ originalUrl, shortCode })

        return res.status(200).json({ msg: "Short URL generated", shortUrl: `http://localhost:3000/${shortCode}` });
    } catch{
        return res.status(500).json({msg: "Internal Server Error"});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})