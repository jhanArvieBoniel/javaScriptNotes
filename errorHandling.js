/* function addTwoNums(a,b){
    try {
      if (typeof(a) != "number"){
          throw new ReferenceError("The FIRST argument is not a number.")
        } else if (typeof(b) != "number"){
          throw new ReferenceError("The SECOND argument is not a number")
        } else {
          console.log(a+b)
        }
      } catch(err){
        console.log("ERROR!", err)
      }
  }
  addTwoNums(5, "5");
  console.log("It still works"); */
  console.log("-------------------------")
  //Using typeof() Method
  
  var test = typeof("what is this");
  var test2 = typeof(10);
  var test3 = typeof(3.14);
  var test4 = typeof(true);
  var test5 = typeof(1 < 2);
  var test6 = typeof([1, 2, 3, 4]);
  var test7 = typeof({firstProperty: 1});
  var test8 = typeof(function abc(){console.log("abc");});
  console.log(test2);