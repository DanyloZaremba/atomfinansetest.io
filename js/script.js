const productId = 123; // ID товару

fetch(`/api/products/${productId}`)
  .then(response => response.json())
  .then(data => {
    // Оновлення шаблону HTML
    const productImage = document.querySelector('.product-image img');
    productImage.src = data.image;

    const productName = document.querySelector('.product-h2');
    productName.textContent = data.name;

    const productDescription = document.querySelector('.product-description');
    productDescription.textContent = data.description;

    // Оновлення характеристик
    const productCharacteristics = document.querySelector('.product-characteristics');
    productCharacteristics.innerHTML = ''; // Очистити список характеристик
    for (const characteristic of data.characteristics) {
      const listItem = document.createElement('li');
      listItem.textContent = `${characteristic.name}: ${characteristic.value}`;
      productCharacteristics.appendChild(listItem);
    }

    // ... (Інші оновлення)
  });
 
  