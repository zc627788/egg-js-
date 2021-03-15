exports.keys = 'JackSon'
// exports.view = {
//     defaultViewEngine: 'nunjucks',
//     mapping: {
//         '.tpl': 'nunjucks'
//     },
// };
// exports.news = {
//     pageSize: 5,
//     serveUrl: 'https://hacker-news.firebaseio.com/v0',
// };

// exports.middleware = [
//     'robot'
// ];
// exports.robot = {
//     ua: [
//         /curl/i,
//         /Baiduspider/i,
//     ]
// }
// // exports = {
// //     csrf: {
// //         enable: false,
// //       },
// //   };
// exports.multipart = {
//     mode: 'file',
// };



// exports.onerror = {
//     errorPageUrl: '../app/form.html'
// }


// module.exports.
'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.middleware = [ 'errorHandler' ];

  // config/default.js
config.passportGithub = {
    key: '204bdcb97f2eb777fd60',
    secret: ' ',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  return config;
};