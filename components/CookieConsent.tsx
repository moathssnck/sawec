"use client"
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    const val = localStorage.getItem("cookie_consent");
    if (val === "yes") setAccepted(true);
  }, []);

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white dark:bg-zinc-900 border p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm">
          نستخدم الكوكيز لتحسين تجربتك ولأغراض إحصائية وإعلانية. باستخدامك للموقع توافق على استخدامنا للكوكيز.
        </p>
        <div className="flex gap-2">
          <a href="/privacy" className="underline text-sm">سياسة الخصوصية</a>
          <button
            onClick={() => {
              localStorage.setItem("cookie_consent", "yes");
              setAccepted(true);
            }}
            className="px-3 py-1 rounded bg-gray-800 text-white"
          >
            أوافق
          </button>
        </div>
      </div>
    </div>
  );
}
