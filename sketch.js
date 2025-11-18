let spriteImg;
const SRC_W = 56; // source sprite frame width
const SRC_H = 78; // source sprite frame height
let FRAMES = 0;
const DISPLAY_W = 56;
const DISPLAY_H = 78;
function preload() {
  spriteImg = loadImage('角色/全部.png');
}

let frameIndex = 0;
let lastFrameTime = 0;
const FRAME_DURATION = 50; // ms per frame (~10 FPS)

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  // 計算 sprite sheet 中的幀數 (全部.png 寬度為 849, 每幀 56)
  FRAMES = Math.max(1, Math.floor(spriteImg.width / SRC_W));
  lastFrameTime = millis();
}

function draw() {
  background('#9cfc97');

  // advance frame when enough time passed (simple frame-by-frame playback)
  if (millis() - lastFrameTime > FRAME_DURATION) {
    frameIndex = (frameIndex + 1) % FRAMES;
    lastFrameTime = millis();
  }

  // source x in the sprite sheet (frames laid out horizontally)
  const sx = frameIndex * SRC_W;
  const sy = 0;

  // draw current frame centered on canvas at display size
  noTint();
  image(spriteImg, width / 2, height / 2, DISPLAY_W, DISPLAY_H, sx, sy, SRC_W, SRC_H);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
