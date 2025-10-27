import Card from "../components/Card";
import Image from "next/image";
import englishWords1 from "@/assets/english-words-1.webp";
import englishWords2 from "@/assets/english-words-2.jpg";
import englishWords3 from "@/assets/english-words-3.jpg";
import englishWords4 from "@/assets/english-words-4.jpg";

const vocabularyCards = [
    {
        title: "3000 từ tiếng Anh thông dụng",
        description:
            "Học các từ cơ bản để nâng cao khả năng giao tiếp và đọc hiểu tiếng Anh.",
        image: englishWords1,
    },
    {
        title: "5000 từ nâng cao",
        description:
            "Mở rộng vốn từ vựng để nâng cao khả năng viết và đọc sách tiếng Anh.",
        image: englishWords2,
    },
    {
        title: "Idioms & Phrases",
        description:
            "Học thành ngữ và cụm từ thông dụng trong giao tiếp hàng ngày.",
        image: englishWords3,
    },
    {
        title: "Business English",
        description:
            "Từ vựng và mẫu câu tiếng Anh trong môi trường công sở.",
        image: englishWords4,
    },
];

export default function Start() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {vocabularyCards.map((card, index) => (
                <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <button className="px-4 py-2 bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl hover:bg-blue-700 transition">
                        Xem chi tiết
                    </button>
                </Card>
            ))}
        </div>
    );
}
