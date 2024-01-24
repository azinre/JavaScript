
function validate(e){ 
    e.preventDefault();
    var valid=true;

    
    if(profileForm.catname.value === ""){
    document.querySelector('#catnameWarning').textContent="*Please enter a First Name*";
        valid = false;
    }
    

    if(profileForm.Ownersname.value == ""){
        document.querySelector('#OwnernameWarning').textContent="*Please enter owners name*";
        valid=false;
    }

    if(profileForm.emgsname.value == ""){
        document.querySelector('#cnameWarning').textContent="*Please enter emergency contact*";
        valid=false;
    }

    const checkboxs = document.querySelectorAll('[name = "days"]');
        var checked = false
        for (var i = 0, l = checkboxs.length; i < l; i++) {
            if (checkboxs[i].checked) {
                checked = true
                break
            }
        }
        if (checked == false) {
            valid = false;
            document.querySelector('#daysWarning').textContent = "*Days is required*";
        }


    if (profileForm.arrivetime.options.selectedIndex === 0) {
        document.querySelector('#arriveWarning').textContent = "*Select an arrive time*"
        valid = false;
       
    }
    if (profileForm.leavetime.options.selectedIndex === 0) {
        document.querySelector('#leaveWarning').textContent = "*Select a valid leave time*";
        valid = false;
    }

    let a = document.querySelector('#arrivetime').value
    let b = document.querySelector('#leavetime').value
    if ((profileForm.arrivetime.options.selectedIndex - profileForm.leavetime.options.selectedIndex >= 0)&&(profileForm.arrivetime.options.selectedIndex !== 0)&&(profileForm.leavetime.options.selectedIndex !== 0)) {
        document.querySelector('#leaveWarning').textContent = "*Leave time should be later than arrive time*";
        valid = false;
    }


    const daytime = document.querySelector('#daytimephone').value
    const cellphone = document.querySelector('#cellphone').value
    if (daytime == "" && cellphone == "") {
        document.querySelector('#dayphoneWarning').textContent = "*Please enter owner's cell phone or daytime phone*";
        valid = false;
    }
    if (((!daytime.match(/^\d+/)) && (!cellphone.match(/^\d+/)))&&(daytime !== "" || cellphone !== "")) {
        valid = false;
        document.querySelector('#daytimePhoneWarning').textContent = "*Phone should be numbers*";
    }

    if (((daytime.length !== 10) && (cellphone.length !== 10))&&(daytime !== "" || cellphone !== "")) {
        valid = false;
        document.querySelector('#daytimePhoneWarning').textContent = "*Phone should be 10 digits*";
    }

    if (profileForm.cphone.value == "") {
        document.querySelector('#cphoneWarning').textContent = "*Please enter emergenct contact phone*";
        valid = false;
    }
    if ((cphone.value.length !== 10)&&(profileForm.cphone.value !== "")) {
        valid = false;
        document.querySelector('#cphoneWarning').textContent = "*Phone should be 10 digits*";
    }



    return valid;

};


document.querySelector('#catname').addEventListener("change", function(){
    greeting.textContent = "Hello " + this.value;
});


document.querySelector('#catname').addEventListener("blur", function(){
    if(this.value !== ""){
        catnameWarning.textContent = "";
    }
});


document.querySelector('#diet').addEventListener("blur", function(){
    if(this.value !== ""){
        dietWarning.textContent = "";
    }
});

document.querySelector('#Ownersname').addEventListener("blur", function(){
    if(this.value !== ""){
        OwnernameWarning.textContent = "";
    }
});

document.querySelector('#emgsname').addEventListener("blur", function(){
    if(this.value !== ""){
        cnameWarning.textContent = "";
    }
});



document.profileForm.addEventListener("submit", validate);


function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    emailWarning.textContent= "Please provide a valid email address";
    email.focus;
    return false;
 }
}