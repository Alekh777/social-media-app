const {Posts, Users} = require('../db/models')

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title,
        body,
        userId
    })

    return post
}

// showAllPosts({username: ''})
// showAllPosts({title: ''})
async function findAllPosts(query){
    // TODO Handle query params here
    const posts = await Posts.findAll({
        include: [Users] // We need to include the table to use its columns (We can do this only if both Posts table and Users table have a relationship previously defined, like Users.hadMany(Posts))
    })
    return posts;
}

module.exports = {
    createNewPost,
    findAllPosts
}

/* Test Code */
/*
async function task(){
    // console.log(await createNewPost(1, 'This is a sample post', 'Body of the post'))
    // console.log(await createNewPost(2, 'This is another sample post', 'Body of the another post'))

    const posts = await showAllPosts()

    for(let p of posts){
        console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n============\n`)
    }
}

task()
*/