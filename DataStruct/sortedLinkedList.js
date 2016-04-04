var node = require('./node.js');
var Node = node.Node;

//有序链表
function SortedLinkedList(){
  this.root = new Node(null,null);
}
SortedLinkedList.prototype = {
  constructor:SortedLinkedList,
  insert:function(value){
    var node = new Node(value, null);
    var root = this.root;
    if(root.getLink()){
      while(root.getLink()&&root.getLink().getValue()<value)root = root.getLink();
      node.setLink(root.getLink());
      root.setLink(node);
    }else root.setLink(node);
  }
}

exports.SortedLinkedList = SortedLinkedList;