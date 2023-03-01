const addTwoNumbersCopie = function(l1, l2) {
	l1 = l1.reverse()
	l2 = l2.reverse()
	let sumL1 = l1.join('')
	let sumL2 = l2.join('')
	let sum = Number(sumL1) + Number(sumL2)
	sum = sum.toString()
	return sum.split('').reverse()
	
	
	
};

const addTwoNumbers = function(l1, l2) {
	let reverseL1 =''
	let reverseL2 = ''
	let current = new ListNode(0);
	let result = current;
	while(l1 || l2) {
		if(l1) {
			reverseL1 = l1.val + reverseL1
			l1 = l1.next;
		}
		if(l2) {
			reverseL2 = l2.val + reverseL2
			l2 = l2.next;
		}
	}
	/*
	let sum = Number(reverseL1) + Number(reverseL2)
	for (let index = 0; index < sum.length; index++) {
		const element = sum[index];
		result.next = new ListNode(Number(element));
	}
	
	return result.next
	*/
}



var addTwoNumbersCorrection = function(l1, l2) {
    
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
};

function isValidSubsequence(array, sequence) {
	let j = 0
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element === sequence[j]) {
      j++
		}
	}
	if(j === sequence.length) {
		return true
	}else {
		return false
	}
}

//console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 22, 6, -1, 8, 10]))


function sorted(array) {
	for (let index = 0; index < array.length; index++) {
		let minIndex  = index

		for (let j = minIndex + 1 ; j < array.length; j++) {
			if(array[minIndex] > array[j]) {
				minIndex = j
			}
		}
		if(minIndex != index) {
			let svg = array[index]
			array[index] = array[minIndex]
			array[minIndex] = svg
		}
		
	} 
	return array
}
function sortedSquaredArray(array) {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		array[index] = element * element;
	}
	sorted(array)
	
	return array
}




function binarySearch(array,target) {
	sorted(array)
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if(element === target) {
			return index
		}
	}
	return -1
	
}



function elementQuiManque(array) {
	sorted(array)
	
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if(element !== index + 1) {
			return index +1
		}
	}
}

//console.log(elementQuiManque([5,1,2,3])) // 4

const isPalindrome  = function(nbre) {
	const nbreString = nbre.toString()
	let nbreRight = ''
	for (let i = nbreString.length -1; i >= 0; i--) {
		const element = nbreString[i]
		nbreRight = nbreRight + element
	}
	if(nbreRight === nbreString) {
		return true
	}else {
		return false
	}

}

//isPalindrome(121)
const romanToInt = function(chaine) {
	const I = 1
	const V = 5
	const X = 10
	const L = 50
	const C = 100
	const D = 500
	const M = 1000
	const nbre = 0
	chaine.forEach(element => {
		if(element === M) {
			nbre +=element
		}
	});


}







