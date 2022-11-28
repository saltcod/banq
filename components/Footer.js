export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12">
      <div className="container py-4 mx-auto border border-l-0 border-r-0">Banq {year}</div>
    </footer>
  )
}
