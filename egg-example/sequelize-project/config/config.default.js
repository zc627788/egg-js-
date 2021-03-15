/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_123456';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    password:'123456789',
    database: 'blog',
    define: {
      // underscored: true,
      timestamps:false,
      freezeTableName:false
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };


  return {
    ...config,
    ...userConfig,
  };
};
