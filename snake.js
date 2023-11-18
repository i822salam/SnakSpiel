// JavaScript-Code für die Highscore-Liste und das Bewertungsformular

// Simuliere einige Beispiel-Highscores
const highscores = [
    { name: 'Spieler1', score: 1000 },
    { name: 'Spieler2', score: 800 },
    { name: 'Spieler3', score: 600 },
    { name: 'Spieler4', score: 400 },
    { name: 'Spieler5', score: 200 }
];

// Funktion zum Laden der Highscore-Liste
function loadHighscores() {
    const highscoreList = document.getElementById('highscore-list');
    highscoreList.innerHTML = ''; // Lösche vorhandene Einträge

    highscores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.name}: ${entry.score} Punkte`;
        highscoreList.appendChild(listItem);
    });
}

// Funktion zum Laden der Bewertungssterne
function loadRatingStars() {
    const ratingStarsContainer = document.getElementById('rating-stars');
    ratingStarsContainer.innerHTML = ''; // Lösche vorhandene Sterne

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.setAttribute('data-rating', i);
        star.innerHTML = '?';
        ratingStarsContainer.appendChild(star);
    }
}

// Funktion zum Absenden der Bewertung
function submitRating() {
    const selectedRating = document.querySelector('.star.selected').getAttribute('data-rating');
    alert(`Bewertung abgeschickt: ${selectedRating} Sterne`);
}

// Event Listener für Sterne hinzufügen
document.addEventListener('DOMContentLoaded', () => {
    loadHighscores();
    loadRatingStars();

    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
        });
    });
});
