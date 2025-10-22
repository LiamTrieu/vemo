export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Flashcards
                  <span className="text-primary block">Thông Minh</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Như Anki, nhưng <span className="font-semibold text-primary">hiện đại hơn</span>. 
                  Học mọi kiến thức với spaced repetition - hoàn toàn miễn phí.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Spaced Repetition thông minh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Đồng bộ đa nền tảng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Giao diện hiện đại, dễ sử dụng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Miễn phí mãi mãi</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Bắt đầu học ngay
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors">
                  Khám phá tính năng
                </button>
              </div>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                {/* iPhone Mockup */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-900 rounded-[40px] p-4 shadow-2xl border-2 border-gray-800">
                    <div className="bg-black rounded-[32px] overflow-hidden border-2 border-gray-700">
                      {/* Notch */}
                      <div className="h-6 bg-black relative">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-full"></div>
                      </div>
                      
                      {/* Screen Content */}
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 h-96">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 h-full flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-2xl font-bold mb-2">Vemo</div>
                            <div className="text-sm opacity-90">Đang tải flashcards...</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="h-4 bg-black flex items-center justify-center">
                        <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">iOS</span>
                  </div>
                </div>

                {/* Android Mockup */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-primary/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-800 rounded-3xl p-3 shadow-2xl border-2 border-gray-700">
                    <div className="bg-black rounded-2xl overflow-hidden border border-gray-600">
                      {/* Camera Punch-hole */}
                      <div className="h-8 bg-black relative flex justify-center pt-2">
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                      </div>
                      
                      {/* Screen Content */}
                      <div className="bg-gradient-to-br from-green-400 to-primary p-4 h-96">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-full flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-xl font-bold mb-2">Vemo</div>
                            <div className="text-xs opacity-90">Chạm để tiếp tục</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Bar */}
                      <div className="h-6 bg-black flex items-center justify-center space-x-12 px-8">
                        <div className="w-6 h-1 bg-gray-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PWA Installation Guide */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cài đặt Vemo như App
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Biến Vemo thành ứng dụng native trên điện thoại của bạn chỉ với vài bước đơn giản
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* iOS Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">iOS</span>
                </div>
                <h3 className="text-2xl font-bold">Cho iPhone/iPad</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Mở Safari</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Truy cập vemoo.vercel.app trên Safari
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Chia sẻ</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Nhấn vào biểu tượng chia sẻ (□ với mũi tên ↑)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Thêm vào Màn hình chính</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Chọn &quot;Thêm vào Màn hình chính&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* GIF Placeholder */}
              <div className="mt-6 bg-gray-200 dark:bg-gray-700 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    GIF hướng dẫn cài đặt iOS
                  </p>
                </div>
              </div>
            </div>

            {/* Android Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <h3 className="text-2xl font-bold">Cho Android</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Mở Chrome</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Truy cập vemoo.vercel.app trên Chrome
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Menu cài đặt</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Nhấn vào menu (3 chấm) ở góc trên bên phải
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Cài đặt ứng dụng</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Chọn &quot;Cài đặt ứng dụng&quot; hoặc &quot;Thêm vào màn hình chính&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* GIF Placeholder */}
              <div className="mt-6 bg-gray-200 dark:bg-gray-700 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    GIF hướng dẫn cài đặt Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tại sao chọn Vemo?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tất cả sức mạnh của Anki, với trải nghiệm hiện đại và thân thiện
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Spaced Repetition",
                description: "Học đúng lúc bạn sắp quên, tối ưu hóa thời gian ghi nhớ"
              },
              {
                icon: "🎨",
                title: "Giao diện hiện đại",
                description: "Thiết kế tối giản, tập trung vào việc học không bị phân tâm"
              },
              {
                icon: "📱",
                title: "PWA mạnh mẽ",
                description: "Sử dụng như app native, hoạt động offline, đồng bộ đa thiết bị"
              },
              {
                icon: "🔄",
                title: "Đồng bộ đám mây",
                description: "Học mọi lúc, mọi nơi, trên mọi thiết bị của bạn"
              },
              {
                icon: "🔓",
                title: "Miễn phí mãi mãi",
                description: "Tất cả tính năng cao cấp đều miễn phí, không giới hạn"
              },
              {
                icon: "🌍",
                title: "Đa ngôn ngữ",
                description: "Hỗ trợ học mọi ngôn ngữ với phát âm tích hợp"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng học thông minh hơn?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Bắt đầu hành trình học tập của bạn với Vemo ngay hôm nay. Hoàn toàn miễn phí, không giới hạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Tạo bộ thẻ đầu tiên
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
              Khám phá thư viện
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}