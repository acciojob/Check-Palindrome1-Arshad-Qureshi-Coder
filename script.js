// complete the given function

function palindrome(str){
 let string = str.toLowerCase();
	let ispalindrome= true;
  let i=0,j=str.length()-1;
	while (i <= j && ispalindrome) {
		if (str[i]!==str[j]) {
			ispalindrome=false;
		}
		i++;
		j--;
	}
	return ispalindrome? true : false;
}
module.exports = palindrome
