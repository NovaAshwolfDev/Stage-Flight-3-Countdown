const scroller = new LetterScroller();
const targetDate = new Date("2025-10-26T05:00:00").getTime(); 
let timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    scroller.scrollFromTo(scroller.currentArray.join(''), "Stage Flight 3 is Starting!");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Build array of nonzero parts
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`); // always show seconds if everything else is 0

  const formatted = parts.join(' ');
  scroller.scrollFromTo(scroller.currentArray.join(''), formatted);
}
