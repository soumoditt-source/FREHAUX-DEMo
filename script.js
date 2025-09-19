const video = document.getElementById('camera');
const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Camera not accessible:", err);
  });

function drawOverlay() {
  overlay.width = video.videoWidth;
  overlay.height = video.videoHeight;

  ctx.clearRect(0, 0, overlay.width, overlay.height);

  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.strokeRect(100, 50, 200, 200);

  requestAnimationFrame(drawOverlay);
}

video.addEventListener('playing', () => {
  drawOverlay();
});