var statck = require('./stack.js');
var ArrayStack = statck.ArrayStack;
var LinkedListStack = stack.LinkedListStack;
var util = require('./util.js');

var as = new ArrayStack();
util.initStack(as);
util.printStack(as);
var ls = new LinkedListStack();
util.initStack(ls);
util.printStack(ls);