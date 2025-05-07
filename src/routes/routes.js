import config from '~/config';
// Layouts
import { HeaderOnly, LogInAndSignUp } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Worksheets from '~/pages/Worksheets';
import Create from '~/pages/Create';
import Market from '~/pages/Market';
import Search from '~/pages/Search';
import LogIn from '~/pages/LogIn';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.worksheet, component: Worksheets },
    { path: config.routes.create, component: Create },
    { path: config.routes.market, component: Market },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.login, component: LogIn, layout: LogInAndSignUp },
    { path: config.routes.signup, component: SignUp, layout: LogInAndSignUp },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
