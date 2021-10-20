// 3. Create an addStudent() function that will accept a name of the student and add it to the student array.

//studentList = ['John', 'Hane', 'John']; -> for test
studentList = [];

function addStudent(name){
	studentList.push(name);
	console.log(name + " has been added to the student's list.");
}

// 4. Create a countStudents() function that will print the total number of students in the array.

function countStudents(){
	studentNum = studentList.length;
	console.log("There are a total of " + studentNum + " student/s enrolled.")
}

// 5. Create a printStudents() function that will sort and individually print the students (sort and forEach methods) in the array.

function printStudents(){
	studentList.sort();
	studentList.forEach(function(name){
		console.log(name);
	});
}

/*6. Create a findStudent() function that will do the following:
Search for a student name when a keyword is given (filter method).
- If one match is found print the message studentName is an enrollee.
- If multiple matches are found print the message studentNames are enrollees.
- If no match is found print the message studentName is not an enrollee.
- The keyword given should not be case sensitive.
*/

function findStudent(name){
	let studentNames = studentList.filter(function(searchName){
		return (name == searchName);
	});
	if(studentNames.length == 0) {
		console.log("No student found with the name " + name);
	} else if(studentNames.length > 1){
		console.log(studentNames + " are enrollees");
	} else {
		console.log(studentNames + " is an Enrollee");
	}
}

//Included removeStudent() function.

function removeStudent(name){
	let locationStudent = studentList.indexOf(name);
	let removedStudent = studentList.splice(locationStudent, 1);
	console.log(removedStudent + " has been removed from the student's list.")
}