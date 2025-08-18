// Tailwind setup (kept to ensure identical look)
if (typeof tailwind !== "undefined") {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          Mincho: ["DFHSMincho-W5", "Ms mincho"],
        },
        colors: {
          "forest-green": "#4A7C59",
          "warm-gold": "#D4AF37",
          "soft-gray": "#6B7280",
          "light-gray": "#E5E7EB",
          "dark-brown": "#5D4037",
          "smooth-gray": "#969494",
          "nature-color": "#665B09",
        },
        gridTemplateColumns: {
          20: "repeat(20, minmax(0, 1fr))",
        },
      },
    },
  };
}

// Page loader reveal for index (no-ops on other pages)

// Scroll to top functionality
(() => {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (!scrollToTopBtn) return;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = "1";
    } else {
      scrollToTopBtn.style.opacity = "0";
    }
  });
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// Navbar fade near bottom (if elements exist)
(() => {
  const navbar1 = document.getElementById("navbar1");
  const navbar2 = document.getElementById("navbar2");
  if (!navbar1) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = fullHeight - (scrollTop + windowHeight);
    if (distanceFromBottom <= 540) {
      navbar1.style.opacity = "0";
      if (navbar2) navbar2.style.opacity = "0";
    } else {
      navbar1.style.opacity = "1";
      if (navbar2) navbar2.style.opacity = "100";
    }
  });
})();

// Mobile menu dropdown (if elements exist)
(() => {
  const menuBtn = document.getElementById("menu-btn");
  const dropdown = document.getElementById("dropdown");
  if (!menuBtn || !dropdown) return;
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
      dropdown.style.maxHeight = "0px";
      dropdown.offsetHeight; // reflow
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    } else {
      dropdown.style.maxHeight = "0px";
      setTimeout(() => {
        if (dropdown.style.maxHeight === "0px") {
          dropdown.classList.add("hidden");
        }
      }, 500);
    }
  });
})();
