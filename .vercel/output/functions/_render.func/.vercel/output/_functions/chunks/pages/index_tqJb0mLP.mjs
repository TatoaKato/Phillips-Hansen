import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_nbY0ThVn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { a as $$Image, $ as $$BaseLayout } from './about_53jWYbBr.mjs';
/* empty css                          */
import { l as logo2 } from './escrowServices_W4i9UqoG.mjs';

const titlelogo = new Proxy({"src":"/_astro/Insurance no back.Mv80GEH2.png","width":224,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/Images/Insurance no back.png";
							}
							
							return target[name];
						}
					});

const buildingwide = new Proxy({"src":"/_astro/BuildingWide.2inWcPf_.jpg","width":6410,"height":4273,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/Images/BuildingWide.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="missionWrapper"> <div class="missionContent"> <div class="homepageImage"> ${renderComponent($$result2, "Image", $$Image, { "src": buildingwide, "alt": "Our Building" })} </div> <div class="mission"> <h2>Our Mission</h2> <p>
At Phillips-Hansen Land Title, our mission is to provide exceptional title and escrow 
          services to our clients with integrity, accuracy, and efficiency. We are dedicated to safeguarding 
          the real estate investments of our community by conducting thorough title searches, offering 
          comprehensive title insurance coverage, and facilitating smooth and timely closings. With a commitment 
          to excellence and personalized service, we strive to exceed the expectations of our clients and 
          contribute to the success and peace of mind of homeowners, lenders, and real estate professionals 
          throughout Northern Utah."
</p> </div> </div> </div> <div class="servicesWrapper"> <h2>Our Services</h2> <div class="services"> <div class="title"> <a href="/services/titleServices"> ${renderComponent($$result2, "Image", $$Image, { "src": titlelogo, "alt": "Title Logo" })} <div class="ServiceLabel"> <h3>Title Services</h3> </div> </a> </div> <div class="escrow"> <a href="/services/escrowServices"> ${renderComponent($$result2, "Image", $$Image, { "src": logo2, "alt": "Escrow Logo" })} <div class="ServiceLabel"> <h3>Escrow Services</h3> </div> </a> </div> </div> </div> ` })} `;
}, "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/index.astro", void 0);

const $$file = "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as i, titlelogo as t };
