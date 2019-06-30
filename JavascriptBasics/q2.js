class KeyUtil {
  static  getKeyFields(arr) {
	var result = arr.map(x=>x['keyField'])
	return result;
  }
}

console.log(KeyUtil.getKeyFields([metaDataParser]))

function groupObjectsBy(arr,key){
	var groupObject = {};
	for(i=0;i<arr.length;i++){
		if(groupObject.hasOwnProperty(arr[i][key])){
			groupObject[arr[i][key]].push(arr[i]);
		}else{
			groupObject[arr[i][key]]=[arr[i]]
		}
	}
	return groupObject;
	
}
var result = groupObjectsBy([
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
], "channel");

console.log(result);