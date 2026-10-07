/**
 * Bilingual data for the "Finding your path" session (career orientation).
 * Every text field is { en, vi }.
 * Facts that change every year (fees, quotas, dates) carry a source link — re-check before each school year.
 */
export type T = { en: string; vi: string };

/* ------------------------------------------------------------------ */
/* About-me card prompts                                               */
/* ------------------------------------------------------------------ */
export const aboutPrompts: { id: string; q: T; ph: T }[] = [
  { id: 'love', q: { en: '3 things I love doing', vi: '3 điều mình thích làm' }, ph: { en: 'e.g. cooking, films, exploring new places', vi: 'VD: nấu ăn, xem phim, khám phá nơi mới' } },
  { id: 'good', q: { en: 'Something I am good at (or people say I am good at)', vi: 'Một điều mình làm tốt (hoặc mọi người khen)' }, ph: { en: 'e.g. explaining physics to friends', vi: 'VD: giảng bài Lý cho bạn' } },
  { id: 'proud', q: { en: 'A moment I was proud of myself', vi: 'Một lần mình thấy tự hào về bản thân' }, ph: { en: 'e.g. a prize at school', vi: 'VD: đạt giải ở trường' } },
  { id: 'change', q: { en: 'One thing I want to change about myself this year', vi: 'Một điều mình muốn thay đổi ở bản thân trong năm nay' }, ph: { en: 'e.g. more confident speaking in front of people', vi: 'VD: tự tin hơn khi nói trước đám đông' } },
  { id: 'worry', q: { en: 'What I worry about most right now', vi: 'Điều mình lo lắng nhất lúc này' }, ph: { en: 'e.g. choosing the right path, money', vi: 'VD: chọn sai đường, chuyện tài chính' } },
  { id: 'dream', q: { en: 'At 25, I hope my life looks like…', vi: 'Năm 25 tuổi, mình mong cuộc sống của mình…' }, ph: { en: 'Describe one ordinary day', vi: 'Tả một ngày bình thường của mình khi ấy' } },
];

/* ------------------------------------------------------------------ */
/* Holland / RIASEC                                                    */
/* ------------------------------------------------------------------ */
export type Riasec = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export const riasecItems: { type: Riasec; text: T }[] = [
  { type: 'R', text: { en: 'I like fixing or assembling things with my hands.', vi: 'Mình thích sửa chữa hoặc lắp ráp đồ vật bằng tay.' } },
  { type: 'R', text: { en: 'I enjoy cooking, gardening or looking after animals.', vi: 'Mình thích nấu ăn, trồng cây hoặc chăm sóc con vật.' } },
  { type: 'R', text: { en: 'I prefer being active and outdoors to sitting at a desk.', vi: 'Mình thích vận động, ở ngoài trời hơn là ngồi bàn giấy.' } },
  { type: 'R', text: { en: 'I like learning how machines or tools work.', vi: 'Mình thích tìm hiểu máy móc, dụng cụ hoạt động thế nào.' } },
  { type: 'R', text: { en: 'I like jobs where you can see a real, finished result.', vi: 'Mình thích công việc làm ra sản phẩm cụ thể, nhìn thấy được.' } },

  { type: 'I', text: { en: 'I enjoy solving maths or physics problems.', vi: 'Mình thích giải bài Toán hoặc Vật lý.' } },
  { type: 'I', text: { en: 'I often ask "why?" and look for the answer myself.', vi: 'Mình hay hỏi "tại sao?" và tự đi tìm câu trả lời.' } },
  { type: 'I', text: { en: 'I like doing experiments or testing ideas.', vi: 'Mình thích làm thí nghiệm hoặc thử nghiệm ý tưởng.' } },
  { type: 'I', text: { en: 'I enjoy reading or watching videos about science and nature.', vi: 'Mình thích đọc hoặc xem video về khoa học, tự nhiên.' } },
  { type: 'I', text: { en: 'I like puzzles and thinking problems through carefully.', vi: 'Mình thích câu đố và suy nghĩ kỹ từng bước.' } },

  { type: 'A', text: { en: 'I like drawing, decorating or designing things.', vi: 'Mình thích vẽ, trang trí hoặc thiết kế.' } },
  { type: 'A', text: { en: 'I enjoy writing stories, posts or diaries.', vi: 'Mình thích viết truyện, viết bài hoặc nhật ký.' } },
  { type: 'A', text: { en: 'Music, singing, dancing or acting make me happy.', vi: 'Âm nhạc, ca hát, nhảy múa hoặc diễn xuất làm mình vui.' } },
  { type: 'A', text: { en: 'I like trying my own way instead of following a recipe exactly.', vi: 'Mình thích làm theo cách riêng hơn là làm đúng y công thức.' } },
  { type: 'A', text: { en: 'I enjoy films and books that make me imagine.', vi: 'Mình thích phim, sách khiến mình tưởng tượng.' } },

  { type: 'S', text: { en: 'Friends often come to me when they have a problem.', vi: 'Bạn bè hay tìm đến mình khi có chuyện.' } },
  { type: 'S', text: { en: 'I like explaining lessons to classmates or younger kids.', vi: 'Mình thích giảng bài cho bạn hoặc các em nhỏ.' } },
  { type: 'S', text: { en: 'I enjoy volunteering and helping in my community.', vi: 'Mình thích làm tình nguyện, giúp đỡ mọi người xung quanh.' } },
  { type: 'S', text: { en: 'I feel good when I take care of others.', vi: 'Mình thấy vui khi được chăm sóc người khác.' } },
  { type: 'S', text: { en: 'I prefer working in a team to working alone.', vi: 'Mình thích làm việc nhóm hơn làm một mình.' } },

  { type: 'E', text: { en: 'I like leading a group or organising an event.', vi: 'Mình thích dẫn dắt nhóm hoặc tổ chức sự kiện.' } },
  { type: 'E', text: { en: 'I enjoy convincing people of my ideas.', vi: 'Mình thích thuyết phục người khác theo ý tưởng của mình.' } },
  { type: 'E', text: { en: 'I would like to run my own small business one day.', vi: 'Mình muốn một ngày nào đó tự kinh doanh nhỏ.' } },
  { type: 'E', text: { en: 'I like setting big goals and competing.', vi: 'Mình thích đặt mục tiêu lớn và cạnh tranh.' } },
  { type: 'E', text: { en: 'I am comfortable talking to new people.', vi: 'Mình thấy thoải mái khi nói chuyện với người lạ.' } },

  { type: 'C', text: { en: 'I like keeping my notes and things neat and organised.', vi: 'Mình thích sắp xếp vở ghi, đồ đạc gọn gàng.' } },
  { type: 'C', text: { en: 'I like following a clear plan or schedule.', vi: 'Mình thích làm theo kế hoạch, lịch rõ ràng.' } },
  { type: 'C', text: { en: 'I am careful with details and rarely make small mistakes.', vi: 'Mình cẩn thận chi tiết, ít khi sai lặt vặt.' } },
  { type: 'C', text: { en: 'I enjoy working with numbers, lists or tables.', vi: 'Mình thích làm việc với con số, danh sách, bảng biểu.' } },
  { type: 'C', text: { en: 'I like clear rules and knowing exactly what is expected.', vi: 'Mình thích quy định rõ ràng, biết chính xác cần làm gì.' } },
];

export const riasecTypes: Record<Riasec, { name: T; nick: T; desc: T; majors: T; jobs: T; color: string }> = {
  R: {
    name: { en: 'Realistic', vi: 'Kỹ thuật – Thực tế' },
    nick: { en: 'The Doer', vi: 'Người làm' },
    desc: { en: 'Practical, hands-on, likes tools, nature and real results.', vi: 'Thực tế, khéo tay, thích dụng cụ, thiên nhiên và kết quả cụ thể.' },
    majors: { en: 'Mechanical/electrical engineering, automotive technology, culinary arts, agriculture & aquaculture, construction', vi: 'Cơ khí, điện – điện tử, công nghệ ô tô, kỹ thuật chế biến món ăn, nông nghiệp – thuỷ sản, xây dựng' },
    jobs: { en: 'Technician, chef, electrician, engineer, farm or fishery specialist', vi: 'Kỹ thuật viên, đầu bếp, thợ điện, kỹ sư, chuyên viên nông nghiệp – thuỷ sản' },
    color: '#c97b3d',
  },
  I: {
    name: { en: 'Investigative', vi: 'Nghiên cứu' },
    nick: { en: 'The Thinker', vi: 'Người khám phá' },
    desc: { en: 'Curious, analytical, likes ideas, science and solving problems.', vi: 'Tò mò, thích phân tích, ý tưởng, khoa học và giải quyết vấn đề.' },
    majors: { en: 'Medicine & pharmacy, information technology, physics/chemistry, data science, environmental science', vi: 'Y – dược, công nghệ thông tin, Vật lý/Hoá học, khoa học dữ liệu, khoa học môi trường' },
    jobs: { en: 'Doctor, pharmacist, programmer, lab technician, researcher', vi: 'Bác sĩ, dược sĩ, lập trình viên, kỹ thuật viên xét nghiệm, nhà nghiên cứu' },
    color: '#3d7fc9',
  },
  A: {
    name: { en: 'Artistic', vi: 'Nghệ thuật' },
    nick: { en: 'The Creator', vi: 'Người sáng tạo' },
    desc: { en: 'Imaginative, expressive, likes freedom, beauty and new ideas.', vi: 'Giàu tưởng tượng, thích thể hiện, tự do, cái đẹp và ý tưởng mới.' },
    majors: { en: 'Graphic design, multimedia communication, architecture, languages & literature, music', vi: 'Thiết kế đồ hoạ, truyền thông đa phương tiện, kiến trúc, ngôn ngữ – văn học, âm nhạc' },
    jobs: { en: 'Designer, content creator, writer, translator, photographer', vi: 'Nhà thiết kế, sáng tạo nội dung, biên tập viên, biên – phiên dịch, nhiếp ảnh gia' },
    color: '#a35bc4',
  },
  S: {
    name: { en: 'Social', vi: 'Xã hội' },
    nick: { en: 'The Helper', vi: 'Người giúp đỡ' },
    desc: { en: 'Caring, patient, likes teaching, helping and working with people.', vi: 'Quan tâm, kiên nhẫn, thích dạy học, giúp đỡ và làm việc với con người.' },
    majors: { en: 'Teacher education, nursing, social work, psychology, tourism', vi: 'Sư phạm, điều dưỡng, công tác xã hội, tâm lý học, du lịch' },
    jobs: { en: 'Teacher, nurse, counsellor, social worker, tour guide', vi: 'Giáo viên, điều dưỡng, tư vấn viên, nhân viên công tác xã hội, hướng dẫn viên' },
    color: '#2e9c6d',
  },
  E: {
    name: { en: 'Enterprising', vi: 'Quản lý – Kinh doanh' },
    nick: { en: 'The Persuader', vi: 'Người dẫn dắt' },
    desc: { en: 'Energetic, confident, likes leading, selling and making decisions.', vi: 'Năng động, tự tin, thích lãnh đạo, kinh doanh và ra quyết định.' },
    majors: { en: 'Business administration, marketing, law, hotel & restaurant management, international business', vi: 'Quản trị kinh doanh, marketing, luật, quản trị nhà hàng – khách sạn, kinh doanh quốc tế' },
    jobs: { en: 'Sales, marketer, manager, lawyer, business owner', vi: 'Nhân viên kinh doanh, marketing, quản lý, luật sư, chủ doanh nghiệp' },
    color: '#d1543f',
  },
  C: {
    name: { en: 'Conventional', vi: 'Nghiệp vụ' },
    nick: { en: 'The Organiser', vi: 'Người tổ chức' },
    desc: { en: 'Careful, reliable, likes order, numbers and clear processes.', vi: 'Cẩn thận, đáng tin cậy, thích trật tự, con số và quy trình rõ ràng.' },
    majors: { en: 'Accounting, finance & banking, office administration, logistics, library & records', vi: 'Kế toán, tài chính – ngân hàng, quản trị văn phòng, logistics, thư viện – lưu trữ' },
    jobs: { en: 'Accountant, bank officer, administrator, logistics coordinator, data entry', vi: 'Kế toán, nhân viên ngân hàng, hành chính, điều phối logistics, nhập liệu' },
    color: '#7a8a3a',
  },
};

/* ------------------------------------------------------------------ */
/* What matters to me → path fit                                       */
/* ------------------------------------------------------------------ */
export type Priority = 'earn' | 'cost' | 'degree' | 'home' | 'abroad' | 'stable';

export const priorities: { id: Priority; label: T; hint: T }[] = [
  { id: 'earn', label: { en: 'Earn money soon', vi: 'Có thu nhập sớm' }, hint: { en: 'Start earning within 1–2 years', vi: 'Bắt đầu kiếm tiền trong 1–2 năm' } },
  { id: 'cost', label: { en: 'Low cost to start', vi: 'Chi phí ban đầu thấp' }, hint: { en: 'Little money needed up front', vi: 'Không cần nhiều tiền lúc đầu' } },
  { id: 'degree', label: { en: 'A university degree', vi: 'Có bằng đại học' }, hint: { en: 'A bachelor degree matters to me or my family', vi: 'Tấm bằng cử nhân quan trọng với mình hoặc gia đình' } },
  { id: 'home', label: { en: 'Stay near family', vi: 'Ở gần gia đình' }, hint: { en: 'Be able to visit home often', vi: 'Về thăm nhà thường xuyên' } },
  { id: 'abroad', label: { en: 'Live and work abroad', vi: 'Ra nước ngoài' }, hint: { en: 'Experience another country and language', vi: 'Trải nghiệm đất nước, ngôn ngữ khác' } },
  { id: 'stable', label: { en: 'Long-term stability', vi: 'Ổn định lâu dài' }, hint: { en: 'A secure job for many years', vi: 'Công việc vững chắc nhiều năm' } },
];

export type PathId = 'uni' | 'voc' | 'mil' | 'study' | 'work' | 'combo';

export const paths: {
  id: PathId;
  icon: string;
  name: T;
  what: T;
  time: T;
  cost: T;
  pros: T[];
  cons: T[];
  fits: T;
  firstStep: T;
  /** how well this path serves each priority, 0–3 */
  score: Record<Priority, number>;
  sources?: { label: string; url: string }[];
}[] = [
  {
    id: 'uni',
    icon: '🎓',
    name: { en: 'University', vi: 'Đại học' },
    what: { en: 'A 4-year bachelor degree. Many majors, from teacher education to IT, languages and business.', vi: 'Học 4 năm lấy bằng cử nhân. Rất nhiều ngành: sư phạm, CNTT, ngôn ngữ, kinh tế…' },
    time: { en: '4 years (5–6 for medicine, engineering)', vi: '4 năm (y, kỹ thuật 5–6 năm)' },
    cost: { en: 'Tuition + living costs. Teacher education students can get tuition and 3.63 million VND/month living support from the state.', vi: 'Học phí + sinh hoạt phí. Sinh viên sư phạm có thể được Nhà nước hỗ trợ học phí và 3,63 triệu đồng/tháng sinh hoạt phí.' },
    pros: [
      { en: 'Widest choice of careers later, in Vietnam or abroad', vi: 'Nhiều lựa chọn nghề nghiệp nhất về sau, trong nước hay nước ngoài' },
      { en: 'Needed for jobs like teacher, doctor, engineer', vi: 'Bắt buộc với nghề như giáo viên, bác sĩ, kỹ sư' },
      { en: 'Time to grow up, join clubs, build confidence', vi: 'Có thời gian trưởng thành, tham gia CLB, rèn sự tự tin' },
    ],
    cons: [
      { en: 'Longest before earning a full salary', vi: 'Lâu nhất mới có lương đầy đủ' },
      { en: 'Living costs in the city; often needs part-time work', vi: 'Tốn chi phí sinh hoạt ở thành phố; thường phải làm thêm' },
    ],
    fits: { en: 'You like studying, want a profession that needs a degree, or want to keep many doors open.', vi: 'Em thích học, muốn làm nghề cần bằng đại học, hoặc muốn giữ nhiều cánh cửa mở.' },
    firstStep: { en: 'List 3 majors you are curious about and check each school’s 2027 admission plan (đề án tuyển sinh).', vi: 'Liệt kê 3 ngành em tò mò và xem đề án tuyển sinh 2027 của từng trường.' },
    score: { earn: 0, cost: 1, degree: 3, home: 2, abroad: 1, stable: 2 },
    sources: [{ label: 'Nghị định 116/2020 – hỗ trợ SV sư phạm (hoatieu.vn)', url: 'https://hoatieu.vn/phap-luat/hoc-phi-sinh-vien-su-pham-215216' }],
  },
  {
    id: 'voc',
    icon: '🛠️',
    name: { en: 'College & vocational school', vi: 'Cao đẳng – học nghề' },
    what: { en: 'Practical training for a specific job: cooking, nursing, electrical, IT support, hotel, mechanics…', vi: 'Đào tạo thực hành cho một nghề cụ thể: nấu ăn, điều dưỡng, điện, IT, khách sạn, cơ khí…' },
    time: { en: '1–3 years', vi: '1–3 năm' },
    cost: { en: 'Lower than university; many public schools have tuition support. You can continue to a university degree later (liên thông).', vi: 'Thấp hơn đại học; nhiều trường công có hỗ trợ học phí. Có thể học liên thông lên đại học sau.' },
    pros: [
      { en: 'Earn sooner with a real skill', vi: 'Đi làm sớm hơn với một tay nghề thật' },
      { en: 'Lots of practice, less theory', vi: 'Học thực hành nhiều, ít lý thuyết' },
      { en: 'Skills are in demand abroad too (Japan, Germany, Korea)', vi: 'Tay nghề cũng được cần ở nước ngoài (Nhật, Đức, Hàn)' },
    ],
    cons: [
      { en: 'Some families see it as "lower" than university — it is not', vi: 'Một số gia đình xem nhẹ hơn đại học — thực ra không phải vậy' },
      { en: 'Choose the school carefully: check practice workshops and job placement', vi: 'Cần chọn trường kỹ: xem xưởng thực hành và tỉ lệ có việc làm' },
    ],
    fits: { en: 'You learn best by doing, and want to earn and help your family sooner.', vi: 'Em học tốt nhất khi được làm, và muốn sớm có thu nhập phụ giúp gia đình.' },
    firstStep: { en: 'Visit one college near you, ask for the tuition, practice hours and how many graduates get jobs.', vi: 'Đến thăm một trường cao đẳng gần nhà, hỏi học phí, giờ thực hành và tỉ lệ sinh viên có việc làm.' },
    score: { earn: 2, cost: 2, degree: 1, home: 2, abroad: 1, stable: 2 },
  },
  {
    id: 'mil',
    icon: '🎖️',
    name: { en: 'Military & police academies', vi: 'Quân đội – Công an' },
    what: { en: 'Officer training at military or police academies. Free study, strict discipline, a guaranteed job after graduation.', vi: 'Đào tạo sĩ quan ở học viện, trường quân đội hoặc công an. Không mất học phí, kỷ luật cao, ra trường được phân công công tác.' },
    time: { en: '4–5 years', vi: '4–5 năm' },
    cost: { en: 'Free tuition, food and accommodation; students get an allowance.', vi: 'Miễn học phí, ăn ở; học viên có phụ cấp.' },
    pros: [
      { en: 'Very low cost for the family', vi: 'Gần như không tốn chi phí cho gia đình' },
      { en: 'Stable career with clear promotion', vi: 'Nghề nghiệp ổn định, lộ trình rõ ràng' },
      { en: 'Builds discipline and resilience', vi: 'Rèn kỷ luật và bản lĩnh' },
    ],
    cons: [
      { en: 'Very few places for women: in 2026 only 4 military academies took female students', vi: 'Rất ít chỉ tiêu cho nữ: năm 2026 chỉ 4 học viện quân đội tuyển nữ' },
      { en: 'High scores and strict health checks; preliminary selection in spring', vi: 'Điểm chuẩn cao, khám sức khoẻ nghiêm; sơ tuyển từ mùa xuân' },
      { en: 'Less personal freedom; you may be posted far from home', vi: 'Ít tự do cá nhân; có thể công tác xa nhà' },
    ],
    fits: { en: 'You love discipline and service, are strong in the admission subjects, and are healthy.', vi: 'Em thích kỷ luật và phụng sự, học tốt các môn xét tuyển, sức khoẻ tốt.' },
    firstStep: { en: 'Ask your local military office and your homeroom teacher about the 2027 preliminary selection for female candidates.', vi: 'Hỏi cơ quan quân sự địa phương và giáo viên chủ nhiệm về lịch sơ tuyển 2027 cho thí sinh nữ.' },
    score: { earn: 1, cost: 3, degree: 3, home: 0, abroad: 0, stable: 3 },
    sources: [{ label: 'Bốn học viện quân đội tuyển nữ 2026 (Báo Lào Cai)', url: 'https://baolaocai.vn/bon-hoc-vien-cua-quan-doi-tuyen-thi-sinh-nu-nam-2026-post896470.html' }],
  },
  {
    id: 'study',
    icon: '✈️',
    name: { en: 'Study abroad', vi: 'Du học' },
    what: { en: 'Language school then university (e.g. Korea D-4 → D-2 visa), or paid vocational training abroad (e.g. Germany’s Ausbildung).', vi: 'Học tiếng rồi lên đại học (VD: Hàn Quốc visa D-4 → D-2), hoặc du học nghề có lương (VD: Ausbildung ở Đức).' },
    time: { en: '1–2 years language + 2–4 years study', vi: '1–2 năm học tiếng + 2–4 năm học chính' },
    cost: { en: 'Korea: visas usually need proof of USD 10,000–20,000 in the bank. Germany Ausbildung: German B1 required; trainees earn about €800–1,200/month.', vi: 'Hàn Quốc: thường phải chứng minh tài chính 10.000–20.000 USD. Đức (Ausbildung): cần tiếng Đức B1; học viên được trả khoảng 800–1.200 €/tháng.' },
    pros: [
      { en: 'A new language and international experience', vi: 'Thêm một ngoại ngữ và trải nghiệm quốc tế' },
      { en: 'Part-time work allowed (Korea: up to ~20 h/week)', vi: 'Được làm thêm (Hàn: khoảng 20 giờ/tuần)' },
      { en: 'Scholarships exist for strong students', vi: 'Có học bổng cho học sinh giỏi' },
    ],
    cons: [
      { en: 'Expensive to start unless you win a scholarship', vi: 'Chi phí ban đầu cao nếu không có học bổng' },
      { en: 'Far from family; homesickness is real', vi: 'Xa gia đình; nhớ nhà là có thật' },
      { en: 'Watch out for agencies that over-promise', vi: 'Cẩn thận với trung tâm hứa hẹn quá mức' },
    ],
    fits: { en: 'You love languages, can study one for 1–2 years first, and have a plan for the money.', vi: 'Em thích ngoại ngữ, chịu học tiếng 1–2 năm trước, và có kế hoạch tài chính.' },
    firstStep: { en: 'Start Korean (or German) now with free apps and aim for TOPIK 2 by the end of grade 12.', vi: 'Bắt đầu học tiếng Hàn (hoặc Đức) ngay với app miễn phí, đặt mục tiêu TOPIK 2 vào cuối lớp 12.' },
    score: { earn: 1, cost: 0, degree: 3, home: 0, abroad: 3, stable: 1 },
    sources: [
      { label: 'Visa D-2/D-4 Hàn Quốc (tanvanlang.com)', url: 'https://tanvanlang.com/visa-du-hoc-han-quoc/' },
      { label: 'Visa học nghề Đức (tanvanlang.com)', url: 'https://tanvanlang.com/visa-hoc-nghe-duc/' },
    ],
  },
  {
    id: 'work',
    icon: '🌏',
    name: { en: 'Working abroad (labour export)', vi: 'Xuất khẩu lao động' },
    what: { en: 'Contract work in Korea (EPS programme), Japan, Taiwan… mostly factories, farming, fisheries, care work.', vi: 'Làm việc theo hợp đồng ở Hàn Quốc (chương trình EPS), Nhật Bản, Đài Loan… chủ yếu nhà máy, nông nghiệp, thuỷ sản, điều dưỡng.' },
    time: { en: 'Contracts of about 3–5 years', vi: 'Hợp đồng khoảng 3–5 năm' },
    cost: { en: 'Korea EPS (run by the State): age 18–39, Korean test (EPS-TOPIK), a 100 million VND deposit (loan possible from the Social Policy Bank), refunded when you return on time.', vi: 'Hàn Quốc EPS (Nhà nước tổ chức): 18–39 tuổi, thi tiếng Hàn EPS-TOPIK, ký quỹ 100 triệu đồng (có thể vay Ngân hàng Chính sách xã hội), được hoàn lại khi về nước đúng hạn.' },
    pros: [
      { en: 'Higher income than at home, sooner', vi: 'Thu nhập cao hơn trong nước, và sớm hơn' },
      { en: 'Learn a language and work discipline', vi: 'Học được ngoại ngữ và tác phong công nghiệp' },
      { en: 'Japan is replacing its trainee programme from 2027 with one that allows job changes', vi: 'Nhật Bản thay chương trình thực tập sinh từ 2027 bằng chế độ mới, cho phép chuyển việc' },
    ],
    cons: [
      { en: 'Hard physical work, long hours, living costs abroad', vi: 'Công việc nặng, giờ làm dài, chi phí sinh hoạt cao' },
      { en: 'Without a degree, options after returning can be limited — plan what you will do next', vi: 'Không có bằng cấp, lựa chọn sau khi về có thể hạn chế — cần có kế hoạch cho sau đó' },
      { en: 'Scams are common: never pay unlicensed brokers', vi: 'Lừa đảo nhiều: tuyệt đối không nộp tiền cho môi giới không phép' },
    ],
    fits: { en: 'You are 18+, healthy, have a clear money goal and a plan for the 3–5 years after.', vi: 'Em đủ 18 tuổi, khoẻ mạnh, có mục tiêu tài chính rõ ràng và kế hoạch cho 3–5 năm sau đó.' },
    firstStep: { en: 'Learn how to check a licensed company on dolab.gov.vn — and learn Korean or Japanese first; it helps in every path.', vi: 'Biết cách tra công ty được cấp phép trên dolab.gov.vn — và học tiếng Hàn hoặc Nhật trước; điều này có ích cho mọi con đường.' },
    score: { earn: 3, cost: 1, degree: 0, home: 0, abroad: 3, stable: 1 },
    sources: [
      { label: 'Tuyển chọn 4.200 lao động đi Hàn 2026 (VnEconomy)', url: 'https://vneconomy.vn/tuyen-chon-4200-lao-dong-sang-lam-viec-tai-han-quoc-trong-nam-2026.htm' },
      { label: 'Ký quỹ 100 triệu đi Hàn (VnBusiness)', url: 'https://vnbusiness.vn/lao-dong-di-han-quoc-phai-ky-quy-100-trieu-dong-chong-bo-tron.html' },
      { label: 'Nhật thay chương trình thực tập sinh (VOH)', url: 'https://voh.com.vn/the-gioi/nhat-ban-bat-dau-thay-the-chuong-trinh-thuc-tap-sinh-nuoc-ngoai-ngoai-570973.html' },
    ],
  },
  {
    id: 'combo',
    icon: '🔀',
    name: { en: 'Work-study & sponsored programmes', vi: 'Vừa học vừa làm – học bổng doanh nghiệp' },
    what: { en: 'Programmes where a company or foundation pays for your training (sometimes food and housing) and you work with them while or after you learn.', vi: 'Chương trình doanh nghiệp hoặc quỹ tài trợ chi phí đào tạo (có khi cả ăn ở), em vừa học vừa làm hoặc làm việc cho họ sau khi học.' },
    time: { en: '1–4 years, depending on the programme', vi: '1–4 năm tuỳ chương trình' },
    cost: { en: 'Little or none — but read the contract: how many years you must work, and what happens if you leave early.', vi: 'Ít hoặc không mất phí — nhưng phải đọc kỹ hợp đồng: phải làm bao nhiêu năm, nghỉ sớm thì sao.' },
    pros: [
      { en: 'Removes the money barrier', vi: 'Gỡ được rào cản tài chính' },
      { en: 'Learning by doing, with income', vi: 'Học đi đôi với hành, có thu nhập' },
      { en: 'A job is often waiting at the end', vi: 'Thường có việc làm chờ sẵn khi học xong' },
    ],
    cons: [
      { en: 'You commit to one employer or field for a while', vi: 'Phải gắn bó với một doanh nghiệp hoặc một ngành một thời gian' },
      { en: 'Quality varies — ask graduates of the programme', vi: 'Chất lượng mỗi nơi khác nhau — hãy hỏi người đã học xong' },
    ],
    fits: { en: 'You want to study but money is the main obstacle, and you are ready to commit.', vi: 'Em muốn học nhưng tài chính là trở ngại chính, và em sẵn sàng cam kết.' },
    firstStep: { en: 'Write down every condition of a programme you heard about, then ask a trusted adult to read the contract with you.', vi: 'Ghi lại mọi điều kiện của chương trình em đã nghe, rồi nhờ một người lớn tin cậy đọc hợp đồng cùng em.' },
    score: { earn: 2, cost: 3, degree: 1, home: 1, abroad: 1, stable: 2 },
  },
];

/** Schools to explore in Central Vietnam (verify each school’s 2027 admission plan). */
export const schools: { name: string; where: T; majors: T; url: string }[] = [
  {
    name: 'Trường Đại học Phạm Văn Đồng',
    where: { en: 'Quảng Ngãi', vi: 'Quảng Ngãi' },
    majors: { en: 'Teacher education: primary, maths, physics, English, natural sciences…', vi: 'Sư phạm: Tiểu học, Toán, Vật lý, Tiếng Anh, Khoa học tự nhiên…' },
    url: 'https://diemthi.tuyensinh247.com/thong-tin-dai-hoc-pham-van-dong-DPQ.html',
  },
  {
    name: 'Trường Đại học Ngoại ngữ – ĐH Đà Nẵng',
    where: { en: 'Đà Nẵng', vi: 'Đà Nẵng' },
    majors: { en: 'Korean language, Japanese language, English teacher education…', vi: 'Ngôn ngữ Hàn Quốc, Ngôn ngữ Nhật, Sư phạm tiếng Anh…' },
    url: 'https://diemthi.tuyensinh247.com/de-an-tuyen-sinh/dai-hoc-ngoai-ngu-dai-hoc-da-nang-DDF.html',
  },
];

export const scamFlags: T[] = [
  { en: 'They ask for money before you have a contract, or only take cash.', vi: 'Đòi tiền trước khi có hợp đồng, hoặc chỉ nhận tiền mặt.' },
  { en: 'They promise "guaranteed" visas or very high salaries with no language test.', vi: 'Hứa "bao đậu visa" hoặc lương rất cao mà không cần thi tiếng.' },
  { en: 'The company is not on the licensed list at dolab.gov.vn.', vi: 'Công ty không có tên trong danh sách được cấp phép trên dolab.gov.vn.' },
  { en: 'They recruit only through Facebook or Zalo, with no office you can visit.', vi: 'Chỉ tuyển qua Facebook, Zalo, không có văn phòng để đến tận nơi.' },
  { en: 'They rush you: "only 2 places left, pay today".', vi: 'Hối thúc: "chỉ còn 2 suất, nộp tiền ngay hôm nay".' },
];

export const nextSteps: { id: string; text: T }[] = [
  { id: 'holland', text: { en: 'Show my Holland result to a teacher or family member and ask: “Does this sound like me?”', vi: 'Cho thầy cô hoặc người nhà xem kết quả Holland và hỏi: “Có giống con/em không?”' } },
  { id: 'majors', text: { en: 'Pick 3 majors or jobs to research (what they do every day, salary, where to study).', vi: 'Chọn 3 ngành/nghề để tìm hiểu (làm gì mỗi ngày, thu nhập, học ở đâu).' } },
  { id: 'talk', text: { en: 'Talk to one person who works in a job I am curious about.', vi: 'Nói chuyện với một người đang làm nghề mình tò mò.' } },
  { id: 'lang', text: { en: 'Study a foreign language 15 minutes a day (English, Korean…).', vi: 'Học ngoại ngữ 15 phút mỗi ngày (tiếng Anh, tiếng Hàn…).' } },
  { id: 'speak', text: { en: 'Speak up once a week in class or a club — practising confidence.', vi: 'Mỗi tuần phát biểu ít nhất một lần ở lớp hoặc CLB — luyện sự tự tin.' } },
  { id: 'family', text: { en: 'Share what I learned today with my family.', vi: 'Kể cho gia đình nghe những gì mình học được hôm nay.' } },
];

export const timeline: { when: T; what: T }[] = [
  { when: { en: 'Oct – Dec 2026', vi: 'Tháng 10 – 12/2026' }, what: { en: 'Explore: Holland test, research majors and paths, talk to people. Keep grades strong — transcripts (học bạ) count.', vi: 'Khám phá: làm Holland, tìm hiểu ngành và con đường, hỏi người trong nghề. Giữ điểm học bạ tốt — học bạ được dùng để xét tuyển.' } },
  { when: { en: 'Jan – Apr 2027', vi: 'Tháng 1 – 4/2027' }, what: { en: 'Narrow to 2–3 options. Aptitude tests (ĐGNL) and military/police preliminary selection usually happen in spring.', vi: 'Thu hẹp còn 2–3 lựa chọn. Các kỳ thi đánh giá năng lực và sơ tuyển quân đội, công an thường diễn ra vào mùa xuân.' } },
  { when: { en: '11–12 June 2027 (expected)', vi: '11–12/6/2027 (dự kiến)' }, what: { en: 'National high-school graduation exam.', vi: 'Kỳ thi tốt nghiệp THPT.' } },
  { when: { en: 'Jul – Sep 2027', vi: 'Tháng 7 – 9/2027' }, what: { en: 'Register university/college choices, or start language school / job preparation.', vi: 'Đăng ký nguyện vọng đại học, cao đẳng, hoặc bắt đầu học tiếng / chuẩn bị đi làm.' } },
];
