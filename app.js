import Koa from 'koa'
const app = new Koa()

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(3001, () => console.log('server started 3001'))

export default app