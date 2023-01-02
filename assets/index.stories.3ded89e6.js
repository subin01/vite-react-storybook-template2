var p=Object.defineProperty;var t=(e,r)=>p(e,"name",{value:r,configurable:!0});import{c as f}from"./scripts.12e3a0c2.js";import{a as c,j as n,F as u}from"./jsx-runtime.c8b68ba1.js";import{B as d}from"./index.f184df53.js";import"./iframe.d440162e.js";/* empty css                */function a({className:e,header:r,footer:o,children:l}){const i=r?n("div",{className:"card__header",children:r}):null,m=o?n("div",{className:"card__footer",children:o}):null;return c("article",{className:`card ${e}`,children:[i,l,m]})}t(a,"Card");try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/UI/Card/index.tsx#Card"]={docgenInfo:a.__docgenInfo,name:"Card",path:"src/UI/Card/index.tsx#Card"})}catch{}const B={parameters:{storySource:{source:`import { Card } from ".";
import card from "./scripts";
// import {Card, init} from './Card';
import Button from "@/UI/Button";

export default {
  title: "UI/Card",
  component: Card,
  // argTypes: {
  //   content: { control: 'text' },
  // },
};

const Template = args => (
  <Card
    {...args}
    footer={
      <>
        <Button label="save" />
        <Button label="cancel" secondary />
      </>
    }
  />
);

export const Primary = Template.bind({});

Primary.args = {
  className: "",
  children: "Card content section",
  header: "Card Header",
};

Primary.play = ({ canvasElement }) => {
  card.init();
};
`,locationsMap:{primary:{startLoc:{col:17,line:14},endLoc:{col:1,line:24},startBody:{col:17,line:14},endBody:{col:1,line:24}}}}},title:"UI/Card",component:a},C=t(e=>n(a,{...e,footer:c(u,{children:[n(d,{label:"save"}),n(d,{label:"cancel",secondary:!0})]})}),"Template"),s=C.bind({});s.args={className:"",children:"Card content section",header:"Card Header"};s.play=({canvasElement:e})=>{f.init()};const S=["Primary"];export{s as Primary,S as __namedExportsOrder,B as default};
//# sourceMappingURL=index.stories.3ded89e6.js.map
