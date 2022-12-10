let mainInput = document.querySelector('.mainInput');
let addText = document.querySelector('.addText');
let form2 = document.querySelector('.form2');
let arr = [];

let xul = document.createElement("ul");
addText.addEventListener('click', function() {

    if(mainInput.value !== ""){

    let xli = document.createElement("li");
    let xH3 = document.createElement("h3");
    xH3.innerHTML = `${mainInput.value}`;
    let xDiv = document.createElement("div");
    xDiv.classList.add("xDiv");

    let xDel = document.createElement("button");
    xDel.classList.add("deleteText");
    xDel.innerHTML = `<i class="fa-solid fa-xmark fa-fw"></i>`
    xDel.addEventListener("click",function(){
        xli.remove();
    })

    let xEdit = document.createElement("button");
    xEdit.classList.add("xEdit");
    xEdit.innerHTML = `<i class="fa-solid fa-check fa-fw"></i>`;
    xEdit.addEventListener("click", function() {
        if(xli.classList.contains('active')){
            xli.classList.remove('active')
        }else{
            xli.classList.add('active')
        }

    });

        xli.appendChild(xH3);
        xDiv.appendChild(xDel);
        xDiv.appendChild(xEdit);
        xli.appendChild(xDiv);
        xul.appendChild(xli);        
        mainInput.focus();
        arr.push(xul);
        mainInput.value = "";
    }
    })

form2.appendChild(xul);