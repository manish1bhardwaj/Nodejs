const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("abcd123"));


app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/store', (req, res) => {
    res.cookie("name", "abcd");
    res.cookie("node","dark");
    res.cookie("discount",5000,{signed:true}
    );

    
    res.send("you visited on store routes");
});

app.get("/buy",(req,res)=>{
    let price = 20000;
    console.log(req.signedcookies);
    let{discount} = req.signedCookies;
    let finalprice;
    if(discount){
        finalprice = price-discount;
    }
    else{
        finalprice = finalprice;
    }
    res.send(`total price${finalprice}`);
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});