goog.provide('rp.plan');
rp.plan.template = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Twice a week upper body focus",new cljs.core.Keyword(null,"n-microcycles","n-microcycles",1899238572),(4),new cljs.core.Keyword(null,"workouts","workouts",1343445337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"monday","monday",-1107743655),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dumbbell Press (Incline)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cable Triceps Pushdown (Bar)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Seated Cable Row",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lying Biceps Dumbbell Curl",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Barbell Upright Row",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Barbell Squat (High Bar)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bodyweight Squat",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Back Raise",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1)], null)], null)], null)], null),new cljs.core.Keyword(null,"thursday","thursday",1681780767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pulldown (Narrow Grip)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cable Flexion Row",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Barbell Curl (Narrow Grip)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cable Overhead Triceps Extension",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pushup (Deficit)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dumbbell Shoulder Press",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Back Raise",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Barbell Squat (High Bar)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bodyweight Squat",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sets","n-sets",58835223),(1)], null)], null)], null)], null)], null)], null);
/**
 * Turn the n-sets specification from a template into n-sets maps.
 */
rp.plan.expand_exercises = (function rp$plan$expand_exercises(exercises){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__44371){
var vec__44372 = p__44371;
var exercise_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44372,(0),null);
var map__44375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44372,(1),null);
var map__44375__$1 = cljs.core.__destructure_map(map__44375);
var n_sets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44375__$1,new cljs.core.Keyword(null,"n-sets","n-sets",58835223));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exercise_name,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n_sets,cljs.core.PersistentArrayMap.EMPTY))], null);
}),exercises);
});
/**
 * Expand template into a full plan structure.
 */
rp.plan.__GT_plan = (function rp$plan$__GT_plan(p__44380){
var map__44381 = p__44380;
var map__44381__$1 = cljs.core.__destructure_map(map__44381);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var n_microcycles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44381__$1,new cljs.core.Keyword(null,"n-microcycles","n-microcycles",1899238572));
var workouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44381__$1,new cljs.core.Keyword(null,"workouts","workouts",1343445337));
var expanded_workouts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44382){
var vec__44384 = p__44382;
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44384,(0),null);
var map__44387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44384,(1),null);
var map__44387__$1 = cljs.core.__destructure_map(map__44387);
var exercises = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44387__$1,new cljs.core.Keyword(null,"exercises","exercises",-277203742));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day,rp.plan.expand_exercises(exercises)], null);
}),workouts));
var microcycles = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,expanded_workouts], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_microcycles));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776),microcycles], null);
});
rp.plan.plan = rp.plan.__GT_plan(rp.plan.template);

//# sourceMappingURL=rp.plan.js.map
