
function validate(e){ 
    e.preventDefault();
    var valid=true;

    
    if(profileForm.fname.value === ""){
    document.querySelector('#fnameWarning').textContent="*Please enter your First Name*";
        valid = false;
    }
    

    if(profileForm.Ownersname.value === ""){
        document.querySelector('#OwnernameWarning').textContent="*Please enter Receiver name*";
        valid=false;
    }
   
    if(profileForm.emgsname.value === ""){
        document.querySelector('#cnameWarning').textContent="*Please enter your Last name*";
        valid=false;
    }
    

    if(profileForm.address1.value === ""){
        document.querySelector('#address1Warning').textContent="*Please enter your Address*";
        valid=false;
    }
    
    if(profileForm.city.value === ""){
        document.querySelector('#cityWarning').textContent="*Please enter your city*";
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
            document.querySelector('#daysWarning').textContent = "";
        }


    if (profileForm.arrivetime.options.selectedIndex === 0) {       
        valid = false;
        document.querySelector('#arriveWarning').textContent = "*Select an arrive time*"  
    }
    

    if (profileForm.cphone.value == "") {
        document.querySelector('#cphoneWarning').textContent = "*Please enter your contact phone*";
        valid = false;
    }
    
    if(profileForm.province.options.selectedIndex === 0){   
        valid = false;     
        document.querySelector('#provinceWarning').textContent="*Select select a province*";
        
    }
    if(profileForm.country.options.selectedIndex === 0){ 
        valid = false;       
        document.querySelector('#countryWarning').textContent="*Select a country*";
    }
    
    function checkEmail() {

        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(email.value)) {
        emailWarning.textContent= "Please provide a valid email address";
        email.focus;
        return false;
     }
    }

    return valid;

};

document.querySelector('#fname').addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarning.textContent = "";
    }
});


document.querySelector('#bag').addEventListener("blur", function(){
    if(this.value !== ""){
        bagWarning.textContent = "";
    }
});

document.querySelector('#cphone').addEventListener("blur", function(){
    if(this.value !== ""){
        cphoneWarning.textContent = "";
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
document.querySelector("#city").addEventListener("blur", function () {
    if (this.value !== "") {
        cityWarning.textContent = "";
    }
});
document.querySelector("#address1").addEventListener("blur", function () {
    if (this.value !== "") {
        address1Warning.textContent = "";
    }
});
document.querySelector('#province').addEventListener("click", function(){
    if(profileForm.province.options.selectedIndex !== -1){
        provinceWarning.textContent = "";
    }
});
document.querySelector('#country').addEventListener("click", function(){
    if(profileForm.country.options.selectedIndex !== -1){
        countryWarning.textContent = "";
    }
});
document.querySelector('#arrivetime').addEventListener("click", function(){
    if(profileForm.arrivetime.options.selectedIndex !== -1){
        arriveWarning.textContent = "";
    }
});
document.querySelector('[name = "days"]').addEventListener("click", function(){
    if(profileForm.days.options.checkboxs !== 0){
        daysWarning.textContent = "";
    }
});


document.querySelector('#email').addEventListener("blur", function(){
    if(this.value !== ""){
        emailWarning.textContent = "";
    }
});

document.profileForm.addEventListener("submit", validate);

document.profileForm.resetBtn.addEventListener("click", () => {
    fnameWarning.textContent = " ";
    bagWarning.textContent = " ";
    cphoneWarning.textContent = " ";
    OwnernameWarning.textContent = " ";
    countryWarning.textContent = " ";
    daysWarning.textContent = " ";
    provinceWarning.textContent = " ";
    address1Warning.textContent = " ";
    cityWarning.textContent = "";
    OwnernameWarning.textContent = " ";
    emailWarning.textContent= " ";
    cnameWarning.textContent = "";
    arriveWarning.textContent = "";
})

