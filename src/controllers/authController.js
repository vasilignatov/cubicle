const router = require('express').Router();
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {

        let user = await authService.login(username, password);
        console.log(user);

        if (!user) {
            return res.redirect('/404');
        }

        let token = await    authService.createToken(user);
        console.log(token);
        res.redirect('/');

    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {

        let { username, password, repeatPass } = req.body;

        await authService.register(username, password);

        res.redirect('/login');

    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;