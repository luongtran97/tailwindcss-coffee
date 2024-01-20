const topMenu = document.getElementById("lt-top-menu")
const toggleTopMenu = document.getElementById("lt-toggle-top-menu-icon")

document.addEventListener('click', (e) => { 
 if (toggleTopMenu.contains(e.target)) {
    // click to toggle
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('lt-top-menu-expanded')

 } else {
    // click outsie
    if (topMenu.classList.contains('lt-top-menu-expanded')) {
      topMenu.classList.remove('lt-top-menu-expanded')
      topMenu.classList.add('hidden')
    }
 }
})