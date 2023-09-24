// auto-link.js

var internalLinks = {
  "guru": "/2023/07/pengertian-guru.html",
  "pendidikan": "/2023/05/pengertian-pendidikan.html",
  // tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan
};

document.addEventListener("DOMContentLoaded", function() {
  var articleContent = document.getElementById("post_body");
  if (articleContent) {
    for (var keyword in internalLinks) {
      if (internalLinks.hasOwnProperty(keyword)) {
        var regex = new RegExp("\\b" + keyword + "\\b", "g");
        articleContent.innerHTML = articleContent.innerHTML.replace(regex, '<a href="' + internalLinks[keyword] + '">' + keyword + '</a>');
      }
    }
  }
});
