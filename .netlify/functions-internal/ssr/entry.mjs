import { renderers } from './renderers.mjs';
import { manifest } from './manifest_NnEPlxEL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_m3n9c52p.mjs');
const _page1 = () => import('./chunks/index_l6CtDh9A.mjs');
const _page2 = () => import('./chunks/about_3n-dci4d.mjs');
const _page3 = () => import('./chunks/contact_ZVxurBN2.mjs');
const _page4 = () => import('./chunks/faq_023ve_A8.mjs');
const _page5 = () => import('./chunks/ourTeam_yJTW96fu.mjs');
const _page6 = () => import('./chunks/services_nLWWlXet.mjs');
const _page7 = () => import('./chunks/escrowServices_WS5K_20a.mjs');
const _page8 = () => import('./chunks/titleServices_d_HYasZe.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/ourTeam.astro", _page5],
    ["src/pages/services.astro", _page6],
    ["src/pages/services/escrowServices.astro", _page7],
    ["src/pages/services/titleServices.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b96b9a12-c566-4674-8c23-d81403121a77"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
