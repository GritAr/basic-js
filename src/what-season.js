const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) throw new Error('Something went wrong');
  let month = date.getMonth();
  if (month === 11 || month <= 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <=7 ) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  
};
