const express = require('express')
const models = require('./db/models')
const db = models.db

const app = express()

db.sync({force: true})
    .then(()=>{
        app.listen(4444, ()=>{
            console.log("Server running at http://localhost:4444")
        })
    }).catch(err=>{
        console.error(new Error('Could not start database'))
        console.error(err)
    })