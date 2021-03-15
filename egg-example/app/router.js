module.exports = app => {
    const { router, controller,middleware } = app;
    router.get('/', controller.home.index);
    router.resources('topics','/api/v2/topics',controller.topics);
    router.get('/news', controller.news.list);
    router.redirect('/','/news',302);
    // router.get('/user/:id', controller.home.info);
    // router.get('/search',controller.search.index)
    // router.get('/user/:id/:name',controller.user.info);
    router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/,controller.package.detail);
    router.post('/form',controller.form.post);
    router.post('/userinfo',controller.user)
    router.get('s', '/search', middleware.uppercase(), controller.search.index)
    router.post('/upload', controller.upload)
    router.get('/user/:id',controller.user.info)

  };

module.exports = app => {
  const {controller,router } = app
  router.resources('topics', '/api/topics', controller.topics);
  app.passport.mount('github');
  router.get('/', controller.home.render);
  router.get('/logout',controller.home.logout)
};