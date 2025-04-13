const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    section.addEventListener("click", () => {
      // Close all other sections when one is opened
      sections.forEach(s => {
        if (s !== section) {
          s.classList.remove("open");
        }
      });
  
      // Toggle open on the clicked one
      section.classList.toggle("open");
    });
  });
