import React from 'react';
import {
    Mountain,
    Plane,
    ClipboardCheck,
    Zap,
    CheckCircle2,
    Map,
    Globe,
    Briefcase
} from 'lucide-react';
import { Lesson, VocabItem, ExerciseItem, QuizQuestion } from './types';

// --- COMPONENTS FOR CONTENT ---
export const VocabTable: React.FC<{ items: VocabItem[], colorTheme: string }> = ({ items, colorTheme }) => (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left">
            <thead className={`text-xs uppercase bg-opacity-10 bg-${colorTheme}-500 text-${colorTheme}-800`}>
                <tr>
                    <th className="px-4 py-3 font-bold w-1/3">Từ vựng (Vocabulary)</th>
                    <th className="px-4 py-3 font-bold">Ý nghĩa (Meaning)</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, idx) => (
                    <tr key={idx} className="bg-white border-b hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                            <div className="font-bold text-gray-900 text-base">{item.word}</div>
                            <div className="text-gray-500 font-mono text-xs">{item.ipa}</div>
                        </td>
                        <td className="px-4 py-3 text-gray-700 leading-relaxed max-w-sm" dangerouslySetInnerHTML={{ __html: item.meaning }}></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const GrammarBox: React.FC<{ title: string, rule: React.ReactNode, examples: string[], color: string }> = ({ title, rule, examples, color }) => (
    <div className={`mb-6 rounded-2xl border-l-4 border-${color}-500 bg-white shadow-sm overflow-hidden`}>
        <div className={`bg-${color}-50 px-5 py-3 border-b border-${color}-100 flex items-center gap-3`}>
            <ClipboardCheck className={`w-5 h-5 text-${color}-600`} />
            <h4 className={`font-bold text-${color}-800 text-lg`}>{title}</h4>
        </div>
        <div className="p-5 space-y-4">
            <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl text-sm border border-gray-100">
                {rule}
            </div>
            {examples.length > 0 && (
                <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">🌟 Ví dụ minh họa:</div>
                    <ul className="space-y-2">
                        {examples.map((ex, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle2 className={`w-4 h-4 text-${color}-500 mt-0.5 shrink-0`} />
                                <span dangerouslySetInnerHTML={{ __html: ex }}></span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
);

export const ExerciseCard: React.FC<{ item: ExerciseItem, idx: number }> = ({ item, idx }) => (
    <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:border-indigo-300 transition-colors">
        <div className="flex gap-3">
            <div className="w-8 h-8 shrink-0 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold">
                {idx + 1}
            </div>
            <div className="space-y-3 w-full">
                <p className="font-medium text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.question }}></p>
                <details className="group">
                    <summary className="mt-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-emerald-100 transition-colors list-none flex items-center justify-between">
                        <span>Xem đáp án &amp; Giải thích</span>
                        <span className="text-xl group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-700 text-sm border-l-2 border-emerald-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                </details>
            </div>
        </div>
    </div>
);

// --- DATA CONTENT ---
const unit7Vocab: VocabItem[] = [
    { word: "explore", ipa: "/ɪkˈsplɔːr/", meaning: "Khám phá" },
    { word: "landscape", ipa: "/ˈlændskeɪp/", meaning: "Phong cảnh" },
    { word: "diversity", ipa: "/daɪˈvɜːrsəti/", meaning: "Sự đa dạng" },
    { word: "permit", ipa: "/ˈpɜːrmɪt/", meaning: "Giấy phép" },
    { word: "paradise", ipa: "/ˈpærədaɪs/", meaning: "Thiên đường" },
    { word: "urgent", ipa: "/ˈɜːrdʒənt/", meaning: "Khẩn cấp" },
    { word: "ecosystem", ipa: "/ˈiːkoʊsɪstəm/", meaning: "Hệ sinh thái" },
];

const unit8Vocab: VocabItem[] = [
    { word: "destination", ipa: "/ˌdestɪˈneɪʃn/", meaning: "Điểm đến" },
    { word: "itinerary", ipa: "/aɪˈtɪnəreri/", meaning: "Lịch trình" },
    { word: "package holiday", ipa: "/ˈpækɪdʒ hɑːlədeɪ/", meaning: "Kỳ nghỉ trọn gói" },
    { word: "homestay", ipa: "/ˈhoʊmsteɪ/", meaning: "Lưu trú tại nhà dân" },
    { word: "domestic", ipa: "/dəˈmestɪk/", meaning: "Nội địa" },
    { word: "international", ipa: "/ˌɪntərˈnæʃnəl/", meaning: "Quốc tế" },
];

const unit9Vocab: VocabItem[] = [
    { word: "bilingual", ipa: "/baɪˈlɪŋɡwəl/", meaning: "Song ngữ" },
    { word: "fluent", ipa: "/ˈfluːənt/", meaning: "Trôi chảy" },
    { word: "official language", ipa: "/əˈfɪʃl ˈlæŋɡwɪdʒ/", meaning: "Ngôn ngữ chính thức" },
    { word: "translate", ipa: "/trænzˈleɪt/", meaning: "Dịch" },
    { word: "pick up", ipa: "/pɪk ʌp/", meaning: "Học lỏm" },
    { word: "concentric", ipa: "/kənˈsentrɪk/", meaning: "Đồng tâm" },
];

const unit10Vocab: VocabItem[] = [
    { word: "nature reserve", ipa: "/ˈneɪtʃər rɪˈzɜːrv/", meaning: "Khu bảo tồn thiên nhiên" },
    { word: "ecological balance", ipa: "/ˌiːkəˈlɑːdʒɪkl ˈbæləns/", meaning: "Cân bằng sinh thái" },
    { word: "habitat loss", ipa: "/ˈhæbɪtæt lɔːs/", meaning: "Mất môi trường sống" },
    { word: "grassland", ipa: "/ˈɡræslænd/", meaning: "Đồng cỏ" },
];

const unit11Vocab: VocabItem[] = [
    { word: "3D printer", ipa: "/ˈθriː diː pɹɪn.tə/", meaning: "Máy in 3D" },
    { word: "camcorder", ipa: "/ˈkæmˌkɔːɹ.də/", meaning: "Máy quay phim" },
    { word: "smartwatch", ipa: "/ˈsmɑːtˌwɒtʃ/", meaning: "Đồng hồ thông minh" },
    { word: "e-reader", ipa: "/ˈiːˌɹiː.də/", meaning: "Máy đọc sách" },
    { word: "copper", ipa: "/ˈkɒp.ə/", meaning: "Đồng (kim loại)" },
    { word: "rubber", ipa: "/ˈɹʌb.ə/", meaning: "Cao su" },
];

const unit12Vocab: VocabItem[] = [
    { word: "tailor", ipa: "/ˈteɪlə(r)/", meaning: "Thợ may" },
    { word: "surgeon", ipa: "/ˈsɜːdʒən/", meaning: "Bác sĩ phẫu thuật" },
    { word: "assembly worker", ipa: "/əˈsembli ˈwɜːkə(r)/", meaning: "Công nhân lắp ráp" },
    { word: "cashier", ipa: "/kæˈʃɪə(r)/", meaning: "Thu ngân" },
    { word: "demanding", ipa: "/dɪˈmɑːndɪŋ/", meaning: "Đòi hỏi khắt khe" },
    { word: "repetitive", ipa: "/rɪˈpetətɪv/", meaning: "Lặp đi lặp lại" },
    { word: "well-paid", ipa: "/ˌwel ˈpeɪd/", meaning: "Lương cao" },
];

export const allLessons: Lesson[] = [
    {
        id: 1,
        unit: 7,
        title: "Unit 7: Natural wonders of the world",
        icon: Mountain,
        color: "from-cyan-500 to-blue-500",
        content: (
            <div className="space-y-6">
                <VocabTable items={unit7Vocab} colorTheme="cyan" />
                <GrammarBox
                    title="Reported speech: Yes/No questions"
                    rule="Khi tường thuật câu hỏi Yes/No, ta dùng cấu trúc S + asked/wanted to know + if/whether + S + V (lùi thì)."
                    examples={[
                        "“Do you live in this village?” I asked the boy. → I asked the boy <b>if / whether he lived</b> in that village.",
                        "“When will you leave this village?” The man said to us. → The man asked us <b>when we would leave</b> that village."
                    ]}
                    color="cyan"
                />
            </div>
        )
    },
    {
        id: 2,
        unit: 8,
        title: "Unit 8: Tourism",
        icon: Plane,
        color: "from-amber-400 to-orange-500",
        content: (
            <div className="space-y-6">
                <VocabTable items={unit8Vocab} colorTheme="amber" />
                <GrammarBox
                    title="Relative Pronouns (Đại từ quan hệ)"
                    rule="Who thay thế cho người. Which thay thế cho vật. Whose chỉ sự sở hữu (của người hoặc vật)."
                    examples={[
                        "The student <b>who</b> got a scholarship wants to study cultural tourism.",
                        "He has learnt English on a website <b>which/that</b> I recommended to him two years ago."
                    ]}
                    color="amber"
                />
            </div>
        )
    },
    {
        id: 3,
        unit: 9,
        title: "Unit 9: World Englishes",
        icon: Globe,
        color: "from-violet-500 to-purple-500",
        content: (
            <div className="space-y-6">
                <VocabTable items={unit9Vocab} colorTheme="violet" />
                <GrammarBox
                    title="Defining relative clauses (Mệnh đề quan hệ xác định)"
                    rule="Cung cấp thông tin thiết yếu để xác định danh từ đang được nhắc đến. Có thể lược bỏ đại từ quan hệ nếu nó đóng vai trò là tân ngữ trong mệnh đề."
                    examples={[
                        "The teacher <b>who taught me my first words in English</b> is Mr Vinh.",
                        "The word 'fluent' describes someone <b>whose</b> language usage is at a proficient level."
                    ]}
                    color="violet"
                />
            </div>
        )
    },
    {
        id: 4,
        unit: 10,
        title: "Unit 10: Planet Earth",
        icon: Map,
        color: "from-emerald-500 to-teal-500",
        content: (
            <div className="space-y-6">
                <VocabTable items={unit10Vocab} colorTheme="emerald" />
                <GrammarBox
                    title="Non-defining relative clauses (MĐQH không xác định)"
                    rule="Bổ sung thêm thông tin cho danh từ, nếu bỏ đi câu vẫn có nghĩa. Luôn dùng dấu phẩy (,) và không được lược bỏ đại từ quan hệ."
                    examples={[
                        "Earth<b>, which is the third planet from the Sun,</b> depends much on the Sun for its energy.",
                        "Scientists use the Hubble Space Telescope<b>, which began orbiting Earth in 1990,</b> to observe planets."
                    ]}
                    color="emerald"
                />
            </div>
        )
    },
    {
        id: 5,
        unit: 11,
        title: "Unit 11: Electronic devices",
        icon: Zap,
        color: "from-indigo-500 to-blue-600",
        content: (
            <div className="space-y-6">
                <VocabTable items={unit11Vocab} colorTheme="indigo" />
                <GrammarBox
                    title="Suggest / Advise / Recommend"
                    rule="S + suggest / advise / recommend + V-ing. HOẶC S + suggest / advise / recommend + (that) + S + (should) + V(nguyên thể)."
                    examples={[
                        "My sister suggested <b>buying</b> a new laptop.",
                        "They recommended (that) he <b>(should) give up</b> writing.",
                        "Lisa suggested <b>watching</b> a documentary about technology."
                    ]}
                    color="indigo"
                />
            </div>
        )
    },
    {
        id: 6,
        unit: 12,
        title: "Unit 12: Career choices",
        icon: Briefcase,
        color: "from-rose-500 to-pink-500",
        content: (
            <div className="space-y-6">
                <VocabTable items={unit12Vocab} colorTheme="rose" />
                <GrammarBox
                    title="Adverbial clauses (Mệnh đề trạng ngữ)"
                    rule="Nhượng bộ: Although / Though (Mặc dù). Kết quả: so + adj + that (quá... đến nỗi mà). Nguyên nhân: Because / Since (Bởi vì)."
                    examples={[
                        "<b>Although</b> airline pilots are well-paid, their job is stressful.",
                        "Ann will be an excellent fashion designer <b>because</b> she has a good sense of style."
                    ]}
                    color="rose"
                />
            </div>
        )
    }
];

export const allQuizQuestions: QuizQuestion[] = [
    // LÍ THUYẾT + TỪ VỰNG A. VOCABULARY AND GRAMMAR
    { id: 1, question: "Mother Earth _____ us with air to breathe, water to drink and food to eat.", options: ["keeps", "protects", "provides", "produces"], correct: 2, explanation: "provides sb with sth = cung cấp cho ai cái gì.", unit: 10 },
    { id: 2, question: "_____ animals can cause ecological imbalances in Earth’s ecology.", options: ["Chasing", "Preserving", "Hunting", "Grazing"], correct: 2, explanation: "Hunting animals: săn bắt động vật.", unit: 10 },
    { id: 3, question: "To keep the ecologies on Earth in _____, we need to protect natural resources.", options: ["reserve", "balance", "good", "protection"], correct: 1, explanation: "in balance: trong trạng thái cân bằng.", unit: 10 },
    { id: 4, question: "One way to _____ people’s awareness of the need to protect our Earth is to follow the 3Rs.", options: ["rise", "preserve", "protect", "raise"], correct: 3, explanation: "raise awareness: nâng cao nhận thức. Rise (nội động từ, tự tăng), Raise (ngoại động từ, cần tân ngữ).", unit: 7 },
    { id: 5, question: "Many human activities cause _____, which is also called habitat destruction.", options: ["climate change", "habitat loss", "ecological balance", "global warming"], correct: 1, explanation: "habitat loss: mất môi trường sống (hiện tượng mất rừng).", unit: 10 },
    { id: 6, question: "Orange trees and cactuses are both flowering plants, _____ have seeds that grow flowers.", options: ["who", "which", "that", "what"], correct: 1, explanation: "Dùng 'which' sau dấu phẩy (Mệnh đề quan hệ không xác định).", unit: 10 },
    { id: 7, question: "A naturalist, _____ studies the natural world, often makes observations of the relationships between organisms.", options: ["that", "which", "who", "what"], correct: 2, explanation: "A naturalist (người nghiên cứu tự nhiên) -> dùng Who. Có dấu phẩy -> không dùng That.", unit: 8 },
    { id: 8, question: "Humans are cutting down too many trees on Earth, _____ lungs are jungles and forests.", options: ["whose", "which", "who", "that"], correct: 0, explanation: "Whose lungs: Lá phổi của nó (Trái đất). Sở hữu.", unit: 10 },
    { id: 9, question: "The cycle of seasons brings major changes, _____ requires animals to adapt.", options: ["whose", "that", "which", "who"], correct: 2, explanation: "Dùng which (phẩy which) để thay thế cho cả mệnh đề đằng trước.", unit: 10 },
    { id: 10, question: "Scientists use the Hubble Space Telescope, _____ began orbiting Earth in 1990, to observe planets.", options: ["whose", "that", "who", "which"], correct: 3, explanation: "Vật + có dấu phẩy -> dùng which.", unit: 10 },

    { id: 11, question: "We’re going camping this weekend, so we need a _____ stove that we can easily pack and transport.", options: ["changeable", "rechargeable", "portable", "transferable"], correct: 2, explanation: "portable: dễ mang theo, di động.", unit: 11 },
    { id: 12, question: "When humans use a natural habitat for farming and housing, they cause _____.", options: ["habitat loss", "climate change", "global warming", "ecological balance"], correct: 0, explanation: "habitat loss: mất môi trường sống.", unit: 10 },
    { id: 13, question: "It is very important ____________ over the words and grammatical points.", options: ["copy", "to copy", "go", "to go"], correct: 3, explanation: "It is adj + to V: rất quan trọng để làm gì.", unit: 9 },
    { id: 14, question: "The latest smartwatch is not only stylish but also ________, making it easy to carry everywhere.", options: ["interactive", "virtual", "portable", "heavy"], correct: 2, explanation: "portable: dễ mang theo.", unit: 11 },
    { id: 15, question: "Being __________ means you can speak two languages very well.", options: ["bilingual", "concentric", "established", "various"], correct: 0, explanation: "bilingual: song ngữ.", unit: 9 },
    { id: 16, question: "The __________ of the tour includes all the destinations we will visit.", options: ["cost", "agent", "itinerary", "entrance"], correct: 2, explanation: "itinerary: lịch trình.", unit: 8 },
    { id: 17, question: "The word 'fluent' describes someone __________ language usage is at a proficient level.", options: ["that", "which", "who", "whose"], correct: 3, explanation: "whose + Noun: của ai đó.", unit: 9 },
    { id: 18, question: "Trang __________ me whether I knew much about the Amazon Rainforest.", options: ["told", "said", "said to", "asked"], correct: 3, explanation: "asked sb whether = hỏi ai liệu rằng.", unit: 7 },
    { id: 19, question: "He suggested _____ that I follow his fitness regime.", options: ["me", "I", "for me", "to me"], correct: 3, explanation: "suggest to sb that: gợi ý cho ai rằng.", unit: 11 },
    { id: 20, question: "The optician has advised that I _____ contact lenses.", options: ["should wear", "would wear", "will wear", "must wear"], correct: 0, explanation: "advise that S + should + V.", unit: 11 },
    { id: 21, question: "The newspaper article advised against _____ too much meat.", options: ["to eating", "eating", "eat", "to eat"], correct: 1, explanation: "advise against + V-ing: khuyên không nên làm gì.", unit: 11 },

    // VOCAB CLOSEST/OPPOSITE MEANING
    { id: 22, question: "[CLOSEST] The castle has become a **ruinous** site, attracting tourists interested in history.", options: ["ancient", "damaged", "modern", "banned"], correct: 1, explanation: "ruinous = damaged/destroyed (bị phá hủy, thành tàn tích).", unit: 8 },
    { id: 23, question: "[CLOSEST] A **package holiday** is ideal for families who prefer a pre-arranged vacation.", options: ["group tour", "complete trip", "individual journey", "planned travel"], correct: 1, explanation: "package holiday (du lịch trọn gói) = complete trip.", unit: 8 },
    { id: 24, question: "[OPPOSITE] I felt a lot of **confidence** when speaking to the group.", options: ["certainty", "trust", "fear", "courage"], correct: 2, explanation: "Trái nghĩa của confidence (tự tự) là fear (sợ hãi/lo âu).", unit: 12 },
    { id: 25, question: "[OPPOSITE] I have left my pen at home so I have to **borrow** this one from Peter.", options: ["take", "sell", "lend", "buy"], correct: 2, explanation: "Trái nghĩa của borrow (mượn vào) là lend (cho mượn đi).", unit: 9 },

    // READING (CLOZE)
    { id: 26, question: "Schools use devices **______** laptops, tablets, and smartboards to improve teaching.", options: ["like", "love", "enjoy", "fancy"], correct: 0, explanation: "like: như là (liệt kê).", unit: 11 },
    { id: 27, question: "Students can work on group projects online, making **_______** easier.", options: ["contribution", "location", "collaboration", "promotion"], correct: 2, explanation: "collaboration: sự cộng tác.", unit: 11 },

    // REWRITE SENTENCES
    { id: 28, question: "Why don’t we watch a documentary about technology? → Lisa suggested ___________ a documentary about technology.", options: ["watching", "should watch", "to watch", "watch"], correct: 0, explanation: "suggest + Ving.", unit: 11 },
    { id: 29, question: "Airline pilots are well-paid, but their job is stressful. (Dùng Although)", options: ["Although their job is stressful, they are well-paid.", "Their job is stressful although well-paid pilots.", "Although airline pilots are well-paid, their job is stressful.", "Airline pilots are well-paid although their job is stressful."], correct: 2, explanation: "Although + mệnh đề diễn đạt vế bị nhượng bộ.", unit: 12 },
    { id: 30, question: "The student got a scholarship. She wants to study cultural tourism (Dùng who).", options: ["The student she got a scholarship who wants to study cultural tourism.", "The student who got a scholarship wants to study cultural tourism.", "Who got a scholarship wants to study cultural tourism.", "She wants to study cultural tourism who got a scholarship."], correct: 1, explanation: "Mệnh đề quan hệ đặt ngay sau danh từ nó bổ nghĩa.", unit: 8 },
];
