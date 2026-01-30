goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32865){
var map__32866 = p__32865;
var map__32866__$1 = cljs.core.__destructure_map(map__32866);
var runtime = map__32866__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32866__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33288 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33288)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__32870 = runtime;
var G__32871 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33288);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__32870,G__32871) : shadow.remote.runtime.shared.process.call(null, G__32870,G__32871));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32876,res){
var map__32878 = p__32876;
var map__32878__$1 = cljs.core.__destructure_map(map__32878);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32878__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32878__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32880 = res;
var G__32880__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32880,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32880);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32880__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32880__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32886 = arguments.length;
switch (G__32886) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32911,msg,handlers,timeout_after_ms){
var map__32912 = p__32911;
var map__32912__$1 = cljs.core.__destructure_map(map__32912);
var runtime = map__32912__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32912__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33290 = arguments.length;
var i__5727__auto___33291 = (0);
while(true){
if((i__5727__auto___33291 < len__5726__auto___33290)){
args__5732__auto__.push((arguments[i__5727__auto___33291]));

var G__33292 = (i__5727__auto___33291 + (1));
i__5727__auto___33291 = G__33292;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32945,ev,args){
var map__32947 = p__32945;
var map__32947__$1 = cljs.core.__destructure_map(map__32947);
var runtime = map__32947__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32947__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32950 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32953 = null;
var count__32954 = (0);
var i__32955 = (0);
while(true){
if((i__32955 < count__32954)){
var ext = chunk__32953.cljs$core$IIndexed$_nth$arity$2(null, i__32955);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33310 = seq__32950;
var G__33311 = chunk__32953;
var G__33312 = count__32954;
var G__33313 = (i__32955 + (1));
seq__32950 = G__33310;
chunk__32953 = G__33311;
count__32954 = G__33312;
i__32955 = G__33313;
continue;
} else {
var G__33314 = seq__32950;
var G__33315 = chunk__32953;
var G__33316 = count__32954;
var G__33317 = (i__32955 + (1));
seq__32950 = G__33314;
chunk__32953 = G__33315;
count__32954 = G__33316;
i__32955 = G__33317;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32950);
if(temp__5823__auto__){
var seq__32950__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32950__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32950__$1);
var G__33318 = cljs.core.chunk_rest(seq__32950__$1);
var G__33319 = c__5525__auto__;
var G__33320 = cljs.core.count(c__5525__auto__);
var G__33321 = (0);
seq__32950 = G__33318;
chunk__32953 = G__33319;
count__32954 = G__33320;
i__32955 = G__33321;
continue;
} else {
var ext = cljs.core.first(seq__32950__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33322 = cljs.core.next(seq__32950__$1);
var G__33323 = null;
var G__33324 = (0);
var G__33325 = (0);
seq__32950 = G__33322;
chunk__32953 = G__33323;
count__32954 = G__33324;
i__32955 = G__33325;
continue;
} else {
var G__33326 = cljs.core.next(seq__32950__$1);
var G__33327 = null;
var G__33328 = (0);
var G__33329 = (0);
seq__32950 = G__33326;
chunk__32953 = G__33327;
count__32954 = G__33328;
i__32955 = G__33329;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32926){
var G__32928 = cljs.core.first(seq32926);
var seq32926__$1 = cljs.core.next(seq32926);
var G__32929 = cljs.core.first(seq32926__$1);
var seq32926__$2 = cljs.core.next(seq32926__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32928,G__32929,seq32926__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32970,p__32971){
var map__32972 = p__32970;
var map__32972__$1 = cljs.core.__destructure_map(map__32972);
var runtime = map__32972__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32973 = p__32971;
var map__32973__$1 = cljs.core.__destructure_map(map__32973);
var msg = map__32973__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32973__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__32974 = cljs.core.deref(state_ref);
var map__32974__$1 = cljs.core.__destructure_map(map__32974);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32974__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32974__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33004,msg){
var map__33006 = p__33004;
var map__33006__$1 = cljs.core.__destructure_map(map__33006);
var runtime = map__33006__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33030,key,p__33031){
var map__33032 = p__33030;
var map__33032__$1 = cljs.core.__destructure_map(map__33032);
var state = map__33032__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33033 = p__33031;
var map__33033__$1 = cljs.core.__destructure_map(map__33033);
var spec = map__33033__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33033__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33033__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33034,key,spec){
var map__33035 = p__33034;
var map__33035__$1 = cljs.core.__destructure_map(map__33035);
var runtime = map__33035__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33035__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___33351 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___33351 == null)){
} else {
var on_welcome_33352 = temp__5827__auto___33351;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_33352.cljs$core$IFn$_invoke$arity$0 ? on_welcome_33352.cljs$core$IFn$_invoke$arity$0() : on_welcome_33352.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33036_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33036_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33037_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33037_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33038_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33038_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33039_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33039_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33040_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33040_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33071,key){
var map__33072 = p__33071;
var map__33072__$1 = cljs.core.__destructure_map(map__33072);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33072__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33073,msg){
var map__33076 = p__33073;
var map__33076__$1 = cljs.core.__destructure_map(map__33076);
var runtime = map__33076__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33076__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33122,p__33123){
var map__33124 = p__33122;
var map__33124__$1 = cljs.core.__destructure_map(map__33124);
var runtime = map__33124__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33124__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33125 = p__33123;
var map__33125__$1 = cljs.core.__destructure_map(map__33125);
var msg = map__33125__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33125__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33125__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33162 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33164 = null;
var count__33165 = (0);
var i__33166 = (0);
while(true){
if((i__33166 < count__33165)){
var map__33210 = chunk__33164.cljs$core$IIndexed$_nth$arity$2(null, i__33166);
var map__33210__$1 = cljs.core.__destructure_map(map__33210);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33210__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__33395 = seq__33162;
var G__33396 = chunk__33164;
var G__33397 = count__33165;
var G__33398 = (i__33166 + (1));
seq__33162 = G__33395;
chunk__33164 = G__33396;
count__33165 = G__33397;
i__33166 = G__33398;
continue;
} else {
var G__33399 = seq__33162;
var G__33400 = chunk__33164;
var G__33401 = count__33165;
var G__33402 = (i__33166 + (1));
seq__33162 = G__33399;
chunk__33164 = G__33400;
count__33165 = G__33401;
i__33166 = G__33402;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33162);
if(temp__5823__auto__){
var seq__33162__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33162__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33162__$1);
var G__33408 = cljs.core.chunk_rest(seq__33162__$1);
var G__33409 = c__5525__auto__;
var G__33410 = cljs.core.count(c__5525__auto__);
var G__33411 = (0);
seq__33162 = G__33408;
chunk__33164 = G__33409;
count__33165 = G__33410;
i__33166 = G__33411;
continue;
} else {
var map__33211 = cljs.core.first(seq__33162__$1);
var map__33211__$1 = cljs.core.__destructure_map(map__33211);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33211__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__33414 = cljs.core.next(seq__33162__$1);
var G__33415 = null;
var G__33416 = (0);
var G__33417 = (0);
seq__33162 = G__33414;
chunk__33164 = G__33415;
count__33165 = G__33416;
i__33166 = G__33417;
continue;
} else {
var G__33418 = cljs.core.next(seq__33162__$1);
var G__33419 = null;
var G__33420 = (0);
var G__33421 = (0);
seq__33162 = G__33418;
chunk__33164 = G__33419;
count__33165 = G__33420;
i__33166 = G__33421;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
