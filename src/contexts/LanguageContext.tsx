import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "el";

type Translations = Record<string, Record<Lang, string>>;

export const t: Translations = {
  // Navbar
  "nav.home": { en: "HOME", el: "ΑΡΧΙΚΗ" },
  "nav.about": { en: "ABOUT", el: "ΣΧΕΤΙΚΑ" },
  "nav.academic": { en: "ACADEMIC WORK", el: "ΑΚΑΔΗΜΑΪΚΟ ΕΡΓΟ" },
  "nav.apps": { en: "EDU APPS", el: "ΕΚΠ. ΕΦΑΡΜΟΓΕΣ" },
  "nav.portal": { en: "STUDENT PORTAL", el: "ΦΟΙΤΗΤΙΚΗ ΠΥΛΗ" },
  "nav.media": { en: "MEDIA", el: "ΥΛΙΚΟ" },

  // Media page
  "media.label": { en: "MEDIA LIBRARY", el: "ΒΙΒΛΙΟΘΗΚΗ ΥΛΙΚΟΥ" },
  "media.title": { en: "Lessons & Media", el: "Μαθήματα & Υλικό" },
  "media.desc": {
    en: "Import a JSON file exported from My Notebook. Each chapter becomes a lesson with its audio, slides, PDFs, notes, and embedded content. Your library is saved locally in this browser.",
    el: "Εισαγάγετε ένα αρχείο JSON από το My Notebook. Κάθε κεφάλαιο γίνεται μάθημα με ήχο, διαφάνειες, PDF, σημειώσεις και ενσωματωμένο περιεχόμενο. Η βιβλιοθήκη αποθηκεύεται τοπικά στον φυλλομετρητή.",
  },
  "media.drop": { en: "Drop notebook JSON here", el: "Αφήστε το JSON εδώ" },
  "media.hint": { en: "or click to select a file", el: "ή πατήστε για επιλογή αρχείου" },
  "media.importBtn": { en: "IMPORT JSON", el: "ΕΙΣΑΓΩΓΗ JSON" },
  "media.export": { en: "EXPORT", el: "ΕΞΑΓΩΓΗ" },
  "media.clear": { en: "Clear all", el: "Διαγραφή όλων" },
  "media.lessons": { en: "lessons", el: "μαθήματα" },
  "media.items": { en: "items", el: "στοιχεία" },
  "media.empty": { en: "Your library is empty", el: "Η βιβλιοθήκη είναι κενή" },
  "media.emptyHint": { en: "Import a notebook JSON to begin", el: "Εισαγάγετε ένα JSON για να ξεκινήσετε" },
  "media.tab.audio": { en: "Audio", el: "Ήχος" },
  "media.tab.slides": { en: "Slides", el: "Διαφάνειες" },
  "media.tab.pdf": { en: "PDF", el: "PDF" },
  "media.tab.text": { en: "Notes", el: "Σημειώσεις" },
  "media.open": { en: "OPEN", el: "ΑΝΟΙΓΜΑ" },
  "media.download": { en: "DOWNLOAD", el: "ΛΗΨΗ" },
  "media.read": { en: "READ", el: "ΑΝΑΓΝΩΣΗ" },
  "nav.navigation": { en: "Navigation", el: "Πλοήγηση" },

  // Hero
  "hero.subtitle": {
    en: "Post-Doctoral Researcher · Aristotle University of Thessaloniki.\nPatristics, Byzantine History & Digital Pedagogy.",
    el: "Μεταδιδακτορικός Ερευνητής · Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης.\nΠατερική Θεολογία, Βυζαντινή Ιστορία & Ψηφιακή Παιδαγωγική.",
  },

  // Marquee
  "marquee.text": { en: "EXPLORE MORE", el: "ΕΞΕΡΕΥΝΗΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ" },

  // Service Cards
  "service.about.title": { en: "About Me", el: "Σχετικά με εμένα" },
  "service.about.sub": { en: "Researcher & educator profile", el: "Προφίλ ερευνητή & εκπαιδευτικού" },
  "service.academic.title": { en: "Academic Work", el: "Ακαδημαϊκό Έργο" },
  "service.academic.sub": { en: "Publications & research", el: "Δημοσιεύσεις & έρευνα" },
  "service.apps.title": { en: "Educational Apps", el: "Εκπαιδευτικές Εφαρμογές" },
  "service.apps.sub": { en: "Six digital learning tools", el: "Έξι ψηφιακά εργαλεία μάθησης" },

  // Featured
  "featured.label": { en: "01", el: "01" },
  "featured.title": { en: "The Intellectual Ledger", el: "Το Πνευματικό Αρχείο" },
  "featured.desc": {
    en: "Research spanning Patristics, Political Theology, and Digital Pedagogy — bridging the scholarship of the Church Fathers with innovative educational technology.",
    el: "Έρευνα στην Πατερική Θεολογία, Πολιτική Θεολογία και Ψηφιακή Παιδαγωγική — γεφυρώνοντας τη μελέτη των Πατέρων της Εκκλησίας με καινοτόμα εκπαιδευτική τεχνολογία.",
  },
  "featured.i1": { en: "→ Patristics & Church Fathers", el: "→ Πατερική & Πατέρες της Εκκλησίας" },
  "featured.i2": { en: "→ Political Philosophy & Theology", el: "→ Πολιτική Φιλοσοφία & Θεολογία" },
  "featured.i3": { en: "→ Byzantine History", el: "→ Βυζαντινή Ιστορία" },
  "featured.i4": { en: "→ Digital Pedagogy", el: "→ Ψηφιακή Παιδαγωγική" },

  // Testimonial / Highlights
  "highlights.label": { en: "RECENT HIGHLIGHTS", el: "ΠΡΌΣΦΑΤΕΣ ΔΗΜΟΣΙΕΥΣΕΙΣ" },
  "highlights.viewAll": { en: "VIEW ALL ON ACADEMIA.EDU →", el: "ΔΕΙΤΕ ΟΛΑ ΣΤΟ ACADEMIA.EDU →" },

  // About
  "about.label": { en: "ABOUT ME", el: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ" },
  "about.position": {
    en: "POST-DOCTORAL RESEARCHER · ARISTOTLE UNIVERSITY OF THESSALONIKI",
    el: "ΜΕΤΑΔΙΔΑΚΤΟΡΙΚΟΣ ΕΡΕΥΝΗΤΗΣ · ΑΡΙΣΤΟΤΕΛΕΙΟ ΠΑΝΕΠΙΣΤΗΜΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ",
  },
  "about.bio": {
    en: "Theologian and researcher in Patristics and Byzantine History, specializing in the political theology of the Great Fathers of the 4th and 5th centuries. Author of works on John Chrysostom, Cyril of Alexandria, and Gregory the Theologian, with a parallel dedication to developing innovative digital tools for the educational classroom.",
    el: "Θεολόγος και ερευνητής στην Πατερική Θεολογία και τη Βυζαντινή Ιστορία, με ειδίκευση στην πολιτική θεολογία των Μεγάλων Πατέρων του 4ου και 5ου αιώνα. Συγγραφέας έργων για τον Ιωάννη Χρυσόστομο, τον Κύριλλο Αλεξανδρείας και τον Γρηγόριο τον Θεολόγο, με παράλληλη αφοσίωση στην ανάπτυξη καινοτόμων ψηφιακών εργαλείων για τη σχολική τάξη.",
  },
  "about.teaching": { en: "TEACHING & RESEARCH", el: "ΔΙΔΑΣΚΑΛΙΑ & ΕΡΕΥΝΑ" },
  "about.school": {
    en: "School of Theology, Aristotle University of Thessaloniki",
    el: "Θεολογική Σχολή, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης",
  },
  "about.interests": { en: "RESEARCH INTERESTS", el: "ΕΡΕΥΝΗΤΙΚΑ ΕΝΔΙΑΦΕΡΟΝΤΑ" },
  "about.followers": { en: "Followers", el: "Ακόλουθοι" },
  "about.views": { en: "Public Views", el: "Προβολές" },
  "about.following": { en: "Following", el: "Ακολουθεί" },

  // Academic Work
  "academic.label": { en: "ACADEMIC WORK", el: "ΑΚΑΔΗΜΑΪΚΟ ΕΡΓΟ" },
  "academic.title": { en: "Academic Work &\nPublications", el: "Ακαδημαϊκό Έργο &\nΔημοσιεύσεις" },
  "academic.desc": {
    en: "Research and publications in Patristics, Byzantine History, and Political Theology.",
    el: "Έρευνα και δημοσιεύσεις στην Πατερική Θεολογία, τη Βυζαντινή Ιστορία και την Πολιτική Θεολογία.",
  },

  // Educational Apps
  "apps.label": { en: "EDUCATIONAL APPS", el: "ΕΚΠΑΙΔΕΥΤΙΚΕΣ ΕΦΑΡΜΟΓΕΣ" },
  "apps.title": { en: "Educational\nApplications", el: "Εκπαιδευτικές\nΕφαρμογές" },
  "apps.desc": {
    en: "A suite of six interconnected web-based tools for teaching Theology, Byzantine History, and Patristic Literature. Hosted on GitHub Pages, designed for classroom preparation and student engagement.",
    el: "Μια σουίτα έξι διασυνδεδεμένων διαδικτυακών εργαλείων για τη διδασκαλία Θεολογίας, Βυζαντινής Ιστορίας και Πατερικής Γραμματείας. Φιλοξενούνται στο GitHub Pages, σχεδιασμένα για την προετοιμασία μαθημάτων.",
  },
  "apps.launch": { en: "LAUNCH APP", el: "ΕΚΚΙΝΗΣΗ" },
  "apps.demo": { en: "Demo Video", el: "Βίντεο Επίδειξης" },

  // Student Portal
  "portal.label": { en: "STUDENT PORTAL", el: "ΦΟΙΤΗΤΙΚΗ ΠΥΛΗ" },
  "portal.title": { en: "Student\nResources", el: "Φοιτητικοί\nΠόροι" },
  "portal.desc": {
    en: "Access all course materials, assignments, and academic resources in one place.",
    el: "Πρόσβαση σε όλο το εκπαιδευτικό υλικό, τις εργασίες και τους ακαδημαϊκούς πόρους σε ένα μέρος.",
  },
  "portal.announcements": { en: "Announcements", el: "Ανακοινώσεις" },
  "portal.r1.title": { en: "Course Materials", el: "Υλικό Μαθημάτων" },
  "portal.r1.desc": { en: "Lecture slides, reading lists, and supplementary resources for all courses.", el: "Διαφάνειες, λίστες ανάγνωσης και συμπληρωματικό υλικό." },
  "portal.r2.title": { en: "Assignments", el: "Εργασίες" },
  "portal.r2.desc": { en: "Current assignments, deadlines, and submission guidelines.", el: "Τρέχουσες εργασίες, προθεσμίες και οδηγίες υποβολής." },
  "portal.r3.title": { en: "Office Hours", el: "Ώρες Γραφείου" },
  "portal.r3.desc": { en: "Schedule a meeting or join virtual office hours for academic support.", el: "Κλείστε ραντεβού ή ελάτε σε εικονικές ώρες γραφείου." },
  "portal.r4.title": { en: "Discussion Forum", el: "Φόρουμ Συζήτησης" },
  "portal.r4.desc": { en: "Engage with peers and ask questions about course content.", el: "Συζητήστε με συμφοιτητές και κάντε ερωτήσεις." },
  "portal.r5.title": { en: "Grades & Feedback", el: "Βαθμοί & Σχόλια" },
  "portal.r5.desc": { en: "View your grades and detailed feedback on submitted work.", el: "Δείτε τους βαθμούς σας και αναλυτικά σχόλια." },
  "portal.r6.title": { en: "Research Opportunities", el: "Ερευνητικές Ευκαιρίες" },
  "portal.r6.desc": { en: "Open positions for research assistants and collaborative projects.", el: "Ανοιχτές θέσεις για βοηθούς ερευνητές." },

  // Footer
  "footer.copy": { en: "© MMXXVI DIMITRIOS PORPATONELIS · ARISTOTLE UNIVERSITY OF THESSALONIKI", el: "© MMXXVI ΔΗΜΗΤΡΙΟΣ ΠΟΡΠΑΤΟΝΕΛΗΣ · ΑΡΙΣΤΟΤΕΛΕΙΟ ΠΑΝΕΠΙΣΤΗΜΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ" },

  // Settings
  "settings.title": { en: "Settings", el: "Ρυθμίσεις" },
  "settings.images": { en: "Image Settings", el: "Ρυθμίσεις Εικόνων" },
  "settings.url": { en: "Image URL (leave empty for default)", el: "URL εικόνας (κενό για προεπιλογή)" },
  "settings.opacity": { en: "Opacity", el: "Αδιαφάνεια" },
  "settings.reset": { en: "Reset All", el: "Επαναφορά Όλων" },
  "settings.language": { en: "Language", el: "Γλώσσα" },

  // Interest tags (About page)
  "interest.patristics": { en: "Patristics", el: "Πατερική" },
  "interest.theology": { en: "Theology", el: "Θεολογία" },
  "interest.political": { en: "Political Philosophy", el: "Πολιτική Φιλοσοφία" },
  "interest.church": { en: "Church & State", el: "Εκκλησία & Κράτος" },
  "interest.early": { en: "Early Church", el: "Αρχαία Εκκλησία" },
  "interest.byzantine": { en: "Byzantine History", el: "Βυζαντινή Ιστορία" },
  "interest.digital": { en: "Digital Pedagogy", el: "Ψηφιακή Παιδαγωγική" },
  "interest.comparative": { en: "Comparative Religion", el: "Συγκριτική Θρησκειολογία" },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  tr: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("site-lang");
    return (saved === "el" ? "el" : "en") as Lang;
  });

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("site-lang", l);
  };

  const tr = (key: string) => t[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
