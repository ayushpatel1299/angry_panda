let persons = [];
let salaries = [];

const employeeList = document.getElementById("employee_list").options;
//const employees = document.getElementById("employee_list").value;
let salaryInput = document.getElementById("salary_input");

for(p=1; p<=8; p++){
  persons[p]=employeeList[p].text;
  salaries[p]=0;
}
//console.log(persons);
//console.log(salaries);
function addSalary() {
  
  let selectedEmployee = employee_list.selectedIndex;
  let salary = parseFloat(salaryInput.value);
  salaries[selectedEmployee] = salary;

  console.log(salary);

  // Validate the inputs
  if (selectedEmployee === "") {
    alert("Please select an employee.");
    employee_list.focus();
    return;
  }
  if (isNaN(salary) || salary === "") {
    alert("Please enter a valid salary.");
    salaryInput.value = "";
    salary_input.focus();
    return;
  }
  // Clear the inputs and move the cursor to the name field
  employeeList.value = "";
  salary_input.value = "";
  employee_list.focus();

  // Display the data in the table
displaySalary();
}
function displayResults() {
    // Calculate the average salary
    const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    const averageSalary = totalSalary / (salaries.length -1);
  
    // Find the highest salary

    let sals =[];
    for(var s = 1; s < salaries.length; s++){
      sals.push(salaries[s]);
    }
    console.log(sals);

    const highestSalary = Math.max(...sals);
  
    // Create the heading and paragraphs for the results
    const heading = document.createElement('h2');
    heading.textContent = 'Results';
  
    const avgSalaryP = document.createElement('p');
    avgSalaryP.textContent = `Average Salary: $${averageSalary.toFixed(2)}`;
  
    const highestSalaryP = document.createElement('p');
    highestSalaryP.textContent = `Highest Salary: $${highestSalary.toFixed(2)}`;
  
    // Clear any existing content in the results div
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    // Append the new nodes to the results div
    resultsDiv.appendChild(heading);
    resultsDiv.appendChild(avgSalaryP);
    resultsDiv.appendChild(highestSalaryP);
  }  
  function displaySalary() {
    // Get the table element and clear any existing rows
    const table = document.getElementById('results_table');
    table.innerHTML = '';
  
    // Add the header row
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell();
    nameHeader.textContent = 'Person';
    const salaryHeader = headerRow.insertCell();
    salaryHeader.textContent = 'Salary';
  
    // Add a row for each person and their salary
    for (let i = 1; i < persons.length; i++) {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      nameCell.textContent = persons[i];
      const salaryCell = row.insertCell();
      salaryCell.textContent = `$${salaries[i].toFixed(2)}`;
    }
  }
  


