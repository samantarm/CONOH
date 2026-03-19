var includes = document.querySelectorAll("[data-html-include]");

includes.forEach (
    (etiqueta) => {
        let url = etiqueta.getAttribute ("data-html-include");

        fetch (url)
        .then (response => response.text())
        .then (
            (html) {
                
            }
        )
    }
)