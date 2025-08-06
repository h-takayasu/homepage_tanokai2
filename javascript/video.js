// サムネイルが複数になるため、querySelectorAllを使用して複数の要素を取得する
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    const image = new Image();
    image.src = thumbnail.src;

    // サムネイル画像が存在しない場合は非表示に
    image.onerror = () => {
        thumbnail.remove(); // サムネイル画像が存在しないので削除
        return;
    };

    // 動画ファイルもHEADリクエストで存在確認
    const videoUrl = thumbnail.dataset.videoSrc;
    fetch(videoUrl, { method: 'HEAD' })
        .then(res => {
            if (!res.ok) {
                thumbnail.remove(); // 動画ファイルが存在しない場合も削除
            }
        })
        .catch(() => {
            thumbnail.remove(); // ネットワークエラー時も削除
        });

    // 存在する場合はクリックイベントを設定
    thumbnail.addEventListener('click', function () {
        const videoSrc = this.getAttribute('data-video-src');
        const videoElement = document.getElementById('video');
        const viewer = document.getElementById('viewer');

        videoElement.setAttribute('src', videoSrc);
        viewer.classList.remove('hidden');
        viewer.classList.add('fade-in');

        videoElement.load();
        videoElement.play();
    });
});

// 閉じるボタンの処理
document.getElementById('closeBtn').addEventListener('click', function () {
    const viewer = document.getElementById('viewer');
    const videoElement = document.getElementById('video');

    viewer.classList.add('hidden');
    viewer.classList.remove('fade-in');

    videoElement.pause();
    videoElement.currentTime = 0;
});
