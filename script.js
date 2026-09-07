const copyCard = document.getElementById('copyIp');
const toast = document.getElementById('toast');

copyCard.addEventListener('click', async (e) => {
  e.preventDefault();
  const ip = 'proximasmp.su';
  try {
    await navigator.clipboard.writeText(ip);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = ip;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1400);
});

// Replace these two links later:
// document.getElementById('joinLink').href = 'YOUR_YOUTUBE_VIDEO';
// document.getElementById('discordLink').href = 'YOUR_DISCORD_INVITE';
