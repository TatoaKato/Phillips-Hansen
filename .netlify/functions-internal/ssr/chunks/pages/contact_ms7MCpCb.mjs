import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_oEyE2ugd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$BaseLayout } from './about_EfaJ1Znc.mjs';
/* empty css                            */

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const pageTitle = "Contact Us";
  const errors = { username: "", email: "", about: "" };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email2 = data.get("email");
      const phone = data.get("phone");
      const about = data.get("about");
      if (typeof name !== "string" || name.length < 1) {
        errors.username += "Please Enter Your Name. ";
      }
      if (typeof email2 !== "string" || !isValidEmail(email2)) {
        errors.email += "Email is not valid. ";
      }
      if (typeof about !== "string") {
        errors.about += "Error Prossesing your Request ";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        return Astro2.redirect("/contact");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="yourInfo"> <h2>Your Info</h2> </div> <div class="form"> <form action="https://formspree.io/f/mkndraqp" method="POST"> <div class="formStuff"> <div class="npe"> <label>
Full Name:
<input type="text" name="name" required> </label> ${errors.username && renderTemplate`<p>${errors.username}</p>`} <label>
Email:
<input type="email" name="email" required> </label> ${errors.email && renderTemplate`<p>${errors.email}</p>`} <label>
Phone Number:
<input type="text" id="phone" name="phone" required> </label> </div> <div class="pref"> <label>
Contact Preference:
<input type="radio" name="contactPreference" value="email">
Email
</label> <label> <input type="radio" name="contactPreference" value="phone">
Phone
</label> <label> <input type="radio" name="contactPreference" value="both">
Both
</label> </div> <h3>What can we help you with?</h3> <label> <textarea id="message" name="message" rows="4" cols="50" required></textarea> </label> ${errors.about && renderTemplate`<p>${errors.about}</p>`} <button>Send</button> </div> </form> </div> ` })}`;
}, "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/contact.astro", void 0);

const $$file = "C:/Users/ariah/OneDrive/Documents/katie help/phillip/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
