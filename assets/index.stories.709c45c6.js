var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{j as i}from"./jsx-runtime.c8b68ba1.js";import{A as e}from"./index.949cd053.js";import"./iframe.d440162e.js";/* empty css                */const u={parameters:{storySource:{source:`import React from "react";
import Accordion from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    open: { control: "boolean" },
  },
};

// More on component Templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Accordion {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Accordion title",
  open: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:48,line:15},startBody:{col:17,line:15},endBody:{col:48,line:15}}}}},title:"UI/Accordion",component:e,argTypes:{open:{control:"boolean"}}},s=t(o=>i(e,{...o}),"Template"),a=s.bind({});a.args={title:"Accordion title",open:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."};const g=["Default"];export{a as Default,g as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories.709c45c6.js.map
