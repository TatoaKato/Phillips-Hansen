import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_oEyE2ugd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { a as $$Image, $ as $$BaseLayout } from './about_EfaJ1Znc.mjs';
/* empty css                          */
import { t as titlelogo } from './index_sV3WeNXo.mjs';
import { l as logo2 } from './escrowServices_Z1bR9IFk.mjs';

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const pageTitle = "Services";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="services"> <div class="title"> <a href="/services/titleServices"> ${renderComponent($$result2, "Image", $$Image, { "src": titlelogo, "alt": "Title Logo" })} <h3>Title Services</h3> </a> </div> <div class="escrow"> <a href="/services/escrowServices"> ${renderComponent($$result2, "Image", $$Image, { "src": logo2, "alt": "Escrow Logo" })} <h3>Escrow Services</h3> </a> </div> </div> ` })}`;
}, "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/services.astro", void 0);

const $$file = "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
