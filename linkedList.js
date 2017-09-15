/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  this.head = null;
  var length = 0;
  var head = null;
  var tail = null;
    function getHead(){
      if (head === null){
        return head;
      }
  }


  function get() {
    // body ..
  }

  function insert(){
    // body ..
  }



  function getTail(){
    return head;
  }


  function remove() {
    // body...
  }



  function add(value){
    var node = {
      value: value,
      next: null
   }; return node;


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