/** Social profiles shown on the home page and in the footer. */
export const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vuvandinh/', icon: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.36h-4v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84h-4v-11Z' },
  { name: 'Facebook', url: 'https://www.facebook.com/vdinh', icon: 'M14 8h3V4h-3c-2.76 0-4.5 1.79-4.5 4.6V11H7v4h2.5v7h4v-7h2.9l.6-4h-3.5V8.9c0-.6.4-.9 1-.9Z' },
  { name: 'Instagram', url: 'https://www.instagram.com/dinhteiii', icon: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z' },
];

/** Languages I speak, shown on the home page. */
export const spokenLanguages = [
  { en: 'English', vi: 'Tiếng Anh', level: { en: 'fluent', vi: 'thành thạo' } },
  { en: 'Japanese', vi: 'Tiếng Nhật', level: { en: 'N4', vi: 'N4' } },
  { en: 'Chinese', vi: 'Tiếng Trung' },
] as { en: string; vi: string; level?: { en: string; vi: string } }[];
