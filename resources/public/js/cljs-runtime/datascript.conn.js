goog.provide('datascript.conn');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {extend_clj.core.IAtom3}
 * @implements {cljs.core.ILookup}
*/
datascript.conn.Conn = (function (atom,validator,watches,meta){
this.atom = atom;
this.validator = validator;
this.watches = watches;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 6455552;
});
(datascript.conn.Conn.prototype.equiv = (function (other__40323__auto__){
var self__ = this;
var this__40322__auto__ = this;
return this__40322__auto__.cljs$core$IEquiv$_equiv$arity$2(null, other__40323__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this__40322__auto__,oldv__40330__auto__,newv__40325__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
var seq__45483 = cljs.core.seq(self__.watches);
var chunk__45484 = null;
var count__45485 = (0);
var i__45486 = (0);
while(true){
if((i__45486 < count__45485)){
var vec__45494 = chunk__45484.cljs$core$IIndexed$_nth$arity$2(null, i__45486);
var k__40331__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494,(0),null);
var f__40326__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494,(1),null);
(f__40326__auto__.cljs$core$IFn$_invoke$arity$4 ? f__40326__auto__.cljs$core$IFn$_invoke$arity$4(k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__) : f__40326__auto__.call(null, k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__));


var G__46031 = seq__45483;
var G__46032 = chunk__45484;
var G__46033 = count__45485;
var G__46034 = (i__45486 + (1));
seq__45483 = G__46031;
chunk__45484 = G__46032;
count__45485 = G__46033;
i__45486 = G__46034;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45483);
if(temp__5823__auto__){
var seq__45483__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45483__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45483__$1);
var G__46035 = cljs.core.chunk_rest(seq__45483__$1);
var G__46036 = c__5525__auto__;
var G__46037 = cljs.core.count(c__5525__auto__);
var G__46038 = (0);
seq__45483 = G__46035;
chunk__45484 = G__46036;
count__45485 = G__46037;
i__45486 = G__46038;
continue;
} else {
var vec__45504 = cljs.core.first(seq__45483__$1);
var k__40331__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45504,(0),null);
var f__40326__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45504,(1),null);
(f__40326__auto__.cljs$core$IFn$_invoke$arity$4 ? f__40326__auto__.cljs$core$IFn$_invoke$arity$4(k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__) : f__40326__auto__.call(null, k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__));


var G__46039 = cljs.core.next(seq__45483__$1);
var G__46040 = null;
var G__46041 = (0);
var G__46042 = (0);
seq__45483 = G__46039;
chunk__45484 = G__46040;
count__45485 = G__46041;
i__45486 = G__46042;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this__40322__auto__,key__40332__auto__,f__40326__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
(this__40322__auto____$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__40332__auto__,f__40326__auto__));

return this__40322__auto____$1;
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this__40322__auto__,key__40332__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return (this__40322__auto____$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__40332__auto__));
}));

(datascript.conn.Conn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o__40324__auto__,other__40323__auto__){
var self__ = this;
var o__40324__auto____$1 = this;
return (o__40324__auto____$1 === other__40323__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__40322__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return goog.getUid(this__40322__auto____$1);
}));

(datascript.conn.Conn.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this__40322__auto__,newv__40325__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40322__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, cljs.core.constantly(newv__40325__auto__),cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this__40322__auto__,f__40326__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40322__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40326__auto__,cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this__40322__auto__,f__40326__auto__,a__40327__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40322__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40326__auto__,(new cljs.core.List(null,a__40327__auto__,null,(1),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this__40322__auto__,f__40326__auto__,a__40327__auto__,b__40328__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40322__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40326__auto__,(new cljs.core.List(null,a__40327__auto__,(new cljs.core.List(null,b__40328__auto__,null,(1),null)),(2),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this__40322__auto__,f__40326__auto__,a__40327__auto__,b__40328__auto__,xs__40329__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__40322__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__40326__auto__,cljs.core.cons(a__40327__auto__,cljs.core.cons(b__40328__auto__,xs__40329__auto__))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__40322__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return self__.meta;
}));

(datascript.conn.Conn.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this__40322__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return this__40322__auto____$1.extend_clj$core$IAtom3$deref_impl$arity$1(null, );
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$validate$arity$3 = (function (this__40322__auto__,validator__40334__auto__,value__40335__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
if((!((validator__40334__auto__ == null)))){
if(cljs.core.truth_((validator__40334__auto__.cljs$core$IFn$_invoke$arity$1 ? validator__40334__auto__.cljs$core$IFn$_invoke$arity$1(value__40335__auto__) : validator__40334__auto__.call(null, value__40335__auto__)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid reference state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__40335__auto__], null));
}
} else {
return null;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$notify_watches$arity$3 = (function (this__40322__auto__,oldv__40330__auto__,newv__40325__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
var seq__45581 = cljs.core.seq(self__.watches);
var chunk__45582 = null;
var count__45583 = (0);
var i__45584 = (0);
while(true){
if((i__45584 < count__45583)){
var vec__45616 = chunk__45582.cljs$core$IIndexed$_nth$arity$2(null, i__45584);
var k__40331__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(0),null);
var w__40336__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(1),null);
(w__40336__auto__.cljs$core$IFn$_invoke$arity$4 ? w__40336__auto__.cljs$core$IFn$_invoke$arity$4(k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__) : w__40336__auto__.call(null, k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__));


var G__46046 = seq__45581;
var G__46047 = chunk__45582;
var G__46048 = count__45583;
var G__46049 = (i__45584 + (1));
seq__45581 = G__46046;
chunk__45582 = G__46047;
count__45583 = G__46048;
i__45584 = G__46049;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45581);
if(temp__5823__auto__){
var seq__45581__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45581__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45581__$1);
var G__46050 = cljs.core.chunk_rest(seq__45581__$1);
var G__46051 = c__5525__auto__;
var G__46052 = cljs.core.count(c__5525__auto__);
var G__46053 = (0);
seq__45581 = G__46050;
chunk__45582 = G__46051;
count__45583 = G__46052;
i__45584 = G__46053;
continue;
} else {
var vec__45627 = cljs.core.first(seq__45581__$1);
var k__40331__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45627,(0),null);
var w__40336__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45627,(1),null);
(w__40336__auto__.cljs$core$IFn$_invoke$arity$4 ? w__40336__auto__.cljs$core$IFn$_invoke$arity$4(k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__) : w__40336__auto__.call(null, k__40331__auto__,this__40322__auto____$1,oldv__40330__auto__,newv__40325__auto__));


var G__46056 = cljs.core.next(seq__45581__$1);
var G__46057 = null;
var G__46058 = (0);
var G__46059 = (0);
seq__45581 = G__46056;
chunk__45582 = G__46057;
count__45583 = G__46058;
i__45584 = G__46059;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$swap_STAR_$arity$3 = (function (this__40322__auto__,f__40326__auto__,args__40337__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
var oldv__40330__auto__ = cljs.core.deref(this__40322__auto____$1);
var newv__40325__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__40326__auto__,oldv__40330__auto__,args__40337__auto__);
this__40322__auto____$1.extend_clj$core$IAtom3$validate$arity$3(null, self__.validator,newv__40325__auto__);

this__40322__auto____$1.extend_clj$core$IAtom3$compare_and_set_impl$arity$3(null, oldv__40330__auto__,newv__40325__auto__);

this__40322__auto____$1.extend_clj$core$IAtom3$notify_watches$arity$3(null, oldv__40330__auto__,newv__40325__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldv__40330__auto__,newv__40325__auto__], null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$deref_impl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atom));
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$compare_and_set_impl$arity$3 = (function (this$,oldv,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_and_set_BANG_(self__.atom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),oldv),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),newv));
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__40322__auto__,k__40331__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
return this__40322__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__40331__auto__,null);
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__40322__auto__,k__40331__auto__,not_found__40333__auto__){
var self__ = this;
var this__40322__auto____$1 = this;
var G__45661 = k__40331__auto__;
var G__45661__$1 = (((G__45661 instanceof cljs.core.Keyword))?G__45661.fqn:null);
switch (G__45661__$1) {
case "atom":
return self__.atom;

break;
default:
return not_found__40333__auto__;

}
}));

(datascript.conn.Conn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(datascript.conn.Conn.cljs$lang$type = true);

(datascript.conn.Conn.cljs$lang$ctorStr = "datascript.conn/Conn");

(datascript.conn.Conn.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"datascript.conn/Conn");
}));

/**
 * Positional factory function for datascript.conn/Conn.
 */
datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(atom,validator,watches,meta){
return (new datascript.conn.Conn(atom,validator,watches,meta));
});


datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(var_args){
var G__45687 = arguments.length;
switch (G__45687) {
case 1:
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___46063 = arguments.length;
var i__5727__auto___46064 = (0);
while(true){
if((i__5727__auto___46064 < len__5726__auto___46063)){
args_arr__5751__auto__.push((arguments[i__5727__auto___46064]));

var G__46065 = (i__5727__auto___46064 + (1));
i__5727__auto___46064 = G__46065;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic = (function (atom,rest__40338__auto__){
var opts__40339__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,rest__40338__auto__);
var ref__40340__auto__ = (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
var temp__5827__auto___46066 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(opts__40339__auto__);
if((temp__5827__auto___46066 == null)){
} else {
var validator__40334__auto___46067 = temp__5827__auto___46066;
ref__40340__auto__.extend_clj$core$IAtom3$validate$arity$3(null, validator__40334__auto___46067,cljs.core.deref(ref__40340__auto__));

(ref__40340__auto__.validator = validator__40334__auto___46067);
}

var temp__5827__auto___46068 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts__40339__auto__);
if((temp__5827__auto___46068 == null)){
} else {
var meta__40341__auto___46070 = temp__5827__auto___46068;
cljs.core.reset_meta_BANG_(ref__40340__auto__,meta__40341__auto___46070);
}

return ref__40340__auto__;
}));

/** @this {Function} */
(datascript.conn.__GT_Conn.cljs$lang$applyTo = (function (seq45681){
var G__45682 = cljs.core.first(seq45681);
var seq45681__$1 = cljs.core.next(seq45681);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45682,seq45681__$1);
}));

(datascript.conn.__GT_Conn.cljs$lang$maxFixedArity = (1));


datascript.conn.make_conn = (function datascript$conn$make_conn(opts){
var G__45750 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(opts);
return (datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 ? datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1(G__45750) : datascript.conn.__GT_Conn.call(null, G__45750));
});
datascript.conn.with$ = (function datascript$conn$with(var_args){
var G__45753 = arguments.length;
switch (G__45753) {
case 2:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
}));

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if((db instanceof datascript.db.FilteredDB)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data(datascript.db.__GT_TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tx_meta),tx_data);
}
}));

(datascript.conn.with$.cljs$lang$maxFixedArity = 3);

/**
 * Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.
 */
datascript.conn.db_with = (function datascript$conn$db_with(db,tx_data){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.conn.conn_QMARK_ = (function datascript$conn$conn_QMARK_(conn){
var and__5000__auto__ = (((!((conn == null))))?(((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$))))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__5000__auto__){
var temp__5825__auto__ = cljs.core.deref(conn);
if((temp__5825__auto__ == null)){
return true;
} else {
var db = temp__5825__auto__;
return datascript.db.db_QMARK_(db);
}
} else {
return and__5000__auto__;
}
});
datascript.conn.conn_from_db = (function datascript$conn$conn_from_db(db){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5825__auto__ = datascript.storage.storage(db);
if((temp__5825__auto__ == null)){
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var storage = temp__5825__auto__;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
datascript.conn.conn_from_datoms = (function datascript$conn$conn_from_datoms(var_args){
var G__45793 = arguments.length;
switch (G__45793) {
case 1:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3 = (function (datoms,schema,opts){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.conn_from_datoms.cljs$lang$maxFixedArity = 3);

datascript.conn.create_conn = (function datascript$conn$create_conn(var_args){
var G__45805 = arguments.length;
switch (G__45805) {
case 0:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.conn.conn_from_db(datascript.db.empty_db(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2 = (function (schema,opts){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.create_conn.cljs$lang$maxFixedArity = 2);

datascript.conn._transact_BANG_ = (function datascript$conn$_transact_BANG_(conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var _STAR_report = cljs.core.volatile_BANG_(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (db){
var r = datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
cljs.core.vreset_BANG_(_STAR_report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
}));

return cljs.core.deref(_STAR_report);
});
datascript.conn.transact_BANG_ = (function datascript$conn$transact_BANG_(var_args){
var G__45892 = arguments.length;
switch (G__45892) {
case 2:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
}));

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.conn._transact_BANG_(conn,tx_data,tx_meta);
var seq__45928_46095 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__45929_46096 = null;
var count__45930_46097 = (0);
var i__45931_46098 = (0);
while(true){
if((i__45931_46098 < count__45930_46097)){
var vec__45950_46100 = chunk__45929_46096.cljs$core$IIndexed$_nth$arity$2(null, i__45931_46098);
var __46101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45950_46100,(0),null);
var callback_46102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45950_46100,(1),null);
(callback_46102.cljs$core$IFn$_invoke$arity$1 ? callback_46102.cljs$core$IFn$_invoke$arity$1(report) : callback_46102.call(null, report));


var G__46104 = seq__45928_46095;
var G__46105 = chunk__45929_46096;
var G__46106 = count__45930_46097;
var G__46107 = (i__45931_46098 + (1));
seq__45928_46095 = G__46104;
chunk__45929_46096 = G__46105;
count__45930_46097 = G__46106;
i__45931_46098 = G__46107;
continue;
} else {
var temp__5823__auto___46108 = cljs.core.seq(seq__45928_46095);
if(temp__5823__auto___46108){
var seq__45928_46109__$1 = temp__5823__auto___46108;
if(cljs.core.chunked_seq_QMARK_(seq__45928_46109__$1)){
var c__5525__auto___46110 = cljs.core.chunk_first(seq__45928_46109__$1);
var G__46111 = cljs.core.chunk_rest(seq__45928_46109__$1);
var G__46112 = c__5525__auto___46110;
var G__46113 = cljs.core.count(c__5525__auto___46110);
var G__46114 = (0);
seq__45928_46095 = G__46111;
chunk__45929_46096 = G__46112;
count__45930_46097 = G__46113;
i__45931_46098 = G__46114;
continue;
} else {
var vec__45964_46115 = cljs.core.first(seq__45928_46109__$1);
var __46116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45964_46115,(0),null);
var callback_46118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45964_46115,(1),null);
(callback_46118.cljs$core$IFn$_invoke$arity$1 ? callback_46118.cljs$core$IFn$_invoke$arity$1(report) : callback_46118.call(null, report));


var G__46119 = cljs.core.next(seq__45928_46109__$1);
var G__46120 = null;
var G__46121 = (0);
var G__46122 = (0);
seq__45928_46095 = G__46119;
chunk__45929_46096 = G__46120;
count__45930_46097 = G__46121;
i__45931_46098 = G__46122;
continue;
}
} else {
}
}
break;
}

return report;
}));

(datascript.conn.transact_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_conn_BANG_ = (function datascript$conn$reset_conn_BANG_(var_args){
var G__45989 = arguments.length;
switch (G__45989) {
case 2:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
}));

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var db_before = cljs.core.deref(conn);
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(db_before)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45978_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45978_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.db._datoms(db_before,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)):null),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
var temp__5825__auto___46128 = datascript.storage.storage(db_before);
if((temp__5825__auto___46128 == null)){
cljs.core.reset_BANG_(conn,db);
} else {
var storage_46132 = temp__5825__auto___46128;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
}

var seq__45995_46134 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__45996_46135 = null;
var count__45997_46136 = (0);
var i__45998_46137 = (0);
while(true){
if((i__45998_46137 < count__45997_46136)){
var vec__46006_46138 = chunk__45996_46135.cljs$core$IIndexed$_nth$arity$2(null, i__45998_46137);
var __46139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46006_46138,(0),null);
var callback_46140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46006_46138,(1),null);
(callback_46140.cljs$core$IFn$_invoke$arity$1 ? callback_46140.cljs$core$IFn$_invoke$arity$1(report) : callback_46140.call(null, report));


var G__46141 = seq__45995_46134;
var G__46142 = chunk__45996_46135;
var G__46143 = count__45997_46136;
var G__46144 = (i__45998_46137 + (1));
seq__45995_46134 = G__46141;
chunk__45996_46135 = G__46142;
count__45997_46136 = G__46143;
i__45998_46137 = G__46144;
continue;
} else {
var temp__5823__auto___46145 = cljs.core.seq(seq__45995_46134);
if(temp__5823__auto___46145){
var seq__45995_46146__$1 = temp__5823__auto___46145;
if(cljs.core.chunked_seq_QMARK_(seq__45995_46146__$1)){
var c__5525__auto___46148 = cljs.core.chunk_first(seq__45995_46146__$1);
var G__46149 = cljs.core.chunk_rest(seq__45995_46146__$1);
var G__46150 = c__5525__auto___46148;
var G__46151 = cljs.core.count(c__5525__auto___46148);
var G__46152 = (0);
seq__45995_46134 = G__46149;
chunk__45996_46135 = G__46150;
count__45997_46136 = G__46151;
i__45998_46137 = G__46152;
continue;
} else {
var vec__46012_46154 = cljs.core.first(seq__45995_46146__$1);
var __46155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46012_46154,(0),null);
var callback_46156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46012_46154,(1),null);
(callback_46156.cljs$core$IFn$_invoke$arity$1 ? callback_46156.cljs$core$IFn$_invoke$arity$1(report) : callback_46156.call(null, report));


var G__46157 = cljs.core.next(seq__45995_46146__$1);
var G__46158 = null;
var G__46159 = (0);
var G__46160 = (0);
seq__45995_46134 = G__46157;
chunk__45996_46135 = G__46158;
count__45997_46136 = G__46159;
i__45998_46137 = G__46160;
continue;
}
} else {
}
}
break;
}

return db;
}));

(datascript.conn.reset_conn_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_schema_BANG_ = (function datascript$conn$reset_schema_BANG_(conn,schema){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var db = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,datascript.db.with_schema,schema);
return db;
});
datascript.conn.listen_BANG_ = (function datascript$conn$listen_BANG_(var_args){
var G__46021 = arguments.length;
switch (G__46021) {
case 2:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
}));

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,callback], 0));

return key;
}));

(datascript.conn.listen_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.unlisten_BANG_ = (function datascript$conn$unlisten_BANG_(conn,key){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});

//# sourceMappingURL=datascript.conn.js.map
