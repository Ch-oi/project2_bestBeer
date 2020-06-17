module.exports = (express) => {
    const router = express.Router();

    router.get('/showlist', (req, res) => {
        if (!req.isAuthenticated()) {
            res.redirect('/login');
        } else {
            res.render('myCart_showList', { layout: 'loggedin_user' });
        }
    });

    router.get('/delivery', (req, res) => {
        if (!req.isAuthenticated()) {
            res.redirect('/login');
        } else {
            res.render('myCart_Delivery', { layout: 'loggedin_user' });
        }
    });
    router.get('/payment', (req, res) => {
        if (!req.isAuthenticated()) {
            res.redirect('/login');
        } else {
            res.render('myCart_payment', { layout: 'loggedin_user' });
        }
    });
    router.get('/payment_completed', (req, res) => {
        if (!req.isAuthenticated()) {
            res.redirect('/login');
        } else {
            res.render('myCart_payCompleted', { layout: 'loggedin_user' });
        }
    });

    return router;
};