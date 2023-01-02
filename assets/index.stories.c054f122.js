var a=Object.defineProperty;var o=(e,t)=>a(e,"name",{value:t,configurable:!0});import{a as d,j as n}from"./jsx-runtime.c8b68ba1.js";/* empty css               */import"./iframe.d440162e.js";function r({title:e}){return d("header",{children:[n("a",{href:"/",className:"logo",children:"GHD"}),n("span",{className:"app-name",children:e}),n("div",{className:"menu",children:n("a",{href:"/",children:"Menu"})})]})}o(r,"Header");try{r.displayName="Header",r.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/UI/Header/index.tsx#Header"]={docgenInfo:r.__docgenInfo,name:"Header",path:"src/UI/Header/index.tsx#Header"})}catch{}const g={title:"UI/Header",component:r,parameters:{storySource:{source:`import React from "react";
import Header from ".";

export default {
  title: "UI/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  title: "Storybook",
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:13},endLoc:{col:45,line:13},startBody:{col:17,line:13},endBody:{col:45,line:13}}}},layout:"fullscreen"}},s=o(e=>n(r,{...e}),"Template"),l=s.bind({});l.args={title:"Storybook"};const u=["LoggedIn"];export{l as LoggedIn,u as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories.c054f122.js.map
