import Koa from 'koa';

const app = new Koa();
app.use((ctx: Koa.Context) => {
    ctx.body = 'OK';
});
app.listen(3000);