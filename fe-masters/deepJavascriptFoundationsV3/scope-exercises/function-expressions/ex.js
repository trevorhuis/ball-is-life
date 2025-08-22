function sortStudentsAlphabetically(studentA, studentB) {
  return studentA.name.toLowerCase().localeCompare(studentB.name.toLowerCase());
}

function printStudent(student) {
  var message = `${student.name} (${student.id}): ${student.paid ? "" : "Not"} Paid`;
  console.log(message);
}

function addStudentNotCurrentlyEnrolledButIsPaid(student) {
  var studentIsPaidAndNotEnrolled =
    student.paid == true && !currentEnrollment.includes(student.id);
  if (studentIsPaidAndNotEnrolled) currentEnrollment.push(student.id);
}

function printRecords(recordIds) {
  function isStudentEnrolled(student) {
    return recordIds.includes(student.id);
  }

  studentRecords
    .filter(isStudentEnrolled)
    .sort(sortStudentsAlphabetically)
    .forEach(printStudent);
}

function paidStudentsToEnroll() {
  studentRecords.forEach(addStudentNotCurrentlyEnrolledButIsPaid);
  return currentEnrollment;
}

function remindUnpaid(recordIds) {
  function isEnrolledStudentUnpaid(student) {
    return currentEnrollment.includes(student.id) && student.paid == false;
  }

  studentRecords
    .filter(isEnrolledStudentUnpaid)
    .sort(sortStudentsAlphabetically)
    .forEach(printStudent);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll(studentRecords, currentEnrollment);
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
