(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return i})),t.d(o,"metadata",(function(){return r})),t.d(o,"rightToc",(function(){return l})),t.d(o,"default",(function(){return s}));var n=t(1),a=t(9),d=(t(0),t(157)),i={},r={id:"submit-a-repo",title:"submit-a-repo",description:"# How to submit a repo",source:"@site/docs/submit-a-repo.md",permalink:"/docs/submit-a-repo",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/submit-a-repo.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1583918590},l=[{value:"The <code>conflux-docs.json</code> File",id:"the-conflux-docsjson-file",children:[]},{value:"Add Metadata To Your Markdown File",id:"add-metadata-to-your-markdown-file",children:[]},{value:"Add A CI Config To Trigger The Build Workflow of This Repo",id:"add-a-ci-config-to-trigger-the-build-workflow-of-this-repo",children:[]},{value:"Why It Works",id:"why-it-works",children:[]}],c={rightToc:l};function s(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(d.b)("wrapper",Object(n.a)({},c,t,{components:o,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"how-to-submit-a-repo"},"How to submit a repo"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},"create a conflux-docs.json file under your docs folder"),Object(d.b)("li",{parentName:"ul"},"add metadata to your markdown file"),Object(d.b)("li",{parentName:"ul"},"add a ci config to trigger the build workflow of this repo")),Object(d.b)("h2",{id:"the-conflux-docsjson-file"},"The ",Object(d.b)("inlineCode",{parentName:"h2"},"conflux-docs.json")," File"),Object(d.b)("p",null,"A ",Object(d.b)("inlineCode",{parentName:"p"},"conflux-docs.json")," like below one"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "docs": {\n    "en": {                            // language version\n      "Learn About Conflux": [         // sidebar category name \u2776 \n        "en/welcome.md",               // md file path relative to this json file\n        "en/conflux_introduction.md",\n        {\n          "Concepts": [                // 2nd level sidebar category name \u2777 \n            "en/treegraph.md",\n          ]\n        },\n      ],\n      "Try Conflux Core": [\n        "en/fullnode-installation.md"  // md file path relative to this json file \u2778\n      ] \n    }\n  }\n}\n')),Object(d.b)("p",null,"Will generate the site like this."),Object(d.b)("div",{class:"HTML"},Object(d.b)("p",{align:"center"},Object(d.b)("img",{src:"sidebar-demo.png"}))),Object(d.b)("h2",{id:"add-metadata-to-your-markdown-file"},"Add Metadata To Your Markdown File"),Object(d.b)("p",null,"\u2778's title is defined in ",Object(d.b)("inlineCode",{parentName:"p"},"en/fullnode-installation.md")," like below."),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"---\nid: fullnode-installation\ntitle: Installation\n---\n")),Object(d.b)("p",null,"Other headers can be"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"---\nid: doc-markdown\ntitle: Markdown Features\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Markdown :)\ncustom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md\ndescription: How do I find you when I cannot solve this problem\nkeywords:\n  - docs\n  - docusaurus\nimage: https://i.imgur.com/mErPwqL.png\n---\n")),Object(d.b)("p",null,"The ",Object(d.b)("inlineCode",{parentName:"p"},"id"),", ",Object(d.b)("inlineCode",{parentName:"p"},"title")," and ",Object(d.b)("inlineCode",{parentName:"p"},"custom_edit_url")," is required."),Object(d.b)("p",null,"The specs can be found\n",Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features#markdown-headers",title:"docusaurus markdown-headers documentation"}),"here"),".  "),Object(d.b)("h2",{id:"add-a-ci-config-to-trigger-the-build-workflow-of-this-repo"},"Add A CI Config To Trigger The Build Workflow of This Repo"),Object(d.b)("p",null,"Create a PR for this repo, add your repo as a git submodule in ",Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"./"}),"docs")," folder\nlike the ",Object(d.b)("inlineCode",{parentName:"p"},"conflux-portal")," one. Add the submodule folder name to\n",Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"../conflux-docs-index.json"}),"conflux-docs-index.json")," file (order matters). "),Object(d.b)("p",null,"I'll check your repo and submit a PR to add the CI config."),Object(d.b)("h2",{id:"why-it-works"},"Why It Works"),Object(d.b)("p",null,"The CI config in your repo will trigger the build workflow of this repo."),Object(d.b)("p",null,"The workflow will pull your repo down, check if any doc files being updated in\nthe latest commits to your ",Object(d.b)("strong",{parentName:"p"},"master")," branch depending on the\n",Object(d.b)("inlineCode",{parentName:"p"},"conflux-docs.json")," file, use docusaurus build the doc and update\ndeveloper.conflux-chain.org."))}s.isMDXComponent=!0}}]);