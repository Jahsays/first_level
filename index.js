// 1 Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures? 

function isUnique(string) {
         
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == string.charAt(i + 1)) {
            return false;
        }
    }
    return true;
}

isUnique("night");       //true 
isUnique("nightingale"); //true
isUnique("nighfall");    //false


// 2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. 

var noOfChars = 256;

function checkPermutation(string1, string2)
{
	var count1 = Array(noOfChars);
	var count2 = Array(noOfChars);
	count1.fill(0);
	count2.fill(0);
	var i;

	for(i = 0;
		i < string1.length && i < string2.length;
		i++)
	{
		count1[string1[i]]++;
		count2[string2[i]]++;
	}

	if (string1.length != string2.length)
		return false;

	for(i = 0; i < noOfChars; i++)
		if (count1[i] != count2[i])
			return false;

	return true;
}

checkPermutation("carpet","petcar");    //true
checkPermutation("carpet","carriage");  //false

// 3 URLify: Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters, and that you are 
// given the "true" length of the string. (Note: If implementing in Java, please use a character array so 
// that you can perform this operation in place.) EXAMPLE Input: "Mr John Smith ", 13 Output:
//  "Mr%20John%20Smith" 

    function urlify(string){
    return string.replaceAll(" ", "%20");
    }
       
    urlify("mr john smith");      //'mr%20john%20smith' 
    urlify("mrs jane smith");     //'mrs%20jane%20smith'  

// 4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
//  A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of varters. The palindrome does not need to be limited to just dictionary words.
//  EXAMPLE Input: Tact Coa Output: True (permutations: "taco cat", "atco eta", etc.)


const checkPalindrome = str => str === str.split("").reverse().join("");

checkPalindrome("hannah");   //true
checkPalindrome("bob");      //true
checkPalindrome("kelly");    //false


// 5 One Away: There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. Given two strings,
//  write a function to check if they are one edit (or zero edits) away.
//  EXAMPLE pale, ple -> true 
//  pales, pale -> true
//  pale, bale -> true
//   pale, bake -> false 


	function oneAway(string1, string2){

		var m = string1.length;
    var n = string2.length;

		if (Math.abs(m - n) > 1)
			return false;

			var count = 0;
			var i = 0; 
      var j = 0;

		while (i < m && j < n)
		{
			if (string1[i] != string2[j])
			{
				if (count == 1)
					return false;
				if (m > n)
					i++;
				else if (m< n)
					j++;
				else
				{
					i++;
					j++;
				}

				count++;
			}
			else
			{
				i++;
				j++;
			}
		}
		if (i < m || j < n)
			count++;

		return count == 1;
	}
	
  oneAway("game","gam");    //true
  oneAway("guile","guy");   //false

// 6 String Compression: Implement a method to perform basic string compression using the counts of repeated
//  characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string
//  would not become smaller than the original string, your method should return the original string. 
// You can assume the string has only uppercase and lowercase varters (a - z).

function stringCompression(char){
    var compressedString = ''
    const charArray = char.split('')
    for (var i = 0; i < charArray.length; i++){
      var count = 1
      var currentvarter = charArray[i]
      while (i < charArray.length - 1 && charArray[i] === charArray[i + 1]){
        count++
        i++
      }
      if (count === 1){
        compressedString += currentvarter
      } else {
        compressedString += currentvarter + count
      }
    }
    return compressedString
  }

  stringCompression("trespass");   //'trespastring2'
  stringCompression("transpire");  //'transpire'






