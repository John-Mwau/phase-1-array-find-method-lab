const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
function superbowlWin(records) {
    const resultYear = records.find(record => record.result === 'W');
    return resultYear ? resultYear.year : undefined;
}

const resultYear = superbowlWin(record);
console.log(resultYear);  