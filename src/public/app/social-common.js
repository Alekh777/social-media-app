$(()=>{
    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')

})

function loginIfNeeded(){
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    console.log(currentUser)

    if(!currentUser){
        $.post('/api/users', {}, (user)=>{
            if(user){
                console.log('Registered current user as ', user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('#nav-username').text(currentUser.username)
            }
        })
    } else {
        console.log('Resuming session as ', currentUser.username)
        $('#nav-username').text(currentUser.username)
    }
}