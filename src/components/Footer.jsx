export default function Footer({ name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-canvas py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt=""
            width={28}
            height={28}
            className="rounded-md"
          />
          <p className="font-medium text-ink">
            © {year} {name}
          </p>
        </div>
        <a href="/#top" className="font-semibold text-accent hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
