let nav = [
    {menu: "contacto", href: "contacto.html"},
    {menu: "Inicio", href: "index.html"},
    {menu: "productos", href: "productos.html"}

]

let menu = [];

for(let cuadros of nav){
     menu.push(`<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="${cuadros.href}">${cuadros.menu}</a>
            </div>
          </div>
        </div>
      </nav>
        `
     )
    
        
}
document.querySelector('header').innerHTML = menu.join().replaceAll(',', "");
