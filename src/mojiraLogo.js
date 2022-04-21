for (var img of document.images) {
  if (img.src.includes("jira-logo-scaled.png")) { //"/s/6s5xqm/820006/16nkl1v/_/jira-logo-scaled.png"
    img.style.filter = "invert(0.5)";
  }
}
