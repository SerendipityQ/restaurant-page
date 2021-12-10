function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
  
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-div');
    contact.appendChild(infoDiv);
  

    const phone = document.createElement('h3');
    phone.textContent = 'PHONE';
  
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+44 5234 456 989';


    const email = document.createElement('h3');
    email.textContent = 'EMAIL';
  
    const emailText= document.createElement('p');
    emailText.textContent = 'deliciousio@dessert.com';
  

    const addressName = document.createElement('h3');
    addressName.textContent = 'ADDRESS';

    const address = document.createElement('p')
    address.textContent = '25,Heddon St, London ,United Kingdom';

    const location = document.createElement('p')
    location.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1258834268187!2d-0.14158458434282645!3d51.51090647963565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5bfae17a3%3A0xe1f53c0916205f72!2sHeddon%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sro!4v1639084593420!5m2!1sen!2sro" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    
  
    infoDiv.appendChild(phone);
    infoDiv.appendChild(phoneNumber);

    infoDiv.appendChild(email);
    infoDiv.appendChild(emailText);

    infoDiv.appendChild(addressName);
    infoDiv.appendChild(address);

    contact.appendChild(location);
  
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact;