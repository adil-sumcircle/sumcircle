import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from 'shaders/react'

/**
 * Full-bleed animated shader background.
 *
 * `<Shader>` renders a single <canvas>; the components nested inside it are
 * layers evaluated top to bottom and blended together on the GPU. Swirl and
 * ChromaFlow generate the base pattern, then FlutedGlass and FilmGrain (with
 * no children of their own) apply as effects across everything beneath them.
 */
export default function ShaderBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
      <div className="absolute inset-0 bg-[#050505]" />
      <Shader className="absolute inset-0 h-full w-full">
        <Swirl colorA="#111" colorB="#1a1a1a" detail={1.7} />
        <ChromaFlow
          baseColor="#111"
          downColor="#931EE2"
          leftColor="#931EE2"
          rightColor="#931EE2"
          upColor="#931EE2"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={30}
          frequency={12}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  );
}
