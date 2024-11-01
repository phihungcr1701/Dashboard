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
    { path: '/notification', component: Notification, defaultLayout: true },
    { path: '/setting', component: Setting, defaultLayout: true },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/register', component: Register, defaultLayout: false }
];
const userRoute = [
    //trien khai sau
];
const shareRoute = [
    // trien khai sau
    //Route su dung chung
];

export { adminRoute, userRoute, shareRoute };