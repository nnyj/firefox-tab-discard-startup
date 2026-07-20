# firefox-tab-discard-startup

<div align="center">

[![Stars](https://img.shields.io/github/stars/nnyj/firefox-tab-discard-startup?style=for-the-badge&labelColor=555&color=e3b341)](https://github.com/nnyj/firefox-tab-discard-startup/stargazers)
[![Downloads](https://img.shields.io/github/downloads/nnyj/firefox-tab-discard-startup/total?style=for-the-badge&labelColor=555&color=2ea44f)](https://github.com/nnyj/firefox-tab-discard-startup/releases)
[![Latest Release](https://img.shields.io/github/v/release/nnyj/firefox-tab-discard-startup?style=for-the-badge&label=Latest%20Release&labelColor=555&color=3572d6)](https://github.com/nnyj/firefox-tab-discard-startup/releases/latest)

</div>

Firefox extension that discards pinned tabs on browser startup, so [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/) shows them in the pending (dimmed) state instead of appearing loaded.

## How it works

On `runtime.onStartup`, the extension queries all pinned tabs and calls `tabs.discard()` on each one except the currently active tab. Firefox restores pinned tabs as loaded on startup by default, which makes TST render them as active even though they were never visited; discarding them restores the dimmed unloaded look and frees their memory.

## Install

Download the signed `.xpi` from the [latest release](https://github.com/nnyj/firefox-tab-discard-startup/releases/latest) and open it in Firefox (or drag it into a Firefox window), then confirm the install prompt.

The extension is signed by Mozilla through the unlisted (self-distribution) channel, so it installs on release Firefox without changing any settings.
