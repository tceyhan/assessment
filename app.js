randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  
  const menubutton = document.querySelectorAll(".section-body-menuitem");
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const reset = document.getElementById("reset");
  const submit = document.getElementById("submit");
  const form = document.getElementsByTagName("form");

  const one = document.getElementById("name");
  const two = document.getElementById("surname");
  const three = document.getElementById("email");
  const four= document.getElementById("password");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(window.location.pathname === "/one.html"){
    window.location.href = "./two.html";
    }else{
    window.location.href = "./one.html";
    }
  });

  // reset.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   inputName.value = "";
  //   inputSurname.value = "";
  //   inputEmail.value = "";
  //   password.value = "";    
  // });

let one= "";
let two = "";
let three = "";
let four = "";
  
  Array.from(input).forEach((e) => {
    e.addEventListener("keyup", (a) => {
      x = e.value;
      if (e.id === "name") {
          one = e.value;
      }else if(e.id === "surname"){
          two = e.value;
      }else if(e.id === "email"){
          three=e.value;
      }else if(e.id === "password"){
          four=e.value;
      }
  
      if (one && two && three && four) {
          console.log("olur");
          reset.disabled = false;
          submit.disabled = false;
          
      } else {
          console.log("olmaz");
          reset.disabled = true;
          submit.disabled = true;
      }
    });
  });







  
  

  
  


  Array.from(menubutton).forEach((e) => {
    Array.from(e.children).forEach(
      (button) => (button.style.backgroundColor = randomColor())
    );
  });
  
  for (let i = 0; i < menubutton.length; i++) {
    menubutton[i].addEventListener("click", (e) => {
     let newcolor = e.target.style.backgroundColor;
        header.style.backgroundColor = newcolor;
        footer.style.backgroundColor = newcolor;
        reset.style.backgroundColor = newcolor;
        submit.style.backgroundColor = newcolor;
    });
  }
  
  
  form[0].addEventListener("submit", (e) => {
      e.preventDefault()
  })
  
  
  
