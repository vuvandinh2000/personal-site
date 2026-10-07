export const languages = {
  en: 'English',
  vi: 'Tiếng Việt',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** Shared UI strings. Add a key here, then use t('key') in any component. */
export const ui = {
  en: {
    'site.title': 'Dinh Vu',
    'site.tagline': 'Notes on software, learning and growing — written in English, with Vietnamese translations.',
    'nav.home': 'Home',
    'nav.blog': 'Writing',
    'nav.mentoring': 'Mentoring',
    'nav.tools': 'Tools',
    'lang.switch': 'Tiếng Việt',
    'lang.switchShort': 'VI',
    'home.hello': "Hi, I'm Dinh.",
    'home.intro': 'I build software for a living. This is where I share what I learn — about code, about learning itself, and about the people I get to mentor along the way.',
    'home.latest': 'Latest writing',
    'home.series': 'Series',
    'home.allPosts': 'All posts →',
    'blog.title': 'Writing',
    'blog.description': 'Everything I have written, newest first.',
    'series.mentoring.title': 'Mentoring Ngọc · HLC',
    'series.mentoring.description': 'Over three sessions in autumn 2026, I mentor Ngọc, a grade-12 student, through the Happy Leadership Community (HLC). Here is what we talk about.',
    'series.sessions': 'Our sessions',
    'series.session': 'Session',
    'post.minRead': 'min read',
    'post.translation': 'Đọc bằng tiếng Việt',
    'post.series': 'Part of the series',
    'post.toc': 'On this page',
    'tools.title': 'Tools',
    'tools.pomodoro': 'Pomodoro timer',
    'tools.pomodoroDesc': '25 minutes of focus, 5 minutes of rest.',
    'footer.made': 'Built with Astro. Content © Dinh Vu.',
    // interactive widgets
    'ui.start': 'Start',
    'ui.pause': 'Pause',
    'ui.reset': 'Reset',
    'ui.next': 'Next',
    'ui.back': 'Back',
    'ui.check': 'Check',
    'ui.tryAgain': 'Try again',
    'ui.flip': 'Tap to flip',
    'ui.knewIt': 'I knew it',
    'ui.notYet': 'Not yet',
    'ui.myth': 'Myth',
    'ui.fact': 'Fact',
    'ui.correct': 'Correct!',
    'ui.wrong': 'Not quite.',
    'ui.score': 'Your score',
    'ui.seconds': 's',
    'ui.focus': 'Focus',
    'ui.break': 'Break',
    'ui.rounds': 'Rounds done',
    'ui.download': 'Download',
    'ui.addReview': 'Add a review',
    'ui.clearReviews': 'Clear reviews',
    'ui.day': 'Day',
    'ui.remembered': 'Remembered',
    'ui.illustration': 'Illustration, not real data',
    'ui.saved': 'Saved on this device',
    'ui.watch': 'Watch video',
  },
  vi: {
    'site.title': 'Dinh Vu',
    'site.tagline': 'Ghi chép về phần mềm, việc học và trưởng thành — viết bằng tiếng Anh, có bản tiếng Việt.',
    'nav.home': 'Trang chủ',
    'nav.blog': 'Bài viết',
    'nav.mentoring': 'Mentoring',
    'nav.tools': 'Công cụ',
    'lang.switch': 'English',
    'lang.switchShort': 'EN',
    'home.hello': 'Chào bạn, mình là Định.',
    'home.intro': 'Mình làm phần mềm. Đây là nơi mình chia sẻ những điều học được — về code, về chính việc học, và về những bạn mình có dịp đồng hành.',
    'home.latest': 'Bài viết mới',
    'home.series': 'Chuỗi bài',
    'home.allPosts': 'Tất cả bài viết →',
    'blog.title': 'Bài viết',
    'blog.description': 'Tất cả bài viết, mới nhất trước.',
    'series.mentoring.title': 'Đồng hành cùng Ngọc · HLC',
    'series.mentoring.description': 'Mùa thu năm 2026, mình có cơ hội làm mentor cho Ngọc, một bạn học sinh lớp 12 thuộc cộng đồng HLC, trong 3 buổi gặp. Đây là nơi mình ghi lại những gì tụi mình trao đổi.',
    'series.sessions': 'Các buổi gặp',
    'series.session': 'Buổi',
    'post.minRead': 'phút đọc',
    'post.translation': 'Read in English',
    'post.series': 'Thuộc chuỗi bài',
    'post.toc': 'Trong bài này',
    'tools.title': 'Công cụ',
    'tools.pomodoro': 'Đồng hồ Pomodoro',
    'tools.pomodoroDesc': '25 phút tập trung, 5 phút nghỉ.',
    'footer.made': 'Xây dựng bằng Astro. Nội dung © Dinh Vu.',
    'ui.start': 'Bắt đầu',
    'ui.pause': 'Tạm dừng',
    'ui.reset': 'Làm lại',
    'ui.next': 'Tiếp',
    'ui.back': 'Quay lại',
    'ui.check': 'Kiểm tra',
    'ui.tryAgain': 'Làm lại',
    'ui.flip': 'Chạm để lật',
    'ui.knewIt': 'Em nhớ rồi',
    'ui.notYet': 'Chưa nhớ',
    'ui.myth': 'Sai',
    'ui.fact': 'Đúng',
    'ui.correct': 'Chính xác!',
    'ui.wrong': 'Chưa đúng.',
    'ui.score': 'Điểm của em',
    'ui.seconds': 'giây',
    'ui.focus': 'Tập trung',
    'ui.break': 'Nghỉ',
    'ui.rounds': 'Số vòng đã xong',
    'ui.download': 'Tải về',
    'ui.addReview': 'Thêm một lần ôn',
    'ui.clearReviews': 'Xoá các lần ôn',
    'ui.day': 'Ngày',
    'ui.remembered': 'Còn nhớ',
    'ui.illustration': 'Minh hoạ, không phải số liệu thật',
    'ui.saved': 'Đã lưu trên thiết bị này',
    'ui.watch': 'Xem video',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

export function isLang(x: string | undefined): x is Lang {
  return !!x && x in languages;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'vi' : 'en';
}

/** Build a locale-prefixed path: localePath('vi', '/blog') -> '/vi/blog/' */
export function localePath(lang: Lang, path = '/') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Same page in the other language: swaps the first path segment. */
export function switchLangPath(pathname: string, to: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLang(parts[0])) parts[0] = to;
  else parts.unshift(to);
  return '/' + parts.join('/') + '/';
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
