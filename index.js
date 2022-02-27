// function recievesAFunction(cb){
//     console.log(cb());
// }
// recievesAFunction(function(){
//     return "I returned the callback function!";
// });

function receivesAFunction(cb){
    cb();
  }
  
function returnsANamedFunction(){
  return function namedFunction(){
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    
  }
}