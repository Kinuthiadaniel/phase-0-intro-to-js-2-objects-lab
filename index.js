// Write your solution in this file!
const employee = {
  name : "Your Name",
  streetAddress : "Your Street"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,value){
employee[name]=value;
return employee;
}
function deleteFromEmployeeByKey(employee, key){
const newEmployee2={...employee}
delete newEmployee2[key]
return newEmployee2; 
}
function destructivelyDeleteFromEmployeeByKey(employee,key,){
  delete employee[key]
  return employee;
}

