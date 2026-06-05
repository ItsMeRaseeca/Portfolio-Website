import VaporizeTextCycle, { Tag } from './VaporizeText';

/**
 * PixelLabel — section heading label with vapour-text animation.
 * The canvas needs an explicit height; `texts` is a single-item array
 * since each section has one label.
 */
export default function PixelLabel({ children }) {
  return (
    <div className="mb-6 h-10 w-56 select-none" aria-label={String(children)}>
      <VaporizeTextCycle
        texts={[String(children)]}
        font={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '13px',
          fontWeight: 400,
        }}
        color="rgb(167, 139, 250)"
        spread={4}
        density={6}
        animation={{ vaporizeDuration: 2.5, fadeInDuration: 1.2, waitDuration: 3 }}
        direction="left-to-right"
        alignment="left"
        tag={Tag.P}
      />
    </div>
  );
}

