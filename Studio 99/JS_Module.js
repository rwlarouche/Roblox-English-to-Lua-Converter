// Special characters: ' "

function getInput(){
	var input = document.getElementById("CommandPrompt").value.split(/\s+/);
	generateCode(input);
}

function generateCode(input){
	var output = processInput(input);
	document.getElementById("Console").value = output;
}

function processInput(input){
	var output = "";
	var varCount = 0;
	var specialCharMode = false;
	
	for (i = 0; i < input.length; i++) {
		var returnArray = [];
		
		// Special character check (" and ') - If within those characters, script is printing a string statement
		var modelastword = specialCharMode;
		specialCharMode = checkForSpecialChars(specialCharMode, input[i], output);
		
		if (specialCharMode == "sameword") {
			output += input[i];
			specialCharMode = false;
		}
		
		// If special char true, print every word (like a print statement)
		if ((specialCharMode == true) || (modelastword != specialCharMode)){
				if ((specialCharMode == true) && (modelastword != specialCharMode)){
					output += "\n"
				}
				if ((modelastword == specialCharMode) || (specialCharMode == false)){
					output += " "; // Must add a space between words if more print statement is more than one word
				}
				output += input[i];
				if (specialCharMode == false){
					output += "\n";
				}
				continue;
		}
		
		switch(input[i].toLowerCase()){						
			// New object creation [Currently supports: Part, StringValue, IntValue] [Supported Properties: Name, Value]
			case "new":
				varCount++;
				switch (input[i+1].toLowerCase()) {
					case "part":
						var varElementType = "Part";
						break;
						
					case "stringvalue":
						var varElementType = "StringValue";
						break;
					case "string":
						var varElementType = "StringValue";
						break;
						
					case "intvalue":
						var varElementType = "IntValue";
						break;
					case "int":
						var varElementType = "IntValue";
						break;
				}
				var varName = varElementType + varCount;
				var varParent = "parent" + varCount
				output += "\nlocal " + varParent + " = ENTER PATH TO PARENT HERE\n"
				output += 'local ' + varName + ' = Instance.new("' + varElementType + '")\n';
				output += varName + ".Parent = " + varParent + "\n";
				break;
		
			case "named":
				var varElementName = input[i+1];
				output += varName + '.Name = "' + input[i+1] + '"\n';
				break;
		
			case "value":
				var varValue = input[i+1];
				switch (varElementType) {
					case "StringValue":
						output += varName + '.Value = "' + varValue + '"\n';
						break;
					case "IntValue":
						output += varName + '.Value = ' + varValue + '\n';
						break;
					default:
						output += "-- Error: Object type does not support 'Value' Property\n";
				}
				break;
			default:
				break;
		}
	}
	return output;
}

function checkForSpecialChars(mode, checkMe, output){
	if (checkMe == "'" || checkMe == '"' || checkMe.charAt(0) == "'" || checkMe.charAt(checkMe.length-1) == "'" || checkMe.charAt(0) == '"' || checkMe.charAt(checkMe.length-1) == '"'){
		if(checkMe.length > 1){
			if (checkMe.charAt(0) == "'" && checkMe.charAt(checkMe.length-1) == "'"){
				return mode = "sameword";
			}
			if (checkMe.charAt(0) == '"' && checkMe.charAt(checkMe.length-1) == '"'){
				return mode = "sameword";
			}
		}
		// HAVE TO CHECK IF "" or '' STARTS AND ENDS ON SAME WORD like "hello"
		mode = !mode;
	}
	return mode;
}
