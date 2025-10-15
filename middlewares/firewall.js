module.exports = (req, res, next) => {
    const availableUrls = ['http://localhost:3000'];
    console.log(req);
    next();
};