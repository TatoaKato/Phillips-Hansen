import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_nbY0ThVn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$BaseLayout } from './about_HndOL-Qe.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const pageTitle = "FAQ";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="FAQ"> <ul> <li><b>What does Phillips-Hansen Land Title do?</b></li> <ul> <li> Phillips-Hansen Land Title is a title company that 
          specializes in providing comprehensive title insurance 
          and escrow services for real estate transactions. 
          We facilitate the transfer of property ownership by ensuring
          that titles are clear of any liens or encumbrances that 
          could affect the buyer's ownership rights.</li> </ul> <li><b>Why is title insurance necessary?</b></li> <ul> <li>Title insurance is necessary to protect property buyers and lenders against
            potential financial loss due to defects in the title that may arise after the
            purchase. These defects could include undisclosed heirs, unpaid taxes, easements,
              or errors in public records. Title insurance offers peace of mind by indemnifying
              the insured parties against covered title defects.</li> </ul> <li><b>What is escrow and how does it work?</b></li> <ul> <li>Escrow is a neutral third-party arrangement where funds and documents
          are held until all conditions of the real estate transaction are met. Phillips-Hansen
            Land Title acts as the escrow agent, ensuring that all parties fulfill their 
            obligations according to the purchase agreement before disbursing funds and 
            transferring ownership.</li> </ul> <li><b>How long does the title insurance process take?</b></li> <ul> <li>The timeline for obtaining title insurance can vary depending on the complexity
            of the transaction and any issues that may arise during the title search. However
            , Phillips-Hansen Land Title is committed to expediting the process while ensuring
            accuracy and thoroughness.</li> </ul> <li><b>Can Phillips-Hansen Land Title assist with commercial real estate transactions?</b></li> <ul> <li>Yes, we provide title insurance and escrow services for both residential 
          and commercial real estate transactions. Our experienced team can handle
            transactions of all sizes, offering tailored solutions to meet the unique 
            needs of commercial clients.</li> </ul> <li><b>What sets Phillips-Hansen Land Title apart from other title companies?</b></li> <ul> <li>Phillips-Hansen Land Title distinguishes itself through its dedication to 
          excellence, attention to detail, and commitment to customer satisfaction. Our 
          team of professionals leverages years of experience and industry expertise to
            deliver seamless and reliable title services tailored to our clients' specific
            needs.</li> </ul> <li><b>How can I request title insurance or escrow services from Phillips-Hansen Land Title?</b></li> <ul> <li>To request our services, simply use our 'Contact Us' page or contact our office to speak with one of our
            knowledgeable team members. We will guide you through the process and ensure
            that your real estate transaction is handled with the utmost care and efficiency.</li> </ul> </ul> </div> <div class="qs"> <h2>Have More Questions?</h2> </div> <div class="button"> <a href="/contact">Contact Us!</a> </div> ` })}`;
}, "C:/Users/katie/OneDrive/Documents/Work Stuff/PH Website/New folder/Phillips-Hansen/src/pages/faq.astro", void 0);

const $$file = "C:/Users/katie/OneDrive/Documents/Work Stuff/PH Website/New folder/Phillips-Hansen/src/pages/faq.astro";
const $$url = "/faq";

export { $$Faq as default, $$file as file, $$url as url };
