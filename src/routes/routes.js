import config from '~/config';
// Layouts
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Worksheets from '~/pages/Worksheets';
import Create from '~/pages/Create';
import Market from '~/pages/Market';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.worksheet, component: Worksheets },
    { path: config.routes.create, component: Create },
    { path: config.routes.market, component: Market },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
