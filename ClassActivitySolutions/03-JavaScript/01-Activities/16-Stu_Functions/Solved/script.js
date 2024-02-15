// isEqual using function declaration
function isEqual(placeholder1, placeholder2) {
  console.log({placeholder1, placeholder2}, typeof placeholder1, typeof placeholder2)
  if (placeholder1 === placeholder2) {
    console.warn('They are equal in type and value');
  } else if (placeholder1 == placeholder2) {
    console.warn('They are equal in value');
  } else if (typeof placeholder1 === typeof placeholder2) {
    console.error('they are equal in type')
  } else {
    console.warn('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);

// Logs "They are not equal"
// isEqual('pineapple', "strawberries")


// isEqualTakeTwo using function expression 
var isEqualTakeTwo = function (x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
};

// const isEqualTakeTwo = (x, y) => {}

// Logs "They are not equal"
isEqualTakeTwo(10, true);
