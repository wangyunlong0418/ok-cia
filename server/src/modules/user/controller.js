export async function getUserInfo(ctx) { 
    ctx.body = {
        message: 'success',
        code: 0,
        data: {
            name: 'wangyunlong',
            age: 18
        }
    }
 }