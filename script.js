let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

let header = document.querySelector('.header');

menu.onclick =()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll =()=>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

if(window.scrollY > 0){
  header.classList.add('active');
}else{
  header.classList.remove('active');
  }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbx3Cx6jPjYVTExsJhNdvKzmAaNeG0_QE7afklAhStXuaZVX998Yy20e27DiInFKWMfS/exec'
      
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Ευχαριστούμε για την επικοινωνία σας! Θα σας απαντήσουμε το συντομότερο δυνατόν." 
            setTimeout(function(){
              msg.innerHTML = ''
            }, 4000)
          form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
   
    


 






