(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a64867f"],{2502:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-page"},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("my-bread",[t._v("评论管理")])],1),a("el-table",{attrs:{data:t.articles}},[a("el-table-column",{attrs:{label:"文章标题",width:"500px",prop:"title"}}),a("el-table-column",{attrs:{label:"总评论数",prop:"total_comment_count"}}),a("el-table-column",{attrs:{label:"粉丝评论数",prop:"fans_comment_count"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.comment_status?"已打开":"已关闭")+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.comment_status?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.toggleStatus(e.row)}}},[t._v("关闭评论")]):a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){return t.toggleStatus(e.row)}}},[t._v("打开评论")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.reqParams.per_page,"current-page":t.reqParams.page},on:{"current-change":t.changePager}})],1)],1)},r=[],s=(a("d3b7"),a("25f0"),a("96cf"),a("1da1")),c={name:"CommentPage",data:function(){return{articles:[],total:0,reqParams:{page:1,per_page:20,response_type:"comment"}}},created:function(){this.getArticles()},methods:{getArticles:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/mp/v1_0/articles",{params:t.reqParams});case 2:a=e.sent,n=a.data.data,t.articles=n.results,t.total=n.total_count;case 6:case"end":return e.stop()}}),e)})))()},changePager:function(t){this.reqParams.page=t,this.getArticles()},toggleStatus:function(t){var e=this,a="此操作会关闭该文章的评论功能，关闭后用户将无法对该文章进行评论，您确认吗？",n="此操作会开启该文章的评论功能，您确认吗？";this.$confirm(t.comment_status?a:n,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http({url:"/mp/v1_0/comments/status",method:"put",params:{article_id:t.id.toString()},data:{allow_comment:!t.comment_status}});case 3:n=a.sent,r=n.data.data,e.$message.success(r.allow_comment?"打开评论成功":"关闭评论成功"),t.comment_status=r.allow_comment,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),e.$message.success("操作失败");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))).catch((function(){}))}}},o=c,l=a("2877"),u=Object(l["a"])(o,n,r,!1,null,"3797d0c9",null);e["default"]=u.exports},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),r=a("825a"),s=a("d039"),c=a("ad6d"),o="toString",l=RegExp.prototype,u=l[o],i=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),m=u.name!=o;(i||m)&&n(RegExp.prototype,o,(function(){var t=r(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in l)?c.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}}}]);
//# sourceMappingURL=chunk-6a64867f.036d7e68.js.map