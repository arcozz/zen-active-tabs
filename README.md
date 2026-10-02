# Active Tabs Toggle

Mod [Sine](https://github.com/sineorg/sine) pour Zen Browser : un bouton dans la sidebar qui masque tous les onglets endormis (déchargés) et ne garde visibles que les onglets actifs. Les onglets masqués se replient avec une animation fluide, sans espace vide.

L'onglet sélectionné et les essentials restent toujours visibles.

## Installation

1. Dans Zen : **Paramètres → Sine Mods**.
2. Dans les réglages de Sine (engrenage sous le marketplace), active le téléchargement de JS depuis des sources non officielles.
3. Colle `github.com/TON-PSEUDO/zen-active-tabs` dans le champ d'installation GitHub.
4. Redémarre si demandé (ou `about:support` → *Clear startup cache*).

## Personnalisation

- `--azt-h` dans `chrome.css` : hauteur d'un onglet (40px par défaut). Ajuste-la à la valeur réelle pour une animation sans saut.
- Si un espace subsiste entre les onglets, remplace `margin-block: 0` par `margin-block-end: calc(-1 * var(--tab-gap, 2px))` dans la règle de repli.

## Mises à jour

Incrémenter `version` et `updatedAt` dans `theme.json` à chaque release.
