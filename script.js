document.addEventListener("DOMContentLoaded", () => {
  const sectionIds = [
    "about",
    "technologies",
    "writeups",
    "certificates",
    "projects",
    "contact",
  ];

  const toggleSection = (linkId, sectionId) => {
    const link = document.getElementById(linkId);
    const section = document.getElementById(sectionId);

    if (!link || !section) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Már aktív? Akkor nem csinálunk semmit
      if (section.classList.contains("active")) return;

      sectionIds.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec) {
          sec.classList.remove("active");
          sec.classList.add("hidden");
        }
      });

      section.classList.remove("hidden");
      section.classList.add("active");
    });
  };

  toggleSection("about-toggle-link", "about");
  toggleSection("technologies-toggle-link", "technologies");
  toggleSection("writeups-toggle-link", "writeups");
  toggleSection("certificates-toggle-link", "certificates");
  toggleSection("projects-toggle-link", "projects");
  toggleSection("contact-toggle-link", "contact");
});
