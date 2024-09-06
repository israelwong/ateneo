/* empty css                                 */
import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_BzRFlNLR.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`pagina no encontrada`;
}, "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/pages/404.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
