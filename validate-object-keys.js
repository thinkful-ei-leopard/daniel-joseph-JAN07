function makeStudentsReport(data) {
    let arr = [];
    data.forEach(function(e) {
      arr.push(`${e.name}: ${e.grade}`)
    });
    return arr;
  }

  function enrollInSummerSchool(students) {
    students.forEach(function(e) {
      e.status = 'In Summer School';
    });
    return students;
  }

  function findById(items, idNum) {
    return items.find(item => item.id ===idNum);
  }

  function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length){
      return false;
    }
    for (let i=0; i < expectedKeys.length; i++) {
      if (!Object.keys(object).find(key => key === expectedKeys[i])){
        return false;
      }
    }
    return true;
    }