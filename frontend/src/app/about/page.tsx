export default function HomePage() {
  return (
    <>
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-4">Chào mừng đến với Vemo 🎉</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Vemo là ứng dụng flashcards miễn phí giúp bạn ghi nhớ mọi thứ nhanh chóng
          với phương pháp Spaced Repetition như Anki.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-xl mb-2">📚 Dễ sử dụng</h3>
          <p>Tạo thẻ ghi nhớ chỉ trong vài giây và bắt đầu học ngay.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-xl mb-2">🧠 Ghi nhớ lâu dài</h3>
          <p>Áp dụng Spaced Repetition để bạn không bao giờ quên kiến thức.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-xl mb-2">📱 Học mọi lúc</h3>
          <p>Hoạt động tốt trên điện thoại, máy tính bảng và máy tính.</p>
        </div>
      </section>

      <section className="text-center py-10">
        <a
          href="/signup"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Bắt đầu ngay 🚀
        </a>
      </section>
    </>
  );
}
