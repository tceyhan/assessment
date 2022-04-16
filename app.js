randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  
  const menubutton = document.querySelectorAll(".section-body-menuitem");
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const reset = document.getElementById("reset");
  const submit = document.getElementById("submit");
  const form = document.getElementsByTagName("form");

  const inputName = document.getElementById("name");
  const inputSurname = document.getElementById("surname");
  const inputEmail = document.getElementById("email");
  const password = document.getElementById("password");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(window.location.pathname === "/one.html"){
    window.location.href = "./two.html";
    }else{
    window.location.href = "./one.html";
    }
  });

  reset.addEventListener("click", (e) => {
    e.preventDefault();
    inputName.value = "";
    inputSurname.value = "";
    inputEmail.value = "";
    password.value = "";    
  });
   form[0].addEventListener("submit", (e) => {
    e.preventDefault();
    if(inputName.value === "" || inputSurname.value === "" || inputEmail.value === "" || password.value === ""){
        submit.setAttribute("disabled");
   
  }







  
  

  
  


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
  
  
  
