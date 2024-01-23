document.querySelector('#fName').addEventListener("blur", function(){
    if(this.value !== ""){
        fNameError.textContent = "";
    }
});

document.querySelector('#lName').addEventListener("blur", function(){
    if(this.value !== ""){
        lNameError.textContent = "";
    }
});

document.querySelector('#address1').addEventListener("blur", function(){
    if(this.value !== ""){
        address1Error.textContent = "";
    }
});

document.querySelector('#city').addEventListener("blur", function(){
    if(this.value !== ""){
        cityError.textContent = "";
    }
});

document.querySelector('#province').addEventListener("click", function(){
    if(profile.province.options.selectedIndex !== -1){
        provinceError.textContent = "";
    }
});

document.querySelector('#country').addEventListener("click", function(){
    if(profile.country.options.selectedIndex !== -1){
        countryError.textContent = "";
    }
});

document.profile.addEventListener("submit", validate);


