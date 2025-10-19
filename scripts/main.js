const countdown = document.getElementById('countdown');
const targetDate = new Date(2025, 9, 26, 5, 0, 0, 0);

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    countdown.textContent = "Stage Flight 3 is Starting!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 🔥 update immediately
updateCountdown();

// then every second
const timer = setInterval(updateCountdown, 1000);
