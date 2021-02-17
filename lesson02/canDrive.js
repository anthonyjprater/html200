const a = 'Jerry';
const b = 'Rice';
const c = 58;
const drivingAge = 16;
let $a = 'Ralph';
let $b = 'Wiggum';
let $c = 8;

function driving(firstName,lastName,age) {
  if (age >= 16) {
    console.log(firstName+' '+lastName+' has been driving for years '+(age-drivingAge));
  } else {
      for (let j = 5;j>=0;--j){
        console.log(j);
      }
  }
}

driving(a,b,c);

driving($a,$b,$c);
