function SkipNode(key, value, left, right, up, down){
  this.key = key;
  this.value = value;
  this.left = left;
  this.right = right;
  this.up = up;
  this.down = down;
}
/*SkipNode.prototype = {
  constructor: SkipNode,
  getKey: function(){
    return key;
  },
  setKey: function(newKey){
    this.key = newKey;
  },
  getValue: function(){
    return value;
  },
  setValue: function(newValue){
    this.value = newValue;
  },
  getUp: function(){
    return up;
  },
  setUp: function(newUp){
    this.up = newUp;
  },
  getDown: function(){
    return down;
  },
  setDown: function(newDown){
    this.down = newDown;
  },
  getLeft: function(){
    return left;
  },
  setLeft: function(newLeft){
    this.left = newLeft;
  },
  getRight: function(){
    return right;
  },
  setRight: function(newRight){
    this.right = newRight;
  }
}*/
/*
跳表
*/
function SkipList(){
  this.count = 2;
  this.last = new Node(this.count-1, Number.MAX_VALUE);
  this.firt = new Node(0, Number.MIN_VALUE, last);
  this.top = this.firt;
  
}
SkipList.prototype = {
  constructor: SkipList
}

exports.SkipList = SkipList;

/*
http://dsqiu.iteye.com/blog/1705530
http://www.mathcs.emory.edu/~cheung/Courses/323/Syllabus/Map/skip-list-impl.html
http://www.acmerblog.com/skip-list-impl-java-5773.html
http://www.mathcs.emory.edu/~cheung/Courses/323/index.html
*/
