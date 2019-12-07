$(document).ready(function () {


  function call(link) {
    $.ajax({

      url: link,
      method: "GET",
      success: function (data) {
        // var container2 = $(".container2");
        var planet = data.results;
        var planets1 = JSON.stringify(planet);
        localStorage.setItem('planets', planets1);
        // list.push(name);


        console.log("algo");

      },
      fail: function (error) {
        console.log('Error: ', error);
      }

    });
  }


  if (localStorage.getItem('planets')) {
    var planets1 = JSON.parse(localStorage.getItem('planets'));
    for (var i = 0; i < planets1.length; i++) {
      var tBody = document.getElementById('tbody');

      var tr = document.createElement('tr');
      tBody.append(tr);

      var tdN = document.createElement('th');
      tdN.textContent = i + 1;
      tr.append(tdN);

      var namePlanet = document.createElement('td');
      namePlanet.textContent = planets1[i].name;
      tr.append(namePlanet);

      var climate = document.createElement('td');
      climate.textContent = planets1[i].climate;
      tr.append(climate);

      var gravity = document.createElement('td');
      gravity.textContent = planets1[i].gravity;
      tr.append(gravity);

      var population = document.createElement('td');
      population.textContent = planets1[i].population;
      tr.append(population);

      var button = document.createElement('button');
      button.className = 'btn btn-danger';
      button.name = 'button';
      button.textContent = 'Eliminar';
      button.dataset.id = i;
      tr.append(button);

    }
  } else {
    call("https://swapi.co/api/planets/");
  }

  $('button').click(function () {
    var id = $(this).data('id');
    planets1.splice(id, 1);
    var planets2 = JSON.stringify(planets1);
    localStorage.setItem('planets', planets2);

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

if (localStorage.getItem('planets') === '[]') {
  localStorage.removeItem('planets');
  var button2 = document.getElementById('button2');
  button2.classList.remove('d-none');
  button2.classList.add('d-block');
  button2.onclick = reset;

  function reset() {
    location.reload()
  }
}