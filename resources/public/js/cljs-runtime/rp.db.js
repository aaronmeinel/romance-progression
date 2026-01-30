goog.provide('rp.db');
rp.db.schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926),new cljs.core.Keyword("event","microcycle","event/microcycle",65781575),new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921),new cljs.core.Keyword("event","prescribed-reps","event/prescribed-reps",1065594799),new cljs.core.Keyword("event","prescribed-weight","event/prescribed-weight",130489296),new cljs.core.Keyword("event","timestamp","event/timestamp",-1672439471),new cljs.core.Keyword("event","exercise","event/exercise",-686440847),new cljs.core.Keyword("event","set-index","event/set-index",966873267),new cljs.core.Keyword("event","mesocycle","event/mesocycle",-877063244),new cljs.core.Keyword("event","workout","event/workout",230278710),new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword("event","id","event/id",-1282332774)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)]);
if((typeof rp !== 'undefined') && (typeof rp.db !== 'undefined') && (typeof rp.db.conn !== 'undefined')){
} else {
rp.db.conn = (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(rp.db.schema) : datascript.core.create_conn.call(null, rp.db.schema));
}
if((typeof rp !== 'undefined') && (typeof rp.db !== 'undefined') && (typeof rp.db.db_listener !== 'undefined')){
} else {
rp.db.db_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
var G__49590_49650 = rp.db.conn;
var G__49591_49651 = new cljs.core.Keyword(null,"ui-listener","ui-listener",-398338898);
var G__49592_49652 = (function (_tx_report){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rp.db.db_listener,cljs.core.inc);
});
(datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 ? datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(G__49590_49650,G__49591_49651,G__49592_49652) : datascript.core.listen_BANG_.call(null, G__49590_49650,G__49591_49651,G__49592_49652));
/**
 * Log a completed set to the database.
 */
rp.db.log_set_BANG_ = (function rp$db$log_set_BANG_(p__49594){
var map__49595 = p__49594;
var map__49595__$1 = cljs.core.__destructure_map(map__49595);
var mesocycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"mesocycle","mesocycle",-963467818));
var microcycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"microcycle","microcycle",230058657));
var workout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"workout","workout",280057936));
var exercise = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"exercise","exercise",-801618741));
var set_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"set-index","set-index",797648137));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"reps","reps",1391310856));
var event_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var G__49596 = rp.db.conn;
var G__49597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926),new cljs.core.Keyword("event","microcycle","event/microcycle",65781575),new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921),new cljs.core.Keyword("event","timestamp","event/timestamp",-1672439471),new cljs.core.Keyword("event","exercise","event/exercise",-686440847),new cljs.core.Keyword("event","set-index","event/set-index",966873267),new cljs.core.Keyword("event","mesocycle","event/mesocycle",-877063244),new cljs.core.Keyword("event","workout","event/workout",230278710),new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword("event","id","event/id",-1282332774)],[reps,microcycle,weight,Date.now(),exercise,set_index,mesocycle,workout,new cljs.core.Keyword(null,"set-completed","set-completed",1778641666),event_id])], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__49596,G__49597) : datascript.core.transact_BANG_.call(null, G__49596,G__49597));
});
/**
 * Get all logged events from the database.
 */
rp.db.get_all_events = (function rp$db$get_all_events(){
cljs.core.deref(rp.db.db_listener);

return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event","timestamp","event/timestamp",-1672439471),(function (){var G__49598 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","type","event/type",1532247862)], null)], null);
var G__49599 = cljs.core.deref(rp.db.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__49598,G__49599) : datascript.core.q.call(null, G__49598,G__49599));
})());
});
/**
 * Get the logged data for a specific set if it exists.
 */
rp.db.get_set_log = (function rp$db$get_set_log(mesocycle,microcycle,workout,exercise,set_index){
cljs.core.deref(rp.db.db_listener);

return cljs.core.first((function (){var G__49604 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921),new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?meso","?meso",-482259801,null),new cljs.core.Symbol(null,"?micro","?micro",274697114,null),new cljs.core.Symbol(null,"?workout","?workout",2079274254,null),new cljs.core.Symbol(null,"?exercise","?exercise",812724735,null),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","mesocycle","event/mesocycle",-877063244),new cljs.core.Symbol(null,"?meso","?meso",-482259801,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","microcycle","event/microcycle",65781575),new cljs.core.Symbol(null,"?micro","?micro",274697114,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","workout","event/workout",230278710),new cljs.core.Symbol(null,"?workout","?workout",2079274254,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","exercise","event/exercise",-686440847),new cljs.core.Symbol(null,"?exercise","?exercise",812724735,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("event","set-index","event/set-index",966873267),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null);
var G__49605 = cljs.core.deref(rp.db.conn);
var G__49606 = mesocycle;
var G__49607 = microcycle;
var G__49608 = workout;
var G__49609 = exercise;
var G__49610 = set_index;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__49604,G__49605,G__49606,G__49607,G__49608,G__49609,G__49610) : datascript.core.q.call(null, G__49604,G__49605,G__49606,G__49607,G__49608,G__49609,G__49610));
})());
});
/**
 * Serialize the database to EDN for storage.
 */
rp.db.db__GT_edn = (function rp$db$db__GT_edn(){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__49637 = cljs.core.deref(rp.db.conn);
return (datascript.core.serializable.cljs$core$IFn$_invoke$arity$1 ? datascript.core.serializable.cljs$core$IFn$_invoke$arity$1(G__49637) : datascript.core.serializable.call(null, G__49637));
})()], 0));
});
/**
 * Load database from EDN string.
 */
rp.db.load_from_edn_BANG_ = (function rp$db$load_from_edn_BANG_(edn_str){
if(cljs.core.truth_(edn_str)){
var db = (function (){var G__49643 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(edn_str);
var G__49644 = rp.db.schema;
return (datascript.core.from_serializable.cljs$core$IFn$_invoke$arity$2 ? datascript.core.from_serializable.cljs$core$IFn$_invoke$arity$2(G__49643,G__49644) : datascript.core.from_serializable.call(null, G__49643,G__49644));
})();
return cljs.core.reset_BANG_(rp.db.conn,db);
} else {
return null;
}
});

//# sourceMappingURL=rp.db.js.map
