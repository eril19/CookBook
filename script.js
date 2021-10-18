function clicked(){
    document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.lang')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
}

const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModal");

// Ketika tombol openButton ditekan
openButton.addEventListener('click', () => {
  modal.style.display = "block";
});

const closeButton = document.getElementById("closeModal");

// Ketika tombol closeButton ditekan
closeButton.addEventListener('click', () => {
  modal.style.display = "none";
});
