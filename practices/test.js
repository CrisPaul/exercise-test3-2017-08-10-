'use strict'

function countNum(collection){
    var tempCollection = [];
    collection.forEach(function (elem) {
        for(var i=0; i<tempCollection.length; i++){
            if(elem == tempCollection[i].key){
                tempCollection[i].count ++;
                return;
            }
        }
        tempCollection.push({
            key:   elem,
            count:  1
        })
    })
    return tempCollection;
}
function findNum(collection) {
    var resCollection = countNum(collection);
    resCollection.forEach(function (t,index,arr) {
        if(t.count == 1){
            console.log("Test array:" + collection +'\n');
            console.log("(" + t.key + ")is the number only occurred for once" + t.index);
        }
    })
}
var collection = [1,5,3,4,2,1,3,4,5];
findNum(collection);