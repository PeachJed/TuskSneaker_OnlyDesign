
function myFunction() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (firstname && lastname && email && password) {
    } else {
        alert("โปรดป้อนข้อมูลให้ครบถ้วน")
    }

}

const firstname = document.querySelector('.input-firstname').value
const lastname = document.querySelector('.input-lastname').value
const email = document.querySelector('.input-email').value
const password = document.querySelector('.input-password').value

function registerUsser(event){
  event.preventDefault();

  const user = {
    Firstname: firstname.value,
    Lastname: lastname.value,
    Email: email.value,
    Password: password.value
  };

  fetch('http://localhost:8081/api/register',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  }).then((response)=>{
    return response.json();
  })
  .then((json)=>{
    alert("ล็อคอินข้อมูลเสร็จเรียบร้อย"+json.id)

  })
  .catch((error)=>{
    console.log(error.message);
  });
}

let createDataBtn = document.querySelector('#id-btn');
createDataBtn.addEventListener('click', registerUsser)





