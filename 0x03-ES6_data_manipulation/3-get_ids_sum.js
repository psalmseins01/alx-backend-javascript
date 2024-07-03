const getStudentIdsSum = (listStudents) => listStudents.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum;
