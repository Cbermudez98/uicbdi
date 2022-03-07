'use strict';

window.onload = () => {

    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const snap = document.getElementById("snap");
    const photo = document.getElementById('photo')
    const errorMsgElement = document.querySelector('span#errorMsg');

    const video2 = document.getElementById('video2')
    const canvas2 = document.getElementById('canvas2')
    const snap2 = document.getElementById('snap2')
    const photo2 = document.getElementById('photo2')

    const constraints = {
        audio: false,
        video: {
            width: 245, height: 245
        }
    };

    // Access webcam
    async function init() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const stream2 = await navigator.mediaDevices.getUserMedia(constraints)
            handleSuccess(stream);
            handleSuccess2(stream2)
        } catch (e) {
            errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
        }
    }

    // Success
    function handleSuccess(stream) {
        window.stream = stream;
        video.srcObject = stream;
    }

    function handleSuccess2(stream) {
        window.stream = stream;
        video2.srcObject = stream;
    }

    // Load init
    init();

    // Draw image
    var context = canvas.getContext('2d');
    snap.addEventListener("click", function () {
        context.drawImage(video, 0, 0, 150, 150);
        let data = canvas.toDataURL('image/png')
        photo.setAttribute('src', data)
        canvas.remove()
    });

    var context2 = canvas2.getContext('2d');
    snap2.addEventListener("click", function () {
        context2.drawImage(video, 0, 0, 150, 150);
        let data = canvas2.toDataURL('image/png')
        photo2.setAttribute('src', data)
        canvas2.remove()
    });
}