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
        const buttons = Buttons.findAll();
        
         {
          number_id: number;
          requarid: boolean;
         }
         
        return render('compreasua.html', {buttons=buttons})

    }
  */
};
