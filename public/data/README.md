# Permanent Media Library

Files in this folder are bundled with the site, so they appear in the Media page
for every visitor (alongside anything imported into the browser's local storage).

## Structure

```
public/data/
  lessons/
    index.json        ← list of lesson JSON filenames (relative to this folder)
    my-lesson.json    ← Notebook-style JSON (same format as the import dialog)
    ...
  puzzles/
    index.json        ← list of puzzle JSON filenames (relative to this folder)
    diathriskeftiko.json
    ...
```

## How to add a new lesson

1. Drop the JSON file (the same format you would upload through the Media page)
   into `public/data/lessons/`.
2. Add its filename to `public/data/lessons/index.json`, e.g.:

```json
["my-lesson.json", "another-lesson.json"]
```

## How to add a new puzzle

1. Export a scenario from the GLB Matcher puzzle (the `↓ Export JSON` button)
   and save it into `public/data/puzzles/`.
2. Add its filename to `public/data/puzzles/index.json`, e.g.:

```json
["agora.json", "diathriskeftiko.json"]
```

Permanent items are marked **Bundled / Ενσωματωμένο** in the UI and cannot be
deleted from the browser — to remove them, delete the file and the entry in
`index.json` here.
