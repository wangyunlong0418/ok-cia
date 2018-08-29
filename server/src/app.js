import Koa from 'koa';
import cors from 'koa-cors';
import config from '../config';
import modules from './modules';


const app = new Koa();

app.use(cors());

modules(app);

app.listen(config.port, () => {
    console.log(`server is running in ${config.port}`)
})

export default app;