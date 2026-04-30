fetch('../json/obra.json')
    .then(res => res.json())
    .then(works => {
        const grid = document.getElementById('grid');

        works.forEach(work => {
            grid.innerHTML += `
                <div class="card">
                    <a href="obras.html?id=${work.ID}">
                        <img src="../img/obras/${work.Photo}" alt="imagen obra">
                        <ul>
                            <li class="titulo">${work.Title}</li>
                            <li class="fecha">${work.Date}</li>
                        </ul>
                    </a>
                </div>
            `;
        });
    });