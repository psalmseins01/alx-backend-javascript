function getStudentsByLocation(students, city) {
  return students.filter((myStudent) => myStudent.location === city);
}

export default getStudentsByLocation;
