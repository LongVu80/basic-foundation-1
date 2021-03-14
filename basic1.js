//Get 1 - 255
function returnFunc(){
    var arr=[];
    for(var i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}
console.log(returnFunc())

//Get even 1000
function sumEven(){
    var sum = 0;
    for(var i = 0; i<= 1000; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }
    return sum;
    
}
console.log(sumEven())

//Sum all Odd
function sumOdd(){
    var sum = 0;
    for(var i =1; i <= 5000; i++){
      if(i % 2 !== 0){
        sum = sum + i;
      }
    }
    return sum;
  }
  console.log(sumOdd())

  //Iterate an array
  function iterateArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(iterateArr([1,2,4]))
console.log(iterateArr([-5,2,5,12]))

//Find Max
function maxArr(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArr([-3,3,5,7]))

//Find Average
function avgArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
}
console.log(avgArr([1,3,5,7,20]))

//Return all odds
function oddArr(arr){
    for(var i = 0; i < 50; i++){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddArr([]))

//Greater than Y
function greaterArr(arr,Y){
    var count = 0;
    var Y = 3;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]> Y){
            count++;
        }
    }
    return count;
}
console.log(greaterArr([1, 3, 5, 7]))

//Array Squares
function squareArr(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log(squareArr([1,5,10,-2]))

//Negatives
function negArr(arr){
    for(var i =0; i <arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log(negArr([1,5,10,-2]))

//Max, Mim, Average
function maxMimAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
        }
        if(arr[i]< min){
            mim = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    var arrNew = [max,min,avg];
    return arrNew;
}
console.log(maxMimAvg([1,5,10,-2]))

//Swap Values
function swapArr(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length -1] = temp;
    return arr;
} 
console.log(swapArr([1,5,10,-2]))

//Numbers to String
function numString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(numString([-1,-3,2]))