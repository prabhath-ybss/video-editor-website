/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("show");

    });

}


/* CLOSE MOBILE NAV */

document.querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("show");

            document.querySelectorAll(".mobile-nav a")
                .forEach(item => item.classList.remove("active"));

            link.classList.add("active");

        });

    });


/* ACTIVE NAV STATE */
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}



/* =====================================================
   PORTFOLIO FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const workCards =
    document.querySelectorAll(".work-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        workCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});



/* =====================================================
   VIDEO MODAL
===================================================== */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const projectVideo =
    document.getElementById("projectVideo");

const projectVideoSource =
    document.getElementById("projectVideoSource");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");


/* PROJECT BUTTONS */

const projectButtons =
    document.querySelectorAll(".project-button");


function openVideoModal(
    title,
    video,
    poster = ""
) {

    modalTitle.textContent =
        title || "Project Preview";


    modalDescription.textContent =
        "Video editing project by Prabhath Edits.";


    if (projectVideoSource) {

        projectVideoSource.src =
            video || "";

    }


    if (poster) {

        projectVideo.poster =
            poster;

    }


    projectVideo.load();


    projectModal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        openVideoModal(

            button.dataset.title,

            button.dataset.video,

            button.dataset.poster || ""

        );

    });

});



/* CLOSE MODAL */

function closeModal() {

    if (projectVideo) {

        projectVideo.pause();

        projectVideo.currentTime = 0;

    }


    projectModal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target === projectModal
        ) {

            closeModal();

        }

    }
);



/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);



/* =====================================================
   HERO SHOWREEL
===================================================== */

const heroPlay =
    document.getElementById("heroPlay");

const showreelButton =
    document.getElementById("showreelButton");


function openShowreel() {

    openVideoModal(

        "Prabhath Edits — Showreel",

        "assets/videos/showreel.mp4",

        "https://images.unsplash.com/photo-1579109652910-99b9be06aaec?auto=format&fit=crop&fm=jpg&q=85&w=1400"

    );

}


if (heroPlay) {

    heroPlay.addEventListener(
        "click",
        openShowreel
    );

}


if (showreelButton) {

    showreelButton.addEventListener(
        "click",
        openShowreel
    );

}