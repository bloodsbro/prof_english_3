import{H as i,j as e}from"./entry.client-CfQHZ0b1.js";const l="The application will run on a server with internet access.",c=[{depth:1,value:"3. Detailed Requirements",id:"3-detailed-requirements",children:[{depth:2,value:"3.1 External Interface Requirements",id:"31-external-interface-requirements",children:[{depth:3,value:"3.1.1 User Interfaces",id:"311-user-interfaces"},{depth:3,value:"3.1.2 Hardware Interfaces",id:"312-hardware-interfaces"},{depth:3,value:"3.1.3 Software Interfaces",id:"313-software-interfaces"},{depth:3,value:"3.1.4 Interaction Interfaces",id:"314-interaction-interfaces"}]},{depth:2,value:"3.2 Functional Requirements",id:"32-functional-requirements"},{depth:2,value:"3.3 Performance Requirements",id:"33-performance-requirements"},{depth:2,value:"3.4 Design Constraints",id:"34-design-constraints"},{depth:2,value:"3.5 Non-functional Requirements",id:"35-non-functional-requirements"},{depth:2,value:"3.6 Other Requirements",id:"36-other-requirements"}]}],d=void 0;function s(r){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"3-detailed-requirements",children:"3. Detailed Requirements"}),`
`,e.jsx(n.h2,{id:"31-external-interface-requirements",children:"3.1 External Interface Requirements"}),`
`,e.jsx(n.h3,{id:"311-user-interfaces",children:"3.1.1 User Interfaces"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Web interface"})," using ",e.jsx(n.strong,{children:"Nuxt.js"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"REST API"})," for interaction with the frontend."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JWT"})," for authentication and authorization."]}),`
`]}),`
`,e.jsx(n.h3,{id:"312-hardware-interfaces",children:"3.1.2 Hardware Interfaces"}),`
`,e.jsx(n.p,{children:"The application will run on a server with internet access."}),`
`,e.jsx(n.h3,{id:"313-software-interfaces",children:"3.1.3 Software Interfaces"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OpenAPI"})," for API documentation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zudoku"})," for viewing the API documentation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Nuxt.js"})," for creating the client-side web application."]}),`
`]}),`
`,e.jsx(n.h3,{id:"314-interaction-interfaces",children:"3.1.4 Interaction Interfaces"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Interaction between the client and server via ",e.jsx(n.strong,{children:"REST API"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JSON"})," format for data transmission."]}),`
`]}),`
`,e.jsx(n.h2,{id:"32-functional-requirements",children:"3.2 Functional Requirements"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Registration and Authentication"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Users should be able to register and log in using ",e.jsx(n.strong,{children:"JWT"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Order Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Admins can create, update, view, and delete orders."}),`
`,e.jsx(n.li,{children:"Couriers can accept orders and update their statuses."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Courier Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Admins can assign couriers to orders."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"33-performance-requirements",children:"3.3 Performance Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"API response time should be less than 1 second."}),`
`,e.jsx(n.li,{children:"The system should support up to 1000 concurrent users."}),`
`]}),`
`,e.jsx(n.h2,{id:"34-design-constraints",children:"3.4 Design Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use of ",e.jsx(n.strong,{children:"Nuxt.js"})," for the frontend."]}),`
`,e.jsxs(n.li,{children:["The server should be based on ",e.jsx(n.strong,{children:"Node.js"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OpenAPI"})," and ",e.jsx(n.strong,{children:"Zudoku"})," for API documentation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"35-non-functional-requirements",children:"3.5 Non-functional Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reliability"}),": The system should ensure 99.9% uptime."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Security"}),": Authentication via ",e.jsx(n.strong,{children:"JWT"}),", protection against CSRF."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scalability"}),": The system should be scalable to accommodate growing user numbers."]}),`
`]}),`
`,e.jsx(n.h2,{id:"36-other-requirements",children:"3.6 Other Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Support for multiple languages."}),`
`,e.jsx(n.li,{children:"Logging of user actions and errors."}),`
`]})]})}function a(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default,l as excerpt,d as frontmatter,c as tableOfContents};
//# sourceMappingURL=detailed_requirements-CHnPZhH4.js.map
