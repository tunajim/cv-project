(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{142:function(A,e,t){},143:function(A,e,t){},144:function(A,e,t){},145:function(A,e,t){},158:function(A,e,t){},30:function(A,e,t){},453:function(A,e,t){"use strict";t.r(e);var n=t(2),c=t.n(n),a=t(19),i=t.n(a),o=(t(142),t(3)),l=t(4),s=t(6),r=t(5),p=(t(143),t(144),t(145),t(1)),C=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)("h1",{id:"logo",children:"CV Application Maker"})})}}]),t}(n.Component),g=(t(86),function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A)).handleClick=function(A){A.preventDefault(),n.setState({clicked:!0})},n.handleChange=function(A){n.setState({placeHolder:A.target.value})},n.handleSubmit=function(A){A.preventDefault(),""===n.state.placeHolder&&n.setState({placeHolder:"Must make valid entry"}),n.setState({clicked:!1})},n.handleBlur=function(A){n.setState({clicked:!1})},n.state={clicked:!1,type:n.props.type,placeHolder:n.props.placeHolder,elemType:n.props.elemType},console.log(n.state.elemType),n}return Object(l.a)(t,[{key:"render",value:function(){var A=this,e=this.state.placeHolder,t=this.props.type;return A.props.complete?Object(p.jsx)(A.props.elemType,{className:t,children:e}):A.state.clicked?Object(p.jsx)("form",{className:t,onSubmit:A.handleSubmit,children:Object(p.jsx)("input",{type:"text",className:t,onChange:A.handleChange,autoFocus:!0,onBlur:A.handleBlur})}):Object(p.jsx)(A.props.elemType,{onDoubleClick:A.handleClick,className:t,children:e})}}]),t}(n.Component)),u=new(t(82).LoremIpsum)({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),d=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A)).state={first:{text:""},last:{text:""},submitted:n.props.complete},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"personal-info",children:[Object(p.jsx)(g,{type:"name",placeHolder:"Jane Doe",elemType:"h1",complete:this.props.complete}),Object(p.jsx)(g,{type:"title",placeHolder:"Front End Web Developer",elemType:"h2",complete:this.props.complete}),Object(p.jsx)(g,{type:"description",placeHolder:u.generateParagraphs(1),elemType:"p",complete:this.props.complete})]})}}]),t}(n.Component),j=t(45),B=(t(158),t.p+"static/media/email.a322baaa.png"),Q=t.p+"static/media/navigation.eba38f85.png",m=t.p+"static/media/linkedin.f249b382.png",f=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._handleClick=function(A){A.preventDefault(),n.setState({clicked:!0})},n._handleChange=function(A){n.setState({placeHolder:A.target.value})},n._handleSubmit=function(A){A.preventDefault(),""===n.placeHolder?n.setState({placeHolder:"must make valid entry"}):n.setState({clicked:!1})},n._onBlur=function(A){A.preventDefault(),n.setState({clicked:!1})},n.state={clicked:!1,placeHolder:n.props.placeHolder},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return A.props.complete?Object(p.jsxs)("div",{className:"link",id:A.props.type,children:[Object(p.jsx)("img",{className:"img",src:A.props.img,alt:A.props.type}),Object(p.jsx)(j.b,{to:"#",children:A.state.placeHolder})]}):A.state.clicked?Object(p.jsxs)("div",{className:"link",children:[Object(p.jsx)("img",{className:"img",src:A.props.img,alt:A.props.type}),Object(p.jsx)("form",{onSubmit:A._handleSubmit,children:Object(p.jsx)("input",{type:A.props.type,pattern:A.props.pattern,onChange:A._handleChange,onBlur:A._onBlur,defaultValue:A.props.value,autoFocus:!0,required:!0})})]}):Object(p.jsxs)("div",{className:"link",id:A.props.type,children:[Object(p.jsx)("img",{className:"img",src:A.props.img,alt:A.props.type}),Object(p.jsx)(j.b,{to:"#",onDoubleClick:A._handleClick,children:A.state.placeHolder})]})}}]),t}(n.Component),k=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A)).handleClick=function(A){n.setState({clicked:!0})},n.state={clicked:!1},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsx)(j.a,{children:Object(p.jsx)("div",{className:"contact-div",children:Object(p.jsxs)("navBar",{className:"contact-nav",children:[Object(p.jsx)(f,{type:"email",img:B,placeHolder:"janedoe@gmail.com",complete:this.props.complete}),Object(p.jsx)(f,{type:"tel",img:"data:image/png;base64,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",placeHolder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",complete:this.props.complete}),Object(p.jsx)(f,{type:"nav",img:Q,placeHolder:"Portland, Oregon",complete:this.props.complete}),Object(p.jsx)(f,{type:"url",img:m,placeHolder:"https://linkedin.com/in/jane.doe",value:"https://",complete:this.props.complete})]})})})}}]),t}(n.Component),v=(t(61),t(30),"data:image/png;base64,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9kOd/RsV+av/Frtf8ZLIt32zk/vBoaRt684az3+dhcmzZGn0fu0l0XvuT0ekNJRb5K33RP9dvxftNVcO5fqMp3T2uTH18tdGOubYod2jvezTMfOet0fs3Dm0e8B8CABGTvPkH4neb7w80srHDu6iOUc7fWn0//xPIn/37sFdl4mRjjk2ml94YfSe+/yINLjD0XzrzdF/3x+P3b+DweQTAIymXi+aC9ZH76JfjEWFQL8f7RXT0f/IhyPfeMPAxmNypcc+PnoXvSCa89dE9HoLvk6+8Ybof+TD0V4x7edMGEkCgJGXfuAHo/mxtdGccVakU047/NsD998X7b/+S+RrPhftFRs98bMg6bgV0Zy/NtLZ50bzxB+KOPKoQ39DzpFvvjHaLddEe/l05K/8v24GhQUSAIyV9LBjIq18bMSjTop03IqII46ImOlH3H9f5O/cEfm2WyN/46aImZnSozJJpqYinXJapJMeE+kRj9wTA1O9iJ079/w0/7dui3zz1yPfe2/pSWHOBAAAVMgfAwSACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACgkAAKiQAACACjURkUsPAQB0qm0iYlfpKQCATu0SAABQn51NROwoPQUA0KkdTUTcXXoKAKBDOe5qIuLO0nMAAB1K+c4mRf526TkAgO6klL7T5GhuKj0I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"),b=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._handleDoubleClick=function(A){n.setState({clicked:!0})},n._handleInput=function(A){n.setState({placeHolder:A.target.value})},n._handleSubmit=function(A){n.setState({clicked:!1})},n.state={clicked:!1,tag:n.props.tag,placeHolder:n.props.info,complete:n.props.complete},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return A.props.complete?Object(p.jsx)(A.state.tag,{children:A.state.placeHolder}):A.state.clicked?Object(p.jsx)("form",{onSubmit:A._handleSubmit,children:Object(p.jsx)("input",{className:"input",onChange:A._handleInput,autoFocus:!0,onBlur:A._handleSubmit})}):Object(p.jsx)(A.state.tag,{onDoubleClick:A._handleDoubleClick,children:A.state.placeHolder})}}]),t}(n.Component),O=t(22),h=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._handleDoubleClick=function(A){n.setState({clicked:!0})},n._updateValue=function(A){n.setState({value:A.target.value})},n._handleSubmit=function(A){n.setState({clicked:!1})},n._handleBlur=function(A){n.setState({clicked:!1})},n.state={clicked:!1,index:n.props.index,value:n.props.object},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return A.props.complete?Object(p.jsx)("li",{className:"list","data-index":A.state.index,children:A.state.value}):A.state.clicked?Object(p.jsx)("li",{children:Object(p.jsx)("form",{onSubmit:A._handleSubmit,children:Object(p.jsx)("input",{className:"input",onChange:A._updateValue,onBlur:A._handleBlur,autoFocus:!0})})}):Object(p.jsx)("li",{className:"list","data-index":A.state.index,onDoubleClick:A._handleDoubleClick,children:A.state.value})}}]),t}(n.Component),K=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A)).updateArr=function(A){var e,t;n.setState({arr:(e=A.target.value,t=Object(O.a)(e,1),A.target.dataset.index=t[0],e)})},n._generateBullet=function(A){n.setState({arr:n.state.arr.concat(u.generateSentences(1))})},n._toggleClick=function(A){n.setState({clicked:!0})},n.state={arr:[u.generateSentences(1)],default:n.props.defaultEntry},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this,e=this.state.arr.map((function(e,t){return console.log(e),console.log(A.state.complete),Object(p.jsx)(h,{index:t,object:e,complete:A.props.complete})}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("ul",{children:e}),this.props.complete?null:Object(p.jsx)("button",{onClick:this._generateBullet,children:"Add"})]})}}]),t}(n.Component),y=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._handleDoubleClick=function(A){n.setState({clicked:!0})},n._handleClick=function(A){A.target.parentNode.remove()},n.state={clicked:!1,title:n.props.title,company:n.props.company,date:n.props.date},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this.props.complete;return Object(p.jsxs)("div",{className:"work-experience-component-container",children:[A?null:Object(p.jsx)("img",{src:v,className:"remove-button",onClick:this._handleClick,alt:"remove"}),Object(p.jsx)(b,{tag:"h4",info:this.state.title,complete:this.props.complete}),Object(p.jsx)(b,{tag:"h5",info:this.state.company,complete:this.props.complete}),Object(p.jsx)(b,{tag:"h6",info:this.state.date,complete:this.props.complete}),Object(p.jsx)(K,{defaultEntry:u.generateSentences(1),complete:this.props.complete})]})}}]),t}(n.Component),J=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._handleClick=function(A){A.target.parentNode.parentNode.remove()},n._handleDoubleClick=function(A){console.log(A)},n.state={clicked:!1},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsx)(y,{_handleClick:this._handleDoubleClick,title:"Junior Front End Developer",company:"linkedIn",date:"01/01/2019 - 04/20/2020",complete:this.props.complete})}}]),t}(n.Component),I=t.p+"static/media/addComponent.4f2c7a89.png",x=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){return Object(o.a)(this,t),e.call(this,A)}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsx)("button",{onClick:this.props.click,className:this.props.class,children:Object(p.jsx)("img",{src:I,className:"add-img"})})}}]),t}(n.Component),P=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A)).addComponent=function(A){n.setState({components:n.state.components.concat("sample component")})},n.state={components:["work experience"]},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return console.log(this.props.complete),Object(p.jsxs)("div",{className:"work-experience-container",children:[Object(p.jsxs)("h3",{className:"work-experience-header",children:["Work Experience",this.props.complete?null:Object(p.jsx)(x,{click:this.addComponent,class:"add-component-button"})]}),this.state.components.map((function(e){return Object(p.jsx)(J,{complete:A.props.complete})}))]})}}]),t}(n.Component),w=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){return Object(o.a)(this,t),e.call(this,A)}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsx)("img",{src:v,className:this.props.class,onClick:this.props.click,alt:this.props.alt})}}]),t}(n.Component),D=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._handleClick=function(A){A.target.parentNode.remove()},n._toggleClicked=function(A){n.setState({clicked:!0})},n._updateValue=function(A){n.setState({value:A.target.value})},n._handleSubmit=function(A){n.setState({clicked:!1})},n.state={value:"Javascript",clicked:!1},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"skill-tag",children:[this.props.complete?null:Object(p.jsx)(w,{click:this._handleClick,alt:"remove",class:"remove-skill-button"}),this.state.clicked?Object(p.jsx)("form",{onSubmit:this._handleSubmit,children:Object(p.jsx)("input",{className:"skill-input",onChange:this._updateValue,onBlur:this._handleSubmit,autoFocus:!0})}):Object(p.jsx)("p",{onDoubleClick:this._toggleClicked,children:this.state.value})]})}}]),t}(n.Component),N=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._addComponent=function(A){n.setState({components:n.state.components.concat("sample component")})},n.state={components:["skills"]},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return Object(p.jsxs)("div",{className:"skills-container",children:[Object(p.jsxs)("h3",{className:"skill-header",children:["Skills",this.props.complete?null:Object(p.jsx)(x,{click:this._addComponent,class:"add-component-button"})]}),Object(p.jsx)("div",{className:"skills-component-container",children:this.state.components.map((function(e){return Object(p.jsx)(D,{complete:A.props.complete})}))})]})}}]),t}(n.Component),S=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._remove=function(A){A.target.parentNode.remove()},n.state={subject:"Computer Science",school:"Portland Community College",dates:"01/02/2019-04/05/2020"},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"education-component",children:[this.props.complete?null:Object(p.jsx)(w,{click:this._remove,alt:"remove",class:"remove-button"}),Object(p.jsx)(b,{tag:"h4",info:this.state.subject,complete:this.props.complete}),Object(p.jsx)(b,{tag:"h5",info:this.state.school,complete:this.props.complete}),Object(p.jsx)(b,{tag:"h6",info:this.state.dates,complete:this.props.complete})]})}}]),t}(n.Component),E=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._addComponent=function(A){n.setState({components:n.state.components.concat("Education Component")})},n.state={components:["Education"]},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return Object(p.jsxs)("div",{className:"education-container",children:[Object(p.jsxs)("h3",{className:"education-header",children:["Education",this.props.complete?null:Object(p.jsx)(x,{click:this._addComponent,class:"add-component-button"})]}),Object(p.jsx)("div",{className:"education-component-container",children:this.state.components.map((function(e){return Object(p.jsx)(S,{complete:A.props.complete})}))})]})}}]),t}(n.Component),T=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._clicked=function(){n.props.clicked()},n}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return Object(p.jsx)("button",{className:"submit-cv",onClick:A._clicked,children:A.props.type})}}]),t}(n.Component),L=function(A){Object(s.a)(t,A);var e=Object(r.a)(t);function t(A){var n;return Object(o.a)(this,t),(n=e.call(this,A))._completeCV=function(){n.setState({complete:!0})},n._editCV=function(){n.setState({complete:!1})},n.state={complete:!1},n}return Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.complete),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C,{}),Object(p.jsxs)("div",{id:"cv-container",children:[Object(p.jsx)(d,{complete:this.state.complete}),Object(p.jsx)(k,{complete:this.state.complete}),Object(p.jsxs)("div",{className:"experience-container",children:[Object(p.jsx)("div",{className:"left-container",children:Object(p.jsx)(P,{complete:this.state.complete})}),Object(p.jsxs)("div",{className:"right-container",children:[Object(p.jsx)(N,{complete:this.state.complete}),Object(p.jsx)(E,{complete:this.state.complete})]})]}),this.state.complete?Object(p.jsx)(T,{clicked:this._editCV,type:"Edit"}):Object(p.jsx)(T,{clicked:this._completeCV,type:"Complete"})]})]})}}]),t}(n.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))},86:function(A,e,t){}},[[453,1,2]]]);
//# sourceMappingURL=main.f9ce5bf7.chunk.js.map