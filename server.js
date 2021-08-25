const express = require("expres");
const { JsonWebTokenError } = require("jsonwebtoken");
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

app.post('/login', (req,res)=>{

    const username  = req.body.username
    const user = { name:username}

    jwt.sign(user ,process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessTooken: accessToken})

app.listen(3000);