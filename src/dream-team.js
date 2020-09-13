const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(teammates) {
 
  if ( !Array.isArray(teammates)) return false

  return teammates.
    filter((i) => {if ( typeof(i) === 'string') return i})
    .map(el => el.trim()[0].toUpperCase())
    .sort()
    .join('')

}

