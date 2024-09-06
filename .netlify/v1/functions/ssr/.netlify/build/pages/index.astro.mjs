/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BzRFlNLR.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_32Qaoul6.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
export { renderers } from '../renderers.mjs';

function FormLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const clave_acceso = watch("clave_acceso");
  const [error_acceso, setErrorAcceso] = useState();
  function validar() {
    if (clave_acceso == "1234") {
      setErrorAcceso(false);
      window.open("./alumno", "_self");
    } else {
      setErrorAcceso(true);
    }
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "\n        font-Public-Sans-Variable\n        text-center\n        text-6xl\n        text-gray-600\n        py-5\n        px-10\n        ", children: "Tarjetón digital" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "rounded-md w-full text-3xl text-center p-3",
          ...register("clave_acceso", { required: false })
        }
      ),
      errors.clave_acceso && /* @__PURE__ */ jsxs("p", { className: "py-3 text-md text-center text-red-600", children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-exclamation-circle p-1" }),
        " La clave es requerida"
      ] }),
      error_acceso && /* @__PURE__ */ jsxs("p", { className: "py-3 text-md text-center text-red-600", children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-exclamation-circle p-1" }),
        " La clave es incorrecta"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: validar,
          type: "submit",
          className: "\n            my-5 text-center\n            bg-blue-900\n            text-white\n            px-8 py-2\n            rounded-full\n            mx-auto flex\n            ",
          children: "Ingresar"
        }
      )
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tarjet\xF3n digital", "path": "./", "logo_size": "large" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="py-5"> <figure> <img src="/images/logotipo.svg" alt="Astro" class="md:w-2/5 w-2/4 mx-auto py-5 text-center"> </figure> </header> <div class="flex items-center justify-center"> <div class="md:max-w-screen-sm w-full h-full px-10"> ${renderComponent($$result2, "FormLogin", FormLogin, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/components/FormLogin", "client:component-export": "default" })} </div> </div>` })}`;
}, "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/pages/index.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/AteneoTarjetonDigital/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
