(window.webpackJsonpreact_clicky_assignment=window.webpackJsonpreact_clicky_assignment||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),s=a(2),n=a.n(s),i=a(3),o=a(4),u=a(6),l=a(5),m=a(7);var d=function(e){return r.a.createElement("div",{className:"row"},e.pictures.map(function(t){return r.a.createElement("div",{className:"col-md-2"},r.a.createElement("img",{onClick:e.clickedImage,alt:"pokemonPic",src:t.source,className:"img-fluid",imageid:t.id,style:{width:"100%",height:"auto"}}))}))},p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={pictures:[],selectedPictures:[],score:0,topScore:0},a.clickedImage=function(e){var t=e.target.attributes.getNamedItem("imageid").value;if(a.state.selectedPictures.includes(t))a.setState({pictures:a.shufflePictures(a.state.pictures),selectedPictures:[],score:0});else{var c=a.state.selectedPictures.concat([t]),r=a.state.score+1;a.setState({pictures:a.shufflePictures(a.state.pictures),selectedPictures:c,score:r,topScore:Math.max(a.state.topScore,r)})}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=1;t<=9;t++)e.push({id:t,source:"/images/"+t+".jpg"});this.setState({pictures:e})}},{key:"shufflePictures",value:function(e){var t,a,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),a=e[c],e[c]=e[t],e[t]=a;return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("p",{className:"navbar-text"},"Score: ",this.state.score," | Top Score: ",this.state.topScore)),r.a.createElement(d,{pictures:this.state.pictures,clickedImage:this.clickedImage}))}}]),t}(c.Component);var f=function(){return r.a.createElement(p,null)};n.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.f990f5e6.chunk.js.map