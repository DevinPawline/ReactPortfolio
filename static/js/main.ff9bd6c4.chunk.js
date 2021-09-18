(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{17:function(e,s,c){},19:function(e,s,c){"use strict";c.r(s);var i=c(1),t=c.n(i),a=c(7),n=c.n(a),r=(c(17),c(2)),l=c(3),o=c(5),j=c(4),d=c(0),m=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)(t.a.Fragment,{children:Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(d.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,target:"_blank",children:Object(d.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),c}(i.Component),h=c(9),b=c(10),O=c(12),u=c(11),p=function(e){Object(O.a)(c,e);var s=Object(u.a)(c);function c(){return Object(h.a)(this,c),s.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns",children:Object(d.jsx)("img",{className:"profile-pic",src:"",alt:""})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:e.aboutme}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.address}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.website})]})]})})]})]})})}}]),c}(i.Component),x=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.UniversityName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.CompanyName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:e.skillsDescription}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(d.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),c}(i.Component),v=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:"#modal-01",children:[Object(d.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.name}),Object(d.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),c}(i.Component),f=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"testimonials",children:[Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Client Testimonials"})})}),Object(d.jsxs)("div",{className:"ten columns flex-container",children:[Object(d.jsx)("div",{className:"flexslider",children:Object(d.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("blockquote",{children:[Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]}),"  "]})}}]),c}(i.Component),N=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsx)("div",{className:"row section-head",children:Object(d.jsx)("div",{className:"ten columns",children:Object(d.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(d.jsx)("div",{className:"widget",children:Object(d.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),c}(i.Component),g=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"twelve columns",children:Object(d.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})})}))})}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(i.Component),k={imagebaseurl:"https://rbhatia46.github.io/",name:"Rahul Bhatia",role:"Frontend Developer and Data Scientist",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/devin-pawline-b3750a215/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/DevinPawline",className:"fa fa-github"}],aboutme:"I am currently a full-stack student at UNCC Coding Bootcamp! I have a passion for technology and coding and look forward to creating a project for you! ",address:"India",website:"https://rbhatia46.github.io",education:[{UniversityName:"University of North Carolina at Charlotte",specialization:"Full Stack Coding",MonthOfPassing:"October",YearOfPassing:"2021"}],work:[{CompanyName:"Brace Family YMCA",specialization:"Summer Camp Assistant Director",MonthOfLeaving:"Aug",YearOfLeaving:"2019"},{CompanyName:"Brace Family YMCA",specialization:"Teens Program Co-Director",MonthOfLeaving:"Aug",YearOfLeaving:"2019"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"Vanilla Java"},{skillname:"Mongo"},{skillname:"Microsoft Certified "}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},w=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{resumeData:k}),Object(d.jsx)(p,{resumeData:k}),Object(d.jsx)(x,{resumeData:k}),Object(d.jsx)(v,{resumeData:k}),Object(d.jsx)(f,{resumeData:k}),Object(d.jsx)(N,{resumeData:k}),Object(d.jsx)(g,{resumeData:k})]})}}]),c}(i.Component),y=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(d.jsx)(y,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ff9bd6c4.chunk.js.map