import Main from '../../pages/Main';
import Catalog from '../../pages/Catalog';
import Program from '../../pages/Program';
import Error from '../../pages/Error';
import { RoutProperties } from '../../types/rout';
import { Pages } from '../../types/pageHeader';
import Login from '../../pages/Login';

export const privateRouter: RoutProperties[] = [
    { path: Pages.about, element: Main },
    { path:Pages.catalog, element: Catalog},
    { path:Pages.program, element: Program},
    { path:Pages.error, element: Error }
]

export const publicRouter: RoutProperties[] = [
    { path:Pages.login, element: Login }
]