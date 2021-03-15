exports.detail = async ctx =>{
    ctx.body=`package:${ctx.params[0]}`
}