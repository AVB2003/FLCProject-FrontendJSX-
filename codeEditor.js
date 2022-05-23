

// VISHU BROH HERE IS Startingggggggggggggggggggggggggggggggggggggggggggggggggggggggg


//  this code is used   for  opening or closing textareas
  const accItems = document.querySelectorAll(".accordion__btn");
  // add a click event for all items
  accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));
  function toggleAcc() {
    // toggle active class on current item
    // console.log(this.parentElement.classList.value);
    if (this.parentElement.classList.value != "accordion__item--active") {
      this.parentElement.classList.toggle("accordion__item--active");
    }
  }



//  this code is used  for  implementing the js html css to iframe
document.getElementById('html').addEventListener('keyup', run);
document.getElementById('css').addEventListener('keyup', run);
document.getElementById('javascript').addEventListener('keyup', run);


function run() {
  let html = document.getElementById('html').value;
  let css =  "<style>"+  document.getElementById('css').value +"</style>";
  let javascript = document.getElementById('javascript').value;
    let output = document.getElementById('output');
    // console.log(html, css, javascript, output)
    output.contentDocument.body.innerHTML =  html + css ;
    // output.contentDocument.body.innerHTML =   html + style  ;
    output.contentWindow.eval(javascript);
    
}


// ENDINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggg



// function update(a) {
//   let result_element = document.getElementById('htmlcode');
//   // Update code
//   result_element.innerText = text;
//   // Syntax Highlight
//   Prism.highlightElement(result_element);
// }