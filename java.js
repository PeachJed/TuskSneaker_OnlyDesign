const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

var input = document.getElementById("myInput");
  input.addEventListener("change", function() {
    if (this.value <= 0) {
      alert("Negative numbers are not allowed");
      this.value = 1;
    }
  });


  var select = document.getElementById("size-select");
  select.addEventListener("change", function(){
      var selectedValue = select.value;
      var input = document.getElementById("myInput");
      if(input.value === input.defaultValue){
          input.value = selectedValue;
      }
  });

  