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
    let contactList = document.querySelector("#contactList");

    if(eContainer.style.display == "block" || eContainer.style.display == ""){
        eContainer.style.display = "none";
        contactList.style.display = "block";

    }
}
function contactBookClose(){
    let contacts = document.querySelector("#externalContainer");
    let contactList = document.querySelector("#contactList");

    if(contacts.style.display == "none" || contacts.style.display ==" "){
        contacts.style.display ="block";
        contactList.style.display = "none";

    }
}

function createProfile(){
    let create = document.getElementById("profileCreator");

    if(create.style.display == "none" || create.style.display ==""){
        create.style.display = "block";
    }
}
function closeProfile(){
    let create = document.getElementById("profileCreator");

    if(create.style.display == "block" || create.style.display ==""){
        create.style.display = "none";
       
    }
}



const contactList = [];

function addContact(){
    // let profileImg = document.getElementById("profileImage").ariaValueMax;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lName").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    
   
    const contact ={
        // profileImg,
        firstName,
        lastName,
        mobileNumber
    };
    contactList.push(contact);

    displayContacts();
    clearForm();

}



function clearForm() {
    // document.getElementById("profileImage").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("mobileNumber").value = "";
}



function displayContacts(){
    const container = document.getElementById("listContainer");
    container.innerHTML = "";
    container.className ="container6";

    contactList.forEach((contact, index) => {
        const profileContainer = document.createElement("div");
        profileContainer.className ="contact";
        

        // const profileImage1 = document.createElement("img");
        // profileImage1.id = "image1";
        // profileImage1.src = contact.profileImg; 
        // profileContainer.appendChild(profileImage1);
        
        const profileName1 = document.createElement("div");
        profileName1.className = "textContact";
        profileName1.textContent = `${contact.firstName} ${contact.lastName}`;
        profileContainer.appendChild(profileName1);

        const mobileNumber1 =document.createElement("div")
        mobileNumber1.className = "textContact";
        mobileNumber1.textContent = contact.mobileNumber;
        profileContainer.appendChild(mobileNumber1);


        const callBtn = document.createElement("button");
        callBtn.textContent= "Call";
        callBtn.className = "styleBtn";
        callBtn.addEventListener("click", () => callFunction(index));
        profileContainer.appendChild(callBtn);

        const messageBtn = document.createElement("button");
        messageBtn.textContent= "Message";
        messageBtn.className ="styleBtn";
        messageBtn.addEventListener("click", () => messageFunction(index));
        profileContainer.appendChild(messageBtn);

        const deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.id= "deleteBn";
        deleteButton.className = "styleBtn";
        deleteButton.addEventListener("click", () => removeContact(index));
        profileContainer.appendChild(deleteButton);
         
        console.log(index);

        container.appendChild(profileContainer);

    });
}


function callFunction(index){
    const contact = contactList[index];
    alert(`Calling ${contact.firstName} ${contact.lastName}`);
}

function messageFunction(index) {
    const contact = contactList[index];
    alert(`Messaging ${contact.firstName} ${contact.lastName}`);
}


function removeContact(index){
    contactList.splice(index, 1);
    displayContacts();
}



function searchContacts() {
    let searchTerm = document.getElementById("search").value.toLowerCase();

    let filteredContacts = contactList.filter(contact =>
        contact.firstName.toLowerCase().includes(searchTerm) ||
        contact.lastName.toLowerCase().includes(searchTerm) ||
        contact.mobileNumber.includes(searchTerm)
    );

    let container = document.getElementById("listContainer");
    container.innerHTML = "";
    filteredContacts.forEach((contact, index) => {
        const profileContainer = document.createElement("div");
        profileContainer.className = "contact";

        // const profileImgContainer = document.createElement("img");
        // profileImgContainer.src = contact.profileImg;
        // profileContainer.appendChild(profileImgContainer);

       
        const profileName1 = document.createElement("div");
        profileName1.className = "textContact";
        profileName1.textContent = `${contact.firstName} ${contact.lastName}`;
        profileContainer.appendChild(profileName1);

        const mobileNumber1 =document.createElement("div")
        mobileNumber1.className = "textContact";
        mobileNumber1.textContent = contact.mobileNumber;
        profileContainer.appendChild(mobileNumber1);


        
        const callBtn = document.createElement("button");
        callBtn.textContent= "Call";
        callBtn.className = "styleBtn";
        callBtn.addEventListener("click", () => callFunction(index));
        profileContainer.appendChild(callBtn);

        const messageBtn = document.createElement("button");
        messageBtn.textContent= "Message";
        messageBtn.className ="styleBtn";
        messageBtn.addEventListener("click", () => messageFunction(index));
        profileContainer.appendChild(messageBtn);

        const deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";
        deleteButton.id= "deleteBn";
        deleteButton.className = "styleBtn";
        deleteButton.addEventListener("click", () => removeContact(index));
        profileContainer.appendChild(deleteButton);

        container.appendChild(profileContainer);
    });
}





