/**
 * Bilingual data for the "Learning how to learn" session.
 * Every text field is { en, vi } so the two languages stay side by side when editing.
 */
export type T = { en: string; vi: string };

export const studyHabits: { id: string; label: T; passive?: boolean }[] = [
  { id: 'reread', label: { en: 'Re-read my notes', vi: 'Đọc lại vở' }, passive: true },
  { id: 'highlight', label: { en: 'Highlight the textbook', vi: 'Tô highlight sách' }, passive: true },
  { id: 'practice', label: { en: 'Do practice tests', vi: 'Làm đề luyện' } },
  { id: 'teach', label: { en: 'Explain it to a friend', vi: 'Giảng lại cho bạn' } },
  { id: 'cram', label: { en: 'Study all night before the test', vi: 'Thức trắng đêm trước khi thi' }, passive: true },
  { id: 'copy', label: { en: 'Copy the lesson out again', vi: 'Chép lại bài' }, passive: true },
];

/** 60-second reading experiment: an unfamiliar topic with 8 concrete facts. */
export const recallPassage: { text: T; keywords: { en: string[]; vi: string[] }[] } = {
  text: {
    en: 'The octopus is one of the smartest animals in the ocean. It has three hearts: two pump blood to the gills and one pumps it to the rest of the body. Its blood is blue because it uses copper instead of iron to carry oxygen. An octopus has about 500 million neurons, and two-thirds of them are in its eight arms, so each arm can taste and touch on its own. It can change colour in less than a second to hide from predators. Most octopuses live only one to two years. When threatened, it squirts black ink and escapes by jet propulsion.',
    vi: 'Bạch tuộc là một trong những loài vật thông minh nhất đại dương. Nó có ba trái tim: hai tim bơm máu đến mang và một tim bơm máu đi khắp cơ thể. Máu của nó màu xanh lam vì dùng đồng thay cho sắt để vận chuyển oxy. Bạch tuộc có khoảng 500 triệu nơ-ron, và hai phần ba số đó nằm ở tám xúc tu, nên mỗi xúc tu có thể tự nếm và cảm nhận. Nó có thể đổi màu trong chưa đầy một giây để trốn kẻ săn mồi. Phần lớn bạch tuộc chỉ sống một đến hai năm. Khi bị đe doạ, nó phun mực đen và thoát thân bằng cách phụt nước.',
  },
  // Each fact counts as remembered if ANY of its keywords appears in the answer.
  keywords: [
    { en: ['three heart', '3 heart'], vi: ['ba tim', '3 tim', 'ba trái tim', '3 trái tim'] },
    { en: ['blue'], vi: ['xanh'] },
    { en: ['copper'], vi: ['đồng'] },
    { en: ['500', 'million neuron', 'neuron'], vi: ['500', 'nơ-ron', 'noron', 'nơron'] },
    { en: ['arm', 'two-thirds', 'two thirds'], vi: ['xúc tu', 'hai phần ba', '2/3'] },
    { en: ['colour', 'color', 'second'], vi: ['đổi màu', 'màu', 'một giây'] },
    { en: ['year', 'two years', '1-2', '1–2'], vi: ['năm', '1-2', '1–2'] },
    { en: ['ink', 'jet'], vi: ['mực', 'phụt nước'] },
  ],
};

export const flashcards: { q: T; a: T }[] = [
  {
    q: { en: 'What are the two modes of thinking?', vi: 'Hai chế độ tư duy là gì?' },
    a: { en: 'Focused mode and diffuse mode.', vi: 'Chế độ tập trung và chế độ lan toả.' },
  },
  {
    q: { en: 'You are stuck on a hard problem for 30 minutes. What should you do?', vi: 'Em bí một bài khó 30 phút rồi. Nên làm gì?' },
    a: {
      en: 'Switch modes: take a short walk or a break, then come back. Diffuse mode keeps working in the background.',
      vi: 'Đổi chế độ: đi dạo hoặc nghỉ ngắn, rồi quay lại. Chế độ lan toả vẫn làm việc ở phía sau.',
    },
  },
  {
    q: { en: 'Why does re-reading feel effective even when it is not?', vi: 'Vì sao đọc lại có vẻ hiệu quả dù thật ra không?' },
    a: {
      en: 'Because the page looks familiar. Recognising is much easier than recalling. This is the illusion of competence.',
      vi: 'Vì trang sách trông quen. Nhận ra dễ hơn nhiều so với tự nhớ lại. Đó là ảo tưởng hiểu bài.',
    },
  },
  {
    q: { en: 'What is active recall?', vi: 'Active recall (tự nhớ lại) là gì?' },
    a: {
      en: 'Closing the book and pulling the information out of your own head, then checking.',
      vi: 'Gập sách lại, tự lấy thông tin ra từ trí nhớ của mình, rồi mới kiểm tra.',
    },
  },
  {
    q: { en: 'Can scrolling your phone count as diffuse mode?', vi: 'Lướt điện thoại có được tính là chế độ lan toả không?' },
    a: {
      en: 'No. Your attention is still captured. Walk, shower, draw or rest instead.',
      vi: 'Không. Sự chú ý của em vẫn bị cuốn vào điện thoại. Hãy đi dạo, tắm, vẽ vời hoặc nghỉ ngơi.',
    },
  },
  {
    q: { en: 'Name three ways to practise active recall.', vi: 'Kể ba cách luyện tự nhớ lại.' },
    a: {
      en: 'Flashcards, practice tests, teaching a friend, writing a summary on a blank page.',
      vi: 'Flashcard, làm đề, giảng lại cho bạn, viết tóm tắt ra giấy trắng.',
    },
  },
];

export const quiz: { q: T; answer: 'myth' | 'fact'; why: T }[] = [
  {
    q: { en: 'Re-reading your notes three times is the best way to prepare for a test.', vi: 'Đọc lại vở ba lần là cách ôn thi tốt nhất.' },
    answer: 'myth',
    why: { en: 'Re-reading creates familiarity, not memory. Test yourself instead.', vi: 'Đọc lại chỉ tạo cảm giác quen. Hãy tự kiểm tra.' },
  },
  {
    q: { en: "Taking a walk when you're stuck can help you solve the problem.", vi: 'Đi dạo khi bí bài có thể giúp em giải được bài.' },
    answer: 'fact',
    why: { en: 'Diffuse mode makes new connections while you rest.', vi: 'Chế độ lan toả tạo kết nối mới trong lúc em nghỉ.' },
  },
  {
    q: {
      en: 'Studying 3 hours the night before is better than 20 minutes a day for 9 days.',
      vi: 'Học 3 tiếng đêm trước khi thi tốt hơn học 20 phút mỗi ngày trong 9 ngày.',
    },
    answer: 'myth',
    why: { en: 'Same total time, but spaced practice lasts much longer.', vi: 'Cùng tổng thời gian, nhưng ôn ngắt quãng nhớ lâu hơn nhiều.' },
  },
  {
    q: { en: 'Sleep helps your brain store what you learned.', vi: 'Giấc ngủ giúp não lưu lại những gì em đã học.' },
    answer: 'fact',
    why: { en: 'The brain strengthens new connections and clears out waste during sleep.', vi: 'Khi ngủ, não củng cố kết nối mới và dọn dẹp chất thải.' },
  },
  {
    q: { en: 'To beat procrastination, focus on finishing the whole task.', vi: 'Để hết trì hoãn, hãy tập trung vào việc làm xong toàn bộ.' },
    answer: 'myth',
    why: { en: 'Focus on the process: 25 focused minutes, not "finish chapter 3".', vi: 'Tập trung vào quá trình: 25 phút tập trung, không phải "xong chương 3".' },
  },
  {
    q: { en: 'Highlighting a lot means you understand a lot.', vi: 'Tô highlight nhiều nghĩa là hiểu nhiều.' },
    answer: 'myth',
    why: { en: 'Highlighting is passive. Summarise from memory instead.', vi: 'Highlight là học thụ động. Hãy tóm tắt bằng trí nhớ.' },
  },
  {
    q: { en: 'Mixing different problem types in one session helps you learn.', vi: 'Trộn nhiều dạng bài trong một buổi giúp học tốt hơn.' },
    answer: 'fact',
    why: { en: 'Interleaving teaches you when to use each method, not just how.', vi: 'Trộn dạng bài giúp em biết khi nào dùng cách nào, không chỉ làm thế nào.' },
  },
  {
    q: { en: 'Some people are just "not good at math" and can\'t improve.', vi: 'Có người sinh ra đã "dốt toán" và không thể tiến bộ.' },
    answer: 'myth',
    why: {
      en: 'The brain changes with practice. Barbara Oakley struggled with maths at school and later became an engineering professor.',
      vi: 'Não thay đổi nhờ luyện tập. Barbara Oakley từng rất yếu toán ở trường và sau này trở thành giáo sư kỹ thuật.',
    },
  },
];

export const techniques: { id: string; label: T }[] = [
  { id: 'pomodoro', label: { en: 'Pomodoro (25 + 5)', vi: 'Pomodoro (25 + 5)' } },
  { id: 'recall', label: { en: 'Active recall after each lesson', vi: 'Tự nhớ lại sau mỗi bài' } },
  { id: 'spaced', label: { en: 'Spaced review schedule', vi: 'Lịch ôn ngắt quãng' } },
  { id: 'walk', label: { en: 'Walk when stuck', vi: 'Đi dạo khi bí bài' } },
  { id: 'sleep', label: { en: 'Sleep before 23:00', vi: 'Ngủ trước 23:00' } },
  { id: 'mix', label: { en: 'Mix problem types', vi: 'Trộn dạng bài' } },
];

export const examTips: { title: T; body: T; icon: string }[] = [
  {
    icon: 'jump',
    title: { en: 'Hard start, jump to easy', vi: 'Bắt đầu câu khó, kẹt thì nhảy sang câu dễ' },
    body: {
      en: 'Glance at a hard question first. If you are stuck for 1–2 minutes, jump to easy ones. Your diffuse mode keeps working on the hard one in the background.',
      vi: 'Nhìn qua một câu khó trước. Nếu bí 1–2 phút, chuyển sang câu dễ. Chế độ lan toả vẫn tiếp tục xử lý câu khó ở phía sau.',
    },
  },
  {
    icon: 'heart',
    title: { en: 'Reframe the stress', vi: 'Nhìn lại cảm giác căng thẳng' },
    body: {
      en: 'A racing heart before an exam is your body getting ready. Tell yourself "I\'m excited", not "I\'m scared". Take a few slow, deep belly breaths.',
      vi: 'Tim đập nhanh trước giờ thi là cơ thể đang sẵn sàng. Hãy nói "mình đang hào hứng" thay vì "mình sợ". Hít thở chậm và sâu bằng bụng vài lần.',
    },
  },
  {
    icon: 'eye',
    title: { en: 'Check with fresh eyes', vi: 'Kiểm tra lại bằng con mắt mới' },
    body: {
      en: 'When you finish, look away for a moment, then check your answers in a different order from the one you used to solve them.',
      vi: 'Làm xong, hãy nhìn ra chỗ khác một chút, rồi kiểm tra đáp án theo thứ tự khác với lúc làm bài.',
    },
  },
];
