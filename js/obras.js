fetch("obra.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('obrasinfo');
    
    data.forEach(item => {
      container.innerHTML += `
        <div class="Title">${item.Title}</div>
      `;
    });
  })
  .catch(error => console.error('Error:', error));