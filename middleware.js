module.exports = {
    requireAuthenticaiton: function (req, res, next) {
        console.log('Private route hit.');
        next();
    },
    logger: function (req, res, next) {
        date = new Date().toDateString();
        console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};