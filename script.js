 roles[idx];
  if (isDeleting) {
    charIdx--;
    slideText.textContent = current.substring(0, Math.max(charIdx, 0));
  } else {
    charIdx++;
    slideText.textContent = current.substring(0, charIdx);
  }
  if (!isDeleting && charIdx === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }
  if (isDeleting && charIdx === 0) {
    isDeleting = false;
    idx = (idx + 1) % roles.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 90);
}
setTimeout(typeEffect, 400);
