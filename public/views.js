setTimeout(function() {
  var els = document.querySelectorAll('[data-article-slug]');
  console.log('views.js: found', els.length, 'articles');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var slug = decodeURIComponent(el.getAttribute('data-article-slug'));
    fetch('https://api.counterapi.dev/v1/mediabuyertalk/' + slug + '/up')
      .then(function(r) { return r.json(); })
      .then(function(d) { el.textContent = '👁 ' + (d.value || 1) + ' 次阅读'; })
      .catch(function() { el.textContent = '👁 - 次阅读'; });
  }
}, 500);
