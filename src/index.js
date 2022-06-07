// complete the function
function prime (num) {
  if (num === 1) {
    return false;
  }
  else if(num === 2) {
    return true;
  }
  else {
    for(var x = 2; x < num; x++) {
      if(num % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
