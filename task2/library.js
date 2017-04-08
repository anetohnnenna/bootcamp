'use strict'

module.exports = {
aritGeo: function(array){
	var n = array.length - 1;
   if (array.length === 0) {
   	  return 0;
   	}
   	else if((array[n] / array[(n -1)]) === (array[n - 2])) {
   		return "Geometric";
   	}
   	else if((array[n] - array[(n - 1)]) === (array[n - 1] -array[n -2])){
   		return "Arithmetric";
   	}
   	else {
   		return -1;
   	}
   }
