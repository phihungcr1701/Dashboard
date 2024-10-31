import Home from '../pages/Home'
import Table from '../pages/Table'
import Chart from '../pages/Chart'
import Notification from '../pages/Notification'
import Seeting from '../pages/Seeting'

const adminRoute = [
    { path: '/', component: Home },
    { path: '/table', component: Table },
    { path: '/chart', component: Chart },
    { path: '/notification', component: Notification },
    { path: '/seeting', component: Seeting }
];

export { adminRoute };