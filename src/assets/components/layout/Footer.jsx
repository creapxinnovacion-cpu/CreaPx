function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 text-center">
      <p className="font-bold">
        © {new Date().getFullYear()} CREAPX · Negocios Inteligentes
      </p>

      <p className="text-sm opacity-80 mt-1">
        Automatización · Sistemas Web · Soporte Digital
      </p>
    </footer>
  )
}

export default Footer
