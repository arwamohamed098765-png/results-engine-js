class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  calculateAverage() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  getGradeLetter(avg) {
    if (avg >= 90) return 'A (ممتاز)';
    if (avg >= 80) return 'B (جيد جداً)';
    if (avg >= 70) return 'C (جيد)';
    if (avg >= 60) return 'D (مقبول)';
    if (avg >= 50) return 'E (ضعيف)';
    return 'F (راسب)';
  }

  getFinalResult() {
    const avg = this.calculateAverage();
    if (avg >= 50 && this.attendance >= 75) {
      return 'ناجح';
    } else {
      return 'يحتاج مراجعة';
    }
  }
}

const studentsList = [
  new Student(1, 'arwa mohamed', [95, 92, 98], 95),
  new Student(2, 'mohamed', [82, 85, 84], 88)
];

console.log('--- تقرير نتائج الطلاب ---');

studentsList.forEach(student => {
  const avg = student.calculateAverage();
  const letter = student.getGradeLetter(avg);
  const result = student.getFinalResult();
  console.log('الاسم: ' + student.name + ' | المتوسط: ' + avg.toFixed(2) + ' | التقدير: ' + letter + ' | الحالة: ' + result);
});

const strugglingStudents = studentsList.filter(student => {
  const avg = student.calculateAverage();
  return avg >= 40 && avg < 50;
});

const boostedStudents = strugglingStudents.map(student => {
  const oldAvg = student.calculateAverage();
  const newAvg = oldAvg + 5;
  return {
    name: student.name,
    originalAverage: oldAvg,
    newAverage: newAvg,
    status: 'شمله قرار لجنة الرأفة'
  };
});

console.log('\n--- بعد تطبيق لجنة الرأفة ---');
console.table(boostedStudents);