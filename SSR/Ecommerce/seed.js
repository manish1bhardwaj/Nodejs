const Product = require("./models/products");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SSR-CB")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected");
    })

const productsData = [
 {
    name:"Laptop",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
 {
    name:"Drone",
    image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 100,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
 {
    name:"Phone",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 70,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
 {
    name:"Watch",
    image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
 {
    name:"Tablet",
    image:"https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 90,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
 {
    name:"Shirt",
    image:"https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
 {
    name:"Shirt",
    image:"https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
]

Product.deleteMany({})
   .then(() => Product.insertMany(productsData))
   .then((docs)=>{
      console.log("product added", docs.length)
   })
   .catch((err)=>{
      console.log("seed failed", err.message);
   })
   .finally(async ()=>{
      await mongoose.disconnect();
   })