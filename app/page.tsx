
const link = "#";

export default function Home() {
  return (
    <main className="aniOne flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black p-12">
      <header className="text-center py-6">
        <h1 className="text-2xl font-bold text-gray-100 dark:text-gray-100 tracking-tight">
          خدمات دفع الفواتير وإعادة التعبئة
        </h1>
        <p className="text-gray-300 text-sm mt-2">
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
            className="group rounded-2xl border border-gray-200 hover:text-gray-100 dark:border-zinc-700 bg-white hover:bg-white/50 dark:bg-zinc-900 p-4 shadow-sm hover:shadow-xl  hover:shadow-fuchsia-500/50  hover:scale-105 transition-all duration-200"
          >
            <h2 className="text-lg font-semibold  dark:text-gray-100 mb-2">
              {item.title}
            </h2>
            <p className="text-sm ">
              {item.desc}
            </p>
          </a>
        ))}
      </section>
      <footer className="mt-16 text-xs text-gray-400 dark:text-gray-600">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
          <div>© {new Date().getFullYear()}  جميع الحقوق محفوظة.</div>
          <div className="flex gap-3">
            <a href="/privacy" className="underline">سياسة الخصوصية</a>
            <a href="/terms" className="underline">الشروط والأحكام</a>
            <a href="/contact" className="underline">تواصل معنا</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
