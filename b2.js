function nhap(){
    var dayso = document.querySelector(".dayso");
    var arrNumber = dayso.value.split(" ").map((item) => {
        return parseInt(item);
    }) 
    var maxValue = Math.max(...arrNumber);
    document.querySelector(".maxValue").innerHTML = maxValue;
    var sumEven = 0;
    arrNumber.forEach(number => {
        if(number > 0){
            sumEven += number;
        }
    });
    document.querySelector(".sumEven").innerHTML = sumEven;
    var arrEven = []
     arrNumber.forEach((number) =>{
        if(number % 2 == 0) arrEven.push(number);
    })
    arrEven.sort((a,b) => a-b)
    document.querySelector(".firstEven").innerHTML = arrEven[0];
    document.querySelector(".maxEven").innerHTML = arrEven[arrEven.length-1];
}