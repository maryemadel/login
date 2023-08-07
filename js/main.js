var signupName = document.getElementById("signupname");
var signupEmail = document.getElementById('signupemail');
var signupPassword = document.getElementById('signuppassword');
var signupbutton = document.getElementById('signupbutton');
var req = document.getElementById('requierd');
// var secc = document.getElementById('succ');
var exist = document.getElementById('exist');
var emvali = document.getElementById('emvali');
var incorrect = document.getElementById('incorrect');
var welcomee = document.getElementById('welcomee');
// --------------------------------------------------------------
var signinemail = document.getElementById('signinemail');
var signinpass = document.getElementById('signinpassword');
var signinbutton = document.getElementById('signinbtn');
// ---------------------------------------------------------------
let list=[]
let currentuser=[]

if (JSON.parse( localStorage.getItem("inputsval") )!=null){
    list = JSON.parse( localStorage.getItem("inputsval") )}

signinbutton?.addEventListener("click", function(){
 
  let currentuser= list.find((el)=>{

    return el.userPass == signinpass.value && el.useremail == signinemail.value
    
    
})
if(currentuser == undefined){
    incorrectt()
    console.log('kop');
}
else{
    
    localStorage.setItem("currentuser",currentuser.username)
    window.location.href = "welcome.html"
    
}


})

if (localStorage.getItem("currentuser") !=null && welcomee != null){
    welcomee.innerHTML = "Welcome " + localStorage.getItem("currentuser")
 }








signupbutton?.addEventListener("click",function () {
    let index = list.findIndex((el)=>{
        return el.username == signupName.value && el.useremail == signupEmail.value
    })



    if (signupEmail.value === '' || signupName.value === '' || signupPassword.value === '') {
        emptyval()
        succ.classList.remove('d-block')
        succ.classList.add('d-none')
    }
    else if (validateEmail()){

    }
    else if(index==-1){
        let users={
            username: signupName.value,
            useremail: signupEmail.value,
            userPass: signupPassword.value
        }
        list.push(users)
        localStorage.setItem("inputsval", JSON.stringify(list))
        window.location.href = "index.html"
    } else{
      existt()
    }


}


)


    function incorrectt() {

    
        incorrect.classList.remove('d-none')
        incorrect.classList.add('d-block')
    }

function emptyval() {

    req.classList.remove('d-none')
    req.classList.add('d-block')

}

function existt() {

    exist.classList.remove('d-none')
    exist.classList.add('d-block')
}
function emailval() {

    emvali.classList.remove('d-none')
    emvali.classList.add('d-block')
}

function validateEmail(signupemail) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(signupEmail.value) == false) {
        emailval()

    } else {
        emvali.classList.add('d-none')
        emvali.classList.remove('d-block')
 
    }

}
