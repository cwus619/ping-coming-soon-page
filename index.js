const icons = document.querySelectorAll(".icon")

for(let icon of icons){
    console.log(icon.children[0]);
    const logo = icon.children[0];
    icon.addEventListener("mouseover", function(){
        icon.style.backgroundColor = "hsl(223, 87%, 63%)";
        icon.style.cursor = "pointer";
        logo.style.color = "white";        
    });
    icon.addEventListener("mouseleave", function(){
        icon.style.backgroundColor = "white";
        logo.style.color = "hsl(223, 87%, 63%)";
    });
}

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()