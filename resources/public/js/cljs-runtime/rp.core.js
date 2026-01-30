goog.provide('rp.core');
rp.core.init_BANG_ = (function rp$core$init_BANG_(){
return rp.storage.load_db_BANG_((function (){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rp.ui.app], null),document.getElementById("app"));

if(cljs.core.truth_(navigator.serviceWorker)){
navigator.serviceWorker.register("/sw.js").then((function (){
return console.log("SW registered");
})).catch((function (p1__49698_SHARP_){
return console.error("SW failed",p1__49698_SHARP_);
}));
} else {
}

return console.log("Romance Progression initialized");
}));
});

//# sourceMappingURL=rp.core.js.map
