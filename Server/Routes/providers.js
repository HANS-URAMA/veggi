const express = require('express');
const router = express.Router();

const providersController = require('../Controllers/providers');

/*Get the default route*/
router.get('/',(req, res, next) => {
    providersController.index(req,res, next);
});


/*GET: /providers/create => display blank form */
router.get('/create', (req, res, next) => {
    providersController.displayProviderCreateForm(req, res, next);
});

/*POST: /providers/create => process form submission for creating */
router.post('/create', (req, res, next) => {
    providersController.createProvider(req, res, next);
});

/*GET: /providers/edit => display form for editing */
router.get('/edit/:_id', (req, res, next) => {
    providersController.displayProviderEditForm(req, res, next);
});

/*POST: /providers/edit => process form submission for updating */
router.post('/edit/:_id', (req, res, next) => {
    providersController.updateProvider(req, res, next);
});
module.exports = router;