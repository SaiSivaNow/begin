function SortArray(originalArray) {
  this.originalArray = originalArray;
  
  //private function
  function sort(){
	  return originalArray.sort();
  }
  this.getSortedArray = function() {
        return sort();
    }
}


var input = [1,3,2,4]

//extended class
function SortedObjectArray(originalObjectArray) {
  SortArray.call(this,originalObjectArray); 
}

SortedObjectArray.prototype = Object.create(SortArray.prototype);

var store = new SortedObjectArray(input);
console.log(store.getSortedArray());