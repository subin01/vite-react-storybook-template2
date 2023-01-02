var c=Object.defineProperty;var e=(i,r)=>c(i,"name",{value:r,configurable:!0});import{j as t,F as s,a as n}from"./jsx-runtime.c8b68ba1.js";import{A as a}from"./index.949cd053.js";import{d as l}from"./scripts.c3db8e50.js";import"./iframe.d440162e.js";/* empty css                */const v={parameters:{storySource:{source:`import React from "react";

import Accordion from ".";
import accordion from "./scripts";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: false },
    children: { control: false },
  },
};

// More on component Templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <>
    <div className="accordions">
      <Accordion title="Banking and insurance">
        <p>
          Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can
          damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also
          have <a href="https://google.com/">a long-term impact</a> on the productivity of agricultural land. Disruption
          to food production can impact imports and exports, which can affect global food security as well as impacting
          health and social equity within countries.
        </p>
      </Accordion>
      <Accordion open title="Agriculture">
        <p>
          Agriculture is the world\u2019s thirstiest industry \u2013 accounting for almost 70% of global water withdrawals. Our
          Aquanomics model estimates that the sector could lose $416bn in economic output between 2022 and 2050.
        </p>
        <h6 className="h6">Water risk in the agricultural sector</h6>
        <p>
          Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can
          damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also
          have <a href="https://microsoft.com/">a short-term impact</a> on the productivity of agricultural land.
          Disruption to food production can impact imports and exports, which can affect global food security as well as
          impacting health and social equity within countries.
        </p>
      </Accordion>
      <Accordion title="Energy and utilities">
        <p>
          Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can
          damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also
          have a long-term impact on the productivity of agricultural land. Disruption to food production can impact
          imports and exports, which can affect global food security as well as impacting health and social equity
          within countries.
        </p>
      </Accordion>
      <Accordion title="FMCG and retail">
        <p>
          Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can
          damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also
          have a long-term impact on the productivity of agricultural land. Disruption to food production can impact
          imports and exports, which can affect global food security as well as impacting health and social equity
          within countries.
        </p>
      </Accordion>
    </div>
  </>
);

export const Multiple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Multiple.args = {};

Multiple.play = ({ canvasElement }) => {
  accordion.init();
};

Multiple.parameters = {
  controls: { hideNoControlsWarning: true },
};
`,locationsMap:{multiple:{startLoc:{col:17,line:18},endLoc:{col:1,line:64},startBody:{col:17,line:18},endBody:{col:1,line:64}}}}},title:"UI/Accordion",component:a,argTypes:{title:{control:!1},children:{control:!1}}},d=e(()=>t(s,{children:n("div",{className:"accordions",children:[t(a,{title:"Banking and insurance",children:n("p",{children:["Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have ",t("a",{href:"https://google.com/",children:"a long-term impact"})," on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."]})}),n(a,{open:!0,title:"Agriculture",children:[t("p",{children:"Agriculture is the world\u2019s thirstiest industry \u2013 accounting for almost 70% of global water withdrawals. Our Aquanomics model estimates that the sector could lose $416bn in economic output between 2022 and 2050."}),t("h6",{className:"h6",children:"Water risk in the agricultural sector"}),n("p",{children:["Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have ",t("a",{href:"https://microsoft.com/",children:"a short-term impact"})," on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."]})]}),t(a,{title:"Energy and utilities",children:t("p",{children:"Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have a long-term impact on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."})}),t(a,{title:"FMCG and retail",children:t("p",{children:"Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have a long-term impact on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."})})]})}),"Template"),o=d.bind({});o.args={};o.play=({canvasElement:i})=>{l.init()};o.parameters={controls:{hideNoControlsWarning:!0}};const w=["Multiple"];export{o as Multiple,w as __namedExportsOrder,v as default};
//# sourceMappingURL=mutiple.stories.8697b28b.js.map
