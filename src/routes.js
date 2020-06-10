const {Router} = require('express');
const User = require('./models/User');
const userController = require('./controllers/UserController');
//const multer = require('./multer');
const routes = Router();

routes.get('/', async (request, response) => {

    //const user = await User.create({email: 'Teste', password: '123'});

    //const user = await User.findOne({email: 'Teste'});
    //user = {email: 'Teste', password: '123'}

    //encontrar todos os usuarios
    //const users = await User.find();


    return response.render('home.html')


    //return response.json(users);
});
routes.get('/comofunciona', async (request, response) => {

    return response.render('comofunciona.html')

});

routes.get('/compreasua', async (request, response) => {

    return response.render('compreasua.html')

});

routes.get('/sobre', async (request, response) => {

    return response.render('sobre.html')

});

routes.post('/criar-usuario', userController.create)

/*
    // ROTA PARA GET, RENDERIZAR O FORMULÁRIO
routes.get('/nova-imagem', (req, res, next) => {
        res.send(`
            <html>
                <head> 
                    <title> Nova imagem </title>
                </head>
                </body>
                    <!-- O enctype é de extrema importância! Não funciona sem! -->
                    <form action="/nova-imagem"  method="POST" enctype="multipart/form-data">
                        <!-- O NAME do input deve ser exatamente igual ao especificado na rota -->
                        <input type="file" name="image">
                        <button type="submit"> Enviar </button>
                    </form>
                </body>
            </html>
        `);
    });

    // ROTA PARA POST, TRATAR O FORMULÁRIO
    // APLICAMOS O NOSSO MIDDLEWARE IMPORTADO PASSANDO O NAME DO INPUT A SER TRATADO
    routes.post('/nova-imagem', multer.single('image'), (req, res, next) => {

        // Se houve sucesso no armazenamento
        if (req.file) {
            // Vamos imprimir na tela o objeto com os dados do arquivo armazenado
            return res.send(req.file);
        }

        // Se o objeto req.file for undefined, ou seja, não houve sucesso, vamos imprimir um erro!
        return res.send('Houve erro no upload!');

    });
*/
module.exports = routes;