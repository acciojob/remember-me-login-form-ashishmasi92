//your JS code here. If required.
//your JS code here. If required.
let inputbox = document.querySelector("#username")
let passwordbox = document.querySelector("#password")
let checkbox = document.querySelector("#checkbox")
let submitBtn = document.querySelector("form")
let formBtn = document.querySelector("#submit")
let existBtn = document.querySelector("#existing")


document.addEventListener("DOMContentLoaded",()=>{

    let UserSave = localStorage.getItem("UserInfo")
    if(UserSave){
        existBtn.style.display = "block"
    }
})


submitBtn.addEventListener("submit",handleSubmit)


function handleSubmit(e){
	e.preventDefault();

	let inputVal = inputbox.value;
	let passwordVal = passwordbox.value;

	if(!inputVal || !passwordVal){
		alert("please filled your input box ")
		return
	}

	if(checkbox.checked){

        console.log("stored data")
		localStorage.setItem("UserInfo",JSON.stringify({name:inputVal,password:passwordVal}))
	}
	else{
		localStorage.removeItem("UserInfo")
	}

	alert(`Logged in as ${inputVal}`)
inputbox.value=""
passwordbox.value=""
existBtn.style.display  = checkbox.checked?"block":"none"
checkbox.checked = false;

}



existBtn.addEventListener("click",()=>{
    let userInfo = JSON.parse(localStorage.getItem("UserInfo"))

if(userInfo&&userInfo.name){
    alert(`Logged in as ${userInfo.name}`)
}

})

