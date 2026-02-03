const { spawnSync } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");
const ffmpeg = require("ffmpeg-static");

const projectRoot = path.resolve(__dirname, "..");
const mediaDir = path.join(projectRoot, "public", "media");
const input = path.join(mediaDir, "bear-hero-source.mp4");
const SOURCE_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NUHERO%284%29-2MDVgIK7cLO5QXnYNLyVp4lUGGTy7t.mp4";

if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

if (!fs.existsSync(input)) {
  console.log("Downloading original source video...");
  const download = spawnSync("curl", ["-L", "-o", input, SOURCE_URL], {
    stdio: "inherit",
  });
  if (download.status !== 0) {
    console.error("Failed to download source video");
    process.exit(download.status ?? 1);
  }
}

const run = (args, label) => {
  console.log(`\n[ffmpeg] ${label}`);
  const result = spawnSync(ffmpeg, args, { stdio: "inherit" });
  if (result.status !== 0) {
    console.error(`ffmpeg failed for ${label}`);
    process.exit(result.status ?? 1);
  }
};

const h265Output = path.join(mediaDir, "bear-hero-h265.mp4");
const webmOutput = path.join(mediaDir, "bear-hero-vp9.webm");
const posterOutput = path.join(mediaDir, "bear-hero-poster.jpg");

run(
  [
    "-y",
    "-i",
    input,
    "-c:v",
    "libx265",
    "-preset",
    "medium",
    "-crf",
    "32",
    "-x265-params",
    "aq-mode=3",
    "-tag:v",
    "hvc1",
    "-c:a",
    "aac",
    "-b:a",
    "80k",
    h265Output,
  ],
  "Exporting HEVC MP4",
);

run(
  [
    "-y",
    "-i",
    input,
    "-c:v",
    "libvpx-vp9",
    "-b:v",
    "0",
    "-crf",
    "42",
    "-row-mt",
    "1",
    "-deadline",
    "good",
    "-c:a",
    "libopus",
    "-b:a",
    "80k",
    webmOutput,
  ],
  "Exporting VP9 WebM",
);

run(
  ["-y", "-i", input, "-ss", "00:00:01", "-vframes", "1", posterOutput],
  "Capturing poster frame",
);

console.log("\nVideo assets updated:");
for (const file of [h265Output, webmOutput, posterOutput]) {
  const bytes = fs.statSync(file).size;
  const kb = (bytes / 1024).toFixed(1);
  console.log(`• ${path.relative(projectRoot, file)} — ${kb} KB`);
}
