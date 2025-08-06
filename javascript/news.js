document.addEventListener('DOMContentLoaded', () => {
  const newsData = [
    ['2020/5/18', 'たの会LINE発足'],
    ['2020/5/22', 'たの会オンライン第1回開催'],
    ['2020/12/20', 'たの会の塔～ひらひら旅立ちの章～'],
    ['2021/4/3', '学校法人なこ学園で桜を見る会'],
    ['2021/7/10', 'それいゆインスタライブにたの会出張'],
    ['2021/10/3', 'たの会グランピング（仮）'],
    ['2022/6/18', 'たの会ラグジュアリー'],
    ['2022/10/30', 'たの会敦賀レインボー'],
    ['2023/3/11', 'たの会ハジマル1日目'],
    ['2023/3/12', 'たの会ハジマル2日目'],
    ['2024/5/11', 'たの会ゴールド1日目'],
    ['2024/5/12', 'たの会ゴールド2日目'],
    ['2025/3/8', 'たの会バケーション1日目'],
    ['2025/3/9', 'たの会バケーション2日目'],
    ['2025/6/14', 'たの会スペシャルバタフライ～竹村の章～'],
    ['2025/xx/xx', 'そして、未来へ…']
  ];

  const newsList = document.getElementById('news-list');

  newsData.forEach(([date, event]) => {
    const entry = document.createElement('div');
    entry.className = 'news-entry';
    entry.textContent = `${date}　${event}`;
    newsList.appendChild(entry);
  });

  // IntersectionObserverでアニメーション
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.news-entry').forEach(el => {
    observer.observe(el);
  });
});
