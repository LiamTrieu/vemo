import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops 😅 Trang bạn tìm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
