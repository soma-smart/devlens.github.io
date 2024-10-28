"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[315],{1824:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(4848),a=n(8453);const s={},i="Annotation",r={id:"Devlens-CLI/Annotation",title:"Annotation",description:"The next step is to \"catch\" the node you want. Binaries in the release comes with an 'annotators/' folder already filled with some example.",source:"@site/docs/Devlens-CLI/4 - Annotation.md",sourceDirName:"Devlens-CLI",slug:"/Devlens-CLI/Annotation",permalink:"/docs/Devlens-CLI/Annotation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Abstract Syntax Tree (AST)",permalink:"/docs/Devlens-CLI/AST"},next:{title:"Query",permalink:"/docs/Devlens-CLI/Query"}},c={},l=[];function d(t){const e={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"annotation",children:"Annotation"})}),"\n",(0,o.jsx)(e.p,{children:"The next step is to \"catch\" the node you want. Binaries in the release comes with an 'annotators/' folder already filled with some example."}),"\n",(0,o.jsx)(e.p,{children:"Here is a peak of the Annotator that will store every import of your project:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'class PythonImportAnnotator(AbstractAnnotator):\n    """\n    PythonImportAnnotator is an annotator class that identifies import statements in Python code.\n    """\n    def parse(self, ast: ParserRuleContext):\n    """\n       Methods:\n    --------\n    parse(ast: ParserRuleContext):\n        Parses the provided AST to find and yield annotations for Python import statements.\n        It searches for import statements, import names, and dotted names within the AST.\n\n        Parameters:\n        -----------\n        ast : ParserRuleContext\n            The abstract syntax tree to be parsed for import statements.\n\n        Yields:\n        -------\n        Annotation\n            An annotation object containing the name "Import", the value of the import statement,\n            and the context in which the import statement was found.\n    """\n        importStmts = findAll(ast, "Import_stmt")\n        importNames = findAll(importStmts, "Import_name")\n        names = findAll(importNames, "Dotted_name")\n\n        for match in names:\n            yield Annotation(name="Import", value=self.getText(match), context=match)\n'})}),"\n",(0,o.jsxs)(e.p,{children:["What interest us in this example is mostly the use of ",(0,o.jsx)(e.code,{children:"findAll()"})," method. This method will create a list of every node you want in the AST."]}),"\n",(0,o.jsxs)(e.p,{children:["You just have to use the ",(0,o.jsx)(e.code,{children:"findAll()"})," on each node you want to filter until you get the value of the node."]}),"\n",(0,o.jsxs)(e.p,{children:["The last part is to create an Annotation for each match you have. You can choose to not store a value in the Annotation by passing ",(0,o.jsx)(e.code,{children:"None"})," to the annotation."]}),"\n",(0,o.jsxs)(e.p,{children:["Executing a ",(0,o.jsx)(e.code,{children:"checkf"})," or a ",(0,o.jsx)(e.code,{children:"checkd"})," will result on the creation of Annotations and the filling of the database."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"SQLite Annotation",src:n(8111).A+"",title:"SQLite Annotation",width:"1268",height:"683"})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},8111:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/db-912e315177e009b939fd4ff00debc149.png"},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>r});var o=n(6540);const a={},s=o.createContext(a);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);