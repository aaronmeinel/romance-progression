goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40660){
var map__40661 = p__40660;
var map__40661__$1 = cljs.core.__destructure_map(map__40661);
var m = map__40661__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40692_41399 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40693_41400 = null;
var count__40694_41401 = (0);
var i__40695_41402 = (0);
while(true){
if((i__40695_41402 < count__40694_41401)){
var f_41403 = chunk__40693_41400.cljs$core$IIndexed$_nth$arity$2(null, i__40695_41402);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41403], 0));


var G__41404 = seq__40692_41399;
var G__41405 = chunk__40693_41400;
var G__41406 = count__40694_41401;
var G__41407 = (i__40695_41402 + (1));
seq__40692_41399 = G__41404;
chunk__40693_41400 = G__41405;
count__40694_41401 = G__41406;
i__40695_41402 = G__41407;
continue;
} else {
var temp__5823__auto___41408 = cljs.core.seq(seq__40692_41399);
if(temp__5823__auto___41408){
var seq__40692_41409__$1 = temp__5823__auto___41408;
if(cljs.core.chunked_seq_QMARK_(seq__40692_41409__$1)){
var c__5525__auto___41410 = cljs.core.chunk_first(seq__40692_41409__$1);
var G__41411 = cljs.core.chunk_rest(seq__40692_41409__$1);
var G__41412 = c__5525__auto___41410;
var G__41413 = cljs.core.count(c__5525__auto___41410);
var G__41414 = (0);
seq__40692_41399 = G__41411;
chunk__40693_41400 = G__41412;
count__40694_41401 = G__41413;
i__40695_41402 = G__41414;
continue;
} else {
var f_41415 = cljs.core.first(seq__40692_41409__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41415], 0));


var G__41416 = cljs.core.next(seq__40692_41409__$1);
var G__41417 = null;
var G__41418 = (0);
var G__41419 = (0);
seq__40692_41399 = G__41416;
chunk__40693_41400 = G__41417;
count__40694_41401 = G__41418;
i__40695_41402 = G__41419;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41420 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41420], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41420)))?cljs.core.second(arglists_41420):arglists_41420)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40745_41428 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40746_41429 = null;
var count__40747_41430 = (0);
var i__40748_41431 = (0);
while(true){
if((i__40748_41431 < count__40747_41430)){
var vec__40764_41432 = chunk__40746_41429.cljs$core$IIndexed$_nth$arity$2(null, i__40748_41431);
var name_41433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40764_41432,(0),null);
var map__40767_41434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40764_41432,(1),null);
var map__40767_41435__$1 = cljs.core.__destructure_map(map__40767_41434);
var doc_41436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40767_41435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40767_41435__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41433], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41437], 0));

if(cljs.core.truth_(doc_41436)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41436], 0));
} else {
}


var G__41438 = seq__40745_41428;
var G__41439 = chunk__40746_41429;
var G__41440 = count__40747_41430;
var G__41441 = (i__40748_41431 + (1));
seq__40745_41428 = G__41438;
chunk__40746_41429 = G__41439;
count__40747_41430 = G__41440;
i__40748_41431 = G__41441;
continue;
} else {
var temp__5823__auto___41442 = cljs.core.seq(seq__40745_41428);
if(temp__5823__auto___41442){
var seq__40745_41443__$1 = temp__5823__auto___41442;
if(cljs.core.chunked_seq_QMARK_(seq__40745_41443__$1)){
var c__5525__auto___41465 = cljs.core.chunk_first(seq__40745_41443__$1);
var G__41466 = cljs.core.chunk_rest(seq__40745_41443__$1);
var G__41467 = c__5525__auto___41465;
var G__41468 = cljs.core.count(c__5525__auto___41465);
var G__41469 = (0);
seq__40745_41428 = G__41466;
chunk__40746_41429 = G__41467;
count__40747_41430 = G__41468;
i__40748_41431 = G__41469;
continue;
} else {
var vec__40800_41470 = cljs.core.first(seq__40745_41443__$1);
var name_41471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40800_41470,(0),null);
var map__40803_41472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40800_41470,(1),null);
var map__40803_41473__$1 = cljs.core.__destructure_map(map__40803_41472);
var doc_41474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40803_41473__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40803_41473__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41471], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41475], 0));

if(cljs.core.truth_(doc_41474)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41474], 0));
} else {
}


var G__41480 = cljs.core.next(seq__40745_41443__$1);
var G__41481 = null;
var G__41482 = (0);
var G__41483 = (0);
seq__40745_41428 = G__41480;
chunk__40746_41429 = G__41481;
count__40747_41430 = G__41482;
i__40748_41431 = G__41483;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40824 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40825 = null;
var count__40826 = (0);
var i__40827 = (0);
while(true){
if((i__40827 < count__40826)){
var role = chunk__40825.cljs$core$IIndexed$_nth$arity$2(null, i__40827);
var temp__5823__auto___41487__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___41487__$1)){
var spec_41489 = temp__5823__auto___41487__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41489)], 0));
} else {
}


var G__41492 = seq__40824;
var G__41493 = chunk__40825;
var G__41494 = count__40826;
var G__41495 = (i__40827 + (1));
seq__40824 = G__41492;
chunk__40825 = G__41493;
count__40826 = G__41494;
i__40827 = G__41495;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__40824);
if(temp__5823__auto____$1){
var seq__40824__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40824__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40824__$1);
var G__41500 = cljs.core.chunk_rest(seq__40824__$1);
var G__41501 = c__5525__auto__;
var G__41502 = cljs.core.count(c__5525__auto__);
var G__41503 = (0);
seq__40824 = G__41500;
chunk__40825 = G__41501;
count__40826 = G__41502;
i__40827 = G__41503;
continue;
} else {
var role = cljs.core.first(seq__40824__$1);
var temp__5823__auto___41506__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___41506__$2)){
var spec_41514 = temp__5823__auto___41506__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41514)], 0));
} else {
}


var G__41515 = cljs.core.next(seq__40824__$1);
var G__41516 = null;
var G__41517 = (0);
var G__41518 = (0);
seq__40824 = G__41515;
chunk__40825 = G__41516;
count__40826 = G__41517;
i__40827 = G__41518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40936 = datafied_throwable;
var map__40936__$1 = cljs.core.__destructure_map(map__40936);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40936__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40937 = cljs.core.last(via);
var map__40937__$1 = cljs.core.__destructure_map(map__40937);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40938 = data;
var map__40938__$1 = cljs.core.__destructure_map(map__40938);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40938__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40938__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40938__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40939 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40939__$1 = cljs.core.__destructure_map(map__40939);
var top_data = map__40939__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40939__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40940 = phase;
var G__40940__$1 = (((G__40940 instanceof cljs.core.Keyword))?G__40940.fqn:null);
switch (G__40940__$1) {
case "read-source":
var map__40941 = data;
var map__40941__$1 = cljs.core.__destructure_map(map__40941);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40941__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40941__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40942__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40942,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40942);
var G__40942__$2 = (cljs.core.truth_((function (){var fexpr__40943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40943.cljs$core$IFn$_invoke$arity$1 ? fexpr__40943.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40943.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40942__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40942__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40942__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40993 = top_data;
var G__40993__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40993,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40993);
var G__40993__$2 = (cljs.core.truth_((function (){var fexpr__40995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40995.cljs$core$IFn$_invoke$arity$1 ? fexpr__40995.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40995.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40993__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40993__$1);
var G__40993__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40993__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40993__$2);
var G__40993__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40993__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40993__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40993__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40993__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41016 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41016,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41016,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41016,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41016,(3),null);
var G__41025 = top_data;
var G__41025__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41025,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41025);
var G__41025__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41025__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41025__$1);
var G__41025__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41025__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41025__$2);
var G__41025__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41025__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41025__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41025__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41025__$4;
}

break;
case "execution":
var vec__41041 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41041,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41041,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41041,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41041,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40917_SHARP_){
var or__5002__auto__ = (p1__40917_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__41084 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41084.cljs$core$IFn$_invoke$arity$1 ? fexpr__41084.cljs$core$IFn$_invoke$arity$1(p1__40917_SHARP_) : fexpr__41084.call(null, p1__40917_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__41096 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41096__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41096,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41096);
var G__41096__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41096__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41096__$1);
var G__41096__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41096__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41096__$2);
var G__41096__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41096__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41096__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41096__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41096__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40940__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41131){
var map__41132 = p__41131;
var map__41132__$1 = cljs.core.__destructure_map(map__41132);
var triage_data = map__41132__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41240 = phase;
var G__41240__$1 = (((G__41240 instanceof cljs.core.Keyword))?G__41240.fqn:null);
switch (G__41240__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41292 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41294 = loc;
var G__41295 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41300_41554 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41301_41555 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41302_41556 = true;
var _STAR_print_fn_STAR__temp_val__41303_41557 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41302_41556);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41303_41557);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41123_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41123_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41301_41555);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41300_41554);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41292,G__41293,G__41294,G__41295) : format.call(null, G__41292,G__41293,G__41294,G__41295));

break;
case "macroexpansion":
var G__41329 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41330 = cause_type;
var G__41331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41332 = loc;
var G__41333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41329,G__41330,G__41331,G__41332,G__41333) : format.call(null, G__41329,G__41330,G__41331,G__41332,G__41333));

break;
case "compile-syntax-check":
var G__41337 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41338 = cause_type;
var G__41339 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41340 = loc;
var G__41341 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41337,G__41338,G__41339,G__41340,G__41341) : format.call(null, G__41337,G__41338,G__41339,G__41340,G__41341));

break;
case "compilation":
var G__41346 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41347 = cause_type;
var G__41348 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41349 = loc;
var G__41350 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41346,G__41347,G__41348,G__41349,G__41350) : format.call(null, G__41346,G__41347,G__41348,G__41349,G__41350));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41359 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41360 = symbol;
var G__41361 = loc;
var G__41362 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41369_41574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41370_41575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41371_41576 = true;
var _STAR_print_fn_STAR__temp_val__41372_41577 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41371_41576);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41372_41577);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41129_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41129_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41370_41575);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41369_41574);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41359,G__41360,G__41361,G__41362) : format.call(null, G__41359,G__41360,G__41361,G__41362));
} else {
var G__41380 = "Execution error%s at %s(%s).\n%s\n";
var G__41381 = cause_type;
var G__41382 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41383 = loc;
var G__41384 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41380,G__41381,G__41382,G__41383,G__41384) : format.call(null, G__41380,G__41381,G__41382,G__41383,G__41384));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41240__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
