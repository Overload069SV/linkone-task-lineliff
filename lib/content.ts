import type { LucideIcon } from "lucide-react";
import {
  FolderKanban,
  ListTodo,
  UserCheck,
  GanttChartSquare,
  Inbox,
  MapPin,
  FolderUp,
  MessagesSquare,
  BellRing,
  BarChart3,
  MessageSquareOff,
  UserX,
  Search,
  EyeOff,
  CalendarX,
  Network,
  Briefcase,
  Settings2,
  Handshake,
  Fingerprint,
  Plane,
  MessageCircle,
  FolderPlus,
  CheckCircle2,
  LineChart,
} from "lucide-react";

export type Lang = "th" | "en";

/* ---------- Shared (non-translatable) ---------- */
export const SITE = {
  name: "Linkone",
  website: "linkonecompany.com",
  tagline: "Business Understanding × Technology Execution",
  positioningEn: "Project & Task Collaboration Platform for LINE-based Teams",
  positioningTh: "ระบบจัดการโปรเจกต์ งาน และการประสานงาน สำหรับทีมที่ทำงานผ่าน LINE",
  lineAddUrl: "https://line.me/R/ti/p/@253gdjqm",
  lineId: "@253gdjqm",
  email: "contact@linkonecompany.com",
};

/* ---------- Shared item structure (icons/order/images) ---------- */
const PROBLEM_ICONS: LucideIcon[] = [MessageSquareOff, UserX, Search, EyeOff, CalendarX, Network];
const FEATURE_META: { icon: LucideIcon; no: string; titleEn: string }[] = [
  { icon: FolderKanban, no: "01", titleEn: "Project & Workspace Management" },
  { icon: ListTodo, no: "02", titleEn: "Task & Subtask Management" },
  { icon: UserCheck, no: "03", titleEn: "Assign, Join & Done Workflow" },
  { icon: GanttChartSquare, no: "04", titleEn: "Timeline & Progress Tracking" },
  { icon: Inbox, no: "05", titleEn: "Inbox & Approval Center" },
  { icon: MapPin, no: "06", titleEn: "Check-in & Time Stamp" },
  { icon: FolderUp, no: "07", titleEn: "File Upload & Work Storage" },
  { icon: MessagesSquare, no: "08", titleEn: "Project & Task Chat" },
  { icon: BellRing, no: "09", titleEn: "Smart Reminder & Notification" },
  { icon: BarChart3, no: "10", titleEn: "Dashboard & Management Report" },
];
const USECASE_META: { icon: LucideIcon; titleEn: string }[] = [
  { icon: Briefcase, titleEn: "Project Management" },
  { icon: Settings2, titleEn: "Team Operations" },
  { icon: Handshake, titleEn: "Partner & Sales Coordination" },
  { icon: Fingerprint, titleEn: "HR & Attendance Tracking" },
  { icon: Plane, titleEn: "Personal / Group Planning" },
];
const STEP_ICONS: LucideIcon[] = [MessageCircle, FolderPlus, CheckCircle2, LineChart];
const SHOWCASE_META: { tag: string; image: string }[] = [
  { tag: "Today Dashboard", image: "/images/screen-dashboard.png" },
  { tag: "Workspace / Task Board", image: "/images/screen-workspace.png" },
  { tag: "Inbox & Approval", image: "/images/screen-inbox.png" },
  { tag: "LINE Group Summary", image: "/images/screen-line-chat.png" },
];
const PHONE_SRCS = [
  "/images/phone-today.png",
  "/images/phone-workspace.png",
  "/images/phone-inbox.png",
  "/images/phone-profile.png",
  "/images/phone-line-summary.png",
];

/* ---------- Types ---------- */
export interface NavLink {
  label: string;
  href: string;
}
export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export interface FeatureItem {
  icon: LucideIcon;
  no: string;
  titleEn: string;
  title: string;
  desc: string;
  outcome: string;
}
export interface UseCaseItem {
  icon: LucideIcon;
  titleEn: string;
  title: string;
  desc: string;
}
export interface StepItem {
  icon: LucideIcon;
  no: string;
  title: string;
  desc: string;
}
export interface ShowcaseItem {
  tag: string;
  title: string;
  desc: string;
  points: string[];
  image: string;
  alt: string;
}
export interface Phone {
  src: string;
  alt: string;
}

export interface Dict {
  nav: NavLink[];
  ui: {
    demo: string;
    start: string;
    startLong: string;
    openMenu: string;
    closeMenu: string;
    brandHome: string;
    footerMenu: string;
    footerContact: string;
    website: string;
    email: string;
    lineLabel: string;
    orAddLine: string;
    scanToAdd: string;
    rights: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    support: string;
    primaryCta: string;
    secondaryCta: string;
    float: {
      progress: { value: string; label: string };
      approvals: { value: string; label: string };
      synced: { title: string; sub: string };
    };
    miniCards: { title: string; desc: string }[];
    stats: { value: string; unit: string; label: string }[];
  };
  what: { eyebrow: string; title: string; paragraphs: string[]; bullets: string[]; imageAlt: string };
  problems: { eyebrow: string; title: string; intro: string; items: ProblemItem[] };
  features: { eyebrow: string; title: string; intro: string; items: FeatureItem[] };
  useCases: { eyebrow: string; title: string; intro: string; items: UseCaseItem[] };
  how: { eyebrow: string; title: string; subtitle: string; steps: StepItem[]; imageAlt: string };
  why: { eyebrow: string; title: string; items: { title: string; desc: string }[]; imageAlt: string };
  showcase: { eyebrow: string; title: string; intro: string; items: ShowcaseItem[] };
  phones: Phone[];
  finalCta: { title: string; subtitle: string; primaryCta: string; secondaryCta: string };
  footer: { description: string };
  meta: { title: string; description: string; ogTitle: string };
}

/* ============================================================
   THAI
   ============================================================ */
const th: Dict = {
  nav: [
    { label: "หน้าแรก", href: "#home" },
    { label: "ผลิตภัณฑ์", href: "#product" },
    { label: "ฟีเจอร์", href: "#features" },
    { label: "การใช้งาน", href: "#use-cases" },
    { label: "วิธีการทำงาน", href: "#how-it-works" },
    { label: "ติดต่อ", href: "#contact" },
  ],
  ui: {
    demo: "ขอเดโม",
    start: "เริ่มใช้งาน",
    startLong: "เริ่มใช้งาน Linkone",
    openMenu: "เปิดเมนู",
    closeMenu: "ปิดเมนู",
    brandHome: "Linkone หน้าแรก",
    footerMenu: "เมนู",
    footerContact: "ติดต่อ",
    website: "เว็บไซต์",
    email: "อีเมล",
    lineLabel: "LINE",
    orAddLine: "หรือเพิ่มเพื่อนใน LINE:",
    scanToAdd: "สแกนเพื่อเพิ่มเพื่อนใน LINE",
    rights: "สงวนลิขสิทธิ์",
  },
  hero: {
    eyebrow: "แพลตฟอร์มจัดการงานสำหรับทีมที่ใช้ LINE",
    titleLead: "เปลี่ยนกลุ่ม LINE ให้กลายเป็น",
    titleHighlight: "ระบบจัดการงานของทีม",
    subtitle:
      "Linkone ช่วยให้ทีมสร้างโปรเจกต์ มอบหมายงาน ติดตามความคืบหน้า และสรุปงานได้เป็นระบบ จากการคุยงานใน LINE สู่ workflow ที่ทุกคนเห็นตรงกัน",
    support:
      "เหมาะสำหรับทีมที่ต้องประสานงานหลายคน หลายโปรเจกต์ หรือทำงานร่วมกับพาร์ทเนอร์ โดยยังเริ่มต้นจากเครื่องมือที่ทีมใช้อยู่ทุกวันอย่าง LINE",
    primaryCta: "เริ่มใช้งาน Linkone",
    secondaryCta: "ดูวิธีการทำงาน",
    float: {
      progress: { value: "68%", label: "เสร็จแล้ว" },
      approvals: { value: "2", label: "รออนุมัติ" },
      synced: { title: "ทีมซิงก์แล้ว", sub: "อัปเดตล่าสุด" },
    },
    miniCards: [
      { title: "ทำงานบน LINE", desc: "เริ่มจากกลุ่มที่ทีมใช้อยู่ทุกวัน" },
      { title: "Task & Subtask", desc: "สร้าง มอบหมาย และติดตามงานชัดเจน" },
      { title: "ติดตามความคืบหน้า", desc: "เห็นสถานะ แจ้งเตือน และสรุปงาน" },
    ],
    stats: [
      { value: "0", unit: "แอปใหม่", label: "ใช้ LINE ที่ทีมมีอยู่ ไม่ต้องโหลดแอปเพิ่ม ทั้งใช้งาน รับแจ้งเตือน และดูผลลัพธ์ธุรกิจ" },
      { value: "5", unit: "นาที", label: "เพิ่ม Linkone เข้ากลุ่มและเริ่มมอบหมายงาน" },
      { value: "100%", unit: "", label: "ทุกงานมีเจ้าของ สถานะ และเดดไลน์ที่ติดตามได้" },
    ],
  },
  what: {
    eyebrow: "What is Linkone",
    title: "Linkone คืออะไร",
    imageAlt: "Linkone ส่งการ์ดสรุปงานกลับเข้าไปในกลุ่ม LINE",
    paragraphs: [
      "Linkone คือแพลตฟอร์มจัดการงานและโปรเจกต์ สำหรับทีมที่ทำงานผ่าน LINE เป็นหลัก",
      "ระบบช่วยเปลี่ยนการคุยงานในกลุ่ม LINE ให้กลายเป็นงานที่จัดการได้จริง ตั้งแต่การสร้างโปรเจกต์ สร้าง task และ subtask มอบหมายผู้รับผิดชอบ ติดตามความคืบหน้า ดู timeline แจ้งเตือนงานค้าง ไปจนถึงรายงานภาพรวมสำหรับผู้บริหาร",
      "Linkone เหมาะกับทีมที่ต้องประสานงานหลายคน หลายโปรเจกต์ หรือทำงานร่วมกับพาร์ทเนอร์ เอเจนซี่ ทีมขาย ทีมปฏิบัติการ หรือทีมภาคสนาม โดยไม่ต้องเปลี่ยนพฤติกรรมการทำงานเดิมทั้งหมด เพราะยังสามารถเริ่มจากกลุ่ม LINE ที่ทีมใช้อยู่ทุกวันได้",
    ],
    bullets: [
      "เปลี่ยนแชทให้กลายเป็นงานที่ติดตามได้",
      "สร้างโปรเจกต์ งาน และงานย่อยในระบบเดียว",
      "มอบหมายผู้รับผิดชอบได้ชัดเจน",
      "ติดตามความคืบหน้าและ timeline ได้แบบ real-time",
      "มีระบบแจ้งเตือน สรุปงาน และรายงานสำหรับผู้บริหาร",
    ],
  },
  problems: {
    eyebrow: "Pain Points",
    title: "ปัญหาของการทำงานผ่านแชท",
    intro:
      "หลายทีมใช้ LINE เป็นช่องทางหลักในการคุยงาน แต่เมื่อมีงานมากขึ้น ข้อมูลมักกระจัดกระจาย งานสำคัญถูกดันหายไปในแชท และไม่มีใครเห็นภาพรวมว่าใครกำลังทำอะไร งานไหนเสร็จแล้ว งานไหนใกล้ถึงกำหนด หรือเรื่องไหนต้องรีบตามต่อ",
    items: [
      { icon: PROBLEM_ICONS[0], title: "งานหายไปในแชท", desc: "ข้อความถูกดันขึ้นเรื่อย ๆ จนหางานเดิมไม่เจอ" },
      { icon: PROBLEM_ICONS[1], title: "ไม่รู้ว่าใครรับผิดชอบอะไร", desc: "งานถูกคุยไว้ แต่ไม่ได้ถูกมอบหมายอย่างชัดเจน" },
      { icon: PROBLEM_ICONS[2], title: "ตามงานยาก", desc: "ต้องไล่อ่านแชทย้อนหลัง หรือถามซ้ำว่า “งานนี้ถึงไหนแล้ว”" },
      { icon: PROBLEM_ICONS[3], title: "ไม่มีภาพรวมของทีม", desc: "หัวหน้าทีมหรือผู้บริหารไม่เห็นสถานะงานทั้งหมดในที่เดียว" },
      { icon: PROBLEM_ICONS[4], title: "เดดไลน์ตกหล่น", desc: "ไม่มีระบบเตือนอัตโนมัติเมื่องานใกล้ครบกำหนด" },
      { icon: PROBLEM_ICONS[5], title: "งานหลายฝ่ายประสานกันยาก", desc: "โดยเฉพาะงานที่เกี่ยวข้องกับ partner, sales, ops หรือทีมภาคสนาม" },
    ],
  },
  features: {
    eyebrow: "Core Capabilities",
    title: "ฟีเจอร์ที่ช่วยให้ทีมทำงานร่วมกันได้จริง",
    intro:
      "Linkone ไม่ได้ช่วยแค่สร้าง task แต่ช่วยให้ทีมทำงานร่วมกันได้ครบขึ้น ตั้งแต่การวางแผน มอบหมายงาน ติดตามความคืบหน้า เช็กอิน เก็บไฟล์ คุยงาน และดูรายงานภาพรวมของทีม",
    items: [
      { ...FEATURE_META[0], title: "จัดการโปรเจกต์และพื้นที่ทำงาน", desc: "สร้าง workspace สำหรับทีม บริษัท หรือโปรเจกต์ เพื่อแยกงานแต่ละกลุ่มให้ชัดเจน ดูงานของตัวเอง งานของทีม และภาพรวมขององค์กรได้ในที่เดียว", outcome: "จัดการหลายทีม หลายโปรเจกต์ และหลายบริบทงานได้เป็นระบบมากขึ้น" },
      { ...FEATURE_META[1], title: "สร้างงานและงานย่อยได้เป็นระบบ", desc: "สร้าง task จากสิ่งที่คุยกันในกลุ่ม พร้อมแตกเป็น subtask กำหนดผู้รับผิดชอบ สถานะ ความสำคัญ และเดดไลน์ เพื่อให้ทุกงานถูกติดตามต่อได้จริง", outcome: "ลดงานตกหล่น ลดการถามซ้ำ และทำให้ทุกคนรู้ว่าใครต้องทำอะไร" },
      { ...FEATURE_META[2], title: "มอบหมาย รับงาน และปิดงานได้ชัดเจน", desc: "มอบหมายงานให้คนที่เกี่ยวข้อง หรือให้สมาชิกกดเข้าร่วมงานเอง เมื่อทำเสร็จกด Done เพื่ออัปเดตสถานะให้ทุกคนเห็นทันที", outcome: "งานมีเจ้าของชัดเจน และผู้จัดการเห็นความคืบหน้าแบบ real-time" },
      { ...FEATURE_META[3], title: "ติดตามสถานะและ timeline ของงาน", desc: "ดูว่างานไหนยังไม่เริ่ม งานไหนกำลังทำ งานไหนเลยกำหนด และงานไหนเสร็จแล้ว พร้อมติดตาม timeline ของโปรเจกต์และงานที่ต้องดำเนินการต่อ", outcome: "หัวหน้าทีมเห็นภาพรวมงานทั้งหมด และจัดลำดับความสำคัญได้ง่ายขึ้น" },
      { ...FEATURE_META[4], title: "กล่องข้อความสำหรับงานที่ต้องตัดสินใจ", desc: "รวมรายการที่รอการตอบกลับ รออนุมัติ หรือรอการตัดสินใจไว้ใน Inbox เดียว เพื่อให้ผู้เกี่ยวข้องไม่พลาดงานสำคัญ", outcome: "ลดการตกหล่นของงานที่ต้อง approve หรือ follow-up" },
      { ...FEATURE_META[5], title: "เช็กอินและบันทึกเวลาเข้าทำงาน", desc: "ตั้งค่าสถานที่สำหรับเช็กอิน เช่น ออฟฟิศ สาขา หรือหน้างาน ให้ทีมกด Check-in เมื่อมาถึง พร้อมบันทึกเวลาและประวัติการเข้างานให้ผู้บริหารหรือ HR ตรวจสอบได้", outcome: "เห็นเวลาการเข้างานอย่างเป็นระบบ เหมาะกับทีมออฟฟิศ ทีมสาขา และทีมภาคสนาม" },
      { ...FEATURE_META[6], title: "เก็บไฟล์งานไว้กับโปรเจกต์", desc: "อัปโหลดไฟล์ เอกสาร รูปภาพ หรือไฟล์ประกอบงานไว้ในโปรเจกต์หรือ task ที่เกี่ยวข้อง เพื่อให้ข้อมูลไม่หายไปในแชท และทุกคนเข้าถึงไฟล์ล่าสุดได้ง่าย", outcome: "ลดการไล่หาไฟล์ย้อนหลัง และทำให้ข้อมูลสำคัญอยู่ในบริบทของงานนั้น" },
      { ...FEATURE_META[7], title: "คุยงานแยกตามโปรเจกต์หรือ task", desc: "เปิดพื้นที่สนทนาเฉพาะของแต่ละโปรเจกต์หรือแต่ละ task เพื่อให้การคุยงานไม่ปะปนกับแชทหลัก และเก็บ context ของงานไว้ครบในที่เดียว", outcome: "คนที่เข้ามาทีหลังเข้าใจงานได้เร็วขึ้น และลดความสับสนจากแชทหลายเรื่องปนกัน" },
      { ...FEATURE_META[8], title: "แจ้งเตือนงานสำคัญอัตโนมัติ", desc: "ระบบช่วยแจ้งเตือนงานใกล้ครบกำหนด งานเลยกำหนด งานที่ต้องตัดสินใจ หรืออัปเดตสำคัญให้คนที่เกี่ยวข้องรู้ทันที", outcome: "ลดการลืมงาน ลดการตามงานมือ และช่วยให้ทีมเดินงานต่อได้เร็วขึ้น" },
      { ...FEATURE_META[9], title: "รายงานภาพรวมสำหรับผู้บริหาร", desc: "ผู้บริหารดูภาพรวมงานทั้งหมด จำนวนงานที่ active งานค้าง งานที่เสร็จแล้ว ความคืบหน้าของโปรเจกต์ และ performance ของทีมได้จากระบบหลังบ้าน", outcome: "ตัดสินใจจากข้อมูลจริง เห็นปัญหาคอขวด และบริหารทีมได้แม่นยำขึ้น" },
    ],
  },
  useCases: {
    eyebrow: "Use Cases",
    title: "ใช้ได้กับหลายรูปแบบการทำงาน",
    intro:
      "ไม่ว่าจะเป็นทีมภายในองค์กร ทีมขาย ทีมพาร์ทเนอร์ หรือทีมที่ต้องประสานงานผ่าน LINE หลายคน Linkone ช่วยให้ทุกงานมีระบบและติดตามได้จริง",
    items: [
      { ...USECASE_META[0], title: "จัดการโปรเจกต์", desc: "เหมาะสำหรับทีมที่ต้องจัดการหลายโปรเจกต์พร้อมกัน เช่น งานลูกค้า งานภายใน งาน campaign หรืองาน event โดยสามารถสร้างโปรเจกต์ แยก task ติดตามสถานะ และดู timeline ได้ชัดเจน" },
      { ...USECASE_META[1], title: "งานปฏิบัติการของทีม", desc: "เหมาะสำหรับทีมปฏิบัติการที่มีงานประจำ งานรายวัน งานหน้างาน หรืองานที่ต้องส่งต่อกันหลายคน ช่วยให้หัวหน้าทีมเห็นว่างานไหนค้าง งานไหนเสร็จ และใครรับผิดชอบอะไร" },
      { ...USECASE_META[2], title: "ประสานงานพาร์ทเนอร์และทีมขาย", desc: "เหมาะกับธุรกิจที่ทำงานร่วมกับพาร์ทเนอร์ ตัวแทน ทีมขาย หรือดีลงานหลายฝ่าย ใช้เพื่อมอบหมายงาน ติดตามเอกสาร อัปเดตสถานะ และสรุปความคืบหน้าของแต่ละดีลหรือโปรเจกต์" },
      { ...USECASE_META[3], title: "ดูการเข้างานของทีม", desc: "เหมาะสำหรับทีมที่ต้องการดูการเข้างานของพนักงาน ทีมสาขา หรือทีมภาคสนาม ผ่านระบบ Check-in และ Time Stamp ที่ตั้งค่าสถานที่ได้" },
      { ...USECASE_META[4], title: "วางแผนกลุ่มและกิจกรรม", desc: "นอกจากงานธุรกิจ ยังใช้กับกลุ่มวางแผนทริป กลุ่มกิจกรรม หรือกลุ่มสุขภาพได้ เช่น ตั้งเป้าหมายร่วมกัน แบ่งหน้าที่ แจ้งเตือน และสรุปความคืบหน้า" },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "เริ่มต้นใช้งานได้ง่ายใน 4 ขั้นตอน",
    subtitle:
      "Linkone ถูกออกแบบมาให้ใช้งานง่ายที่สุด ไม่ต้องโหลดหลายแอป แค่เริ่มจาก LINE กลุ่มเดิมที่ทีมใช้อยู่ทุกวัน",
    imageAlt: "แอป Linkone หน้า Workspace แสดงบอร์ดงานของทีม",
    steps: [
      { icon: STEP_ICONS[0], no: "1", title: "เพิ่มเพื่อน Linkone แล้วดึงเข้ากลุ่ม", desc: "กดเพิ่ม Linkone เป็นเพื่อนใน LINE แล้วเชิญเข้ากลุ่มที่ทีมใช้ทำงาน จากนั้นพิมพ์ว่า “linkone” ในกลุ่มเพื่อเริ่มสร้าง workspace ได้ทันที ไม่ต้องติดตั้งแอปใหม่" },
      { icon: STEP_ICONS[1], no: "2", title: "สร้างโปรเจกต์และมอบหมายงาน", desc: "เปลี่ยนสิ่งที่คุยกันในแชทให้กลายเป็น project, task และ subtask พร้อมกำหนดผู้รับผิดชอบ เดดไลน์ และรายละเอียดงาน" },
      { icon: STEP_ICONS[2], no: "3", title: "ติดตาม อัปเดต และปิดงาน", desc: "สมาชิกที่ได้รับงานอัปเดตสถานะ กด Done เมื่อทำเสร็จ และระบบจะแจ้งเตือนหรือสรุปความคืบหน้าให้ทีมเห็นตรงกัน" },
      { icon: STEP_ICONS[3], no: "4", title: "ดูรายงานและภาพรวมทีม", desc: "ผู้บริหารหรือหัวหน้าทีมดู report, timeline, งานค้าง, งานที่เสร็จแล้ว และ performance ของทีมจากระบบหลังบ้าน" },
    ],
  },
  why: {
    eyebrow: "Why Linkone",
    title: "ทำไมทีมที่ใช้ LINE ถึงควรมี Linkone",
    imageAlt: "แอป Linkone หน้าโปรไฟล์และ workspace องค์กร แสดงพื้นที่จัดเก็บและจำนวนสมาชิก",
    items: [
      { title: "ไม่ต้องเปลี่ยนพฤติกรรมทีม", desc: "ทีมยังเริ่มต้นจาก LINE ที่ใช้อยู่ทุกวัน แต่มีระบบมาช่วยจัดการงานให้ชัดเจนขึ้น" },
      { title: "ทุกงานมีเจ้าของ", desc: "งานไม่ใช่แค่ข้อความในแชท แต่กลายเป็น task ที่มีผู้รับผิดชอบ สถานะ และเดดไลน์" },
      { title: "ตามงานง่ายกว่าเดิม", desc: "ไม่ต้องไล่อ่านแชทย้อนหลัง เพราะทุกงานถูกเก็บใน workspace และดูสถานะได้ทันที" },
      { title: "ผู้บริหารเห็นภาพรวม", desc: "มี dashboard และ report สำหรับดูภาพรวมงานของทีม โปรเจกต์ และองค์กร" },
      { title: "รองรับทั้งทีมเล็กและทีมขยาย", desc: "ใช้ได้ตั้งแต่กลุ่มเล็ก ทีมภายในบริษัท ไปจนถึงการประสานงานกับพาร์ทเนอร์หรือหลายทีมพร้อมกัน" },
    ],
  },
  showcase: {
    eyebrow: "Product Screens",
    title: "หน้าตาระบบจริงของ Linkone",
    intro:
      "ดูตัวอย่างหน้าจอหลักของ Linkone ตั้งแต่หน้างานประจำวัน บอร์ดงานของทีม กล่องอนุมัติ ไปจนถึงการ์ดสรุปงานที่ส่งกลับเข้ากลุ่ม LINE",
    items: [
      { ...SHOWCASE_META[0], title: "เห็นงานที่ต้องทำวันนี้ในหน้าเดียว", desc: "รวมงานเลยกำหนด งานครบกำหนดวันนี้ และงานรออนุมัติไว้ในหน้าเดียว พร้อมปุ่มเช็กอินเข้าทำงาน ทีมจึงเริ่มวันทำงานได้โดยรู้ว่าต้องโฟกัสอะไรก่อน", points: ["สรุปงานเลยกำหนด / ครบกำหนดวันนี้ / รออนุมัติ", "ปุ่มเช็กอินบันทึกเวลาเข้าทำงาน", "รายการงานที่ต้องดำเนินการต่อ"], alt: "หน้า Today Dashboard ของ Linkone แสดงงานที่ต้องดำเนินการวันนี้และปุ่มเช็กอิน" },
      { ...SHOWCASE_META[1], title: "บอร์ดงานของทีมที่เห็นสถานะทุกงาน", desc: "จัดงานเป็น To Do และ In Progress พร้อมความคืบหน้าของ subtask ผู้รับผิดชอบ และระดับความสำคัญ สลับมุมมองระหว่างงานของฉัน งานของทีม และภาพรวมองค์กรได้", points: ["คอลัมน์ To Do / In Progress พร้อมจำนวนงาน", "ตัวบ่งชี้ subtask และผู้รับผิดชอบในแต่ละการ์ด", "สลับมุมมอง Mine / Team / Enterprise"], alt: "หน้า Workspace ของ Linkone แสดงบอร์ดงานแบบ To Do และ In Progress พร้อม task cards" },
      { ...SHOWCASE_META[2], title: "รวมงานที่รอการตัดสินใจไว้ที่เดียว", desc: "งานที่รออนุมัติ ใบลา หรือรายการที่ต้องตัดสินใจถูกรวมไว้ใน Inbox เดียว เห็นผู้ขอ วันที่ และรายละเอียด พร้อมกดพิจารณาอนุมัติได้ทันที", points: ["แยกประเภทงาน / ใบลา / OT", "เห็นผู้ขอและวันที่ของแต่ละคำขอ", "กดพิจารณาอนุมัติได้จากหน้าเดียว"], alt: "หน้า Inbox ของ Linkone แสดงรายการงานและใบลาที่รอการอนุมัติ" },
      { ...SHOWCASE_META[3], title: "สรุปงานส่งกลับเข้ากลุ่ม LINE", desc: "Linkone ส่งการ์ดสรุปภาพรวม workspace กลับเข้ากลุ่ม LINE ได้โดยตรง ทั้งความคืบหน้าโปรเจกต์ จำนวนงาน active งานที่รออนุมัติ พร้อมปุ่มเปิดบอร์ดงานทันที", points: ["การ์ดสรุป velocity และความคืบหน้าโปรเจกต์", "จำนวนงาน active และไฟล์ที่รออนุมัติ", "ปุ่ม Open Board เปิดบอร์ดงานได้จากในแชท"], alt: "การ์ดสรุปงานของ Linkone ที่ส่งกลับเข้าไปในกลุ่ม LINE พร้อมปุ่ม Open Board" },
    ],
  },
  phones: [
    { src: PHONE_SRCS[0], alt: "แอป Linkone หน้า Today แสดงงานที่ต้องทำวันนี้" },
    { src: PHONE_SRCS[1], alt: "แอป Linkone หน้า Workspace แสดงบอร์ดงานของทีม" },
    { src: PHONE_SRCS[2], alt: "แอป Linkone หน้า Inbox แสดงงานที่รออนุมัติ" },
    { src: PHONE_SRCS[3], alt: "แอป Linkone หน้าโปรไฟล์และ workspace องค์กร" },
    { src: PHONE_SRCS[4], alt: "แอป Linkone การ์ดสรุปงานในกลุ่ม LINE" },
  ],
  finalCta: {
    title: "พร้อมเปลี่ยนกลุ่ม LINE ให้กลายเป็นระบบจัดการงานของทีมหรือยัง?",
    subtitle: "เริ่มจัดการโปรเจกต์ งาน การประสานงาน และการติดตามผลได้ง่ายขึ้นกับ Linkone",
    primaryCta: "เริ่มใช้งาน Linkone",
    secondaryCta: "ขอเดโม",
  },
  footer: {
    description:
      "เปลี่ยนกลุ่ม LINE ให้กลายเป็นระบบจัดการงานของทีม เชื่อมคน งาน และแผนการทำงานให้เป็นระบบเดียวกัน",
  },
  meta: {
    title: "Linkone | ระบบจัดการงานและโปรเจกต์สำหรับทีมที่ทำงานผ่าน LINE",
    description:
      "Linkone คือแพลตฟอร์มที่ช่วยเปลี่ยนกลุ่ม LINE ให้กลายเป็นระบบจัดการงานของทีม สร้างโปรเจกต์ มอบหมายงาน ติดตามความคืบหน้า แจ้งเตือน และดูรายงานภาพรวมได้ในที่เดียว",
    ogTitle: "Linkone — เปลี่ยนกลุ่ม LINE ให้กลายเป็นระบบจัดการงานของทีม",
  },
};

/* ============================================================
   ENGLISH
   ============================================================ */
const en: Dict = {
  nav: [
    { label: "Home", href: "#home" },
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ],
  ui: {
    demo: "Request a demo",
    start: "Get started",
    startLong: "Get started with Linkone",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    brandHome: "Linkone home",
    footerMenu: "Menu",
    footerContact: "Contact",
    website: "Website",
    email: "Email",
    lineLabel: "LINE",
    orAddLine: "Or add us on LINE:",
    scanToAdd: "Scan to add us on LINE",
    rights: "All rights reserved.",
  },
  hero: {
    eyebrow: "Task management built for teams on LINE",
    titleLead: "Turn your LINE group into",
    titleHighlight: "your team's work system",
    subtitle:
      "Linkone helps teams create projects, assign work, track progress, and report — turning LINE conversations into a workflow everyone can see.",
    support:
      "Built for teams coordinating across many people, projects, or partners — while starting from the tool your team already uses every day: LINE.",
    primaryCta: "Get started with Linkone",
    secondaryCta: "See how it works",
    float: {
      progress: { value: "68%", label: "Complete" },
      approvals: { value: "2", label: "Pending Approvals" },
      synced: { title: "Team synced", sub: "Updated" },
    },
    miniCards: [
      { title: "Works inside LINE", desc: "Start from the group your team already uses" },
      { title: "Task & Subtask", desc: "Create, assign, and follow work clearly" },
      { title: "Progress Tracking", desc: "See status, reminders, and summaries" },
    ],
    stats: [
      { value: "0", unit: "new apps", label: "Use the LINE your team already has — no new app to install. Work, get notified, and see business results." },
      { value: "5", unit: "min", label: "Add Linkone to your group and start assigning tasks." },
      { value: "100%", unit: "", label: "Every task has an owner, a status, and a deadline you can track." },
    ],
  },
  what: {
    eyebrow: "What is Linkone",
    title: "What is Linkone?",
    imageAlt: "Linkone posting a work-summary card back into a LINE group",
    paragraphs: [
      "Linkone is a work and project management platform for teams that operate mainly through LINE.",
      "It turns the conversations in your LINE groups into work you can actually manage — from creating projects, tasks, and subtasks, assigning owners, and tracking progress and timelines, to reminders for overdue work and management-level reports.",
      "Linkone fits teams that coordinate across many people and projects, or work with partners, agencies, sales, operations, or field teams — without changing how you already work, because you can start right from the LINE group your team uses every day.",
    ],
    bullets: [
      "Turn chat into work you can track",
      "Create projects, tasks, and subtasks in one place",
      "Assign clear owners for every task",
      "Track progress and timelines in real time",
      "Reminders, summaries, and reports for management",
    ],
  },
  problems: {
    eyebrow: "Pain Points",
    title: "The problem with running work over chat",
    intro:
      "Many teams use LINE as their main channel for work. But as work grows, information scatters, important tasks get buried in the chat, and no one sees the full picture of who's doing what, what's done, what's due soon, or what needs a follow-up.",
    items: [
      { icon: PROBLEM_ICONS[0], title: "Work gets lost in the chat", desc: "Messages keep pushing older tasks out of sight." },
      { icon: PROBLEM_ICONS[1], title: "Unclear who owns what", desc: "Work gets discussed but never clearly assigned." },
      { icon: PROBLEM_ICONS[2], title: "Hard to follow up", desc: "You scroll back through chat or keep asking, “where's this at?”" },
      { icon: PROBLEM_ICONS[3], title: "No team overview", desc: "Leads and executives can't see every task status in one place." },
      { icon: PROBLEM_ICONS[4], title: "Deadlines slip", desc: "There's no automatic reminder when work is coming due." },
      { icon: PROBLEM_ICONS[5], title: "Cross-team coordination is hard", desc: "Especially work involving partners, sales, ops, or field teams." },
    ],
  },
  features: {
    eyebrow: "Core Capabilities",
    title: "Features that help teams truly work together",
    intro:
      "Linkone does more than create tasks — it helps teams collaborate end to end: planning, assigning, tracking progress, checking in, storing files, chatting, and viewing team-wide reports.",
    items: [
      { ...FEATURE_META[0], title: "Manage projects and workspaces", desc: "Create workspaces for teams, companies, or projects to keep each group of work clear. See your own work, your team's, and the whole organization in one place.", outcome: "Run multiple teams, projects, and work contexts far more systematically." },
      { ...FEATURE_META[1], title: "Create tasks and subtasks systematically", desc: "Turn what's discussed in the group into tasks, break them into subtasks, and set owners, status, priority, and deadlines so every task keeps moving.", outcome: "Fewer dropped tasks and repeated questions — everyone knows who does what." },
      { ...FEATURE_META[2], title: "Assign, join, and close work clearly", desc: "Assign work to the right people, or let members join tasks themselves. When finished, tap Done to update the status for everyone instantly.", outcome: "Every task has a clear owner, and managers see progress in real time." },
      { ...FEATURE_META[3], title: "Track status and project timelines", desc: "See what hasn't started, what's in progress, what's overdue, and what's done — and follow each project's timeline and next steps.", outcome: "Leads see the whole picture and prioritize with ease." },
      { ...FEATURE_META[4], title: "An inbox for things that need a decision", desc: "Bring everything waiting for a reply, approval, or decision into a single Inbox so nothing important slips by.", outcome: "Fewer dropped approvals and follow-ups." },
      { ...FEATURE_META[5], title: "Check-in and time stamping", desc: "Set locations for check-in — office, branch, or on-site — so the team can check in on arrival, with time and attendance history for managers or HR.", outcome: "See attendance systematically — great for office, branch, and field teams." },
      { ...FEATURE_META[6], title: "Keep work files with the project", desc: "Upload files, documents, images, or attachments to the related project or task, so information doesn't vanish in chat and everyone can reach the latest version.", outcome: "Less digging through old chats — key information stays in context." },
      { ...FEATURE_META[7], title: "Chat by project or task", desc: "Open a dedicated conversation for each project or task, so work talk doesn't mix with the main chat and the full context stays in one place.", outcome: "Newcomers get up to speed faster, with less confusion from mixed threads." },
      { ...FEATURE_META[8], title: "Automatic reminders for what matters", desc: "Linkone reminds people about work that's due soon, overdue, needs a decision, or has an important update — instantly.", outcome: "Less forgetting, less manual chasing, and faster momentum." },
      { ...FEATURE_META[9], title: "Executive-level overview reports", desc: "Executives see the whole picture — active tasks, backlog, completed work, project progress, and team performance — from the back office.", outcome: "Decide from real data, spot bottlenecks, and manage teams more precisely." },
    ],
  },
  useCases: {
    eyebrow: "Use Cases",
    title: "Works for many ways of working",
    intro:
      "Whether it's an internal team, a sales team, a partner team, or any group coordinating across many people on LINE, Linkone gives every task structure you can track.",
    items: [
      { ...USECASE_META[0], title: "Project management", desc: "Great for teams juggling many projects at once — client work, internal work, campaigns, or events — with clear projects, tasks, statuses, and timelines." },
      { ...USECASE_META[1], title: "Team operations", desc: "For operations teams with routine, daily, on-site, or hand-off work — so leads can see what's stuck, what's done, and who owns what." },
      { ...USECASE_META[2], title: "Partner & sales coordination", desc: "For businesses working with partners, agents, sales teams, or multi-party deals — assign work, track documents, update status, and summarize progress per deal or project." },
      { ...USECASE_META[3], title: "See your team's attendance", desc: "For teams that need to track attendance for staff, branches, or field teams, via configurable Check-in and Time Stamp." },
      { ...USECASE_META[4], title: "Group and activity planning", desc: "Beyond business, use it for trip planning, activity groups, or health groups — set shared goals, split tasks, send reminders, and track progress." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Get started in four simple steps",
    subtitle:
      "Linkone is built to be as easy as possible — no extra apps to install, just start from the LINE group your team already uses every day.",
    imageAlt: "Linkone app Workspace screen showing the team task board",
    steps: [
      { icon: STEP_ICONS[0], no: "1", title: "Add Linkone as a friend, then into your group", desc: "Add Linkone as a friend on LINE, invite it into the group your team works in, then type “linkone” in the group to create a workspace instantly — no new app required." },
      { icon: STEP_ICONS[1], no: "2", title: "Create projects and assign work", desc: "Turn what's discussed in chat into projects, tasks, and subtasks, with owners, deadlines, and details." },
      { icon: STEP_ICONS[2], no: "3", title: "Track, update, and close work", desc: "Assigned members update status and tap Done when finished, and Linkone notifies or summarizes progress so the team stays aligned." },
      { icon: STEP_ICONS[3], no: "4", title: "View reports and the team overview", desc: "Executives and leads see reports, timelines, backlog, completed work, and team performance from the back office." },
    ],
  },
  why: {
    eyebrow: "Why Linkone",
    title: "Why teams on LINE should have Linkone",
    imageAlt: "Linkone app profile and corporate workspace screen showing storage and seats",
    items: [
      { title: "No change to how your team works", desc: "Your team still starts from the LINE it uses daily — now with a system that keeps work clear." },
      { title: "Every task has an owner", desc: "Work is no longer just a chat message; it becomes a task with an owner, status, and deadline." },
      { title: "Following up is easier", desc: "No scrolling back through chat — every task lives in the workspace with an instant status." },
      { title: "Executives see the whole picture", desc: "Dashboards and reports for the team, projects, and organization at a glance." },
      { title: "Scales from small teams to large ones", desc: "From small groups and internal teams to coordinating with partners and multiple teams at once." },
    ],
  },
  showcase: {
    eyebrow: "Product Screens",
    title: "See Linkone's real screens",
    intro:
      "Take a look at Linkone's main screens — from the daily work view and the team task board to the approval inbox and the summary card sent back into the LINE group.",
    items: [
      { ...SHOWCASE_META[0], title: "See today's work in one view", desc: "Overdue, due-today, and pending-approval tasks in one place, with a check-in button — so the team starts the day knowing what to focus on first.", points: ["Overdue / due-today / pending-approval summary", "Check-in button to log work time", "A list of tasks to act on next"], alt: "Linkone Today dashboard showing tasks due today and a check-in button" },
      { ...SHOWCASE_META[1], title: "A team task board that shows every status", desc: "Organize work into To Do and In Progress with subtask progress, owners, and priority. Switch between your work, your team's, and the whole organization.", points: ["To Do / In Progress columns with counts", "Subtask indicators and owners on each card", "Switch between Mine / Team / Enterprise"], alt: "Linkone Workspace showing a To Do and In Progress task board" },
      { ...SHOWCASE_META[2], title: "Everything that needs a decision, in one place", desc: "Approvals, leave requests, and items needing a decision are gathered in one Inbox — showing the requester, date, and details, ready to approve on the spot.", points: ["Filter by task / leave / OT", "See the requester and date for each request", "Approve right from one screen"], alt: "Linkone Inbox showing tasks and leave requests awaiting approval" },
      { ...SHOWCASE_META[3], title: "Work summaries sent back into LINE", desc: "Linkone can send a workspace summary card straight back into the LINE group — project progress, active tasks, pending approvals, and a button to open the board instantly.", points: ["Velocity and project-progress summary card", "Active tasks and files pending approval", "An Open Board button right inside the chat"], alt: "Linkone summary card posted into a LINE group with an Open Board button" },
    ],
  },
  phones: [
    { src: PHONE_SRCS[0], alt: "Linkone app Today screen showing tasks due today" },
    { src: PHONE_SRCS[1], alt: "Linkone app Workspace screen showing the team task board" },
    { src: PHONE_SRCS[2], alt: "Linkone app Inbox screen showing items awaiting approval" },
    { src: PHONE_SRCS[3], alt: "Linkone app profile and corporate workspace screen" },
    { src: PHONE_SRCS[4], alt: "Linkone app summary card inside a LINE group" },
  ],
  finalCta: {
    title: "Ready to turn your LINE group into your team's work system?",
    subtitle: "Start managing projects, tasks, coordination, and follow-ups more easily with Linkone.",
    primaryCta: "Get started with Linkone",
    secondaryCta: "Request a demo",
  },
  footer: {
    description:
      "Turn your LINE group into your team's work system — connecting people, work, and plans into one place.",
  },
  meta: {
    title: "Linkone | Project & Task Management for Teams on LINE",
    description:
      "Linkone turns your LINE group into your team's work system — create projects, assign work, track progress, get reminders, and view management reports, all in one place.",
    ogTitle: "Linkone — Turn your LINE group into your team's work system",
  },
};

export const DICT: Record<Lang, Dict> = { th, en };

export function getDict(lang: Lang): Dict {
  return DICT[lang];
}
