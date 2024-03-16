import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderComponent } from '../astro_oEyE2ugd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import { a as $$Image, $ as $$BaseLayout } from './about_EfaJ1Znc.mjs';
/* empty css                            */

const bruce = new Proxy({"src":"/_astro/Bruce PFP.fO6nC8x2.jpg","width":3587,"height":5380,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/Images/Bruce PFP.jpg";
							}
							
							return target[name];
						}
					});

const haylee = new Proxy({"src":"/_astro/Haylee.7CLsMFPh.jpg","width":4042,"height":6063,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/Images/Haylee.jpg";
							}
							
							return target[name];
						}
					});

const katie = new Proxy({"src":"/_astro/Katie.xprv0yZt.jpg","width":3861,"height":5792,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/Images/Katie.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$OurTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurTeam;
  const pageTitle = "Our Team";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` <div class="bioWrapper"> <div class="image"> ${renderComponent($$result2, "Image", $$Image, { "src": bruce, "alt": "Bruce Evans" })} </div> <div class="nameb"> <div class="name"> <h3>Bruce Evans</h3> </div> <div class="title">
Owner/President: Phillips-Hansen Land Title Company
</div> <div class="description"> <p>I have a great love of everything outdoors: hunting, fishing, snowmobiling, horseback riding, cars and
                motorcycles. My greatest love is for my family.<br>
I attended Southern Utah State College
                where I worked for Cedar Land Title. I worked for them for one year and learned the basic Title
                Insurance Business, searching titles at the Iron County Courthouse. I then transferred to Utah State University and worked for Hickman
                Land Title Company. I worked there as a Public Relations person and got to learn the front side of the
                Business.<br>
In 1991 I purchased Phillips-Hansen Land Title Company from Albert and Lucille Hansen. Al said he
                would help me learn the ropes of the title business. I will be forever grateful for his influence and
                teaching. With the help of Al and many other individuals within the industry I have come to love and
                appreciate what I have done for the past 37 years.</p> </div> </div> </div> <div class="bioWrapper"> <div class="nameb div1"> <div class="name"> <h3>Haylee Tolman</h3> </div> <div class="title">
Escrow Payments and Policy Documentation
</div> <div class="description"> <p>Thriving at Phillips-Hansen, where I manage escrow payments and draft policies!<br>
I cherish connecting with our customers. Beyond work, I indulge in outdoor adventures - 
              from water sports to sunset strolls, cherishing moments with loved ones.</p> </div> </div> <div class="image div2"> ${renderComponent($$result2, "Image", $$Image, { "src": haylee, "alt": "Haylee Tolman" })} </div> </div> <div class="bioWrapper"> <div class="image"> ${renderComponent($$result2, "Image", $$Image, { "src": katie, "alt": "Katie Hoogs" })} </div> <div class="nameb"> <div class="name"> <h3>Katie Hoogs</h3> </div> <div class="title">
Social Media and Online Management
</div> <div class="description"> <p>I keep us up to date in the modern world! I oversee everything online including building 
              and managing our new website and our social media pages. I am a current student at Weber State University, 
              studying Cybersecurity and Network Management. Outside of work I like to play video games, be outdoors, and travel. 
              I have been to 10 countries outside the United States and hope to see more of the world.</p> </div> </div> </div> ` })} </body></html>`;
}, "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/ourTeam.astro", void 0);

const $$file = "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/ourTeam.astro";
const $$url = "/ourTeam";

export { $$OurTeam as default, $$file as file, $$url as url };
