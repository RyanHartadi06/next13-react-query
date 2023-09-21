export default function Detail() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-dark`}
    >
      <div className="w-full">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-row-reverse items-stretch justify-between md:justify-start md:flex-col">
            <a href="#" target="_blank">
              <div className="w-32 h-20 overflow-hidden transition md:w-full md:h-52 bg-slate-500 rounded-xl hover:opacity-50"></div>
            </a>
            <div className="mr-2">
              <a
                href="#"
                target="_blank"
                className="mt-2 overflow-hidden text-sm font-semibold transition md:text-lg hover:text-blue-500 line-clamp-2"
              >
                THIS IS NEW
              </a>
              <p className="text-xs md:text-base text-slate-400">Hello World</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
