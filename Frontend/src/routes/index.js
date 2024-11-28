import Home from '../pages/Home'
import Table from '../pages/Table'
import Chart from '../pages/Chart'
import Notification from '../pages/Notification'
import Setting from '../pages/Setting'
import Login from '../pages/Login'
import Register from '../pages/Register'

const adminRoute = [
    { path: '/', component: Home, defaultLayout: true },
    { path: '/table', component: Table, defaultLayout: true },
    { path: '/chart', component: Chart, defaultLayout: true },
    // { path: '/notification', component: Notification, defaultLayout: true },
    // { path: '/setting/:id', component: Setting, defaultLayout: true },

];
const userRoute = [

];
const shareRoute = [
    { path: '/notification', component: Notification, defaultLayout: true },
    { path: '/setting/:id', component: Setting, defaultLayout: true },
];
const publicRoute = [
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/register', component: Register, defaultLayout: false }
];

export { adminRoute, userRoute, shareRoute, publicRoute };