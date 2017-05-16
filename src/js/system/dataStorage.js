
let session,
    handleSession,
    handleLocalStorage,
    handleForage;
session=window.sessionStorage;
let local = window.localStorage;


//
 handleSession={
    set: (key, value)=> {
        let valueType = typeof value;
        if(valueType=='object'){
            value=JSON.stringify(value)
        }
        session.setItem(key,value);
    },
    get: (key)=> {
        let value=session.getItem(key);
        try{
            value =JSON.parse(value)
        }catch (error){
            //console.log(error);
        }
        return value;
    },
    remove:function(k){
        session.removeItem(k);
    }
};
//localStorage
 handleLocalStorage={
    set: (key, value)=> {
        let valueType = typeof value;
        if(valueType=='object'){
            value=JSON.stringify(value)
        }
        local.setItem(key,value);
    },
    get: (key)=> {
        //console.log(key);
        let value=local.getItem(key);
        let valueType = typeof value;
        try{
            value =JSON.parse(value);
            // console.log(value);
        }catch (error){
            // console.log(error);
        }
        return value;
    },
    remove(key){
        local.removeItem(key)
    },
     clear(){
         local.clear()
     }
};
export const handleIndexedDB={
    set:function (key,data) {
        localforage.setItem(key, data);
    },
    get:function (key) {
        localforage.getItem(key).then(function(value) {
            return value;
        }).catch(function(err) {
            console.error(err);
        });
    },
    remove:function (key) {
        localforage.removeItem(key).then(function() {
            // Run this code once the key has been removed.
            console.log('Key is cleared!');
        }).catch(function(err) {
            // This code runs if there were any errors
            console.error(err);
        });
    }
};

module.exports={handleSession,handleLocalStorage,handleIndexedDB,handleForage};