require('babel-core/register')({
    presets: ['env', 'stage-2'],
});
require('babel-polyfill');

module.exports = require('./src/app');