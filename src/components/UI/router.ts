import Main from '../../pages/Main';
import Catalog from '../../pages/Catalog';
import Program from '../../pages/Program';
import Error from '../../pages/Error';
import { RoutProperties } from '../../types/rout';
import { Pages } from '../../types/pageHeader';

export const router: RoutProperties[] = [
    { path: Pages.about, element: Main },
    { path:Pages.catalog, element: Catalog},
    { path:Pages.program, element: Program},
    { path:Pages.error, element: Error}
]