// 浏览量计数器 - 使用 localStorage 模拟（单用户）+ 随机基数
(function() {
  document.querySelectorAll('[data-article-slug]').forEach(function(el) {
    var slug = el.dataset.articleSlug;
    var key = 'views_' + slug;
    var count = parseInt(localStorage.getItem(key) || '0');
    var base = parseInt(el.dataset.baseViews || '0');
    // 每次页面加载 +1
    if (!sessionStorage.getItem('v_' + slug)) {
      count++;
      localStorage.setItem(key, count);
      sessionStorage.setItem('v_' + slug, '1');
    }
    var total = base + count;
    el.textContent = '👁 ' + total + ' 次阅读';
  });
})();
