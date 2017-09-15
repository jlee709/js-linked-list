/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  // this.head = null;
  var length = 0;
  var head = null;
  var tail = null;


    function getHead(){
        return head;
  }

// what is being referenced-
function add(value){
  var node = {
    value: value,
    next: null
  }; 
  
  if(head === null) {
    head = node;
    tail = node;
  }else{
    tail.next = node;
    tail = node;
  }
  return node;
}

  function get(index) {
    var node = head;
    var current = 0;
    while(current < index){
      if (node.next === null){
        return false;
      }
      node = node.next; 
      current++;
    } 
    return node;
  }


  function insert(){
    // body ..
  }



  function getTail(){
    return tail;
  }


  function remove() {
    // body...
  }


  function getNumber(number){
    // body...
  }




  function removeNumber(number){
    // body...
  }


  return {
    get: get,
    insert: insert,
    getHead: getHead,
    getTail: getTail,
    removeNumber: removeNumber,
    remove: remove,
    add: add,
    getNumber: getNumber,



  };
}