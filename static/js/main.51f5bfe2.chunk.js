(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},30:function(e,t,n){e.exports={tasklistCustom:"tasklist_tasklistCustom__DTI8U"}},39:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(27),s=n.n(i);n(18);var c=function(e){var t=e.children;return r.a.createElement(u,null,r.a.createElement(l,null,t))},u=function(e){return r.a.createElement("div",Object.assign({className:"flex flex-column system-sans-serif"},e),e.children)},l=function(e){return r.a.createElement("div",Object.assign({className:"flex flex-column system-sans-serif"},e),e.children)},o=n(7),d=n(10);var m=function(e){var t=e.children,n=Object(d.a)(e,["children"]);return r.a.createElement(f,n,t)},f=function(e){return r.a.createElement("p",Object.assign({className:"f5 measure lh-copy"},e),e.children)},k=n(3),v=n(8),b=n(4),p=n.n(b);function h(){var e=Object(v.a)(["\n  mutation updateTask(\n    $where: TaskWhereUniqueInput!\n    $data: TaskUpdateInput!\n  ) {\n    updateTask(where: $where, data: $data) {\n      id\n      taskList {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n"]);return h=function(){return e},e}function w(){var e=Object(v.a)(["\n  mutation deleteTask($where: TaskWhereUniqueInput!) {\n    deleteTask(where: $where) {\n      id\n      __typename\n    }\n    __typename\n  }\n"]);return w=function(){return e},e}function E(){var e=Object(v.a)(["\n  mutation addTask($data: TaskCreateInput!) {\n    createTask(data: $data) {\n      id\n      text\n      __typename\n      taskList {\n        id\n        __typename\n      }\n    }\n    __typename\n  }\n"]);return E=function(){return e},e}var y=p()(E()),j=p()(w()),O=p()(h());function _(){var e=Object(v.a)(["\n  {\n    taskLists {\n      id\n      title\n      headerColor\n      __typename\n      tasks {\n        taskList {\n          id\n          title\n          __typename\n        }\n        id\n        text\n        __typename\n      }\n    }\n    __typename\n  }\n"]);return _=function(){return e},e}var g=p()(_()),L=function(e){return r.a.createElement("button",Object.assign({className:"input-reset w-100 dim pa2 mb2 tracked"},e),e.children)},T=function(e){return r.a.createElement("button",Object.assign({className:"input-reset ba link dim ph2 pv1 dib f6 tracked"},e),e.children)};var x=function(e){var t=e.children,n=e.id,a=e.moveLeft,i=e.moveRight,s=Object(k.b)(j);return r.a.createElement(C,null,r.a.createElement(N,null,r.a.createElement(m,null,t)),r.a.createElement(N,null,a&&r.a.createElement(T,{onClick:function(){return a(n)}},"\u2190"),r.a.createElement(T,{onClick:function(){s({variables:{where:{id:n}},update:function(e,t){var n=t.data.deleteTask,a=e.readQuery({query:g}),r=a.taskLists.map(function(e){return Object(o.a)({},e,{tasks:e.tasks.filter(function(e){return e.id!==n.id})})});e.writeData({data:Object.assign({},a,{taskLists:r}),query:g})}})}},"delete"),i&&r.a.createElement(T,{onClick:function(){return i(n)}},"\u2192")))},C=function(e){return r.a.createElement("div",Object.assign({className:"flex flex-column  mb3 ba b--light-silver br2"},e),e.children)},N=function(e){return r.a.createElement("div",Object.assign({className:"flex justify-between mh2 pa2"},e),e.children)},$=n(30),q=n.n($);function I(e){var t=e.tasks,n=e.title,a=e.moveLeft,i=e.moveRight,s=Object(d.a)(e,["tasks","title","moveLeft","moveRight"]),c=Object(k.b)(y);return r.a.createElement(D,null,r.a.createElement(U,s,n),r.a.createElement(L,{onClick:function(){var e=window.prompt("Add a new task");if(!e)return null;c({variables:{data:{taskList:{connect:{id:s.id}},text:e}},update:function(e,t){var n=t.data.createTask,a=e.readQuery({query:g}),r=a.taskLists.map(function(e){return e.id===s.id?Object(o.a)({},e,{tasks:e.tasks.concat(n)}):e});e.writeData({data:Object.assign({},a,{taskLists:r}),query:g})}})}},"Add Task"),t.map(function(e){return r.a.createElement(x,{key:e.id,id:e.id,owner:n,moveLeft:a,moveRight:i},e.text)}))}I.defaultProps={headerColor:"#333"};var R=I,D=function(e){return r.a.createElement("div",Object.assign({className:q.a.tasklistCustom},e),e.children)},U=function(e){var t=e.children,n=e.headerColor,a=Object(d.a)(e,["children","headerColor"]);return r.a.createElement("div",Object.assign({className:"pa2 mb2 tc white",style:{backgroundColor:n}},a),t)};var W=function(){var e=Object(k.b)(O),t=Object(k.c)(g),n=t.data,a=t.error;if(a)return"Error! ".concat(a.message);var i=n.taskLists,s=function(t){var n=t.newList;return function(t){e({update:function(e,a){var r=a.data.updateTask,i=e.readQuery({query:g}),s=i.taskLists.map(function(e){return Object(o.a)({},e,{tasks:e.tasks.filter(function(e){return e.id!==t})})}),c=Object.assign({},i,{taskLists:s.map(function(e){return e.id===n&&e.tasks.push(r),e})});e.writeData({data:{res:c},query:g})},variables:{data:{taskList:{connect:{id:n}}},where:{id:t}}})}};return r.a.createElement("div",{className:"flex w-100"},i.map(function(e,t){var n=0===t,a=t===i.length-1;return r.a.createElement(R,Object.assign({key:e.id,title:e.title},e,{moveLeft:n?null:s({newList:i[t-1].id}),moveRight:a?null:s({newList:i[t+1].id})}))}))},Q=n(37),A=n(67),B=new Q.a({cache:new A.a({dataIdFromObject:function(e){switch(e.__typename){case"task":return e.id;default:return Object(A.b)(e)}}}),uri:"https://us1.prisma.sh/michael-edelman-ba8919/kanban-demo/dev"});var J=function(){return r.a.createElement(k.a,{client:B},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(c,null,r.a.createElement(W,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.51f5bfe2.chunk.js.map