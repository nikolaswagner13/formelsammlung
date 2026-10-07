# Technische Formelsammlung

Statische Formelsammlungs-Webseite für GitHub Pages.

## Enthaltene Funktionen

- mathematische Formeln mit MathJax
- Suche über Titel, Kategorien, Formelzeichen und Erklärungen
- Kategorienfilter und Seitennavigation
- helles und dunkles Design
- aufklappbare Formelkarten
- Kopierfunktion für Formeln
- Druckansicht
- responsive Darstellung für Smartphone, Tablet und Desktop

## Dateien

- `index.html`: Seitenstruktur
- `styles.css`: Gestaltung und responsive Darstellung
- `script.js`: Suche, Filter, Theme, Druck und Kopieren
- `formeln.js`: sämtliche Formeldaten

## Upload zu GitHub

1. Repository `formelsammlung` öffnen.
2. `Add file` > `Upload files` auswählen.
3. `index.html`, `styles.css`, `script.js` und `formeln.js` hochladen.
4. Unten bei `Commit changes` eine Nachricht wie `Formelsammlung veröffentlichen` eingeben.
5. `Commit changes` anklicken.
6. Unter `Settings` > `Pages` prüfen:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
7. Nach wenigen Minuten aufrufen: `https://nikolaswagner13.github.io/formelsammlung/`

## Neue Formel ergänzen

In `formeln.js` einen vorhandenen Eintrag kopieren, hinter dem vorherigen Eintrag ein Komma setzen und Inhalte anpassen. Jede `id` muss eindeutig sein und sollte nur Kleinbuchstaben sowie Bindestriche enthalten.

Beispiel:

```javascript
{
  id: "beispiel-formel",
  title: "Beispielformel",
  category: "Mechanik",
  formula: "F=m\\cdot a",
  explanation: "Kurze Erklärung.",
  symbols: [
    ["F", "Kraft", "N"],
    ["m", "Masse", "kg"],
    ["a", "Beschleunigung", "m/s²"]
  ],
  tip: "Praktischer Hinweis.",
  source: "Quelle oder Herleitung",
  updated: "07.10.2026"
}
```

## Wichtiger Hinweis

Die Website ist trotz der sichtbaren Bezeichnung „Private technische Formelsammlung“ öffentlich erreichbar, solange GitHub Pages öffentlich betrieben wird. Keine vertraulichen Daten, Kennwörter oder internen Unternehmensinformationen veröffentlichen.
