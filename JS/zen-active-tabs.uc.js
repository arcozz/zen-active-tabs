// ==UserScript==
// @name        Zen Active Tabs Toggle
// @description Bouton dans la sidebar : n'afficher que les onglets chargés
// @include     main
// ==/UserScript==

(() => {
  const PREF = "zen.mod.active-tabs-only";
  const ATTR = "zen-active-only";
  const root = document.documentElement;

  const apply = (on) => {
    root.toggleAttribute(ATTR, on);
    btn?.toggleAttribute("checked", on);
    Services.prefs.setBoolPref(PREF, on);
  };

  const btn = document.createXULElement("toolbarbutton");
  btn.id = "zen-active-tabs-toggle";
  btn.className = "toolbarbutton-1 chromeclass-toolbar-additional";
  btn.setAttribute("tooltiptext", "Afficher uniquement les onglets actifs");
  btn.addEventListener("command", () => apply(!root.hasAttribute(ATTR)));

  const host =
    document.getElementById("zen-sidebar-bottom-buttons") ||
    document.getElementById("zen-sidebar-top-buttons");
  host?.prepend(btn);

  apply(Services.prefs.getBoolPref(PREF, false));
})();
