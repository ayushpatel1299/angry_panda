//getShape function
function getShape() {
  let number = document.getElementById("UserInput").value;
  if (validateEntry(number)) {
    //assign polygon nas with nuers
    let polygons = {
      0: "No shape",
      1: "Monogon",
      2: "Digon",
      3: "Triangle",
      4: "Quadrilateral",
      5: "Pentagon",
      6: "Hexagon",
      7: "Heptagon",
      8: "Octagon",
      9: "Nonagon",
      10: "Decagon"
    };
    //Output polygon name corresponding to the number input
    let polygon = polygons[parseInt(number)];
    document.getElementById("result").textContent = "The polygon with " + number + " sides is: " + polygon + ".";
  } else {
    document.getElementById("result").textContent = "";
  }
}
  //data validation function
    function validateEntry(entry) {
			let number = parseInt(entry);
      //let nuer be between 0 and 10
			if (isNaN(number) || number < 0 || number > 10) {
        //error message
				document.getElementById("errorMessage").textContent = "Error: You must enter a number between 0 and 10.";
				return false;
        //else display output
			} else {
				document.getElementById("errorMessage").textContent = "";
				return true;
			}
		}
		
		
	
