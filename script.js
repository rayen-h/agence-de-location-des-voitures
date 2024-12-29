// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    // Validation de "Ajouter une Voiture" form
    const voitureForm = document.getElementById('voitureForm');
    if (voitureForm) {
        voitureForm.addEventListener('submit', (event) => {
            const marque = document.getElementById('marque').value.trim();
            const modele = document.getElementById('modele').value.trim();
            const annee = document.getElementById('annee').value;
            const prix = document.getElementById('prix').value;

            if (!marque || !modele || !annee || !prix || annee < 1900 || prix < 0) {
                alert('Veuillez remplir correctement tous les champs.');
                event.preventDefault(); // Empêcher l'envoi du formulaire
            }
        });
    }

    // Validation de  "Ajouter un Client" form
    const clientForm = document.getElementById('clientForm');
    if (clientForm) {
        clientForm.addEventListener('submit', (event) => {
            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('prenom').value.trim();
            const email = document.getElementById('email').value.trim();
            const telephone = document.getElementById('telephone').value.trim();

            if (!nom || !prenom || !email.includes('@') || telephone.length < 8) {
                alert('Veuillez entrer des informations valides.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

   // Ajout dynamique de voitures (exemple facultatif)
    const carContainer = document.getElementById('car-container');
    if (carContainer) {
        const newCar = {
            marque: 'Tesla',
            modele: 'Model 3',
            prix: 250000,
            image: 'tesla-model-3.jpg',
        };


    }
});
