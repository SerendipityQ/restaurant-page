function createHome() {
  
    const section = document.createElement("section");
       
    return section;
  }
 
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;
 