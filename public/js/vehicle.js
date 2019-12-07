$(document).ready(function () {


    function call(link) {
      $.ajax({
  
        url: link,
        method: "GET",
        success: function (data) {
          // var container2 = $(".container2");
          var vehicle = data.results;
          var vehicles1 = JSON.stringify(vehicle);
          localStorage.setItem('vehicles',vehicles1);
          // list.push(name);
  
  
          console.log("algo");
  
        },
        fail: function (error) {
          console.log('Error: ', error);
        }
  
      });
    }
  
  
    if (localStorage.getItem('vehicles')) {
      var vehicles2 = JSON.parse(localStorage.getItem('vehicles'));
      for (var i = 0; i < vehicles2.length; i++) {
        var tBody = document.getElementById('tbody');
  
        var tr = document.createElement('tr');
        tBody.append(tr);
  
        var tdN = document.createElement('th');
        tdN.textContent = i + 1;
        tr.append(tdN);
  
        var name1 = document.createElement('td');
        name1.textContent = vehicles2[i].name;
        tr.append(name1);
  
        var model = document.createElement('td');
        model.textContent = vehicles2[i].model;
        tr.append(model);
  
        var manufacturer = document.createElement('td');
        manufacturer.textContent = vehicles2[i].manufacturer;
        tr.append(manufacturer);
  
        var length= document.createElement('td');
        length.textContent= vehicles2[i].length;
        tr.append(length);
        
  
        var button = document.createElement('button');
        button.className = 'btn btn-danger';
        button.id = 'button'
        button.textContent = 'Eliminar';
        tr.append(button);
        button.dataset.id = i;
      }
    } else {
      call("https://swapi.co/api/vehicles/");
    }
    $('button').click(function () {
        var id = $(this).data('id');
    
        vehicles2.splice(id, 1);
    
        var vehicles1 = JSON.stringify(vehicles2);
        localStorage.setItem('vehicles', vehicles1);
        
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
    if (localStorage.getItem('vehicles')=== '[]'){
      localStorage.removeItem('vehicles');
      var button2 = document.getElementById('button2');
      button2.classList.remove('d-none');
      button2.classList.add('d-block');
      button2.onclick = reset;
      function reset(){
        location.reload()
      }
    }
    
  