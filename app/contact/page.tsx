"use client"
import Head from "next/head";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const[status,setStatus]=useState('')
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    setStatus('sending')
    alert("تم ارسال ملاحظتك. سيقوم احد موظفينا بالتواصل معك")
    setStatus('ok')

  }

  return (
    <>
      <Head>
        <title>تواصل معنا</title>
        <meta name="description" content="صفحة تواصل معنا" />
      </Head>

      <main className="prose mx-auto p-6" dir="rtl">
        <h1>تواصل معنا</h1>
        <p>اكتب رسالتك وسنرد في أقرب وقت ممكن.</p>

        <form onSubmit={handleSubmit} className="max-w-lg">
          <label className="block mb-2">
            الاسم
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
              placeholder="الاسم الكامل"
            />
          </label>

          <label className="block mb-2">
            البريد الإلكتروني
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-2">
            الموضوع
            <input
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
              placeholder="عنوان الرسالة"
            />
          </label>

          <label className="block mb-2">
            الرسالة
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
              rows={6}
              placeholder="نص الرسالة"
            />
          </label>

          <div className="flex items-center gap-3 mt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-4 py-2 rounded bg-gray-800 text-white disabled:opacity-50"
            >
              إرسال
            </button>

            {status === "sending" && <span>جاري الإرسال...</span>}
            {status === "ok" && <span className="text-green-600">تم الإرسال بنجاح.</span>}
            {status === "error" && <span className="text-red-600">حدث خطأ. حاول لاحقاً.</span>}
          </div>
        </form>

        <section className="mt-8">
          <h2>معلومات إضافية</h2>
          <p>البريد للاتصال السريع: <a href="mailto:info@ssds.com">info@ssds.com</a></p>
          <p>الهاتف: <strong>55668888</strong></p>
        </section>
      </main>
    </>
  );
}
