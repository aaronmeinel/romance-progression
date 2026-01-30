goog.provide('rp.storage');
rp.storage.DB_KEY = "rp-workout-db";
/**
 * Persist the database to localStorage.
 */
rp.storage.save_db_BANG_ = (function rp$storage$save_db_BANG_(){
try{return localStorage.setItem(rp.storage.DB_KEY,rp.db.db__GT_edn());
}catch (e49654){var e = e49654;
return console.error("Failed to save DB:",e);
}});
/**
 * Load the database from localStorage and call callback when done.
 */
rp.storage.load_db_BANG_ = (function rp$storage$load_db_BANG_(on_complete){
try{var temp__5823__auto___49656 = localStorage.getItem(rp.storage.DB_KEY);
if(cljs.core.truth_(temp__5823__auto___49656)){
var data_49657 = temp__5823__auto___49656;
rp.db.load_from_edn_BANG_(data_49657);
} else {
}
}catch (e49655){var e_49658 = e49655;
console.error("Failed to load DB:",e_49658);
}
cljs.core.add_watch(rp.db.db_listener,new cljs.core.Keyword(null,"auto-save","auto-save",1805740650),(function (_,___$1,___$2,___$3){
return rp.storage.save_db_BANG_();
}));

return (on_complete.cljs$core$IFn$_invoke$arity$0 ? on_complete.cljs$core$IFn$_invoke$arity$0() : on_complete.call(null, ));
});

//# sourceMappingURL=rp.storage.js.map
