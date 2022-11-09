"use strict";

const courseTableBody = document.querySelector("#courseTable tBody");

function loadCourseTableBody() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
      console.log(courses);
      courses.forEach((courses) => {
        let row = courseTableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerText = courses.id;
        cell2.innerText = courses.dept;
        cell3.innerText = courses.courseName;

      });
    });
}

window.onload = () => {
  loadCourseTableBody();
};
