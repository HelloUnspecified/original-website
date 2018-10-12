// docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!

import { reloadRoutes } from 'react-static/node';
import jdown from 'jdown';
import chokidar from 'chokidar';
import { homedir } from 'os';

chokidar.watch('./src/content').on('all', () => reloadRoutes());

export default {
    getSiteData: () => ({
        title: 'Unspecified',
    }),

    getRoutes: async () => {
        const { legal, home, aboutClarkSell } = await jdown('./src/content');

        return [
            {
                path: '/',
                component: 'src/pages/Home',
            },
            {
                path: '/Contact',
                component: 'src/pages/Contact',
            },
            {
                path: '/Legal/TermsOfUsage',
                component: 'src/pages/legal/TermsOfUse',
                getData: () => legal.termsOfUse,
            },
            {
                path: '/Legal/Privacy',
                component: 'src/pages/legal/Privacy',
                getData: () => legal.privacy,
            },
            {
                path: '/Legal/Copyright',
                component: 'src/pages/legal/Copyright',
                getData: () => legal.copyright,
            },
            {
                path: '/About/ClarkSell',
                component: 'src/pages/About/ClarkSell',
            },
            {
                path: '/About/ClarkSell/Microsoft',
                component: 'src/pages/About/ClarkSell/Microsoft',
                getData: () => aboutClarkSell.microsoft,
            },
            {
                path: '/About/ClarkSell/Allstate',
                component: 'src/pages/About/ClarkSell/Allstate',
                getData: () => aboutClarkSell.allstate,
            },
            {
                path: '/About/ClarkSell/Telerik',
                component: 'src/pages/About/ClarkSell/Telerik',
                getData: () => aboutClarkSell.telerik,
            },
            {
                is404: true,
                component: 'src/pages/Home/PageNotFound',
                getData: () => home.pageNotFound,
            },
        ];
    },
};
