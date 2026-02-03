// Select all menu cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        // Close all other cards
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove("active");
            }
        });

        // Toggle current card
        card.classList.toggle("active");
    });
});
