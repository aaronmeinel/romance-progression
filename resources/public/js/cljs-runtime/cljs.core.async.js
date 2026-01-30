goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37219 = (function (f,blockable,meta37220){
this.f = f;
this.blockable = blockable;
this.meta37220 = meta37220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37221,meta37220__$1){
var self__ = this;
var _37221__$1 = this;
return (new cljs.core.async.t_cljs$core$async37219(self__.f,self__.blockable,meta37220__$1));
}));

(cljs.core.async.t_cljs$core$async37219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37221){
var self__ = this;
var _37221__$1 = this;
return self__.meta37220;
}));

(cljs.core.async.t_cljs$core$async37219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37220","meta37220",-702018662,null)], null);
}));

(cljs.core.async.t_cljs$core$async37219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37219");

(cljs.core.async.t_cljs$core$async37219.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async37219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37219.
 */
cljs.core.async.__GT_t_cljs$core$async37219 = (function cljs$core$async$__GT_t_cljs$core$async37219(f,blockable,meta37220){
return (new cljs.core.async.t_cljs$core$async37219(f,blockable,meta37220));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37205 = arguments.length;
switch (G__37205) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async37219(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37269 = arguments.length;
switch (G__37269) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37306 = arguments.length;
switch (G__37306) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37318 = arguments.length;
switch (G__37318) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41534 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41534) : fn1.call(null, val_41534));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41534) : fn1.call(null, val_41534));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37339 = arguments.length;
switch (G__37339) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___41542 = n;
var x_41543 = (0);
while(true){
if((x_41543 < n__5593__auto___41542)){
(a[x_41543] = x_41543);

var G__41544 = (x_41543 + (1));
x_41543 = G__41544;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37397 = (function (flag,meta37398){
this.flag = flag;
this.meta37398 = meta37398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37399,meta37398__$1){
var self__ = this;
var _37399__$1 = this;
return (new cljs.core.async.t_cljs$core$async37397(self__.flag,meta37398__$1));
}));

(cljs.core.async.t_cljs$core$async37397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37399){
var self__ = this;
var _37399__$1 = this;
return self__.meta37398;
}));

(cljs.core.async.t_cljs$core$async37397.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37398","meta37398",-954355470,null)], null);
}));

(cljs.core.async.t_cljs$core$async37397.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37397");

(cljs.core.async.t_cljs$core$async37397.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async37397");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37397.
 */
cljs.core.async.__GT_t_cljs$core$async37397 = (function cljs$core$async$__GT_t_cljs$core$async37397(flag,meta37398){
return (new cljs.core.async.t_cljs$core$async37397(flag,meta37398));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async37397(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37449 = (function (flag,cb,meta37450){
this.flag = flag;
this.cb = cb;
this.meta37450 = meta37450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37451,meta37450__$1){
var self__ = this;
var _37451__$1 = this;
return (new cljs.core.async.t_cljs$core$async37449(self__.flag,self__.cb,meta37450__$1));
}));

(cljs.core.async.t_cljs$core$async37449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37451){
var self__ = this;
var _37451__$1 = this;
return self__.meta37450;
}));

(cljs.core.async.t_cljs$core$async37449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37450","meta37450",-1978044272,null)], null);
}));

(cljs.core.async.t_cljs$core$async37449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37449");

(cljs.core.async.t_cljs$core$async37449.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async37449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37449.
 */
cljs.core.async.__GT_t_cljs$core$async37449 = (function cljs$core$async$__GT_t_cljs$core$async37449(flag,cb,meta37450){
return (new cljs.core.async.t_cljs$core$async37449(flag,cb,meta37450));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async37449(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37494_SHARP_){
var G__37501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37494_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37501) : fret.call(null, G__37501));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37495_SHARP_){
var G__37502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37495_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37502) : fret.call(null, G__37502));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41564 = (i + (1));
i = G__41564;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41565 = arguments.length;
var i__5727__auto___41566 = (0);
while(true){
if((i__5727__auto___41566 < len__5726__auto___41565)){
args__5732__auto__.push((arguments[i__5727__auto___41566]));

var G__41568 = (i__5727__auto___41566 + (1));
i__5727__auto___41566 = G__41568;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37514){
var map__37515 = p__37514;
var map__37515__$1 = cljs.core.__destructure_map(map__37515);
var opts = map__37515__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37504){
var G__37505 = cljs.core.first(seq37504);
var seq37504__$1 = cljs.core.next(seq37504);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37505,seq37504__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37542 = arguments.length;
switch (G__37542) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37082__auto___41580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_37641){
var state_val_37645 = (state_37641[(1)]);
if((state_val_37645 === (7))){
var inst_37622 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37664_41584 = state_37641__$1;
(statearr_37664_41584[(2)] = inst_37622);

(statearr_37664_41584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (1))){
var state_37641__$1 = state_37641;
var statearr_37665_41586 = state_37641__$1;
(statearr_37665_41586[(2)] = null);

(statearr_37665_41586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (4))){
var inst_37591 = (state_37641[(7)]);
var inst_37591__$1 = (state_37641[(2)]);
var inst_37598 = (inst_37591__$1 == null);
var state_37641__$1 = (function (){var statearr_37669 = state_37641;
(statearr_37669[(7)] = inst_37591__$1);

return statearr_37669;
})();
if(cljs.core.truth_(inst_37598)){
var statearr_37670_41587 = state_37641__$1;
(statearr_37670_41587[(1)] = (5));

} else {
var statearr_37671_41588 = state_37641__$1;
(statearr_37671_41588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (13))){
var state_37641__$1 = state_37641;
var statearr_37709_41589 = state_37641__$1;
(statearr_37709_41589[(2)] = null);

(statearr_37709_41589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (6))){
var inst_37591 = (state_37641[(7)]);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37641__$1,(11),to,inst_37591);
} else {
if((state_val_37645 === (3))){
var inst_37624 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37641__$1,inst_37624);
} else {
if((state_val_37645 === (12))){
var state_37641__$1 = state_37641;
var statearr_37710_41593 = state_37641__$1;
(statearr_37710_41593[(2)] = null);

(statearr_37710_41593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (2))){
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37641__$1,(4),from);
} else {
if((state_val_37645 === (11))){
var inst_37612 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37612)){
var statearr_37711_41594 = state_37641__$1;
(statearr_37711_41594[(1)] = (12));

} else {
var statearr_37712_41595 = state_37641__$1;
(statearr_37712_41595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (9))){
var state_37641__$1 = state_37641;
var statearr_37713_41596 = state_37641__$1;
(statearr_37713_41596[(2)] = null);

(statearr_37713_41596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (5))){
var state_37641__$1 = state_37641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37714_41597 = state_37641__$1;
(statearr_37714_41597[(1)] = (8));

} else {
var statearr_37715_41598 = state_37641__$1;
(statearr_37715_41598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (14))){
var inst_37620 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37719_41599 = state_37641__$1;
(statearr_37719_41599[(2)] = inst_37620);

(statearr_37719_41599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (10))){
var inst_37609 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37720_41600 = state_37641__$1;
(statearr_37720_41600[(2)] = inst_37609);

(statearr_37720_41600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37645 === (8))){
var inst_37606 = cljs.core.async.close_BANG_(to);
var state_37641__$1 = state_37641;
var statearr_37749_41601 = state_37641__$1;
(statearr_37749_41601[(2)] = inst_37606);

(statearr_37749_41601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_37750 = [null,null,null,null,null,null,null,null];
(statearr_37750[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_37750[(1)] = (1));

return statearr_37750;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_37641){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_37641);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e37753){var ex__35684__auto__ = e37753;
var statearr_37754_41602 = state_37641;
(statearr_37754_41602[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_37641[(4)]))){
var statearr_37760_41603 = state_37641;
(statearr_37760_41603[(1)] = cljs.core.first((state_37641[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41604 = state_37641;
state_37641 = G__41604;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_37641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_37641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_37762 = f__37083__auto__();
(statearr_37762[(6)] = c__37082__auto___41580);

return statearr_37762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37770){
var vec__37804 = p__37770;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(1),null);
var job = vec__37804;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37082__auto___41616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_37811){
var state_val_37813 = (state_37811[(1)]);
if((state_val_37813 === (1))){
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37811__$1,(2),res,v);
} else {
if((state_val_37813 === (2))){
var inst_37808 = (state_37811[(2)]);
var inst_37809 = cljs.core.async.close_BANG_(res);
var state_37811__$1 = (function (){var statearr_37818 = state_37811;
(statearr_37818[(7)] = inst_37808);

return statearr_37818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37811__$1,inst_37809);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0 = (function (){
var statearr_37823 = [null,null,null,null,null,null,null,null];
(statearr_37823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__);

(statearr_37823[(1)] = (1));

return statearr_37823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1 = (function (state_37811){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_37811);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e37824){var ex__35684__auto__ = e37824;
var statearr_37825_41622 = state_37811;
(statearr_37825_41622[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_37811[(4)]))){
var statearr_37828_41626 = state_37811;
(statearr_37828_41626[(1)] = cljs.core.first((state_37811[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41628 = state_37811;
state_37811 = G__41628;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = function(state_37811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1.call(this,state_37811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_37830 = f__37083__auto__();
(statearr_37830[(6)] = c__37082__auto___41616);

return statearr_37830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37835){
var vec__37837 = p__37835;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37837,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37837,(1),null);
var job = vec__37837;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___41631 = n;
var __41632 = (0);
while(true){
if((__41632 < n__5593__auto___41631)){
var G__37850_41633 = type;
var G__37850_41634__$1 = (((G__37850_41633 instanceof cljs.core.Keyword))?G__37850_41633.fqn:null);
switch (G__37850_41634__$1) {
case "compute":
var c__37082__auto___41640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41632,c__37082__auto___41640,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async){
return (function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = ((function (__41632,c__37082__auto___41640,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async){
return (function (state_37865){
var state_val_37869 = (state_37865[(1)]);
if((state_val_37869 === (1))){
var state_37865__$1 = state_37865;
var statearr_37875_41641 = state_37865__$1;
(statearr_37875_41641[(2)] = null);

(statearr_37875_41641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (2))){
var state_37865__$1 = state_37865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37865__$1,(4),jobs);
} else {
if((state_val_37869 === (3))){
var inst_37862 = (state_37865[(2)]);
var state_37865__$1 = state_37865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37865__$1,inst_37862);
} else {
if((state_val_37869 === (4))){
var inst_37854 = (state_37865[(2)]);
var inst_37855 = process__$1(inst_37854);
var state_37865__$1 = state_37865;
if(cljs.core.truth_(inst_37855)){
var statearr_37876_41642 = state_37865__$1;
(statearr_37876_41642[(1)] = (5));

} else {
var statearr_37877_41643 = state_37865__$1;
(statearr_37877_41643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (5))){
var state_37865__$1 = state_37865;
var statearr_37878_41644 = state_37865__$1;
(statearr_37878_41644[(2)] = null);

(statearr_37878_41644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (6))){
var state_37865__$1 = state_37865;
var statearr_37879_41646 = state_37865__$1;
(statearr_37879_41646[(2)] = null);

(statearr_37879_41646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (7))){
var inst_37860 = (state_37865[(2)]);
var state_37865__$1 = state_37865;
var statearr_37883_41647 = state_37865__$1;
(statearr_37883_41647[(2)] = inst_37860);

(statearr_37883_41647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41632,c__37082__auto___41640,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async))
;
return ((function (__41632,switch__35680__auto__,c__37082__auto___41640,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0 = (function (){
var statearr_37888 = [null,null,null,null,null,null,null];
(statearr_37888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__);

(statearr_37888[(1)] = (1));

return statearr_37888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1 = (function (state_37865){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_37865);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e37889){var ex__35684__auto__ = e37889;
var statearr_37890_41651 = state_37865;
(statearr_37890_41651[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_37865[(4)]))){
var statearr_37891_41652 = state_37865;
(statearr_37891_41652[(1)] = cljs.core.first((state_37865[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41653 = state_37865;
state_37865 = G__41653;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = function(state_37865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1.call(this,state_37865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__;
})()
;})(__41632,switch__35680__auto__,c__37082__auto___41640,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async))
})();
var state__37084__auto__ = (function (){var statearr_37892 = f__37083__auto__();
(statearr_37892[(6)] = c__37082__auto___41640);

return statearr_37892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
});})(__41632,c__37082__auto___41640,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async))
);


break;
case "async":
var c__37082__auto___41658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41632,c__37082__auto___41658,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async){
return (function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = ((function (__41632,c__37082__auto___41658,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async){
return (function (state_37906){
var state_val_37908 = (state_37906[(1)]);
if((state_val_37908 === (1))){
var state_37906__$1 = state_37906;
var statearr_37910_41659 = state_37906__$1;
(statearr_37910_41659[(2)] = null);

(statearr_37910_41659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37908 === (2))){
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37906__$1,(4),jobs);
} else {
if((state_val_37908 === (3))){
var inst_37904 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37906__$1,inst_37904);
} else {
if((state_val_37908 === (4))){
var inst_37895 = (state_37906[(2)]);
var inst_37896 = async(inst_37895);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37896)){
var statearr_37911_41664 = state_37906__$1;
(statearr_37911_41664[(1)] = (5));

} else {
var statearr_37912_41665 = state_37906__$1;
(statearr_37912_41665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37908 === (5))){
var state_37906__$1 = state_37906;
var statearr_37914_41666 = state_37906__$1;
(statearr_37914_41666[(2)] = null);

(statearr_37914_41666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37908 === (6))){
var state_37906__$1 = state_37906;
var statearr_37919_41667 = state_37906__$1;
(statearr_37919_41667[(2)] = null);

(statearr_37919_41667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37908 === (7))){
var inst_37902 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37920_41668 = state_37906__$1;
(statearr_37920_41668[(2)] = inst_37902);

(statearr_37920_41668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41632,c__37082__auto___41658,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async))
;
return ((function (__41632,switch__35680__auto__,c__37082__auto___41658,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0 = (function (){
var statearr_37921 = [null,null,null,null,null,null,null];
(statearr_37921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__);

(statearr_37921[(1)] = (1));

return statearr_37921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1 = (function (state_37906){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_37906);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e37923){var ex__35684__auto__ = e37923;
var statearr_37927_41669 = state_37906;
(statearr_37927_41669[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_37906[(4)]))){
var statearr_37928_41670 = state_37906;
(statearr_37928_41670[(1)] = cljs.core.first((state_37906[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41672 = state_37906;
state_37906 = G__41672;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = function(state_37906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1.call(this,state_37906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__;
})()
;})(__41632,switch__35680__auto__,c__37082__auto___41658,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async))
})();
var state__37084__auto__ = (function (){var statearr_37931 = f__37083__auto__();
(statearr_37931[(6)] = c__37082__auto___41658);

return statearr_37931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
});})(__41632,c__37082__auto___41658,G__37850_41633,G__37850_41634__$1,n__5593__auto___41631,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37850_41634__$1)].join('')));

}

var G__41674 = (__41632 + (1));
__41632 = G__41674;
continue;
} else {
}
break;
}

var c__37082__auto___41675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_37965){
var state_val_37966 = (state_37965[(1)]);
if((state_val_37966 === (7))){
var inst_37956 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
var statearr_37973_41677 = state_37965__$1;
(statearr_37973_41677[(2)] = inst_37956);

(statearr_37973_41677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (1))){
var state_37965__$1 = state_37965;
var statearr_37975_41678 = state_37965__$1;
(statearr_37975_41678[(2)] = null);

(statearr_37975_41678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (4))){
var inst_37939 = (state_37965[(7)]);
var inst_37939__$1 = (state_37965[(2)]);
var inst_37942 = (inst_37939__$1 == null);
var state_37965__$1 = (function (){var statearr_37980 = state_37965;
(statearr_37980[(7)] = inst_37939__$1);

return statearr_37980;
})();
if(cljs.core.truth_(inst_37942)){
var statearr_37981_41679 = state_37965__$1;
(statearr_37981_41679[(1)] = (5));

} else {
var statearr_37982_41680 = state_37965__$1;
(statearr_37982_41680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (6))){
var inst_37939 = (state_37965[(7)]);
var inst_37946 = (state_37965[(8)]);
var inst_37946__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37948 = [inst_37939,inst_37946__$1];
var inst_37949 = (new cljs.core.PersistentVector(null,2,(5),inst_37947,inst_37948,null));
var state_37965__$1 = (function (){var statearr_37983 = state_37965;
(statearr_37983[(8)] = inst_37946__$1);

return statearr_37983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37965__$1,(8),jobs,inst_37949);
} else {
if((state_val_37966 === (3))){
var inst_37958 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37965__$1,inst_37958);
} else {
if((state_val_37966 === (2))){
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37965__$1,(4),from);
} else {
if((state_val_37966 === (9))){
var inst_37953 = (state_37965[(2)]);
var state_37965__$1 = (function (){var statearr_37996 = state_37965;
(statearr_37996[(9)] = inst_37953);

return statearr_37996;
})();
var statearr_37997_41681 = state_37965__$1;
(statearr_37997_41681[(2)] = null);

(statearr_37997_41681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (5))){
var inst_37944 = cljs.core.async.close_BANG_(jobs);
var state_37965__$1 = state_37965;
var statearr_37998_41682 = state_37965__$1;
(statearr_37998_41682[(2)] = inst_37944);

(statearr_37998_41682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (8))){
var inst_37946 = (state_37965[(8)]);
var inst_37951 = (state_37965[(2)]);
var state_37965__$1 = (function (){var statearr_38001 = state_37965;
(statearr_38001[(10)] = inst_37951);

return statearr_38001;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37965__$1,(9),results,inst_37946);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0 = (function (){
var statearr_38010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__);

(statearr_38010[(1)] = (1));

return statearr_38010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1 = (function (state_37965){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_37965);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e38011){var ex__35684__auto__ = e38011;
var statearr_38012_41683 = state_37965;
(statearr_38012_41683[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_37965[(4)]))){
var statearr_38014_41685 = state_37965;
(statearr_38014_41685[(1)] = cljs.core.first((state_37965[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41687 = state_37965;
state_37965 = G__41687;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = function(state_37965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1.call(this,state_37965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_38017 = f__37083__auto__();
(statearr_38017[(6)] = c__37082__auto___41675);

return statearr_38017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


var c__37082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_38124){
var state_val_38128 = (state_38124[(1)]);
if((state_val_38128 === (7))){
var inst_38108 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38139_41688 = state_38124__$1;
(statearr_38139_41688[(2)] = inst_38108);

(statearr_38139_41688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (20))){
var state_38124__$1 = state_38124;
var statearr_38142_41689 = state_38124__$1;
(statearr_38142_41689[(2)] = null);

(statearr_38142_41689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (1))){
var state_38124__$1 = state_38124;
var statearr_38157_41690 = state_38124__$1;
(statearr_38157_41690[(2)] = null);

(statearr_38157_41690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (4))){
var inst_38024 = (state_38124[(7)]);
var inst_38024__$1 = (state_38124[(2)]);
var inst_38025 = (inst_38024__$1 == null);
var state_38124__$1 = (function (){var statearr_38159 = state_38124;
(statearr_38159[(7)] = inst_38024__$1);

return statearr_38159;
})();
if(cljs.core.truth_(inst_38025)){
var statearr_38172_41691 = state_38124__$1;
(statearr_38172_41691[(1)] = (5));

} else {
var statearr_38176_41692 = state_38124__$1;
(statearr_38176_41692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (15))){
var inst_38044 = (state_38124[(8)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38124__$1,(18),to,inst_38044);
} else {
if((state_val_38128 === (21))){
var inst_38099 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38191_41693 = state_38124__$1;
(statearr_38191_41693[(2)] = inst_38099);

(statearr_38191_41693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (13))){
var inst_38105 = (state_38124[(2)]);
var state_38124__$1 = (function (){var statearr_38193 = state_38124;
(statearr_38193[(9)] = inst_38105);

return statearr_38193;
})();
var statearr_38195_41694 = state_38124__$1;
(statearr_38195_41694[(2)] = null);

(statearr_38195_41694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (6))){
var inst_38024 = (state_38124[(7)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38124__$1,(11),inst_38024);
} else {
if((state_val_38128 === (17))){
var inst_38093 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38093)){
var statearr_38196_41695 = state_38124__$1;
(statearr_38196_41695[(1)] = (19));

} else {
var statearr_38197_41696 = state_38124__$1;
(statearr_38197_41696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (3))){
var inst_38110 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38124__$1,inst_38110);
} else {
if((state_val_38128 === (12))){
var inst_38041 = (state_38124[(10)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38124__$1,(14),inst_38041);
} else {
if((state_val_38128 === (2))){
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38124__$1,(4),results);
} else {
if((state_val_38128 === (19))){
var state_38124__$1 = state_38124;
var statearr_38203_41697 = state_38124__$1;
(statearr_38203_41697[(2)] = null);

(statearr_38203_41697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (11))){
var inst_38041 = (state_38124[(2)]);
var state_38124__$1 = (function (){var statearr_38207 = state_38124;
(statearr_38207[(10)] = inst_38041);

return statearr_38207;
})();
var statearr_38208_41698 = state_38124__$1;
(statearr_38208_41698[(2)] = null);

(statearr_38208_41698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (9))){
var state_38124__$1 = state_38124;
var statearr_38209_41699 = state_38124__$1;
(statearr_38209_41699[(2)] = null);

(statearr_38209_41699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (5))){
var state_38124__$1 = state_38124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38210_41700 = state_38124__$1;
(statearr_38210_41700[(1)] = (8));

} else {
var statearr_38211_41701 = state_38124__$1;
(statearr_38211_41701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (14))){
var inst_38081 = (state_38124[(11)]);
var inst_38044 = (state_38124[(8)]);
var inst_38044__$1 = (state_38124[(2)]);
var inst_38079 = (inst_38044__$1 == null);
var inst_38081__$1 = cljs.core.not(inst_38079);
var state_38124__$1 = (function (){var statearr_38212 = state_38124;
(statearr_38212[(11)] = inst_38081__$1);

(statearr_38212[(8)] = inst_38044__$1);

return statearr_38212;
})();
if(inst_38081__$1){
var statearr_38213_41702 = state_38124__$1;
(statearr_38213_41702[(1)] = (15));

} else {
var statearr_38214_41706 = state_38124__$1;
(statearr_38214_41706[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (16))){
var inst_38081 = (state_38124[(11)]);
var state_38124__$1 = state_38124;
var statearr_38215_41708 = state_38124__$1;
(statearr_38215_41708[(2)] = inst_38081);

(statearr_38215_41708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (10))){
var inst_38038 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38220_41709 = state_38124__$1;
(statearr_38220_41709[(2)] = inst_38038);

(statearr_38220_41709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (18))){
var inst_38086 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38221_41710 = state_38124__$1;
(statearr_38221_41710[(2)] = inst_38086);

(statearr_38221_41710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (8))){
var inst_38030 = cljs.core.async.close_BANG_(to);
var state_38124__$1 = state_38124;
var statearr_38225_41711 = state_38124__$1;
(statearr_38225_41711[(2)] = inst_38030);

(statearr_38225_41711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0 = (function (){
var statearr_38229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__);

(statearr_38229[(1)] = (1));

return statearr_38229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1 = (function (state_38124){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_38124);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e38234){var ex__35684__auto__ = e38234;
var statearr_38235_41713 = state_38124;
(statearr_38235_41713[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_38124[(4)]))){
var statearr_38237_41714 = state_38124;
(statearr_38237_41714[(1)] = cljs.core.first((state_38124[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41715 = state_38124;
state_38124 = G__41715;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__ = function(state_38124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1.call(this,state_38124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_38240 = f__37083__auto__();
(statearr_38240[(6)] = c__37082__auto__);

return statearr_38240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));

return c__37082__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38248 = arguments.length;
switch (G__38248) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38255 = arguments.length;
switch (G__38255) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38262 = arguments.length;
switch (G__38262) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37082__auto___41733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_38304){
var state_val_38305 = (state_38304[(1)]);
if((state_val_38305 === (7))){
var inst_38300 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
var statearr_38308_41737 = state_38304__$1;
(statearr_38308_41737[(2)] = inst_38300);

(statearr_38308_41737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (1))){
var state_38304__$1 = state_38304;
var statearr_38309_41738 = state_38304__$1;
(statearr_38309_41738[(2)] = null);

(statearr_38309_41738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (4))){
var inst_38279 = (state_38304[(7)]);
var inst_38279__$1 = (state_38304[(2)]);
var inst_38280 = (inst_38279__$1 == null);
var state_38304__$1 = (function (){var statearr_38311 = state_38304;
(statearr_38311[(7)] = inst_38279__$1);

return statearr_38311;
})();
if(cljs.core.truth_(inst_38280)){
var statearr_38313_41744 = state_38304__$1;
(statearr_38313_41744[(1)] = (5));

} else {
var statearr_38315_41747 = state_38304__$1;
(statearr_38315_41747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (13))){
var state_38304__$1 = state_38304;
var statearr_38319_41748 = state_38304__$1;
(statearr_38319_41748[(2)] = null);

(statearr_38319_41748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (6))){
var inst_38279 = (state_38304[(7)]);
var inst_38286 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38279) : p.call(null, inst_38279));
var state_38304__$1 = state_38304;
if(cljs.core.truth_(inst_38286)){
var statearr_38333_41750 = state_38304__$1;
(statearr_38333_41750[(1)] = (9));

} else {
var statearr_38334_41751 = state_38304__$1;
(statearr_38334_41751[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (3))){
var inst_38302 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38304__$1,inst_38302);
} else {
if((state_val_38305 === (12))){
var state_38304__$1 = state_38304;
var statearr_38349_41752 = state_38304__$1;
(statearr_38349_41752[(2)] = null);

(statearr_38349_41752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (2))){
var state_38304__$1 = state_38304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38304__$1,(4),ch);
} else {
if((state_val_38305 === (11))){
var inst_38279 = (state_38304[(7)]);
var inst_38290 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38304__$1,(8),inst_38290,inst_38279);
} else {
if((state_val_38305 === (9))){
var state_38304__$1 = state_38304;
var statearr_38351_41753 = state_38304__$1;
(statearr_38351_41753[(2)] = tc);

(statearr_38351_41753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (5))){
var inst_38283 = cljs.core.async.close_BANG_(tc);
var inst_38284 = cljs.core.async.close_BANG_(fc);
var state_38304__$1 = (function (){var statearr_38354 = state_38304;
(statearr_38354[(8)] = inst_38283);

return statearr_38354;
})();
var statearr_38355_41755 = state_38304__$1;
(statearr_38355_41755[(2)] = inst_38284);

(statearr_38355_41755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (14))){
var inst_38298 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
var statearr_38356_41756 = state_38304__$1;
(statearr_38356_41756[(2)] = inst_38298);

(statearr_38356_41756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (10))){
var state_38304__$1 = state_38304;
var statearr_38359_41757 = state_38304__$1;
(statearr_38359_41757[(2)] = fc);

(statearr_38359_41757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (8))){
var inst_38292 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
if(cljs.core.truth_(inst_38292)){
var statearr_38361_41758 = state_38304__$1;
(statearr_38361_41758[(1)] = (12));

} else {
var statearr_38362_41759 = state_38304__$1;
(statearr_38362_41759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_38364 = [null,null,null,null,null,null,null,null,null];
(statearr_38364[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_38364[(1)] = (1));

return statearr_38364;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_38304){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_38304);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e38365){var ex__35684__auto__ = e38365;
var statearr_38366_41760 = state_38304;
(statearr_38366_41760[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_38304[(4)]))){
var statearr_38367_41763 = state_38304;
(statearr_38367_41763[(1)] = cljs.core.first((state_38304[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41764 = state_38304;
state_38304 = G__41764;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_38304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_38304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_38384 = f__37083__auto__();
(statearr_38384[(6)] = c__37082__auto___41733);

return statearr_38384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_38408){
var state_val_38409 = (state_38408[(1)]);
if((state_val_38409 === (7))){
var inst_38404 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38414_41767 = state_38408__$1;
(statearr_38414_41767[(2)] = inst_38404);

(statearr_38414_41767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (1))){
var inst_38385 = init;
var inst_38386 = inst_38385;
var state_38408__$1 = (function (){var statearr_38417 = state_38408;
(statearr_38417[(7)] = inst_38386);

return statearr_38417;
})();
var statearr_38418_41771 = state_38408__$1;
(statearr_38418_41771[(2)] = null);

(statearr_38418_41771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (4))){
var inst_38391 = (state_38408[(8)]);
var inst_38391__$1 = (state_38408[(2)]);
var inst_38392 = (inst_38391__$1 == null);
var state_38408__$1 = (function (){var statearr_38419 = state_38408;
(statearr_38419[(8)] = inst_38391__$1);

return statearr_38419;
})();
if(cljs.core.truth_(inst_38392)){
var statearr_38420_41774 = state_38408__$1;
(statearr_38420_41774[(1)] = (5));

} else {
var statearr_38421_41775 = state_38408__$1;
(statearr_38421_41775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (6))){
var inst_38395 = (state_38408[(9)]);
var inst_38386 = (state_38408[(7)]);
var inst_38391 = (state_38408[(8)]);
var inst_38395__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38386,inst_38391) : f.call(null, inst_38386,inst_38391));
var inst_38396 = cljs.core.reduced_QMARK_(inst_38395__$1);
var state_38408__$1 = (function (){var statearr_38422 = state_38408;
(statearr_38422[(9)] = inst_38395__$1);

return statearr_38422;
})();
if(inst_38396){
var statearr_38424_41776 = state_38408__$1;
(statearr_38424_41776[(1)] = (8));

} else {
var statearr_38427_41777 = state_38408__$1;
(statearr_38427_41777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (3))){
var inst_38406 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38408__$1,inst_38406);
} else {
if((state_val_38409 === (2))){
var state_38408__$1 = state_38408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38408__$1,(4),ch);
} else {
if((state_val_38409 === (9))){
var inst_38395 = (state_38408[(9)]);
var inst_38386 = inst_38395;
var state_38408__$1 = (function (){var statearr_38436 = state_38408;
(statearr_38436[(7)] = inst_38386);

return statearr_38436;
})();
var statearr_38440_41779 = state_38408__$1;
(statearr_38440_41779[(2)] = null);

(statearr_38440_41779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (5))){
var inst_38386 = (state_38408[(7)]);
var state_38408__$1 = state_38408;
var statearr_38444_41780 = state_38408__$1;
(statearr_38444_41780[(2)] = inst_38386);

(statearr_38444_41780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (10))){
var inst_38402 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38447_41782 = state_38408__$1;
(statearr_38447_41782[(2)] = inst_38402);

(statearr_38447_41782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (8))){
var inst_38395 = (state_38408[(9)]);
var inst_38398 = cljs.core.deref(inst_38395);
var state_38408__$1 = state_38408;
var statearr_38451_41786 = state_38408__$1;
(statearr_38451_41786[(2)] = inst_38398);

(statearr_38451_41786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35681__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35681__auto____0 = (function (){
var statearr_38452 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38452[(0)] = cljs$core$async$reduce_$_state_machine__35681__auto__);

(statearr_38452[(1)] = (1));

return statearr_38452;
});
var cljs$core$async$reduce_$_state_machine__35681__auto____1 = (function (state_38408){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_38408);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e38453){var ex__35684__auto__ = e38453;
var statearr_38454_41794 = state_38408;
(statearr_38454_41794[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_38408[(4)]))){
var statearr_38460_41795 = state_38408;
(statearr_38460_41795[(1)] = cljs.core.first((state_38408[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41796 = state_38408;
state_38408 = G__41796;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35681__auto__ = function(state_38408){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35681__auto____1.call(this,state_38408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35681__auto____0;
cljs$core$async$reduce_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35681__auto____1;
return cljs$core$async$reduce_$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_38463 = f__37083__auto__();
(statearr_38463[(6)] = c__37082__auto__);

return statearr_38463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));

return c__37082__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__37082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_38475){
var state_val_38476 = (state_38475[(1)]);
if((state_val_38476 === (1))){
var inst_38469 = cljs.core.async.reduce(f__$1,init,ch);
var state_38475__$1 = state_38475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38475__$1,(2),inst_38469);
} else {
if((state_val_38476 === (2))){
var inst_38472 = (state_38475[(2)]);
var inst_38473 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38472) : f__$1.call(null, inst_38472));
var state_38475__$1 = state_38475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38475__$1,inst_38473);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35681__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35681__auto____0 = (function (){
var statearr_38487 = [null,null,null,null,null,null,null];
(statearr_38487[(0)] = cljs$core$async$transduce_$_state_machine__35681__auto__);

(statearr_38487[(1)] = (1));

return statearr_38487;
});
var cljs$core$async$transduce_$_state_machine__35681__auto____1 = (function (state_38475){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_38475);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e38489){var ex__35684__auto__ = e38489;
var statearr_38493_41800 = state_38475;
(statearr_38493_41800[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_38475[(4)]))){
var statearr_38495_41801 = state_38475;
(statearr_38495_41801[(1)] = cljs.core.first((state_38475[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41802 = state_38475;
state_38475 = G__41802;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35681__auto__ = function(state_38475){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35681__auto____1.call(this,state_38475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35681__auto____0;
cljs$core$async$transduce_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35681__auto____1;
return cljs$core$async$transduce_$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_38498 = f__37083__auto__();
(statearr_38498[(6)] = c__37082__auto__);

return statearr_38498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));

return c__37082__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38508 = arguments.length;
switch (G__38508) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_38569){
var state_val_38572 = (state_38569[(1)]);
if((state_val_38572 === (7))){
var inst_38550 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38576_41806 = state_38569__$1;
(statearr_38576_41806[(2)] = inst_38550);

(statearr_38576_41806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (1))){
var inst_38533 = cljs.core.seq(coll);
var inst_38534 = inst_38533;
var state_38569__$1 = (function (){var statearr_38577 = state_38569;
(statearr_38577[(7)] = inst_38534);

return statearr_38577;
})();
var statearr_38578_41808 = state_38569__$1;
(statearr_38578_41808[(2)] = null);

(statearr_38578_41808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (4))){
var inst_38534 = (state_38569[(7)]);
var inst_38548 = cljs.core.first(inst_38534);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38569__$1,(7),ch,inst_38548);
} else {
if((state_val_38572 === (13))){
var inst_38563 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38579_41810 = state_38569__$1;
(statearr_38579_41810[(2)] = inst_38563);

(statearr_38579_41810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (6))){
var inst_38553 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
if(cljs.core.truth_(inst_38553)){
var statearr_38583_41811 = state_38569__$1;
(statearr_38583_41811[(1)] = (8));

} else {
var statearr_38587_41812 = state_38569__$1;
(statearr_38587_41812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (3))){
var inst_38567 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38569__$1,inst_38567);
} else {
if((state_val_38572 === (12))){
var state_38569__$1 = state_38569;
var statearr_38591_41813 = state_38569__$1;
(statearr_38591_41813[(2)] = null);

(statearr_38591_41813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (2))){
var inst_38534 = (state_38569[(7)]);
var state_38569__$1 = state_38569;
if(cljs.core.truth_(inst_38534)){
var statearr_38596_41814 = state_38569__$1;
(statearr_38596_41814[(1)] = (4));

} else {
var statearr_38598_41815 = state_38569__$1;
(statearr_38598_41815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (11))){
var inst_38560 = cljs.core.async.close_BANG_(ch);
var state_38569__$1 = state_38569;
var statearr_38599_41816 = state_38569__$1;
(statearr_38599_41816[(2)] = inst_38560);

(statearr_38599_41816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (9))){
var state_38569__$1 = state_38569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38600_41817 = state_38569__$1;
(statearr_38600_41817[(1)] = (11));

} else {
var statearr_38603_41818 = state_38569__$1;
(statearr_38603_41818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (5))){
var inst_38534 = (state_38569[(7)]);
var state_38569__$1 = state_38569;
var statearr_38605_41820 = state_38569__$1;
(statearr_38605_41820[(2)] = inst_38534);

(statearr_38605_41820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (10))){
var inst_38565 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38607_41822 = state_38569__$1;
(statearr_38607_41822[(2)] = inst_38565);

(statearr_38607_41822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (8))){
var inst_38534 = (state_38569[(7)]);
var inst_38555 = cljs.core.next(inst_38534);
var inst_38534__$1 = inst_38555;
var state_38569__$1 = (function (){var statearr_38608 = state_38569;
(statearr_38608[(7)] = inst_38534__$1);

return statearr_38608;
})();
var statearr_38609_41823 = state_38569__$1;
(statearr_38609_41823[(2)] = null);

(statearr_38609_41823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_38610 = [null,null,null,null,null,null,null,null];
(statearr_38610[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_38610[(1)] = (1));

return statearr_38610;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_38569){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_38569);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e38612){var ex__35684__auto__ = e38612;
var statearr_38613_41827 = state_38569;
(statearr_38613_41827[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_38569[(4)]))){
var statearr_38614_41828 = state_38569;
(statearr_38614_41828[(1)] = cljs.core.first((state_38569[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41829 = state_38569;
state_38569 = G__41829;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_38569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_38569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_38615 = f__37083__auto__();
(statearr_38615[(6)] = c__37082__auto__);

return statearr_38615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));

return c__37082__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38622 = arguments.length;
switch (G__38622) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41831 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41831(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41832 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41832(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41833 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41833(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41836 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41836(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38730 = (function (ch,cs,meta38731){
this.ch = ch;
this.cs = cs;
this.meta38731 = meta38731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38732,meta38731__$1){
var self__ = this;
var _38732__$1 = this;
return (new cljs.core.async.t_cljs$core$async38730(self__.ch,self__.cs,meta38731__$1));
}));

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38732){
var self__ = this;
var _38732__$1 = this;
return self__.meta38731;
}));

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38731","meta38731",-1530068160,null)], null);
}));

(cljs.core.async.t_cljs$core$async38730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38730");

(cljs.core.async.t_cljs$core$async38730.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async38730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38730.
 */
cljs.core.async.__GT_t_cljs$core$async38730 = (function cljs$core$async$__GT_t_cljs$core$async38730(ch,cs,meta38731){
return (new cljs.core.async.t_cljs$core$async38730(ch,cs,meta38731));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async38730(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37082__auto___41842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_38936){
var state_val_38937 = (state_38936[(1)]);
if((state_val_38937 === (7))){
var inst_38913 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38957_41843 = state_38936__$1;
(statearr_38957_41843[(2)] = inst_38913);

(statearr_38957_41843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (20))){
var inst_38800 = (state_38936[(7)]);
var inst_38812 = cljs.core.first(inst_38800);
var inst_38813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38812,(0),null);
var inst_38814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38812,(1),null);
var state_38936__$1 = (function (){var statearr_38959 = state_38936;
(statearr_38959[(8)] = inst_38813);

return statearr_38959;
})();
if(cljs.core.truth_(inst_38814)){
var statearr_38960_41845 = state_38936__$1;
(statearr_38960_41845[(1)] = (22));

} else {
var statearr_38961_41847 = state_38936__$1;
(statearr_38961_41847[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (27))){
var inst_38856 = (state_38936[(9)]);
var inst_38861 = (state_38936[(10)]);
var inst_38854 = (state_38936[(11)]);
var inst_38768 = (state_38936[(12)]);
var inst_38861__$1 = cljs.core._nth(inst_38854,inst_38856);
var inst_38862 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38861__$1,inst_38768,done);
var state_38936__$1 = (function (){var statearr_38979 = state_38936;
(statearr_38979[(10)] = inst_38861__$1);

return statearr_38979;
})();
if(cljs.core.truth_(inst_38862)){
var statearr_38980_41848 = state_38936__$1;
(statearr_38980_41848[(1)] = (30));

} else {
var statearr_38981_41849 = state_38936__$1;
(statearr_38981_41849[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (1))){
var state_38936__$1 = state_38936;
var statearr_38982_41850 = state_38936__$1;
(statearr_38982_41850[(2)] = null);

(statearr_38982_41850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (24))){
var inst_38800 = (state_38936[(7)]);
var inst_38831 = (state_38936[(2)]);
var inst_38832 = cljs.core.next(inst_38800);
var inst_38777 = inst_38832;
var inst_38778 = null;
var inst_38779 = (0);
var inst_38780 = (0);
var state_38936__$1 = (function (){var statearr_38986 = state_38936;
(statearr_38986[(13)] = inst_38777);

(statearr_38986[(14)] = inst_38778);

(statearr_38986[(15)] = inst_38831);

(statearr_38986[(16)] = inst_38780);

(statearr_38986[(17)] = inst_38779);

return statearr_38986;
})();
var statearr_38992_41852 = state_38936__$1;
(statearr_38992_41852[(2)] = null);

(statearr_38992_41852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (39))){
var state_38936__$1 = state_38936;
var statearr_39004_41853 = state_38936__$1;
(statearr_39004_41853[(2)] = null);

(statearr_39004_41853[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (4))){
var inst_38768 = (state_38936[(12)]);
var inst_38768__$1 = (state_38936[(2)]);
var inst_38769 = (inst_38768__$1 == null);
var state_38936__$1 = (function (){var statearr_39006 = state_38936;
(statearr_39006[(12)] = inst_38768__$1);

return statearr_39006;
})();
if(cljs.core.truth_(inst_38769)){
var statearr_39007_41856 = state_38936__$1;
(statearr_39007_41856[(1)] = (5));

} else {
var statearr_39008_41857 = state_38936__$1;
(statearr_39008_41857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (15))){
var inst_38777 = (state_38936[(13)]);
var inst_38778 = (state_38936[(14)]);
var inst_38780 = (state_38936[(16)]);
var inst_38779 = (state_38936[(17)]);
var inst_38796 = (state_38936[(2)]);
var inst_38797 = (inst_38780 + (1));
var tmp38993 = inst_38777;
var tmp38994 = inst_38778;
var tmp38995 = inst_38779;
var inst_38777__$1 = tmp38993;
var inst_38778__$1 = tmp38994;
var inst_38779__$1 = tmp38995;
var inst_38780__$1 = inst_38797;
var state_38936__$1 = (function (){var statearr_39011 = state_38936;
(statearr_39011[(13)] = inst_38777__$1);

(statearr_39011[(14)] = inst_38778__$1);

(statearr_39011[(18)] = inst_38796);

(statearr_39011[(16)] = inst_38780__$1);

(statearr_39011[(17)] = inst_38779__$1);

return statearr_39011;
})();
var statearr_39012_41858 = state_38936__$1;
(statearr_39012_41858[(2)] = null);

(statearr_39012_41858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (21))){
var inst_38835 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39017_41859 = state_38936__$1;
(statearr_39017_41859[(2)] = inst_38835);

(statearr_39017_41859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (31))){
var inst_38861 = (state_38936[(10)]);
var inst_38865 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38861);
var state_38936__$1 = state_38936;
var statearr_39020_41861 = state_38936__$1;
(statearr_39020_41861[(2)] = inst_38865);

(statearr_39020_41861[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (32))){
var inst_38856 = (state_38936[(9)]);
var inst_38854 = (state_38936[(11)]);
var inst_38853 = (state_38936[(19)]);
var inst_38855 = (state_38936[(20)]);
var inst_38867 = (state_38936[(2)]);
var inst_38868 = (inst_38856 + (1));
var tmp39014 = inst_38854;
var tmp39015 = inst_38853;
var tmp39016 = inst_38855;
var inst_38853__$1 = tmp39015;
var inst_38854__$1 = tmp39014;
var inst_38855__$1 = tmp39016;
var inst_38856__$1 = inst_38868;
var state_38936__$1 = (function (){var statearr_39021 = state_38936;
(statearr_39021[(9)] = inst_38856__$1);

(statearr_39021[(11)] = inst_38854__$1);

(statearr_39021[(19)] = inst_38853__$1);

(statearr_39021[(20)] = inst_38855__$1);

(statearr_39021[(21)] = inst_38867);

return statearr_39021;
})();
var statearr_39027_41862 = state_38936__$1;
(statearr_39027_41862[(2)] = null);

(statearr_39027_41862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (40))){
var inst_38882 = (state_38936[(22)]);
var inst_38886 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38882);
var state_38936__$1 = state_38936;
var statearr_39030_41863 = state_38936__$1;
(statearr_39030_41863[(2)] = inst_38886);

(statearr_39030_41863[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (33))){
var inst_38871 = (state_38936[(23)]);
var inst_38873 = cljs.core.chunked_seq_QMARK_(inst_38871);
var state_38936__$1 = state_38936;
if(inst_38873){
var statearr_39031_41865 = state_38936__$1;
(statearr_39031_41865[(1)] = (36));

} else {
var statearr_39033_41866 = state_38936__$1;
(statearr_39033_41866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (13))){
var inst_38790 = (state_38936[(24)]);
var inst_38793 = cljs.core.async.close_BANG_(inst_38790);
var state_38936__$1 = state_38936;
var statearr_39034_41867 = state_38936__$1;
(statearr_39034_41867[(2)] = inst_38793);

(statearr_39034_41867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (22))){
var inst_38813 = (state_38936[(8)]);
var inst_38828 = cljs.core.async.close_BANG_(inst_38813);
var state_38936__$1 = state_38936;
var statearr_39035_41868 = state_38936__$1;
(statearr_39035_41868[(2)] = inst_38828);

(statearr_39035_41868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (36))){
var inst_38871 = (state_38936[(23)]);
var inst_38875 = cljs.core.chunk_first(inst_38871);
var inst_38876 = cljs.core.chunk_rest(inst_38871);
var inst_38877 = cljs.core.count(inst_38875);
var inst_38853 = inst_38876;
var inst_38854 = inst_38875;
var inst_38855 = inst_38877;
var inst_38856 = (0);
var state_38936__$1 = (function (){var statearr_39037 = state_38936;
(statearr_39037[(9)] = inst_38856);

(statearr_39037[(11)] = inst_38854);

(statearr_39037[(19)] = inst_38853);

(statearr_39037[(20)] = inst_38855);

return statearr_39037;
})();
var statearr_39041_41869 = state_38936__$1;
(statearr_39041_41869[(2)] = null);

(statearr_39041_41869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (41))){
var inst_38871 = (state_38936[(23)]);
var inst_38888 = (state_38936[(2)]);
var inst_38889 = cljs.core.next(inst_38871);
var inst_38853 = inst_38889;
var inst_38854 = null;
var inst_38855 = (0);
var inst_38856 = (0);
var state_38936__$1 = (function (){var statearr_39045 = state_38936;
(statearr_39045[(9)] = inst_38856);

(statearr_39045[(25)] = inst_38888);

(statearr_39045[(11)] = inst_38854);

(statearr_39045[(19)] = inst_38853);

(statearr_39045[(20)] = inst_38855);

return statearr_39045;
})();
var statearr_39046_41870 = state_38936__$1;
(statearr_39046_41870[(2)] = null);

(statearr_39046_41870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (43))){
var state_38936__$1 = state_38936;
var statearr_39047_41871 = state_38936__$1;
(statearr_39047_41871[(2)] = null);

(statearr_39047_41871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (29))){
var inst_38897 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39049_41872 = state_38936__$1;
(statearr_39049_41872[(2)] = inst_38897);

(statearr_39049_41872[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (44))){
var inst_38906 = (state_38936[(2)]);
var state_38936__$1 = (function (){var statearr_39050 = state_38936;
(statearr_39050[(26)] = inst_38906);

return statearr_39050;
})();
var statearr_39051_41874 = state_38936__$1;
(statearr_39051_41874[(2)] = null);

(statearr_39051_41874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (6))){
var inst_38845 = (state_38936[(27)]);
var inst_38844 = cljs.core.deref(cs);
var inst_38845__$1 = cljs.core.keys(inst_38844);
var inst_38846 = cljs.core.count(inst_38845__$1);
var inst_38847 = cljs.core.reset_BANG_(dctr,inst_38846);
var inst_38852 = cljs.core.seq(inst_38845__$1);
var inst_38853 = inst_38852;
var inst_38854 = null;
var inst_38855 = (0);
var inst_38856 = (0);
var state_38936__$1 = (function (){var statearr_39052 = state_38936;
(statearr_39052[(28)] = inst_38847);

(statearr_39052[(9)] = inst_38856);

(statearr_39052[(11)] = inst_38854);

(statearr_39052[(19)] = inst_38853);

(statearr_39052[(20)] = inst_38855);

(statearr_39052[(27)] = inst_38845__$1);

return statearr_39052;
})();
var statearr_39053_41875 = state_38936__$1;
(statearr_39053_41875[(2)] = null);

(statearr_39053_41875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (28))){
var inst_38853 = (state_38936[(19)]);
var inst_38871 = (state_38936[(23)]);
var inst_38871__$1 = cljs.core.seq(inst_38853);
var state_38936__$1 = (function (){var statearr_39057 = state_38936;
(statearr_39057[(23)] = inst_38871__$1);

return statearr_39057;
})();
if(inst_38871__$1){
var statearr_39058_41876 = state_38936__$1;
(statearr_39058_41876[(1)] = (33));

} else {
var statearr_39060_41877 = state_38936__$1;
(statearr_39060_41877[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (25))){
var inst_38856 = (state_38936[(9)]);
var inst_38855 = (state_38936[(20)]);
var inst_38858 = (inst_38856 < inst_38855);
var inst_38859 = inst_38858;
var state_38936__$1 = state_38936;
if(cljs.core.truth_(inst_38859)){
var statearr_39062_41878 = state_38936__$1;
(statearr_39062_41878[(1)] = (27));

} else {
var statearr_39063_41879 = state_38936__$1;
(statearr_39063_41879[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (34))){
var state_38936__$1 = state_38936;
var statearr_39083_41880 = state_38936__$1;
(statearr_39083_41880[(2)] = null);

(statearr_39083_41880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (17))){
var state_38936__$1 = state_38936;
var statearr_39086_41881 = state_38936__$1;
(statearr_39086_41881[(2)] = null);

(statearr_39086_41881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (3))){
var inst_38918 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38936__$1,inst_38918);
} else {
if((state_val_38937 === (12))){
var inst_38840 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39093_41882 = state_38936__$1;
(statearr_39093_41882[(2)] = inst_38840);

(statearr_39093_41882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (2))){
var state_38936__$1 = state_38936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38936__$1,(4),ch);
} else {
if((state_val_38937 === (23))){
var state_38936__$1 = state_38936;
var statearr_39105_41883 = state_38936__$1;
(statearr_39105_41883[(2)] = null);

(statearr_39105_41883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (35))){
var inst_38895 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39106_41884 = state_38936__$1;
(statearr_39106_41884[(2)] = inst_38895);

(statearr_39106_41884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (19))){
var inst_38800 = (state_38936[(7)]);
var inst_38804 = cljs.core.chunk_first(inst_38800);
var inst_38805 = cljs.core.chunk_rest(inst_38800);
var inst_38806 = cljs.core.count(inst_38804);
var inst_38777 = inst_38805;
var inst_38778 = inst_38804;
var inst_38779 = inst_38806;
var inst_38780 = (0);
var state_38936__$1 = (function (){var statearr_39109 = state_38936;
(statearr_39109[(13)] = inst_38777);

(statearr_39109[(14)] = inst_38778);

(statearr_39109[(16)] = inst_38780);

(statearr_39109[(17)] = inst_38779);

return statearr_39109;
})();
var statearr_39110_41886 = state_38936__$1;
(statearr_39110_41886[(2)] = null);

(statearr_39110_41886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (11))){
var inst_38777 = (state_38936[(13)]);
var inst_38800 = (state_38936[(7)]);
var inst_38800__$1 = cljs.core.seq(inst_38777);
var state_38936__$1 = (function (){var statearr_39201 = state_38936;
(statearr_39201[(7)] = inst_38800__$1);

return statearr_39201;
})();
if(inst_38800__$1){
var statearr_39202_41887 = state_38936__$1;
(statearr_39202_41887[(1)] = (16));

} else {
var statearr_39203_41888 = state_38936__$1;
(statearr_39203_41888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (9))){
var inst_38842 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39204_41889 = state_38936__$1;
(statearr_39204_41889[(2)] = inst_38842);

(statearr_39204_41889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (5))){
var inst_38775 = cljs.core.deref(cs);
var inst_38776 = cljs.core.seq(inst_38775);
var inst_38777 = inst_38776;
var inst_38778 = null;
var inst_38779 = (0);
var inst_38780 = (0);
var state_38936__$1 = (function (){var statearr_39206 = state_38936;
(statearr_39206[(13)] = inst_38777);

(statearr_39206[(14)] = inst_38778);

(statearr_39206[(16)] = inst_38780);

(statearr_39206[(17)] = inst_38779);

return statearr_39206;
})();
var statearr_39207_41892 = state_38936__$1;
(statearr_39207_41892[(2)] = null);

(statearr_39207_41892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (14))){
var state_38936__$1 = state_38936;
var statearr_39208_41893 = state_38936__$1;
(statearr_39208_41893[(2)] = null);

(statearr_39208_41893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (45))){
var inst_38903 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39209_41894 = state_38936__$1;
(statearr_39209_41894[(2)] = inst_38903);

(statearr_39209_41894[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (26))){
var inst_38845 = (state_38936[(27)]);
var inst_38899 = (state_38936[(2)]);
var inst_38900 = cljs.core.seq(inst_38845);
var state_38936__$1 = (function (){var statearr_39210 = state_38936;
(statearr_39210[(29)] = inst_38899);

return statearr_39210;
})();
if(inst_38900){
var statearr_39211_41895 = state_38936__$1;
(statearr_39211_41895[(1)] = (42));

} else {
var statearr_39212_41896 = state_38936__$1;
(statearr_39212_41896[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (16))){
var inst_38800 = (state_38936[(7)]);
var inst_38802 = cljs.core.chunked_seq_QMARK_(inst_38800);
var state_38936__$1 = state_38936;
if(inst_38802){
var statearr_39213_41897 = state_38936__$1;
(statearr_39213_41897[(1)] = (19));

} else {
var statearr_39214_41899 = state_38936__$1;
(statearr_39214_41899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (38))){
var inst_38892 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39215_41900 = state_38936__$1;
(statearr_39215_41900[(2)] = inst_38892);

(statearr_39215_41900[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (30))){
var state_38936__$1 = state_38936;
var statearr_39216_41901 = state_38936__$1;
(statearr_39216_41901[(2)] = null);

(statearr_39216_41901[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (10))){
var inst_38778 = (state_38936[(14)]);
var inst_38780 = (state_38936[(16)]);
var inst_38789 = cljs.core._nth(inst_38778,inst_38780);
var inst_38790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38789,(0),null);
var inst_38791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38789,(1),null);
var state_38936__$1 = (function (){var statearr_39217 = state_38936;
(statearr_39217[(24)] = inst_38790);

return statearr_39217;
})();
if(cljs.core.truth_(inst_38791)){
var statearr_39218_41902 = state_38936__$1;
(statearr_39218_41902[(1)] = (13));

} else {
var statearr_39219_41903 = state_38936__$1;
(statearr_39219_41903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (18))){
var inst_38838 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_39220_41904 = state_38936__$1;
(statearr_39220_41904[(2)] = inst_38838);

(statearr_39220_41904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (42))){
var state_38936__$1 = state_38936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38936__$1,(45),dchan);
} else {
if((state_val_38937 === (37))){
var inst_38882 = (state_38936[(22)]);
var inst_38871 = (state_38936[(23)]);
var inst_38768 = (state_38936[(12)]);
var inst_38882__$1 = cljs.core.first(inst_38871);
var inst_38883 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38882__$1,inst_38768,done);
var state_38936__$1 = (function (){var statearr_39221 = state_38936;
(statearr_39221[(22)] = inst_38882__$1);

return statearr_39221;
})();
if(cljs.core.truth_(inst_38883)){
var statearr_39222_41905 = state_38936__$1;
(statearr_39222_41905[(1)] = (39));

} else {
var statearr_39223_41906 = state_38936__$1;
(statearr_39223_41906[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (8))){
var inst_38780 = (state_38936[(16)]);
var inst_38779 = (state_38936[(17)]);
var inst_38782 = (inst_38780 < inst_38779);
var inst_38783 = inst_38782;
var state_38936__$1 = state_38936;
if(cljs.core.truth_(inst_38783)){
var statearr_39224_41907 = state_38936__$1;
(statearr_39224_41907[(1)] = (10));

} else {
var statearr_39225_41908 = state_38936__$1;
(statearr_39225_41908[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35681__auto__ = null;
var cljs$core$async$mult_$_state_machine__35681__auto____0 = (function (){
var statearr_39229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39229[(0)] = cljs$core$async$mult_$_state_machine__35681__auto__);

(statearr_39229[(1)] = (1));

return statearr_39229;
});
var cljs$core$async$mult_$_state_machine__35681__auto____1 = (function (state_38936){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_38936);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e39230){var ex__35684__auto__ = e39230;
var statearr_39231_41909 = state_38936;
(statearr_39231_41909[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_38936[(4)]))){
var statearr_39232_41910 = state_38936;
(statearr_39232_41910[(1)] = cljs.core.first((state_38936[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41911 = state_38936;
state_38936 = G__41911;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35681__auto__ = function(state_38936){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35681__auto____1.call(this,state_38936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35681__auto____0;
cljs$core$async$mult_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35681__auto____1;
return cljs$core$async$mult_$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_39233 = f__37083__auto__();
(statearr_39233[(6)] = c__37082__auto___41842);

return statearr_39233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39236 = arguments.length;
switch (G__39236) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41917 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41917(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41920 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41920(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41923 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41923(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41925 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41925(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41926 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41926(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41929 = arguments.length;
var i__5727__auto___41930 = (0);
while(true){
if((i__5727__auto___41930 < len__5726__auto___41929)){
args__5732__auto__.push((arguments[i__5727__auto___41930]));

var G__41933 = (i__5727__auto___41930 + (1));
i__5727__auto___41930 = G__41933;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39261){
var map__39262 = p__39261;
var map__39262__$1 = cljs.core.__destructure_map(map__39262);
var opts = map__39262__$1;
var statearr_39263_41935 = state;
(statearr_39263_41935[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39264_41936 = state;
(statearr_39264_41936[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_39265_41937 = state;
(statearr_39265_41937[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39245){
var G__39246 = cljs.core.first(seq39245);
var seq39245__$1 = cljs.core.next(seq39245);
var G__39247 = cljs.core.first(seq39245__$1);
var seq39245__$2 = cljs.core.next(seq39245__$1);
var G__39248 = cljs.core.first(seq39245__$2);
var seq39245__$3 = cljs.core.next(seq39245__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39246,G__39247,G__39248,seq39245__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39296 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39297){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39297 = meta39297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39298,meta39297__$1){
var self__ = this;
var _39298__$1 = this;
return (new cljs.core.async.t_cljs$core$async39296(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39297__$1));
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39298){
var self__ = this;
var _39298__$1 = this;
return self__.meta39297;
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async39296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async39296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39297","meta39297",1541536482,null)], null);
}));

(cljs.core.async.t_cljs$core$async39296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39296");

(cljs.core.async.t_cljs$core$async39296.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39296.
 */
cljs.core.async.__GT_t_cljs$core$async39296 = (function cljs$core$async$__GT_t_cljs$core$async39296(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39297){
return (new cljs.core.async.t_cljs$core$async39296(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39297));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async39296(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37082__auto___41944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_39389){
var state_val_39390 = (state_39389[(1)]);
if((state_val_39390 === (7))){
var inst_39347 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
if(cljs.core.truth_(inst_39347)){
var statearr_39391_41945 = state_39389__$1;
(statearr_39391_41945[(1)] = (8));

} else {
var statearr_39392_41946 = state_39389__$1;
(statearr_39392_41946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (20))){
var inst_39338 = (state_39389[(7)]);
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39389__$1,(23),out,inst_39338);
} else {
if((state_val_39390 === (1))){
var inst_39315 = calc_state();
var inst_39316 = cljs.core.__destructure_map(inst_39315);
var inst_39320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39316,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39316,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39316,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39323 = inst_39315;
var state_39389__$1 = (function (){var statearr_39401 = state_39389;
(statearr_39401[(8)] = inst_39320);

(statearr_39401[(9)] = inst_39321);

(statearr_39401[(10)] = inst_39323);

(statearr_39401[(11)] = inst_39322);

return statearr_39401;
})();
var statearr_39405_41947 = state_39389__$1;
(statearr_39405_41947[(2)] = null);

(statearr_39405_41947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (24))){
var inst_39326 = (state_39389[(12)]);
var inst_39323 = inst_39326;
var state_39389__$1 = (function (){var statearr_39406 = state_39389;
(statearr_39406[(10)] = inst_39323);

return statearr_39406;
})();
var statearr_39408_41948 = state_39389__$1;
(statearr_39408_41948[(2)] = null);

(statearr_39408_41948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (4))){
var inst_39338 = (state_39389[(7)]);
var inst_39341 = (state_39389[(13)]);
var inst_39336 = (state_39389[(2)]);
var inst_39338__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39336,(0),null);
var inst_39339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39336,(1),null);
var inst_39341__$1 = (inst_39338__$1 == null);
var state_39389__$1 = (function (){var statearr_39411 = state_39389;
(statearr_39411[(7)] = inst_39338__$1);

(statearr_39411[(14)] = inst_39339);

(statearr_39411[(13)] = inst_39341__$1);

return statearr_39411;
})();
if(cljs.core.truth_(inst_39341__$1)){
var statearr_39415_41949 = state_39389__$1;
(statearr_39415_41949[(1)] = (5));

} else {
var statearr_39416_41950 = state_39389__$1;
(statearr_39416_41950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (15))){
var inst_39361 = (state_39389[(15)]);
var inst_39329 = (state_39389[(16)]);
var inst_39361__$1 = cljs.core.empty_QMARK_(inst_39329);
var state_39389__$1 = (function (){var statearr_39420 = state_39389;
(statearr_39420[(15)] = inst_39361__$1);

return statearr_39420;
})();
if(inst_39361__$1){
var statearr_39421_41951 = state_39389__$1;
(statearr_39421_41951[(1)] = (17));

} else {
var statearr_39422_41952 = state_39389__$1;
(statearr_39422_41952[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (21))){
var inst_39326 = (state_39389[(12)]);
var inst_39323 = inst_39326;
var state_39389__$1 = (function (){var statearr_39423 = state_39389;
(statearr_39423[(10)] = inst_39323);

return statearr_39423;
})();
var statearr_39425_41953 = state_39389__$1;
(statearr_39425_41953[(2)] = null);

(statearr_39425_41953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (13))){
var inst_39354 = (state_39389[(2)]);
var inst_39355 = calc_state();
var inst_39323 = inst_39355;
var state_39389__$1 = (function (){var statearr_39427 = state_39389;
(statearr_39427[(10)] = inst_39323);

(statearr_39427[(17)] = inst_39354);

return statearr_39427;
})();
var statearr_39429_41954 = state_39389__$1;
(statearr_39429_41954[(2)] = null);

(statearr_39429_41954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (22))){
var inst_39382 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39438_41956 = state_39389__$1;
(statearr_39438_41956[(2)] = inst_39382);

(statearr_39438_41956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (6))){
var inst_39339 = (state_39389[(14)]);
var inst_39345 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39339,change);
var state_39389__$1 = state_39389;
var statearr_39455_41957 = state_39389__$1;
(statearr_39455_41957[(2)] = inst_39345);

(statearr_39455_41957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (25))){
var state_39389__$1 = state_39389;
var statearr_39456_41958 = state_39389__$1;
(statearr_39456_41958[(2)] = null);

(statearr_39456_41958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (17))){
var inst_39339 = (state_39389[(14)]);
var inst_39330 = (state_39389[(18)]);
var inst_39363 = (inst_39330.cljs$core$IFn$_invoke$arity$1 ? inst_39330.cljs$core$IFn$_invoke$arity$1(inst_39339) : inst_39330.call(null, inst_39339));
var inst_39364 = cljs.core.not(inst_39363);
var state_39389__$1 = state_39389;
var statearr_39460_41959 = state_39389__$1;
(statearr_39460_41959[(2)] = inst_39364);

(statearr_39460_41959[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (3))){
var inst_39387 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39389__$1,inst_39387);
} else {
if((state_val_39390 === (12))){
var state_39389__$1 = state_39389;
var statearr_39461_41960 = state_39389__$1;
(statearr_39461_41960[(2)] = null);

(statearr_39461_41960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (2))){
var inst_39326 = (state_39389[(12)]);
var inst_39323 = (state_39389[(10)]);
var inst_39326__$1 = cljs.core.__destructure_map(inst_39323);
var inst_39329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39326__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39326__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39326__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39389__$1 = (function (){var statearr_39462 = state_39389;
(statearr_39462[(12)] = inst_39326__$1);

(statearr_39462[(18)] = inst_39330);

(statearr_39462[(16)] = inst_39329);

return statearr_39462;
})();
return cljs.core.async.ioc_alts_BANG_(state_39389__$1,(4),inst_39331);
} else {
if((state_val_39390 === (23))){
var inst_39372 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
if(cljs.core.truth_(inst_39372)){
var statearr_39464_41961 = state_39389__$1;
(statearr_39464_41961[(1)] = (24));

} else {
var statearr_39465_41962 = state_39389__$1;
(statearr_39465_41962[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (19))){
var inst_39367 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39469_41963 = state_39389__$1;
(statearr_39469_41963[(2)] = inst_39367);

(statearr_39469_41963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (11))){
var inst_39339 = (state_39389[(14)]);
var inst_39351 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39339);
var state_39389__$1 = state_39389;
var statearr_39470_41964 = state_39389__$1;
(statearr_39470_41964[(2)] = inst_39351);

(statearr_39470_41964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (9))){
var inst_39358 = (state_39389[(19)]);
var inst_39339 = (state_39389[(14)]);
var inst_39329 = (state_39389[(16)]);
var inst_39358__$1 = (inst_39329.cljs$core$IFn$_invoke$arity$1 ? inst_39329.cljs$core$IFn$_invoke$arity$1(inst_39339) : inst_39329.call(null, inst_39339));
var state_39389__$1 = (function (){var statearr_39472 = state_39389;
(statearr_39472[(19)] = inst_39358__$1);

return statearr_39472;
})();
if(cljs.core.truth_(inst_39358__$1)){
var statearr_39473_41966 = state_39389__$1;
(statearr_39473_41966[(1)] = (14));

} else {
var statearr_39474_41967 = state_39389__$1;
(statearr_39474_41967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (5))){
var inst_39341 = (state_39389[(13)]);
var state_39389__$1 = state_39389;
var statearr_39475_41968 = state_39389__$1;
(statearr_39475_41968[(2)] = inst_39341);

(statearr_39475_41968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (14))){
var inst_39358 = (state_39389[(19)]);
var state_39389__$1 = state_39389;
var statearr_39476_41969 = state_39389__$1;
(statearr_39476_41969[(2)] = inst_39358);

(statearr_39476_41969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (26))){
var inst_39378 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39478_41970 = state_39389__$1;
(statearr_39478_41970[(2)] = inst_39378);

(statearr_39478_41970[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (16))){
var inst_39369 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
if(cljs.core.truth_(inst_39369)){
var statearr_39479_41971 = state_39389__$1;
(statearr_39479_41971[(1)] = (20));

} else {
var statearr_39480_41972 = state_39389__$1;
(statearr_39480_41972[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (10))){
var inst_39384 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39482_41973 = state_39389__$1;
(statearr_39482_41973[(2)] = inst_39384);

(statearr_39482_41973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (18))){
var inst_39361 = (state_39389[(15)]);
var state_39389__$1 = state_39389;
var statearr_39483_41974 = state_39389__$1;
(statearr_39483_41974[(2)] = inst_39361);

(statearr_39483_41974[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (8))){
var inst_39338 = (state_39389[(7)]);
var inst_39349 = (inst_39338 == null);
var state_39389__$1 = state_39389;
if(cljs.core.truth_(inst_39349)){
var statearr_39488_41975 = state_39389__$1;
(statearr_39488_41975[(1)] = (11));

} else {
var statearr_39489_41976 = state_39389__$1;
(statearr_39489_41976[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35681__auto__ = null;
var cljs$core$async$mix_$_state_machine__35681__auto____0 = (function (){
var statearr_39492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39492[(0)] = cljs$core$async$mix_$_state_machine__35681__auto__);

(statearr_39492[(1)] = (1));

return statearr_39492;
});
var cljs$core$async$mix_$_state_machine__35681__auto____1 = (function (state_39389){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_39389);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e39494){var ex__35684__auto__ = e39494;
var statearr_39495_41978 = state_39389;
(statearr_39495_41978[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_39389[(4)]))){
var statearr_39499_41979 = state_39389;
(statearr_39499_41979[(1)] = cljs.core.first((state_39389[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41980 = state_39389;
state_39389 = G__41980;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35681__auto__ = function(state_39389){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35681__auto____1.call(this,state_39389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35681__auto____0;
cljs$core$async$mix_$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35681__auto____1;
return cljs$core$async$mix_$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_39503 = f__37083__auto__();
(statearr_39503[(6)] = c__37082__auto___41944);

return statearr_39503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41984 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41984(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41989 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41989(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41992 = (function() {
var G__41993 = null;
var G__41993__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41993__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41993 = function(p,v){
switch(arguments.length){
case 1:
return G__41993__1.call(this,p);
case 2:
return G__41993__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41993.cljs$core$IFn$_invoke$arity$1 = G__41993__1;
G__41993.cljs$core$IFn$_invoke$arity$2 = G__41993__2;
return G__41993;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39554 = arguments.length;
switch (G__39554) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41992(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41992(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39572 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39573){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39573 = meta39573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39574,meta39573__$1){
var self__ = this;
var _39574__$1 = this;
return (new cljs.core.async.t_cljs$core$async39572(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39573__$1));
}));

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39574){
var self__ = this;
var _39574__$1 = this;
return self__.meta39573;
}));

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39573","meta39573",1702128691,null)], null);
}));

(cljs.core.async.t_cljs$core$async39572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39572");

(cljs.core.async.t_cljs$core$async39572.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39572.
 */
cljs.core.async.__GT_t_cljs$core$async39572 = (function cljs$core$async$__GT_t_cljs$core$async39572(ch,topic_fn,buf_fn,mults,ensure_mult,meta39573){
return (new cljs.core.async.t_cljs$core$async39572(ch,topic_fn,buf_fn,mults,ensure_mult,meta39573));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39569 = arguments.length;
switch (G__39569) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39563_SHARP_){
if(cljs.core.truth_((p1__39563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39563_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39563_SHARP_.call(null, topic)))){
return p1__39563_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39563_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async39572(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37082__auto___42001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_39706){
var state_val_39707 = (state_39706[(1)]);
if((state_val_39707 === (7))){
var inst_39701 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39713_42005 = state_39706__$1;
(statearr_39713_42005[(2)] = inst_39701);

(statearr_39713_42005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (20))){
var state_39706__$1 = state_39706;
var statearr_39714_42006 = state_39706__$1;
(statearr_39714_42006[(2)] = null);

(statearr_39714_42006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (1))){
var state_39706__$1 = state_39706;
var statearr_39717_42008 = state_39706__$1;
(statearr_39717_42008[(2)] = null);

(statearr_39717_42008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (24))){
var inst_39684 = (state_39706[(7)]);
var inst_39693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39684);
var state_39706__$1 = state_39706;
var statearr_39720_42009 = state_39706__$1;
(statearr_39720_42009[(2)] = inst_39693);

(statearr_39720_42009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (4))){
var inst_39594 = (state_39706[(8)]);
var inst_39594__$1 = (state_39706[(2)]);
var inst_39595 = (inst_39594__$1 == null);
var state_39706__$1 = (function (){var statearr_39722 = state_39706;
(statearr_39722[(8)] = inst_39594__$1);

return statearr_39722;
})();
if(cljs.core.truth_(inst_39595)){
var statearr_39723_42013 = state_39706__$1;
(statearr_39723_42013[(1)] = (5));

} else {
var statearr_39725_42014 = state_39706__$1;
(statearr_39725_42014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (15))){
var inst_39677 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39727_42016 = state_39706__$1;
(statearr_39727_42016[(2)] = inst_39677);

(statearr_39727_42016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (21))){
var inst_39698 = (state_39706[(2)]);
var state_39706__$1 = (function (){var statearr_39728 = state_39706;
(statearr_39728[(9)] = inst_39698);

return statearr_39728;
})();
var statearr_39729_42017 = state_39706__$1;
(statearr_39729_42017[(2)] = null);

(statearr_39729_42017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (13))){
var inst_39631 = (state_39706[(10)]);
var inst_39634 = cljs.core.chunked_seq_QMARK_(inst_39631);
var state_39706__$1 = state_39706;
if(inst_39634){
var statearr_39730_42018 = state_39706__$1;
(statearr_39730_42018[(1)] = (16));

} else {
var statearr_39731_42019 = state_39706__$1;
(statearr_39731_42019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (22))){
var inst_39690 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
if(cljs.core.truth_(inst_39690)){
var statearr_39732_42021 = state_39706__$1;
(statearr_39732_42021[(1)] = (23));

} else {
var statearr_39734_42022 = state_39706__$1;
(statearr_39734_42022[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (6))){
var inst_39594 = (state_39706[(8)]);
var inst_39686 = (state_39706[(11)]);
var inst_39684 = (state_39706[(7)]);
var inst_39684__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39594) : topic_fn.call(null, inst_39594));
var inst_39685 = cljs.core.deref(mults);
var inst_39686__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39685,inst_39684__$1);
var state_39706__$1 = (function (){var statearr_39736 = state_39706;
(statearr_39736[(11)] = inst_39686__$1);

(statearr_39736[(7)] = inst_39684__$1);

return statearr_39736;
})();
if(cljs.core.truth_(inst_39686__$1)){
var statearr_39737_42027 = state_39706__$1;
(statearr_39737_42027[(1)] = (19));

} else {
var statearr_39740_42028 = state_39706__$1;
(statearr_39740_42028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (25))){
var inst_39695 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39743_42029 = state_39706__$1;
(statearr_39743_42029[(2)] = inst_39695);

(statearr_39743_42029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (17))){
var inst_39631 = (state_39706[(10)]);
var inst_39665 = cljs.core.first(inst_39631);
var inst_39666 = cljs.core.async.muxch_STAR_(inst_39665);
var inst_39668 = cljs.core.async.close_BANG_(inst_39666);
var inst_39671 = cljs.core.next(inst_39631);
var inst_39607 = inst_39671;
var inst_39608 = null;
var inst_39609 = (0);
var inst_39610 = (0);
var state_39706__$1 = (function (){var statearr_39749 = state_39706;
(statearr_39749[(12)] = inst_39609);

(statearr_39749[(13)] = inst_39668);

(statearr_39749[(14)] = inst_39607);

(statearr_39749[(15)] = inst_39610);

(statearr_39749[(16)] = inst_39608);

return statearr_39749;
})();
var statearr_39752_42032 = state_39706__$1;
(statearr_39752_42032[(2)] = null);

(statearr_39752_42032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (3))){
var inst_39703 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39706__$1,inst_39703);
} else {
if((state_val_39707 === (12))){
var inst_39679 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39754_42037 = state_39706__$1;
(statearr_39754_42037[(2)] = inst_39679);

(statearr_39754_42037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (2))){
var state_39706__$1 = state_39706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39706__$1,(4),ch);
} else {
if((state_val_39707 === (23))){
var state_39706__$1 = state_39706;
var statearr_39757_42038 = state_39706__$1;
(statearr_39757_42038[(2)] = null);

(statearr_39757_42038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (19))){
var inst_39594 = (state_39706[(8)]);
var inst_39686 = (state_39706[(11)]);
var inst_39688 = cljs.core.async.muxch_STAR_(inst_39686);
var state_39706__$1 = state_39706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39706__$1,(22),inst_39688,inst_39594);
} else {
if((state_val_39707 === (11))){
var inst_39607 = (state_39706[(14)]);
var inst_39631 = (state_39706[(10)]);
var inst_39631__$1 = cljs.core.seq(inst_39607);
var state_39706__$1 = (function (){var statearr_39765 = state_39706;
(statearr_39765[(10)] = inst_39631__$1);

return statearr_39765;
})();
if(inst_39631__$1){
var statearr_39766_42040 = state_39706__$1;
(statearr_39766_42040[(1)] = (13));

} else {
var statearr_39767_42041 = state_39706__$1;
(statearr_39767_42041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (9))){
var inst_39681 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39768_42042 = state_39706__$1;
(statearr_39768_42042[(2)] = inst_39681);

(statearr_39768_42042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (5))){
var inst_39604 = cljs.core.deref(mults);
var inst_39605 = cljs.core.vals(inst_39604);
var inst_39606 = cljs.core.seq(inst_39605);
var inst_39607 = inst_39606;
var inst_39608 = null;
var inst_39609 = (0);
var inst_39610 = (0);
var state_39706__$1 = (function (){var statearr_39771 = state_39706;
(statearr_39771[(12)] = inst_39609);

(statearr_39771[(14)] = inst_39607);

(statearr_39771[(15)] = inst_39610);

(statearr_39771[(16)] = inst_39608);

return statearr_39771;
})();
var statearr_39772_42043 = state_39706__$1;
(statearr_39772_42043[(2)] = null);

(statearr_39772_42043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (14))){
var state_39706__$1 = state_39706;
var statearr_39781_42044 = state_39706__$1;
(statearr_39781_42044[(2)] = null);

(statearr_39781_42044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (16))){
var inst_39631 = (state_39706[(10)]);
var inst_39636 = cljs.core.chunk_first(inst_39631);
var inst_39660 = cljs.core.chunk_rest(inst_39631);
var inst_39661 = cljs.core.count(inst_39636);
var inst_39607 = inst_39660;
var inst_39608 = inst_39636;
var inst_39609 = inst_39661;
var inst_39610 = (0);
var state_39706__$1 = (function (){var statearr_39786 = state_39706;
(statearr_39786[(12)] = inst_39609);

(statearr_39786[(14)] = inst_39607);

(statearr_39786[(15)] = inst_39610);

(statearr_39786[(16)] = inst_39608);

return statearr_39786;
})();
var statearr_39789_42045 = state_39706__$1;
(statearr_39789_42045[(2)] = null);

(statearr_39789_42045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (10))){
var inst_39609 = (state_39706[(12)]);
var inst_39607 = (state_39706[(14)]);
var inst_39610 = (state_39706[(15)]);
var inst_39608 = (state_39706[(16)]);
var inst_39615 = cljs.core._nth(inst_39608,inst_39610);
var inst_39616 = cljs.core.async.muxch_STAR_(inst_39615);
var inst_39617 = cljs.core.async.close_BANG_(inst_39616);
var inst_39618 = (inst_39610 + (1));
var tmp39775 = inst_39609;
var tmp39776 = inst_39607;
var tmp39777 = inst_39608;
var inst_39607__$1 = tmp39776;
var inst_39608__$1 = tmp39777;
var inst_39609__$1 = tmp39775;
var inst_39610__$1 = inst_39618;
var state_39706__$1 = (function (){var statearr_39794 = state_39706;
(statearr_39794[(12)] = inst_39609__$1);

(statearr_39794[(17)] = inst_39617);

(statearr_39794[(14)] = inst_39607__$1);

(statearr_39794[(15)] = inst_39610__$1);

(statearr_39794[(16)] = inst_39608__$1);

return statearr_39794;
})();
var statearr_39795_42049 = state_39706__$1;
(statearr_39795_42049[(2)] = null);

(statearr_39795_42049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (18))){
var inst_39674 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39800_42050 = state_39706__$1;
(statearr_39800_42050[(2)] = inst_39674);

(statearr_39800_42050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (8))){
var inst_39609 = (state_39706[(12)]);
var inst_39610 = (state_39706[(15)]);
var inst_39612 = (inst_39610 < inst_39609);
var inst_39613 = inst_39612;
var state_39706__$1 = state_39706;
if(cljs.core.truth_(inst_39613)){
var statearr_39802_42052 = state_39706__$1;
(statearr_39802_42052[(1)] = (10));

} else {
var statearr_39803_42053 = state_39706__$1;
(statearr_39803_42053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_39806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39806[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_39806[(1)] = (1));

return statearr_39806;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_39706){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_39706);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e39807){var ex__35684__auto__ = e39807;
var statearr_39808_42057 = state_39706;
(statearr_39808_42057[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_39706[(4)]))){
var statearr_39809_42058 = state_39706;
(statearr_39809_42058[(1)] = cljs.core.first((state_39706[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42059 = state_39706;
state_39706 = G__42059;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_39706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_39706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_39814 = f__37083__auto__();
(statearr_39814[(6)] = c__37082__auto___42001);

return statearr_39814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39816 = arguments.length;
switch (G__39816) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39913 = arguments.length;
switch (G__39913) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39915 = arguments.length;
switch (G__39915) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__37082__auto___42070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_39982){
var state_val_39983 = (state_39982[(1)]);
if((state_val_39983 === (7))){
var state_39982__$1 = state_39982;
var statearr_39988_42071 = state_39982__$1;
(statearr_39988_42071[(2)] = null);

(statearr_39988_42071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (1))){
var state_39982__$1 = state_39982;
var statearr_39999_42073 = state_39982__$1;
(statearr_39999_42073[(2)] = null);

(statearr_39999_42073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (4))){
var inst_39924 = (state_39982[(7)]);
var inst_39923 = (state_39982[(8)]);
var inst_39926 = (inst_39924 < inst_39923);
var state_39982__$1 = state_39982;
if(cljs.core.truth_(inst_39926)){
var statearr_40007_42075 = state_39982__$1;
(statearr_40007_42075[(1)] = (6));

} else {
var statearr_40008_42076 = state_39982__$1;
(statearr_40008_42076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (15))){
var inst_39960 = (state_39982[(9)]);
var inst_39967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39960);
var state_39982__$1 = state_39982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39982__$1,(17),out,inst_39967);
} else {
if((state_val_39983 === (13))){
var inst_39960 = (state_39982[(9)]);
var inst_39960__$1 = (state_39982[(2)]);
var inst_39962 = cljs.core.some(cljs.core.nil_QMARK_,inst_39960__$1);
var state_39982__$1 = (function (){var statearr_40013 = state_39982;
(statearr_40013[(9)] = inst_39960__$1);

return statearr_40013;
})();
if(cljs.core.truth_(inst_39962)){
var statearr_40014_42077 = state_39982__$1;
(statearr_40014_42077[(1)] = (14));

} else {
var statearr_40015_42078 = state_39982__$1;
(statearr_40015_42078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (6))){
var state_39982__$1 = state_39982;
var statearr_40016_42080 = state_39982__$1;
(statearr_40016_42080[(2)] = null);

(statearr_40016_42080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (17))){
var inst_39969 = (state_39982[(2)]);
var state_39982__$1 = (function (){var statearr_40023 = state_39982;
(statearr_40023[(10)] = inst_39969);

return statearr_40023;
})();
var statearr_40024_42082 = state_39982__$1;
(statearr_40024_42082[(2)] = null);

(statearr_40024_42082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (3))){
var inst_39974 = (state_39982[(2)]);
var state_39982__$1 = state_39982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39982__$1,inst_39974);
} else {
if((state_val_39983 === (12))){
var _ = (function (){var statearr_40027 = state_39982;
(statearr_40027[(4)] = cljs.core.rest((state_39982[(4)])));

return statearr_40027;
})();
var state_39982__$1 = state_39982;
var ex40020 = (state_39982__$1[(2)]);
var statearr_40031_42083 = state_39982__$1;
(statearr_40031_42083[(5)] = ex40020);


if((ex40020 instanceof Object)){
var statearr_40044_42084 = state_39982__$1;
(statearr_40044_42084[(1)] = (11));

(statearr_40044_42084[(5)] = null);

} else {
throw ex40020;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (2))){
var inst_39922 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39923 = cnt;
var inst_39924 = (0);
var state_39982__$1 = (function (){var statearr_40054 = state_39982;
(statearr_40054[(7)] = inst_39924);

(statearr_40054[(11)] = inst_39922);

(statearr_40054[(8)] = inst_39923);

return statearr_40054;
})();
var statearr_40063_42085 = state_39982__$1;
(statearr_40063_42085[(2)] = null);

(statearr_40063_42085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (11))){
var inst_39936 = (state_39982[(2)]);
var inst_39937 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39982__$1 = (function (){var statearr_40067 = state_39982;
(statearr_40067[(12)] = inst_39936);

return statearr_40067;
})();
var statearr_40072_42086 = state_39982__$1;
(statearr_40072_42086[(2)] = inst_39937);

(statearr_40072_42086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (9))){
var inst_39924 = (state_39982[(7)]);
var _ = (function (){var statearr_40075 = state_39982;
(statearr_40075[(4)] = cljs.core.cons((12),(state_39982[(4)])));

return statearr_40075;
})();
var inst_39944 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39924) : chs__$1.call(null, inst_39924));
var inst_39945 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39924) : done.call(null, inst_39924));
var inst_39946 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39944,inst_39945);
var ___$1 = (function (){var statearr_40079 = state_39982;
(statearr_40079[(4)] = cljs.core.rest((state_39982[(4)])));

return statearr_40079;
})();
var state_39982__$1 = state_39982;
var statearr_40081_42087 = state_39982__$1;
(statearr_40081_42087[(2)] = inst_39946);

(statearr_40081_42087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (5))){
var inst_39958 = (state_39982[(2)]);
var state_39982__$1 = (function (){var statearr_40083 = state_39982;
(statearr_40083[(13)] = inst_39958);

return statearr_40083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39982__$1,(13),dchan);
} else {
if((state_val_39983 === (14))){
var inst_39965 = cljs.core.async.close_BANG_(out);
var state_39982__$1 = state_39982;
var statearr_40091_42088 = state_39982__$1;
(statearr_40091_42088[(2)] = inst_39965);

(statearr_40091_42088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (16))){
var inst_39972 = (state_39982[(2)]);
var state_39982__$1 = state_39982;
var statearr_40094_42092 = state_39982__$1;
(statearr_40094_42092[(2)] = inst_39972);

(statearr_40094_42092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (10))){
var inst_39924 = (state_39982[(7)]);
var inst_39949 = (state_39982[(2)]);
var inst_39950 = (inst_39924 + (1));
var inst_39924__$1 = inst_39950;
var state_39982__$1 = (function (){var statearr_40098 = state_39982;
(statearr_40098[(7)] = inst_39924__$1);

(statearr_40098[(14)] = inst_39949);

return statearr_40098;
})();
var statearr_40100_42094 = state_39982__$1;
(statearr_40100_42094[(2)] = null);

(statearr_40100_42094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39983 === (8))){
var inst_39954 = (state_39982[(2)]);
var state_39982__$1 = state_39982;
var statearr_40102_42095 = state_39982__$1;
(statearr_40102_42095[(2)] = inst_39954);

(statearr_40102_42095[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_40108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40108[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_40108[(1)] = (1));

return statearr_40108;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_39982){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_39982);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e40111){var ex__35684__auto__ = e40111;
var statearr_40112_42101 = state_39982;
(statearr_40112_42101[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_39982[(4)]))){
var statearr_40114_42102 = state_39982;
(statearr_40114_42102[(1)] = cljs.core.first((state_39982[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42103 = state_39982;
state_39982 = G__42103;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_39982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_39982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_40120 = f__37083__auto__();
(statearr_40120[(6)] = c__37082__auto___42070);

return statearr_40120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40141 = arguments.length;
switch (G__40141) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37082__auto___42108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_40214){
var state_val_40215 = (state_40214[(1)]);
if((state_val_40215 === (7))){
var inst_40167 = (state_40214[(7)]);
var inst_40168 = (state_40214[(8)]);
var inst_40167__$1 = (state_40214[(2)]);
var inst_40168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40167__$1,(0),null);
var inst_40169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40167__$1,(1),null);
var inst_40172 = (inst_40168__$1 == null);
var state_40214__$1 = (function (){var statearr_40233 = state_40214;
(statearr_40233[(7)] = inst_40167__$1);

(statearr_40233[(9)] = inst_40169);

(statearr_40233[(8)] = inst_40168__$1);

return statearr_40233;
})();
if(cljs.core.truth_(inst_40172)){
var statearr_40234_42109 = state_40214__$1;
(statearr_40234_42109[(1)] = (8));

} else {
var statearr_40235_42110 = state_40214__$1;
(statearr_40235_42110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (1))){
var inst_40151 = cljs.core.vec(chs);
var inst_40152 = inst_40151;
var state_40214__$1 = (function (){var statearr_40236 = state_40214;
(statearr_40236[(10)] = inst_40152);

return statearr_40236;
})();
var statearr_40237_42112 = state_40214__$1;
(statearr_40237_42112[(2)] = null);

(statearr_40237_42112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (4))){
var inst_40152 = (state_40214[(10)]);
var state_40214__$1 = state_40214;
return cljs.core.async.ioc_alts_BANG_(state_40214__$1,(7),inst_40152);
} else {
if((state_val_40215 === (6))){
var inst_40193 = (state_40214[(2)]);
var state_40214__$1 = state_40214;
var statearr_40253_42116 = state_40214__$1;
(statearr_40253_42116[(2)] = inst_40193);

(statearr_40253_42116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (3))){
var inst_40195 = (state_40214[(2)]);
var state_40214__$1 = state_40214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40214__$1,inst_40195);
} else {
if((state_val_40215 === (2))){
var inst_40152 = (state_40214[(10)]);
var inst_40158 = cljs.core.count(inst_40152);
var inst_40159 = (inst_40158 > (0));
var state_40214__$1 = state_40214;
if(cljs.core.truth_(inst_40159)){
var statearr_40281_42120 = state_40214__$1;
(statearr_40281_42120[(1)] = (4));

} else {
var statearr_40282_42122 = state_40214__$1;
(statearr_40282_42122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (11))){
var inst_40152 = (state_40214[(10)]);
var inst_40186 = (state_40214[(2)]);
var tmp40259 = inst_40152;
var inst_40152__$1 = tmp40259;
var state_40214__$1 = (function (){var statearr_40290 = state_40214;
(statearr_40290[(10)] = inst_40152__$1);

(statearr_40290[(11)] = inst_40186);

return statearr_40290;
})();
var statearr_40294_42124 = state_40214__$1;
(statearr_40294_42124[(2)] = null);

(statearr_40294_42124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (9))){
var inst_40168 = (state_40214[(8)]);
var state_40214__$1 = state_40214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40214__$1,(11),out,inst_40168);
} else {
if((state_val_40215 === (5))){
var inst_40191 = cljs.core.async.close_BANG_(out);
var state_40214__$1 = state_40214;
var statearr_40316_42130 = state_40214__$1;
(statearr_40316_42130[(2)] = inst_40191);

(statearr_40316_42130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (10))){
var inst_40189 = (state_40214[(2)]);
var state_40214__$1 = state_40214;
var statearr_40321_42131 = state_40214__$1;
(statearr_40321_42131[(2)] = inst_40189);

(statearr_40321_42131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40215 === (8))){
var inst_40152 = (state_40214[(10)]);
var inst_40167 = (state_40214[(7)]);
var inst_40169 = (state_40214[(9)]);
var inst_40168 = (state_40214[(8)]);
var inst_40181 = (function (){var cs = inst_40152;
var vec__40162 = inst_40167;
var v = inst_40168;
var c = inst_40169;
return (function (p1__40131_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40131_SHARP_);
});
})();
var inst_40182 = cljs.core.filterv(inst_40181,inst_40152);
var inst_40152__$1 = inst_40182;
var state_40214__$1 = (function (){var statearr_40342 = state_40214;
(statearr_40342[(10)] = inst_40152__$1);

return statearr_40342;
})();
var statearr_40348_42140 = state_40214__$1;
(statearr_40348_42140[(2)] = null);

(statearr_40348_42140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_40349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40349[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_40349[(1)] = (1));

return statearr_40349;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_40214){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_40214);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e40353){var ex__35684__auto__ = e40353;
var statearr_40354_42145 = state_40214;
(statearr_40354_42145[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_40214[(4)]))){
var statearr_40369_42147 = state_40214;
(statearr_40369_42147[(1)] = cljs.core.first((state_40214[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42149 = state_40214;
state_40214 = G__42149;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_40214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_40214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_40380 = f__37083__auto__();
(statearr_40380[(6)] = c__37082__auto___42108);

return statearr_40380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40397 = arguments.length;
switch (G__40397) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37082__auto___42154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_40445){
var state_val_40447 = (state_40445[(1)]);
if((state_val_40447 === (7))){
var inst_40423 = (state_40445[(7)]);
var inst_40423__$1 = (state_40445[(2)]);
var inst_40427 = (inst_40423__$1 == null);
var inst_40428 = cljs.core.not(inst_40427);
var state_40445__$1 = (function (){var statearr_40464 = state_40445;
(statearr_40464[(7)] = inst_40423__$1);

return statearr_40464;
})();
if(inst_40428){
var statearr_40465_42155 = state_40445__$1;
(statearr_40465_42155[(1)] = (8));

} else {
var statearr_40466_42156 = state_40445__$1;
(statearr_40466_42156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (1))){
var inst_40417 = (0);
var state_40445__$1 = (function (){var statearr_40467 = state_40445;
(statearr_40467[(8)] = inst_40417);

return statearr_40467;
})();
var statearr_40477_42157 = state_40445__$1;
(statearr_40477_42157[(2)] = null);

(statearr_40477_42157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (4))){
var state_40445__$1 = state_40445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40445__$1,(7),ch);
} else {
if((state_val_40447 === (6))){
var inst_40440 = (state_40445[(2)]);
var state_40445__$1 = state_40445;
var statearr_40480_42158 = state_40445__$1;
(statearr_40480_42158[(2)] = inst_40440);

(statearr_40480_42158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (3))){
var inst_40442 = (state_40445[(2)]);
var inst_40443 = cljs.core.async.close_BANG_(out);
var state_40445__$1 = (function (){var statearr_40485 = state_40445;
(statearr_40485[(9)] = inst_40442);

return statearr_40485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40445__$1,inst_40443);
} else {
if((state_val_40447 === (2))){
var inst_40417 = (state_40445[(8)]);
var inst_40419 = (inst_40417 < n);
var state_40445__$1 = state_40445;
if(cljs.core.truth_(inst_40419)){
var statearr_40490_42161 = state_40445__$1;
(statearr_40490_42161[(1)] = (4));

} else {
var statearr_40491_42162 = state_40445__$1;
(statearr_40491_42162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (11))){
var inst_40417 = (state_40445[(8)]);
var inst_40431 = (state_40445[(2)]);
var inst_40432 = (inst_40417 + (1));
var inst_40417__$1 = inst_40432;
var state_40445__$1 = (function (){var statearr_40492 = state_40445;
(statearr_40492[(10)] = inst_40431);

(statearr_40492[(8)] = inst_40417__$1);

return statearr_40492;
})();
var statearr_40493_42164 = state_40445__$1;
(statearr_40493_42164[(2)] = null);

(statearr_40493_42164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (9))){
var state_40445__$1 = state_40445;
var statearr_40494_42165 = state_40445__$1;
(statearr_40494_42165[(2)] = null);

(statearr_40494_42165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (5))){
var state_40445__$1 = state_40445;
var statearr_40497_42166 = state_40445__$1;
(statearr_40497_42166[(2)] = null);

(statearr_40497_42166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (10))){
var inst_40437 = (state_40445[(2)]);
var state_40445__$1 = state_40445;
var statearr_40498_42167 = state_40445__$1;
(statearr_40498_42167[(2)] = inst_40437);

(statearr_40498_42167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40447 === (8))){
var inst_40423 = (state_40445[(7)]);
var state_40445__$1 = state_40445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40445__$1,(11),out,inst_40423);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_40499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40499[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_40499[(1)] = (1));

return statearr_40499;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_40445){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_40445);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e40500){var ex__35684__auto__ = e40500;
var statearr_40502_42168 = state_40445;
(statearr_40502_42168[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_40445[(4)]))){
var statearr_40503_42169 = state_40445;
(statearr_40503_42169[(1)] = cljs.core.first((state_40445[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42171 = state_40445;
state_40445 = G__42171;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_40445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_40445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_40510 = f__37083__auto__();
(statearr_40510[(6)] = c__37082__auto___42154);

return statearr_40510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40553 = (function (f,ch,meta40527,_,fn1,meta40554){
this.f = f;
this.ch = ch;
this.meta40527 = meta40527;
this._ = _;
this.fn1 = fn1;
this.meta40554 = meta40554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40555,meta40554__$1){
var self__ = this;
var _40555__$1 = this;
return (new cljs.core.async.t_cljs$core$async40553(self__.f,self__.ch,self__.meta40527,self__._,self__.fn1,meta40554__$1));
}));

(cljs.core.async.t_cljs$core$async40553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40555){
var self__ = this;
var _40555__$1 = this;
return self__.meta40554;
}));

(cljs.core.async.t_cljs$core$async40553.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40525_SHARP_){
var G__40558 = (((p1__40525_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40525_SHARP_) : self__.f.call(null, p1__40525_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40558) : f1.call(null, G__40558));
});
}));

(cljs.core.async.t_cljs$core$async40553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40527","meta40527",-257565827,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40526","cljs.core.async/t_cljs$core$async40526",437844002,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40554","meta40554",435715014,null)], null);
}));

(cljs.core.async.t_cljs$core$async40553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40553");

(cljs.core.async.t_cljs$core$async40553.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40553.
 */
cljs.core.async.__GT_t_cljs$core$async40553 = (function cljs$core$async$__GT_t_cljs$core$async40553(f,ch,meta40527,_,fn1,meta40554){
return (new cljs.core.async.t_cljs$core$async40553(f,ch,meta40527,_,fn1,meta40554));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40526 = (function (f,ch,meta40527){
this.f = f;
this.ch = ch;
this.meta40527 = meta40527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40528,meta40527__$1){
var self__ = this;
var _40528__$1 = this;
return (new cljs.core.async.t_cljs$core$async40526(self__.f,self__.ch,meta40527__$1));
}));

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40528){
var self__ = this;
var _40528__$1 = this;
return self__.meta40527;
}));

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async40553(self__.f,self__.ch,self__.meta40527,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40560 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40560) : self__.f.call(null, G__40560));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40527","meta40527",-257565827,null)], null);
}));

(cljs.core.async.t_cljs$core$async40526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40526");

(cljs.core.async.t_cljs$core$async40526.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40526.
 */
cljs.core.async.__GT_t_cljs$core$async40526 = (function cljs$core$async$__GT_t_cljs$core$async40526(f,ch,meta40527){
return (new cljs.core.async.t_cljs$core$async40526(f,ch,meta40527));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40526(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40563 = (function (f,ch,meta40564){
this.f = f;
this.ch = ch;
this.meta40564 = meta40564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40565,meta40564__$1){
var self__ = this;
var _40565__$1 = this;
return (new cljs.core.async.t_cljs$core$async40563(self__.f,self__.ch,meta40564__$1));
}));

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40565){
var self__ = this;
var _40565__$1 = this;
return self__.meta40564;
}));

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40564","meta40564",967934599,null)], null);
}));

(cljs.core.async.t_cljs$core$async40563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40563");

(cljs.core.async.t_cljs$core$async40563.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40563.
 */
cljs.core.async.__GT_t_cljs$core$async40563 = (function cljs$core$async$__GT_t_cljs$core$async40563(f,ch,meta40564){
return (new cljs.core.async.t_cljs$core$async40563(f,ch,meta40564));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40563(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40575 = (function (p,ch,meta40576){
this.p = p;
this.ch = ch;
this.meta40576 = meta40576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40577,meta40576__$1){
var self__ = this;
var _40577__$1 = this;
return (new cljs.core.async.t_cljs$core$async40575(self__.p,self__.ch,meta40576__$1));
}));

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40577){
var self__ = this;
var _40577__$1 = this;
return self__.meta40576;
}));

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40576","meta40576",1019980462,null)], null);
}));

(cljs.core.async.t_cljs$core$async40575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40575");

(cljs.core.async.t_cljs$core$async40575.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40575.
 */
cljs.core.async.__GT_t_cljs$core$async40575 = (function cljs$core$async$__GT_t_cljs$core$async40575(p,ch,meta40576){
return (new cljs.core.async.t_cljs$core$async40575(p,ch,meta40576));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async40575(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40594 = arguments.length;
switch (G__40594) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37082__auto___42191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_40622){
var state_val_40623 = (state_40622[(1)]);
if((state_val_40623 === (7))){
var inst_40618 = (state_40622[(2)]);
var state_40622__$1 = state_40622;
var statearr_40624_42200 = state_40622__$1;
(statearr_40624_42200[(2)] = inst_40618);

(statearr_40624_42200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (1))){
var state_40622__$1 = state_40622;
var statearr_40625_42207 = state_40622__$1;
(statearr_40625_42207[(2)] = null);

(statearr_40625_42207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (4))){
var inst_40604 = (state_40622[(7)]);
var inst_40604__$1 = (state_40622[(2)]);
var inst_40605 = (inst_40604__$1 == null);
var state_40622__$1 = (function (){var statearr_40629 = state_40622;
(statearr_40629[(7)] = inst_40604__$1);

return statearr_40629;
})();
if(cljs.core.truth_(inst_40605)){
var statearr_40630_42209 = state_40622__$1;
(statearr_40630_42209[(1)] = (5));

} else {
var statearr_40631_42210 = state_40622__$1;
(statearr_40631_42210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (6))){
var inst_40604 = (state_40622[(7)]);
var inst_40609 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40604) : p.call(null, inst_40604));
var state_40622__$1 = state_40622;
if(cljs.core.truth_(inst_40609)){
var statearr_40634_42215 = state_40622__$1;
(statearr_40634_42215[(1)] = (8));

} else {
var statearr_40636_42216 = state_40622__$1;
(statearr_40636_42216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (3))){
var inst_40620 = (state_40622[(2)]);
var state_40622__$1 = state_40622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40622__$1,inst_40620);
} else {
if((state_val_40623 === (2))){
var state_40622__$1 = state_40622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40622__$1,(4),ch);
} else {
if((state_val_40623 === (11))){
var inst_40612 = (state_40622[(2)]);
var state_40622__$1 = state_40622;
var statearr_40637_42227 = state_40622__$1;
(statearr_40637_42227[(2)] = inst_40612);

(statearr_40637_42227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (9))){
var state_40622__$1 = state_40622;
var statearr_40638_42228 = state_40622__$1;
(statearr_40638_42228[(2)] = null);

(statearr_40638_42228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (5))){
var inst_40607 = cljs.core.async.close_BANG_(out);
var state_40622__$1 = state_40622;
var statearr_40640_42229 = state_40622__$1;
(statearr_40640_42229[(2)] = inst_40607);

(statearr_40640_42229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (10))){
var inst_40615 = (state_40622[(2)]);
var state_40622__$1 = (function (){var statearr_40641 = state_40622;
(statearr_40641[(8)] = inst_40615);

return statearr_40641;
})();
var statearr_40642_42230 = state_40622__$1;
(statearr_40642_42230[(2)] = null);

(statearr_40642_42230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40623 === (8))){
var inst_40604 = (state_40622[(7)]);
var state_40622__$1 = state_40622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40622__$1,(11),out,inst_40604);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_40643 = [null,null,null,null,null,null,null,null,null];
(statearr_40643[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_40643[(1)] = (1));

return statearr_40643;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_40622){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_40622);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e40644){var ex__35684__auto__ = e40644;
var statearr_40645_42235 = state_40622;
(statearr_40645_42235[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_40622[(4)]))){
var statearr_40646_42236 = state_40622;
(statearr_40646_42236[(1)] = cljs.core.first((state_40622[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42237 = state_40622;
state_40622 = G__42237;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_40622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_40622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_40647 = f__37083__auto__();
(statearr_40647[(6)] = c__37082__auto___42191);

return statearr_40647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40650 = arguments.length;
switch (G__40650) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_40772){
var state_val_40775 = (state_40772[(1)]);
if((state_val_40775 === (7))){
var inst_40739 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40804_42246 = state_40772__$1;
(statearr_40804_42246[(2)] = inst_40739);

(statearr_40804_42246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (20))){
var inst_40709 = (state_40772[(7)]);
var inst_40720 = (state_40772[(2)]);
var inst_40721 = cljs.core.next(inst_40709);
var inst_40679 = inst_40721;
var inst_40680 = null;
var inst_40681 = (0);
var inst_40682 = (0);
var state_40772__$1 = (function (){var statearr_40805 = state_40772;
(statearr_40805[(8)] = inst_40682);

(statearr_40805[(9)] = inst_40679);

(statearr_40805[(10)] = inst_40681);

(statearr_40805[(11)] = inst_40680);

(statearr_40805[(12)] = inst_40720);

return statearr_40805;
})();
var statearr_40806_42248 = state_40772__$1;
(statearr_40806_42248[(2)] = null);

(statearr_40806_42248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (1))){
var state_40772__$1 = state_40772;
var statearr_40807_42249 = state_40772__$1;
(statearr_40807_42249[(2)] = null);

(statearr_40807_42249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (4))){
var inst_40668 = (state_40772[(13)]);
var inst_40668__$1 = (state_40772[(2)]);
var inst_40669 = (inst_40668__$1 == null);
var state_40772__$1 = (function (){var statearr_40809 = state_40772;
(statearr_40809[(13)] = inst_40668__$1);

return statearr_40809;
})();
if(cljs.core.truth_(inst_40669)){
var statearr_40810_42251 = state_40772__$1;
(statearr_40810_42251[(1)] = (5));

} else {
var statearr_40813_42252 = state_40772__$1;
(statearr_40813_42252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (15))){
var state_40772__$1 = state_40772;
var statearr_40817_42254 = state_40772__$1;
(statearr_40817_42254[(2)] = null);

(statearr_40817_42254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (21))){
var state_40772__$1 = state_40772;
var statearr_40820_42255 = state_40772__$1;
(statearr_40820_42255[(2)] = null);

(statearr_40820_42255[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (13))){
var inst_40682 = (state_40772[(8)]);
var inst_40679 = (state_40772[(9)]);
var inst_40681 = (state_40772[(10)]);
var inst_40680 = (state_40772[(11)]);
var inst_40705 = (state_40772[(2)]);
var inst_40706 = (inst_40682 + (1));
var tmp40814 = inst_40679;
var tmp40815 = inst_40681;
var tmp40816 = inst_40680;
var inst_40679__$1 = tmp40814;
var inst_40680__$1 = tmp40816;
var inst_40681__$1 = tmp40815;
var inst_40682__$1 = inst_40706;
var state_40772__$1 = (function (){var statearr_40821 = state_40772;
(statearr_40821[(8)] = inst_40682__$1);

(statearr_40821[(9)] = inst_40679__$1);

(statearr_40821[(10)] = inst_40681__$1);

(statearr_40821[(11)] = inst_40680__$1);

(statearr_40821[(14)] = inst_40705);

return statearr_40821;
})();
var statearr_40822_42256 = state_40772__$1;
(statearr_40822_42256[(2)] = null);

(statearr_40822_42256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (22))){
var state_40772__$1 = state_40772;
var statearr_40823_42257 = state_40772__$1;
(statearr_40823_42257[(2)] = null);

(statearr_40823_42257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (6))){
var inst_40668 = (state_40772[(13)]);
var inst_40677 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40668) : f.call(null, inst_40668));
var inst_40678 = cljs.core.seq(inst_40677);
var inst_40679 = inst_40678;
var inst_40680 = null;
var inst_40681 = (0);
var inst_40682 = (0);
var state_40772__$1 = (function (){var statearr_40829 = state_40772;
(statearr_40829[(8)] = inst_40682);

(statearr_40829[(9)] = inst_40679);

(statearr_40829[(10)] = inst_40681);

(statearr_40829[(11)] = inst_40680);

return statearr_40829;
})();
var statearr_40837_42258 = state_40772__$1;
(statearr_40837_42258[(2)] = null);

(statearr_40837_42258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (17))){
var inst_40709 = (state_40772[(7)]);
var inst_40713 = cljs.core.chunk_first(inst_40709);
var inst_40714 = cljs.core.chunk_rest(inst_40709);
var inst_40715 = cljs.core.count(inst_40713);
var inst_40679 = inst_40714;
var inst_40680 = inst_40713;
var inst_40681 = inst_40715;
var inst_40682 = (0);
var state_40772__$1 = (function (){var statearr_40845 = state_40772;
(statearr_40845[(8)] = inst_40682);

(statearr_40845[(9)] = inst_40679);

(statearr_40845[(10)] = inst_40681);

(statearr_40845[(11)] = inst_40680);

return statearr_40845;
})();
var statearr_40847_42259 = state_40772__$1;
(statearr_40847_42259[(2)] = null);

(statearr_40847_42259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (3))){
var inst_40741 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40772__$1,inst_40741);
} else {
if((state_val_40775 === (12))){
var inst_40729 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40848_42260 = state_40772__$1;
(statearr_40848_42260[(2)] = inst_40729);

(statearr_40848_42260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (2))){
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40772__$1,(4),in$);
} else {
if((state_val_40775 === (23))){
var inst_40737 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40851_42261 = state_40772__$1;
(statearr_40851_42261[(2)] = inst_40737);

(statearr_40851_42261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (19))){
var inst_40724 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40855_42262 = state_40772__$1;
(statearr_40855_42262[(2)] = inst_40724);

(statearr_40855_42262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (11))){
var inst_40679 = (state_40772[(9)]);
var inst_40709 = (state_40772[(7)]);
var inst_40709__$1 = cljs.core.seq(inst_40679);
var state_40772__$1 = (function (){var statearr_40858 = state_40772;
(statearr_40858[(7)] = inst_40709__$1);

return statearr_40858;
})();
if(inst_40709__$1){
var statearr_40859_42263 = state_40772__$1;
(statearr_40859_42263[(1)] = (14));

} else {
var statearr_40864_42264 = state_40772__$1;
(statearr_40864_42264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (9))){
var inst_40731 = (state_40772[(2)]);
var inst_40732 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40772__$1 = (function (){var statearr_40866 = state_40772;
(statearr_40866[(15)] = inst_40731);

return statearr_40866;
})();
if(cljs.core.truth_(inst_40732)){
var statearr_40867_42265 = state_40772__$1;
(statearr_40867_42265[(1)] = (21));

} else {
var statearr_40868_42266 = state_40772__$1;
(statearr_40868_42266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (5))){
var inst_40671 = cljs.core.async.close_BANG_(out);
var state_40772__$1 = state_40772;
var statearr_40869_42267 = state_40772__$1;
(statearr_40869_42267[(2)] = inst_40671);

(statearr_40869_42267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (14))){
var inst_40709 = (state_40772[(7)]);
var inst_40711 = cljs.core.chunked_seq_QMARK_(inst_40709);
var state_40772__$1 = state_40772;
if(inst_40711){
var statearr_40870_42268 = state_40772__$1;
(statearr_40870_42268[(1)] = (17));

} else {
var statearr_40871_42269 = state_40772__$1;
(statearr_40871_42269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (16))){
var inst_40727 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40872_42270 = state_40772__$1;
(statearr_40872_42270[(2)] = inst_40727);

(statearr_40872_42270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (10))){
var inst_40682 = (state_40772[(8)]);
var inst_40680 = (state_40772[(11)]);
var inst_40703 = cljs.core._nth(inst_40680,inst_40682);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40772__$1,(13),out,inst_40703);
} else {
if((state_val_40775 === (18))){
var inst_40709 = (state_40772[(7)]);
var inst_40718 = cljs.core.first(inst_40709);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40772__$1,(20),out,inst_40718);
} else {
if((state_val_40775 === (8))){
var inst_40682 = (state_40772[(8)]);
var inst_40681 = (state_40772[(10)]);
var inst_40684 = (inst_40682 < inst_40681);
var inst_40685 = inst_40684;
var state_40772__$1 = state_40772;
if(cljs.core.truth_(inst_40685)){
var statearr_40877_42271 = state_40772__$1;
(statearr_40877_42271[(1)] = (10));

} else {
var statearr_40878_42272 = state_40772__$1;
(statearr_40878_42272[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35681__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35681__auto____0 = (function (){
var statearr_40880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40880[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35681__auto__);

(statearr_40880[(1)] = (1));

return statearr_40880;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35681__auto____1 = (function (state_40772){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_40772);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e40881){var ex__35684__auto__ = e40881;
var statearr_40882_42273 = state_40772;
(statearr_40882_42273[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_40772[(4)]))){
var statearr_40883_42274 = state_40772;
(statearr_40883_42274[(1)] = cljs.core.first((state_40772[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42275 = state_40772;
state_40772 = G__42275;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35681__auto__ = function(state_40772){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35681__auto____1.call(this,state_40772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35681__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35681__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_40887 = f__37083__auto__();
(statearr_40887[(6)] = c__37082__auto__);

return statearr_40887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));

return c__37082__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40890 = arguments.length;
switch (G__40890) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40896 = arguments.length;
switch (G__40896) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40910 = arguments.length;
switch (G__40910) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37082__auto___42282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_40974){
var state_val_40975 = (state_40974[(1)]);
if((state_val_40975 === (7))){
var inst_40969 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40980_42283 = state_40974__$1;
(statearr_40980_42283[(2)] = inst_40969);

(statearr_40980_42283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (1))){
var inst_40951 = null;
var state_40974__$1 = (function (){var statearr_40981 = state_40974;
(statearr_40981[(7)] = inst_40951);

return statearr_40981;
})();
var statearr_40982_42284 = state_40974__$1;
(statearr_40982_42284[(2)] = null);

(statearr_40982_42284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (4))){
var inst_40954 = (state_40974[(8)]);
var inst_40954__$1 = (state_40974[(2)]);
var inst_40955 = (inst_40954__$1 == null);
var inst_40956 = cljs.core.not(inst_40955);
var state_40974__$1 = (function (){var statearr_40983 = state_40974;
(statearr_40983[(8)] = inst_40954__$1);

return statearr_40983;
})();
if(inst_40956){
var statearr_40984_42285 = state_40974__$1;
(statearr_40984_42285[(1)] = (5));

} else {
var statearr_40985_42286 = state_40974__$1;
(statearr_40985_42286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (6))){
var state_40974__$1 = state_40974;
var statearr_40986_42287 = state_40974__$1;
(statearr_40986_42287[(2)] = null);

(statearr_40986_42287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (3))){
var inst_40971 = (state_40974[(2)]);
var inst_40972 = cljs.core.async.close_BANG_(out);
var state_40974__$1 = (function (){var statearr_40987 = state_40974;
(statearr_40987[(9)] = inst_40971);

return statearr_40987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40974__$1,inst_40972);
} else {
if((state_val_40975 === (2))){
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40974__$1,(4),ch);
} else {
if((state_val_40975 === (11))){
var inst_40954 = (state_40974[(8)]);
var inst_40963 = (state_40974[(2)]);
var inst_40951 = inst_40954;
var state_40974__$1 = (function (){var statearr_40988 = state_40974;
(statearr_40988[(7)] = inst_40951);

(statearr_40988[(10)] = inst_40963);

return statearr_40988;
})();
var statearr_40989_42294 = state_40974__$1;
(statearr_40989_42294[(2)] = null);

(statearr_40989_42294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (9))){
var inst_40954 = (state_40974[(8)]);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40974__$1,(11),out,inst_40954);
} else {
if((state_val_40975 === (5))){
var inst_40951 = (state_40974[(7)]);
var inst_40954 = (state_40974[(8)]);
var inst_40958 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40954,inst_40951);
var state_40974__$1 = state_40974;
if(inst_40958){
var statearr_40997_42295 = state_40974__$1;
(statearr_40997_42295[(1)] = (8));

} else {
var statearr_40998_42296 = state_40974__$1;
(statearr_40998_42296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (10))){
var inst_40966 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40999_42297 = state_40974__$1;
(statearr_40999_42297[(2)] = inst_40966);

(statearr_40999_42297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (8))){
var inst_40951 = (state_40974[(7)]);
var tmp40990 = inst_40951;
var inst_40951__$1 = tmp40990;
var state_40974__$1 = (function (){var statearr_41000 = state_40974;
(statearr_41000[(7)] = inst_40951__$1);

return statearr_41000;
})();
var statearr_41001_42299 = state_40974__$1;
(statearr_41001_42299[(2)] = null);

(statearr_41001_42299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_41002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41002[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_41002[(1)] = (1));

return statearr_41002;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_40974){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_40974);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e41003){var ex__35684__auto__ = e41003;
var statearr_41004_42302 = state_40974;
(statearr_41004_42302[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_40974[(4)]))){
var statearr_41005_42303 = state_40974;
(statearr_41005_42303[(1)] = cljs.core.first((state_40974[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42304 = state_40974;
state_40974 = G__42304;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_40974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_40974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_41006 = f__37083__auto__();
(statearr_41006[(6)] = c__37082__auto___42282);

return statearr_41006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41023 = arguments.length;
switch (G__41023) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37082__auto___42306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_41076){
var state_val_41077 = (state_41076[(1)]);
if((state_val_41077 === (7))){
var inst_41072 = (state_41076[(2)]);
var state_41076__$1 = state_41076;
var statearr_41085_42307 = state_41076__$1;
(statearr_41085_42307[(2)] = inst_41072);

(statearr_41085_42307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (1))){
var inst_41028 = (new Array(n));
var inst_41030 = inst_41028;
var inst_41031 = (0);
var state_41076__$1 = (function (){var statearr_41086 = state_41076;
(statearr_41086[(7)] = inst_41030);

(statearr_41086[(8)] = inst_41031);

return statearr_41086;
})();
var statearr_41087_42308 = state_41076__$1;
(statearr_41087_42308[(2)] = null);

(statearr_41087_42308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (4))){
var inst_41035 = (state_41076[(9)]);
var inst_41035__$1 = (state_41076[(2)]);
var inst_41045 = (inst_41035__$1 == null);
var inst_41046 = cljs.core.not(inst_41045);
var state_41076__$1 = (function (){var statearr_41090 = state_41076;
(statearr_41090[(9)] = inst_41035__$1);

return statearr_41090;
})();
if(inst_41046){
var statearr_41091_42309 = state_41076__$1;
(statearr_41091_42309[(1)] = (5));

} else {
var statearr_41092_42310 = state_41076__$1;
(statearr_41092_42310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (15))){
var inst_41066 = (state_41076[(2)]);
var state_41076__$1 = state_41076;
var statearr_41093_42311 = state_41076__$1;
(statearr_41093_42311[(2)] = inst_41066);

(statearr_41093_42311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (13))){
var state_41076__$1 = state_41076;
var statearr_41094_42312 = state_41076__$1;
(statearr_41094_42312[(2)] = null);

(statearr_41094_42312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (6))){
var inst_41031 = (state_41076[(8)]);
var inst_41062 = (inst_41031 > (0));
var state_41076__$1 = state_41076;
if(cljs.core.truth_(inst_41062)){
var statearr_41113_42313 = state_41076__$1;
(statearr_41113_42313[(1)] = (12));

} else {
var statearr_41114_42314 = state_41076__$1;
(statearr_41114_42314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (3))){
var inst_41074 = (state_41076[(2)]);
var state_41076__$1 = state_41076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41076__$1,inst_41074);
} else {
if((state_val_41077 === (12))){
var inst_41030 = (state_41076[(7)]);
var inst_41064 = cljs.core.vec(inst_41030);
var state_41076__$1 = state_41076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41076__$1,(15),out,inst_41064);
} else {
if((state_val_41077 === (2))){
var state_41076__$1 = state_41076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41076__$1,(4),ch);
} else {
if((state_val_41077 === (11))){
var inst_41056 = (state_41076[(2)]);
var inst_41057 = (new Array(n));
var inst_41030 = inst_41057;
var inst_41031 = (0);
var state_41076__$1 = (function (){var statearr_41124 = state_41076;
(statearr_41124[(10)] = inst_41056);

(statearr_41124[(7)] = inst_41030);

(statearr_41124[(8)] = inst_41031);

return statearr_41124;
})();
var statearr_41127_42316 = state_41076__$1;
(statearr_41127_42316[(2)] = null);

(statearr_41127_42316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (9))){
var inst_41030 = (state_41076[(7)]);
var inst_41054 = cljs.core.vec(inst_41030);
var state_41076__$1 = state_41076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41076__$1,(11),out,inst_41054);
} else {
if((state_val_41077 === (5))){
var inst_41030 = (state_41076[(7)]);
var inst_41035 = (state_41076[(9)]);
var inst_41031 = (state_41076[(8)]);
var inst_41049 = (state_41076[(11)]);
var inst_41048 = (inst_41030[inst_41031] = inst_41035);
var inst_41049__$1 = (inst_41031 + (1));
var inst_41050 = (inst_41049__$1 < n);
var state_41076__$1 = (function (){var statearr_41133 = state_41076;
(statearr_41133[(12)] = inst_41048);

(statearr_41133[(11)] = inst_41049__$1);

return statearr_41133;
})();
if(cljs.core.truth_(inst_41050)){
var statearr_41134_42319 = state_41076__$1;
(statearr_41134_42319[(1)] = (8));

} else {
var statearr_41135_42320 = state_41076__$1;
(statearr_41135_42320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (14))){
var inst_41069 = (state_41076[(2)]);
var inst_41070 = cljs.core.async.close_BANG_(out);
var state_41076__$1 = (function (){var statearr_41137 = state_41076;
(statearr_41137[(13)] = inst_41069);

return statearr_41137;
})();
var statearr_41138_42322 = state_41076__$1;
(statearr_41138_42322[(2)] = inst_41070);

(statearr_41138_42322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (10))){
var inst_41060 = (state_41076[(2)]);
var state_41076__$1 = state_41076;
var statearr_41139_42323 = state_41076__$1;
(statearr_41139_42323[(2)] = inst_41060);

(statearr_41139_42323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41077 === (8))){
var inst_41030 = (state_41076[(7)]);
var inst_41049 = (state_41076[(11)]);
var tmp41136 = inst_41030;
var inst_41030__$1 = tmp41136;
var inst_41031 = inst_41049;
var state_41076__$1 = (function (){var statearr_41144 = state_41076;
(statearr_41144[(7)] = inst_41030__$1);

(statearr_41144[(8)] = inst_41031);

return statearr_41144;
})();
var statearr_41145_42324 = state_41076__$1;
(statearr_41145_42324[(2)] = null);

(statearr_41145_42324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_41151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41151[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_41151[(1)] = (1));

return statearr_41151;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_41076){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_41076);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e41154){var ex__35684__auto__ = e41154;
var statearr_41155_42325 = state_41076;
(statearr_41155_42325[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_41076[(4)]))){
var statearr_41156_42326 = state_41076;
(statearr_41156_42326[(1)] = cljs.core.first((state_41076[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42328 = state_41076;
state_41076 = G__42328;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_41076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_41076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_41157 = f__37083__auto__();
(statearr_41157[(6)] = c__37082__auto___42306);

return statearr_41157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41166 = arguments.length;
switch (G__41166) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37082__auto___42331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37083__auto__ = (function (){var switch__35680__auto__ = (function (state_41238){
var state_val_41239 = (state_41238[(1)]);
if((state_val_41239 === (7))){
var inst_41234 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41267_42332 = state_41238__$1;
(statearr_41267_42332[(2)] = inst_41234);

(statearr_41267_42332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (1))){
var inst_41182 = [];
var inst_41183 = inst_41182;
var inst_41184 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41238__$1 = (function (){var statearr_41269 = state_41238;
(statearr_41269[(7)] = inst_41184);

(statearr_41269[(8)] = inst_41183);

return statearr_41269;
})();
var statearr_41271_42333 = state_41238__$1;
(statearr_41271_42333[(2)] = null);

(statearr_41271_42333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (4))){
var inst_41187 = (state_41238[(9)]);
var inst_41187__$1 = (state_41238[(2)]);
var inst_41188 = (inst_41187__$1 == null);
var inst_41189 = cljs.core.not(inst_41188);
var state_41238__$1 = (function (){var statearr_41272 = state_41238;
(statearr_41272[(9)] = inst_41187__$1);

return statearr_41272;
})();
if(inst_41189){
var statearr_41273_42334 = state_41238__$1;
(statearr_41273_42334[(1)] = (5));

} else {
var statearr_41275_42335 = state_41238__$1;
(statearr_41275_42335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (15))){
var inst_41183 = (state_41238[(8)]);
var inst_41226 = cljs.core.vec(inst_41183);
var state_41238__$1 = state_41238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41238__$1,(18),out,inst_41226);
} else {
if((state_val_41239 === (13))){
var inst_41221 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41279_42336 = state_41238__$1;
(statearr_41279_42336[(2)] = inst_41221);

(statearr_41279_42336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (6))){
var inst_41183 = (state_41238[(8)]);
var inst_41223 = inst_41183.length;
var inst_41224 = (inst_41223 > (0));
var state_41238__$1 = state_41238;
if(cljs.core.truth_(inst_41224)){
var statearr_41284_42337 = state_41238__$1;
(statearr_41284_42337[(1)] = (15));

} else {
var statearr_41291_42338 = state_41238__$1;
(statearr_41291_42338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (17))){
var inst_41231 = (state_41238[(2)]);
var inst_41232 = cljs.core.async.close_BANG_(out);
var state_41238__$1 = (function (){var statearr_41297 = state_41238;
(statearr_41297[(10)] = inst_41231);

return statearr_41297;
})();
var statearr_41298_42339 = state_41238__$1;
(statearr_41298_42339[(2)] = inst_41232);

(statearr_41298_42339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (3))){
var inst_41236 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41238__$1,inst_41236);
} else {
if((state_val_41239 === (12))){
var inst_41183 = (state_41238[(8)]);
var inst_41209 = cljs.core.vec(inst_41183);
var state_41238__$1 = state_41238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41238__$1,(14),out,inst_41209);
} else {
if((state_val_41239 === (2))){
var state_41238__$1 = state_41238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41238__$1,(4),ch);
} else {
if((state_val_41239 === (11))){
var inst_41183 = (state_41238[(8)]);
var inst_41187 = (state_41238[(9)]);
var inst_41191 = (state_41238[(11)]);
var inst_41205 = inst_41183.push(inst_41187);
var tmp41305 = inst_41183;
var inst_41183__$1 = tmp41305;
var inst_41184 = inst_41191;
var state_41238__$1 = (function (){var statearr_41310 = state_41238;
(statearr_41310[(7)] = inst_41184);

(statearr_41310[(12)] = inst_41205);

(statearr_41310[(8)] = inst_41183__$1);

return statearr_41310;
})();
var statearr_41312_42340 = state_41238__$1;
(statearr_41312_42340[(2)] = null);

(statearr_41312_42340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (9))){
var inst_41184 = (state_41238[(7)]);
var inst_41198 = cljs.core.keyword_identical_QMARK_(inst_41184,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41238__$1 = state_41238;
var statearr_41315_42341 = state_41238__$1;
(statearr_41315_42341[(2)] = inst_41198);

(statearr_41315_42341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (5))){
var inst_41184 = (state_41238[(7)]);
var inst_41187 = (state_41238[(9)]);
var inst_41193 = (state_41238[(13)]);
var inst_41191 = (state_41238[(11)]);
var inst_41191__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41187) : f.call(null, inst_41187));
var inst_41193__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41191__$1,inst_41184);
var state_41238__$1 = (function (){var statearr_41322 = state_41238;
(statearr_41322[(13)] = inst_41193__$1);

(statearr_41322[(11)] = inst_41191__$1);

return statearr_41322;
})();
if(inst_41193__$1){
var statearr_41324_42342 = state_41238__$1;
(statearr_41324_42342[(1)] = (8));

} else {
var statearr_41325_42343 = state_41238__$1;
(statearr_41325_42343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (14))){
var inst_41187 = (state_41238[(9)]);
var inst_41191 = (state_41238[(11)]);
var inst_41212 = (state_41238[(2)]);
var inst_41217 = [];
var inst_41218 = inst_41217.push(inst_41187);
var inst_41183 = inst_41217;
var inst_41184 = inst_41191;
var state_41238__$1 = (function (){var statearr_41327 = state_41238;
(statearr_41327[(14)] = inst_41212);

(statearr_41327[(7)] = inst_41184);

(statearr_41327[(8)] = inst_41183);

(statearr_41327[(15)] = inst_41218);

return statearr_41327;
})();
var statearr_41328_42347 = state_41238__$1;
(statearr_41328_42347[(2)] = null);

(statearr_41328_42347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (16))){
var state_41238__$1 = state_41238;
var statearr_41334_42348 = state_41238__$1;
(statearr_41334_42348[(2)] = null);

(statearr_41334_42348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (10))){
var inst_41200 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
if(cljs.core.truth_(inst_41200)){
var statearr_41335_42349 = state_41238__$1;
(statearr_41335_42349[(1)] = (11));

} else {
var statearr_41336_42350 = state_41238__$1;
(statearr_41336_42350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (18))){
var inst_41228 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41342_42351 = state_41238__$1;
(statearr_41342_42351[(2)] = inst_41228);

(statearr_41342_42351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (8))){
var inst_41193 = (state_41238[(13)]);
var state_41238__$1 = state_41238;
var statearr_41345_42352 = state_41238__$1;
(statearr_41345_42352[(2)] = inst_41193);

(statearr_41345_42352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35681__auto__ = null;
var cljs$core$async$state_machine__35681__auto____0 = (function (){
var statearr_41354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41354[(0)] = cljs$core$async$state_machine__35681__auto__);

(statearr_41354[(1)] = (1));

return statearr_41354;
});
var cljs$core$async$state_machine__35681__auto____1 = (function (state_41238){
while(true){
var ret_value__35682__auto__ = (function (){try{while(true){
var result__35683__auto__ = switch__35680__auto__(state_41238);
if(cljs.core.keyword_identical_QMARK_(result__35683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35683__auto__;
}
break;
}
}catch (e41363){var ex__35684__auto__ = e41363;
var statearr_41366_42353 = state_41238;
(statearr_41366_42353[(2)] = ex__35684__auto__);


if(cljs.core.seq((state_41238[(4)]))){
var statearr_41367_42355 = state_41238;
(statearr_41367_42355[(1)] = cljs.core.first((state_41238[(4)])));

} else {
throw ex__35684__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42356 = state_41238;
state_41238 = G__42356;
continue;
} else {
return ret_value__35682__auto__;
}
break;
}
});
cljs$core$async$state_machine__35681__auto__ = function(state_41238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35681__auto____1.call(this,state_41238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35681__auto____0;
cljs$core$async$state_machine__35681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35681__auto____1;
return cljs$core$async$state_machine__35681__auto__;
})()
})();
var state__37084__auto__ = (function (){var statearr_41374 = f__37083__auto__();
(statearr_41374[(6)] = c__37082__auto___42331);

return statearr_41374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37084__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
