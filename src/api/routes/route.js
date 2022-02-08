// Importing routes.
const authRouter = require('./includes/authRouter');
const userRouter = require('./includes/userRouter');

// All the root routes.
const routes = [
    {
        path: '/auth',
        router: authRouter,
    },
    {
        path: '/users',
        router: userRouter,
    },
];

// Exporting the routes with basic prefix.
module.exports = (app) => {
    routes.forEach((route) => {
        if (route.path === '/api/v1') {
            app.get(route.path, route.router);
        } else {
            app.use('/api/v1' + route.path, route.router);
        }
    });
};
