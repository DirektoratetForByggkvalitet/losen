import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-c707cce4.js";import"./Table-70bf50a1.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2dbb56a1.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-a5bba7af.js";import"./styles-36622289.js";function i(t){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Schema/Translation"}),`
`,e.jsx(n.h1,{id:"schema-translation",children:"Schema translation"}),`
`,e.jsx(n.p,{children:`A common use case when building services such as wizards for a wide audience is the need for showing content in more
than one language.`}),`
`,e.jsxs(n.p,{children:["In ",e.jsx("em",{children:"losen"})," this is handled by allowing you to pass a translations object to the ",e.jsx("code",{children:"Wizard"}),` node
when rendering the wizard. Multiple languages are supported, and a language selector is shown in the bottom of the
table of contents if multiple languages are set up. Translations are passed to losen by adding the`]}),`
`,e.jsxs(n.p,{children:[e.jsx("code",{children:"translations"})," to the ",e.jsx("code",{children:"<Wizard>"})," component."]}),`
`,e.jsx(n.p,{children:"Losen expects translations provided to be in the following structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  // the property name (en) should be the same as the
  // key property inside the object
  "en": {
    "key": "en"
    "name": "English",
    "meta": {
      "title": "Title of the wizard"
    },
    "tags": {
      //...
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx("code",{children:"tags"}),` property for each translation is an object where the
properties are references to the `,e.jsx("code",{children:"id"}),` nodes in the schema. Given
that we have for instance an Input node in our schema with the `,e.jsx("code",{children:"id"}),`
property set to `,e.jsx("code",{children:"fornavn"}),`, the complete translation object for an
English translation would look like this 👇`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const trans = {
  en: {
    key: "en"
    name: "English",
    meta: {
      title: "Title of the wizard"
    },
    tags: {
      fornavn: {
        heading: "First name"
      }
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:`With the translation above, the field will get the heading "First name" if
the user selects the English translation.`}),`
`,e.jsx(n.h2,{id:"properties-for-translation-items",children:"Properties for translation items"}),`
`,e.jsx(n.p,{children:`Below is an example showing a translation object with all the available properties for an item in the translations
object.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "fornavn": {
    "heading": "First name",
    "description": "The name you've got that is <strong>not</strong> your family name.",
    "image": {
      "large": "https://url.to/large/image.png",
      "small": "https://url.to/small/image.png"
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"finding-the-schema-node-ids",children:"Finding the schema node IDs"}),`
`,e.jsxs(n.p,{children:["When working with the content in the wizard, append ",e.jsx(n.code,{children:"?debug"}),` to the page url to show the
id of all the nodes in the wizard. The nodes ids will show as pink labels in the top-right
corner of the component.`]}),`
`,e.jsx(n.h2,{id:"overriding-content-a-hack",children:'Overriding content (a "hack")'}),`
`,e.jsxs(n.p,{children:[`In some cases you might want simply to override the headings, text or images in the schema.
If you want non-technical editors to be able to override part of the content in the wizard
you can add a Norwegian translation with the key `,e.jsx("code",{children:"no"})," to the wizard."]}),`
`,e.jsx(n.p,{children:`The Norwegian translation is the default one, and the language picker won't show unless you
add some other language than that.`})]})}function b(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{b as default};
