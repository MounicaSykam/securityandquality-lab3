//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

var patternRegex = /^([nN0-9]+)$/;
var digitsRegex = /\d/;
var caseRegex = /[A-Z]/i;
 function checkHumbrId(idIn){
	 "use strict";
	 let validID = false;
	 if (patternRegex.test(idin) ) && digitsRegex.test (idIn) && caseRegex.test (idIn)  {
		 validID = "true";
	 }
	return  validID;
	
	 
 }
