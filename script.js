  const locationDropdown = document.getElementById('locationDropdown');
  if (locationDropdown) {
    const maps = {
      braamfontein: document.getElementById('map-braamfontein'),
      riverlea: document.getElementById('map-riverlea'),
      glenhazel: document.getElementById('map-glenhazel')
    };

    function showMap(location) {
      for (let key in maps) {
        if (maps[key]) {  
          maps[key].style.display = key === location ? 'block' : 'none';
        }
      }
    }

    locationDropdown.addEventListener('change', function () {
      const selectedLocation = this.value;
      if (selectedLocation !== "0") {
        showMap(selectedLocation);
      } else {
        for (let key in maps) {
          if (maps[key]) maps[key].style.display = 'none';
        }
      }
    });

    
    showMap('braamfontein');
  }


 

function clearFieldOnFocus(field) {
    field.addEventListener("focus", function () {
        if (field.value === field.placeholder) {
            field.value = "";
        }
    });
}





function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name is required.");
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    if (message === "") {
        alert("Message is required.");
        return false;
    }

    return true;  
}





document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("phone"),
        document.getElementById("message")
    ];
    fields.forEach(clearFieldOnFocus);
});


document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        const windowHeight = window.innerHeight;

        elements.forEach(function (el) {
            const positionFromTop = el.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= -50) {
                el.classList.add('visible');
            }
        });
    }

    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();   
});







$(document).ready(function () {
    
    $('.gallery-item').on('click', function () {
        const src = $(this).attr('src');
        $('#lightboxImg').attr('src', src);
        $('#lightbox').fadeIn();
    });

     
    $('#lightboxClose').on('click', function () {
        $('#lightbox').fadeOut();
    });

     
    $('#lightbox').on('click', function (e) {
        if (e.target === this) {
            $(this).fadeOut();
        }
    });
});


