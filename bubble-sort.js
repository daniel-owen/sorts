var array = [6,1,9,2,8,3,5,4,7,0];

function bubbleSort(arr){
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length-1; j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

bubbleSort(array);