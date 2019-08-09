const withCSS = require('@zeit/next-css')
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();
 
const withNextEnv = nextEnv();

module.exports = withCSS(withNextEnv({}));
