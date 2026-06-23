# Axion Studio

React + Vite + TypeScript + Tailwind CSS landing page.

## Setup

This sandbox has no internet access, so dependencies could not be installed
or build-verified here. On your machine, with internet access:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- The hero background uses the real `shaders` package (shaders.com, currently
  v2.5.x). Its actual API wraps effect components inside a single `<Shader>`
  canvas — components are layers blended top-to-bottom on the GPU, not
  separate full-screen elements. `src/components/ShaderBackground.tsx` is
  written to match that API; double check current prop names against
  https://shaders.com/docs/components if anything renders unexpectedly,
  since this is a fast-moving package.
- The live clock in the navbar and mobile menu updates every second and
  shows the current time in the `Europe/London` timezone.
- Two case-study videos are streamed directly from the CDN URLs given in the
  spec — swap `NARRATIV_VIDEO` / `LUMINAR_VIDEO` in
  `src/components/CaseStudies.tsx` if you'd rather self-host them.
