var config = {};

 config.adminUsername = 'fernando';
 config.adminPassword = '654321aA';

 config.port = 3000;

 config.tokenSecretKey = 'super_secret';
 /** Expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, '2 days', '10h', '7d' */
 config.tokenExireTime = '1h';

 module.exports = config;