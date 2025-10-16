module.exports = (req, res, next) => {
    const availableEndpoints = ['/restricted1'];
    availableEndpoints.forEach(endpoint => {
        if (req.originalUrl !== endpoint) {
            return res.status(403).send('Not authorized');
        }
    });

    next();
};