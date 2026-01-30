goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33927 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33927(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33931 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33931(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32819 = coll;
var G__32820 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32819,G__32820) : shadow.dom.lazy_native_coll_seq.call(null, G__32819,G__32820));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32833 = arguments.length;
switch (G__32833) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32839 = arguments.length;
switch (G__32839) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32842 = arguments.length;
switch (G__32842) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32845 = arguments.length;
switch (G__32845) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32851 = arguments.length;
switch (G__32851) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32874 = arguments.length;
switch (G__32874) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e32887){if((e32887 instanceof Object)){
var e = e32887;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32887;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32938 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32939 = null;
var count__32940 = (0);
var i__32941 = (0);
while(true){
if((i__32941 < count__32940)){
var el = chunk__32939.cljs$core$IIndexed$_nth$arity$2(null, i__32941);
var handler_33971__$1 = ((function (seq__32938,chunk__32939,count__32940,i__32941,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__32938,chunk__32939,count__32940,i__32941,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33971__$1);


var G__33974 = seq__32938;
var G__33975 = chunk__32939;
var G__33976 = count__32940;
var G__33977 = (i__32941 + (1));
seq__32938 = G__33974;
chunk__32939 = G__33975;
count__32940 = G__33976;
i__32941 = G__33977;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32938);
if(temp__5823__auto__){
var seq__32938__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32938__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32938__$1);
var G__33978 = cljs.core.chunk_rest(seq__32938__$1);
var G__33979 = c__5525__auto__;
var G__33980 = cljs.core.count(c__5525__auto__);
var G__33981 = (0);
seq__32938 = G__33978;
chunk__32939 = G__33979;
count__32940 = G__33980;
i__32941 = G__33981;
continue;
} else {
var el = cljs.core.first(seq__32938__$1);
var handler_33982__$1 = ((function (seq__32938,chunk__32939,count__32940,i__32941,el,seq__32938__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__32938,chunk__32939,count__32940,i__32941,el,seq__32938__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33982__$1);


var G__33983 = cljs.core.next(seq__32938__$1);
var G__33984 = null;
var G__33985 = (0);
var G__33986 = (0);
seq__32938 = G__33983;
chunk__32939 = G__33984;
count__32940 = G__33985;
i__32941 = G__33986;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32968 = arguments.length;
switch (G__32968) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32996 = cljs.core.seq(events);
var chunk__32997 = null;
var count__32998 = (0);
var i__32999 = (0);
while(true){
if((i__32999 < count__32998)){
var vec__33023 = chunk__32997.cljs$core$IIndexed$_nth$arity$2(null, i__32999);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33991 = seq__32996;
var G__33992 = chunk__32997;
var G__33993 = count__32998;
var G__33994 = (i__32999 + (1));
seq__32996 = G__33991;
chunk__32997 = G__33992;
count__32998 = G__33993;
i__32999 = G__33994;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32996);
if(temp__5823__auto__){
var seq__32996__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32996__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32996__$1);
var G__33996 = cljs.core.chunk_rest(seq__32996__$1);
var G__33997 = c__5525__auto__;
var G__33998 = cljs.core.count(c__5525__auto__);
var G__33999 = (0);
seq__32996 = G__33996;
chunk__32997 = G__33997;
count__32998 = G__33998;
i__32999 = G__33999;
continue;
} else {
var vec__33026 = cljs.core.first(seq__32996__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34001 = cljs.core.next(seq__32996__$1);
var G__34002 = null;
var G__34003 = (0);
var G__34004 = (0);
seq__32996 = G__34001;
chunk__32997 = G__34002;
count__32998 = G__34003;
i__32999 = G__34004;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33046 = cljs.core.seq(styles);
var chunk__33047 = null;
var count__33048 = (0);
var i__33049 = (0);
while(true){
if((i__33049 < count__33048)){
var vec__33115 = chunk__33047.cljs$core$IIndexed$_nth$arity$2(null, i__33049);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34008 = seq__33046;
var G__34009 = chunk__33047;
var G__34010 = count__33048;
var G__34011 = (i__33049 + (1));
seq__33046 = G__34008;
chunk__33047 = G__34009;
count__33048 = G__34010;
i__33049 = G__34011;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33046);
if(temp__5823__auto__){
var seq__33046__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33046__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33046__$1);
var G__34012 = cljs.core.chunk_rest(seq__33046__$1);
var G__34013 = c__5525__auto__;
var G__34014 = cljs.core.count(c__5525__auto__);
var G__34015 = (0);
seq__33046 = G__34012;
chunk__33047 = G__34013;
count__33048 = G__34014;
i__33049 = G__34015;
continue;
} else {
var vec__33139 = cljs.core.first(seq__33046__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34016 = cljs.core.next(seq__33046__$1);
var G__34017 = null;
var G__34018 = (0);
var G__34019 = (0);
seq__33046 = G__34016;
chunk__33047 = G__34017;
count__33048 = G__34018;
i__33049 = G__34019;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33155_34021 = key;
var G__33155_34022__$1 = (((G__33155_34021 instanceof cljs.core.Keyword))?G__33155_34021.fqn:null);
switch (G__33155_34022__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34033 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_34033,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_34033,"aria-");
}
})())){
el.setAttribute(ks_34033,value);
} else {
(el[ks_34033] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33189){
var map__33191 = p__33189;
var map__33191__$1 = cljs.core.__destructure_map(map__33191);
var props = map__33191__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33191__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33200 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33200,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33200,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33200,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33207 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33207,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33207;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33209 = arguments.length;
switch (G__33209) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33216){
var vec__33217 = p__33216;
var seq__33218 = cljs.core.seq(vec__33217);
var first__33219 = cljs.core.first(seq__33218);
var seq__33218__$1 = cljs.core.next(seq__33218);
var nn = first__33219;
var first__33219__$1 = cljs.core.first(seq__33218__$1);
var seq__33218__$2 = cljs.core.next(seq__33218__$1);
var np = first__33219__$1;
var nc = seq__33218__$2;
var node = vec__33217;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33221 = nn;
var G__33222 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33221,G__33222) : create_fn.call(null, G__33221,G__33222));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33224 = nn;
var G__33225 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33224,G__33225) : create_fn.call(null, G__33224,G__33225));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33242 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242,(1),null);
var seq__33246_34058 = cljs.core.seq(node_children);
var chunk__33248_34059 = null;
var count__33249_34060 = (0);
var i__33250_34061 = (0);
while(true){
if((i__33250_34061 < count__33249_34060)){
var child_struct_34062 = chunk__33248_34059.cljs$core$IIndexed$_nth$arity$2(null, i__33250_34061);
var children_34063 = shadow.dom.dom_node(child_struct_34062);
if(cljs.core.seq_QMARK_(children_34063)){
var seq__33293_34064 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34063));
var chunk__33295_34065 = null;
var count__33296_34066 = (0);
var i__33297_34067 = (0);
while(true){
if((i__33297_34067 < count__33296_34066)){
var child_34068 = chunk__33295_34065.cljs$core$IIndexed$_nth$arity$2(null, i__33297_34067);
if(cljs.core.truth_(child_34068)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34068);


var G__34069 = seq__33293_34064;
var G__34070 = chunk__33295_34065;
var G__34071 = count__33296_34066;
var G__34072 = (i__33297_34067 + (1));
seq__33293_34064 = G__34069;
chunk__33295_34065 = G__34070;
count__33296_34066 = G__34071;
i__33297_34067 = G__34072;
continue;
} else {
var G__34073 = seq__33293_34064;
var G__34074 = chunk__33295_34065;
var G__34075 = count__33296_34066;
var G__34076 = (i__33297_34067 + (1));
seq__33293_34064 = G__34073;
chunk__33295_34065 = G__34074;
count__33296_34066 = G__34075;
i__33297_34067 = G__34076;
continue;
}
} else {
var temp__5823__auto___34077 = cljs.core.seq(seq__33293_34064);
if(temp__5823__auto___34077){
var seq__33293_34078__$1 = temp__5823__auto___34077;
if(cljs.core.chunked_seq_QMARK_(seq__33293_34078__$1)){
var c__5525__auto___34079 = cljs.core.chunk_first(seq__33293_34078__$1);
var G__34080 = cljs.core.chunk_rest(seq__33293_34078__$1);
var G__34081 = c__5525__auto___34079;
var G__34082 = cljs.core.count(c__5525__auto___34079);
var G__34083 = (0);
seq__33293_34064 = G__34080;
chunk__33295_34065 = G__34081;
count__33296_34066 = G__34082;
i__33297_34067 = G__34083;
continue;
} else {
var child_34086 = cljs.core.first(seq__33293_34078__$1);
if(cljs.core.truth_(child_34086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34086);


var G__34087 = cljs.core.next(seq__33293_34078__$1);
var G__34088 = null;
var G__34089 = (0);
var G__34090 = (0);
seq__33293_34064 = G__34087;
chunk__33295_34065 = G__34088;
count__33296_34066 = G__34089;
i__33297_34067 = G__34090;
continue;
} else {
var G__34091 = cljs.core.next(seq__33293_34078__$1);
var G__34092 = null;
var G__34093 = (0);
var G__34094 = (0);
seq__33293_34064 = G__34091;
chunk__33295_34065 = G__34092;
count__33296_34066 = G__34093;
i__33297_34067 = G__34094;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34063);
}


var G__34095 = seq__33246_34058;
var G__34096 = chunk__33248_34059;
var G__34097 = count__33249_34060;
var G__34098 = (i__33250_34061 + (1));
seq__33246_34058 = G__34095;
chunk__33248_34059 = G__34096;
count__33249_34060 = G__34097;
i__33250_34061 = G__34098;
continue;
} else {
var temp__5823__auto___34099 = cljs.core.seq(seq__33246_34058);
if(temp__5823__auto___34099){
var seq__33246_34100__$1 = temp__5823__auto___34099;
if(cljs.core.chunked_seq_QMARK_(seq__33246_34100__$1)){
var c__5525__auto___34101 = cljs.core.chunk_first(seq__33246_34100__$1);
var G__34102 = cljs.core.chunk_rest(seq__33246_34100__$1);
var G__34103 = c__5525__auto___34101;
var G__34104 = cljs.core.count(c__5525__auto___34101);
var G__34105 = (0);
seq__33246_34058 = G__34102;
chunk__33248_34059 = G__34103;
count__33249_34060 = G__34104;
i__33250_34061 = G__34105;
continue;
} else {
var child_struct_34106 = cljs.core.first(seq__33246_34100__$1);
var children_34107 = shadow.dom.dom_node(child_struct_34106);
if(cljs.core.seq_QMARK_(children_34107)){
var seq__33330_34108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34107));
var chunk__33332_34109 = null;
var count__33333_34110 = (0);
var i__33334_34111 = (0);
while(true){
if((i__33334_34111 < count__33333_34110)){
var child_34112 = chunk__33332_34109.cljs$core$IIndexed$_nth$arity$2(null, i__33334_34111);
if(cljs.core.truth_(child_34112)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34112);


var G__34113 = seq__33330_34108;
var G__34114 = chunk__33332_34109;
var G__34115 = count__33333_34110;
var G__34116 = (i__33334_34111 + (1));
seq__33330_34108 = G__34113;
chunk__33332_34109 = G__34114;
count__33333_34110 = G__34115;
i__33334_34111 = G__34116;
continue;
} else {
var G__34117 = seq__33330_34108;
var G__34118 = chunk__33332_34109;
var G__34119 = count__33333_34110;
var G__34120 = (i__33334_34111 + (1));
seq__33330_34108 = G__34117;
chunk__33332_34109 = G__34118;
count__33333_34110 = G__34119;
i__33334_34111 = G__34120;
continue;
}
} else {
var temp__5823__auto___34121__$1 = cljs.core.seq(seq__33330_34108);
if(temp__5823__auto___34121__$1){
var seq__33330_34122__$1 = temp__5823__auto___34121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33330_34122__$1)){
var c__5525__auto___34123 = cljs.core.chunk_first(seq__33330_34122__$1);
var G__34124 = cljs.core.chunk_rest(seq__33330_34122__$1);
var G__34125 = c__5525__auto___34123;
var G__34126 = cljs.core.count(c__5525__auto___34123);
var G__34127 = (0);
seq__33330_34108 = G__34124;
chunk__33332_34109 = G__34125;
count__33333_34110 = G__34126;
i__33334_34111 = G__34127;
continue;
} else {
var child_34128 = cljs.core.first(seq__33330_34122__$1);
if(cljs.core.truth_(child_34128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34128);


var G__34129 = cljs.core.next(seq__33330_34122__$1);
var G__34130 = null;
var G__34131 = (0);
var G__34132 = (0);
seq__33330_34108 = G__34129;
chunk__33332_34109 = G__34130;
count__33333_34110 = G__34131;
i__33334_34111 = G__34132;
continue;
} else {
var G__34133 = cljs.core.next(seq__33330_34122__$1);
var G__34134 = null;
var G__34135 = (0);
var G__34136 = (0);
seq__33330_34108 = G__34133;
chunk__33332_34109 = G__34134;
count__33333_34110 = G__34135;
i__33334_34111 = G__34136;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34107);
}


var G__34137 = cljs.core.next(seq__33246_34100__$1);
var G__34138 = null;
var G__34139 = (0);
var G__34140 = (0);
seq__33246_34058 = G__34137;
chunk__33248_34059 = G__34138;
count__33249_34060 = G__34139;
i__33250_34061 = G__34140;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33383 = cljs.core.seq(node);
var chunk__33384 = null;
var count__33385 = (0);
var i__33386 = (0);
while(true){
if((i__33386 < count__33385)){
var n = chunk__33384.cljs$core$IIndexed$_nth$arity$2(null, i__33386);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__34141 = seq__33383;
var G__34142 = chunk__33384;
var G__34143 = count__33385;
var G__34144 = (i__33386 + (1));
seq__33383 = G__34141;
chunk__33384 = G__34142;
count__33385 = G__34143;
i__33386 = G__34144;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33383);
if(temp__5823__auto__){
var seq__33383__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33383__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33383__$1);
var G__34145 = cljs.core.chunk_rest(seq__33383__$1);
var G__34146 = c__5525__auto__;
var G__34147 = cljs.core.count(c__5525__auto__);
var G__34148 = (0);
seq__33383 = G__34145;
chunk__33384 = G__34146;
count__33385 = G__34147;
i__33386 = G__34148;
continue;
} else {
var n = cljs.core.first(seq__33383__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__34149 = cljs.core.next(seq__33383__$1);
var G__34150 = null;
var G__34151 = (0);
var G__34152 = (0);
seq__33383 = G__34149;
chunk__33384 = G__34150;
count__33385 = G__34151;
i__33386 = G__34152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33404 = arguments.length;
switch (G__33404) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33424 = arguments.length;
switch (G__33424) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33441 = arguments.length;
switch (G__33441) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34160 = arguments.length;
var i__5727__auto___34161 = (0);
while(true){
if((i__5727__auto___34161 < len__5726__auto___34160)){
args__5732__auto__.push((arguments[i__5727__auto___34161]));

var G__34162 = (i__5727__auto___34161 + (1));
i__5727__auto___34161 = G__34162;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33474_34165 = cljs.core.seq(nodes);
var chunk__33475_34166 = null;
var count__33476_34167 = (0);
var i__33477_34168 = (0);
while(true){
if((i__33477_34168 < count__33476_34167)){
var node_34177 = chunk__33475_34166.cljs$core$IIndexed$_nth$arity$2(null, i__33477_34168);
fragment.appendChild(shadow.dom._to_dom(node_34177));


var G__34178 = seq__33474_34165;
var G__34179 = chunk__33475_34166;
var G__34180 = count__33476_34167;
var G__34181 = (i__33477_34168 + (1));
seq__33474_34165 = G__34178;
chunk__33475_34166 = G__34179;
count__33476_34167 = G__34180;
i__33477_34168 = G__34181;
continue;
} else {
var temp__5823__auto___34182 = cljs.core.seq(seq__33474_34165);
if(temp__5823__auto___34182){
var seq__33474_34183__$1 = temp__5823__auto___34182;
if(cljs.core.chunked_seq_QMARK_(seq__33474_34183__$1)){
var c__5525__auto___34184 = cljs.core.chunk_first(seq__33474_34183__$1);
var G__34185 = cljs.core.chunk_rest(seq__33474_34183__$1);
var G__34186 = c__5525__auto___34184;
var G__34187 = cljs.core.count(c__5525__auto___34184);
var G__34188 = (0);
seq__33474_34165 = G__34185;
chunk__33475_34166 = G__34186;
count__33476_34167 = G__34187;
i__33477_34168 = G__34188;
continue;
} else {
var node_34189 = cljs.core.first(seq__33474_34183__$1);
fragment.appendChild(shadow.dom._to_dom(node_34189));


var G__34190 = cljs.core.next(seq__33474_34183__$1);
var G__34191 = null;
var G__34192 = (0);
var G__34193 = (0);
seq__33474_34165 = G__34190;
chunk__33475_34166 = G__34191;
count__33476_34167 = G__34192;
i__33477_34168 = G__34193;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33457){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33457));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33490_34194 = cljs.core.seq(scripts);
var chunk__33491_34195 = null;
var count__33493_34196 = (0);
var i__33494_34197 = (0);
while(true){
if((i__33494_34197 < count__33493_34196)){
var vec__33506_34199 = chunk__33491_34195.cljs$core$IIndexed$_nth$arity$2(null, i__33494_34197);
var script_tag_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33506_34199,(0),null);
var script_body_34201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33506_34199,(1),null);
eval(script_body_34201);


var G__34203 = seq__33490_34194;
var G__34204 = chunk__33491_34195;
var G__34205 = count__33493_34196;
var G__34206 = (i__33494_34197 + (1));
seq__33490_34194 = G__34203;
chunk__33491_34195 = G__34204;
count__33493_34196 = G__34205;
i__33494_34197 = G__34206;
continue;
} else {
var temp__5823__auto___34208 = cljs.core.seq(seq__33490_34194);
if(temp__5823__auto___34208){
var seq__33490_34209__$1 = temp__5823__auto___34208;
if(cljs.core.chunked_seq_QMARK_(seq__33490_34209__$1)){
var c__5525__auto___34210 = cljs.core.chunk_first(seq__33490_34209__$1);
var G__34211 = cljs.core.chunk_rest(seq__33490_34209__$1);
var G__34212 = c__5525__auto___34210;
var G__34213 = cljs.core.count(c__5525__auto___34210);
var G__34214 = (0);
seq__33490_34194 = G__34211;
chunk__33491_34195 = G__34212;
count__33493_34196 = G__34213;
i__33494_34197 = G__34214;
continue;
} else {
var vec__33517_34215 = cljs.core.first(seq__33490_34209__$1);
var script_tag_34216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517_34215,(0),null);
var script_body_34217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517_34215,(1),null);
eval(script_body_34217);


var G__34221 = cljs.core.next(seq__33490_34209__$1);
var G__34222 = null;
var G__34223 = (0);
var G__34224 = (0);
seq__33490_34194 = G__34221;
chunk__33491_34195 = G__34222;
count__33493_34196 = G__34223;
i__33494_34197 = G__34224;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33521){
var vec__33523 = p__33521;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33523,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33523,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33540 = arguments.length;
switch (G__33540) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33563 = cljs.core.seq(style_keys);
var chunk__33564 = null;
var count__33565 = (0);
var i__33566 = (0);
while(true){
if((i__33566 < count__33565)){
var it = chunk__33564.cljs$core$IIndexed$_nth$arity$2(null, i__33566);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34226 = seq__33563;
var G__34227 = chunk__33564;
var G__34228 = count__33565;
var G__34229 = (i__33566 + (1));
seq__33563 = G__34226;
chunk__33564 = G__34227;
count__33565 = G__34228;
i__33566 = G__34229;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33563);
if(temp__5823__auto__){
var seq__33563__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33563__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33563__$1);
var G__34230 = cljs.core.chunk_rest(seq__33563__$1);
var G__34231 = c__5525__auto__;
var G__34232 = cljs.core.count(c__5525__auto__);
var G__34233 = (0);
seq__33563 = G__34230;
chunk__33564 = G__34231;
count__33565 = G__34232;
i__33566 = G__34233;
continue;
} else {
var it = cljs.core.first(seq__33563__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34234 = cljs.core.next(seq__33563__$1);
var G__34235 = null;
var G__34236 = (0);
var G__34237 = (0);
seq__33563 = G__34234;
chunk__33564 = G__34235;
count__33565 = G__34236;
i__33566 = G__34237;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k33574,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__33588 = k33574;
var G__33588__$1 = (((G__33588 instanceof cljs.core.Keyword))?G__33588.fqn:null);
switch (G__33588__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33574,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__33590){
var vec__33592 = p__33590;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33592,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33592,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33573){
var self__ = this;
var G__33573__$1 = this;
return (new cljs.core.RecordIter((0),G__33573__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33575,other33576){
var self__ = this;
var this33575__$1 = this;
return (((!((other33576 == null)))) && ((((this33575__$1.constructor === other33576.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33575__$1.x,other33576.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33575__$1.y,other33576.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33575__$1.__extmap,other33576.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k33574){
var self__ = this;
var this__5307__auto____$1 = this;
var G__33615 = k33574;
var G__33615__$1 = (((G__33615 instanceof cljs.core.Keyword))?G__33615.fqn:null);
switch (G__33615__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33574);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__33573){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__33619 = cljs.core.keyword_identical_QMARK_;
var expr__33620 = k__5309__auto__;
if(cljs.core.truth_((pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33620) : pred__33619.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__33620)))){
return (new shadow.dom.Coordinate(G__33573,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33620) : pred__33619.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__33620)))){
return (new shadow.dom.Coordinate(self__.x,G__33573,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__33573),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__33573){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33573,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33581){
var extmap__5342__auto__ = (function (){var G__33632 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33581,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33581)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33632);
} else {
return G__33632;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33581),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33581),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k33648,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__33660 = k33648;
var G__33660__$1 = (((G__33660 instanceof cljs.core.Keyword))?G__33660.fqn:null);
switch (G__33660__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33648,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__33662){
var vec__33663 = p__33662;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33647){
var self__ = this;
var G__33647__$1 = this;
return (new cljs.core.RecordIter((0),G__33647__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33649,other33650){
var self__ = this;
var this33649__$1 = this;
return (((!((other33650 == null)))) && ((((this33649__$1.constructor === other33650.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33649__$1.w,other33650.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33649__$1.h,other33650.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33649__$1.__extmap,other33650.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k33648){
var self__ = this;
var this__5307__auto____$1 = this;
var G__33688 = k33648;
var G__33688__$1 = (((G__33688 instanceof cljs.core.Keyword))?G__33688.fqn:null);
switch (G__33688__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33648);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__33647){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__33692 = cljs.core.keyword_identical_QMARK_;
var expr__33693 = k__5309__auto__;
if(cljs.core.truth_((pred__33692.cljs$core$IFn$_invoke$arity$2 ? pred__33692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33693) : pred__33692.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__33693)))){
return (new shadow.dom.Size(G__33647,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33692.cljs$core$IFn$_invoke$arity$2 ? pred__33692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33693) : pred__33692.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__33693)))){
return (new shadow.dom.Size(self__.w,G__33647,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__33647),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__33647){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33647,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33654){
var extmap__5342__auto__ = (function (){var G__33705 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33654,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33654)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33705);
} else {
return G__33705;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33654),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33654),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__34301 = (i + (1));
var G__34302 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34301;
ret = G__34302;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33711){
var vec__33712 = p__33711;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33712,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33712,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33732 = arguments.length;
switch (G__33732) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34308 = ps;
var G__34309 = (i + (1));
el__$1 = G__34308;
i = G__34309;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33754 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33765_34311 = cljs.core.seq(props);
var chunk__33766_34312 = null;
var count__33767_34313 = (0);
var i__33768_34314 = (0);
while(true){
if((i__33768_34314 < count__33767_34313)){
var vec__33780_34315 = chunk__33766_34312.cljs$core$IIndexed$_nth$arity$2(null, i__33768_34314);
var k_34316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780_34315,(0),null);
var v_34317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780_34315,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_34316);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34316),v_34317);


var G__34318 = seq__33765_34311;
var G__34319 = chunk__33766_34312;
var G__34320 = count__33767_34313;
var G__34321 = (i__33768_34314 + (1));
seq__33765_34311 = G__34318;
chunk__33766_34312 = G__34319;
count__33767_34313 = G__34320;
i__33768_34314 = G__34321;
continue;
} else {
var temp__5823__auto___34322 = cljs.core.seq(seq__33765_34311);
if(temp__5823__auto___34322){
var seq__33765_34323__$1 = temp__5823__auto___34322;
if(cljs.core.chunked_seq_QMARK_(seq__33765_34323__$1)){
var c__5525__auto___34324 = cljs.core.chunk_first(seq__33765_34323__$1);
var G__34325 = cljs.core.chunk_rest(seq__33765_34323__$1);
var G__34326 = c__5525__auto___34324;
var G__34327 = cljs.core.count(c__5525__auto___34324);
var G__34328 = (0);
seq__33765_34311 = G__34325;
chunk__33766_34312 = G__34326;
count__33767_34313 = G__34327;
i__33768_34314 = G__34328;
continue;
} else {
var vec__33787_34329 = cljs.core.first(seq__33765_34323__$1);
var k_34330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787_34329,(0),null);
var v_34331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787_34329,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_34330);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34330),v_34331);


var G__34333 = cljs.core.next(seq__33765_34323__$1);
var G__34334 = null;
var G__34335 = (0);
var G__34336 = (0);
seq__33765_34311 = G__34333;
chunk__33766_34312 = G__34334;
count__33767_34313 = G__34335;
i__33768_34314 = G__34336;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33800 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(1),null);
var seq__33803_34341 = cljs.core.seq(node_children);
var chunk__33805_34342 = null;
var count__33806_34343 = (0);
var i__33807_34344 = (0);
while(true){
if((i__33807_34344 < count__33806_34343)){
var child_struct_34345 = chunk__33805_34342.cljs$core$IIndexed$_nth$arity$2(null, i__33807_34344);
if((!((child_struct_34345 == null)))){
if(typeof child_struct_34345 === 'string'){
var text_34346 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34346),child_struct_34345].join(''));
} else {
var children_34347 = shadow.dom.svg_node(child_struct_34345);
if(cljs.core.seq_QMARK_(children_34347)){
var seq__33851_34348 = cljs.core.seq(children_34347);
var chunk__33853_34349 = null;
var count__33854_34350 = (0);
var i__33855_34351 = (0);
while(true){
if((i__33855_34351 < count__33854_34350)){
var child_34352 = chunk__33853_34349.cljs$core$IIndexed$_nth$arity$2(null, i__33855_34351);
if(cljs.core.truth_(child_34352)){
node.appendChild(child_34352);


var G__34354 = seq__33851_34348;
var G__34355 = chunk__33853_34349;
var G__34356 = count__33854_34350;
var G__34357 = (i__33855_34351 + (1));
seq__33851_34348 = G__34354;
chunk__33853_34349 = G__34355;
count__33854_34350 = G__34356;
i__33855_34351 = G__34357;
continue;
} else {
var G__34358 = seq__33851_34348;
var G__34359 = chunk__33853_34349;
var G__34360 = count__33854_34350;
var G__34361 = (i__33855_34351 + (1));
seq__33851_34348 = G__34358;
chunk__33853_34349 = G__34359;
count__33854_34350 = G__34360;
i__33855_34351 = G__34361;
continue;
}
} else {
var temp__5823__auto___34363 = cljs.core.seq(seq__33851_34348);
if(temp__5823__auto___34363){
var seq__33851_34365__$1 = temp__5823__auto___34363;
if(cljs.core.chunked_seq_QMARK_(seq__33851_34365__$1)){
var c__5525__auto___34367 = cljs.core.chunk_first(seq__33851_34365__$1);
var G__34368 = cljs.core.chunk_rest(seq__33851_34365__$1);
var G__34369 = c__5525__auto___34367;
var G__34370 = cljs.core.count(c__5525__auto___34367);
var G__34371 = (0);
seq__33851_34348 = G__34368;
chunk__33853_34349 = G__34369;
count__33854_34350 = G__34370;
i__33855_34351 = G__34371;
continue;
} else {
var child_34372 = cljs.core.first(seq__33851_34365__$1);
if(cljs.core.truth_(child_34372)){
node.appendChild(child_34372);


var G__34373 = cljs.core.next(seq__33851_34365__$1);
var G__34374 = null;
var G__34375 = (0);
var G__34376 = (0);
seq__33851_34348 = G__34373;
chunk__33853_34349 = G__34374;
count__33854_34350 = G__34375;
i__33855_34351 = G__34376;
continue;
} else {
var G__34377 = cljs.core.next(seq__33851_34365__$1);
var G__34378 = null;
var G__34379 = (0);
var G__34380 = (0);
seq__33851_34348 = G__34377;
chunk__33853_34349 = G__34378;
count__33854_34350 = G__34379;
i__33855_34351 = G__34380;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34347);
}
}


var G__34381 = seq__33803_34341;
var G__34382 = chunk__33805_34342;
var G__34383 = count__33806_34343;
var G__34384 = (i__33807_34344 + (1));
seq__33803_34341 = G__34381;
chunk__33805_34342 = G__34382;
count__33806_34343 = G__34383;
i__33807_34344 = G__34384;
continue;
} else {
var G__34385 = seq__33803_34341;
var G__34386 = chunk__33805_34342;
var G__34387 = count__33806_34343;
var G__34388 = (i__33807_34344 + (1));
seq__33803_34341 = G__34385;
chunk__33805_34342 = G__34386;
count__33806_34343 = G__34387;
i__33807_34344 = G__34388;
continue;
}
} else {
var temp__5823__auto___34389 = cljs.core.seq(seq__33803_34341);
if(temp__5823__auto___34389){
var seq__33803_34390__$1 = temp__5823__auto___34389;
if(cljs.core.chunked_seq_QMARK_(seq__33803_34390__$1)){
var c__5525__auto___34391 = cljs.core.chunk_first(seq__33803_34390__$1);
var G__34392 = cljs.core.chunk_rest(seq__33803_34390__$1);
var G__34393 = c__5525__auto___34391;
var G__34394 = cljs.core.count(c__5525__auto___34391);
var G__34395 = (0);
seq__33803_34341 = G__34392;
chunk__33805_34342 = G__34393;
count__33806_34343 = G__34394;
i__33807_34344 = G__34395;
continue;
} else {
var child_struct_34396 = cljs.core.first(seq__33803_34390__$1);
if((!((child_struct_34396 == null)))){
if(typeof child_struct_34396 === 'string'){
var text_34397 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34397),child_struct_34396].join(''));
} else {
var children_34398 = shadow.dom.svg_node(child_struct_34396);
if(cljs.core.seq_QMARK_(children_34398)){
var seq__33871_34399 = cljs.core.seq(children_34398);
var chunk__33873_34400 = null;
var count__33874_34401 = (0);
var i__33875_34402 = (0);
while(true){
if((i__33875_34402 < count__33874_34401)){
var child_34404 = chunk__33873_34400.cljs$core$IIndexed$_nth$arity$2(null, i__33875_34402);
if(cljs.core.truth_(child_34404)){
node.appendChild(child_34404);


var G__34406 = seq__33871_34399;
var G__34407 = chunk__33873_34400;
var G__34408 = count__33874_34401;
var G__34409 = (i__33875_34402 + (1));
seq__33871_34399 = G__34406;
chunk__33873_34400 = G__34407;
count__33874_34401 = G__34408;
i__33875_34402 = G__34409;
continue;
} else {
var G__34412 = seq__33871_34399;
var G__34413 = chunk__33873_34400;
var G__34414 = count__33874_34401;
var G__34415 = (i__33875_34402 + (1));
seq__33871_34399 = G__34412;
chunk__33873_34400 = G__34413;
count__33874_34401 = G__34414;
i__33875_34402 = G__34415;
continue;
}
} else {
var temp__5823__auto___34416__$1 = cljs.core.seq(seq__33871_34399);
if(temp__5823__auto___34416__$1){
var seq__33871_34418__$1 = temp__5823__auto___34416__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33871_34418__$1)){
var c__5525__auto___34419 = cljs.core.chunk_first(seq__33871_34418__$1);
var G__34420 = cljs.core.chunk_rest(seq__33871_34418__$1);
var G__34421 = c__5525__auto___34419;
var G__34422 = cljs.core.count(c__5525__auto___34419);
var G__34423 = (0);
seq__33871_34399 = G__34420;
chunk__33873_34400 = G__34421;
count__33874_34401 = G__34422;
i__33875_34402 = G__34423;
continue;
} else {
var child_34424 = cljs.core.first(seq__33871_34418__$1);
if(cljs.core.truth_(child_34424)){
node.appendChild(child_34424);


var G__34425 = cljs.core.next(seq__33871_34418__$1);
var G__34426 = null;
var G__34427 = (0);
var G__34428 = (0);
seq__33871_34399 = G__34425;
chunk__33873_34400 = G__34426;
count__33874_34401 = G__34427;
i__33875_34402 = G__34428;
continue;
} else {
var G__34429 = cljs.core.next(seq__33871_34418__$1);
var G__34430 = null;
var G__34431 = (0);
var G__34432 = (0);
seq__33871_34399 = G__34429;
chunk__33873_34400 = G__34430;
count__33874_34401 = G__34431;
i__33875_34402 = G__34432;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34398);
}
}


var G__34434 = cljs.core.next(seq__33803_34390__$1);
var G__34435 = null;
var G__34436 = (0);
var G__34437 = (0);
seq__33803_34341 = G__34434;
chunk__33805_34342 = G__34435;
count__33806_34343 = G__34436;
i__33807_34344 = G__34437;
continue;
} else {
var G__34438 = cljs.core.next(seq__33803_34390__$1);
var G__34439 = null;
var G__34440 = (0);
var G__34441 = (0);
seq__33803_34341 = G__34438;
chunk__33805_34342 = G__34439;
count__33806_34343 = G__34440;
i__33807_34344 = G__34441;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34453 = arguments.length;
var i__5727__auto___34454 = (0);
while(true){
if((i__5727__auto___34454 < len__5726__auto___34453)){
args__5732__auto__.push((arguments[i__5727__auto___34454]));

var G__34456 = (i__5727__auto___34454 + (1));
i__5727__auto___34454 = G__34456;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33897){
var G__33898 = cljs.core.first(seq33897);
var seq33897__$1 = cljs.core.next(seq33897);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33898,seq33897__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
