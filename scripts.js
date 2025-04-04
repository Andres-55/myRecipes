async function loadProducts() {
    try {
        const response = await fetch('data.json');
        const products = await response.json(); 
    
        const container = document.getElementById('grid-container'); 
    
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.id = `item-${index + 1}`; 
    
            let recipeList = "<ul class='recipe'>";
            product.recipe.forEach(ingredient => {
                recipeList += `<li>${ingredient}</li>`;
            });
            recipeList += "</ul>";

            let directionList = "<ul class='directions'>";
            product.directions.forEach(step => {
                directionList += `<li>${step}</li>`;
            });
            directionList += "</ul>";

            productDiv.innerHTML = `
                <img id="product-img-${index}" class="pics" src="${product.image}" alt="${product.name}">
                
                <h3 id="name-${index}" class="name">${product.name}</h3>
                <div class="info">
                    <p class="cat">${product.category}</p>
                    <p class="amount">${product.amount}</p>
                    <p class="time">${product.time}</p>
                </div>
                <div class="lists">

                    <div class="rList">
                        ${recipeList}
                    </div>

                    <div class="dList">
                        ${directionList}
                    </div>
                </div>
            `;
    
            container.appendChild(productDiv); 
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
  }
  
  window.onload = loadProducts;

    
  