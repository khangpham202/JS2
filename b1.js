document.querySelector("form").addEventListener("submit",(e) => {
    e.preventDefault()
    var fullName = document.querySelector(".fullname");
    
    var firstName = fullName.value.split(' ')[0]; 
    var lastName = fullName.value.split(' ')[fullName.value.split(' ').length-1]; 
    document.querySelector(".firstName").innerHTML = firstName;
    document.querySelector(".lastName").innerHTML = lastName;
    var arrName = fullName.value.split(" ");
    var firstChar = arrName.map((item) => {
        return item.replace(item.charAt(0),item.charAt(0).toUpperCase()) 
    })
    if(arrName.length > 2){
        var hl = document.querySelector(".hl");
        arrName.shift()
        arrName.pop() 
        hl.innerHTML = arrName.join(" ")
    }
    var toUpper = document.querySelector(".toUpper")
    toUpper.innerHTML = firstChar.join(" ");
   
})


