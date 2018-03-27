const subjects = ['биология', 'химия', 'информатика', 'приложна математика'];

const suffixes = ['', '-ви', '-ри', '-ти', '-ти', '-ти', '-ти', '-ми', '-ми'];

function Student(name, subject, semester) {
	if (!name) {
		throw new Error('липсва име!');
	}

	if (!subject) {
		throw new Error('липсва специалност');
	}

	if (!subjects.includes(subject)) {
		throw new Error('невалидна специалност');
	}

	if (semester < 1 || semester > 8) {
		throw new Error('невалиден семестър');
	}

	this.name = name;
	this.subject = subject;
	this.semester = semester || 1;
	if (this.semester > 8) {
		this.isGraduated = true;
	} else {
		this.isGraduated = false;
	}
}

Student.prototype.toString = function studentToString() {
	var course = Math.round(this.semester / 2);

	return (
		this.name +
		', ' +
		this.subject +
		', ' +
		course +
		suffixes[course] +
		' курс, ' +
		this.semester +
		suffixes[this.semester] +
		' семестър'
	);
};

Student.prototype.levelUp = function studentLevelUp() {
	var course = Math.round(this.semester / 2);
	this.semester = this.semester + 1;

	if (this.semester >= 8) {
		throw new Error('Студентът е завършил!');
	}

	return (
		this.name +
		', ' +
		this.subject +
		', ' +
		course +
		suffixes[course] +
		' курс, ' +
		this.semester +
		suffixes[this.semester] +
		' семестър'
	);
};

var student = new Student('Иван Петров', 'информатика');

student.toString();

var pesho = new Student('Пешо', 'информатика', 3);

pesho.toString();
pesho.levelUp();