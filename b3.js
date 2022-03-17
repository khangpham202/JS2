document.querySelector("form").addEventListener("submit",(e) => {
    e.preventDefault()
})
document.querySelector("button").addEventListener("click",() => {
    submit()
})
function submit(){
    var fullname = document.querySelector(".fullname");
    var counta = fullname.value.split("a").length - 1;
    document.querySelector(".counta").innerHTML = counta;
    var reverseChar = ""
    for(let i = 0; i < fullname.value.length; i++){
        if(fullname.value[i].charCodeAt(0) !== 32){
            if(fullname.value[i].charCodeAt(0) > 90){
                reverseChar += String.fromCharCode(fullname.value[i].charCodeAt(0)-32)
             }
             else{
                reverseChar += String.fromCharCode(fullname.value[i].charCodeAt(0)+32)
             }
        }
        else{
            reverseChar += " ";
        }
    }
    var arrName = fullname.value.split(" ")
    var longestLength = 0;
    arrName.forEach(item => {
        if(longestLength < item.length){
            longestLength=item.length
        }
    });
    document.querySelector(".upperandlower").innerHTML = reverseChar;
    document.querySelector(".longest").innerHTML = longestLength;
    var longestWord = arrName.filter((item) => item.length == longestLength)
    document.querySelector(".longest1").innerHTML = longestWord;
}