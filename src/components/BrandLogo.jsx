import { Link } from 'react-router'
import { assetUrl } from '../utils/assetUrl'

export default function BrandLogo({ size = 40, showWordmark = false, name = 'Michael Owusu' }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label={`${name} home`}>
      <img
        src={assetUrl('logo.svg')}
        alt=""
        width={size}
        height={size}
        className="block shrink-0 rounded-[0.65rem]"
      />
      {showWordmark ? (
        <span className="min-w-0">
          <span className="block font-display text-base font-extrabold leading-none tracking-tight text-ink">
            {name.split(' ')[0]}
          </span>
          <span className="mt-1 block text-[10px] font-semibold tracking-[0.18em] text-mist uppercase">
            Portfolio
          </span>
        </span>
      ) : null}
    </Link>
  )
}
