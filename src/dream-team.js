const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let membersArr = [];
  if(!members) {
    console.log(!members)
    return false;
  } else {
    for (let i = 0; i <= members.length - 1; i += 1) {
      if (typeof members[i] === 'string') {
        console.log(typeof members[i] === 'string') 
        membersArr.push(members[i]); 
      }   
    }    
  }
  return membersArr.map(member => member.trim()).map(member => member.slice(0, 1).toUpperCase()).sort().join('');  
}
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));
module.exports = {
  createDreamTeam
};
