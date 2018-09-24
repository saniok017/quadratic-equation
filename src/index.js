module.exports = function solveEquation(equation) {
  this.equation= equation.split(" ").join("");
  this.answer = [];
  this.a = parseInt(this.equation.slice(0,this.equation.indexOf("*")),10);
  this.b = parseInt(this.equation.slice(this.equation.indexOf("*")+4,this.equation.lastIndexOf("*")),10);
  this.c = parseInt(this.equation.slice(this.equation.lastIndexOf("*")+2),10);
  this.result = (-1 * this.b + Math.sqrt(Math.pow(this.b, 2) - (4 * this.a * this.c))) / (2 * this.a);
  this.result2 = (-1 * this.b - Math.sqrt(Math.pow(this.b, 2) - (4 * this.a * this.c))) / (2 * this.a);
  this.answer.push(Math.round(this.result));
  this.answer.push(Math.round(this.result2));
  return this.answer.sort(function(a,b){return a-b})
}
