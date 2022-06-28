(this["webpackJsonp12-react-redux"]=this["webpackJsonp12-react-redux"]||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(17),o=n.n(c),a=(n(31),n(12)),r=n(13),l=n(14),j=n(15),u=n(10),d="f6771740";var b=n(6),O=(n(35),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e,t=this;return Object(O.jsxs)("div",{className:"favs-container",children:[Object(O.jsx)("h2",{children:"Pel\xedculas Favoritas"}),Object(O.jsx)("ul",{children:null===(e=this.props.movies)||void 0===e?void 0:e.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)(b.b,{to:"/movie/".concat(e.imdbID),children:[Object(O.jsx)("li",{children:e.Title}),Object(O.jsx)("img",{src:"".concat(e.Poster),alt:"Poster"}),Object(O.jsx)("li",{children:e.Poster})]}),Object(O.jsx)("button",{className:"boton",onClick:function(){return t.props.removeMovieFavorite(e.imdbID)},children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Eliminar"})})})]},e.imdbID)}))})]})}}]),n}(i.Component),m=Object(u.b)((function(e){return{movies:e.moviesFavourites}}),{removeMovieFavorite:function(e){return{type:"REMOVE_MOVIE_FAVORITE",payload:e}}})(h),v=(n(43),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={title:""},i}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getMovies(this.state.title)}},{key:"render",value:function(){var e,t=this,n=this.state.title;return Object(O.jsxs)("div",{className:"form",children:[Object(O.jsx)("h2",{children:"Encuentra tus pel\xedculas favoritas"}),Object(O.jsxs)("form",{className:"form-container",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"label",htmlFor:"title"}),Object(O.jsx)("input",{placeholder:"Buscar pel\xedcula...",type:"text",id:"title",autoComplete:"off",value:n,onChange:function(e){return t.handleChange(e)}})]}),Object(O.jsx)("button",{type:"submit",className:"boton",children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Buscar"})})})]}),Object(O.jsx)("ul",{children:null===(e=this.props.movies)||void 0===e?void 0:e.map((function(e){return Object(O.jsxs)("div",{className:"portada",children:[Object(O.jsxs)(b.b,{to:"/movie/".concat(e.imdbID),children:[Object(O.jsx)("li",{className:"bottomLeft",children:e.Title}),Object(O.jsx)("img",{className:"img",src:"".concat(e.Poster),alt:"Poster"})]}),Object(O.jsx)("button",{className:"boton fav",onClick:function(){return t.props.addMovieFavorite({Title:e.Title,imdbID:e.imdbID})},children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Fav"})})})]},e.imdbID)}))})]})}}]),n}(i.Component));var p=Object(u.b)((function(e){return{movies:e.moviesLoaded}}),(function(e){return{addMovieFavorite:function(t){return e({type:"ADD_MOVIE_FAVORITE",payload:t})},getMovies:function(t){return e((n=t,function(e){fetch("https://www.omdbapi.com/?apikey=".concat(d,"&s=")+n).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIES",payload:t})}))}));var n}}}))(v),x=n(23);n.p,n(44);function f(){var e=Object(i.useState)({home:!1,favourites:!1,movies:!1,profile:!1,help:!1,settings:!1,password:!1,signout:!1}),t=Object(x.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(!1),o=Object(x.a)(c,2),a=o[0],r=o[1],l=function(){r(!0)},j=function(){r(!1)};return Object(O.jsx)("nav",{className:"navigation",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{id:"home",className:a?null:n.home?"active":null,onClick:function(){return s({home:!n.home})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)(b.c,{exact:!0,to:"/movies",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"home-outline"})}),Object(O.jsx)("span",{className:"title",children:"Inicio"})]})}),Object(O.jsx)("li",{id:"favorites",className:a?null:n.favourites?"active":null,onClick:function(){return s({favourites:!n.favourites})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)(b.c,{to:"/favs",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"star-outline"})}),Object(O.jsx)("span",{className:"title",children:"Favoritas"})]})}),Object(O.jsx)("li",{id:"movies",className:a?null:n.movies?"active":null,onClick:function(){return s({movies:!n.movies})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)(b.c,{to:"/movie/:id",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"film-outline"})}),Object(O.jsx)("span",{className:"title",children:"Peliculas"})]})}),Object(O.jsx)("li",{id:"profile",className:a?null:n.profile?"active":null,onClick:function(){return s({profile:!n.profile})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"person-outline"})}),Object(O.jsx)("span",{className:"title",children:"Perfil"})]})}),Object(O.jsx)("li",{id:"help",className:a?null:n.help?"active":null,onClick:function(){return s({help:!n.help})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"help-outline"})}),Object(O.jsx)("span",{className:"title",children:"Ayuda"})]})}),Object(O.jsx)("li",{id:"settings",className:a?null:n.settings?"active":null,onClick:function(){return s({settings:!n.settings})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"settings-outline"})}),Object(O.jsx)("span",{className:"title",children:"Configuraci\xf3n"})]})}),Object(O.jsx)("li",{id:"password",className:a?null:n.password?"active":null,onClick:function(){return s({password:!n.password})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"lock-closed-outline"})}),Object(O.jsx)("span",{className:"title",children:"Contrase\xf1a"})]})}),Object(O.jsx)("li",{id:"signout",className:a?null:n.signout?"active":null,onClick:function(){return s({signout:!n.signout})},onMouseOver:l,onMouseOut:j,children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("ion-icon",{name:"log-out-outline"})}),Object(O.jsx)("span",{className:"title",children:"Cerrar Sesi\xf3n"})]})})]})})}var N=n(3),g=(n(45),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getMovieDetail(this.props.match.params.id)}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h3",{className:"title",children:this.props.movie.Title}),Object(O.jsxs)("div",{className:"caja",children:[Object(O.jsx)("img",{className:"img",src:"".concat(this.props.movie.Poster),alt:"Poster"}),Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("p",{className:"description",children:this.props.movie.Plot}),Object(O.jsxs)("p",{children:["Genre: ",this.props.movie.Genre]}),Object(O.jsxs)("p",{children:["imdbRating: ",this.props.movie.imdbRating]}),Object(O.jsxs)("p",{children:["Released: ",this.props.movie.Released]})]})]}),Object(O.jsx)("button",{className:"boton",children:Object(O.jsx)("div",{children:Object(O.jsx)(b.b,{to:"/movies",children:Object(O.jsx)("span",{children:"Atras"})})})})]})}}]),n}(s.a.Component)),M=Object(u.b)((function(e){return{movie:e.movieDetail}}),{getMovieDetail:function(e){return function(t){fetch("https://www.omdbapi.com/?apikey=".concat(d,"&i=")+e).then((function(e){return e.json()})).then((function(e){t({type:"GET_MOVIE_DETAIL",payload:e})}))}}})(g);var E=function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(N.a,{exact:!0,path:"/movies",component:p}),Object(O.jsx)(N.a,{path:"/favs",component:m}),Object(O.jsx)(N.a,{path:"/movie/:id",component:M})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(19),I=n(9),_={moviesFavourites:[],moviesLoaded:[],movieDetail:{}};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"ADD_MOVIE_FAVORITE"===t.type?Object(I.a)(Object(I.a)({},e),{},{moviesFavourites:e.moviesFavourites.concat(t.payload)}):"GET_MOVIES"===t.type?Object(I.a)(Object(I.a)({},e),{},{moviesLoaded:t.payload.Search}):"REMOVE_MOVIE_FAVORITE"===t.type?Object(I.a)(Object(I.a)({},e),{},{moviesFavourites:e.moviesFavourites.filter((function(e){return e.imdbID!==t.payload}))}):"GET_MOVIE_DETAIL"===t.type?Object(I.a)(Object(I.a)({},e),{},{movieDetail:t.payload}):e},k=n(26),w=Object(y.c)(D,Object(y.b)(Object(y.a)(k.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(Object(O.jsx)(u.a,{store:w,children:Object(O.jsx)(b.a,{children:Object(O.jsx)(E,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.39291682.chunk.js.map