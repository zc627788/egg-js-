module.exports = () => {
    return async function uppercase(ctx, next) {
        console.log('object', ctx.query.name.toUpperCase())
      ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
      await next();
    };
  };