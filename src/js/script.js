// *** ACCORDEON ***
document.querySelectorAll(".accordeon").forEach((accordeon) => {
  accordeon.querySelectorAll("details > summary").forEach((summary) => {
    summary.addEventListener("click", () => {
      const sectionCliquee = summary.closest("details");

      accordeon.querySelectorAll("details[open]").forEach((section) => {
        if (section !== sectionCliquee) {
          section.open = false;
        }
      });
    });
  });
});
