/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BzRFlNLR.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C4bAUvfg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Validado", "path": "../", "logo_size": "small" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full px-3"> <figure> <img src="/images/logotipo.svg" alt="Astro" class="w-2/5 mx-auto text-center py-5"> </figure> <div class="px-10 mb-4 max-w-screen-sm mx-auto"> <p class="bg-blue-500 text-center py-3 text-white rounded-full uppercase tracking-wide font-bold"> <span class="font-light">Secundaria:</span> FFCAMK0254
</p> </div> <figure class="px-10"> <img src="./images/alumno/1.jpg" class="mx-auto rounded-md" decoding="async" loading="lazy"> </figure> <h3 class="
    text-center
    text-4xl
    font-bold
    px-16
    mt-2
    mb-3
    text-pink-900
    ">Juárez Delgado Ian Axel</h3> <div class="grid grid-cols-2 mx-auto max-w-screen-sm gap-1"> <div class="text-center text-2xl border-r-white bg-gray-300 p-5">
Grado: <span class="font-bold">2</span> </div> <div class="text-center text-2xl border-r-white bg-gray-300 p-5">
Grupo: <span class="font-bold">A</span> </div> <div class="col-span-2 text-center text-xl bg-gray-300 p-5">
Ciclo escolar: <span class="font-bold">2023-2024</span> </div> <div class="col-span-2 text-center text-xl bg-gray-300 p-5">
Alergias: <span class="font-bold">Ninguna</span> </div> <div class="col-span-2 text-center text-xl bg-gray-300 p-5">
Padre o tutor: <span class="font-bold">ERIKA ISABEL FERNANDEZ CORBALA</span> </div> </div> <a href="../" class="
    fixed bottom-10 left-1/2 transform -translate-x-1/2 mb-4
    bg-red-600 text-white px-7 py-2 rounded-full
    text-2xl
    ">
Cerrar sesión
</a> </section> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/pages/alumno/index.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/pages/alumno/index.astro";
const $$url = "/alumno";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
