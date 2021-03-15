'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    // console.log('ctx.model.User', ctx.model)
    ctx.body = await ctx.model.Type.findAll({where:{icon:'message'}})
    
  }
}

module.exports = HomeController;
