function updateClock() {
  const hourEl = document.getElementById('hour');
  const minuteEl = document.getElementById('minute');
  const secondEl = document.getElementById('second');
  const tzEl = document.getElementById('timezone');

  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hourDeg = (h % 12) * 30 + m * 0.5;
  const minuteDeg = m * 6 + s * 0.1;
  const secondDeg = s * 6;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

  // Timezone info
  const tzString = Intl.DateTimeFormat().resolvedOptions().timeZone;
  tzEl.innerHTML = `🕓 Time Zone: <strong>${tzString}</strong><br>${now.toLocaleTimeString()}`;
}

setInterval(updateClock, 1000);
updateClock();
