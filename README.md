# firefox-tab-discard-startup

<div align="center">

[![Stars](https://img.shields.io/github/stars/nnyj/firefox-tab-discard-startup?style=for-the-badge&labelColor=555&color=e3b341)](https://github.com/nnyj/firefox-tab-discard-startup/stargazers)
[![Downloads](https://img.shields.io/github/downloads/nnyj/firefox-tab-discard-startup/total?style=for-the-badge&labelColor=555&color=2ea44f)](https://github.com/nnyj/firefox-tab-discard-startup/releases)
[![Latest Release](https://img.shields.io/github/v/release/nnyj/firefox-tab-discard-startup?style=for-the-badge&label=Latest%20Release&labelColor=555&color=3572d6)](https://github.com/nnyj/firefox-tab-discard-startup/releases/latest)

</div>

Firefox extension that discards pinned tabs on browser startup, so tab sidebar extensions like [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/) and [Sidebery](https://addons.mozilla.org/en-US/firefox/addon/sidebery/) show them in the unloaded (dimmed) state instead of appearing loaded.

## Why

Firefox restores pinned tabs as loaded on startup, even with `browser.sessionstore.restore_pinned_tabs_on_demand` set to `true`. Long-standing open Bugzilla issues:

- [Bug 1466440](https://bugzilla.mozilla.org/show_bug.cgi?id=1466440): restore on demand not honored for pinned tabs (open since 2018)
- [Bug 1853047](https://bugzilla.mozilla.org/show_bug.cgi?id=1853047): unloaded pinned tabs still spawn a process despite `restore_pinned_tabs_on_demand` (open since 2023)

Also tracked from the sidebar side in [Sidebery #1381](https://github.com/mbnuqw/sidebery/issues/1381).

## How it works

On `runtime.onStartup`, the extension queries all pinned tabs and calls `tabs.discard()` on each one except the currently active tab. This restores the dimmed unloaded look in TST/Sidebery and frees their memory until visited.

## Install

Download the signed `.xpi` from the [latest release](https://github.com/nnyj/firefox-tab-discard-startup/releases/latest) and open it in Firefox (or drag it into a Firefox window), then confirm the install prompt.

The extension is signed by Mozilla through the unlisted (self-distribution) channel, so it installs on release Firefox without changing any settings.
