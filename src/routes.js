const {Router} = require('express');
const User = require('./models/User');
const userController = require('./controllers/UserController');

const routes = Router();

const get = async () => {
    return Promise.reject('Oops!').catch(err => {
      throw new Error(err);
    });
  };
  
  get()
    .then(console.log)
    .catch(function(e) {
      console.log(e);
    });

routes.get('/', async (request, response) => {

    //const user = await User.create({email: 'Teste', password: '123'});

    //const user = await User.findOne({email: 'Teste'});
    //user = {email: 'Teste', password: '123'}

    //encontrar todos os usuarios
    //const users = await User.find();


    return response.render('index.html')


    //return response.json(users);
});

routes.post('/criar-usuario', userController.create)



module.exports = routes;