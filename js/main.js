// У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// Створіть метод this.recover, який дозволить поновити студента

class Student {
   constructor(university, course, fullName, marks=[]) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = marks;

   }
   getInfo(university, course, fullName) {
      console.log(`Студент ${course}го курсу ${university} ${fullName}`) ;
   }
   // getInfo(university, course, fullName) {
   //    console.log(`Студент ${course}го курсу ${university} ${fullName}`) ;
   // }
   // static getInfo(university, course, fullName) {
   //    return `Студент ${course}го курсу ${university} ${fullName}`;
   // }
   get getMarks() {
      return this.marks;
   }
   set setMark(mark) {
      return this.marks = [...this.marks, mark];
   }
   getAverageMark() {
      let result = this.marks.reduce((accum, mark) => {
         return accum + mark;
      }, 0);
      return parseFloat((accum / this.marks.lenght).toFixed(2));
   }
   dismiss() {
      this.marks = null;
      return this.marks;
   }
   recover() {
      this.marks = [];
      return this.marks;
   }
}

const ostap = new Student(`Вищої Школи Психотерапії м.Одеса`, 1, `Остап Родоманський Бендер`, [5, 4, 4, 5]);
// console.log(ostap)
ostap.getInfo()
console.log(ostap.getInfo());
console.log(ostap.getInfo(ostap.university, ostap.course, ostap.fullName))
console.log(ostap.getMarks);
console.log(ostap.getAverageMark);




// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )


// class Student {
//    constructor(university, course, fullName, marks=[]) {
//       this.university = university;
//       this.course = course;
//       this.fullName = fullName;
//       this.marks = marks;

//    }
   
//    getInfo() {
//       console.log(`Студент ${this.course}го курсу ${this.university} ${this.fullName}`) ;
//    }
//    get getMarks() {
//       return this.marks;
//    }
//    set setMark(mark) {
//       return this.marks = [...this.marks, mark];
//    }
//    getAverageMark() {
//       let result = this.marks.reduce((accum, mark) => {
//          return accum + mark;
//       }, 0);
//       return parseFloat((result / this.marks.length).toFixed(2));
//    }
//    dismiss() {
//       this.marks = null;
//       return this.marks;
//    }
//    recover() {
//       this.marks = [];
//       return this.marks;
//    }
// }

// const ostap = new Student(
// 	`Вищої Школи Психотерапії м.Одеса`, 
//   1, 
//   `Остап Родоманський Бендер`, 
//   [5, 4, 4, 5]
// );

// // console.log(ostap)
// //ostap.getInfo()
// //console.log(ostap.getInfo());
// //console.log(ostap.getInfo(ostap.university, ostap.course, ostap.fullName))
// //console.log(ostap.getMarks);
// //console.log(ostap.getAverageMark());

// class BudgetStudent extends Student {
// 	 constructor(university, course, fullName, marks=[]) {
// 			super(university, course, fullName, marks);
      
//    		if (this.marks == null) {
//       	console.log(`Ви отчислены. Стипендия вам не положена.`);
//       } else { 
//       	if (this.getAverageMark() >= 4) {
//       		setTimeout(this.getScholarship, 3000);
//         } else {
//         	console.log(`У вас низкий средний бал - вам стипендия не положена.`);
//         }
//       }
//    }
//    getScholarship() { 
//   		console.log(`Ви отримали 1400 грн. стипендії`);  
//    }
// }


// let bs = new BudgetStudent(
// 	`Вищої Школи Психотерапії м.Одеса`, 
//   1, 
//   `Остап Родоманський Бендер`, 
//   [5, 4, 4, 5]
// );

