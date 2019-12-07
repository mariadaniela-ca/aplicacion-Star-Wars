
var btAdd = document.getElementById("btAdd");
btAdd.onclick = contactAdd;
function contactAdd() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var comments = document.getElementById('areacomments');
  if (name.value === "" || email.value === "" || comments.value === "") {
    swal({
      title: "Debe llenar todos los campos",
      icon: "error",

    });
  } else {
    saveContact(
      name.value,
      email.value,
      comments.value,

    )
    swal({

      title: "¡Tu mensaje ha sido enviado!",
      icon: "success",
    })
      .then((send) => {
        if (send) {
          location.reload();
        }
      });
  };
}
function saveContact(name, email, comments) {
  var contact = [];

  if (localStorage.getItem('contacts')) {
    contact = JSON.parse(localStorage.getItem('contacts'));
  }
  contact.push(new Contacts(name, email, comments));
  var contactsJson = JSON.stringify(contact);
  localStorage.setItem('contacts', contactsJson);


}
function Contacts(name, email, comments) {
  this.name = name;
  this.email = email;
  this.comments = comments;


}
var inputName = document.getElementById('name');

inputName.onblur = showClass;

function showClass(event) {
  var inputNode1 = event.target;

  if (!validateName(inputNode1.value)) {

    inputNode1.classList.remove('is-valid');
    inputNode1.classList.add('is-invalid');
  } else {
    inputNode1.classList.remove('is-invalid');
    inputNode1.classList.add('is-valid');
  };
};


function validateName(name) {
  var re1 = /^([a-zA-Z ]){2,30}$/;
  return re1.test(String(name).toLowerCase());
}


var email = document.getElementById('email');

email.onblur = showClass1;

function showClass1(event) {
  var inputNode = event.target;

  if (!validateEmail(inputNode.value)) {
    inputNode.classList.remove('is-valid');
    inputNode.classList.add('is-invalid');

  } else {
    inputNode.classList.remove('is-invalid');
    inputNode.classList.add('is-valid');
  };
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());

};
var comments = document.getElementById('areacomments');

comments.onblur = showClass;

function showClass(event) {
  var inputcomments = event.target;

  if (!validateComments(inputcomments.value)) {

    inputcomments.classList.remove('is-valid');
    inputcomments.classList.add('is-invalid');

  } else {
    inputcomments.classList.remove('is-invalid');
    inputcomments.classList.add('is-valid');

  };
};


function validateComments(comments) {
  var re1 = /^([a-zA-Z ]){3,100}$/;
  return re1.test(String(comments).toLowerCase());
};