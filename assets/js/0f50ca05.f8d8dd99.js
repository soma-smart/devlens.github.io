"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[403],{5155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(4848),s=n(8453);const r={},a="Abstract Syntax Tree (AST)",i={id:"AST",title:"Abstract Syntax Tree (AST)",description:"Thanks to ANTLR4 parsers, we have created an AST that give you enough informations to find which node hold the information you want.",source:"@site/docs/3 - AST.md",sourceDirName:".",slug:"/AST",permalink:"/devlens-docs/AST",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/devlens-docs/Usage"},next:{title:"Annotation",permalink:"/devlens-docs/Annotation"}},c={},d=[];function h(e){const t={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"abstract-syntax-tree-ast",children:"Abstract Syntax Tree (AST)"})}),"\n",(0,o.jsx)(t.p,{children:"Thanks to ANTLR4 parsers, we have created an AST that give you enough informations to find which node hold the information you want."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AST",src:n(6677).A+"",title:"AST",width:"803",height:"268"})}),"\n",(0,o.jsx)(t.p,{children:'For example, this block represent the tree of a Python import."Import_Stmt" is the first node that interest us to filter every import in code. Then value of the import is located under the "Dotted_name" node.'}),"\n",(0,o.jsx)(t.p,{children:"To see the AST generated by the analyze of the project you simply have to use verbose mode on the command and choose if you want to store the tree somewhere:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"./devlens -v checkf /src\n"})}),"\n",(0,o.jsx)(t.p,{children:"or if you want to store the tree"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"./devlens -v checkf /src > file.txt\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will give a general view of every node of your project, sorted by file."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AST2",src:n(6495).A+"",title:"AST2",width:"1294",height:"782"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6677:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ast-ae7bf8fb1b98566a7cd023563ebacaa3.png"},6495:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ast2-15f2cef46a58dfd89751bd5f3f44d9b7.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);