const User = require("../models/User");

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;
    console.log(request.body);
    console.log(email, password);

    // {email: '...', password: '...'}
    const user = await User.create({ email: email, password: password });

    console.log(user);

    return response.render("createUser.html", { user: user });
  },

  /*
    async show() {
         buscar todos os button
        const buttons = Buttons.findAll();
        
         {
          number_id: number,
         required: boolean
         }
         
        return render('index.html', {buttons=buttons})

    }
    */
};
