const express = require("expres");
const app = expres();
const posts=[
{
    username:"Kayla",
    title:"Post 1"
},
{
    username:"Kofi",
    title:"Post 2"
}
]

app.get('/posts',(req,res)=>{
res.json(post)
})

app.listen(300)