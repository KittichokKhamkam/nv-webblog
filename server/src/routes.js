const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) =>{

// get all user
    app.get('/users',isAuthenController,UserController.index)

    //get all
    app.get('/users',UserController.index),

    //create 
    app.post('/user', UserController.create),

    //edit
    app.put('/user/:userId', UserController.put),

    //delete
    app.delete('/user/:userId',UserController.delete)

    //show
    app.get('/user/:userId',UserController.show)

    app.post('/login', UserAuthenController.login)

}