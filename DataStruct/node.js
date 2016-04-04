function Node(value, link){
  this._value = value;
  this._link = link;
}
Node.prototype = {
  constructor: Node,
  setValue:function(newValue){
    this._value = newValue;
  },
  getValue:function(){
    return this._value;
  },
  setLink:function(newLink){
    this._link = newLink;
  },
  getLink:function(){
    return this._link;
  }
}

exports.Node = Node;