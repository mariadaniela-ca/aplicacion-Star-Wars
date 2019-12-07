$(document).ready(function () {


  function call(link) {
    $.ajax({

      url: link,
      method: "GET",
      success: function (data) {
        // var container2 = $(".container2");
        var name = data.results;
        var personajes = JSON.stringify(name);
        localStorage.setItem('personajes', personajes);
        // list.push(name);


        console.log("algo");

      },
      fail: function (error) {
        console.log('Error: ', error);
      }

    });
  }


  if (localStorage.getItem('personajes')) {
    var personajesParse = JSON.parse(localStorage.getItem('personajes'));
    for (var i = 0; i < personajesParse.length; i++) {
      var tBody = document.getElementById('tbody');

      var tr = document.createElement('tr');
      tBody.append(tr);

      var tdN = document.createElement('th');
      tdN.textContent = i + 1;
      tr.append(tdN);

      var name1 = document.createElement('td');
      name1.textContent = personajesParse[i].name;
      tr.append(name1);

      var gender = document.createElement('td');
      gender.textContent = personajesParse[i].gender;
      tr.append(gender);

      var height = document.createElement('td');
      height.textContent = personajesParse[i].height;
      tr.append(height);

      var mass = document.createElement('td');
      mass.textContent = (personajesParse[i].mass + " kg");
      tr.append(mass);

      var eyeColor = document.createElement('td');
      eyeColor.textContent = personajesParse[i].eye_color;
      tr.append(eyeColor);


      var button = document.createElement('button');
      button.className = 'btn btn-danger';
      button.textContent = 'Eliminar';
      tr.append(button);
      button.dataset.id = i;

    }
  } else {
    call("https://swapi.co/api/people/");
  }
  $('button').click(function () {
    var id = $(this).data('id');

    personajesParse.splice(id, 1);

    var personajesJson = JSON.stringify(personajesParse);
    localStorage.setItem('personajes', personajesJson);
  });
});


$(document).ready(function () {
  $('button').on('click', function () {
    $(this).parentsUntil('tbody').fadeOut(1000, function () {
      $(this).remove()
      location.reload();
    })

  });
});

if (localStorage.getItem('personajes') === '[]') {
  localStorage.removeItem('personajes');
  var button2 = document.getElementById('button2');
  button2.classList.remove('d-none');
  button2.classList.add('d-block');
  button2.onclick = reset;
    function reset() {
      location.reload()
  }
}