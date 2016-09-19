var array = process.argv,
    total = 0;

for (var i = 2; i < array.length; i++) {
  total = total + Number(array[i]);
  //result += Number(process.argv[i])
}

console.log(total);

//creates array containg command line args
//starts for loop at index[2] - first index is node, second is path & filename
//increments total with next command line arg, converted to int
//logs total
