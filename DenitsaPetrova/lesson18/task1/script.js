/* jslint esnext: true*/
/* global  document */

(function () {
  "use strict";
  const SUBJECT = ["биология", "химия", "приложна математика", "информатика"];

  const SUFFIXES = ["ви", "ри", "ти", "ти", "ти", "ти", "ми", "ми"];

  function Student(name, subject, semester) {
    if (!name) {
      throw new Error(alert("Miss name!"));
    }
    if (!subject) {
      throw new Error(alert("Miss subject!"));
    }
    if (!SUBJECT.includes(subject)) {
      throw new Error(alert("Invalid subject! Choose: " + SUBJECT));
    }
    if (semester > 8 || semester < 1) {
      throw new Error(alert("Invalid semester!"));
    }
    this.name = name;
    this.subject = subject;
    this.semester = semester || 1;
    this.isGraduated = false;
  }

  Student.prototype.Semester = function () {
    return this.semester >= 8 ? this.isGraduated = true : this.isGraduated = false;
  };

  Student.prototype.toString = function () {
    var course = Math.round(this.semester / 2);
    return "<div>Име: " + this.name + ", <br>" +
      "Специалност: " + this.subject + ", <br>" +
      "Семестър: " + this.semester + "-" + SUFFIXES[this.semester - 1] + ", <br>" +
      "Курс: " + course + "-" + SUFFIXES[course - 1] + "</div><hr>";
  };

  Student.prototype.levelUp = function () {
    if (this.isGraduated) {
      throw new Error(alert("He is graduated"));
    }
    return this.semester++;
  };

  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var number = document.getElementById("number").value;

  var student = new Student(name, subject, number);

  function displayStatus() {
    var statusContainer = document.getElementById("JScod");
    statusContainer.innerHTML += student.toString();
  }

  function startDisplay() {
    for (let i = 0; i < 5; i++) {
      displayStatus(student.toString());
      student.levelUp();
      student.Semester();
    }
  }

  document.getElementById("enter").addEventListener("click", startDisplay);

})();
