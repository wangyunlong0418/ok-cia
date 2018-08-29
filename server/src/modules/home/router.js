import * as home from './controller';

export const baseUrl = '/home';

export default [
    {
        method: 'GET',
        route: '/',
        handlers: [
            home.getHome
        ]
    }
]