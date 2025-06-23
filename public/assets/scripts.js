function toggleSection(event, id) {
    event.preventDefault();
  const sections = ["instagram", "facebook", "snapchat", "tiktok", "whatsapp", "viber", "telegram", "gmail", "mail"];

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section && sectionId === id) {
      section.style.display = 'block';
    } else if (section) {
      section.style.display = 'none';
    }
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}