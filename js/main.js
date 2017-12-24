var btn = document.getElementById("btn");

window.onload = function(){
  var req = new XMLHttpRequest();
  req.open('GET','https://github.com/ProstoMimoProhodill/ReadHTML/blob/dev/Mephi_data/data.json');
  req.send();

  if (req.status != 200) {
    // обработать ошибку
    console.log( req.status + ': ' + req.statusText ); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    console.log( req.responseText ); // responseText -- текст ответа.
  }



  // var data = req.responseText;
  // alert(data+"!");
  // console.log(data);

  // req.onload = function(){
  //   var data = req.responseText;
  //   alert(data+"!");
  //   console.log(data);
  // };
};

// btn.addEventListener("click", function(){
//   alert("Click!");
// });
