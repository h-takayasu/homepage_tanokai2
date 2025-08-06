const stories = {
  char1: {
    title: 'Side Takayasu',
    text: '隔離された街・東京で1人暮らすTakayasu。\
    \n「この辺りでおいしいお店を知りませんか？」\
    \n不意に話しかけられた彼は孤独感から怪しい男女についていってしまう…。\
    \n渋谷の雑踏に姿も声も搔き消されていく。',
    bg: 'linear-gradient(to right, #000000, #1a237e)' // ネイビーブルー
  },
  char2: {
    title: 'Side Hirahira',
    text: '「暗室で作業ができる能力」。\n\n \
    暗闇の中、作業を進めるHirahira。\n \
    奇妙なものが写り込んでいることに彼女は気づく。\n \
    「サンダーバード号 東京行き」\n \
    不可思議な車両の正体を確認するべく、彼女は駅へと向かった。',
    bg: 'linear-gradient(to right, #000000, #b71c1c)' // ダークレッド
  },
  char3: {
    title: 'Side Nako',
    text: '「本当のイントネーションを把握する能力」。\n\n \
    彼女は人知れずその能力で世の中に貢献していた。\n \
    「あなたの助けを借りたいんです」\n \
    勤務中の彼女に話しかけてきたのはある老夫婦だった。\n \
    押しに負けた彼女は社用車を東京へ向けて走らせた。',
    bg: 'linear-gradient(to right, #000000, #004d40)' // 深いグリーン
  },
  char4: {
    title: 'Side Tanemura',
    text: '「一定時間、体の速度を2倍にする能力」。\n\n \
    Tanemuraは東京から手話通訳の依頼を受けていた。\n \
    だが、突き付けられたのは交通費は出さないという条件と車の故障という現実。\n \
    「やれやれ…、しかたないな」\n \
    Tanemuraは東京に足を向け、走り始めた。',
    bg: 'linear-gradient(to right, #000000, #4a148c)' // パープル
  }
};

function showStory(key) {
  const story = stories[key];
  document.getElementById('char-title').textContent = story.title;
  document.getElementById('char-text').textContent = story.text;
  document.getElementById('char-story').style.background = story.bg;
}  
