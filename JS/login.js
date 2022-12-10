let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let btn = document.querySelector(".btn")
let divFourth = document.querySelector(".divFourth")

btn.onclick = function(){
    if(input1.value != "" && input2.value != ""){
        let Regex1 = new RegExp(/^[a-zA-Z\-]+$/);
        let Regex2  = new RegExp("(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}");
                if(Regex1.test(input1.value) && Regex2.test(input2.value)){
                divFourth.innerHTML = `
                    <p class="p">Welcome</p>
                `
            }else{
                if(Regex1.test(input1.value) == false && Regex2.test(input2.value) == true){
                    console.log("1f 2t")
                    divFourth.innerHTML = `
                        <p class="p">Please enter a valid User Name</p>
                    `
                }else if(Regex1.test(input1.value) == true && Regex2.test(input2.value) == false){
                    console.log("1t 2f")
                    divFourth.innerHTML = `
                        <p class="p">Please type your password as a combination of 8 uppercase and lowercase letters and numbers</p>
                    `
                }else{
                    console.log("1f 2f")
                    divFourth.innerHTML = `
                        <p class="p">Please enter a valid User Name and password</p>
                    `
                }
    }
}else{
    divFourth.innerHTML = `
        <p class="p">Please enter your User Name and password</p>
    `
}
}

