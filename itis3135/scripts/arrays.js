let persons = ['Ben Linus', 'Elon Musk', 'Bob Sagget', 'Harry Potter',
'Jack Sheppard', 'John Locke', 'James Sawyer', 'Hurley Hugo]'];
let salaries = ['$ 12500', '12000', '11800', '9800', '9900', '6800', '7000', '8000'];

persons = document.getElementById("employee_list");
let salaryInput = document.getElementById("salary_input");

 starts
window.onload = function() {
  employeeList.focus();
}

function addSalary() {
  let selectedEmployee = employeeList.value;
  let salary = parseFloat(salaryInput.value);

  // Validate the inputs
  if (selectedEmployee === "") {
    alert("Please select an employee.");
    employeeList.focus();
    return;
  }
  if (isNaN(salary) || salary === "") {
    alert("Please enter a valid salary.");
    salaryInput.value = "";
    salaryInput.focus();
    return;
  }

  // Add the data to the arrays
  persons.push(selectedEmployee);
  salaries.push(salary);

  // Clear the inputs and move the cursor to the name field
  employeeList.value = "";
  salaryInput.value = "";
  employeeList.focus();

  // Display the data in the table
displaySalary();
}
function displayResults() {
    // Calculate the average salary
    const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    const averageSalary = totalSalary / salaries.length;
  
    // Find the highest salary
    const highestSalary = Math.max(...salaries);
  
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
    for (let i = 0; i < persons.length; i++) {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      nameCell.textContent = persons[i];
      const salaryCell = row.insertCell();
      salaryCell.textContent = `$${salaries[i].toFixed(2)}`;
    }
  }
  


