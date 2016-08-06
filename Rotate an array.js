// Rotate an array 

// Rotate an array of n elements to the right by k steps. 

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].





// Method 1 - 

// Using intermediate array
// First find out correct number of rotations using mod
// Create temporary array
// Push array elements into that temporary array
// Copy that temporary array into  original array

// Observe above demo. It will take O(n) space and O(n) time


function rotateArray(nums,k){
	if(isNaN(k) || k<0)	
		throw "error";
	if(nums.length==0)	
		throw "error";
	if(k>nums.length)
		k=k%nums.length;
	var result = [];

	for(var i=0;i<k;i++){
		result[i]=nums[nums.length-k+i];
	}		 	
	var j = 0;
	for(var i=k;i<nums.length;i++){
		result[i]=nums[j];
		j++;
	}

	nums=result.slice();
	console.log(nums);
}






// Method 2 -

// Using bubble rotate
// By using bubble swap, we can solve this problem. 
// Move array elements from right side to left side of the array using bubble swap

// It will take O(1) space and O(n*k) time

function rotateArray(nums,k){
	if(isNaN(k) || k<0)	
		throw "error";
	if(nums.length==0)	
		throw "error";

	var len = nums.length;

	for(var i=0;i<k;i++){
		for(var j=len-1;j>0;j--){
			var temp=nums[j];
			nums[j]=nums[j-1];
			nums[j-1]=temp;
		}
	}	
	console.log(nums);
}







// Method 3  -

// Using Reversal
// Divide array into 2 parts based on given order. Reverse first part and then reverse second, then reverse whole array  
