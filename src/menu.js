function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    const item1=document.createElement('div');
    item1.classList.add('first-row');
    menu.appendChild(item1);

    const item2=document.createElement('div');
    menu.appendChild(item2);

    const item3=document.createElement('div');
    item3.classList.add('second-row');
    menu.appendChild(item3);

    const sweetImage = document.createElement("img");
    sweetImage.classList.add("sweet-image");
    sweetImage.src = "images/cake-menu.jpg";
    const lineBreak = document.createElement('br');



  item1.appendChild(createHeader("Red Velvet Cake"));
  item1.appendChild(createParagraph("Crimson cake base with a hint of chocolate—pairs"));
  item1.appendChild(createParagraph("perfectly with cream cheese buttercream."));
  

  item1.appendChild(createHeader("Banana Cake"));
  item1.appendChild(createParagraph("Reminiscent of classic banana bread recipes—this"));
  item1.appendChild(createParagraph("cake offers a lighter delicious texture."));
  


  item1.appendChild(createHeader("Raspberry Lemon Cake"));
  item1.appendChild(createParagraph("Classic Vanilla Cake layered with Lemon Curd,"));
  item1.appendChild(createParagraph("topped with Raspberry Buttercream."));
  


  item2.appendChild(sweetImage);

  item3.appendChild(createHeader("Hummingbird Cake"));
  item3.appendChild(createParagraph("Hummingbird Cake layered with Cream Cheese "));
  item3.appendChild(createParagraph("Buttercream."));
 


  item3.appendChild(createHeader("Apple Spice Cake (Seasonal)"));
  item3.appendChild(createParagraph("A beloved family recipe that is packed with apples "));
  item3.appendChild(createParagraph("and cozy fall spices—cinnamon, cloves, and ginger."));
  


  item3.appendChild(createHeader("Coconut Cake"));
  item3.appendChild(createParagraph("Coconut milk and coconut flakes bring the creamy"));
  item3.appendChild(createParagraph("coconut flavor to life in this tropical-inspired cake."));
  


    return menu;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.classList.add('description');
    paragraph.textContent = text;
    return paragraph;
  }

  function createHeader(text) {
    const header = document.createElement("h3");
    header.classList.add('menu-title');
    header.textContent = text;
    return header;
  }

  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;