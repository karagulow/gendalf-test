function toggleAccordion(header) {
  let content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
