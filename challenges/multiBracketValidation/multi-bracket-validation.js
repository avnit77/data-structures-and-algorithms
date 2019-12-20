function multiBracketValidation(input) {
  let array = input.split('');
  let left = [];
  let right = [];
  array.forEach(character => {
    if(character === '(' || character === '{' || character === '['){
      left.push(character);
    }
    if(character === ')'){
      right.push('(');
    } if(character === '}'){
      right.push('{');
    } if(character === ']'){
      right.push('[');
    }
  });
  if(((left.sort()).toString()) === ((right.sort()).toString())){
    return true;
  } else {
    return false;
  }
}


module.exports = { multiBracketValidation };
