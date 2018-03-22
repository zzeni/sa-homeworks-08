/* jslint esnext:true */
(function () {
  'use strict';
  var array = ["биология", "химия", "информатика", "приложна математика"];
  var SUFFIXES = ['-ви', '-ри', '-ти', '-ти', '-ти', "-ти", '-ми', '-ми'];

  function Student(name, subject, semester) {

    if (!name) {
      throw new Error('липсва име!');
    }
    if (!subject) {
      throw new Error('липсва специалност!');
    }
    if (!array.includes(subject)) {
      throw new Error('грешна специалност!');
    }
    if (semester < 1 || semester > 8) {
      throw new Error('невалиден семестър');
    }
    this.name = name;
    this.subject = subject;
    this.semester = semester || 1;
  }

  var student = new Student("Иван Петров", "информатика", '6');
  var student2 = new Student("Георги Драганов", "информатика", "4");
  var student3 = new Student("Пешо", "химия");

  Student.prototype.toString = function toString() {
    var course = Math.round(this.semester / 2);
    return `${this.name}, ${this.subject}, ${course}${SUFFIXES[course -1]} курс, ${this.semester}${SUFFIXES[this.semester -1]} семестър'`;
  };
  Student.prototype.levelUp = function levelUp() {
    if (this.semester > 8) {
      throw new Error('студентът вече е завършил');
    }
    var course = Math.round(this.semester / 2);
    var incrementSemester = this.semester++;
    return `${this.name}, ${this.subject}, ${course}${SUFFIXES[course -1]} курс, ${incrementSemester}${SUFFIXES[this.semester -2]} семестър'`;
  };

  console.log(student.toString());
  console.log(student2.toString());
  console.log(student3.toString());
  console.log(student.levelUp());
  console.log(student.levelUp());
  console.log(student.levelUp());
  console.log(student.levelUp());



})();
