// 1
class Student {
   constructor(university, course, fullName, marks = []) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = marks;

   }
   getInfo() {
      return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`;
   }
   // getInfo() {
   //    console.log(`Студент ${this.course}го курсу ${this.university} ${this.fullName}`);
   // }
   get getMarks() {
      return this.marks;
   }
   set setMark(mark) {
      return this.marks = [...this.marks, mark];
   }
   getAverageMark() {
      let result = this.marks.reduce((accum, mark) => accum + mark, 0);
      // let result = this.marks.reduce((accum, mark) => {
      //    return accum + mark;
      // }, 0);
      return parseFloat((result / this.marks.length).toFixed(2));
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
console.log(ostap);
console.log (ostap.getInfo())
console.log(ostap.getMarks);
console.log(ostap.getAverageMark());
ostap.dismiss();
console.log(ostap.getMarks);
ostap.recover();
ostap.setMark = 5;
console.log(ostap.getMarks);

// 2
class BudgetStudent extends Student {
   constructor(university, course, fullName, marks = []) {
      super(university, course, fullName, marks);

      if (this.marks == null) {
         console.log(`Студент відрахований. Стипендія не нараховується.`);
      } else {
         if (this.getAverageMark() >= 4) {
            setTimeout(this.getScholarship, 3000);
         } else {
            console.log(`У студента низький середній бал. Стипендія не нараховується.`);
         }
      }
   }
   getScholarship() {
      console.log(`Студент отримав 1400 грн. стипендії.`);
   }
}

// const oleg = new BudgetStudent(
//    `Вищої Школи Психотерапії м.Одеса`,
//    1,
//    `Олег Блабла Блаблабла`,
//    null
// );

const serg = new BudgetStudent(
   `Вищої Школи Психотерапії м.Одеса`,
   1,
   `Сергій Блабла Блаблабла`,
   [5, 4, 5, 4]
);