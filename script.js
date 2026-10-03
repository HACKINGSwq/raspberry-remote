function downloadApp(platform) {
  const names = { windows: 'RaspberryRemote-Setup-Windows.exe', mac: 'RaspberryRemote-macOS.dmg', linux: 'RaspberryRemote-x86_64.AppImage', android: 'Google Play Store wird geöffnet…', ios: 'App Store wird geöffnet…' };
  showToast(names[platform] || 'Download startet…');
}
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), duration);
}
