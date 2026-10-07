/**
 * "A day on the job" data: common careers in Vietnam.
 * Money is in million VND per month (triệu đồng/tháng), gross, as of 2025–2026.
 * Public-sector pay uses the base salary of 2.53M VND from 1 Jul 2026 (Nghị định 161/2026).
 * Private-sector figures come from salary surveys and vary a lot. Re-check before reusing.
 */
export type T = { en: string; vi: string };

export type Career = {
  id: string;
  icon: string;
  color: string;
  name: T;
  tagline: T;
  sector: 'public' | 'private' | 'both';
  /** Years of study/training after high school before you can work on your own. */
  years: number;
  training: T;
  /** Monthly income in million VND: [low, high]. */
  start: [number, number];
  mid: [number, number];
  startNote: T;
  bonus: T;
  day: T;
  outlook: T;
  hard: T;
  scenario: { q: T; options: T[]; answer: number; why: T };
  sources: { label: string; url: string }[];
};

export const careers: Career[] = [
  {
    id: 'police', icon: '👮', color: '#2f5d8a', sector: 'public', years: 4,
    name: { en: 'Police officer', vi: 'Công an' },
    tagline: { en: 'Uniform, discipline, a guaranteed post', vi: 'Quân phục, kỷ luật, có phân công công tác' },
    training: {
      en: '4 years at a police academy or university (e.g. People’s Security Academy, People’s Police Academy). You first pass a local screening (health, height, eyesight, background), then the Ministry’s own aptitude test. Tuition is free, you get a living allowance, and you graduate as a second lieutenant with a job.',
      vi: '4 năm ở học viện, trường đại học Công an (VD: Học viện An ninh, Học viện Cảnh sát). Trước hết phải qua sơ tuyển ở công an địa phương (sức khỏe, chiều cao, mắt, lý lịch), rồi thi đánh giá của Bộ Công an. Miễn học phí, có phụ cấp, ra trường mang hàm Thiếu úy và được phân công công tác.',
    },
    start: [11, 15], mid: [15, 22],
    startNote: { en: 'Second lieutenant: coefficient 4.20 × 2.53M = 10.6M base, plus allowances.', vi: 'Thiếu úy: hệ số 4,20 × 2,53 triệu = 10,6 triệu lương cơ bản, cộng thêm phụ cấp.' },
    bonus: { en: 'Special-duty allowance, seniority pay from year 5, night and duty allowances. Pay rises with rank.', vi: 'Phụ cấp đặc thù, phụ cấp thâm niên từ năm thứ 5, phụ cấp trực đêm. Lên quân hàm thì lương tăng.' },
    day: { en: 'A shift at a ward police station: receiving residents, handling paperwork, patrols and settling disputes. Night duty several times a month.', vi: 'Một ca trực ở công an phường: tiếp dân, làm thủ tục, tuần tra, hòa giải mâu thuẫn. Trực đêm vài lần mỗi tháng.' },
    outlook: { en: 'Very stable, but admission is fiercely competitive and the quota for women is small.', vi: 'Rất ổn định, nhưng thi vào cực kỳ cạnh tranh và chỉ tiêu nữ rất ít.' },
    hard: { en: 'Strict discipline, irregular hours, some risk, and you may be posted far from home.', vi: 'Kỷ luật nghiêm, giờ giấc thất thường, có rủi ro, có thể được phân công xa nhà.' },
    scenario: {
      q: { en: 'You are on duty. A resident rushes in, very upset: her electric bike was stolen. What do you do first?', vi: 'Em đang trực ban. Một người dân hốt hoảng chạy vào báo mất xe đạp điện. Em làm gì trước tiên?' },
      options: [
        { en: 'Tell her to go and look around the market first', vi: 'Bảo cô ấy ra chợ tìm thử trước' },
        { en: 'Calm her down, take her report (time, place, details) and explain the next steps', vi: 'Trấn an, ghi nhận trình báo (thời gian, địa điểm, đặc điểm xe) và giải thích các bước tiếp theo' },
        { en: 'Promise you will find the bike by tomorrow', vi: 'Hứa chắc chắn ngày mai sẽ tìm được xe' },
      ],
      answer: 1,
      why: { en: 'Most police work is calm, careful work with people and records. A good report is what makes a case solvable — and you never promise what you cannot control.', vi: 'Phần lớn công việc công an là làm việc với người dân và hồ sơ một cách bình tĩnh, cẩn thận. Biên bản tốt mới giúp phá được vụ việc — và không bao giờ hứa điều mình không kiểm soát được.' },
    },
    sources: [
      { label: 'Thư viện Pháp luật', url: 'https://thuvienphapluat.vn/lao-dong-tien-luong/bang-luong-cong-an-tu-1-7-2026-chinh-thuc-60868.html' },
      { label: 'HOCMAI', url: 'https://huongnghiep.hocmai.vn/diem-san-cac-truong-cong-an-nam-2026' },
    ],
  },
  {
    id: 'army', icon: '🎖️', color: '#4f6b3a', sector: 'public', years: 4,
    name: { en: 'Military officer', vi: 'Sĩ quan quân đội' },
    tagline: { en: 'Lead, train, protect', vi: 'Chỉ huy, huấn luyện, bảo vệ' },
    training: {
      en: '4–5 years at one of 23 military academies and officer schools. Screening checks health and background (command track: men at least 1.65 m and 50 kg, no short-sightedness). From 2026 the Ministry of Defence runs its own aptitude test. Tuition is free and graduates are assigned as second lieutenants.',
      vi: '4–5 năm ở một trong 23 học viện, trường sĩ quan. Sơ tuyển kiểm tra sức khỏe và lý lịch (ngành chỉ huy: nam cao từ 1,65 m, nặng từ 50 kg, không cận). Từ 2026 Bộ Quốc phòng tổ chức kỳ thi đánh giá năng lực riêng. Miễn học phí, ra trường mang hàm Thiếu úy và được phân công.',
    },
    start: [11, 15], mid: [15, 22],
    startNote: { en: 'Same rank scale as the police: second lieutenant 4.20 × 2.53M = 10.6M base.', vi: 'Cùng bảng quân hàm với công an: Thiếu úy 4,20 × 2,53 triệu = 10,6 triệu lương cơ bản.' },
    bonus: { en: 'Military allowances, seniority pay, and in some units housing support.', vi: 'Phụ cấp quân đội, phụ cấp thâm niên, một số đơn vị có hỗ trợ nhà ở.' },
    day: { en: 'Morning exercise, training soldiers, managing your unit, duty shifts and drills. You usually live at the barracks.', vi: 'Thể dục buổi sáng, huấn luyện chiến sĩ, quản lý đơn vị, trực và diễn tập. Thường sống ở doanh trại.' },
    outlook: { en: 'Stable and respected; officer quotas grew in 2026 (5,420 places).', vi: 'Ổn định, được trọng vọng; chỉ tiêu trường quân đội năm 2026 tăng (5.420 chỉ tiêu).' },
    hard: { en: 'Strict discipline, remote postings, long periods away from family, physically demanding.', vi: 'Kỷ luật nghiêm, có thể đóng quân xa, xa gia đình lâu, đòi hỏi thể lực.' },
    scenario: {
      q: { en: 'A new soldier in your unit keeps failing the shooting test. What do you do?', vi: 'Một chiến sĩ mới trong đơn vị bắn mãi chưa đạt. Em làm gì?' },
      options: [
        { en: 'Punish the whole squad so he feels the pressure', vi: 'Phạt cả tiểu đội để cậu ấy thấy áp lực' },
        { en: 'Coach him one-on-one, find what is wrong with his stance, and encourage him', vi: 'Kèm riêng, tìm lỗi tư thế, động viên cậu ấy' },
        { en: 'Quietly mark him as passed', vi: 'Lặng lẽ ghi là đạt' },
      ],
      answer: 1,
      why: { en: 'An officer is a commander and also a teacher. Much of the job is training people patiently.', vi: 'Sĩ quan vừa là người chỉ huy vừa là người thầy. Phần lớn công việc là kiên nhẫn huấn luyện con người.' },
    },
    sources: [
      { label: 'HOCMAI', url: 'https://huongnghiep.hocmai.vn/tuyen-sinh-quan-doi-2026-tang-manh-chi-tieu-lan-dau-to-chuc-ky-thi-danh-gia-nang-luc-rieng' },
      { label: 'VOV', url: 'https://vov.vn/xa-hoi/chi-tiet-muc-luong-moi-trong-cong-an-quan-doi-tu-ngay-17-post1310891.vov' },
    ],
  },
  {
    id: 'doctor', icon: '🩺', color: '#c2453b', sector: 'both', years: 7,
    name: { en: 'Doctor', vi: 'Bác sĩ' },
    tagline: { en: 'The longest road, the deepest trust', vi: 'Con đường dài nhất, niềm tin lớn nhất' },
    training: {
      en: '6 years of medicine, then 12 months of supervised practice before a licence. From 2027 doctors must also pass a national competency exam. Many add a 3-year residency or specialist training — 7–10 years in total before you work fully on your own.',
      vi: '6 năm học y đa khoa, sau đó 12 tháng thực hành có giám sát mới được cấp giấy phép. Từ 2027 bác sĩ còn phải qua kỳ kiểm tra năng lực quốc gia. Nhiều người học thêm 3 năm nội trú hoặc chuyên khoa — tổng cộng 7–10 năm mới thật sự “cứng nghề”.',
    },
    start: [8, 11], mid: [15, 30],
    startNote: { en: 'Public hospital: coefficient 2.34 × 2.53M = 5.9M, plus a job allowance of 30–80% (Nghị định 350/2026) and on-call pay.', vi: 'Bệnh viện công: hệ số 2,34 × 2,53 triệu = 5,9 triệu, cộng phụ cấp ưu đãi nghề 30–80% (Nghị định 350/2026) và tiền trực.' },
    bonus: { en: 'On-call and surgery allowances, hospital income. Private hospitals and own clinics can pay much more later.', vi: 'Phụ cấp trực, phẫu thuật, thu nhập tăng thêm của bệnh viện. Về sau, bệnh viện tư hoặc phòng khám riêng có thể cao hơn nhiều.' },
    day: { en: 'Morning ward rounds, clinic or surgery, writing records. A 24-hour on-call shift several times a month.', vi: 'Sáng đi buồng bệnh, rồi khám ngoại trú hoặc mổ, viết bệnh án. Trực 24 tiếng vài lần mỗi tháng.' },
    outlook: { en: 'Always needed, and allowances rose in 2026.', vi: 'Xã hội luôn cần, và phụ cấp đã tăng từ 2026.' },
    hard: { en: 'Very long training, low pay at first compared with the years studied, heavy workload and stress.', vi: 'Học rất lâu, lương khởi điểm thấp so với số năm học, áp lực và khối lượng công việc lớn.' },
    scenario: {
      q: { en: '3 a.m., on call. Two patients arrive together: one with mild stomach pain who can walk, one struggling to breathe with blue lips. Who first?', vi: '3 giờ sáng, đang trực. Hai bệnh nhân vào cùng lúc: một người đau bụng nhẹ, vẫn đi lại được; một người khó thở, môi tím. Em khám ai trước?' },
      options: [
        { en: 'Whoever arrived first', vi: 'Ai đến trước khám trước' },
        { en: 'The one who cannot breathe — triage by danger, not by queue', vi: 'Người khó thở — phân loại theo mức nguy hiểm, không theo thứ tự' },
        { en: 'Wait for the senior doctor to wake up', vi: 'Chờ bác sĩ trưởng tua dậy' },
      ],
      answer: 1,
      why: { en: 'Emergency medicine runs on triage: the most life-threatening case first. Calm decisions under pressure are a core skill.', vi: 'Cấp cứu vận hành theo nguyên tắc phân loại: ca đe dọa tính mạng trước. Ra quyết định bình tĩnh dưới áp lực là kỹ năng cốt lõi.' },
    },
    sources: [
      { label: 'Báo Pháp luật', url: 'https://baophapluat.vn/nhan-vien-y-te-duoc-huong-phu-cap-uu-dai-nghe-cao-nhat-80.html' },
      { label: 'Luật Việt Nam', url: 'https://luatvietnam.vn/tin-van-ban-moi/bac-si-phai-kiem-tra-nang-luc-de-duoc-cap-giay-phep-hanh-nghe-186-92976-article.html' },
    ],
  },
  {
    id: 'nurse', icon: '💉', color: '#d0688f', sector: 'both', years: 3,
    name: { en: 'Nurse', vi: 'Điều dưỡng' },
    tagline: { en: 'Closest to the patient, needed worldwide', vi: 'Gần người bệnh nhất, cả thế giới đang cần' },
    training: {
      en: '3 years at college or 4 at university, then supervised practice for a licence. Admission scores are moderate. Nursing also opens doors to Japan and Germany if you learn the language.',
      vi: '3 năm cao đẳng hoặc 4 năm đại học, rồi thực hành có giám sát để lấy giấy phép. Điểm đầu vào vừa phải. Nghề này còn mở đường sang Nhật, Đức nếu em học ngoại ngữ.',
    },
    start: [6, 10], mid: [10, 18],
    startNote: { en: 'Public 6–10M, private 7–10M at the start.', vi: 'Mới ra trường: công lập 6–10 triệu, tư nhân 7–10 triệu.' },
    bonus: { en: 'Night-shift pay, job allowance in public hospitals; head nurses earn 15–30M.', vi: 'Tiền trực đêm, phụ cấp ưu đãi nghề ở bệnh viện công; điều dưỡng trưởng 15–30 triệu.' },
    day: { en: '8–12 hour shifts, rotating day and night: medicines, IV lines, checking vital signs, records, supporting families.', vi: 'Ca 8–12 tiếng, xoay ca ngày đêm: cho thuốc, truyền dịch, theo dõi dấu hiệu sinh tồn, ghi hồ sơ, hỗ trợ người nhà.' },
    outlook: { en: 'Strong demand at home and abroad as populations age.', vi: 'Nhu cầu lớn cả trong và ngoài nước vì dân số già đi.' },
    hard: { en: 'Physically tiring, night shifts, emotionally demanding, modest pay at home.', vi: 'Mệt về thể lực, trực đêm, nặng về cảm xúc, thu nhập trong nước còn khiêm tốn.' },
    scenario: {
      q: { en: 'An elderly patient refuses his medicine because it tastes bitter. What do you do?', vi: 'Một cụ ông không chịu uống thuốc vì thuốc đắng. Em làm gì?' },
      options: [
        { en: 'Insist until he swallows it', vi: 'Ép cụ uống bằng được' },
        { en: 'Ask why, explain kindly, and tell the doctor if another form of the drug is needed', vi: 'Hỏi lý do, giải thích nhẹ nhàng, báo bác sĩ nếu cần đổi dạng thuốc' },
        { en: 'Write “taken” in the record and move on', vi: 'Ghi “đã uống” vào hồ sơ rồi đi tiếp' },
      ],
      answer: 1,
      why: { en: 'Nursing is care plus honesty: patience with people, and records that are always true.', vi: 'Điều dưỡng là chăm sóc cộng với trung thực: kiên nhẫn với con người, và hồ sơ luôn đúng sự thật.' },
    },
    sources: [
      { label: 'CareerLink', url: 'https://www.careerlink.vn/cam-nang-luong/dieu-duong-luong-bao-nhieu/' },
    ],
  },
  {
    id: 'teacher', icon: '🧑‍🏫', color: '#1f6f5c', sector: 'public', years: 4,
    name: { en: 'Teacher', vi: 'Giáo viên' },
    tagline: { en: 'Free to study, highest on the pay scale', vi: 'Học miễn phí, lương xếp cao nhất bảng' },
    training: {
      en: '4 years of teacher education: free tuition plus 3.63M/month living support (Nghị định 116/2020) — you must then work in education or repay it. After graduating you sit a public recruitment exam.',
      vi: '4 năm sư phạm: miễn học phí và được hỗ trợ 3,63 triệu/tháng (Nghị định 116/2020) — đổi lại phải làm trong ngành giáo dục, nếu không sẽ phải hoàn trả. Ra trường thi hoặc xét tuyển viên chức.',
    },
    start: [8, 9], mid: [11, 14],
    startNote: { en: 'High school: 2.34 × 2.53M = 5.9M + 40% teaching allowance ≈ 8.3M (more in remote areas, up to 80%).', vi: 'THPT: 2,34 × 2,53 triệu = 5,9 triệu + 40% phụ cấp ưu đãi ≈ 8,3 triệu (vùng khó khăn cao hơn, tới 80%).' },
    bonus: { en: 'Seniority pay from year 5, homeroom and head-of-department allowances. The Law on Teachers (2026) ranks teachers’ pay highest in the public scale.', vi: 'Phụ cấp thâm niên từ năm thứ 5, phụ cấp chủ nhiệm, tổ trưởng. Luật Nhà giáo (2026) xếp lương giáo viên cao nhất trong thang bậc hành chính sự nghiệp.' },
    day: { en: '4–5 lessons a day, lesson planning, marking, homeroom duties, talking with parents — and paperwork.', vi: '4–5 tiết mỗi ngày, soạn bài, chấm bài, chủ nhiệm, trao đổi với phụ huynh — và giấy tờ.' },
    outlook: { en: 'Shortages in preschool, primary, IT, English and arts; surplus in some other subjects.', vi: 'Thiếu ở mầm non, tiểu học, Tin học, Tiếng Anh, nghệ thuật; một số môn khác lại thừa.' },
    hard: { en: 'Lots of work outside class, pressure from parents and paperwork.', vi: 'Nhiều việc ngoài giờ lên lớp, áp lực từ phụ huynh và sổ sách.' },
    scenario: {
      q: { en: 'A student keeps falling asleep in your class. What do you do?', vi: 'Một học sinh hay ngủ gật trong giờ của em. Em làm gì?' },
      options: [
        { en: 'Make her stand at the back of the room', vi: 'Phạt đứng cuối lớp' },
        { en: 'Talk to her privately — maybe she works late helping her family', vi: 'Gặp riêng hỏi chuyện — biết đâu em ấy phải phụ giúp gia đình tới khuya' },
        { en: 'Ignore it — it is her problem', vi: 'Kệ, đó là chuyện của em ấy' },
      ],
      answer: 1,
      why: { en: 'Teaching is about people, not just lessons. Understanding the reason usually solves more than punishment.', vi: 'Dạy học là làm việc với con người, không chỉ với bài giảng. Hiểu nguyên nhân thường hiệu quả hơn hình phạt.' },
    },
    sources: [
      { label: 'Đại biểu Nhân dân', url: 'https://daibieunhandan.vn/nha-giao-duoc-huong-phu-cap-uu-dai-theo-nghe-len-toi-80-10417970.html' },
      { label: 'Giáo dục Việt Nam', url: 'https://giaoduc.net.vn/thu-nhap-cua-giao-vien-thcs-thpt-ra-sao-khi-luong-co-so-o-muc-253-trieu-va-phu-cap-uu-dai-40-post260292.gd' },
    ],
  },
  {
    id: 'software', icon: '💻', color: '#3d7fc9', sector: 'private', years: 4,
    name: { en: 'Software engineer', vi: 'Kỹ sư phần mềm' },
    tagline: { en: 'Steep pay curve, never stop learning', vi: 'Lương tăng nhanh, học không bao giờ dừng' },
    training: {
      en: '4–4.5 years of IT or computer science. Some come from bootcamps or colleges — your projects and English matter as much as the degree.',
      vi: '4–4,5 năm Công nghệ thông tin, Khoa học máy tính. Có người đi từ khóa học ngắn hoặc cao đẳng — sản phẩm tự làm và tiếng Anh quan trọng không kém tấm bằng.',
    },
    start: [10, 15], mid: [30, 55],
    startNote: { en: 'ITviec 2025–2026: back-end fresher median about 12.4M.', vi: 'ITviec 2025–2026: lương trung vị lập trình viên back-end mới ra trường khoảng 12,4 triệu.' },
    bonus: { en: '13th-month salary, project or KPI bonuses; good English adds roughly 20–30%.', vi: 'Lương tháng 13, thưởng dự án hoặc KPI; giỏi tiếng Anh thường cao hơn khoảng 20–30%.' },
    day: { en: 'Morning stand-up, coding, code review, fixing bugs — increasingly with AI tools. Hybrid or remote work is common.', vi: 'Họp nhanh buổi sáng, viết code, review code của nhau, sửa lỗi — ngày càng dùng nhiều công cụ AI. Làm hybrid hoặc từ xa khá phổ biến.' },
    outlook: { en: 'Strong for AI, data, cloud and security — but entry-level hiring is pickier now that AI does simple tasks.', vi: 'Nhu cầu mạnh ở AI, dữ liệu, cloud, bảo mật — nhưng tuyển người mới khắt khe hơn vì AI làm được việc đơn giản.' },
    hard: { en: 'Constant learning, deadlines, long hours at a screen.', vi: 'Phải học liên tục, áp lực deadline, ngồi máy tính nhiều.' },
    scenario: {
      q: { en: 'Demo day is tomorrow and you find a bug that crashes the app. What do you do?', vi: 'Mai là buổi demo cho khách, em phát hiện một lỗi làm app bị sập. Em làm gì?' },
      options: [
        { en: 'Say nothing and hope it does not happen during the demo', vi: 'Im lặng, cầu mong lúc demo không bị' },
        { en: 'Tell the team now and suggest hiding that feature for the demo, then fix it properly', vi: 'Báo team ngay, đề xuất tạm ẩn tính năng đó khi demo rồi sửa đàng hoàng sau' },
        { en: 'Stay up all night fixing it alone without telling anyone', vi: 'Thức trắng sửa một mình, không nói với ai' },
      ],
      answer: 1,
      why: { en: 'Software is a team sport. Raising problems early is valued far more than heroic all-nighters.', vi: 'Làm phần mềm là làm việc nhóm. Báo vấn đề sớm được đánh giá cao hơn nhiều so với một mình “anh hùng” thức trắng.' },
    },
    sources: [
      { label: 'ITviec', url: 'https://itviec.com/blog/bao-cao-luong-it' },
      { label: 'VnEconomy', url: 'https://vneconomy.vn/muc-luong-trung-binh-hang-thang-cua-cac-ky-su-it-tai-viet-nam-hien-nay.htm' },
    ],
  },
  {
    id: 'civil', icon: '🏗️', color: '#c9a23d', sector: 'private', years: 5,
    name: { en: 'Civil engineer', vi: 'Kỹ sư xây dựng' },
    tagline: { en: 'Build roads, bridges and cities', vi: 'Xây đường, cầu và thành phố' },
    training: {
      en: '4.5–5 years of engineering. A professional practice certificate comes later with experience.',
      vi: '4,5–5 năm học kỹ thuật. Chứng chỉ hành nghề xây dựng có sau khi đủ kinh nghiệm.',
    },
    start: [8, 16], mid: [16, 25],
    startNote: { en: 'TopCV: 8.4–16.4M in the first 1–3 years.', vi: 'TopCV: 8,4–16,4 triệu trong 1–3 năm đầu.' },
    bonus: { en: 'Project bonuses, site and remote-area allowances. Project managers earn 17–44M.', vi: 'Thưởng dự án, phụ cấp công trường, phụ cấp xa. Quản lý dự án 17–44 triệu.' },
    day: { en: 'On site from early morning: checking quality and safety, supervising workers, reading drawings, meetings with contractors.', vi: 'Có mặt ở công trường từ sáng sớm: kiểm tra chất lượng, an toàn, giám sát công nhân, đọc bản vẽ, họp với nhà thầu.' },
    outlook: { en: 'Big public investment (expressways, rail) keeps demand up, though pay follows the property cycle.', vi: 'Đầu tư công lớn (cao tốc, đường sắt) giữ nhu cầu cao, dù thu nhập lên xuống theo thị trường bất động sản.' },
    hard: { en: 'Sun and rain, working away from home, late payments when the market slows.', vi: 'Dầm mưa dãi nắng, xa nhà, có lúc chậm lương khi thị trường khó khăn.' },
    scenario: {
      q: { en: 'You see the steel in a floor slab does not match the drawing. The contractor wants to pour concrete now to stay on schedule.', vi: 'Em thấy cốt thép một sàn đặt sai so với bản vẽ. Nhà thầu muốn đổ bê tông ngay cho kịp tiến độ.' },
      options: [
        { en: 'Let them pour — the deadline matters', vi: 'Cho đổ, tiến độ là quan trọng' },
        { en: 'Stop the pour, require a fix and record it in writing', vi: 'Dừng đổ, yêu cầu sửa và lập biên bản' },
        { en: 'Take a photo and leave it', vi: 'Chụp ảnh rồi để đó' },
      ],
      answer: 1,
      why: { en: 'Once concrete is poured, mistakes are buried for decades. Engineers carry legal responsibility for safety.', vi: 'Bê tông đã đổ thì sai sót bị chôn vùi hàng chục năm. Kỹ sư chịu trách nhiệm pháp lý về an toàn công trình.' },
    },
    sources: [
      { label: 'TopCV', url: 'https://www.topcv.vn/muc-luong-nganh-xay-dung' },
      { label: 'Navigos', url: 'https://www.navigossearch.com/en/articles/talent-guide-2026-vietnam-labor-market-report-2026-is-officially-launched' },
    ],
  },
  {
    id: 'accountant', icon: '📊', color: '#7a5bc4', sector: 'private', years: 4,
    name: { en: 'Accountant / auditor', vi: 'Kế toán, kiểm toán' },
    tagline: { en: 'Every business needs one', vi: 'Doanh nghiệp nào cũng cần' },
    training: {
      en: '4 years of accounting, auditing or finance. Certificates like ACCA or Vietnamese CPA lift your pay a lot.',
      vi: '4 năm Kế toán, Kiểm toán hoặc Tài chính. Chứng chỉ ACCA, CPA Việt Nam giúp tăng thu nhập đáng kể.',
    },
    start: [8, 13], mid: [20, 30],
    startNote: { en: 'Under 1 year: 8–13M (JobOKO 2026). Big Four audit firms pay more but have a heavy busy season.', vi: 'Dưới 1 năm: 8–13 triệu (JobOKO 2026). Các hãng kiểm toán Big4 trả cao hơn nhưng mùa cao điểm rất bận.' },
    bonus: { en: 'Usually a 13th-month salary plus performance bonus. Managers earn 40–55M.', vi: 'Thường có lương tháng 13 và thưởng hiệu quả. Quản lý 40–55 triệu.' },
    day: { en: 'Processing invoices, accounting software, tax returns and reports. Auditors visit clients to check figures, especially December–April.', vi: 'Xử lý hóa đơn, nhập phần mềm kế toán, khai thuế, lập báo cáo. Kiểm toán viên đến doanh nghiệp kiểm tra số liệu, nhất là từ tháng 12 đến tháng 4.' },
    outlook: { en: 'Routine bookkeeping is being automated; analysis and certificates are where the value is moving.', vi: 'Việc ghi sổ đơn giản đang được tự động hóa; giá trị dịch chuyển sang phân tích và chứng chỉ chuyên môn.' },
    hard: { en: 'Deadlines, tax season, long hours at a desk.', vi: 'Áp lực hạn nộp, mùa quyết toán thuế, ngồi bàn giấy nhiều.' },
    scenario: {
      q: { en: 'Your boss asks you to make the numbers “look better” so the company can get a bank loan.', vi: 'Sếp nhờ em “làm đẹp” số liệu để công ty dễ vay ngân hàng.' },
      options: [
        { en: 'Do it — the boss knows best', vi: 'Làm theo, sếp bảo thì làm' },
        { en: 'Decline, explain the legal risk, and offer an honest way to present the figures', vi: 'Từ chối, giải thích rủi ro pháp lý, đề xuất cách trình bày trung thực' },
        { en: 'Do it but keep the original file just in case', vi: 'Làm, nhưng giữ bản gốc phòng thân' },
      ],
      answer: 1,
      why: { en: 'Accountants sign their name under the numbers. Falsifying books is illegal — integrity is the job.', vi: 'Kế toán ký tên dưới các con số. Làm sai lệch sổ sách là vi phạm pháp luật — chính trực chính là nghề.' },
    },
    sources: [
      { label: 'JobOKO', url: 'https://vn.joboko.com/blog/luong-kiem-toan-nwi5764' },
    ],
  },
  {
    id: 'banker', icon: '🏦', color: '#2e8b57', sector: 'private', years: 4,
    name: { en: 'Bank employee', vi: 'Nhân viên ngân hàng' },
    tagline: { en: 'Big averages, bigger targets', vi: 'Thu nhập trung bình cao, chỉ tiêu còn cao hơn' },
    training: {
      en: '4 years of banking, finance or economics. Banks run their own recruitment tests and trainee programmes.',
      vi: '4 năm Ngân hàng, Tài chính hoặc Kinh tế. Ngân hàng tự tổ chức thi tuyển và chương trình quản trị viên tập sự.',
    },
    start: [8, 15], mid: [20, 40],
    startNote: { en: 'Many banks report 40–50M average across all staff in 2025 — but that includes managers. New tellers earn far less.', vi: 'Nhiều ngân hàng có thu nhập bình quân 40–50 triệu năm 2025 — nhưng đó là tính cả lãnh đạo. Giao dịch viên mới thấp hơn nhiều.' },
    bonus: { en: '13th-month salary, Tết and performance bonuses — closely tied to sales targets (KPIs).', vi: 'Lương tháng 13, thưởng Tết, thưởng hiệu quả — gắn chặt với chỉ tiêu bán hàng (KPI).' },
    day: { en: 'Tellers serve customers at the counter; relationship managers find clients, process loans and sell cards, deposits and insurance.', vi: 'Giao dịch viên phục vụ khách tại quầy; chuyên viên khách hàng tìm khách, làm hồ sơ vay, bán thẻ, tiền gửi, bảo hiểm.' },
    outlook: { en: 'Digital banking is shrinking counter jobs; some banks cut over 1,000 staff.', vi: 'Ngân hàng số làm giảm việc tại quầy; một số ngân hàng đã cắt hơn 1.000 nhân sự.' },
    hard: { en: 'Heavy sales pressure every month.', vi: 'Áp lực chỉ tiêu hàng tháng rất nặng.' },
    scenario: {
      q: { en: 'End of month, you are short of your insurance target. An elderly customer comes in to open a savings account.', vi: 'Cuối tháng em còn thiếu chỉ tiêu bán bảo hiểm. Một bác lớn tuổi đến gửi tiết kiệm.' },
      options: [
        { en: 'Sign her up for insurance without explaining clearly', vi: 'Làm luôn hợp đồng bảo hiểm mà không giải thích rõ' },
        { en: 'Explain clearly that savings and insurance are different, and let her decide', vi: 'Giải thích rõ tiết kiệm và bảo hiểm là hai sản phẩm khác nhau, để bác tự quyết' },
        { en: 'Call the insurance “a savings plan with higher interest”', vi: 'Giới thiệu bảo hiểm là “gửi tiết kiệm lãi cao hơn”' },
      ],
      answer: 1,
      why: { en: 'Mis-selling insurance as savings has been publicly punished in Vietnam. Trust is a banker’s real capital.', vi: 'Việc bán bảo hiểm “trá hình” tiết kiệm đã từng bị xử lý công khai. Niềm tin của khách mới là vốn thật của người làm ngân hàng.' },
    },
    sources: [
      { label: 'Tuổi Trẻ', url: 'https://tuoitre.vn/dau-phai-banker-nao-cung-nhan-luong-may-chi-vang-co-ngan-hang-chi-tra-hon-chuc-trieu-thang-20260222182530771.htm' },
    ],
  },
  {
    id: 'lawyer', icon: '⚖️', color: '#8a5a2f', sector: 'private', years: 6,
    name: { en: 'Lawyer', vi: 'Luật sư' },
    tagline: { en: 'A slow start, a strong finish', vi: 'Khởi đầu chậm, về đích mạnh' },
    training: {
      en: '4-year law degree, a 12-month lawyer course at the Judicial Academy, 12 months of apprenticeship, then the bar exam — about 6 years in total.',
      vi: '4 năm cử nhân Luật, 12 tháng học nghề luật sư ở Học viện Tư pháp, 12 tháng tập sự, rồi kiểm tra kết quả tập sự — tổng cộng khoảng 6 năm.',
    },
    start: [3, 8], mid: [25, 60],
    startNote: { en: 'Apprentices get a small allowance; junior lawyers about 10–20M. Income depends on clients.', vi: 'Tập sự chỉ có phụ cấp nhỏ; luật sư trẻ khoảng 10–20 triệu. Thu nhập phụ thuộc vào khách hàng.' },
    bonus: { en: 'Case fees and firm bonuses; partners at large firms earn far more.', vi: 'Phí vụ việc và thưởng của công ty luật; luật sư thành viên ở hãng lớn thu nhập cao hơn nhiều.' },
    day: { en: 'Researching documents, drafting contracts, meeting clients, going to court or negotiating.', vi: 'Nghiên cứu hồ sơ, soạn hợp đồng, gặp khách hàng, ra tòa hoặc đàm phán.' },
    outlook: { en: 'Growing demand in business law, foreign investment, IP and technology.', vi: 'Nhu cầu tăng ở luật doanh nghiệp, đầu tư nước ngoài, sở hữu trí tuệ, công nghệ.' },
    hard: { en: 'Long road to a licence, low early income, reputation takes years to build.', vi: 'Đường lấy thẻ luật sư dài, thu nhập những năm đầu thấp, uy tín phải xây nhiều năm.' },
    scenario: {
      q: { en: 'Your client tells you a fact that hurts his case and asks you to keep it secret.', vi: 'Thân chủ kể với em một chi tiết bất lợi và nhờ em giữ kín.' },
      options: [
        { en: 'Share it with friends — it is an interesting story', vi: 'Kể cho bạn bè nghe vì chuyện khá hay' },
        { en: 'Keep it confidential and build the best defence within the law', vi: 'Giữ bí mật thông tin và tìm cách bào chữa tốt nhất trong khuôn khổ pháp luật' },
        { en: 'Make up evidence to win', vi: 'Dựng chứng cứ giả để thắng' },
      ],
      answer: 1,
      why: { en: 'Client confidentiality is a legal duty for lawyers — and so is never falsifying evidence.', vi: 'Giữ bí mật thông tin khách hàng là nghĩa vụ luật định của luật sư — và tuyệt đối không làm sai lệch chứng cứ.' },
    },
    sources: [
      { label: 'Luật sư Việt Nam', url: 'https://lsvn.vn/tap-su-hanh-nghe-luat-su-du-thang-chua-du-nghe-a164098.html' },
      { label: 'Thư viện Pháp luật', url: 'https://thuvienphapluat.vn/hoi-dap-phap-luat/hoc-bao-lau-thi-tro-thanh-luat-su-291942.html' },
    ],
  },
  {
    id: 'guide', icon: '🧳', color: '#e07a3f', sector: 'private', years: 3,
    name: { en: 'Tour guide / interpreter', vi: 'Hướng dẫn viên, phiên dịch' },
    tagline: { en: 'Languages turned into a living', vi: 'Biến ngoại ngữ thành nghề' },
    training: {
      en: 'College or university in tourism or a foreign language, then a guide card (the international card needs a language certificate).',
      vi: 'Cao đẳng hoặc đại học ngành du lịch, ngoại ngữ, rồi lấy thẻ hướng dẫn viên (thẻ quốc tế cần chứng chỉ ngoại ngữ).',
    },
    start: [10, 20], mid: [20, 40],
    startNote: { en: 'High-season figures. Domestic guides earn 400–800k per day; international guides 20–40M/month in peak season.', vi: 'Số liệu mùa cao điểm. Hướng dẫn viên nội địa 400–800 nghìn/ngày; quốc tế 20–40 triệu/tháng mùa cao điểm.' },
    bonus: { en: 'Tips can be 30–50% of income. Korean, Japanese or Chinese pays 40–60% more. Off-season income can fall 40–60%.', vi: 'Tiền tip có thể chiếm 30–50% thu nhập. Biết tiếng Hàn, Nhật, Trung thu nhập cao hơn 40–60%. Mùa thấp điểm có thể giảm 40–60%.' },
    day: { en: 'Travelling with groups, telling the story of each place, handling surprises. Early starts, late finishes.', vi: 'Đi cùng đoàn, kể chuyện về từng điểm đến, xử lý sự cố. Dậy sớm, về muộn.' },
    outlook: { en: 'International tourism has recovered strongly.', vi: 'Du lịch quốc tế đã phục hồi mạnh.' },
    hard: { en: 'Seasonal income, often freelance without insurance, lots of time away from home.', vi: 'Thu nhập theo mùa, nhiều người làm tự do không có bảo hiểm, xa nhà nhiều.' },
    scenario: {
      q: { en: 'Your coach breaks down in the rain with a group of foreign tourists on board.', vi: 'Xe chở đoàn khách nước ngoài bị hỏng giữa đường, trời đang mưa.' },
      options: [
        { en: 'Stay quiet and wait', vi: 'Im lặng ngồi chờ' },
        { en: 'Explain clearly, apologise, call the company for a new coach — and use the wait to tell stories', vi: 'Thông báo rõ, xin lỗi, gọi công ty đổi xe — và tranh thủ lúc chờ để kể chuyện' },
        { en: 'Blame the driver in front of the guests', vi: 'Đổ lỗi cho tài xế trước mặt khách' },
      ],
      answer: 1,
      why: { en: 'Guests remember how you handled the problem more than the problem itself.', vi: 'Khách nhớ cách em xử lý sự cố hơn là bản thân sự cố.' },
    },
    sources: [
      { label: 'CareerLink', url: 'https://www.careerlink.vn/cam-nang-luong/muc-luong-nganh-du-lich/' },
    ],
  },
];

/** Upper bound of the salary axis, in million VND. */
export const SALARY_MAX = 60;
