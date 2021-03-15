// exports.info = async ctx =>{
//     ctx.body=`user:${ctx.params.id},${ctx.params.name}`
// }
// const createRule = {
//     username: {
//       type: 'email',
//     },
//     password: {
//       type: 'password',
//       compare: 're-password',
//     },
//   };

//   exports.create = async ctx => {
//     // 如果校验报错，会抛出异常
//     ctx.validate(createRule);
//     ctx.body = ctx.request.body;
//   };

const Controller = require('egg').Controller;
class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = userInfo;
  }
}
module.exports = UserController;


  