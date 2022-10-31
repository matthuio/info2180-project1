/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    let msg = document.getElementsByClassName("message")[0];
    let btn = document.getElementsByTagName("button")[0];
    let email = document.getElementById("email");
    
  
    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        if (email.value === '' || email.value === null){
            msg.textContent = 'Please enter a valid email address.';
        }
        else{
            msg.textContent = `Thank you! Your email address, ${email.value}, has been added to our mailing list.`;
         }
    });
 }, false);