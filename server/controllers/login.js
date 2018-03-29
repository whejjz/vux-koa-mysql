const userModel = require('../lib/mysql.js')
const md5 = require('md5')

var fn_login = async (ctx, next) => {
  const body = ctx.request.body;
  var name = body.name || '',
    password = body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
};

var fn_login_get = async (ctx, next) => {
  const params = ctx.query || ctx.params;
  var name = params.name || '',
    pass = params.password || '';
  await userModel.findUserData(name)
    .then(result => {
      let res = result
      if (name === res[0]['name'] && pass === res[0]['pass']) {
        ctx.body = true
        ctx.session.user = res[0]['name']
        ctx.session.id = res[0]['id']
        console.log('ctx.session.id', ctx.session.id)
        console.log('session', ctx.session)
        console.log('登录成功')
      }else{
        ctx.body = false
        console.log('用户名或密码错误!')
      }
    })
    .catch(err => {
      console.log(err)
    })
  //console.log(`signin with name: ${name}, password: ${password}`);
  //if (name === 'koa' && password === '12345') {
  //  ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  //} else {
  //  ctx.response.body = `<h1>Login failed!</h1>
  //      <p><a href="/">Try again</a></p>`;
  //}
};


module.exports = {
  'POST /signin': fn_login,
  'GET /login': fn_login_get
}