const User = require('../models/User');

module.exports = {
    store(req, res) {
        const { email } = req.body.email;

        let user = await User.findOne(email);

        if(!user) {
            user = User.create({ email });
        }

        return res.json(user);
    }
}