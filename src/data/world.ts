/**
 * "Explore the world" data: where Vietnamese young people study or work abroad.
 * Numbers change every year — each destination lists its sources. Re-check before reusing.
 */
export type T = { en: string; vi: string };

export type Interest = 'care' | 'mech' | 'factory' | 'agri' | 'hospitality' | 'office';

export const interests: { id: Interest; icon: string; label: T }[] = [
  { id: 'care', icon: '🩺', label: { en: 'Nursing & care', vi: 'Điều dưỡng, chăm sóc' } },
  { id: 'mech', icon: '🔧', label: { en: 'Mechanics & cars', vi: 'Cơ khí, ô tô' } },
  { id: 'factory', icon: '🏭', label: { en: 'Factories & electronics', vi: 'Nhà máy, điện tử' } },
  { id: 'agri', icon: '🌾', label: { en: 'Farming & fisheries', vi: 'Nông nghiệp, thủy sản' } },
  { id: 'hospitality', icon: '🍜', label: { en: 'Food & hotels', vi: 'Nhà hàng, khách sạn' } },
  { id: 'office', icon: '💬', label: { en: 'Languages & office', vi: 'Ngoại ngữ, văn phòng' } },
];

export type Destination = {
  id: string;
  code: string;
  flag: string;
  color: string;
  name: T;
  tagline: T;
  interests: Interest[];
  needs: T;
  study: T;
  work: T;
  language: T;
  money: T;
  funFact: T;
  quiz: { q: T; options: T[]; answer: number; why: T };
  sources: { label: string; url: string }[];
};

export const destinations: Destination[] = [
  {
    id: 'de', code: 'DE', flag: '🇩🇪', color: '#c9a23d',
    name: { en: 'Germany', vi: 'Đức' },
    tagline: { en: 'Europe’s engine needs carers', vi: 'Cỗ máy châu Âu đang thiếu người chăm sóc' },
    interests: ['care', 'mech', 'hospitality'],
    needs: {
      en: 'Nurses and elderly carers above all. Germany has about 1.72 million nurses, and will need 280,000–690,000 more by 2049 as the population ages. Technical trades and hotels also train foreigners.',
      vi: 'Trước hết là điều dưỡng và chăm sóc người già. Đức có khoảng 1,72 triệu điều dưỡng và sẽ cần thêm 280.000–690.000 người đến năm 2049 vì dân số già đi. Các nghề kỹ thuật và nhà hàng – khách sạn cũng nhận người nước ngoài học nghề.',
    },
    study: {
      en: 'Ausbildung (dual vocational training): 2–3 years, about 70% at the workplace, paid from the first month.',
      vi: 'Du học nghề (Ausbildung): 2–3 năm, khoảng 70% thời gian học ngay tại nơi làm việc, có lương từ tháng đầu.',
    },
    work: {
      en: 'Qualified nurses can have their degree recognised and work at German pay. Vietnam and Germany have run state nurse-training programmes before (with free German courses).',
      vi: 'Điều dưỡng có bằng có thể xin công nhận văn bằng và làm việc với lương như người Đức. Việt Nam và Đức từng có chương trình Nhà nước đào tạo điều dưỡng (học tiếng Đức miễn phí).',
    },
    language: { en: 'German B1 (B2 for nursing recognition)', vi: 'Tiếng Đức B1 (điều dưỡng cần B2 để được công nhận)' },
    money: { en: 'Ausbildung allowance about €800–1,200/month', vi: 'Lương học nghề khoảng 800–1.200 €/tháng' },
    funFact: {
      en: 'In Ausbildung you are a student and an employee at the same time — the company, not you, pays for your training.',
      vi: 'Học Ausbildung, em vừa là học sinh vừa là nhân viên — doanh nghiệp trả tiền đào tạo, không phải em.',
    },
    quiz: {
      q: { en: 'What German level do you usually need to start an Ausbildung?', vi: 'Để bắt đầu học nghề ở Đức, thường cần tiếng Đức trình độ nào?' },
      options: [{ en: 'A1', vi: 'A1' }, { en: 'B1', vi: 'B1' }, { en: 'C2', vi: 'C2' }],
      answer: 1,
      why: { en: 'B1 is the usual minimum; nursing recognition later needs B2.', vi: 'B1 là mức tối thiểu thường gặp; muốn được công nhận điều dưỡng thì cần B2.' },
    },
    sources: [
      { label: 'Deutscher Pflegerat – Factsheet 2025', url: 'https://deutscher-pflegerat.de/dpt25/DPT25_Factsheet-Pflege.pdf' },
      { label: 'Visa học nghề Đức (tanvanlang.com)', url: 'https://tanvanlang.com/visa-hoc-nghe-duc/' },
      { label: 'Học nghề điều dưỡng tại Đức (VnEconomy)', url: 'https://vneconomy.vn/hoc-nghe-dieu-duong-tai-duc-nhan-luong-34-trieu-dong.htm' },
    ],
  },
  {
    id: 'jp', code: 'JP', flag: '🇯🇵', color: '#c2453b',
    name: { en: 'Japan', vi: 'Nhật Bản' },
    tagline: { en: 'The biggest door for Vietnamese workers', vi: 'Cánh cửa lớn nhất của lao động Việt' },
    interests: ['mech', 'care', 'factory', 'agri', 'hospitality', 'office'],
    needs: {
      en: 'Japan plans to accept up to 820,000 “Specified Skilled Workers” in 2024–2028 across 16 fields. The biggest: industrial manufacturing/mechanics (173,300), nursing care (135,000), construction (80,000) and agriculture (78,000). Car maintenance and transport add 34,500 more.',
      vi: 'Nhật dự kiến nhận tới 820.000 lao động "kỹ năng đặc định" giai đoạn 2024–2028 ở 16 ngành. Nhiều nhất: chế tạo sản phẩm công nghiệp – cơ khí (173.300), điều dưỡng (135.000), xây dựng (80.000) và nông nghiệp (78.000). Bảo dưỡng và vận tải ô tô thêm 34.500 người.',
    },
    study: {
      en: 'Language school, then a vocational college (senmon) or university. Students may work part-time.',
      vi: 'Học trường tiếng, rồi lên cao đẳng nghề (senmon) hoặc đại học. Du học sinh được phép làm thêm.',
    },
    work: {
      en: 'From 2027 the old trainee programme is replaced by a new system that allows changing employers; after 3 years you can move to the Specified Skilled Worker visa.',
      vi: 'Từ năm 2027, chương trình thực tập sinh cũ được thay bằng chế độ mới cho phép chuyển nơi làm; sau 3 năm có thể chuyển sang visa kỹ năng đặc định.',
    },
    language: { en: 'Japanese N4 plus a skills test for the skilled-worker visa', vi: 'Tiếng Nhật N4 cùng bài thi tay nghề cho visa kỹ năng đặc định' },
    money: { en: 'Vietnamese workers in Japan usually earn about USD 1,200–1,600/month; national average minimum wage about ¥1,121/hour (FY2025)', vi: 'Lao động Việt ở Nhật thường nhận khoảng 1.200–1.600 USD/tháng; lương tối thiểu bình quân khoảng 1.121 yên/giờ (năm tài chính 2025)' },
    funFact: {
      en: 'Japan takes more than half of all Vietnamese workers going abroad.',
      vi: 'Nhật Bản chiếm hơn một nửa số lao động Việt Nam đi làm việc ở nước ngoài.',
    },
    quiz: {
      q: { en: 'Which field will Japan accept the most skilled workers in (2024–2028)?', vi: 'Giai đoạn 2024–2028, Nhật dự kiến nhận nhiều lao động kỹ năng đặc định nhất ở ngành nào?' },
      options: [{ en: 'Car maintenance', vi: 'Bảo dưỡng ô tô' }, { en: 'Industrial manufacturing', vi: 'Chế tạo sản phẩm công nghiệp' }, { en: 'Food service', vi: 'Nhà hàng' }],
      answer: 1,
      why: { en: '173,300 places — more than nursing care (135,000).', vi: '173.300 chỗ — nhiều hơn cả điều dưỡng (135.000).' },
    },
    sources: [
      { label: 'JAC – SSW quotas 2024–2028', url: 'https://jac-skill.or.jp/en/columns/point/number-quota-for-acceptance.php' },
      { label: 'Nhật thay chương trình thực tập sinh (VOH)', url: 'https://voh.com.vn/the-gioi/nhat-ban-bat-dau-thay-the-chuong-trinh-thuc-tap-sinh-nuoc-ngoai-ngoai-570973.html' },
      { label: 'Hơn 143.000 lao động đi nước ngoài (Saigon Times)', url: 'https://tuoitre.vn/saigontimes/hon-143-000-nguoi-lao-dong-di-lam-viec-o-nuoc-ngoai-1061019126.htm' },
      { label: 'Minimum wage in Japan (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Minimum_wage_in_Japan' },
    ],
  },
  {
    id: 'kr', code: 'KR', flag: '🇰🇷', color: '#3d7fc9',
    name: { en: 'South Korea', vi: 'Hàn Quốc' },
    tagline: { en: 'Factories, ships and K-culture', vi: 'Nhà máy, đóng tàu và văn hóa Hàn' },
    interests: ['factory', 'mech', 'agri'],
    needs: {
      en: 'In 2026 the state EPS programme recruited 4,200 Vietnamese workers: 3,000 for manufacturing, 1,000 for fisheries, 150 for forestry and 50 for services. Shipyards also hire skilled welders on the E-7 visa.',
      vi: 'Năm 2026, chương trình EPS của Nhà nước tuyển 4.200 lao động Việt: 3.000 cho sản xuất, 1.000 cho thủy sản, 150 cho lâm nghiệp và 50 cho dịch vụ. Các xưởng đóng tàu còn tuyển thợ hàn lành nghề theo visa E-7.',
    },
    study: {
      en: 'Language school (D-4 visa), then university (D-2). Part-time work up to about 20 hours a week.',
      vi: 'Học tiếng (visa D-4), rồi lên đại học (visa D-2). Được làm thêm khoảng 20 giờ/tuần.',
    },
    work: {
      en: 'EPS: age 18–39, pass the EPS-TOPIK Korean test and a skills test, pay a 100 million VND deposit (can be borrowed from the Social Policy Bank), refunded when you return on time.',
      vi: 'EPS: 18–39 tuổi, thi đậu tiếng Hàn EPS-TOPIK và kiểm tra tay nghề, ký quỹ 100 triệu đồng (có thể vay Ngân hàng Chính sách xã hội), được hoàn khi về nước đúng hạn.',
    },
    language: { en: 'Korean (EPS-TOPIK; TOPIK 3 for university)', vi: 'Tiếng Hàn (EPS-TOPIK; TOPIK 3 để học đại học)' },
    money: { en: 'Usually about USD 1,200–1,600/month', vi: 'Thường khoảng 1.200–1.600 USD/tháng' },
    funFact: {
      en: 'EPS is run by the two governments, so it costs far less than going through a private broker.',
      vi: 'EPS do Nhà nước hai bên tổ chức nên chi phí thấp hơn nhiều so với đi qua môi giới tư nhân.',
    },
    quiz: {
      q: { en: 'Which field had the most EPS places for Vietnam in 2026?', vi: 'Năm 2026, ngành nào có nhiều chỉ tiêu EPS nhất cho lao động Việt?' },
      options: [{ en: 'Manufacturing', vi: 'Sản xuất' }, { en: 'Services', vi: 'Dịch vụ' }, { en: 'Forestry', vi: 'Lâm nghiệp' }],
      answer: 0,
      why: { en: '3,000 of 4,200 places were in manufacturing.', vi: '3.000 trên 4.200 chỉ tiêu thuộc ngành sản xuất.' },
    },
    sources: [
      { label: 'Tuyển 4.200 lao động đi Hàn 2026 (VnEconomy)', url: 'https://vneconomy.vn/tuyen-chon-4200-lao-dong-sang-lam-viec-tai-han-quoc-trong-nam-2026.htm' },
      { label: 'Ký quỹ 100 triệu (VnBusiness)', url: 'https://vnbusiness.vn/lao-dong-di-han-quoc-phai-ky-quy-100-trieu-dong-chong-bo-tron.html' },
      { label: 'Visa E-7 Hàn Quốc (tanvanlang.com)', url: 'https://tanvanlang.com/visa-e7-han-quoc/' },
      { label: 'Visa D-2/D-4 (tanvanlang.com)', url: 'https://tanvanlang.com/visa-du-hoc-han-quoc/' },
    ],
  },
  {
    id: 'tw', code: 'TW', flag: '🇹🇼', color: '#2e9c6d',
    name: { en: 'Taiwan', vi: 'Đài Loan' },
    tagline: { en: 'Close to home, chips and care work', vi: 'Gần nhà, chip điện tử và chăm sóc người già' },
    interests: ['factory', 'care', 'mech'],
    needs: {
      en: 'Factories (electronics, mechanics), construction, and care workers for elderly people at home or in care centres.',
      vi: 'Nhà máy (điện tử, cơ khí), xây dựng, và khán hộ công chăm sóc người già tại nhà hoặc ở viện dưỡng lão.',
    },
    study: {
      en: 'Many universities offer scholarships and programmes in Chinese or English; part-time work is allowed.',
      vi: 'Nhiều trường đại học có học bổng và chương trình học bằng tiếng Trung hoặc tiếng Anh; du học sinh được làm thêm.',
    },
    work: {
      en: 'Contracts are usually 3 years and can be extended. Only a 3–4 hour flight from Vietnam.',
      vi: 'Hợp đồng thường 3 năm, có thể gia hạn. Chỉ cách Việt Nam 3–4 giờ bay.',
    },
    language: { en: 'Mandarin Chinese (traditional characters)', vi: 'Tiếng Trung (chữ phồn thể)' },
    money: { en: 'Minimum wage NT$29,500/month from 1 January 2026', vi: 'Lương tối thiểu 29.500 Đài tệ/tháng từ 1/1/2026' },
    funFact: {
      en: 'Taiwan makes most of the world’s most advanced computer chips — and needs many hands in its factories.',
      vi: 'Đài Loan sản xuất phần lớn chip máy tính tiên tiến nhất thế giới — và cần rất nhiều người trong nhà máy.',
    },
    quiz: {
      q: { en: 'What is Taiwan’s monthly minimum wage from 1 January 2026?', vi: 'Lương tối thiểu tháng ở Đài Loan từ 1/1/2026 là bao nhiêu?' },
      options: [{ en: 'NT$19,500', vi: '19.500 Đài tệ' }, { en: 'NT$29,500', vi: '29.500 Đài tệ' }, { en: 'NT$49,500', vi: '49.500 Đài tệ' }],
      answer: 1,
      why: { en: 'NT$29,500 — and it is planned to pass NT$30,000 in 2027.', vi: '29.500 Đài tệ — và dự kiến vượt 30.000 Đài tệ vào năm 2027.' },
    },
    sources: [
      { label: 'Taiwan 2026 minimum wage (HRO)', url: 'https://www.humanresourcesonline.net/taiwan-to-raise-monthly-minimum-wage-to-nt-29-500-from-1-january-2026' },
      { label: 'Taiwan minimum wage above NT$30,000 in 2027 (Bloomberg)', url: 'https://news.bgov.com/payroll/taiwan-to-lift-monthly-minimum-wage-above-nt-30-000-in-2027-edn' },
    ],
  },
  {
    id: 'au', code: 'AU', flag: '🇦🇺', color: '#d1543f',
    name: { en: 'Australia', vi: 'Úc' },
    tagline: { en: 'Study, work, and see kangaroos', vi: 'Vừa học, vừa làm, vừa ngắm kangaroo' },
    interests: ['care', 'agri', 'hospitality', 'office'],
    needs: {
      en: 'Aged care, nursing, trades, and farm work in regional areas.',
      vi: 'Chăm sóc người già, điều dưỡng, các nghề kỹ thuật, và nông nghiệp ở vùng nông thôn.',
    },
    study: {
      en: 'Student visa holders can work up to 48 hours per fortnight during term. Costs are high, so scholarships matter.',
      vi: 'Du học sinh được làm thêm tối đa 48 giờ mỗi 2 tuần trong kỳ học. Chi phí cao nên học bổng rất quan trọng.',
    },
    work: {
      en: 'Work and Holiday visa (462) for Vietnamese aged 18–30: needs at least 2 years of university and functional English; up to 12 months, renewable.',
      vi: 'Visa Work and Holiday (462) cho người Việt 18–30 tuổi: cần đã học ít nhất 2 năm đại học và tiếng Anh cơ bản; ở tối đa 12 tháng, có thể xin thêm.',
    },
    language: { en: 'English (IELTS)', vi: 'Tiếng Anh (IELTS)' },
    money: { en: 'High wages, but also high rent and living costs', vi: 'Lương cao, nhưng tiền nhà và sinh hoạt cũng cao' },
    funFact: {
      en: 'Vietnam is one of the few countries whose young people can get Australia’s Work and Holiday visa — a degree helps here.',
      vi: 'Việt Nam là một trong số ít nước có thanh niên được cấp visa Work and Holiday của Úc — ở đây, học đại học lại là lợi thế.',
    },
    quiz: {
      q: { en: 'What does Australia’s Work and Holiday visa require from Vietnamese applicants?', vi: 'Visa Work and Holiday của Úc yêu cầu gì ở người Việt?' },
      options: [{ en: 'Nothing special', vi: 'Không cần gì đặc biệt' }, { en: '2+ years of university and English', vi: 'Đã học 2 năm đại học trở lên và có tiếng Anh' }, { en: 'A job offer first', vi: 'Phải có việc làm trước' }],
      answer: 1,
      why: { en: 'Tertiary study (2+ years) and functional English, age 18–30.', vi: 'Đã học đại học ít nhất 2 năm và tiếng Anh cơ bản, tuổi 18–30.' },
    },
    sources: [
      { label: 'Australia expands Work and Holiday visa for Vietnam (VNA)', url: 'https://vietnam.vnanet.vn/english/print/australia-expands-work-and-holiday-marker-visa-program-for-vietnam-209839.html' },
      { label: 'Student work hours 2026 (One Planet Migration Law)', url: 'https://oneplanetmigrationlaw.com.au/immigration-blog/student-visa-work-hours-australia-2026/' },
    ],
  },
  {
    id: 'eu', code: 'EU', flag: '🇪🇺', color: '#7a5cc4',
    name: { en: 'Eastern Europe', vi: 'Đông Âu' },
    tagline: { en: 'New markets: Hungary, Poland, Czechia…', vi: 'Thị trường mới: Hungary, Ba Lan, Séc…' },
    interests: ['factory', 'agri', 'hospitality'],
    needs: {
      en: 'Factories, food processing, farming and construction. Hungary has put Vietnam on its list of countries for faster work-visa processing.',
      vi: 'Nhà máy, chế biến thực phẩm, nông nghiệp và xây dựng. Hungary đã đưa Việt Nam vào danh sách nước được xét visa lao động nhanh.',
    },
    study: {
      en: 'Some universities offer English-taught programmes with lower fees than Western Europe.',
      vi: 'Một số trường đại học có chương trình dạy bằng tiếng Anh, học phí thấp hơn Tây Âu.',
    },
    work: {
      en: 'Newer markets have fewer experienced agencies — check the licence on dolab.gov.vn even more carefully.',
      vi: 'Thị trường mới nên ít công ty có kinh nghiệm — càng phải kiểm tra giấy phép trên dolab.gov.vn thật kỹ.',
    },
    language: { en: 'Basic English; the local language helps', vi: 'Tiếng Anh cơ bản; biết tiếng bản địa là lợi thế' },
    money: { en: 'Usually about USD 800–1,200/month', vi: 'Thường khoảng 800–1.200 USD/tháng' },
    funFact: {
      en: 'Working in one EU country lets you visit most of Europe without extra visas — but you may only work where your permit says.',
      vi: 'Làm việc ở một nước EU, em có thể đi du lịch phần lớn châu Âu mà không cần thêm visa — nhưng chỉ được làm việc ở nơi giấy phép ghi.',
    },
    quiz: {
      q: { en: 'What should you do first with an agency offering jobs in a new European market?', vi: 'Với một công ty mời đi làm ở thị trường châu Âu mới, việc đầu tiên nên làm là gì?' },
      options: [{ en: 'Pay a deposit quickly', vi: 'Đặt cọc thật nhanh' }, { en: 'Check its licence on dolab.gov.vn', vi: 'Kiểm tra giấy phép trên dolab.gov.vn' }, { en: 'Trust its Facebook reviews', vi: 'Tin các đánh giá trên Facebook' }],
      answer: 1,
      why: { en: 'Only licensed companies may send workers abroad.', vi: 'Chỉ doanh nghiệp được cấp phép mới được đưa người lao động ra nước ngoài.' },
    },
    sources: [
      { label: 'Vietnam seeks to send more workers to Hungary (VietNamNet)', url: 'https://vietnamnet.vn/en/vietnam-seeks-to-send-more-guestworkers-to-hungary-2028649.html' },
      { label: 'Thu nhập theo thị trường (Saigon Times)', url: 'https://tuoitre.vn/saigontimes/hon-143-000-nguoi-lao-dong-di-lam-viec-o-nuoc-ngoai-1061019126.htm' },
    ],
  },
  {
    id: 'vn', code: 'VN', flag: '🇻🇳', color: '#1f6f5c',
    name: { en: 'Vietnam (stay home)', vi: 'Việt Nam (ở lại)' },
    tagline: { en: 'The world comes to you', vi: 'Thế giới đến tìm em' },
    interests: ['office', 'factory', 'mech', 'hospitality'],
    needs: {
      en: 'Korean, Japanese and Taiwanese companies run many factories and offices in Vietnam. They need interpreters, production staff, technicians and office workers who speak their language.',
      vi: 'Doanh nghiệp Hàn Quốc, Nhật Bản, Đài Loan có rất nhiều nhà máy và văn phòng ở Việt Nam. Họ cần phiên dịch, nhân viên sản xuất, kỹ thuật viên và nhân viên văn phòng biết tiếng của họ.',
    },
    study: {
      en: 'Learn a language at university or college (Korean, Japanese, Chinese, English) alongside a skill.',
      vi: 'Học ngoại ngữ ở đại học hoặc cao đẳng (Hàn, Nhật, Trung, Anh) song song với một tay nghề.',
    },
    work: {
      en: 'Stay near family, build experience, and keep the option to go abroad later with stronger skills.',
      vi: 'Ở gần gia đình, tích lũy kinh nghiệm, và vẫn giữ cơ hội ra nước ngoài sau này với tay nghề tốt hơn.',
    },
    language: { en: 'Any foreign language you are good at', vi: 'Bất kỳ ngoại ngữ nào em giỏi' },
    money: { en: 'Lower than abroad, but so are living costs — and no deposit or fees', vi: 'Thấp hơn nước ngoài, nhưng chi phí sinh hoạt cũng thấp — và không mất phí, không ký quỹ' },
    funFact: {
      en: 'A foreign language is a ticket into foreign companies without leaving the country.',
      vi: 'Một ngoại ngữ là tấm vé vào công ty nước ngoài mà không cần rời khỏi đất nước.',
    },
    quiz: {
      q: { en: 'What do foreign companies in Vietnam often look for?', vi: 'Doanh nghiệp nước ngoài ở Việt Nam thường tìm người như thế nào?' },
      options: [{ en: 'People who speak their language', vi: 'Người biết tiếng của họ' }, { en: 'Only people who studied abroad', vi: 'Chỉ người từng du học' }, { en: 'Only managers', vi: 'Chỉ người làm quản lý' }],
      answer: 0,
      why: { en: 'Language plus a skill opens many doors at home.', vi: 'Ngoại ngữ cộng một tay nghề mở ra nhiều cánh cửa ngay trong nước.' },
    },
    sources: [],
  },
];
