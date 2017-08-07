# Roblox-English-to-Lua-Converter
Summary: Webpage converts english syntax into Lua code commands for the online game, Roblox

Goal: Simplify coding for young-minds looking for a start in the world of programming by offering an alternative to Lua that closer mirrors the English language.

Use: Convert commands in the english syntax to code commands in the Lua based language used to develop programs for the online social/kids game, Roblox.

Process:
1. Input a supported command into the CommandPrompt.
2. Click the "Process Code" button below the CommandPrompt.
3. Copy and pase the generated Lua code from the Console for use in a separate program.

Support commands at initial GitHub release:
	- New .. [ Part, String / StringValue, Int / IntValue]
	
		- .. Name
		
		- .. Value
		
		- EXAMPLE : Create a new part named Brick
		
			Create a new string named Artist with value BobMarley
			
	- NOTE: Unsupported syntax or words will be ignored
	
  - Special characters: ' "
  
      Using " or ' starts and closes a print statement that outputs the contents between open/closing quotation/brackets.
      
          EXAMPLE: "Hello world" prints, "Hello world" in the Console
