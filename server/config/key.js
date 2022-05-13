if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    console.log('dev server');
    module.exports = require('./dev');
}