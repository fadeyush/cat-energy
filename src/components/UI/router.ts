import Main from '../../pages/Main';
import Catalog from '../../pages/Catalog';
import Program from '../../pages/Program';
import Error from '../../pages/Error';
import { RoutProperties } from '../../types/rout';

export const router: RoutProperties[] = [
    { path:'/about', element: Main },
    { path:'/catalog', element: Catalog},
    { path:'/program', element: Program},
    { path:'/error', element: Error}
]