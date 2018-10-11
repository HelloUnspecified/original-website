// docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!

import { reloadRoutes } from 'react-static/node';
import jdown from 'jdown';
import chokidar from 'chokidar';

chokidar.watch('./src/content').on('all', () => reloadRoutes());

export default {
    getSiteData: () => ({
        title: 'Unspecified',
    }),

    getRoutes: async () => {
        const { legal } = await jdown('./src/content');

        return [
            {
                path: '/',
                component: 'src/pages/Home',
            },
            {
                path: '/legal/termsofuse',
                component: 'src/pages/legal/TermsOfUse',
                getData: () => legal.termsOfUse,
            },
            {
                path: '/legal/privacy',
                component: 'src/pages/legal/Privacy',
                getData: () => legal.privacy,
            },
            {
                path: '/legal/copyright',
                component: 'src/pages/legal/Copyright',
                getData: () => legal.copyright,
            },
        ];
    },
};
