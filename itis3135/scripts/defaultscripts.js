function displayTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById("time").innerHTML = "Today is " + strTime + " on " + date.toLocaleDateString() + ".";
}
setInterval(displayTime, 1000);
function scriptTest() {
  var name = document.getElementById("name").value;
  var mood = document.getElementById("mood").value;
  //alert("Hello " + name + ", it's great to hear that you're feeling " + mood + ".");
  alert(document.getElementById("introduction").innerHTML = "Welcome to Patel Corporations " + name + "! We are glad that you are feeling " + mood + ".");
}

function displayWorkouts() {
  var workoutList = document.getElementById("workout-list");
  workoutList.innerHTML = "This is a list of your physical experience: ";
  if (document.getElementById("bench-press").checked) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Bench Press"));
    workoutList.appendChild(li);
  }
  if (document.getElementById("squatting").checked) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Squatting"));
    workoutList.appendChild(li);
  }
  if (document.getElementById("deadlifting").checked) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Deadlifting"));
    workoutList.appendChild(li);
  }
  if (document.getElementById("running").checked) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Running"));
    workoutList.appendChild(li);
  }
  if (document.getElementById("swimming").checked) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Swimming"));
    workoutList.appendChild(li);
  }
}//
function displayExperience() {
  var experience = document.getElementById("self-defense").value;
  document.getElementById("experience").innerHTML = "Your self defense experience: " + experience;
}
function calculateBalance() {
  var caloriesEaten = parseInt(document.getElementById("calories-eaten").value);
  var caloriesBurned = parseInt(document.getElementById("calories-burned").value);
  var balance = caloriesEaten - caloriesBurned;
  document.getElementById("balance").innerHTML = "Your Caloric Balance: " + balance + " calories";
}
function calculateDifference() {
  var currentWeight = parseInt(document.getElementById("current-weight").value);
  var goalWeight = parseInt(document.getElementById("goal-weight").value);
  var difference = goalWeight - currentWeight;
  if (difference > 0) {
    document.getElementById("difference").innerHTML = "You need to gain " + difference + " pounds to reach your goal weight.";
  } else if (difference < 0) {
    document.getElementById("difference").innerHTML = "You need to lose " + Math.abs(difference) + " pounds to reach your goal weight.";
  } else {
    document.getElementById("difference").innerHTML = "You have already reached your goal weight.";
  }
}
function GainWeight() {
  document.getElementById("result").innerHTML = "To gain weight, eat 300 more calories per day and start lifting more weight and running less.";
}

function LoseWeight() {
  document.getElementById("result").innerHTML = "To lose weight, eat 200 fewer calories per day and start running and swimming more.";
}




