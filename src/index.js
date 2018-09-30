module.exports = function solveEquation(equation) {
  const joinedEquation = equation.split(" ").join("");
  const answer = [];
  const a = parseInt(joinedEquation.slice(0 , joinedEquation.indexOf("*")),10);
  const b = parseInt(joinedEquation.slice(joinedEquation.indexOf("*") + 4 , joinedEquation.lastIndexOf("*")),10);
  const c = parseInt(joinedEquation.slice(joinedEquation.lastIndexOf("*")+2),10);
  const discriminant = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  const discriminant2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  answer.push(Math.round(discriminant));
  answer.push(Math.round(discriminant2));
  return answer.sort(function(a,b){return a-b})
}
