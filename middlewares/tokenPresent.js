module.exports = (req, res, next) => {
    const headers = req.headers;

    if (headers.token !== '42' || !headers.token) {
        return res.status(403).send('Unauthorized');
    }

    next();
};
