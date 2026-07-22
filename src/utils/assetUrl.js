/** Prefix public asset paths with the Vite base (needed for GitHub Pages). */
export function assetUrl(path = '') {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(path).replace(/^\//, '')}`
}
