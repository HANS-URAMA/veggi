let Providers = require('../Models/providers');

let index = async(req,res, next) => {
    let providers = await Providers.find();

    console.log(providers);
    res.render('providers/index', {
        title: 'Providers',
        providers: providers
    });
};

let displayProviderCreateForm = (req, res, next) => {
    res.render('providers/create', { title: 'Add New Provider' });
};


let createProvider = async (req, res, next) => {
    await Providers.create(req.body);
    res.redirect('/providers');
};

let displayProviderEditForm = async (req, res, next) => {

    let provider = await Providers.findById(req.params._id);
    res.render('providers/edit', {
        title: 'Update Provider',
        provider: provider
    });
};

let updateProvider = async (req, res, next) => {
    await Providers.findByIdAndUpdate(req.params._id, req.body);
    res.redirect('/providers');
};

module.exports = {
    index, displayProviderCreateForm, createProvider, displayProviderEditForm, updateProvider
};