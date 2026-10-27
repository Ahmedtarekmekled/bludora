export const site = {
  name: "Bludora",
  url: "https://bludora.vercel.app",
  email: "bludorasoftware@outlook.com",
  phone: "+90 554 186 99 05",
  whatsapp: "905541869905",
  instagram: "https://www.instagram.com/bludorasoftware/",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailLink = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
