import './App.css';
import React from 'react'


class School {
  constructor(name) {
    this.name = name;
    this.availableCourses = [];
    this.startedGroups=[];
  }

  registerCourse (name,totalLessons, availableTeachersAmount) {
    if(this.availableCourses.find(course=>course.name===name)) return;
      this.availableCourses.push(new Course(name,totalLessons, availableTeachersAmount));
  }

  startLearningGroup(courseName, teacherName, amountOfStudents){
    this.availableCourses.forEach(course => {
      if (course.name === courseName && course.availableTeachersAmount > 0) {
        course.availableTeachersAmount--;
        this.startedGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
      }
    });
  }

  endLearningGroup(courseName, teacherName){
    this.availableCourses.forEach(course => {
      if (course.name === courseName && course.availableTeachersAmount > 0) {
        course.availableTeachersAmount++;
      }
    })
    this.startedGroups = this.startedGroups.filter(course => course.courseName !== courseName || course.teacherName !==  teacherName );
  }

  getLearningGroupByCourseName(courseName){
    this.startedGroups = this.startedGroups.filter(course => course.courseName === courseName );
  }
}


class Course {
  constructor(name, totalLessons, availableTeachersAmount) {
    this.name = name;
    this.totalLessons=totalLessons;
    this.availableTeachersAmount = availableTeachersAmount;
  }
}

class LearningGroup {
  constructor(courseName, teacherName, amountOfStudents) {
    this.courseName = courseName;
    this.teacherName = teacherName;
    this.amountOfStudents = amountOfStudents;
    this.passedLessons = [];
  }

  doneLesson(lessonTitle, lessonTopic){
    if(this.passedLessons.find(lesson=>lesson.lessonTitle===lessonTitle)) return;
    this.passedLessons.push(new Lesson(lessonTitle,lessonTopic));
  }
}


class Lesson {
  constructor(lessonTitle,lessonTopic) {
    this.lessonTitle = lessonTitle;
   this.lessonTopic = lessonTopic;
  }
}


// Examples
const Hillel = new School('Hillel');
Hillel.registerCourse('React', 30, 3);
Hillel.startLearningGroup('React', 'Kateryna', 15);
Hillel.startLearningGroup('Angular', 'Kateryna', 15);
Hillel.getLearningGroupByCourseName('React');
const Courseria= new LearningGroup('React native', 'Kate', 15);
Courseria.doneLesson('lessonTitle', 'lessonTopic');
Courseria.doneLesson('lfffffff', 'llllll');
Courseria.doneLesson('lessonTitle', 'lessonTopic');
console.log(Hillel);
console.log(Courseria);

export default class App extends React.Component{
  componentDidMount (){

  }
  render() {
    return (
        <div className="wrapper container">
        </div>
    );
  }
}

