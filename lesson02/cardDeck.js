const value = ['A','K','Q','J','2','3','4','5','6','7','8','9','10'];
const suite = ['diamond', 'heart', 'club' ,'spade'];

for (let i of suite) {
  for (let x of value) {
    console.log(x + " of " +i)
  }
}
