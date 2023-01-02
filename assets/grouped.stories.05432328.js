var c=Object.defineProperty;var a=(i,r)=>c(i,"name",{value:r,configurable:!0});import"./index.9795488b.js";import{a as o,F as s,j as t}from"./jsx-runtime.c8b68ba1.js";import{A as n}from"./index.949cd053.js";import{d as l}from"./scripts.c3db8e50.js";import"./iframe.d440162e.js";import"./index.09ad23a5.js";import"./instrumenter.9f6f9387.js";import"./es.map.constructor.61a0d135.js";/* empty css                */const k={parameters:{storySource:{source:`// import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import React from "react";

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
    <p className="heading-6">Accordion Group makes only one item open at a time.</p>
    <p>
      Enable this behaviour by adding
      <code> class="accordions-group"</code> to the container div
    </p>
    <div className="accordions-group">
      <Accordion title="Banking and insurance">
        <p>
          Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can
          damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also
          have <a href="https://google.com/">a long-term impact</a> on the productivity of agricultural land. Disruption
          to food production can impact imports and exports, which can affect global food security as well as impacting
          health and social equity within countries.
        </p>
      </Accordion>
      <Accordion title="Agriculture">
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
      <Accordion title="test title1" open>
        <p>test content1</p>
      </Accordion>

      <Accordion title="test title2">
        <p>test content2</p>
      </Accordion>
    </div>
  </>
);

export const Grouped = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Grouped.args = {
  title: "Accordion title",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

Grouped.play = async ({ canvasElement }) => {
  accordion.init(); // init on canvas-ready (eq of onload)

  // try {
  //   const canvas = within(canvasElement);
  //   // \u{1F447} Simulate interactions with the component
  //   await userEvent.click(canvas.getByText("test title2"));
  //   await expect(canvas.getByText("test content2")).toBeInTheDocument();
  //   await expect(canvas.getByText("test content1")).not.toBeVisible();
  // } catch (e) {
  //   console.log(e);
  // }
};

Grouped.parameters = {
  controls: { hideNoControlsWarning: true },
};
`,locationsMap:{grouped:{startLoc:{col:17,line:20},endLoc:{col:1,line:78},startBody:{col:17,line:20},endBody:{col:1,line:78}}}}},title:"UI/Accordion",component:n,argTypes:{title:{control:!1},children:{control:!1}}},d=a(()=>o(s,{children:[t("p",{className:"heading-6",children:"Accordion Group makes only one item open at a time."}),o("p",{children:["Enable this behaviour by adding",t("code",{children:' class="accordions-group"'})," to the container div"]}),o("div",{className:"accordions-group",children:[t(n,{title:"Banking and insurance",children:o("p",{children:["Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have ",t("a",{href:"https://google.com/",children:"a long-term impact"})," on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."]})}),o(n,{title:"Agriculture",children:[t("p",{children:"Agriculture is the world\u2019s thirstiest industry \u2013 accounting for almost 70% of global water withdrawals. Our Aquanomics model estimates that the sector could lose $416bn in economic output between 2022 and 2050."}),t("h6",{className:"h6",children:"Water risk in the agricultural sector"}),o("p",{children:["Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have ",t("a",{href:"https://microsoft.com/",children:"a short-term impact"})," on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."]})]}),t(n,{title:"Energy and utilities",children:t("p",{children:"Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have a long-term impact on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."})}),t(n,{title:"FMCG and retail",children:t("p",{children:"Droughts have devastating effects on crop cultivation and livestock farming, while flooding and storms can damage infrastructure, crop lands, livestock shelter and farming equipment. Water-related disasters can also have a long-term impact on the productivity of agricultural land. Disruption to food production can impact imports and exports, which can affect global food security as well as impacting health and social equity within countries."})}),t(n,{title:"test title1",open:!0,children:t("p",{children:"test content1"})}),t(n,{title:"test title2",children:t("p",{children:"test content2"})})]})]}),"Template"),e=d.bind({});e.args={title:"Accordion title",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."};e.play=async({canvasElement:i})=>{l.init()};e.parameters={controls:{hideNoControlsWarning:!0}};const A=["Grouped"];export{e as Grouped,A as __namedExportsOrder,k as default};
//# sourceMappingURL=grouped.stories.05432328.js.map
