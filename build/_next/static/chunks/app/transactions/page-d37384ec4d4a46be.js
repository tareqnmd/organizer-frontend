(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{6902:function(t){var e,n,r,i,a,s,o,u,c,l,d,h,f,m,p,$,y,v,x,M,D;t.exports=(e="millisecond",n="second",r="minute",i="hour",a="week",s="month",o="quarter",u="year",c="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},$=function(t){return t instanceof M},y=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var a=e.toLowerCase();p[a]&&(i=a),n&&(p[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var o=e.name;p[o]=e,i=o}return!r&&i&&(m=i),i||!r&&m},v=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},(x={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,o=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:u,w:a,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=y,x.i=$,x.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},D=(M=function(){function t(t){this.$L=y(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return x},f.isValid=function(){return this.$d.toString()!==l},f.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return v(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<v(t)},f.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var o=this,l=!!x.u(e)||e,d=x.p(t),h=function(t,e){var n=x.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return l?n:n.endOf("day")},f=function(t,e){return x.w(o.toDate()[t].apply(o.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},m=this.$W,p=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return l?h(1,0):h(31,11);case s:return l?h(1,p):h(0,p+1);case a:var v=this.$locale().weekStart||0,M=(m<v?m+7:m)-v;return h(l?$-M:$+(6-M),p);case"day":case c:return f(y+"Hours",0);case i:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,a){var o,l=x.p(t),d="set"+(this.$u?"UTC":""),h=((o={}).day=d+"Date",o[c]=d+"Date",o[s]=d+"Month",o[u]=d+"FullYear",o[i]=d+"Hours",o[r]=d+"Minutes",o[n]=d+"Seconds",o[e]=d+"Milliseconds",o)[l],f="day"===l?this.$D+(a-this.$W):a;if(l===s||l===u){var m=this.clone().set(c,1);m.$d[h](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[x.p(t)]()},f.add=function(t,e){var o,c=this;t=Number(t);var l=x.p(e),d=function(e){var n=v(c);return x.w(n.date(n.date()+Math.round(e*t)),c)};if(l===s)return this.set(s,this.$M+t);if(l===u)return this.set(u,this.$y+t);if("day"===l)return d(1);if(l===a)return d(7);var h=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[l]||1,f=this.$d.getTime()+t*h;return x.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},f=function(t){return x.s(a%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:x.s(this.$y,4,"0"),M:o+1,MM:x.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:x.s(a,2,"0"),h:f(1),hh:f(2),a:m(a,s,!0),A:m(a,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(h,function(t,e){return e||p[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var l,d=x.p(e),h=v(t),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,p=x.m(this,h);return p=((l={})[u]=p/12,l[s]=p,l[o]=p/3,l[a]=(m-f)/6048e5,l.day=(m-f)/864e5,l[i]=m/36e5,l[r]=m/6e4,l[n]=m/1e3,l)[d]||m,c?p:x.a(p)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return x.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,v.prototype=D,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",s],["$y",u],["$D",c]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,M,v),t.$i=!0),v},v.locale=y,v.isDayjs=$,v.unix=function(t){return v(1e3*t)},v.en=p[m],v.Ls=p,v.p={},v)},2968:function(t,e,n){Promise.resolve().then(n.bind(n,1934))},1934:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(9268),i=n(4744),a=n(2462),s=n(9848),o=n(9785),u=n.n(o),c=()=>{var t;let{transactions:e,filterTime:n,filterType:o}=(0,a.v9)(i.CF);return(0,r.jsx)(r.Fragment,{children:(null==e?void 0:e.length)&&(null===s.BF||void 0===s.BF?void 0:s.BF.length)?(0,r.jsxs)("table",{className:"".concat(u()["transaction-table"]),children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:null===s.BF||void 0===s.BF?void 0:s.BF.map(t=>(0,r.jsx)("th",{children:t.title},t.dataIndex))})}),(0,r.jsx)("tbody",{children:null===(t=(0,s.Mr)(e,n,o))||void 0===t?void 0:t.map(t=>(0,r.jsx)("tr",{children:null===s.BF||void 0===s.BF?void 0:s.BF.map(e=>(0,r.jsx)("td",{children:(0,s.eR)(t,e)},e.dataIndex))},t._id))})]}):null})},l=n(6006),d=n(5901),h=n.n(d);let f=(t,e)=>t===e,m=(t,e)=>"".concat(h()["transaction-filter-btn"]," ").concat(f(t,e)?h().active:"");var p=t=>{let{filterTime:e,filterType:n}=t,s=(0,a.I0)(),o=t=>{s((0,i.jx)(t))},u=t=>{s((0,i.hP)(t))};return(0,r.jsxs)("div",{className:h()["transaction-filter"],children:[(0,r.jsxs)("div",{className:h()["transaction-filter-btns"],children:[(0,r.jsx)("button",{onClick:()=>u("all"),className:m(e,"all"),children:"All"}),(0,r.jsx)("button",{onClick:()=>u("month"),className:m(e,"month"),children:"Current Month"}),(0,r.jsx)("button",{onClick:()=>u("week"),className:m(e,"week"),children:"Current Week"})]}),(0,r.jsxs)("div",{className:h()["transaction-filter-btns"],children:[(0,r.jsx)("button",{onClick:()=>o("all"),className:m(n,"all"),children:"All"}),(0,r.jsx)("button",{onClick:()=>o("income"),className:m(n,"income"),children:"Income"}),(0,r.jsx)("button",{onClick:()=>o("expense"),className:m(n,"expense"),children:"Expense"})]})]})},$=t=>{let{transactions:e}=t;return(0,r.jsxs)("div",{className:h()["transaction-cards"],children:[(0,r.jsx)("div",{className:h()["transaction-card"],children:(0,s.bE)(e)}),(0,r.jsx)("div",{className:h()["transaction-card"],children:(0,s.QT)(e)})]})},y=t=>{let{transactions:e}=t;return(0,r.jsx)("div",{className:h()["transaction-card"],children:(0,s.hj)(e)})},v=()=>{let{transactions:t,filterType:e,filterTime:n}=(0,a.v9)(i.CF),o=(0,l.useMemo)(()=>(0,s.Mr)(t,n,e),[t,n,e]);return(0,r.jsxs)("div",{className:"grid grid-rows-2 grid-cols-12 gap-4 mb-4",children:[(0,r.jsx)("div",{className:"row-span-2 col-span-3",children:(0,r.jsx)(y,{transactions:o})}),(0,r.jsx)("div",{className:"col-span-9",children:(0,r.jsx)(p,{filterType:e,filterTime:n})}),(0,r.jsx)("div",{className:"row-span-1 col-span-9",children:(0,r.jsx)($,{transactions:o})})]})},x=t=>{let{transactions:e}=t,n=(0,a.I0)();return n((0,i.Lf)(e)),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(c,{})]})}},4744:function(t,e,n){"use strict";n.d(e,{CF:function(){return u},Lf:function(){return a},hP:function(){return s},jx:function(){return o}});var r=n(6393);let i=(0,r.oM)({name:"transactions",initialState:{transactions:[],filterTime:"all",filterType:"all"},reducers:{setTransactions:(t,e)=>{t.transactions=e.payload},setFilterType:(t,e)=>{t.filterType=e.payload},setFilterTime:(t,e)=>{t.filterTime=e.payload}}}),{setTransactions:a,setFilterTime:s,setFilterType:o}=i.actions,u=t=>t.transactions;e.ZP=i},9848:function(t,e,n){"use strict";n.d(e,{BF:function(){return m},Mr:function(){return f},QT:function(){return l},bE:function(){return c},eR:function(){return a},hj:function(){return u},q_:function(){return p}});var r=n(6902),i=n.n(r);let a=(t,e)=>{let n=e.dataIndex,r=t[n],i="number"===e.type?o(r):"date"===e.type?s(r):r;return i},s=t=>i()(new Date(t)).format("DD-MM-YYYY"),o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"BDT",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US",r=t?Number(t.toFixed(2)):0,i=Intl.NumberFormat(n).format(r);return"".concat(i," ").concat(e)},u=t=>{let e=null==t?void 0:t.reduce((t,e)=>t+("Income"===e.type?e.amount:"Expense"===e.type?-e.amount:0),0);return o(e)},c=t=>{let e=null==t?void 0:t.reduce((t,e)=>t+("Income"===e.type?e.amount:0),0);return o(e)},l=t=>{let e=null==t?void 0:t.reduce((t,e)=>t+("Expense"===e.type?e.amount:0),0);return o(e)},d=t=>new Date(t.date).getMonth()===new Date().getMonth(),h=t=>{let e=new Date,n=new Date(t),r=new Date(e.getFullYear(),0,1),i=new Date(n.getFullYear(),0,1),a=Math.ceil((new Date().getDay()+1+Math.floor((e-r)/864e5))/7),s=Math.ceil((new Date().getDay()+1+Math.floor((n-i)/864e5))/7);return a===s},f=(t,e,n)=>{let r="all"===n?t:null==t?void 0:t.filter(t=>t.type===("income"===n?"Income":"Expense")),i="all"===e?r:null==r?void 0:r.filter(t=>"month"===e?d(t):h(t.date));return i},m=[{title:"Date",dataIndex:"date",type:"date"},{title:"Type",dataIndex:"type",type:"text"},{title:"Amount",dataIndex:"amount",type:"number"},{title:"Description",dataIndex:"description",type:"text"}],p=[{name:"typeId",label:"Transaction Type",type:"select",required:!0},{name:"date",label:"Transaction Date",type:"date",required:!0},{name:"amount",label:"Transaction Amount",type:"number",required:!0,placeholder:"Amount"},{name:"description",label:"Transaction Description",type:"textarea",rows:4,placeholder:"Description",required:!0}]},9785:function(t){t.exports={"transaction-table":"TransactionTable_transaction-table__cwxlF"}},5901:function(t){t.exports={"transaction-filter":"TransactionFilter_transaction-filter__7eVJe","transaction-filter-btns":"TransactionFilter_transaction-filter-btns__M8jyQ","transaction-filter-btn":"TransactionFilter_transaction-filter-btn__VfhU5",active:"TransactionFilter_active__KA4dD","transaction-cards":"TransactionFilter_transaction-cards__MF13p","transaction-card":"TransactionFilter_transaction-card__7HNfV"}}},function(t){t.O(0,[216,667,488,744],function(){return t(t.s=2968)}),_N_E=t.O()}]);