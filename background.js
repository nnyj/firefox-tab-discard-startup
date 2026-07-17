browser.runtime.onStartup.addListener(async () => {
  await new Promise(r => setTimeout(r, 3000));
  const [active] = await browser.tabs.query({ active: true, currentWindow: true });
  const pinned = await browser.tabs.query({ pinned: true });
  for (const tab of pinned) {
    if (tab.id !== active?.id) {
      browser.tabs.discard(tab.id).catch(() => {});
    }
  }
});
