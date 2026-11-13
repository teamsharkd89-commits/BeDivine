import markSvg from '@/assets/logo-mark.svg?raw';

// BeDivine's mark, the same file the desktop app ships. It is a raster
// image now, so it stays white instead of following currentColor.
const markup = markSvg.replace(/width="\d+" height="\d+"/, 'width="100%" height="100%"');

export function LogoMark({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-flex', width: size, height: (size * 1418) / 831 }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
