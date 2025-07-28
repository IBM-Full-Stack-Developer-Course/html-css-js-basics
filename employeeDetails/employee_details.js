const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialisation: 'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialisation: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'HR', salary: 60000, specialisation: 'Java' },
      //... More employee records can be added here
    ];

function displayEmployees() { 
    // Function to display all employees
    const totalEmployees = employees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialisation}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}


function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialisation}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialisation}</p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}


function findEmployeeBySpecialisation(employeeSpecialisation) {
    const foundEmployee = employees.find(employee => employee.specialisation === employeeSpecialisation);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} ${foundEmployee.specialisation}</p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialisation';
    }
}