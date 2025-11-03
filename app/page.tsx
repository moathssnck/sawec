
const link = "https://xcsdt.com/";


export default function Home() {
  return (
    <main className="aniOne flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue-100 via-indigo-100 to-white dark:from-indigo-950 dark:via-purple-950 dark:to-black p-12">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-indigo-200 dark:text-indigo-100 tracking-tight">
          خدمات دفع الفواتير وإعادة التعبئة
        </h1>
        <p className="text-indigo-400 dark:text-indigo-300 text-sm mt-2">
          سهولة، سرعة، وأمان في كل عملية
        </p>
      </header>

      <section className="grid gap-6 mt-12 w-full max-w-5xl sm:grid-cols-2 lg:grid-cols-3 text-center">
        {[
          { title: "الدفع السريع", desc: "اشحن خطك بثوانٍ" },
          { title: "سداد الفواتير", desc: "ادفع فواتيرك بسهولة وأمان" },
          { title: "خدمات رقمية", desc: "اشترِ بطاقات وشحن عبر الإنترنت" },
        ].map((item, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-indigo-200 dark:border-indigo-800 
                       bg-white dark:bg-indigo-950 
                       hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
                       hover:text-white 
                       p-6 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2 group-hover:text-white">
              {item.title}
            </h2>
            <p className="text-sm text-indigo-700 dark:text-indigo-300 group-hover:text-indigo-100">
              {item.desc}
            </p>
          </a>
        ))}
      </section>

      <footer className="mt-16 text-xs text-indigo-600 dark:text-indigo-400">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
          <div>© {new Date().getFullYear()} جميع الحقوق محفوظة.</div>
          <div className="flex gap-3">
            <a href="/privacy" className="underline hover:text-purple-500">سياسة الخصوصية</a>
            <a href="/terms" className="underline hover:text-purple-500">الشروط والأحكام</a>
            <a href="/contact" className="underline hover:text-purple-500">تواصل معنا</a>
          </div>
        </div>
      </footer>
    </main>
  );
}


