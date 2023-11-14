function toggleMenu(){
    let a = document.getElementById('toggleMenu');
    let b =document.querySelector('.menuContainer');


    if(a.style.display== 'none' || a.style.display == ''){
        a.style.display = 'block';
        b.style.backgroundColor='rgb(19, 20, 47)';
        b.style.color='white';
    }
    else if(a.style.display == 'block'){
        a.style.display = 'none';
        b.style.backgroundColor='transparent';
        b.style.color='black';
    }
}

function contactsBookOpen(){
    let eContainer = document.querySelector("#externalContainer");

    if(eContainer.style.display == "block" || eContainer.style.display == ""){
        eContainer.style.display = "none";
    }
}
function contactBookClose(){
    let contacts = document.querySelector("#contactBook");

    if(contacts.style.display == "block" || contacts.style.display ==" "){
        
    }
}

function createProfile(){
    let create = document.getElementById("inputBlock");

    if(create.style.display == "none" || create.style.display ==""){
        create.style.display = "block";
    }
}
function closeProfile(){
    let create = document.getElementById("inputBlock");

    if(create.style.display == "block" || create.style.display ==""){
        create.style.display = "none";
    }
}
function upload(){
    let img = document.getElementById("profilePic");
    let name = document.getElementById("profileName").value;
    let number = document.getElementById("profileNumber");
    let container = document.getElementById("inputProfileC");
   
    

}