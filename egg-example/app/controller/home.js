const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'Hello world';
    // const ctx = this.ctx
    // const result =  await ctx.curl('https://httpbin.org/get?foo=bar')
    // ctx.status=result.status
    // ctx.set(result.headers);
    // ctx.body=result.data\
    // try{
    const ctx = this.ctx;
    const request = {};
    // const config = await ctx.service.trade.buy(request);
    // 下单后需要进行一次核对，且不阻塞当前请求
    ctx.runInBackground(async () => {
      // 这里面的异常都会统统被 Backgroud 捕获掉，并打印错误日志
      await ctx.curl('www.baidu.com')
    });

    const sql = `SELECT * FROM users where username='zc627788'`

    const a = await this.app.mysql.insert('users', { username: '666', 'password': '1111' })
    console.log('a', a)


    console.log('a.affectedRows', a.affectedRows)

    // }catch(err){
    //   this.logger.error('11111',err)
    //   console.log('11111', 11111)
    //   this.ctx.body="报错啦"
    //   return {}
    // }

    // const ctx = this.ctx;
    // 获取 Session 上的内容
    // const userId = ctx.session.userId;
    // const posts = await ctx.service.post.fetch(userId);
    // 修改 Session 的值
    // ctx.session.visited = 1;
    // let count = 0 
    // ctx.cookies.set('a','1',{maxAge:1000*60*60});
    // console.log('ctx.session',ctx.session.visited) 




    // console.log(ctx.session.visited);
    // ctx.body = {
    //   session:1
    // };



    // const ctx = this.ctx;
    // const result = await ctx.curl('https://httpbin.org/post', {
    //   // 必须指定 method
    //   method: 'POST',
    //   // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
    //   contentType: 'json',
    //   data: {
    //     hello: 'world',
    //     now: Date.now(),
    //   },
    //   // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
    //   dataType: 'json',
    // });
    // ctx.body = result.data;



  }
  async info() {
    const { ctx } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }


  
  async render() {
    const { ctx } = this;

    // ctx.user - 获取当前已登录的用户信息
    // ctx.isAuthenticated() - 检查该请求是否已授权
    // ctx.session.returnTo= - 在跳转验证前设置，可以指定成功后的 redirect 地址
    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        Logined user: <img src="${ctx.user.photo}"> ${ctx.user.displayName} / ${ctx.user.id
        } | <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`;
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a> |
          <a href="/passport/yuque">YuQue 语雀</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }
  // 登出
  async logout() {
    const { ctx } = this;

    // ctx.logout() - 退出，将用户信息从 session 中清除
    ctx.logout();
    // 重定向页码
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = HomeController;