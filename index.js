window.onload = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();

    translate('fr');
    document.querySelector(".toggle-language[data-lang='fr']").style.display = "none";
}

function toggleMenu($event) {
    document.getElementById("small-nav-menu").classList.toggle("show");
    event.stopPropagation();
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.drop-btn')) {
        document.getElementById("small-nav-menu").classList.remove("show");
    }
}

function toggleSubmitDisable() {
    const email = document.querySelector('#form-email');
    const number = document.querySelector('#form-number');

    console.log(email);
    console.log(number);
}


// Handle translations
document.querySelectorAll(".toggle-language").forEach((button) => {
  button.addEventListener("click", (event) => {
    translate(event.target.getAttribute("data-lang"));
  });
});

document.querySelectorAll(".toggle-language").forEach((button) => {
    button.addEventListener("click", (event) => {
        const selectedLang = event.target.getAttribute("data-lang");
        translate(selectedLang);

        // Toggle visibility
        document.querySelector(".toggle-language[data-lang='fr']").style.display = selectedLang === "fr" ? "none" : "inline-block";
        document.querySelector(".toggle-language[data-lang='en']").style.display = selectedLang === "en" ? "none" : "inline-block";
    });
});


function translate(lang) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    const keys = key.split("."); // Support nested keys
    let translation = translations[lang];
    if (translation) {
        keys.forEach((key) => translation = translation[key])

        element.innerHTML = Array.isArray(translation) && element.tagName === "UL" ?
            translation.map(item => `<li>${item}</li>`).join("") :
            translation;
    }
  });
}


const translations = {
  "fr": {
    "company": {
        "name": "Le Drone Qui Tombe À Pic"
    },
    "nav": {
      "home": "Accueil",
      "portfolio": "Réalisations",
      "services": "Prestations",
      "about": "À propos",
      "contact": "Contact"
    },
    "home": {
      "title": "Le Drone Qui Tombe À Pic",
      "subtitle": "Droneur professionnel",
      "contact": "Contact"
    },
    "portfolio": {
      "title": "Nos réalisations"
    },
    "services": {
      "title": "Prestations",
      "description": "Nous couvrons tout type de besoin : évenementiel, BTP, agriculture, etc.",
      "items": [
        "Mariage",
        "Inspection toiture",
        "Recherche de troupeau perdu"
      ]
    },
    "about": {
      "title": "Qui sommes-nous ?",
      "text1": "L'entreprise Le Drone Qui Tombe À Pic est située à Perpet-les-Oies dans Ton Cul (69) et intervient dans un rayon de X km, vous fournissant un service de qualité, que vous soyez un particulier ou un professionnel.",
      "text2": "Pour un suivi cohérent et en toute sérénité, Fabien sera votre seul interlocuteur du début à la fin de la prestation."
    },
    "contact": {
      "title": "Contact",
      "company": "Le Drone Qui Tombe À Pic",
      "form": {
        "emailPlaceholder": "email@example.com",
        "numberPlaceholder": "0621436587",
        "messagePlaceholder": "Message",
        "submitButton": "Envoyer"
      }
    }
  },

  "en": {
    "company": {
        "name": "Ze Drone Qui Tombe À Pic"
    },
    "nav": {
      "home": "Home",
      "portfolio": "Portfolio",
      "services": "Services",
      "about": "About",
      "contact": "Contact"
    },
    "home": {
      "title": "Georges Thomas Company",
      "subtitle": "Floor and Wall Coverings",
      "contact": "Contact"
    },
    "portfolio": {
      "title": "Our Work"
    },
    "services": {
      "title": "Services",
      "description": "We work on all types of projects, new constructions or renovations, wall and floor coverings:",
      "items": [
        "Tiling",
        "Faience",
        "Parquet",
        "Walk-in showers",
        "Plot installations",
        "Slab pouring",
        "Screed pulling",
        "Small masonry"
      ]
    },
    "about": {
      "title": "About Us",
      "text1": "Georges Thomas Company is located in Thiers in the Puy-de-Dôme (63) and operates within a 50 km radius, providing quality service for both individuals and professionals.",
      "text2": "For a smooth experience, Thomas will be your only point of contact from start to finish."
    },
    "contact": {
      "title": "Contact",
      "company": "Georges Thomas Company",
      "form": {
        "emailPlaceholder": "email@example.com",
        "numberPlaceholder": "0621436587",
        "messagePlaceholder": "Message",
        "submitButton": "Send"
      }
    }
  }

}
