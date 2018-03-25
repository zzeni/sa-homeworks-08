const subjects = ["биология", "химия", "информатика", "приложна математика"];
const suffix = ['', '-ви', '-ри', '-ти', '-ти', '-ти', '-ти', '-ти', '-ми'];

function Student(name, subject, semester) {
    if (!name) {
        throw new Error('липсва име');
    }
    if (!subjects.includes(subject)) {
        throw new Error('невалидна специалност');
    }

    if (semester < 1 || semester > 8) {
        throw new Error('Въведете правилен семестър');
    }
    this.name = name,
    this.subject = subject;
    this.semester = semester || 1;
}

Student.prototype.toString = function () {
    var course = Math.round(this.semester / 2);
    return this.name + ', ' + this.subject + ', ' + orderedNum(course) + ' курс ' + orderedNum(this.semester) + ' семестър';
};

Student.prototype.levelUp = function () {
    this.semester += 1;
    if (this.semester > 8) {
        throw new Error(this.name + ' е вече завършил');
    }
};

function orderedNum(num) {
    return num + suffix[num];
}

var studentIvan = new Student('Иван', 'информатика', 1);