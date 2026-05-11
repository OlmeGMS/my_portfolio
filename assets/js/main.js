// =========================
// GSAP
// =========================

if (typeof gsap !== "undefined") {

  gsap.registerPlugin(
    ScrollTrigger
  );

}

// =========================
// PRELOADER
// =========================

const preloader =
  document.querySelector(
    ".preloader"
  );

function hidePreloader() {

  if (!preloader) return;

  preloader.style.opacity = "0";

  setTimeout(() => {

    preloader.style.display =
      "none";

  }, 600);

}

setTimeout(
  hidePreloader,
  2500
);

window.addEventListener(
  "load",
  () => {

    if (typeof gsap !== "undefined") {

      gsap.to(
        ".loader-line",
        {

          width: "100%",

          duration: 1.2,

          ease: "power4.out",

          onComplete:
            hidePreloader

        }
      );

    } else {

      hidePreloader();

    }

  }
);

// =========================
// CUSTOM CURSOR
// =========================

const cursor =
  document.querySelector(
    ".cursor"
  );

if (cursor) {

  window.addEventListener(
    "mousemove",
    e => {

      cursor.style.left =
        `${e.clientX}px`;

      cursor.style.top =
        `${e.clientY}px`;

    }
  );

  document
    .querySelectorAll(
      "a, button"
    )
    .forEach(el => {

      el.addEventListener(
        "mouseenter",
        () => {

          cursor.style.width =
            "60px";

          cursor.style.height =
            "60px";

          cursor.style.background =
            "rgba(255,255,255,0.1)";

        }
      );

      el.addEventListener(
        "mouseleave",
        () => {

          cursor.style.width =
            "20px";

          cursor.style.height =
            "20px";

          cursor.style.background =
            "transparent";

        }
      );

    });

}

// =========================
// MOBILE MENU
// =========================

const hamburger =
  document.querySelector(
    ".hamburger"
  );

const navLinks =
  document.querySelector(
    ".nav-links"
  );

if (
  hamburger &&
  navLinks
) {

  hamburger.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "active"
      );

    }
  );

}

// =========================
// HERO SLIDER
// =========================

const slides =
  document.querySelectorAll(
    ".slide"
  );

let currentSlide = 0;

function showSlide(index) {

  slides.forEach(slide => {

    slide.classList.remove(
      "active"
    );

  });

  slides[index]
    .classList.add("active");

  // GSAP HERO ANIMATION
  if (typeof gsap !== "undefined") {

    gsap.fromTo(
      slides[index].querySelectorAll(
        ".hero-content > *"
      ),
      {
        y: 80,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,

        stagger: 0.15,

        duration: 1.2,

        ease: "power4.out"

      }
    );

  }

}

function nextSlide() {

  currentSlide++;

  if (
    currentSlide >= slides.length
  ) {

    currentSlide = 0;

  }

  showSlide(currentSlide);

}

// INIT
showSlide(currentSlide);

// AUTO PLAY
setInterval(
  nextSlide,
  7000
);

// =========================
// PARALLAX
// =========================

if (
  typeof gsap !== "undefined" &&
  document.querySelector(
    ".parallax-image img"
  )
) {

  gsap.to(
    ".parallax-image img",
    {

      yPercent: 20,

      ease: "none",

      scrollTrigger: {

        trigger:
          ".parallax-image",

        scrub: true

      }

    }
  );

}

// =========================
// SCROLL ANIMATIONS
// =========================

if (typeof gsap !== "undefined") {

  gsap.utils
    .toArray(".service-card")
    .forEach(card => {

      gsap.from(
        card,
        {

          opacity: 0,
          y: 80,

          duration: 1,

          scrollTrigger: {

            trigger: card,

            start:
              "top 85%"

          }

        }
      );

    });

  gsap.utils
    .toArray(".stack-card")
    .forEach(card => {

      gsap.from(
        card,
        {

          opacity: 0,
          y: 80,

          duration: 1,

          scrollTrigger: {

            trigger: card,

            start:
              "top 85%"

          }

        }
      );

    });

}

// =========================
// PORTFOLIO MODAL
// =========================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const portfolioItems =
      document.querySelectorAll(
        ".portfolio-item"
      );

    const modal =
      document.querySelector(
        ".portfolio-modal"
      );

    const modalTitle =
      document.querySelector(
        ".modal-title"
      );

    const modalJob =
      document.querySelector(
        ".modal-job"
      );

    const modalDescription =
      document.querySelector(
        ".modal-description"
      );

    const modalStackJob = 
    document.querySelector(
      ".modal-job-stack"
    );

    const closeModal =
      document.querySelector(
        ".close-modal"
      );

    if (
      !portfolioItems.length ||
      !modal ||
      !modalTitle ||
      !modalJob ||
      !modalDescription ||
      !modalStackJob ||
      !closeModal
    ) {
      return;
    }

    portfolioItems.forEach(
      item => {

        item.addEventListener(
          "click",
          () => {

            // =========================
            // TRANSLATION KEYS
            // =========================

            const titleKey =
              item.getAttribute(
                "data-title-key"
              );

            const jobKey =
              item.getAttribute(
                "data-job-key"
              );

            const descriptionKey =
              item.getAttribute(
                "data-description-key"
              );

            const stackJobKey =
              item.getAttribute(
                "data-stack-job-key"
              );

            // =========================
            // USE GLOBAL TRANSLATIONS
            // =========================

            modalTitle.textContent =
              window.translations[
                titleKey
              ] || "";

            modalJob.textContent = 
              window.translations[
                jobKey
              ]|| "";

            modalDescription.value =
              window.translations[
                descriptionKey
              ] || "";

            modalStackJob.textContent = 
              window.translations[
                stackJobKey
              ]|| "";

            // =========================
            // OPEN MODAL
            // =========================

            modal.classList.add(
              "active"
            );

            document.body.style.overflow =
              "hidden";

            // =========================
            // MODAL ANIMATION
            // =========================

            if (
              typeof gsap !==
              "undefined"
            ) {

              gsap.fromTo(
                ".modal-content",
                {
                  y: 80,
                  opacity: 0,
                  scale: 0.9
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,

                  duration: 0.6,

                  ease:
                    "power4.out"

                }
              );

            }

          }
        );

      }
    );

    // =========================
    // CLOSE MODAL
    // =========================

    function closePortfolioModal() {

      modal.classList.remove(
        "active"
      );

      document.body.style.overflow =
        "auto";

    }

    closeModal.addEventListener(
      "click",
      closePortfolioModal
    );

    modal.addEventListener(
      "click",
      e => {

        if (e.target === modal) {

          closePortfolioModal();

        }

      }
    );

    document.addEventListener(
      "keydown",
      e => {

        if (
          e.key === "Escape" &&
          modal.classList.contains(
            "active"
          )
        ) {

          closePortfolioModal();

        }

      }
    );

  }
);

// =========================
// PORTFOLIO CAROUSEL
// =========================

const carousel =
  document.querySelector(
    ".portfolio-carousel"
  );

const nextBtn =
  document.querySelector(
    ".next-btn"
  );

const prevBtn =
  document.querySelector(
    ".prev-btn"
  );

if (
  carousel &&
  nextBtn &&
  prevBtn
) {

  nextBtn.addEventListener(
    "click",
    () => {

      carousel.scrollBy({

        left: 450,

        behavior: "smooth"

      });

    }
  );

  prevBtn.addEventListener(
    "click",
    () => {

      carousel.scrollBy({

        left: -450,

        behavior: "smooth"

      });

    }
  );

}