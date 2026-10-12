document.addEventListener("DOMContentLoaded", () => {
    
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("keyup", () => {
            const filter = searchInput.value.toLowerCase();

            cards.forEach(card => {
                const title = card.querySelector("h2").innerText.toLowerCase();
                if (title.includes(filter)) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.85)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    }

    const profilePhoto = document.getElementById("profile-photo");
    if (profilePhoto) {
        let isZoomed = false;
        profilePhoto.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

        profilePhoto.addEventListener("click", () => {
            if (!isZoomed) {
                profilePhoto.style.transform = "scale(1.2) rotate(6deg)";
                isZoomed = true;
            } else {
                profilePhoto.style.transform = "scale(1) rotate(0deg)";
                isZoomed = false;
            }
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formMsg = document.getElementById("form-message");

            formMsg.innerText = "Pesan berhasil terkirim!";
            formMsg.style.color = "green";
            formMsg.style.fontWeight = "bold";
            formMsg.style.marginTop = "10px";
            formMsg.style.opacity = "0";
            formMsg.style.transform = "translateY(-10px)";
            formMsg.style.transition = "all 0.4s ease";

            setTimeout(() => {
                formMsg.style.opacity = "1";
                formMsg.style.transform = "translateY(0)";
            }, 50);

            contactForm.reset();
        });
    }
});