goog.provide('rp.ui');
/**
 * A single set with weight/reps inputs.
 */
rp.ui.set_row = (function rp$ui$set_row(mesocycle,microcycle,workout,exercise,set_index){
var weight = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var reps = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var logged = rp.db.get_set_log(mesocycle,microcycle,workout,exercise,set_index);
return (function (){
var completed_QMARK_ = (!((new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921).cljs$core$IFn$_invoke$arity$1(logged) == null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"kg",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = new cljs.core.Keyword("event","performed-weight","event/performed-weight",-596835921).cljs$core$IFn$_invoke$arity$1(logged);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(weight);
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49666_SHARP_){
return cljs.core.reset_BANG_(weight,p1__49666_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5rem"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"reps",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = new cljs.core.Keyword("event","performed-reps","event/performed-reps",1810961926).cljs$core$IFn$_invoke$arity$1(logged);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(reps);
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49667_SHARP_){
return cljs.core.reset_BANG_(reps,p1__49667_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
if(((cljs.core.seq(cljs.core.deref(weight))) && (cljs.core.seq(cljs.core.deref(reps))))){
return rp.db.log_set_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"mesocycle","mesocycle",-963467818),mesocycle,new cljs.core.Keyword(null,"microcycle","microcycle",230058657),microcycle,new cljs.core.Keyword(null,"workout","workout",280057936),workout,new cljs.core.Keyword(null,"exercise","exercise",-801618741),exercise,new cljs.core.Keyword(null,"set-index","set-index",797648137),set_index,new cljs.core.Keyword(null,"weight","weight",-1262796205),parseFloat(cljs.core.deref(weight)),new cljs.core.Keyword(null,"reps","reps",1391310856),parseInt(cljs.core.deref(reps))], null));
} else {
return null;
}
})], null)], null),((completed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2713"], null):null)], null);
});
});
/**
 * An exercise with its sets.
 */
rp.ui.exercise_card = (function rp$ui$exercise_card(mesocycle,microcycle,workout,p__49668){
var vec__49669 = p__49668;
var exercise_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49669,(0),null);
var sets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49669,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),exercise_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),exercise_name], null),(function (){var iter__5480__auto__ = (function rp$ui$exercise_card_$_iter__49672(s__49673){
return (new cljs.core.LazySeq(null,(function (){
var s__49673__$1 = s__49673;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49673__$1);
if(temp__5823__auto__){
var s__49673__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49673__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49673__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49675 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49674 = (0);
while(true){
if((i__49674 < size__5479__auto__)){
var idx = cljs.core._nth(c__5478__auto__,i__49674);
cljs.core.chunk_append(b__49675,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.set_row,mesocycle,microcycle,workout,exercise_name,idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__49697 = (i__49674 + (1));
i__49674 = G__49697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49675),rp$ui$exercise_card_$_iter__49672(cljs.core.chunk_rest(s__49673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49675),null);
}
} else {
var idx = cljs.core.first(s__49673__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.set_row,mesocycle,microcycle,workout,exercise_name,idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),rp$ui$exercise_card_$_iter__49672(cljs.core.rest(s__49673__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sets)));
})()], null);
});
/**
 * A workout day with its exercises.
 */
rp.ui.workout_section = (function rp$ui$workout_section(mesocycle,microcycle,p__49676){
var vec__49677 = p__49676;
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677,(0),null);
var exercises = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(day)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),clojure.string.capitalize(cljs.core.name(day))], null),(function (){var iter__5480__auto__ = (function rp$ui$workout_section_$_iter__49680(s__49681){
return (new cljs.core.LazySeq(null,(function (){
var s__49681__$1 = s__49681;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49681__$1);
if(temp__5823__auto__){
var s__49681__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49681__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49681__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49683 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49682 = (0);
while(true){
if((i__49682 < size__5479__auto__)){
var ex = cljs.core._nth(c__5478__auto__,i__49682);
cljs.core.chunk_append(b__49683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.exercise_card,mesocycle,microcycle,cljs.core.name(day),ex], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(ex)], null)));

var G__49699 = (i__49682 + (1));
i__49682 = G__49699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49683),rp$ui$workout_section_$_iter__49680(cljs.core.chunk_rest(s__49681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49683),null);
}
} else {
var ex = cljs.core.first(s__49681__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.exercise_card,mesocycle,microcycle,cljs.core.name(day),ex], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(ex)], null)),rp$ui$workout_section_$_iter__49680(cljs.core.rest(s__49681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(exercises);
})()], null);
});
/**
 * A week with its workouts.
 */
rp.ui.microcycle_section = (function rp$ui$microcycle_section(p__49684,mesocycle){
var vec__49685 = p__49684;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49685,(0),null);
var workouts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49685,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Week ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join('')], null),(function (){var iter__5480__auto__ = (function rp$ui$microcycle_section_$_iter__49688(s__49689){
return (new cljs.core.LazySeq(null,(function (){
var s__49689__$1 = s__49689;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49689__$1);
if(temp__5823__auto__){
var s__49689__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49689__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49689__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49691 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49690 = (0);
while(true){
if((i__49690 < size__5479__auto__)){
var workout = cljs.core._nth(c__5478__auto__,i__49690);
cljs.core.chunk_append(b__49691,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.workout_section,mesocycle,idx,workout], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(workout)], null)));

var G__49700 = (i__49690 + (1));
i__49690 = G__49700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49691),rp$ui$microcycle_section_$_iter__49688(cljs.core.chunk_rest(s__49689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49691),null);
}
} else {
var workout = cljs.core.first(s__49689__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.workout_section,mesocycle,idx,workout], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(workout)], null)),rp$ui$microcycle_section_$_iter__49688(cljs.core.rest(s__49689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.seq(workouts));
})()], null);
});
/**
 * Main app component.
 */
rp.ui.app = (function rp$ui$app(){
var map__49692 = rp.plan.plan;
var map__49692__$1 = cljs.core.__destructure_map(map__49692);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var microcycles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Track your workout progression"], null)], null),(function (){var iter__5480__auto__ = (function rp$ui$app_$_iter__49693(s__49694){
return (new cljs.core.LazySeq(null,(function (){
var s__49694__$1 = s__49694;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49694__$1);
if(temp__5823__auto__){
var s__49694__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49694__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__49694__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__49696 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__49695 = (0);
while(true){
if((i__49695 < size__5479__auto__)){
var micro = cljs.core._nth(c__5478__auto__,i__49695);
cljs.core.chunk_append(b__49696,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.microcycle_section,micro,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(micro)], null)));

var G__49701 = (i__49695 + (1));
i__49695 = G__49701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49696),rp$ui$app_$_iter__49693(cljs.core.chunk_rest(s__49694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49696),null);
}
} else {
var micro = cljs.core.first(s__49694__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.microcycle_section,micro,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(micro)], null)),rp$ui$app_$_iter__49693(cljs.core.rest(s__49694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(microcycles);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"Romance Progression \u2022 Local-first PWA"], null)], null)], null);
});

//# sourceMappingURL=rp.ui.js.map
