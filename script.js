// complete the given function

function palindrome(str){
 // let string = str.toLowerCase();
	// let ispalindrome= true;
 //  let i=0,j=str.length()-1;
	// while (i <= j && ispalindrome) {
	// 	if (str[i]!==str[j]) {
	// 		ispalindrome=false;
	// 	}
	// 	i++;
	// 	j--;
	// }
	// return ispalindrome? true : false;
	 const len = string.length;

    // Use for loop to divide the words into 2 half
    for (let i = 0; i < len / 2; i++) {

        // validate the first and last characters are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
module.exports = palindrome
