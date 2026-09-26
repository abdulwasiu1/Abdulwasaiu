# KSA Coordinate Explorer

Saudi Arabia, through reference frames — **V3 Offline**.

Author: Abdulwasa Salawu B.Eng, MSc, MBA, DevOps Bootcamp Student.  
Technical Advisor UNDP-GEOSA.

## Open the application

Download or clone this repository, extract it if downloaded as a ZIP, and double-click **index.html**. A modern browser is sufficient. Codex, internet, a server, API keys and installation are not required to run it.

The OpenStreetMap checkbox toggles the bundled regional background. The package includes motorway/trunk roads and city labels; close zoom has regional detail only. It does not contain the complete online street map. Optional reference links require internet.

![Application preview](docs/Preview.png)

## Features

- Supplied coordinate solution, published plate model and illustrative motion views.
- 210 station entries, search, map pan/zoom and station focus.
- Component values with source inputs and calculation explanations.
- Epoch controls, model comparison, synthetic event and playback.
- Offline map, coordinate grid, velocity vectors and magnified differences.
- CSV calculations and standalone SVG exports.
- Responsive layouts, keyboard controls and reduced-motion support.

## Project structure

```text
index.html                   Ready-to-open application
src/index.template.html      Layout and styles
src/explorer.js              Interaction and calculations
data/coordinates.json        Parsed station inputs and country geometry
data/offline-map.json        Embedded map display data
data/OSM_Regional_Extract.geojson  OSM subset with source IDs
scripts/build.cjs            Dependency-free source assembly/check
docs/                       Preview, validation and map licences
```

## Edit and rebuild

Edit the files in `src/` and the appropriate data files. With Node.js 18 or later, run:

```sh
npm run build
npm run check
```

No npm packages need installing. Node is only needed to rebuild, never to use the app. Commit the regenerated `index.html` alongside source changes so a checkout remains ready to open. Map JSON and GeoJSON are separate representations of the same supplied regional extract; replacing the map requires updating both consistently.

## Scientific scope

The supplied view compares the aligned 11 March 2026 IGS14 solution with a propagated 2017.0 reference. Default RY99 CSV differences are +26.71 mm East, −9.32 mm North and +5.19 mm ellipsoidal Up. They are calculated solution differences; one coordinate epoch does not establish a deformation trend. Component buttons explain the calculation and source files.

The published rotation model and synthetic deformation are labelled separately. SINEX reference uncertainty is not the uncertainty of the new coordinate difference. No orthometric-height conversion is performed. The Natural Earth boundary is cartographic. Demonstration only — not for survey or operational use.

## Data and licences

OSM regional data © OpenStreetMap contributors, under ODbL 1.0. Its source subset, licence and attribution are included. Natural Earth outlines are public domain. See [map acknowledgements](docs/MAP_LICENCE.txt) and [ODbL](docs/ODbL-1.0.txt). Original geodetic source files are excluded from this repository; local copies may be kept in the ignored `data/Source_Data/` folder. Parsed coordinate inputs remain embedded in the public application and `data/coordinates.json`. The OSM licence does not relicense geodetic inputs. No open-source software licence has been assigned to this project.

## Validation

See [browser validation](docs/VALIDATION.txt). V3 was tested directly from local files with internet disabled, including calculations, map toggling, exports and 21 responsive states. Repository preparation adds a reproducible source-to-HTML check; application behaviour is unchanged from V3.

Release data snapshot: 16 September 2026. Git project prepared: 26 September 2026.
