(function() {
  var els = document.querySelectorAll('[data-article-slug]');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var slug = decodeURIComponent(el.getAttribute('data-article-slug'));
    var ns = 'mediabuyertalk';
    fetch('https://api.counterapi.dev/v1/' + ns + '/' + slug + '/up')
      .then(function(r) { return r.json(); })
      .then(function(d) { el.textContent = '👁 ' + (d.value || 1) + ' 次阅读'; })
      .catch(function() { el.textContent = '👁 - 次阅读'; });
  }
})();
