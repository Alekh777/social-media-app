const express = require('express')
const models = require('./db/models')
const db = models.db
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync()
    .then(()=>{
        app.listen(4444, ()=>{
            console.log("Server running at http://localhost:4444")
        })
    }).catch(err=>{
        console.error(new Error('Could not start database'))
        console.error(err)
    })