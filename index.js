'use strict';
let currentUser = localStorage.getItem('currentUser');
let userRecords;
let passwordCurrentUser;


  if (currentUser) {
    console.log('The website key exists');
    document.getElementById("profile-wrapper-auth").classList.toggle("authorized");
    document.getElementById("profile-wrapper").style.display = "none";
    document.getElementById("profile-wrapper-auth").style.display = "block"; 
    document.getElementById("library-card-section").style.display = "none";
    document.getElementById("library-card-section-after-login").style.display = "block"; 

    
  } else {
    console.log('The website key does NOT exist');
    document.getElementById("profile-wrapper-auth").style.display = "none";   
  };   
  
    


//burger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-list");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-menu-item").forEach(item => item. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll("main").forEach(item => item. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


//slider carousel about

const sliderLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");
const pagination = document.querySelectorAll(".pagination-button");

let position = 0;
let dotIndex = 0;





const nextSlide = () => {
    if (position < ((pagination.length-1) * 475)) {
        position = position + 475;
        dotIndex++;   
    }  
    else {
        position = (pagination.length-1) * 475;
        dotIndex = 4;
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);  
    showHideArrows();
}


const prevSlide = () => {
    if (position >  0) {
        position = position - 475;
        dotIndex--;
    } else {
        if (position >= ((pagination.length-1) * 475)) {
        position = position + 475;
        dotIndex = 4;
} 
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
    showHideArrows();
}


const thisSlide = (index) => {
    for (let dot of pagination) {
        dot.classList.remove('act');
    }
    pagination[index].classList.add('act');
    showHideArrows();
}

// const showHideArrows = () => { //убирает стрелки вообще
//     prevButton.style.display = position == 0 ? "none" : "inline";
//     nextButton.style.display = dotIndex == 4 ? "none" : "inline";
// }
//showHideArrows();

const showHideArrows = () => {
prevButton.style.opacity = position > 0 ? "100%" : "50%";
prevButton.style.pointerEvents = position > 0 ? "all" : "none";
nextButton.style.opacity = dotIndex == 4 ? "50%" : "100%";
nextButton.style.pointerEvents = dotIndex == 4 ? "none" : "all";
}
showHideArrows();
    



nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

pagination.forEach((dot, index) => { 
dot.addEventListener('click', () => {
   position = 475 * index; 
   sliderLine.style.left = -position + 'px';
   dotIndex = index;
   thisSlide(dotIndex);
})
})


//favorites slider


const radioButtons = document.getElementsByName("radio");
for (let i =0; i < radioButtons.length; i++) {
    radioButtons[i].onclick = function() {
        
        let winter = document.getElementById("winter-books");
        let spring = document.getElementById("spring-books");
        let summer = document.getElementById("summer-books");
        let autumn = document.getElementById("autumn-books");

        let block = document.querySelector("books-block");

   
        if (radioButtons[i] == radioButtons[0]) {
            winter.style.display = "flex";

            spring.style.display = "none";
           summer.style.display = "none";
           autumn.style.display = "none";
        } if (radioButtons[i] == radioButtons[1]) {
            spring.style.display = "flex";
      
    
        winter.style.display = "none";
        summer.style.display = "none";
        autumn.style.display = "none";
        } if (radioButtons[i] == radioButtons[2]) {
            summer.style.display = "flex";


            spring.style.display = "none";
            winter.style.display = "none";
           autumn.style.display = "none";
        } if (radioButtons[i] == radioButtons[3]) {
            autumn.style.display = "flex";
      

        spring.style.display = "none";
        winter.style.display = "none";
       summer.style.display = "none";
    }
}
};


// profile icon before log in

const profile = document.querySelector(".profile");
const profile_no_auth = document.querySelector(".profile-no-auth");


profile.addEventListener("click", () => {
    profile_no_auth.classList.toggle("open");
})


document.getElementById("profile-no-auth").addEventListener("click", () => {
    profile_no_auth.classList.remove("open");
})
//закрытие при нажатии на область
document.querySelectorAll("main").forEach(item => item.addEventListener("click", () => {
    profile_no_auth.classList.remove("open");
    }));
    document.querySelectorAll(".hamburger").forEach(item => item.addEventListener("click", () => {
        profile_no_auth.classList.remove("open");
        }));

    document.querySelectorAll(".profile").forEach(item => item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
            })); //при открытом бургер-меню закрывается и открывается меню авторизации
    


// profile icon after log in
const profileUser = document.querySelector(".profile-user");
const profile_auth = document.querySelector(".profile-auth");


profileUser.addEventListener("click", () => {
    profile_auth.classList.toggle("open");
})


document.getElementById("profile-auth").addEventListener("click", () => {
    profile_auth.classList.remove("open");
})
//закрытие при нажатии на область
document.querySelectorAll("main").forEach(item => item.addEventListener("click", () => {
    profile_auth.classList.remove("open");
    }));
    document.querySelectorAll(".hamburger").forEach(item => item.addEventListener("click", () => {
        profile_auth.classList.remove("open");
        }));

    document.querySelectorAll(".profile-user").forEach(item => item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
            })); //при открытом бургер-меню закрывается и открывается меню авторизации
    

//register window

const registerButton = document.querySelector(".register");
const registerWindow = document.querySelector(".modal-register-wrapper");
const registerWindowOpened = document.querySelector(".modal-register"); //внутри контейнера
const closeButton = document.querySelectorAll(".close-button");
//const modal = document.querySelectorAll(".modal");
//const signUpButton = document.querySelector("signup-button-card-section");



registerButton.addEventListener("click", () => {
    registerWindow.classList.toggle("opened");
    registerWindowOpened.classList.toggle("opened");
});

document.querySelectorAll(".close-button").forEach(item => item.addEventListener("click", () => { //для всех х закрывать следующие:
    registerWindow.classList.remove("opened");
    loginWindow.classList.remove("opened");
    modalProfile.classList.remove("opened");
    modalProfile.classList.remove("opened");
    modalBuyCard.classList.remove("opened");
}));
profile.addEventListener("click", (element) => { //закрывается по нажатию на иконку профиля
    registerWindow.classList.remove("opened");
});

registerWindow.addEventListener("click", (element) => {
    registerWindow.classList.remove("opened");
});
registerWindowOpened.addEventListener("click", function (event) {
        event.stopPropagation(); //исключение для самого окошка
  });

  document.querySelectorAll(".signup-button-card-section").forEach(item => item.addEventListener("click", () => { //для всех х закрывать следующие:
    registerWindow.classList.toggle("opened");
}));

const registerText = document.getElementById("register-text");
registerText.addEventListener("click", (element) => {
loginWindow.classList.remove("opened");
registerWindow.classList.toggle("opened"); 

});


 //login window
const loginButton = document.querySelector(".login");
const loginWindow = document.querySelector(".modal-login-wrapper");
const loginWindowOpened = document.querySelector(".modal-login"); //внутри контейнера


loginButton.addEventListener("click", () => {
    loginWindow.classList.toggle("opened");
    loginWindowOpened.classList.toggle("opened");
});


loginWindow.addEventListener("click", (element) => {
    loginWindow.classList.remove("opened");
});
profile.addEventListener("click", (element) => { //закрывается по нажатию на иконку профиля
    loginWindow.classList.remove("opened");
});
loginWindowOpened.addEventListener("click", function (event) {
        event.stopPropagation(); //исключение для самого окошка
  });

  document.querySelectorAll(".login-button").forEach(item => item.addEventListener("click", () => { //для всех х закрывать следующие:
    loginWindow.classList.toggle("opened");
}));

const loginText = document.getElementById("login-text");
loginText.addEventListener("click", (element) => {
   
    loginWindow.classList.toggle("opened"); 
    registerWindow.classList.remove("opened");
});


//my profile window

const modalProfile = document.querySelector(".modal-profile-wrapper");
const modalProfileOpened = document.querySelector(".modal-profile");
const myProfileButton =  document.querySelector(".my-profile-btn");
const profileButton = document.querySelector(".profile-button"); // button in the library card section

myProfileButton.addEventListener("click", () => { //Если пользователь еще не вошел в учетную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN
    modalProfile.classList.toggle("opened");
    modalProfileOpened.classList.toggle("opened");
    
});

profileButton.addEventListener("click", () => {// button in the library card section
    modalProfile.classList.toggle("opened");
    modalProfileOpened.classList.toggle("opened");
});

//close my profile window
modalProfile.addEventListener("click", (element) => {
    modalProfile.classList.remove("opened");
});
    modalProfileOpened.addEventListener("click", function (event) {
        event.stopPropagation(); //исключение для самого окошка
  });

//email validation

    let emailCheck = document.getElementById("e-mail");
    let emailLabel = document.getElementById("e-mail-modal-register");
    let emailError = document.getElementById("invalid-email");

    function validateEmail() {
        let registerForm = document.getElementById("register-form");
        registerForm.addEventListener("submit", (event) => {
        if (!emailCheck.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            
            emailError.innerHTML = "Please enter a valid email";
            emailError.style.color = "red";    
                event.preventDefault();    
           
    } else {
        emailError.innerHTML = "ok";
        emailError.style.color = "green";  
    }
})
    };
    
               
    

//library card number generator

let libraryCardNumber = Math.floor(Math.random() * 10000000000).toString(16);
if (libraryCardNumber.length <= 8) {
    libraryCardNumber = "a" + libraryCardNumber;
}
if (libraryCardNumber.length >= 8) {
    libraryCardNumber = libraryCardNumber;
}




//local storage
function saveData() {

// array to keep every entry data

let userName = document.getElementById("first-name").value.trim();
let userLastName = document.getElementById("last-name").value.trim();
let userEmail = document.getElementById("e-mail").value.trim();
let userPassword = document.getElementById("password").value;


let registerForm = document.getElementById("register-form");


userRecords = [];
userRecords=JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];


     if (userName == "" || userLastName == "" || userEmail == "" || userPassword == "") {
    alert ("Please fill out all the fields.")
        }
    if (checkerReg() == false ) { // password length verification

        registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // let message = document.getElementById('invalid');
        //         let invalidColor = "red";
        //       message.style.color = invalidColor;
        //        message.innerHTML = "Password length should be at least 8!"
        })
   
} else {

if(userRecords.some((v) => { // checking if the user already got an account
return v.email==userEmail;
})) {
    alert("The email already exists, please log in");
    loginWindow.classList.toggle("opened"); 
    registerWindow.classList.remove("opened");
    registerForm.document.reload();
} 
else {
  
    if (!emailCheck.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        registerForm.addEventListener("submit", (event) => {
        emailError.innerHTML = "Please enter a valid email";
        emailError.style.color = "red";    
            event.preventDefault();    
    })   
}
   else { userRecords.push({
        firstName: userName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
        card: libraryCardNumber,
        cardStatus: "false",
        visits: "1",
        books: "0",
       purchasedBooks: [],
       buyBookBtn1: "false",
       buyBookBtn2: "false",
       buyBookBtn3: "false",
       buyBookBtn4: "false",
       buyBookBtn5: "false",
       buyBookBtn6: "false",
       buyBookBtn7: "false",
       buyBookBtn8: "false",
       buyBookBtn9: "false",
       buyBookBtn10: "false",
       buyBookBtn11: "false",
       buyBookBtn12: "false"
        })
        localStorage.setItem("users", JSON.stringify(userRecords));
        
        alert("The account has been successfully registered. Please log in.");
        loginWindow.classList.toggle("opened"); 
        registerWindow.classList.remove("opened");

        let allInputs = document.querySelectorAll('input'); // clear the form after submitting
        allInputs.forEach(singleInput => singleInput.value = ''); 
        emailError.innerHTML = "";
        message.innerHTML = "";
    }
}
}
};

    





function checkerReg() { // check the password length in register window
    let Psw = document.getElementById("password");
    let messagePsw = document.getElementById('invalid');
        let vl = Psw.value;

    
       if(vl.length < 8) {
        messagePsw.innerHTML = "Password length should be at least 8";
        messagePsw.style.fontSize = "8px";
        messagePsw.style.color = "red";
        return false;
       }
       if(vl.length >= 8) {
        messagePsw.innerHTML = "ok";
        messagePsw.style.color = "green";
        return true;
   }
    };







function checker() { // check the password length in login window
    let Psw = document.getElementById("login-password");
    let mes = document.getElementById('helper-text');
        let val = Psw.value;

    
       if(val.length < 8) {
        mes.innerHTML = "Password length should be at least 8";
        mes.style.fontSize = "8px";
        mes.style.color = "red";
        return false;
       }
       if(val.length >= 8) {
        mes.innerHTML = "ok";
        mes.style.color = "green";
        return true;
   }
    };
    


function checkData() {
let loginEmail = document.getElementById("login-email").value;
let loginPassword = document.getElementById("login-password").value;
let loginCard = document.getElementById("login-email").value;

//login process

let userRecord = [];
userRecord=JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
if (loginEmail == "" || loginPassword == "") {
    alert ("Please fill out all the fields.")
} else {
if (userRecord.some((v) => {
    return v.email == loginEmail && v.password == loginPassword ||  v.card == loginCard && v.password == loginPassword;
 })){ alert("login successful");

currentUser = userRecord.filter((v) => {
    return v.email == loginEmail && v.password == loginPassword && v.card == loginCard;
})
currentUser.push({
    "loginEmail": loginEmail,
    "loginPassword": loginPassword,
    "active": true
})
localStorage.setItem("currentUser", JSON.stringify(currentUser));
localStorage.setItem("passwordCurrentUser", JSON.stringify(loginPassword));
localStorage.setItem("emailCurrentUser", JSON.stringify(loginEmail));

 loginWindow.classList.remove("opened");
 document.getElementById("profile-wrapper-auth").classList.toggle("authorized");
 document.getElementById("profile-wrapper").style.display = "none";
 document.getElementById("profile-wrapper-auth").style.display = "block"; 
 document.getElementById("library-card-section").style.display = "none";
 document.getElementById("library-card-section-after-login").style.display = "block"; 
 window.location.reload();

 return true;
} else {
    alert("The data is incorrect, please try again.");
}
}
};








//log out
function logOut() {

    currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
    userRecords = JSON.parse(localStorage.getItem("users"));


    for (let i =0; i < userRecords.length; i++) {
        if (userRecords[i].password == passwordCurrentUser) {
    //изменяем данные и сохраняем обратно            счетчик VISITS
    userRecords[i]['visits'] =  userRecords[i]['visits'] + "1"; // считаем единицы
    localStorage.setItem("users", JSON.stringify(userRecords)); 

        }
    localStorage.removeItem("currentUser");
    localStorage.removeItem("passwordCurrentUser");
   
    window.location.reload();
}
};







//buy card modal
const modalBuyCard = document.querySelector(".buy-card-wrapper-modal");
const modalBuyCardOpened = document.querySelector(".buy-card");
// const modalBuyCardCloseBtn = document.querySelector(".close-buy-card");

let buyButton = document.getElementById("buy-button"); //Если пользователь еще не вошел в учетную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN
document.querySelectorAll(".buy-button").forEach(item => item.addEventListener("click", () => {
    currentUser = localStorage.getItem('currentUser');
if(!currentUser) {
        loginWindow.classList.toggle("opened");
        loginWindowOpened.classList.toggle("opened");
    } if (currentUser) {
       //Если пользователь еще не вошел в учетную запись, то при нажатии на любую кнопку Buy открывается окно buy card
            modalBuyCard.classList.toggle("opened");
            modalBuyCardOpened.classList.toggle("opened");
    };
        //close buy card modal
        modalBuyCard.addEventListener("click", (element) => {
            modalBuyCard.classList.remove("opened");
        });
        modalBuyCardOpened.addEventListener("click", function (event) {
                event.stopPropagation(); //исключение для самого окошка
          }); 
}
));




//buy card process
const bankCardNumber = document.getElementById("bank-card-number-input");
const exprCodeOne = document.getElementById("expiration-code-one");
const exprCodeTwo = document.getElementById("expiration-code-two");
const cvc = document.getElementById("cvc-input");
const cardholderName = document.getElementById("cardholder-name-input");
const postalCode = document.getElementById("postal-code-input");
const city = document.getElementById("city-input");

const buyCardBtn = document.querySelector(".buy-card-button")
const buyCardForm = document.querySelector(".buy-card-form")



function buyCardData() {
 
    currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];

    let cardBought = localStorage.getItem('cardStatus');

    if (bankCardNumber.value == "" || exprCodeOne.value == "" || exprCodeTwo.value == "" || cvc.value == "" || cardholderName.value == "" || postalCode.value == "" || city.value == "") {
        // alert ("Please fill out all the fields."); 
        buyCardBtn.style.backgroundColor = "white";
        buyCardBtn.style.cursor = "auto";
    }
else if ((checkCard() == false || checkExprCodeOne() == false || checkExprCodeTwo() == false || checkCVC() == false)) {
        alert ("Please fill out all the fields correctly.");
        buyCardBtn.style.backgroundColor = "#BB945F";
        buyCardBtn.style.cursor = "pointer";
    } else {

        for (let i =0; i < userRecords.length; i++) { //cardNumber displayed for each user in logged in status
            if (userRecords[i].password == passwordCurrentUser) {
 alert("The card was successfully purchased.");


userRecords = JSON.parse(localStorage.getItem("users"));
//изменяем данные и сохраняем обратно
userRecords[i]['cardStatus'] = "true"; 
localStorage.setItem("users", JSON.stringify(userRecords)); //it was changed to true!!

modalBuyCard.style.display = "none";
modalBuyCardOpened.style.display = "none";
window.location.reload();
    }
}
    }
};





        function checkCard() { // check the password length in buy card window
                let value = bankCardNumber.value.trim();
        
               if(value.length < 16 || value.length > 16) {
                bankCardNumber.style.borderColor = "red";
                return false;
               }
               if(value.length === 16) {
                bankCardNumber.style.borderColor = "green";
                return true;
           }
            };


        function checkExprCodeOne() { // check the password length in buy card window
                let value = exprCodeOne.value.trim();
        
               if(value.length < 2 || value.length > 2) {
                exprCodeOne.style.borderColor = "red";
                return false;
               }
               if(value.length === 2) {
                exprCodeOne.style.borderColor = "green";
                return true;
           }
            };
            function checkExprCodeTwo() { // check the password length in buy card window
                let value = exprCodeTwo.value.trim();
        
               if(value.length < 2 || value.length > 2) {
                exprCodeTwo.style.borderColor = "red";
                return false;
               }
               if(value.length === 2) {
                exprCodeTwo.style.borderColor = "green";
                return true;
           }
            };

        function checkCVC() { // check the password length in buy card window
                let value = cvc.value.trim();
                
        
               if(value.length < 3 || value.length > 3) {
                cvc.style.borderColor = "red";
                return false;
               }
               if(value.length === 3) {
                cvc.style.borderColor = "green";
                return true;
           }
            };



// buy books process
// let buyBookBtn = document.querySelectorAll(".buy-button");
// currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
// userRecords = JSON.parse(localStorage.getItem("users"));

// buyBookBtn.forEach(element => {                                                        
//     element.addEventListener("click", function () {
// for (let i =0; i < userRecords.length; i++) {           
           
// if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
//         console.log("the book was bought");
//     }
// }
//     })
// });
    

// buy books process
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));

const ownBtn = document.getElementById("own-button");
const ownBtn2 = document.getElementById("own-button-two");
const ownBtn3 = document.getElementById("own-button-three");
const ownBtn4 = document.getElementById("own-button-four");
const buyBookBtn1 = document.getElementById("buy-button-one");
const buyBookBtn2 = document.getElementById("buy-button-two");
const buyBookBtn3 = document.getElementById("buy-button-three");
const buyBookBtn4 = document.getElementById("buy-button-four");

const ownBtn5 = document.getElementById("own-button-five");
const ownBtn6 = document.getElementById("own-button-six");
const ownBtn7 = document.getElementById("own-button-seven");
const ownBtn8 = document.getElementById("own-button-eight");
const buyBookBtn5 = document.getElementById("buy-button-five");
const buyBookBtn6 = document.getElementById("buy-button-six");
const buyBookBtn7 = document.getElementById("buy-button-seven");
const buyBookBtn8 = document.getElementById("buy-button-eight");

const ownBtn9 = document.getElementById("own-button-nine");
const ownBtn10 = document.getElementById("own-button-ten");
const ownBtn11 = document.getElementById("own-button-eleven");
const ownBtn12 = document.getElementById("own-button-twelve");
const buyBookBtn9 = document.getElementById("buy-button-nine");
const buyBookBtn10 = document.getElementById("buy-button-ten");
const buyBookBtn11 = document.getElementById("buy-button-eleven");
const buyBookBtn12 = document.getElementById("buy-button-twelve");

const ownBtn13 = document.getElementById("own-button-thirteen");
const ownBtn14 = document.getElementById("own-button-fourteen");
const ownBtn15 = document.getElementById("own-button-fifteen");
const ownBtn16 = document.getElementById("own-button-sixteen");
const buyBookBtn13 = document.getElementById("buy-button-thirteen");
const buyBookBtn14 = document.getElementById("buy-button-fourteen");
const buyBookBtn15 = document.getElementById("buy-button-fifteen");
const buyBookBtn16 = document.getElementById("buy-button-sixteen");


buyBookBtn1.addEventListener("click", () => { //1st btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("1");
    ownBtn.style.display = "block";
    buyBookBtn1.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-one").innerHTML + " " + document.getElementById("author-one").innerHTML); 
    userRecords[i]['buyBookBtn1'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn2.addEventListener("click", () => { //2nd btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("2");
    ownBtn2.style.display = "block";
    buyBookBtn2.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-two").innerHTML + " " + document.getElementById("author-two").innerHTML); 
    userRecords[i]['buyBookBtn2'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn3.addEventListener("click", () => { //3rd btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("3");
    ownBtn3.style.display = "block";
    buyBookBtn3.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-three").innerHTML + " " + document.getElementById("author-three").innerHTML); 
    userRecords[i]['buyBookBtn3'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn4.addEventListener("click", () => { //4th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("4");
    ownBtn4.style.display = "block";
    buyBookBtn4.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-four").innerHTML + " " + document.getElementById("author-four").innerHTML); 
    userRecords[i]['buyBookBtn4'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});


buyBookBtn5.addEventListener("click", () => { //5th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("5");
    ownBtn5.style.display = "block";
    buyBookBtn5.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-five").innerHTML + " " + document.getElementById("author-five").innerHTML); 
    userRecords[i]['buyBookBtn5'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn6.addEventListener("click", () => { //6th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("6");
    ownBtn6.style.display = "block";
    buyBookBtn6.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-six").innerHTML + " " + document.getElementById("author-six").innerHTML); 
    userRecords[i]['buyBookBtn6'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn7.addEventListener("click", () => { //7th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("7");
    ownBtn7.style.display = "block";
    buyBookBtn7.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-seven").innerHTML + " " + document.getElementById("author-seven").innerHTML); 
    userRecords[i]['buyBookBtn7'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn8.addEventListener("click", () => { //8th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("8");
    ownBtn8.style.display = "block";
    buyBookBtn8.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-eight").innerHTML + " " + document.getElementById("author-eight").innerHTML); 
    userRecords[i]['buyBookBtn8'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn9.addEventListener("click", () => { //9th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("9");
    ownBtn9.style.display = "block";
    buyBookBtn9.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-nine").innerHTML + " " + document.getElementById("author-nine").innerHTML); 
    userRecords[i]['buyBookBtn9'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn10.addEventListener("click", () => { //10th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("10");
    ownBtn10.style.display = "block";
    buyBookBtn10.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-ten").innerHTML + " " + document.getElementById("author-ten").innerHTML); 
    userRecords[i]['buyBookBtn10'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn11.addEventListener("click", () => { //11th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("11");
    ownBtn11.style.display = "block";
    buyBookBtn11.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-eleven").innerHTML + " " + document.getElementById("author-eleven").innerHTML); 
    userRecords[i]['buyBookBtn11'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn12.addEventListener("click", () => { //12th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("12");
    ownBtn12.style.display = "block";
    buyBookBtn12.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-twelve").innerHTML + " " + document.getElementById("author-twelve").innerHTML); 
    userRecords[i]['buyBookBtn12'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn13.addEventListener("click", () => { //13th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("13");
    ownBtn13.style.display = "block";
    buyBookBtn13.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-thirteen").innerHTML + " " + document.getElementById("author-thirteen").innerHTML); 
    userRecords[i]['buyBookBtn13'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn14.addEventListener("click", () => { //14th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("14");
    ownBtn14.style.display = "block";
    buyBookBtn14.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-fourteen").innerHTML + " " + document.getElementById("author-fourteen").innerHTML); 
    userRecords[i]['buyBookBtn14'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn15.addEventListener("click", () => { //15th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("15");
    ownBtn15.style.display = "block";
    buyBookBtn15.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-fifteen").innerHTML + " " + document.getElementById("author-fifteen").innerHTML); 
    userRecords[i]['buyBookBtn15'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});

buyBookBtn16.addEventListener("click", () => { //16th btn
    for (let i =0; i < userRecords.length; i++) {   
    if (userRecords[i].password == passwordCurrentUser && userRecords[i]['cardStatus'] == "true") {
console.log("16");
    ownBtn16.style.display = "block";
    buyBookBtn16.style.display = "none";
    userRecords = JSON.parse(localStorage.getItem("users"));
    //изменяем данные и сохраняем обратно
    userRecords[i]['books'] = userRecords[i]['books'] + "1"; 
    userRecords[i]['purchasedBooks'].push(document.getElementById("book-header-sixteen").innerHTML + " " + document.getElementById("author-sixteen").innerHTML); 
    userRecords[i]['buyBookBtn16'] = "true"; 
    localStorage.setItem("users", JSON.stringify(userRecords)); 
    console.log( userRecords[i]['purchasedBooks']);
    document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
    document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

    for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
        window.location.reload();
    }
}
}
});


userRecords=JSON.parse(localStorage.getItem("users"));
passwordCurrentUser = localStorage.getItem("passwordCurrentUser");
passwordCurrentUser=JSON.parse(localStorage.getItem("passwordCurrentUser"));


// let users = localStorage.getItem('users');
// console.log(userRecords);
// userRecords.filter((v) => { 
// console.log( userRecords[1].card); // выдает отдельный номер карты
// console.log(v[0])
// })


    for (let i =0; i < userRecords.length; i++) { //cardNumber displayed for each user in logged in status
        if (userRecords[i].password == passwordCurrentUser) {
        console.log( userRecords[i].card);
        document.querySelector('.card-number-number').innerHTML = userRecords[i].card;
        document.querySelector('.number-title-profile').innerHTML = userRecords[i].card;
        document.querySelector('.form-card-number-after-login').value = userRecords[i].card;

        console.log( userRecords[i].firstName);// name displayed for each user in logged in status
        console.log( userRecords[i].lastName);
        document.querySelector('.form-name-after-login').value = (userRecords[i].firstName.charAt(0).toUpperCase() + userRecords[i].firstName.slice(1)) + " " + (userRecords[i].lastName.charAt(0).toUpperCase() + userRecords[i].lastName.slice(1));
        document.querySelector('.user-fullname').innerHTML =(userRecords[i].firstName.charAt(0).toUpperCase() + userRecords[i].firstName.slice(1)) + " " + (userRecords[i].lastName.charAt(0).toUpperCase() + userRecords[i].lastName.slice(1));
        document.querySelector('.user-picture').innerHTML = userRecords[i].firstName.charAt(0).toUpperCase() + userRecords[i].lastName.charAt(0).toUpperCase();
        document.querySelector('.user-picture-profile').innerHTML = userRecords[i].firstName.charAt(0).toUpperCase() + userRecords[i].lastName.charAt(0).toUpperCase();

        document.querySelector('.profile-user').title =(userRecords[i].firstName.charAt(0).toUpperCase() + userRecords[i].firstName.slice(1)) + " " + (userRecords[i].lastName.charAt(0).toUpperCase() + userRecords[i].lastName.slice(1));


    }
}


function copyCardNumber() { //copy card number in my profile window
    let cr = document.querySelector(".card-number-link");
  
    cr.addEventListener('click',() => {
let card = document.querySelector('.card-number-number').innerHTML;
    navigator.clipboard.writeText(card);

    let messageCopiedCard = document.querySelector(".copied-card-number");
    messageCopiedCard.innerHTML =    "Copied Text: " + card;
    console.log("Copied Text: " + card);
})
};


            userRecords = JSON.parse(localStorage.getItem("users"));  //no buy card fo those who have bought it
            for (let i =0; i < userRecords.length; i++) {
            if (userRecords[i].password == passwordCurrentUser) {
            //cardNumber displayed for each user in logged in status
                if (userRecords[i].cardStatus == "true") {
                    modalBuyCard.style.display = "none";
                   modalBuyCardOpened.style.display = "none";
                }  else  {
                  console.log(userRecords[i].cardStatus);
               console.log("what's next")
            
              }
              }
            };







// check the card option
let nameCheckCard = document.getElementById("checkName");
let cardCheckCard = document.getElementById("checkCard");

const checkTheCard = document.getElementById("find-button");
let msg = document.getElementById("check-small");

let iconsWindow = document.getElementById("check-card-display-icons");
const  checkCardForm = document.getElementById("find-library-card");
    userRecords = JSON.parse(localStorage.getItem("users")); 

    let visits =  document.getElementById('my-profile-window-icons-visits-count-three');
    let booksCount = document.getElementById('my-profile-window-icons-books-count-three');

    for (let i =0; i < userRecords.length; i++) {

    checkTheCard.addEventListener("click", () => {

        if (nameCheckCard.value == userRecords[i].firstName && cardCheckCard.value == userRecords[i].card) {
    visits.innerHTML =  userRecords[i].visits.length - 1;    //visits counter
    booksCount.innerHTML =  userRecords[i].purchasedBooks.length;

    console.log("right");
    msg.innerHTML = "";
    iconsWindow.style.display = 'flex';
    checkTheCard.style.display = 'none';
  

    setTimeout(() => {
        iconsWindow.style.display = 'none';
      }, 10000);
      setTimeout(() => {
        checkTheCard.style.display = 'block';

      }, 10000);
      setTimeout(() => {
        document.getElementById("checkName").value = "";
        document.getElementById("checkCard").value = "";
      }, 10000);
}  else  {  
    // msg.style.color = "red";
    // msg.style.fontSize = "12px";
    // msg.style.textAlign = "center";
    // msg.innerHTML = "Registration is required.";
    //         console.log("wrong");
            return false;
        }
       
    })
};



currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : []; //show visits counter after login
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) {
    if (userRecords[i].password == passwordCurrentUser) {
        document.getElementById('my-profile-window-icons-visits-count').innerHTML =  userRecords[i].visits.length;
        document.getElementById('my-profile-window-icons-visits-count-two').innerHTML =  userRecords[i].visits.length;
}
};


currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : []; //show books counter after login
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) {
    if (userRecords[i].password == passwordCurrentUser) {
        document.getElementById('my-profile-window-icons-books-count').innerHTML =  userRecords[i].purchasedBooks.length;
        document.getElementById('my-profile-window-icons-books-count-two').innerHTML =  userRecords[i].purchasedBooks.length;

}
};


//1st buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn1'] == "true") {
   ownBtn.style.display = "block";
    buyBookBtn1.style.display = "none";
    }
    else {
        buyBookBtn1.style.display = "block";
        ownBtn.style.display = "none";
    }
};

//2nd buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn2'] == "true") {
   ownBtn2.style.display = "block";
    buyBookBtn2.style.display = "none";
    }
    else {
        buyBookBtn2.style.display = "block";
        ownBtn2.style.display = "none";
    }
};
// //3rd buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn3'] == "true") {
   ownBtn3.style.display = "block";
    buyBookBtn3.style.display = "none";
    }
    else {
        buyBookBtn3.style.display = "block";
        ownBtn3.style.display = "none";
    }
};
// //4th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn4'] == "true") {
   ownBtn4.style.display = "block";
    buyBookBtn4.style.display = "none";
    }
    else {
        buyBookBtn4.style.display = "block";
        ownBtn4.style.display = "none";
    }
};
//5th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn5'] == "true") {
   ownBtn5.style.display = "block";
    buyBookBtn5.style.display = "none";
    }
    else {
        buyBookBtn5.style.display = "block";
        ownBtn5.style.display = "none";
    }
};
//6th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn6'] == "true") {
   ownBtn6.style.display = "block";
    buyBookBtn6.style.display = "none";
    }
    else {
        buyBookBtn6.style.display = "block";
        ownBtn6.style.display = "none";
    }
};
//7th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn7'] == "true") {
   ownBtn7.style.display = "block";
    buyBookBtn7.style.display = "none";
    }
    else {
        buyBookBtn7.style.display = "block";
        ownBtn7.style.display = "none";
    }
};
//8th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn8'] == "true") {
   ownBtn8.style.display = "block";
    buyBookBtn8.style.display = "none";
    }
    else {
        buyBookBtn8.style.display = "block";
        ownBtn8.style.display = "none";
    }
};
//9th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn9'] == "true") {
   ownBtn9.style.display = "block";
    buyBookBtn9.style.display = "none";
    }
    else {
        buyBookBtn9.style.display = "block";
        ownBtn9.style.display = "none";
    }
};
//10th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn10'] == "true") {
   ownBtn10.style.display = "block";
    buyBookBtn10.style.display = "none";
    }
    else {
        buyBookBtn10.style.display = "block";
        ownBtn10.style.display = "none";
    }
};
//11th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn11'] == "true") {
   ownBtn11.style.display = "block";
    buyBookBtn11.style.display = "none";
    }
    else {
        buyBookBtn11.style.display = "block";
        ownBtn11.style.display = "none";
    }
};
//12th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn12'] == "true") {
   ownBtn12.style.display = "block";
    buyBookBtn12.style.display = "none";
    }
    else {
        buyBookBtn12.style.display = "block";
        ownBtn12.style.display = "none";
    }
};
//13th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn13'] == "true") {
   ownBtn13.style.display = "block";
    buyBookBtn13.style.display = "none";
    }
    else {
        buyBookBtn13.style.display = "block";
        ownBtn13.style.display = "none";
    }
};
//14th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn14'] == "true") {
   ownBtn14.style.display = "block";
    buyBookBtn14.style.display = "none";
    }
    else {
        buyBookBtn14.style.display = "block";
        ownBtn14.style.display = "none";
    }
};
//15th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn15'] == "true") {
   ownBtn15.style.display = "block";
    buyBookBtn15.style.display = "none";
    }
    else {
        buyBookBtn15.style.display = "block";
        ownBtn15.style.display = "none";
    }
};
//16th buy the book button - invisible in case it has been purchased already
currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['buyBookBtn16'] == "true") {
   ownBtn16.style.display = "block";
    buyBookBtn16.style.display = "none";
    }
    else {
        buyBookBtn16.style.display = "block";
        ownBtn16.style.display = "none";
    }
};




currentUser=JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")) : [];
userRecords = JSON.parse(localStorage.getItem("users"));
for (let i =0; i < userRecords.length; i++) { 
    if (userRecords[i].password == passwordCurrentUser &&  userRecords[i]['cardStatus'] == "true") {
        for(let key in userRecords[i].purchasedBooks) {
        let item = document.createElement("li");
        item.style.color = "black";
        item.innerHTML = userRecords[i].purchasedBooks[key];
       
        document.getElementById("rented-books-list").appendChild(item);
    }
}
};



console.log('На любой ширине экрана все 4 карточки с книгами одновременно плавно проявляются без затухания \n 199 баллов' );