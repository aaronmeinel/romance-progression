goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___46173 = arguments.length;
var i__5727__auto___46174 = (0);
while(true){
if((i__5727__auto___46174 < len__5726__auto___46173)){
args__5732__auto__.push((arguments[i__5727__auto___46174]));

var G__46175 = (i__5727__auto___46174 + (1));
i__5727__auto___46174 = G__46175;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45259){
var G__45260 = cljs.core.first(seq45259);
var seq45259__$1 = cljs.core.next(seq45259);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45260,seq45259__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45266 = cljs.core.seq(sources);
var chunk__45267 = null;
var count__45268 = (0);
var i__45269 = (0);
while(true){
if((i__45269 < count__45268)){
var map__45290 = chunk__45267.cljs$core$IIndexed$_nth$arity$2(null, i__45269);
var map__45290__$1 = cljs.core.__destructure_map(map__45290);
var src = map__45290__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45294){var e_46176 = e45294;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46176);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46176.message)].join('')));
}

var G__46177 = seq__45266;
var G__46178 = chunk__45267;
var G__46179 = count__45268;
var G__46180 = (i__45269 + (1));
seq__45266 = G__46177;
chunk__45267 = G__46178;
count__45268 = G__46179;
i__45269 = G__46180;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45266);
if(temp__5823__auto__){
var seq__45266__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45266__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45266__$1);
var G__46181 = cljs.core.chunk_rest(seq__45266__$1);
var G__46182 = c__5525__auto__;
var G__46183 = cljs.core.count(c__5525__auto__);
var G__46184 = (0);
seq__45266 = G__46181;
chunk__45267 = G__46182;
count__45268 = G__46183;
i__45269 = G__46184;
continue;
} else {
var map__45295 = cljs.core.first(seq__45266__$1);
var map__45295__$1 = cljs.core.__destructure_map(map__45295);
var src = map__45295__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45295__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45295__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45295__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45295__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45296){var e_46185 = e45296;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46185);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46185.message)].join('')));
}

var G__46186 = cljs.core.next(seq__45266__$1);
var G__46187 = null;
var G__46188 = (0);
var G__46189 = (0);
seq__45266 = G__46186;
chunk__45267 = G__46187;
count__45268 = G__46188;
i__45269 = G__46189;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45298 = cljs.core.seq(js_requires);
var chunk__45299 = null;
var count__45300 = (0);
var i__45301 = (0);
while(true){
if((i__45301 < count__45300)){
var js_ns = chunk__45299.cljs$core$IIndexed$_nth$arity$2(null, i__45301);
var require_str_46191 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46191);


var G__46192 = seq__45298;
var G__46193 = chunk__45299;
var G__46194 = count__45300;
var G__46195 = (i__45301 + (1));
seq__45298 = G__46192;
chunk__45299 = G__46193;
count__45300 = G__46194;
i__45301 = G__46195;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45298);
if(temp__5823__auto__){
var seq__45298__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45298__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45298__$1);
var G__46196 = cljs.core.chunk_rest(seq__45298__$1);
var G__46197 = c__5525__auto__;
var G__46198 = cljs.core.count(c__5525__auto__);
var G__46199 = (0);
seq__45298 = G__46196;
chunk__45299 = G__46197;
count__45300 = G__46198;
i__45301 = G__46199;
continue;
} else {
var js_ns = cljs.core.first(seq__45298__$1);
var require_str_46200 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46200);


var G__46201 = cljs.core.next(seq__45298__$1);
var G__46202 = null;
var G__46203 = (0);
var G__46204 = (0);
seq__45298 = G__46201;
chunk__45299 = G__46202;
count__45300 = G__46203;
i__45301 = G__46204;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45306){
var map__45307 = p__45306;
var map__45307__$1 = cljs.core.__destructure_map(map__45307);
var msg = map__45307__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45307__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45307__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45308(s__45309){
return (new cljs.core.LazySeq(null,(function (){
var s__45309__$1 = s__45309;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__45309__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__45314 = cljs.core.first(xs__6383__auto__);
var map__45314__$1 = cljs.core.__destructure_map(map__45314);
var src = map__45314__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45314__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45314__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__45309__$1,map__45314,map__45314__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45307,map__45307__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45308_$_iter__45310(s__45311){
return (new cljs.core.LazySeq(null,((function (s__45309__$1,map__45314,map__45314__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45307,map__45307__$1,msg,info,reload_info){
return (function (){
var s__45311__$1 = s__45311;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__45311__$1);
if(temp__5823__auto____$1){
var s__45311__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45311__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__45311__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__45313 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__45312 = (0);
while(true){
if((i__45312 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__45312);
cljs.core.chunk_append(b__45313,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46207 = (i__45312 + (1));
i__45312 = G__46207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45313),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45308_$_iter__45310(cljs.core.chunk_rest(s__45311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45313),null);
}
} else {
var warning = cljs.core.first(s__45311__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45308_$_iter__45310(cljs.core.rest(s__45311__$2)));
}
} else {
return null;
}
break;
}
});})(s__45309__$1,map__45314,map__45314__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45307,map__45307__$1,msg,info,reload_info))
,null,null));
});})(s__45309__$1,map__45314,map__45314__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45307,map__45307__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45308(cljs.core.rest(s__45309__$1)));
} else {
var G__46208 = cljs.core.rest(s__45309__$1);
s__45309__$1 = G__46208;
continue;
}
} else {
var G__46209 = cljs.core.rest(s__45309__$1);
s__45309__$1 = G__46209;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45315_46210 = cljs.core.seq(warnings);
var chunk__45316_46211 = null;
var count__45317_46212 = (0);
var i__45318_46213 = (0);
while(true){
if((i__45318_46213 < count__45317_46212)){
var map__45325_46214 = chunk__45316_46211.cljs$core$IIndexed$_nth$arity$2(null, i__45318_46213);
var map__45325_46215__$1 = cljs.core.__destructure_map(map__45325_46214);
var w_46216 = map__45325_46215__$1;
var msg_46217__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45325_46215__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45325_46215__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45325_46215__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45325_46215__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46220)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46218),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46219),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46217__$1)].join(''));


var G__46221 = seq__45315_46210;
var G__46222 = chunk__45316_46211;
var G__46223 = count__45317_46212;
var G__46224 = (i__45318_46213 + (1));
seq__45315_46210 = G__46221;
chunk__45316_46211 = G__46222;
count__45317_46212 = G__46223;
i__45318_46213 = G__46224;
continue;
} else {
var temp__5823__auto___46225 = cljs.core.seq(seq__45315_46210);
if(temp__5823__auto___46225){
var seq__45315_46226__$1 = temp__5823__auto___46225;
if(cljs.core.chunked_seq_QMARK_(seq__45315_46226__$1)){
var c__5525__auto___46227 = cljs.core.chunk_first(seq__45315_46226__$1);
var G__46228 = cljs.core.chunk_rest(seq__45315_46226__$1);
var G__46229 = c__5525__auto___46227;
var G__46230 = cljs.core.count(c__5525__auto___46227);
var G__46231 = (0);
seq__45315_46210 = G__46228;
chunk__45316_46211 = G__46229;
count__45317_46212 = G__46230;
i__45318_46213 = G__46231;
continue;
} else {
var map__45326_46232 = cljs.core.first(seq__45315_46226__$1);
var map__45326_46233__$1 = cljs.core.__destructure_map(map__45326_46232);
var w_46234 = map__45326_46233__$1;
var msg_46235__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45326_46233__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45326_46233__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45326_46233__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45326_46233__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46238)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46236),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46237),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46235__$1)].join(''));


var G__46239 = cljs.core.next(seq__45315_46226__$1);
var G__46240 = null;
var G__46241 = (0);
var G__46242 = (0);
seq__45315_46210 = G__46239;
chunk__45316_46211 = G__46240;
count__45317_46212 = G__46241;
i__45318_46213 = G__46242;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45305_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45305_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45327){
var map__45328 = p__45327;
var map__45328__$1 = cljs.core.__destructure_map(map__45328);
var msg = map__45328__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45329 = cljs.core.seq(updates);
var chunk__45331 = null;
var count__45332 = (0);
var i__45333 = (0);
while(true){
if((i__45333 < count__45332)){
var path = chunk__45331.cljs$core$IIndexed$_nth$arity$2(null, i__45333);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45521_46243 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45525_46244 = null;
var count__45526_46245 = (0);
var i__45527_46246 = (0);
while(true){
if((i__45527_46246 < count__45526_46245)){
var node_46247 = chunk__45525_46244.cljs$core$IIndexed$_nth$arity$2(null, i__45527_46246);
if(cljs.core.not(node_46247.shadow$old)){
var path_match_46248 = shadow.cljs.devtools.client.browser.match_paths(node_46247.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46248)){
var new_link_46249 = (function (){var G__45642 = node_46247.cloneNode(true);
G__45642.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46248),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45642;
})();
(node_46247.shadow$old = true);

(new_link_46249.onload = ((function (seq__45521_46243,chunk__45525_46244,count__45526_46245,i__45527_46246,seq__45329,chunk__45331,count__45332,i__45333,new_link_46249,path_match_46248,node_46247,path,map__45328,map__45328__$1,msg,updates,reload_info){
return (function (e){
var seq__45651_46250 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45653_46251 = null;
var count__45654_46252 = (0);
var i__45655_46253 = (0);
while(true){
if((i__45655_46253 < count__45654_46252)){
var map__45670_46254 = chunk__45653_46251.cljs$core$IIndexed$_nth$arity$2(null, i__45655_46253);
var map__45670_46255__$1 = cljs.core.__destructure_map(map__45670_46254);
var task_46256 = map__45670_46255__$1;
var fn_str_46257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670_46255__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670_46255__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46259 = goog.getObjectByName(fn_str_46257,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46258)].join(''));

(fn_obj_46259.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46259.cljs$core$IFn$_invoke$arity$2(path,new_link_46249) : fn_obj_46259.call(null, path,new_link_46249));


var G__46260 = seq__45651_46250;
var G__46261 = chunk__45653_46251;
var G__46262 = count__45654_46252;
var G__46263 = (i__45655_46253 + (1));
seq__45651_46250 = G__46260;
chunk__45653_46251 = G__46261;
count__45654_46252 = G__46262;
i__45655_46253 = G__46263;
continue;
} else {
var temp__5823__auto___46264 = cljs.core.seq(seq__45651_46250);
if(temp__5823__auto___46264){
var seq__45651_46265__$1 = temp__5823__auto___46264;
if(cljs.core.chunked_seq_QMARK_(seq__45651_46265__$1)){
var c__5525__auto___46266 = cljs.core.chunk_first(seq__45651_46265__$1);
var G__46267 = cljs.core.chunk_rest(seq__45651_46265__$1);
var G__46268 = c__5525__auto___46266;
var G__46269 = cljs.core.count(c__5525__auto___46266);
var G__46270 = (0);
seq__45651_46250 = G__46267;
chunk__45653_46251 = G__46268;
count__45654_46252 = G__46269;
i__45655_46253 = G__46270;
continue;
} else {
var map__45692_46271 = cljs.core.first(seq__45651_46265__$1);
var map__45692_46272__$1 = cljs.core.__destructure_map(map__45692_46271);
var task_46273 = map__45692_46272__$1;
var fn_str_46274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45692_46272__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45692_46272__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46276 = goog.getObjectByName(fn_str_46274,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46275)].join(''));

(fn_obj_46276.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46276.cljs$core$IFn$_invoke$arity$2(path,new_link_46249) : fn_obj_46276.call(null, path,new_link_46249));


var G__46278 = cljs.core.next(seq__45651_46265__$1);
var G__46279 = null;
var G__46280 = (0);
var G__46281 = (0);
seq__45651_46250 = G__46278;
chunk__45653_46251 = G__46279;
count__45654_46252 = G__46280;
i__45655_46253 = G__46281;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46247);
});})(seq__45521_46243,chunk__45525_46244,count__45526_46245,i__45527_46246,seq__45329,chunk__45331,count__45332,i__45333,new_link_46249,path_match_46248,node_46247,path,map__45328,map__45328__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46248], 0));

goog.dom.insertSiblingAfter(new_link_46249,node_46247);


var G__46282 = seq__45521_46243;
var G__46283 = chunk__45525_46244;
var G__46284 = count__45526_46245;
var G__46285 = (i__45527_46246 + (1));
seq__45521_46243 = G__46282;
chunk__45525_46244 = G__46283;
count__45526_46245 = G__46284;
i__45527_46246 = G__46285;
continue;
} else {
var G__46286 = seq__45521_46243;
var G__46287 = chunk__45525_46244;
var G__46288 = count__45526_46245;
var G__46289 = (i__45527_46246 + (1));
seq__45521_46243 = G__46286;
chunk__45525_46244 = G__46287;
count__45526_46245 = G__46288;
i__45527_46246 = G__46289;
continue;
}
} else {
var G__46290 = seq__45521_46243;
var G__46291 = chunk__45525_46244;
var G__46292 = count__45526_46245;
var G__46293 = (i__45527_46246 + (1));
seq__45521_46243 = G__46290;
chunk__45525_46244 = G__46291;
count__45526_46245 = G__46292;
i__45527_46246 = G__46293;
continue;
}
} else {
var temp__5823__auto___46294 = cljs.core.seq(seq__45521_46243);
if(temp__5823__auto___46294){
var seq__45521_46295__$1 = temp__5823__auto___46294;
if(cljs.core.chunked_seq_QMARK_(seq__45521_46295__$1)){
var c__5525__auto___46296 = cljs.core.chunk_first(seq__45521_46295__$1);
var G__46297 = cljs.core.chunk_rest(seq__45521_46295__$1);
var G__46298 = c__5525__auto___46296;
var G__46299 = cljs.core.count(c__5525__auto___46296);
var G__46300 = (0);
seq__45521_46243 = G__46297;
chunk__45525_46244 = G__46298;
count__45526_46245 = G__46299;
i__45527_46246 = G__46300;
continue;
} else {
var node_46301 = cljs.core.first(seq__45521_46295__$1);
if(cljs.core.not(node_46301.shadow$old)){
var path_match_46302 = shadow.cljs.devtools.client.browser.match_paths(node_46301.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46302)){
var new_link_46303 = (function (){var G__45731 = node_46301.cloneNode(true);
G__45731.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46302),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45731;
})();
(node_46301.shadow$old = true);

(new_link_46303.onload = ((function (seq__45521_46243,chunk__45525_46244,count__45526_46245,i__45527_46246,seq__45329,chunk__45331,count__45332,i__45333,new_link_46303,path_match_46302,node_46301,seq__45521_46295__$1,temp__5823__auto___46294,path,map__45328,map__45328__$1,msg,updates,reload_info){
return (function (e){
var seq__45742_46305 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45745_46306 = null;
var count__45746_46307 = (0);
var i__45747_46308 = (0);
while(true){
if((i__45747_46308 < count__45746_46307)){
var map__45758_46309 = chunk__45745_46306.cljs$core$IIndexed$_nth$arity$2(null, i__45747_46308);
var map__45758_46310__$1 = cljs.core.__destructure_map(map__45758_46309);
var task_46311 = map__45758_46310__$1;
var fn_str_46312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758_46310__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758_46310__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46314 = goog.getObjectByName(fn_str_46312,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46313)].join(''));

(fn_obj_46314.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46314.cljs$core$IFn$_invoke$arity$2(path,new_link_46303) : fn_obj_46314.call(null, path,new_link_46303));


var G__46315 = seq__45742_46305;
var G__46316 = chunk__45745_46306;
var G__46317 = count__45746_46307;
var G__46318 = (i__45747_46308 + (1));
seq__45742_46305 = G__46315;
chunk__45745_46306 = G__46316;
count__45746_46307 = G__46317;
i__45747_46308 = G__46318;
continue;
} else {
var temp__5823__auto___46319__$1 = cljs.core.seq(seq__45742_46305);
if(temp__5823__auto___46319__$1){
var seq__45742_46320__$1 = temp__5823__auto___46319__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45742_46320__$1)){
var c__5525__auto___46321 = cljs.core.chunk_first(seq__45742_46320__$1);
var G__46322 = cljs.core.chunk_rest(seq__45742_46320__$1);
var G__46323 = c__5525__auto___46321;
var G__46324 = cljs.core.count(c__5525__auto___46321);
var G__46325 = (0);
seq__45742_46305 = G__46322;
chunk__45745_46306 = G__46323;
count__45746_46307 = G__46324;
i__45747_46308 = G__46325;
continue;
} else {
var map__45760_46326 = cljs.core.first(seq__45742_46320__$1);
var map__45760_46327__$1 = cljs.core.__destructure_map(map__45760_46326);
var task_46328 = map__45760_46327__$1;
var fn_str_46329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45760_46327__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45760_46327__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46331 = goog.getObjectByName(fn_str_46329,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46330)].join(''));

(fn_obj_46331.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46331.cljs$core$IFn$_invoke$arity$2(path,new_link_46303) : fn_obj_46331.call(null, path,new_link_46303));


var G__46332 = cljs.core.next(seq__45742_46320__$1);
var G__46333 = null;
var G__46334 = (0);
var G__46335 = (0);
seq__45742_46305 = G__46332;
chunk__45745_46306 = G__46333;
count__45746_46307 = G__46334;
i__45747_46308 = G__46335;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46301);
});})(seq__45521_46243,chunk__45525_46244,count__45526_46245,i__45527_46246,seq__45329,chunk__45331,count__45332,i__45333,new_link_46303,path_match_46302,node_46301,seq__45521_46295__$1,temp__5823__auto___46294,path,map__45328,map__45328__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46302], 0));

goog.dom.insertSiblingAfter(new_link_46303,node_46301);


var G__46336 = cljs.core.next(seq__45521_46295__$1);
var G__46337 = null;
var G__46338 = (0);
var G__46339 = (0);
seq__45521_46243 = G__46336;
chunk__45525_46244 = G__46337;
count__45526_46245 = G__46338;
i__45527_46246 = G__46339;
continue;
} else {
var G__46340 = cljs.core.next(seq__45521_46295__$1);
var G__46341 = null;
var G__46342 = (0);
var G__46343 = (0);
seq__45521_46243 = G__46340;
chunk__45525_46244 = G__46341;
count__45526_46245 = G__46342;
i__45527_46246 = G__46343;
continue;
}
} else {
var G__46344 = cljs.core.next(seq__45521_46295__$1);
var G__46345 = null;
var G__46346 = (0);
var G__46347 = (0);
seq__45521_46243 = G__46344;
chunk__45525_46244 = G__46345;
count__45526_46245 = G__46346;
i__45527_46246 = G__46347;
continue;
}
}
} else {
}
}
break;
}


var G__46348 = seq__45329;
var G__46349 = chunk__45331;
var G__46350 = count__45332;
var G__46351 = (i__45333 + (1));
seq__45329 = G__46348;
chunk__45331 = G__46349;
count__45332 = G__46350;
i__45333 = G__46351;
continue;
} else {
var G__46352 = seq__45329;
var G__46353 = chunk__45331;
var G__46354 = count__45332;
var G__46355 = (i__45333 + (1));
seq__45329 = G__46352;
chunk__45331 = G__46353;
count__45332 = G__46354;
i__45333 = G__46355;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45329);
if(temp__5823__auto__){
var seq__45329__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45329__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45329__$1);
var G__46356 = cljs.core.chunk_rest(seq__45329__$1);
var G__46357 = c__5525__auto__;
var G__46358 = cljs.core.count(c__5525__auto__);
var G__46359 = (0);
seq__45329 = G__46356;
chunk__45331 = G__46357;
count__45332 = G__46358;
i__45333 = G__46359;
continue;
} else {
var path = cljs.core.first(seq__45329__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45771_46360 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45775_46361 = null;
var count__45776_46362 = (0);
var i__45777_46363 = (0);
while(true){
if((i__45777_46363 < count__45776_46362)){
var node_46364 = chunk__45775_46361.cljs$core$IIndexed$_nth$arity$2(null, i__45777_46363);
if(cljs.core.not(node_46364.shadow$old)){
var path_match_46365 = shadow.cljs.devtools.client.browser.match_paths(node_46364.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46365)){
var new_link_46366 = (function (){var G__45881 = node_46364.cloneNode(true);
G__45881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46365),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45881;
})();
(node_46364.shadow$old = true);

(new_link_46366.onload = ((function (seq__45771_46360,chunk__45775_46361,count__45776_46362,i__45777_46363,seq__45329,chunk__45331,count__45332,i__45333,new_link_46366,path_match_46365,node_46364,path,seq__45329__$1,temp__5823__auto__,map__45328,map__45328__$1,msg,updates,reload_info){
return (function (e){
var seq__45882_46367 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45884_46368 = null;
var count__45885_46369 = (0);
var i__45886_46370 = (0);
while(true){
if((i__45886_46370 < count__45885_46369)){
var map__45933_46371 = chunk__45884_46368.cljs$core$IIndexed$_nth$arity$2(null, i__45886_46370);
var map__45933_46372__$1 = cljs.core.__destructure_map(map__45933_46371);
var task_46373 = map__45933_46372__$1;
var fn_str_46374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45933_46372__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45933_46372__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46376 = goog.getObjectByName(fn_str_46374,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46375)].join(''));

(fn_obj_46376.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46376.cljs$core$IFn$_invoke$arity$2(path,new_link_46366) : fn_obj_46376.call(null, path,new_link_46366));


var G__46377 = seq__45882_46367;
var G__46378 = chunk__45884_46368;
var G__46379 = count__45885_46369;
var G__46380 = (i__45886_46370 + (1));
seq__45882_46367 = G__46377;
chunk__45884_46368 = G__46378;
count__45885_46369 = G__46379;
i__45886_46370 = G__46380;
continue;
} else {
var temp__5823__auto___46381__$1 = cljs.core.seq(seq__45882_46367);
if(temp__5823__auto___46381__$1){
var seq__45882_46382__$1 = temp__5823__auto___46381__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45882_46382__$1)){
var c__5525__auto___46383 = cljs.core.chunk_first(seq__45882_46382__$1);
var G__46384 = cljs.core.chunk_rest(seq__45882_46382__$1);
var G__46385 = c__5525__auto___46383;
var G__46386 = cljs.core.count(c__5525__auto___46383);
var G__46387 = (0);
seq__45882_46367 = G__46384;
chunk__45884_46368 = G__46385;
count__45885_46369 = G__46386;
i__45886_46370 = G__46387;
continue;
} else {
var map__45943_46388 = cljs.core.first(seq__45882_46382__$1);
var map__45943_46389__$1 = cljs.core.__destructure_map(map__45943_46388);
var task_46390 = map__45943_46389__$1;
var fn_str_46391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45943_46389__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45943_46389__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46393 = goog.getObjectByName(fn_str_46391,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46392)].join(''));

(fn_obj_46393.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46393.cljs$core$IFn$_invoke$arity$2(path,new_link_46366) : fn_obj_46393.call(null, path,new_link_46366));


var G__46394 = cljs.core.next(seq__45882_46382__$1);
var G__46395 = null;
var G__46396 = (0);
var G__46397 = (0);
seq__45882_46367 = G__46394;
chunk__45884_46368 = G__46395;
count__45885_46369 = G__46396;
i__45886_46370 = G__46397;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46364);
});})(seq__45771_46360,chunk__45775_46361,count__45776_46362,i__45777_46363,seq__45329,chunk__45331,count__45332,i__45333,new_link_46366,path_match_46365,node_46364,path,seq__45329__$1,temp__5823__auto__,map__45328,map__45328__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46365], 0));

goog.dom.insertSiblingAfter(new_link_46366,node_46364);


var G__46398 = seq__45771_46360;
var G__46399 = chunk__45775_46361;
var G__46400 = count__45776_46362;
var G__46401 = (i__45777_46363 + (1));
seq__45771_46360 = G__46398;
chunk__45775_46361 = G__46399;
count__45776_46362 = G__46400;
i__45777_46363 = G__46401;
continue;
} else {
var G__46402 = seq__45771_46360;
var G__46403 = chunk__45775_46361;
var G__46404 = count__45776_46362;
var G__46405 = (i__45777_46363 + (1));
seq__45771_46360 = G__46402;
chunk__45775_46361 = G__46403;
count__45776_46362 = G__46404;
i__45777_46363 = G__46405;
continue;
}
} else {
var G__46406 = seq__45771_46360;
var G__46407 = chunk__45775_46361;
var G__46408 = count__45776_46362;
var G__46409 = (i__45777_46363 + (1));
seq__45771_46360 = G__46406;
chunk__45775_46361 = G__46407;
count__45776_46362 = G__46408;
i__45777_46363 = G__46409;
continue;
}
} else {
var temp__5823__auto___46410__$1 = cljs.core.seq(seq__45771_46360);
if(temp__5823__auto___46410__$1){
var seq__45771_46411__$1 = temp__5823__auto___46410__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45771_46411__$1)){
var c__5525__auto___46412 = cljs.core.chunk_first(seq__45771_46411__$1);
var G__46413 = cljs.core.chunk_rest(seq__45771_46411__$1);
var G__46414 = c__5525__auto___46412;
var G__46415 = cljs.core.count(c__5525__auto___46412);
var G__46416 = (0);
seq__45771_46360 = G__46413;
chunk__45775_46361 = G__46414;
count__45776_46362 = G__46415;
i__45777_46363 = G__46416;
continue;
} else {
var node_46417 = cljs.core.first(seq__45771_46411__$1);
if(cljs.core.not(node_46417.shadow$old)){
var path_match_46418 = shadow.cljs.devtools.client.browser.match_paths(node_46417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46418)){
var new_link_46420 = (function (){var G__45979 = node_46417.cloneNode(true);
G__45979.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45979;
})();
(node_46417.shadow$old = true);

(new_link_46420.onload = ((function (seq__45771_46360,chunk__45775_46361,count__45776_46362,i__45777_46363,seq__45329,chunk__45331,count__45332,i__45333,new_link_46420,path_match_46418,node_46417,seq__45771_46411__$1,temp__5823__auto___46410__$1,path,seq__45329__$1,temp__5823__auto__,map__45328,map__45328__$1,msg,updates,reload_info){
return (function (e){
var seq__45982_46423 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45984_46424 = null;
var count__45985_46425 = (0);
var i__45986_46426 = (0);
while(true){
if((i__45986_46426 < count__45985_46425)){
var map__45994_46427 = chunk__45984_46424.cljs$core$IIndexed$_nth$arity$2(null, i__45986_46426);
var map__45994_46428__$1 = cljs.core.__destructure_map(map__45994_46427);
var task_46429 = map__45994_46428__$1;
var fn_str_46430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45994_46428__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45994_46428__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46432 = goog.getObjectByName(fn_str_46430,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46431)].join(''));

(fn_obj_46432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46432.cljs$core$IFn$_invoke$arity$2(path,new_link_46420) : fn_obj_46432.call(null, path,new_link_46420));


var G__46433 = seq__45982_46423;
var G__46434 = chunk__45984_46424;
var G__46435 = count__45985_46425;
var G__46436 = (i__45986_46426 + (1));
seq__45982_46423 = G__46433;
chunk__45984_46424 = G__46434;
count__45985_46425 = G__46435;
i__45986_46426 = G__46436;
continue;
} else {
var temp__5823__auto___46437__$2 = cljs.core.seq(seq__45982_46423);
if(temp__5823__auto___46437__$2){
var seq__45982_46438__$1 = temp__5823__auto___46437__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45982_46438__$1)){
var c__5525__auto___46439 = cljs.core.chunk_first(seq__45982_46438__$1);
var G__46440 = cljs.core.chunk_rest(seq__45982_46438__$1);
var G__46441 = c__5525__auto___46439;
var G__46442 = cljs.core.count(c__5525__auto___46439);
var G__46443 = (0);
seq__45982_46423 = G__46440;
chunk__45984_46424 = G__46441;
count__45985_46425 = G__46442;
i__45986_46426 = G__46443;
continue;
} else {
var map__46002_46444 = cljs.core.first(seq__45982_46438__$1);
var map__46002_46445__$1 = cljs.core.__destructure_map(map__46002_46444);
var task_46446 = map__46002_46445__$1;
var fn_str_46447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46002_46445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46002_46445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46449 = goog.getObjectByName(fn_str_46447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46448)].join(''));

(fn_obj_46449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46449.cljs$core$IFn$_invoke$arity$2(path,new_link_46420) : fn_obj_46449.call(null, path,new_link_46420));


var G__46450 = cljs.core.next(seq__45982_46438__$1);
var G__46451 = null;
var G__46452 = (0);
var G__46453 = (0);
seq__45982_46423 = G__46450;
chunk__45984_46424 = G__46451;
count__45985_46425 = G__46452;
i__45986_46426 = G__46453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46417);
});})(seq__45771_46360,chunk__45775_46361,count__45776_46362,i__45777_46363,seq__45329,chunk__45331,count__45332,i__45333,new_link_46420,path_match_46418,node_46417,seq__45771_46411__$1,temp__5823__auto___46410__$1,path,seq__45329__$1,temp__5823__auto__,map__45328,map__45328__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46418], 0));

goog.dom.insertSiblingAfter(new_link_46420,node_46417);


var G__46454 = cljs.core.next(seq__45771_46411__$1);
var G__46455 = null;
var G__46456 = (0);
var G__46457 = (0);
seq__45771_46360 = G__46454;
chunk__45775_46361 = G__46455;
count__45776_46362 = G__46456;
i__45777_46363 = G__46457;
continue;
} else {
var G__46458 = cljs.core.next(seq__45771_46411__$1);
var G__46459 = null;
var G__46460 = (0);
var G__46461 = (0);
seq__45771_46360 = G__46458;
chunk__45775_46361 = G__46459;
count__45776_46362 = G__46460;
i__45777_46363 = G__46461;
continue;
}
} else {
var G__46462 = cljs.core.next(seq__45771_46411__$1);
var G__46463 = null;
var G__46464 = (0);
var G__46465 = (0);
seq__45771_46360 = G__46462;
chunk__45775_46361 = G__46463;
count__45776_46362 = G__46464;
i__45777_46363 = G__46465;
continue;
}
}
} else {
}
}
break;
}


var G__46466 = cljs.core.next(seq__45329__$1);
var G__46467 = null;
var G__46468 = (0);
var G__46469 = (0);
seq__45329 = G__46466;
chunk__45331 = G__46467;
count__45332 = G__46468;
i__45333 = G__46469;
continue;
} else {
var G__46470 = cljs.core.next(seq__45329__$1);
var G__46471 = null;
var G__46472 = (0);
var G__46473 = (0);
seq__45329 = G__46470;
chunk__45331 = G__46471;
count__45332 = G__46472;
i__45333 = G__46473;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__46043){
var map__46045 = p__46043;
var map__46045__$1 = cljs.core.__destructure_map(map__46045);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46045__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46055,done,error){
var map__46060 = p__46055;
var map__46060__$1 = cljs.core.__destructure_map(map__46060);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46060__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46072,done,error){
var map__46073 = p__46072;
var map__46073__$1 = cljs.core.__destructure_map(map__46073);
var msg = map__46073__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46073__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46073__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46073__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46074){
var map__46076 = p__46074;
var map__46076__$1 = cljs.core.__destructure_map(map__46076);
var src = map__46076__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46076__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46081 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46081) : done.call(null, G__46081));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46086){
var map__46087 = p__46086;
var map__46087__$1 = cljs.core.__destructure_map(map__46087);
var msg__$1 = map__46087__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e46093){var ex = e46093;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46099){
var map__46103 = p__46099;
var map__46103__$1 = cljs.core.__destructure_map(map__46103);
var env = map__46103__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46147){
var map__46153 = p__46147;
var map__46153__$1 = cljs.core.__destructure_map(map__46153);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46153__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46153__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46162){
var map__46163 = p__46162;
var map__46163__$1 = cljs.core.__destructure_map(map__46163);
var svc = map__46163__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46163__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
