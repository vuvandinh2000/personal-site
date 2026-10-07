/**
 * "Campus tour" data: some well-known universities in Hà Nội.
 * Cut-offs are on the 30-point THPT exam scale (2025 season unless noted) and differ by programme
 * and subject combination. Tuition is per year. Everything changes yearly — re-check on each school's site.
 */
export type T = { en: string; vi: string };

export type Uni = {
  id: string;
  abbr: string;
  color: string;
  name: T;
  place: T;
  founded: number;
  knownFor: T;
  vibe: T;
  /** Cut-off range on the 30-point scale, or null when the school uses its own formula. */
  cutoff: [number, number] | null;
  cutoffText: T;
  tuition: T;
  methods: T;
  funFact: T;
  quiz: { q: T; options: T[]; answer: number; why: T };
  sources: { label: string; url: string }[];
};

export const unis: Uni[] = [
  {
    id: 'hust', abbr: 'HUST', color: '#b3262e', founded: 1956,
    name: { en: 'Hanoi University of Science and Technology', vi: 'Đại học Bách khoa Hà Nội' },
    place: { en: 'Hai Bà Trưng, Hà Nội', vi: 'Hai Bà Trưng, Hà Nội' },
    knownFor: { en: 'IT and computer science, data science and AI, automation, electronics, mechanical engineering, chemistry.', vi: 'CNTT, Khoa học máy tính, Khoa học dữ liệu và AI, Tự động hóa, Điện tử, Cơ khí, Hóa học.' },
    vibe: { en: '“Hard to get in, harder to get out.” Strict grading, strong tech and robotics clubs.', vi: '“Vào đã khó, ra còn khó hơn.” Chấm điểm nghiêm, câu lạc bộ công nghệ, robot rất mạnh.' },
    cutoff: [19, 29.39],
    cutoffText: { en: '19–29.39 (2025). Data Science & AI was highest; 2026 range: 20.06–29.54.', vi: '19–29,39 (2025). Cao nhất là Khoa học dữ liệu và AI; năm 2026: 20,06–29,54.' },
    tuition: { en: 'Standard 28–35M/year; special and English-taught programmes about 35–67M.', vi: 'Chương trình chuẩn 28–35 triệu/năm; chương trình đặc biệt, dạy bằng tiếng Anh khoảng 35–67 triệu.' },
    methods: { en: 'THPT exam, HUST’s own thinking-skills test (TSA), talent admission.', vi: 'Điểm thi THPT, bài thi đánh giá tư duy (TSA) của trường, xét tuyển tài năng.' },
    funFact: { en: 'Its famous library is named after Tạ Quang Bửu, a mathematician and former minister.', vi: 'Thư viện nổi tiếng của trường mang tên Tạ Quang Bửu, một nhà toán học, nguyên Bộ trưởng.' },
    quiz: {
      q: { en: 'Which programme had HUST’s highest cut-off in 2025?', vi: 'Ngành nào có điểm chuẩn cao nhất Bách khoa năm 2025?' },
      options: [{ en: 'Mechanical engineering', vi: 'Kỹ thuật cơ khí' }, { en: 'Data Science & AI', vi: 'Khoa học dữ liệu và AI' }, { en: 'Chemical engineering', vi: 'Kỹ thuật hóa học' }],
      answer: 1,
      why: { en: 'Data Science & AI hit 29.39 — nearly perfect. But HUST’s range starts at 19, so “Bách khoa” is not one score.', vi: 'Khoa học dữ liệu và AI lấy 29,39 — gần như tuyệt đối. Nhưng Bách khoa có ngành từ 19 điểm, nên “điểm Bách khoa” không phải một con số.' },
    },
    sources: [
      { label: 'ts.hust.edu.vn', url: 'https://ts.hust.edu.vn' },
      { label: 'VOV', url: 'https://vov.vn/xa-hoi/dai-hoc-bach-khoa-ha-noi-cong-bo-diem-chuan-cao-nhat-2954-diem-post1322476.vov' },
    ],
  },
  {
    id: 'ftu', abbr: 'FTU', color: '#a3195b', founded: 1960,
    name: { en: 'Foreign Trade University', vi: 'Trường Đại học Ngoại thương' },
    place: { en: 'Đống Đa, Hà Nội (also campuses in HCMC and Quảng Ninh)', vi: 'Đống Đa, Hà Nội (có cơ sở ở TP.HCM và Quảng Ninh)' },
    knownFor: { en: 'International economics and business, logistics, finance, business English and Japanese.', vi: 'Kinh tế đối ngoại, Kinh doanh quốc tế, Logistics, Tài chính, tiếng Anh và tiếng Nhật thương mại.' },
    vibe: { en: 'Dynamic and competitive, strong English, lots of clubs and big student events.', vi: 'Năng động, cạnh tranh, tiếng Anh tốt, rất nhiều câu lạc bộ và sự kiện lớn.' },
    cutoff: [24, 28.5],
    cutoffText: { en: 'About 24–28.5 (2025). Advanced International Economics was highest; in 2026 it rose to 29.7.', vi: 'Khoảng 24–28,5 (2025). Cao nhất là Kinh tế đối ngoại chương trình tiên tiến; năm 2026 lên 29,7.' },
    tuition: { en: 'Standard 25.5–27.5M/year; high-quality and advanced programmes 49–85M (2025–2026).', vi: 'Chương trình chuẩn 25,5–27,5 triệu/năm; chất lượng cao, tiên tiến 49–85 triệu (2025–2026).' },
    methods: { en: 'THPT exam, combined methods with IELTS/SAT, HSA/TSA in some combos, direct admission.', vi: 'Điểm thi THPT, xét kết hợp IELTS/SAT, HSA/TSA ở một số tổ hợp, tuyển thẳng.' },
    funFact: { en: 'Students and alumni simply call it “Ngoại thương”; its cut-offs are among the highest in economics.', vi: 'Sinh viên gọi tắt là “Ngoại thương”; điểm chuẩn thuộc nhóm cao nhất khối kinh tế.' },
    quiz: {
      q: { en: 'At FTU, how does an advanced programme’s tuition compare with the standard one?', vi: 'Ở Ngoại thương, học phí chương trình tiên tiến so với chương trình chuẩn thế nào?' },
      options: [{ en: 'About the same', vi: 'Gần bằng nhau' }, { en: 'Roughly 2–3 times higher', vi: 'Cao gấp khoảng 2–3 lần' }, { en: 'Cheaper', vi: 'Rẻ hơn' }],
      answer: 1,
      why: { en: 'Standard is about 26M/year, advanced up to 85M. Same school, very different bills — always check which programme.', vi: 'Chuẩn khoảng 26 triệu/năm, tiên tiến tới 85 triệu. Cùng một trường mà chi phí rất khác — luôn xem kỹ chương trình nào.' },
    },
    sources: [
      { label: 'ftu.edu.vn', url: 'https://ftu.edu.vn' },
      { label: 'Tuổi Trẻ', url: 'https://tuoitre.vn/truong-dai-hoc-ngoai-thuong-diem-chuan-cao-nhat-28-5-20250822173832094.htm' },
    ],
  },
  {
    id: 'dav', abbr: 'DAV', color: '#1d4f91', founded: 1959,
    name: { en: 'Diplomatic Academy of Vietnam', vi: 'Học viện Ngoại giao' },
    place: { en: 'Đống Đa, Hà Nội — next door to FTU', vi: 'Đống Đa, Hà Nội — ngay cạnh Ngoại thương' },
    knownFor: { en: 'International relations, international law, international communication, international business, English.', vi: 'Quan hệ quốc tế, Luật quốc tế, Truyền thông quốc tế, Kinh tế quốc tế, Ngôn ngữ Anh.' },
    vibe: { en: 'Polished, “diplomats in training”. Model UN, debate and press clubs are popular.', vi: 'Chỉn chu, “nhà ngoại giao tương lai”. Mô phỏng Liên Hợp Quốc, tranh biện, báo chí rất sôi nổi.' },
    cutoff: [24.87, 27.75],
    cutoffText: { en: '24.87–27.75 by THPT exam (2025). Other methods use certificates and convert scores.', vi: '24,87–27,75 theo điểm thi THPT (2025). Các phương thức khác dùng chứng chỉ và quy đổi điểm.' },
    tuition: { en: 'About 34–45M/year (2024–2025 figures; rises up to ~10% a year).', vi: 'Khoảng 34–45 triệu/năm (số liệu 2024–2025; mỗi năm có thể tăng tới khoảng 10%).' },
    methods: { en: 'Direct admission, transcript + international certificate, SAT/ACT/A-level/IB, THPT exam.', vi: 'Tuyển thẳng, học bạ kèm chứng chỉ quốc tế, SAT/ACT/A-level/IB, điểm thi THPT.' },
    funFact: { en: 'Many Vietnamese ambassadors and foreign-ministry spokespeople studied here.', vi: 'Nhiều đại sứ và người phát ngôn Bộ Ngoại giao từng học ở đây.' },
    quiz: {
      q: { en: 'Which ministry runs the Diplomatic Academy?', vi: 'Học viện Ngoại giao trực thuộc bộ nào?' },
      options: [{ en: 'Ministry of Education', vi: 'Bộ Giáo dục và Đào tạo' }, { en: 'Ministry of Foreign Affairs', vi: 'Bộ Ngoại giao' }, { en: 'Ministry of Industry and Trade', vi: 'Bộ Công Thương' }],
      answer: 1,
      why: { en: 'It belongs to the Ministry of Foreign Affairs — which is why its programmes lean so much toward diplomacy.', vi: 'Học viện thuộc Bộ Ngoại giao — vì vậy chương trình học thiên hẳn về đối ngoại.' },
    },
    sources: [
      { label: 'dav.edu.vn', url: 'https://dav.edu.vn' },
      { label: 'Tuyển sinh 247', url: 'https://diemthi.tuyensinh247.com/diem-chuan/hoc-vien-ngoai-giao-HQT.html' },
    ],
  },
  {
    id: 'neu', abbr: 'NEU', color: '#c26a12', founded: 1956,
    name: { en: 'National Economics University', vi: 'Đại học Kinh tế Quốc dân' },
    place: { en: 'Hai Bà Trưng, Hà Nội', vi: 'Hai Bà Trưng, Hà Nội' },
    knownFor: { en: 'Accounting and auditing, international economics, marketing, logistics, e-commerce, business.', vi: 'Kế toán, Kiểm toán, Kinh tế quốc tế, Marketing, Logistics, Thương mại điện tử, Quản trị kinh doanh.' },
    vibe: { en: 'Big, busy and practical, with a modern tower and countless clubs.', vi: 'Rộng, đông, thực tế, có tòa tháp hiện đại và vô số câu lạc bộ.' },
    cutoff: [23.5, 28.13],
    cutoffText: { en: 'About 23.5–28.13 (2025). In 2026: 24.05–28.84.', vi: 'Khoảng 23,5–28,13 (2025). Năm 2026: 24,05–28,84.' },
    tuition: { en: 'Standard 18–25M/year; advanced and English-taught 41–65M (2025–2026).', vi: 'Chương trình chuẩn 18–25 triệu/năm; tiên tiến, dạy bằng tiếng Anh 41–65 triệu (2025–2026).' },
    methods: { en: 'THPT exam, HSA/TSA tests, SAT/ACT, IELTS combined with exam scores.', vi: 'Điểm thi THPT, bài thi HSA/TSA, SAT/ACT, IELTS kết hợp điểm thi.' },
    funFact: { en: 'In 2023 it became a multi-school “Đại học” rather than a single “Trường”.', vi: 'Từ năm 2023 trường được nâng lên thành “Đại học” gồm nhiều trường thành viên.' },
    quiz: {
      q: { en: 'Besides the THPT exam, which test can you use to apply to NEU?', vi: 'Ngoài điểm thi THPT, em có thể dùng bài thi nào để xét vào Kinh tế Quốc dân?' },
      options: [{ en: 'HSA or TSA', vi: 'HSA hoặc TSA' }, { en: 'Only the school’s interview', vi: 'Chỉ phỏng vấn của trường' }, { en: 'None', vi: 'Không có' }],
      answer: 0,
      why: { en: 'Many top schools accept the VNU HSA or HUST TSA tests. One test can open several doors.', vi: 'Nhiều trường top nhận điểm HSA (ĐHQGHN) hoặc TSA (Bách khoa). Một bài thi có thể mở nhiều cánh cửa.' },
    },
    sources: [
      { label: 'neu.edu.vn', url: 'https://neu.edu.vn' },
      { label: 'VOV', url: 'https://vov.vn/xa-hoi/dai-hoc-kinh-te-quoc-dan-cong-bo-diem-chuan-cao-nhat-2884-post1322502.vov' },
    ],
  },
  {
    id: 'hmu', abbr: 'HMU', color: '#1f8a8a', founded: 1902,
    name: { en: 'Hanoi Medical University', vi: 'Trường Đại học Y Hà Nội' },
    place: { en: 'Đống Đa, Hà Nội (plus a Thanh Hóa campus)', vi: 'Đống Đa, Hà Nội (có phân hiệu Thanh Hóa)' },
    knownFor: { en: 'Medicine, dentistry, traditional medicine, preventive medicine, nursing, psychology.', vi: 'Y khoa, Răng – Hàm – Mặt, Y học cổ truyền, Y học dự phòng, Điều dưỡng, Tâm lý học.' },
    vibe: { en: 'Very intense: 6 years for medicine and lots of hospital time. Strong tradition of volunteer medical trips.', vi: 'Học rất nặng: 6 năm Y khoa và nhiều thời gian ở bệnh viện. Truyền thống đi khám chữa bệnh tình nguyện.' },
    cutoff: [17, 28.7],
    cutoffText: { en: '17–28.7 (2025). Medicine 28.13, Dentistry 27.34 (B00); Psychology was highest.', vi: '17–28,7 (2025). Y khoa 28,13, Răng – Hàm – Mặt 27,34 (B00); Tâm lý học cao nhất.' },
    tuition: { en: 'About 15–55M/year (2025–2026); medicine and dentistry are the highest.', vi: 'Khoảng 15–55 triệu/năm (2025–2026); Y khoa và Răng – Hàm – Mặt cao nhất.' },
    methods: { en: 'Mainly the THPT exam, plus direct admission.', vi: 'Chủ yếu điểm thi THPT và tuyển thẳng.' },
    funFact: { en: 'Founded in 1902 as the Indochina Medical School; its first director was Alexandre Yersin.', vi: 'Thành lập năm 1902 với tên Trường Y Đông Dương; hiệu trưởng đầu tiên là bác sĩ Alexandre Yersin.' },
    quiz: {
      q: { en: 'How many years is the general medicine degree?', vi: 'Học bác sĩ y khoa mất mấy năm?' },
      options: [{ en: '4 years', vi: '4 năm' }, { en: '5 years', vi: '5 năm' }, { en: '6 years', vi: '6 năm' }],
      answer: 2,
      why: { en: '6 years — then 12 months of supervised practice before a licence.', vi: '6 năm — rồi thêm 12 tháng thực hành mới được cấp giấy phép hành nghề.' },
    },
    sources: [
      { label: 'hmu.edu.vn', url: 'https://hmu.edu.vn' },
      { label: 'SGGP', url: 'https://www.sggp.org.vn/diem-chuan-dai-hoc-y-ha-noi-cao-nhat-287-post809695.html' },
    ],
  },
  {
    id: 'uet', abbr: 'UET', color: '#2f6fb3', founded: 2004,
    name: { en: 'VNU University of Engineering and Technology', vi: 'Trường Đại học Công nghệ – ĐHQGHN' },
    place: { en: 'Cầu Giấy, Hà Nội', vi: 'Cầu Giấy, Hà Nội' },
    knownFor: { en: 'IT, computer engineering, AI, robotics, automation, aerospace.', vi: 'CNTT, Kỹ thuật máy tính, Trí tuệ nhân tạo, Robot, Tự động hóa, Hàng không vũ trụ.' },
    vibe: { en: 'Small and very tech-focused; many students start research early.', vi: 'Nhỏ gọn, rất “công nghệ”; nhiều sinh viên nghiên cứu từ sớm.' },
    cutoff: [26.63, 28.19],
    cutoffText: { en: 'Main tech programmes 26.63–28.19 (2025); IT was highest. Some other programmes are lower.', vi: 'Các ngành công nghệ chính 26,63–28,19 (2025); CNTT cao nhất. Một số ngành khác thấp hơn.' },
    tuition: { en: 'About 34–40M/year (2025–2026).', vi: 'Khoảng 34–40 triệu/năm (2025–2026).' },
    methods: { en: 'THPT exam, VNU’s own competency test (HSA), certificates, direct admission.', vi: 'Điểm thi THPT, bài thi đánh giá năng lực HSA của ĐHQGHN, chứng chỉ, tuyển thẳng.' },
    funFact: { en: 'It is part of Vietnam National University, Hanoi, which is building a big new campus at Hòa Lạc.', vi: 'Trường thuộc Đại học Quốc gia Hà Nội, nơi đang xây khu đô thị đại học lớn ở Hòa Lạc.' },
    quiz: {
      q: { en: 'Which test is run by Vietnam National University, Hanoi?', vi: 'Bài thi nào do Đại học Quốc gia Hà Nội tổ chức?' },
      options: [{ en: 'HSA', vi: 'HSA' }, { en: 'TSA', vi: 'TSA' }, { en: 'IELTS', vi: 'IELTS' }],
      answer: 0,
      why: { en: 'HSA (150 points) is VNU’s test; TSA belongs to HUST; IELTS is an English certificate.', vi: 'HSA (150 điểm) là của ĐHQGHN; TSA là của Bách khoa; IELTS là chứng chỉ tiếng Anh.' },
    },
    sources: [
      { label: 'uet.vnu.edu.vn', url: 'https://uet.vnu.edu.vn' },
      { label: 'UET học phí 2025–2026', url: 'https://uet.vnu.edu.vn/wp-content/uploads/2025/10/Dinh-muc-hoc-phi-nam-hoc-2025-2026.pdf' },
    ],
  },
  {
    id: 'ulis', abbr: 'ULIS', color: '#8a4fbf', founded: 1955,
    name: { en: 'VNU University of Languages and International Studies', vi: 'Trường Đại học Ngoại ngữ – ĐHQGHN' },
    place: { en: 'Cầu Giấy, Hà Nội', vi: 'Cầu Giấy, Hà Nội' },
    knownFor: { en: 'English, Chinese, Japanese, Korean, French, German, Russian, Arabic — and language-teacher education.', vi: 'Tiếng Anh, Trung, Nhật, Hàn, Pháp, Đức, Nga, Ả Rập — và sư phạm ngoại ngữ.' },
    vibe: { en: 'Lively, international and creative, famous for culture festivals and language clubs.', vi: 'Sôi nổi, quốc tế, sáng tạo, nổi tiếng với các lễ hội văn hóa và câu lạc bộ ngôn ngữ.' },
    cutoff: [23.93, 30],
    cutoffText: { en: 'About 24–30 (2025): Japanese 23.93, Korean 24.69, English 26.85; English and Chinese teacher education hit 30.', vi: 'Khoảng 24–30 (2025): Tiếng Nhật 23,93, Tiếng Hàn 24,69, Tiếng Anh 26,85; Sư phạm tiếng Anh, tiếng Trung chạm 30.' },
    tuition: { en: 'About 38–42M/year for most language programmes; less-common languages are cheaper. Teacher-education students study free.', vi: 'Khoảng 38–42 triệu/năm cho đa số ngành ngôn ngữ; một số thứ tiếng ít phổ biến rẻ hơn. Sinh viên sư phạm được miễn học phí.' },
    methods: { en: 'THPT exam, exam + language certificate, HSA, direct admission.', vi: 'Điểm thi THPT, điểm thi kết hợp chứng chỉ ngoại ngữ, HSA, tuyển thẳng.' },
    funFact: { en: 'In 2025 two teacher-education programmes needed a perfect 30/30.', vi: 'Năm 2025 có hai ngành sư phạm ngoại ngữ lấy điểm tuyệt đối 30/30.' },
    quiz: {
      q: { en: 'What do language-teacher students get under Decree 116?', vi: 'Sinh viên sư phạm ngoại ngữ được hưởng gì theo Nghị định 116?' },
      options: [{ en: 'Nothing special', vi: 'Không có gì đặc biệt' }, { en: 'Free tuition plus 3.63M/month living support', vi: 'Miễn học phí và hỗ trợ 3,63 triệu/tháng' }, { en: 'A free trip abroad', vi: 'Một chuyến đi nước ngoài miễn phí' }],
      answer: 1,
      why: { en: 'Free tuition and living support — in exchange for working in education afterwards. That is also why cut-offs are so high.', vi: 'Miễn học phí và có tiền sinh hoạt — đổi lại phải làm trong ngành giáo dục. Đó cũng là lý do điểm chuẩn rất cao.' },
    },
    sources: [
      { label: 'ulis.vnu.edu.vn', url: 'https://ulis.vnu.edu.vn' },
      { label: 'JobsGO', url: 'https://jobsgo.vn/blog/hoc-phi-dai-hoc-quoc-gia-ha-noi/' },
    ],
  },
  {
    id: 'hnue', abbr: 'HNUE', color: '#1f6f5c', founded: 1951,
    name: { en: 'Hanoi National University of Education', vi: 'Trường Đại học Sư phạm Hà Nội' },
    place: { en: 'Cầu Giấy, Hà Nội', vi: 'Cầu Giấy, Hà Nội' },
    knownFor: { en: 'Teacher education in every subject; a famous specialised high school on campus.', vi: 'Sư phạm cho mọi môn học; trường THPT Chuyên Sư phạm nổi tiếng nằm ngay trong khuôn viên.' },
    vibe: { en: 'Friendly and idealistic — the “future teachers” culture. Art troupes and volunteering are strong.', vi: 'Thân thiện, nhiều lý tưởng — văn hóa “thầy cô tương lai”. Đội văn nghệ, tình nguyện rất mạnh.' },
    cutoff: [19, 29.06],
    cutoffText: { en: '19–29.06 (2025). History Education was highest; many teaching programmes were above 28.', vi: '19–29,06 (2025). Sư phạm Lịch sử cao nhất; nhiều ngành sư phạm trên 28.' },
    tuition: { en: 'Teacher-education programmes: free, plus 3.63M/month living support. Other programmes pay tuition.', vi: 'Ngành sư phạm: miễn học phí và hỗ trợ 3,63 triệu/tháng. Các ngành ngoài sư phạm đóng học phí.' },
    methods: { en: 'THPT exam, transcript, HSA, HNUE’s own competency test.', vi: 'Điểm thi THPT, học bạ, HSA, bài thi đánh giá năng lực riêng của trường.' },
    funFact: { en: 'It is often called the “cradle of teachers” of Vietnam.', vi: 'Trường hay được gọi là “cái nôi đào tạo giáo viên” của cả nước.' },
    quiz: {
      q: { en: 'If you take the Decree 116 support but then do not work in education, what happens?', vi: 'Nếu nhận hỗ trợ theo Nghị định 116 rồi không làm trong ngành giáo dục thì sao?' },
      options: [{ en: 'Nothing', vi: 'Không sao cả' }, { en: 'You must repay the support', vi: 'Phải hoàn trả tiền hỗ trợ' }, { en: 'You lose your degree', vi: 'Bị thu hồi bằng' }],
      answer: 1,
      why: { en: 'You repay it. Free study is a deal — choose teaching because you want it, not only because it is free.', vi: 'Phải hoàn trả. Học miễn phí là một cam kết — hãy chọn sư phạm vì em muốn dạy, không chỉ vì miễn phí.' },
    },
    sources: [
      { label: 'hnue.edu.vn', url: 'https://hnue.edu.vn' },
      { label: 'Đại biểu Nhân dân', url: 'https://daibieunhandan.vn/diem-chuan-nam-2025-cua-khoi-nganh-su-pham-cham-moc-tuyet-doi-30-30-10384426.html' },
    ],
  },
  {
    id: 'aof', abbr: 'AOF', color: '#2e7d4f', founded: 1963,
    name: { en: 'Academy of Finance', vi: 'Học viện Tài chính' },
    place: { en: 'Bắc Từ Liêm, Hà Nội', vi: 'Bắc Từ Liêm, Hà Nội' },
    knownFor: { en: 'Auditing, accounting, corporate finance, tax, insurance.', vi: 'Kiểm toán, Kế toán, Tài chính doanh nghiệp, Thuế, Bảo hiểm.' },
    vibe: { en: 'A hard-working “finance family” with strong finance and accounting competitions.', vi: '“Gia đình tài chính” chăm chỉ, nhiều cuộc thi tài chính – kế toán.' },
    cutoff: [21, 26.6],
    cutoffText: { en: '21–26.6 (2025). Auditing was highest.', vi: '21–26,6 (2025). Kiểm toán cao nhất.' },
    tuition: { en: 'Standard 20–28M/year; high-quality 50–55M (2025–2026).', vi: 'Chương trình chuẩn 20–28 triệu/năm; chất lượng cao 50–55 triệu (2025–2026).' },
    methods: { en: 'THPT exam, transcript, competency tests, certificates.', vi: 'Điểm thi THPT, học bạ, bài thi đánh giá năng lực, chứng chỉ.' },
    funFact: { en: 'Many graduates work in tax offices, the State Treasury and audit firms.', vi: 'Nhiều cựu sinh viên làm ở cơ quan thuế, Kho bạc Nhà nước và các hãng kiểm toán.' },
    quiz: {
      q: { en: 'Which ministry runs the Academy of Finance?', vi: 'Học viện Tài chính trực thuộc bộ nào?' },
      options: [{ en: 'Ministry of Finance', vi: 'Bộ Tài chính' }, { en: 'The State Bank', vi: 'Ngân hàng Nhà nước' }, { en: 'Ministry of Education', vi: 'Bộ Giáo dục và Đào tạo' }],
      answer: 0,
      why: { en: 'The Ministry of Finance — a good clue to where its graduates often work.', vi: 'Bộ Tài chính — cũng là gợi ý về nơi nhiều sinh viên ra trường sẽ làm việc.' },
    },
    sources: [
      { label: 'hvtc.edu.vn', url: 'https://hvtc.edu.vn' },
      { label: 'Đại biểu Nhân dân', url: 'https://daibieunhandan.vn/hoc-vien-tai-chinh-cong-bo-diem-chuan-2025-dao-dong-tu-21-26-6-10384264.html' },
    ],
  },
  {
    id: 'police', abbr: 'CAND', color: '#2f5d8a', founded: 1962,
    name: { en: 'Police academies (Security & Police)', vi: 'Học viện An ninh và Học viện Cảnh sát' },
    place: { en: 'Thanh Xuân and Bắc Từ Liêm, Hà Nội', vi: 'Thanh Xuân và Bắc Từ Liêm, Hà Nội' },
    knownFor: { en: 'Security work, cybersecurity and high-tech crime, criminal investigation, law.', vi: 'Nghiệp vụ an ninh, an ninh mạng và phòng chống tội phạm công nghệ cao, điều tra hình sự, luật.' },
    vibe: { en: 'Uniforms, barracks life and a strict daily schedule.', vi: 'Quân phục, sống nội trú, giờ giấc nghiêm ngặt.' },
    cutoff: null,
    cutoffText: { en: 'About 19–26.3 (2025), by region and gender, using the Ministry’s own formula that includes its aptitude test.', vi: 'Khoảng 19–26,3 (2025), khác nhau theo vùng và giới tính, tính theo công thức riêng có bài thi đánh giá của Bộ Công an.' },
    tuition: { en: 'Free, with a living allowance and a job after graduation.', vi: 'Miễn học phí, có phụ cấp sinh hoạt và được phân công công tác sau khi tốt nghiệp.' },
    methods: { en: 'Local screening (health, height, background) → Ministry aptitude test → combined score.', vi: 'Sơ tuyển ở công an địa phương (sức khỏe, chiều cao, lý lịch) → thi đánh giá của Bộ Công an → xét điểm kết hợp.' },
    funFact: { en: 'The Security Academy (founded 1962) and Police Academy (1968) are two separate schools.', vi: 'Học viện An ninh (1962) và Học viện Cảnh sát (1968) là hai trường khác nhau.' },
    quiz: {
      q: { en: 'What is the very first step to apply to a police academy?', vi: 'Bước đầu tiên để thi vào trường công an là gì?' },
      options: [{ en: 'Register online with the school', vi: 'Đăng ký trực tuyến với trường' }, { en: 'Preliminary screening at your local police', vi: 'Sơ tuyển tại công an địa phương' }, { en: 'Send a CV', vi: 'Gửi CV' }],
      answer: 1,
      why: { en: 'Screening happens early in the year at your local police — miss it and you cannot apply.', vi: 'Sơ tuyển diễn ra từ đầu năm ở công an địa phương — lỡ mốc này là không thể đăng ký.' },
    },
    sources: [
      { label: 'dhcsnd.edu.vn', url: 'https://dhcsnd.edu.vn' },
      { label: 'Thương hiệu & Công luận', url: 'https://thuonghieucongluan.com.vn/hoc-vien-canh-sat-nhan-dan-va-an-ninh-nhan-dan-cong-bo-diem-chuan-nam-2025-a276675.html' },
    ],
  },
];
