const {Users} = require('../db/models')

const {createRandomUsername} = require('../utils/username')

async function createAnonUser(){
    const user = await Users.create({
        username: createRandomUsername()
    })

    return user;
}

module.exports = {
    createAnonUser
}

// Test Code
/*
async function task(){
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
}

task()
*/