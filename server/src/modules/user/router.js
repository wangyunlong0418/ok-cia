import * as User from './controller';

export const baseUrl = '/user';

export default [
    {
        method: 'GET',
        route: '/',
        handlers: [
            User.getUserInfo
        ]
    }
]