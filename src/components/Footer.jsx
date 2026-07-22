export default function Footer({ name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-canvas py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="font-medium text-ink">
          © {year} {name}
        </p>
        <a href="/#top" className="font-semibold text-accent hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
