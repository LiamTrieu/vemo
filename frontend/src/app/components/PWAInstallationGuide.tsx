import Card from "./Card";
import iosFrame from "@/assets/iosFrame.png";
import androidFrame from "@/assets/androidFrame.png";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

export default function PWAInstallationGuide() {
    return (
        <section className="py-16">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold pb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Cài đặt Vemo như App
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Biến Vemo thành ứng dụng trên điện thoại của bạn chỉ với
                        vài bước đơn giản
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* iOS Guide */}
                    <Card>
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-white font-bold">
                                    <svg
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold bg">
                                Cho iPhone/iPad
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold">Mở Safari</h4>
                                    <p className="text-sm">
                                        Truy cập{" "}
                                        <b className="text-primary">
                                            vemoo.vercel.app
                                        </b>{" "}
                                        trên Safari
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold">Chia sẻ</h4>
                                    <div className="text-sm flex items-center">
                                        <p>Nhấn vào biểu tượng chia sẻ</p>
                                        <svg
                                            className="text-primary"
                                            fill="currentColor"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 50 50"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z" />
                                            <path d="M24 7h2v21h-2z" />
                                            <path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Thêm vào Màn hình chính
                                    </h4>
                                    <p className="text-sm">
                                        Chọn{" "}
                                        <b className="text-primary">
                                            Thêm vào MH chính
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold">Xác nhận</h4>
                                    <p className="text-sm">
                                        Nhấn{" "}
                                        <b className="text-primary">Thêm</b> để hoàn tất
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="flex items-center justify-center relative">
                        <div className="relative h-[600px] w-[289px] overflow-hidden flex items-center justify-center px-[10px] py-[9px]">
                            <img
                                className="w-full h-full object-cover rounded-[37px]"
                                src="https://res.cloudinary.com/dioxktgsm/image/upload/v1761193178/ios_owd3lj.gif"
                                alt="PWA Installation Guide"
                            />

                            <Image
                                src={iosFrame}
                                alt="PWA Installation Guide"
                                className="absolute inset-0 w-full h-full pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Android Guide */}
                    <Card>
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-green-600 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-white font-bold">
                                    <svg
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024 1024"
                                    >
                                        <path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold">Cho Android</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold">Mở Chrome</h4>
                                    <p className="text-sm">
                                        Truy cập{" "}
                                        <b className="text-green-500">
                                            vemoo.vercel.app
                                        </b>{" "}
                                        trên Chrome
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold">Nhấn menu</h4>
                                    <p className="text-sm flex items-center">
                                        Mở menu ở góc phải trình duyệt <EllipsisVertical className="text-green-500" size={20}/>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Thêm vào Màn hình chính
                                    </h4>
                                    <p className="text-sm">
                                        Chọn{" "}
                                        <b className="text-green-500">
                                            Thêm vào Màn hình chính
                                        </b>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold">Cài đặt</h4>
                                    <p className="text-sm">
                                        Nhấn{" "}
                                        <b className="text-green-500">Cài đặt</b>{" "}
                                        để hoàn tất
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-primary to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                                    5
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Thêm vào Màn hình chính
                                    </h4>
                                    <p className="text-sm">
                                        Chọn{" "}
                                        <b className="text-green-500">
                                            Thêm vào Màn hình chính
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Android device frame */}
                    <div className="flex items-center justify-center relative">
                        <div className="relative h-[600px] w-[289px] overflow-hidden flex items-center justify-center px-[10px] py-[10px]">
                            <img
                                className="w-full h-full object-cover rounded-[35px]"
                                src="https://res.cloudinary.com/dioxktgsm/image/upload/v1761193178/ios_owd3lj.gif"
                                alt="PWA Installation Guide"
                            />

                            <Image
                                src={androidFrame}
                                alt="PWA Installation Guide"
                                className="absolute inset-0 w-full h-full pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
