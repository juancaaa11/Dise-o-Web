//Desplegar barra con ejercicios
function toggleSection(id) {
    const section = document.getElementById(id);
    const box = document.querySelector(`#${id} ~ .box`);
    const isMobile = window.innerWidth <= 768;

    if (section.classList.contains('oculto')) {
        section.classList.remove('oculto');
        section.style.display = 'block'; // Asegura que sea visible
        box.setAttribute('aria-expanded', 'true');
    } else {
        section.classList.add('oculto');
        section.style.display = 'none'; // Oculta si está desplegado
        box.setAttribute('aria-expanded', 'false');
    }
}


//Responsive para movil. Oculta seccion y ajusta tamaño
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 768) {
        sidebar.style.display = 'block';  
    } else {
        sidebar.style.display = 'none';  
    }
});
