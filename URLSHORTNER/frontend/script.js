const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");

btn.addEventListener("click", async() => {
    let res = await axios.post("http://localhost:3000/shorturl", {originalUrl: inp.value});
    console.log(res);
})