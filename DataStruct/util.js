function initStack(stack, count){
  for(var i = count; i > 0; i--)stack.push(i);
}
function printStack(stack){
  console.log(stack);
  while(stack.peek()){
    console.log(stack.pop());
  }
}

exports.initStack = initStack;
exports.printStack = printStack;