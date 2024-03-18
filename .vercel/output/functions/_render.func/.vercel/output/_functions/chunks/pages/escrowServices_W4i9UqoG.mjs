import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_nbY0ThVn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { a as $$Image, $ as $$BaseLayout } from './about_53jWYbBr.mjs';
/* empty css                                   */

const logo2 = new Proxy({"src":"/_astro/Escrow no back.8waRfOU1.png","width":224,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/Images/Escrow no back.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$EscrowServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EscrowServices;
  const pageTitle = "Escrow Services";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="escLogo"> ${renderComponent($$result2, "Image", $$Image, { "src": logo2, "alt": "Escrow Logo" })} </div> <p></p><h2> Our Escrow Services Include:</h2> <div class="esc"> <ul> <li><b>Secure Fund Holding:</b> We securely hold earnest money deposits, purchase funds, and seller's proceeds in escrow, safeguarding the financial interests of all parties involved in the transaction.</li> <li><b>Document Management:</b> Our experienced team manages and organizes all necessary documents, including purchase agreements, loan documents, and title documents, ensuring accuracy and compliance throughout the transaction.</li> <li><b>Title Search and Insurance:</b> We conduct thorough title searches to identify any potential title issues and provide comprehensive title insurance to protect buyers and lenders against unforeseen defects.</li> <li><b>Proration of Expenses:</b> We calculate and handle the proration of property taxes, homeowners association fees, and other expenses, ensuring fair and equitable distribution between buyers and sellers.</li> <li><b>Escrow Instructions:</b> We follow detailed escrow instructions provided by buyers, sellers, and lenders, ensuring that funds are disbursed and documents are executed according to the agreed-upon terms.</li> <li><b>Recording Documents:</b> After the transaction is complete, we ensure that all necessary documents, including deeds and mortgages, are properly recorded with the appropriate government authorities, facilitating the transfer of ownership and establishment of lender liens.</li> </ul></div>  <p></p><h2>Escrow Service FAQs</h2> <div class="efaq"> <ul> <li><b>What happens to the escrow account if the real estate transaction falls through?</b></li> <ul> <li>If a real estate transaction falls through, the handling of the escrow account depends on the circumstances and terms in the purchase agreement. Typically, funds are either returned to the parties if mutually agreed, held until disputes are resolved, or distributed according to the terms of the agreement or applicable laws.</li> </ul> <li> <b>Is title escrow required by law, or is it optional for real estate transactions?</b> <ul> <li>
Title escrow is not legally required for real estate transactions, but it's commonly used for added security.
</li> </ul> </li><li> <b>Can title escrow services be used for other types of transactions, such as refinancing or transferring ownership?</b> <ul> <li>
Yes, title escrow services can be used for refinancing, transferring ownership, and other real estate transactions beyond purchases.
</li> </ul> </li></ul> </div>  ` })}`;
}, "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/services/escrowServices.astro", void 0);

const $$file = "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/services/escrowServices.astro";
const $$url = "/services/escrowServices";

const escrowServices = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$EscrowServices,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { escrowServices as e, logo2 as l };
