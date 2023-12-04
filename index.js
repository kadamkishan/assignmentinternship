const employees=[
    {nameE:"Das",datejoin:"2021-05-15",designation:"Technical Writer",address:"Wagholi pune",salary:600000},
    {nameE:"Aditya",datejoin:"2021-02-15",designation:"software engineer",address:"Wagholi pune",salary:300000},

    {nameE:"Kiran",datejoin:"2021-05-1",designation:"Technical Writter",address:"Wagholi pune",salary:300000},

    {nameE:"Aryan",datejoin:"2021-05-1",designation:"Technical Writter",address:"Wagholi pune",salary:1300000},
]


const filteredEmployees=employees.filter(employees=>
    employees.salary>=50000 && employees.salary<=700000 && employees.designation==="Technical Writter"
)

// console.log(filteredEmployees);

const tableBody=document.getElementById("employeetable").getElementsByTagName('tbody')[0];



filteredEmployees.forEach(employee=>{
    
    console.log(employee.designation);
    const row=tableBody.insertRow();
    row.insertCell().textContent=employee.nameE;
    row.insertCell().textContent=employee.designation;
    row.insertCell().textContent=employee.datejoin;

});


//   row.insertCell().textContent=employee.datejoin;
// row.insertCell().textContext=employee.designation;
// row.insertCell().textContext=employee.datejoin;