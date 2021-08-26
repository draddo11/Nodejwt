const express = require("express")
const { JsonWebTokenError } = require("jsonwebtoken")
const app = express();
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

app.get('/posts', authenticationToken,(req,res)=>{

res.json(posts.filter(post => post.username == req.user.name))
})

app.post('/login', (req,res)=>{

    const username  = req.body.username
    const user = { name:username}

    const accessToken = jwt.sign(user ,process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessTooken: accessToken})

 function authenticationToken(req, res,next){
     const authHeader = req.headers['authourization']
     const token = authHeader && authHeader.split('')[1]
     if(token == null) return  res.sendStatus(401)

     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err ,user)=>{
         if(err) return res.sendStatus(403)
         req.user = user
         next()
     })
 }
app.listen(3000)})