import Koa from 'koa';
import config from '../config';
import modules from './modules';


const app = new Koa();

// app.use(async (ctx) => {
//     ctx.body = 'hello world';
// })

modules(app);

app.listen(config.port, () => {
    console.log(`server is running in ${config.port}`)
})

export default app;