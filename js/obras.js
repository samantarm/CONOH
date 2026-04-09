fetch ("data.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("obrasinfo");

data.array.forEach(item => {
    container.innerHTML += '
    
    <div class = "title">${item.title}</div>
    ';
});
    
});
});
