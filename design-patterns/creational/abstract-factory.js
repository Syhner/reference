class Student {}
class Teacher {}

class StudentFactory {
  create() {
    return new Student();
  }
}

class TeacherFactory {
  create() {
    return new Teacher();
  }
}

const studentFactory = new StudentFactory();
const teacherFactory = new TeacherFactory();

const persons = [];
persons.push(studentFactory.create());
persons.push(TeacherFactory.create());
