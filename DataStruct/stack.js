var Node = require('./node.js');

function ArrayStack(){
  this.arr = [];
}
ArrayStack.prototype = {
  constructor:ArrayStack,
  push: function(data){
    console.log(data);
    this.arr.push(data);
  },
  pop: function(){
    if(this.arr.length > 0)return this.arr.pop();
  },
  peek: function(){
    if(this.arr.length > 0)return this.arr[arr.length-1];
  }
};

function LinkedListStack(){
  this.top = new Node(null, null);
}
LinkedListStack.prototype = {
  constructor:LinkedListStack,
  push: function(data){
    this.top = new Node(data, top);
  },
  pop: function(){
    var value = this.top.getValue();
    this.top = this.top.getLink();
    return value;
  },
  peek: function(){
    return this.top.getValue();
  }
};

exports.ArrayStack = ArrayStack;
exports.LinkedListStack = LinkedListStack;