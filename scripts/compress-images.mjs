import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

const targets = [
  'hackathon-flyer.png',
  'infographic-real-results.png',
  'team-photo.png',
  'hvac-ranking-table.png',
  'infographic-ai-decision.png',
  'infographic-shift-wins.png',
  'infographic-traffic-decision.png',
  'shark-ai-agents.png',
];

async function compress() {
  for (const file of targets) {
    const src = join(PUBLIC_DIR, file);
    try {
      const before = (await stat(src)).size;
      const tmp = src + '.tmp';
      await sharp(src)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tmp);
      const after = (await stat(tmp)).size;
      if (after < before) {
        const { rename } = await import('fs/promises');
        await rename(tmp, src);
        console.log(`${file}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (saved ${Math.round((before-after)/1024)}KB)`);
      } else {
        const { unlink } = await import('fs/promises');
        await unlink(tmp);
        console.log(`${file}: already optimal (${Math.round(before/1024)}KB)`);
      }
    } catch (e) {
      console.log(`${file}: skipped — ${e.message}`);
    }
  }
}

compress();
