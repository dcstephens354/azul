(this.webpackJsonpazul=this.webpackJsonpazul||[]).push([[0],{14:function(e,t,l){},15:function(e,t,l){"use strict";l.r(t);var r=l(2),a=l(3),n=l(1),s=l(5),c=l(4),i=l(0),o=l.n(i),d=l(7),u=l.n(d);l(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=l(8),p=function(e){var t=e.color,l=e.position,r=e.active,a=e.cleared,n=e.onClick,s=e.tileID,c="tile "+l;return a?c+=" clearedTile":r&&(c+=" selectedTile"),c=c+" "+t+"Tile",o.a.createElement("div",{id:s,onClick:n,className:c,style:{backgroundColor:t}})},f={width:"200px",height:"200px",backgroundImage:"url("+l.n(h).a+")",backgroundSize:"cover",position:"relative",minWidth:"200px"};function m(e){var t=["topLeft","topRight","bottomLeft","bottomRight"],l=[],r=e.cleared,a=!1,n=e.id+".";if(e.selected.substr(0,1)==e.id)for(var s=e.selected.substr(2,1),c=0;c<4;c++)e.colorList[c]===e.colorList[s-1]?l.push(!0):l.push(!1);for(var i=0;i<r.length;i++)r[i].substr(0,1)==e.id&&(a=!0);return o.a.createElement("div",{style:f},[1,2,3,4].map((function(r){return o.a.createElement(p,{key:r,color:e.colorList[r-1],position:t[r-1],active:l[r-1],cleared:a,onClick:e.clickHandler,tileID:n+r})})))}function k(e){var t="beige",l="square",r="0",a=function(){};if(e.color){t=e.color;e.color;l=l+" "+e.color+"Tile"}return e.id&&(r=e.id,e.id.indexOf("WR")>-1&&(null==e.filledWallSpace?l+=" emptyWall":l+=" filledWall")),e.onClick&&(a=e.onClick),e.centerSelected&&(l+=" selectedTile"),o.a.createElement("div",{id:r,className:l,onClick:a,style:{backgroundColor:t}})}var T={display:"flex",justifyContent:"flex-end"},v=function(e){Object(s.a)(l,e);var t=Object(c.a)(l);function l(e){var a;return Object(r.a)(this,l),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(n.a)(a)),a}return Object(a.a)(l,[{key:"handleClick",value:function(){this.props.clickHandler(this.props.amount)}},{key:"render",value:function(){var e=[],t=!1;this.props.selected==this.props.amount&&(t=!0);for(var l="",r=0;r<this.props.amount;r++)l=null==this.props.contents[r]?"beige":this.props.contents[r],e.push(o.a.createElement(k,{key:r,highlight:t,color:l}));return o.a.createElement("div",{onClick:this.handleClick,style:T},e)}}]),l}(o.a.Component),b=function(e){Object(s.a)(l,e);var t=Object(c.a)(l);function l(){return Object(r.a)(this,l),t.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(k,{id:this.props.id+".1",filledWallSpace:this.props.contents[0],color:this.props.color1}),o.a.createElement(k,{id:this.props.id+".2",filledWallSpace:this.props.contents[1],color:this.props.color2}),o.a.createElement(k,{id:this.props.id+".3",filledWallSpace:this.props.contents[2],color:this.props.color3}),o.a.createElement(k,{id:this.props.id+".4",filledWallSpace:this.props.contents[3],color:this.props.color4}),o.a.createElement(k,{id:this.props.id+".5",filledWallSpace:this.props.contents[4],color:this.props.color5}))}}]),l}(o.a.Component),g=function(e){Object(s.a)(l,e);var t=Object(c.a)(l);function l(){return Object(r.a)(this,l),t.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){return o.a.createElement("div",{className:"Wall"},o.a.createElement(b,{id:"WR1",contents:this.props.contents[0],color1:"blue",color2:"orange",color3:"red",color4:"darkgrey",color5:"cyan"}),o.a.createElement(b,{id:"WR2",contents:this.props.contents[1],color1:"cyan",color2:"blue",color3:"orange",color4:"red",color5:"darkgrey"}),o.a.createElement(b,{id:"WR3",contents:this.props.contents[2],color1:"darkgrey",color2:"cyan",color3:"blue",color4:"orange",color5:"red"}),o.a.createElement(b,{id:"WR4",contents:this.props.contents[3],color1:"red",color2:"darkgrey",color3:"cyan",color4:"blue",color5:"orange"}),o.a.createElement(b,{id:"WR5",contents:this.props.contents[4],color1:"orange",color2:"red",color3:"darkgrey",color4:"cyan",color5:"blue"}))}}]),l}(o.a.Component),C=function(e){Object(s.a)(l,e);var t=Object(c.a)(l);function l(e){var a;return Object(r.a)(this,l),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(n.a)(a)),a}return Object(a.a)(l,[{key:"handleClick",value:function(){this.props.clickHandler()}},{key:"render",value:function(){for(var e=["darkred","darkred","darkred","darkred","darkred","darkred","darkred","darkred"],t=0;t<this.props.tileColors.length;t++)e[t]=this.props.tileColors[t];return o.a.createElement("div",{className:"droppedTilesRow",onClick:this.handleClick},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("span",null," -1 ",o.a.createElement(k,{color:e[0]})),o.a.createElement("span",null," -1 ",o.a.createElement(k,{color:e[1]})),o.a.createElement("span",null," -2 ",o.a.createElement(k,{color:e[2]})),o.a.createElement("span",null," -2 ",o.a.createElement(k,{color:e[3]})),o.a.createElement("span",null," -2 ",o.a.createElement(k,{color:e[4]})),o.a.createElement("span",null," -3 ",o.a.createElement(k,{color:e[5]})),o.a.createElement("span",null," -3 ",o.a.createElement(k,{color:e[6]}))))}}]),l}(o.a.Component),S=function(e){Object(s.a)(l,e);var t=Object(c.a)(l);function l(){return Object(r.a)(this,l),t.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){for(var e=["peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff","peachpuff"],t=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],l=0;l<this.props.tileColors.length;l++)e[l]=this.props.tileColors[l];if("c"===this.props.selected.substr(0,1))for(var r=e[Number(this.props.selected.substr(1,1))-1],a=0;a<this.props.tileColors.length;a++)this.props.tileColors[a]===r&&(t[a]=!0);return o.a.createElement("div",{className:"centerRow"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(k,{id:"c1",color:e[0],onClick:this.props.clickHandler,centerSelected:t[0]}),o.a.createElement(k,{id:"c2",color:e[1],onClick:this.props.clickHandler,centerSelected:t[1]}),o.a.createElement(k,{id:"c3",color:e[2],onClick:this.props.clickHandler,centerSelected:t[2]}),o.a.createElement(k,{id:"c4",color:e[3],onClick:this.props.clickHandler,centerSelected:t[3]}),o.a.createElement(k,{id:"c5",color:e[4],onClick:this.props.clickHandler,centerSelected:t[4]}),o.a.createElement(k,{id:"c6",color:e[5],onClick:this.props.clickHandler,centerSelected:t[5]}),o.a.createElement(k,{id:"c7",color:e[6],onClick:this.props.clickHandler,centerSelected:t[6]}),o.a.createElement(k,{id:"c8",color:e[7],onClick:this.props.clickHandler,centerSelected:t[7]}),o.a.createElement(k,{id:"c9",color:e[8],onClick:this.props.clickHandler,centerSelected:t[8]}),o.a.createElement(k,{id:"c10",color:e[9],onClick:this.props.clickHandler,centerSelected:t[9]}),o.a.createElement(k,{id:"c11",color:e[10],onClick:this.props.clickHandler,centerSelected:t[10]}),o.a.createElement(k,{id:"c12",color:e[11],onClick:this.props.clickHandler,centerSelected:t[11]}),o.a.createElement(k,{id:"c13",color:e[12],onClick:this.props.clickHandler,centerSelected:t[12]})))}}]),l}(o.a.Component);function y(e){return o.a.createElement("span",{className:"playerScore"},"Score: ",e.score)}var E=function(e){Object(s.a)(l,e);var t=Object(c.a)(l);function l(e){var a;Object(r.a)(this,l),(a=t.call(this,e)).handleTileSelect=function(e){console.log(e.target),a.waitingForAutoma||a.setState({selectedTile:e.target.id,selectedTileColor:e.target.style.backgroundColor})},a.handleRowSelect=a.handleRowSelect.bind(Object(n.a)(a)),a.handleDroppedRowSelect=a.handleDroppedRowSelect.bind(Object(n.a)(a)),a.state={selectedTile:"0",selectedTileColor:null,tileBag:[20,20,20,20,20],factoryTiles:[[],[],[],[],[]],clearedTiles:[],rowContents:[[null],[null,null],[null,null,null],[null,null,null,null],[null,null,null,null,null]],droppedTiles:[],centerTiles:[],filledFactories:[0,1,2,3,4],wallContents:[[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]],score:0};return a}return Object(a.a)(l,[{key:"handleRowSelect",value:function(e){var t=this;if(!this.waitingForAutoma&&"0"!==this.state.selectedTile&&(null==this.state.rowContents[e-1][0]||this.state.rowContents[e-1][0]===this.state.selectedTileColor)&&-1===this.state.wallContents[e-1].indexOf(this.state.selectedTileColor)){var l=0,r=this.state.filledFactories,a=[];if("c"!==this.state.selectedTile.substr(0,1)){var n=this.state.clearedTiles;n.push(this.state.selectedTile),r=r.filter((function(e){return e!==Number(t.state.selectedTile.substr(0,1))-1})),this.setState({clearedTiles:n,selectedTile:"0",filledFactories:r});for(var s=this.state.factoryTiles[this.state.selectedTile.substr(0,1)-1],c=[],i=0;i<s.length;i++)s[i]===this.state.selectedTileColor?l++:c.push(s[i]);var o=this.state.centerTiles;a=o.concat(c),this.setState({centerTiles:a})}else{this.setState({selectedTile:"0"});for(var d=this.state.selectedTileColor,u=this.state.centerTiles,h=0;h<u.length;h++)u[h]===d&&l++;a=u.filter((function(e){return e!==d})),this.setState({centerTiles:a})}for(var p=this.state.rowContents[e-1],f=[];l>0;){for(var m=0;m<p.length;m++){if(null==p[m]){p[m]=this.state.selectedTileColor;break}if(m===p.length-1){f.push(this.state.selectedTileColor);break}}l-=1}var k=this.state.droppedTiles.concat(f);this.setState({droppedTiles:k}),this.waitingForAutoma=!0,setTimeout((function(){t.automaTurn(r,a)}),1e3)}}},{key:"handleDroppedRowSelect",value:function(){var e=this;if(!this.waitingForAutoma&&"0"!==this.state.selectedTile){var t=[],l=this.state.filledFactories,r=0;if("c"!==this.state.selectedTile.substr(0,1)){l=l.filter((function(t){return t!==Number(e.state.selectedTile.substr(0,1))-1}));var a=this.state.clearedTiles;a.push(this.state.selectedTile),this.setState({clearedTiles:a,selectedTile:"0",filledFactories:l});for(var n=this.state.factoryTiles[this.state.selectedTile.substr(0,1)-1],s=[],c=0;c<n.length;c++)n[c]===this.state.selectedTileColor?r++:s.push(n[c]);var i=this.state.centerTiles;t=i.concat(s),this.setState({centerTiles:t})}else{this.setState({selectedTile:"0"});for(var o=this.state.selectedTileColor,d=this.state.centerTiles,u=0;u<d.length;u++)d[u]===o&&r++;t=d.filter((function(e){return e!==o})),this.setState({centerTiles:t})}for(var h=[],p=0;p<r;p++)h.push(this.state.selectedTileColor);var f=this.state.droppedTiles.concat(h);this.setState({droppedTiles:f}),this.waitingForAutoma=!0,setTimeout((function(){e.automaTurn(l,t)}),1e3)}}},{key:"automaTurn",value:function(e,t){for(var l,r=this,a=["blue","orange","red","darkgrey","cyan"],n=0,s=0,c="",i=[],o=[0,0,0,0,0],d=0,u=[],h=[],p=0;p<e.length;p++){i=this.state.factoryTiles[e[p]];for(var f=0;f<i.length;f++)o[a.indexOf(i[f])]++;(d=Math.max.apply(null,o))>n&&(n=d,s=p,c=o.indexOf(d)),o=[0,0,0,0,0]}for(var m=0;m<t.length;m++)o[a.indexOf(t[m])]++;if(l=Math.max.apply(null,o),n>1){var k,T=Number(e[s])+1,v=T+"."+(Number(this.state.factoryTiles[T-1].indexOf(a[c]))+1);(k=this.state.clearedTiles).push(v),h=e.filter((function(e){return e!==Number(v.substr(0,1))-1})),this.setState({clearedTiles:k,filledFactories:h});for(var b=this.state.factoryTiles[v.substr(0,1)-1],g=[],C=0;C<b.length;C++)b[C]!==a[c]&&g.push(b[C]);u=t.concat(g),this.setState({centerTiles:u})}else if(1===n&&l<2){var S=Number(e[0])+1,y=Math.floor(Math.random()*Math.floor(4))+1,E=S+"."+y,w=this.state.clearedTiles;w.push(E),h=e.filter((function(e){return e!==Number(E.substr(0,1))-1})),this.setState({clearedTiles:w,filledFactories:h});for(var O=this.state.factoryTiles[E.substr(0,1)-1],H=[],j=0;j<O.length;j++)j!==y-1&&H.push(O[j]);u=t.concat(H),this.setState({centerTiles:u})}else if(1===n&&1!==l||0===n&&l>0){c=o.indexOf(l);var R=a[c];h=e,u=t.filter((function(e){return e!==R})),this.setState({centerTiles:u})}if(0===u.length&&0===h.length){for(var N=this.state.rowContents,x=this.state.wallContents,W=0;W<N.length;W++)-1===N[W].indexOf(null)&&function(){var e=N[W][0],t=(a.indexOf(e)+W)%5;x[W][t]=e;var l=0,n=0;t-1>-1&&null!=x[W][t-1]&&(r.checkHorzontalScoring(t-1,-1,W),l=1),t+1<5&&null!=x[W][t+1]&&(r.checkHorzontalScoring(t+1,1,W),l=1),W-1>-1&&null!=x[W-1][t]&&(r.checkVerticalScoring(W-1,-1,t),n=1),W+1<5&&null!=x[W+1][t]&&(r.checkVerticalScoring(W+1,1,t),n=1),0===l&&0===n?r.setState((function(e){return{score:e.score+1}})):r.setState((function(e){return{score:e.score+l+n}}));for(var s=0;s<=W;s++)N[W][s]=null}();this.setState((function(e){var t=0;switch(e.droppedTiles.length){case 1:t=-1;break;case 2:t=-2;break;case 3:t=-4;break;case 4:t=-6;break;case 5:t=-8;break;case 6:t=-11;break;case 7:t=-14}return{score:e.score+t}})),this.setState({selectedTile:"0",selectedTileColor:null,clearedTiles:[],rowContents:N,droppedTiles:[],filledFactories:[0,1,2,3,4],wallContents:x},(function(){r.checkEndgame(r.state.score)}))}this.waitingForAutoma=!1}},{key:"checkEndgame",value:function(e){var t=this,l=this.state.tileBag;l[0]+l[1]+l[2]+l[3]+l[4]!==0?this.drawNewRoundTiles():(alert("Game over, you scored "+e+" points!"),this.setState({selectedTile:"0",selectedTileColor:null,tileBag:[20,20,20,20,20],factoryTiles:[[],[],[],[],[]],clearedTiles:[],rowContents:[[null],[null,null],[null,null,null],[null,null,null,null],[null,null,null,null,null]],droppedTiles:[],centerTiles:[],filledFactories:[0,1,2,3,4],wallContents:[[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]],score:0},(function(){t.drawNewRoundTiles()})))}},{key:"checkHorzontalScoring",value:function(e,t,l){e+t>-1&&e+t<5&&null!=this.state.wallContents[l][e+t]&&this.checkHorzontalScoring(e+t,t,l),this.setState((function(e){return{score:e.score+1}}))}},{key:"checkVerticalScoring",value:function(e,t,l){e+t>-1&&e+t<5&&null!=this.state.wallContents[e+t][l]&&this.checkVerticalScoring(e+t,t,l),this.setState((function(e){return{score:e.score+1}}))}},{key:"drawTile",value:function(){var e=["red","blue","darkgrey","orange","cyan"],t=function(e,t){return e+t},l=this.state.tileBag,r=l.reduce(t),a=Math.floor(Math.random()*Math.floor(r));return a<l[0]?(l[0]=l[0]-1,this.setState({tileBag:l}),e[0]):a<[l[0],l[1]].reduce(t)?(l[1]=l[1]-1,this.setState({tileBag:l}),e[1]):a<[l[0],l[1],l[2]].reduce(t)?(l[2]=l[2]-1,this.setState({tileBag:l}),e[2]):a<[l[0],l[1],l[2],l[3]].reduce(t)?(l[3]=l[3]-1,this.setState({tileBag:l}),e[3]):a<[l[0],l[1],l[2],l[3],l[4]].reduce(t)?(l[4]=l[4]-1,this.setState({tileBag:l}),e[4]):void 0}},{key:"drawNewRoundTiles",value:function(){for(var e=[[],[],[],[],[]],t=0;t<5;t++)for(var l=0;l<4;l++)e[t].push(this.drawTile());this.setState({factoryTiles:e})}},{key:"componentDidMount",value:function(){this.drawNewRoundTiles()}},{key:"render",value:function(){return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"factories"},o.a.createElement(m,{id:1,colorList:this.state.factoryTiles[0],clickHandler:this.handleTileSelect,selected:this.state.selectedTile,cleared:this.state.clearedTiles}),o.a.createElement(m,{id:2,colorList:this.state.factoryTiles[1],clickHandler:this.handleTileSelect,selected:this.state.selectedTile,cleared:this.state.clearedTiles}),o.a.createElement(m,{id:3,colorList:this.state.factoryTiles[2],clickHandler:this.handleTileSelect,selected:this.state.selectedTile,cleared:this.state.clearedTiles}),o.a.createElement(m,{id:4,colorList:this.state.factoryTiles[3],clickHandler:this.handleTileSelect,selected:this.state.selectedTile,cleared:this.state.clearedTiles}),o.a.createElement(m,{id:5,colorList:this.state.factoryTiles[4],clickHandler:this.handleTileSelect,selected:this.state.selectedTile,cleared:this.state.clearedTiles})),o.a.createElement(S,{selected:this.state.selectedTile,tileColors:this.state.centerTiles,clickHandler:this.handleTileSelect}),o.a.createElement(y,{score:this.state.score}),o.a.createElement("section",{className:"playerBoard"},o.a.createElement("div",{className:"playerLines"},o.a.createElement(v,{clickHandler:this.handleRowSelect,amount:1,contents:this.state.rowContents[0]}),o.a.createElement(v,{clickHandler:this.handleRowSelect,amount:2,contents:this.state.rowContents[1]}),o.a.createElement(v,{clickHandler:this.handleRowSelect,amount:3,contents:this.state.rowContents[2]}),o.a.createElement(v,{clickHandler:this.handleRowSelect,amount:4,contents:this.state.rowContents[3]}),o.a.createElement(v,{clickHandler:this.handleRowSelect,amount:5,contents:this.state.rowContents[4]})),o.a.createElement(g,{contents:this.state.wallContents}),o.a.createElement(C,{clickHandler:this.handleDroppedRowSelect,tileColors:this.state.droppedTiles})))}}]),l}(o.a.Component);u.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,l){e.exports=l.p+"static/media/Circle_Tan_Solid2.bd4e2b8b.png"},9:function(e,t,l){e.exports=l(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.44370938.chunk.js.map