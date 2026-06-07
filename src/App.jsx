import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import {
  ArrowRight,
  Code,
  Robot,
  DeviceMobile,
  Storefront,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  Lightning,
  Factory,
  Eye,
  Cube,
  CheckCircle,
  FacebookLogo,
  ChatCircle,
  Phone,
  TiktokLogo,
  YoutubeLogo,
  X,
  ChatTeardropDots
} from '@phosphor-icons/react'

function AnimatedBackground() {
  const { scrollY } = useScroll()
  // Move the background vertically as user scrolls to create a parallax effect
  const yBg = useTransform(scrollY, [0, 2000], [0, 400])
  const rotate = useTransform(scrollY, [0, 2000], [0, 45])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#f4f4f6]">
      <motion.div
        style={{ y: yBg, rotate }}
        className="absolute -top-[20%] -left-[10%] w-[150%] h-[150%] bg-grid-pattern opacity-40 origin-center"
      ></motion.div>
      <div className="absolute top-0 -left-4 w-[40vw] h-[40vw] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-40 -right-4 w-[50vw] h-[50vw] bg-brand-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-[20vh] left-[20vw] w-[60vw] h-[60vw] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  )
}

const SKILLS = [
  "PLC",
  "Website",
  "IOT",
  "Vision",
  "Application"
];

function HeroSection({ onContactClick }) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [skillIndex, setSkillIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % SKILLS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: y1, opacity }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel mb-8 border border-white"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-[0_0_12px_rgba(20,184,166,0.6)]"></span>
            <span className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">Sẵn sàng nhận dự án</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 mb-6 leading-[1.1]"
          >
            Trần Văn Mạnh <span className="text-zinc-300 mx-2 font-light">|</span>
            <div className="inline-block relative h-[1.2em] w-full mt-2 overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={skillIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "circOut" }}
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600 drop-shadow-sm"
                >
                  {SKILLS[skillIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 max-w-lg mb-10 leading-relaxed font-light"
          >
            Nơi tư duy công nghiệp và logic máy móc hòa quyện cùng giao diện phần mềm trực quan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#work" className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-medium shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 z-10 group">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#ec4899,#8b5cf6,#3b82f6)] animate-[spin_3s_linear_infinite] z-[-2]"></div>
              <div className="absolute inset-[2px] bg-zinc-900 group-hover:bg-zinc-800 transition-colors rounded-full z-[-1]"></div>
              Khám Phá Dự Án <ArrowRight weight="bold" />
            </a>
            <a href="#contact" onClick={() => onContactClick?.()} className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 text-zinc-900 rounded-full font-medium hover:text-brand-700 transition-all duration-300 z-10 group shadow-sm border border-zinc-200">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#14b8a6,#3b82f6,#8b5cf6)] animate-[spin_3s_linear_infinite] z-[-2] opacity-100"></div>
              <div className="absolute inset-[1px] bg-white/70 backdrop-blur-xl group-hover:bg-white transition-colors rounded-full z-[-1]"></div>
              Liên Hệ Ngay
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: y2 }}
          className="relative lg:h-[700px] flex items-center justify-center w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/40 to-blue-100/40 rounded-full blur-[120px] -z-10"></div>
          <motion.img
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            src="/hero.png"
            alt="Premium Automation Concept"
            className="w-full max-w-[120%] lg:max-w-[140%] object-contain drop-shadow-2xl mix-blend-multiply"
          />
        </motion.div>
      </div>
    </section>
  )
}

function BentoGrid() {
  return (
    <section id="expertise" className="py-32 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Hệ Sinh Thái Kỹ Năng
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-xl font-light"
          >
            Nền tảng vững chắc từ phần cứng công nghiệp đến hệ thống phần mềm đám mây.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {/* Automation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="md:col-span-2 p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative z-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.06)] transition-all duration-500"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#14b8a6,#3b82f6)] animate-[spin_5s_linear_infinite] z-[-2] opacity-100"></div>
            <div className="absolute inset-[1.5px] bg-white/80 backdrop-blur-xl rounded-[calc(2rem-1.5px)] z-[-1] transition-colors duration-500 group-hover:bg-white/95"></div>
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-zinc-900 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 z-0">
              <Factory size={280} weight="fill" />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-zinc-800 mb-6 shadow-sm border border-zinc-100 group-hover:-translate-y-2 transition-transform duration-500">
              <Robot size={32} weight="duotone" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">Hệ Thống Tự Động Hóa</h3>
              <p className="text-zinc-500 text-lg">Thiết kế, lập trình và tích hợp cánh tay robot công nghiệp, hệ thống phân loại và băng chuyền tốc độ cao.</p>
            </div>
          </motion.div>

          {/* Machine Vision */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative z-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.06)] transition-all duration-500"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#3b82f6,#8b5cf6)] animate-[spin_5s_linear_infinite] z-[-2] opacity-100"></div>
            <div className="absolute inset-[1.5px] bg-white/80 backdrop-blur-xl rounded-[calc(2rem-1.5px)] z-[-1] transition-colors duration-500 group-hover:bg-white/95"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-zinc-100 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
              <Eye size={32} weight="duotone" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Machine Vision</h3>
              <p className="text-zinc-500 text-lg">Xử lý ảnh công nghiệp, đọc OCR và phát hiện lỗi vật lý.</p>
            </div>
          </motion.div>

          {/* Software / Web Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative z-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.06)] transition-all duration-500"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#ec4899,#facc15)] animate-[spin_5s_linear_infinite] z-[-2] opacity-100"></div>
            <div className="absolute inset-[1.5px] bg-white/80 backdrop-blur-xl rounded-[calc(2rem-1.5px)] z-[-1] transition-colors duration-500 group-hover:bg-white/95"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm border border-zinc-100 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
              <DeviceMobile size={32} weight="duotone" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Software Dev</h3>
              <p className="text-zinc-500 text-lg">Xây dựng ứng dụng Web, App chuyên nghiệp.</p>
            </div>
          </motion.div>

          {/* CMMS / EPMS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            className="md:col-span-4 p-10 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between group overflow-hidden relative z-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.06)] transition-all duration-500"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#14b8a6,#8b5cf6,#ec4899)] animate-[spin_5s_linear_infinite] z-[-2] opacity-100"></div>
            <div className="absolute inset-[1.5px] bg-gradient-to-r from-white/95 to-zinc-50/90 backdrop-blur-xl rounded-[calc(2rem-1.5px)] z-[-1] transition-colors duration-500 group-hover:from-white group-hover:to-zinc-50/95"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[url('/dashboard.png')] bg-cover bg-left opacity-[0.08] mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 z-0"></div>

            <div className="relative z-10 md:w-1/2 mb-8 md:mb-0">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-zinc-800 mb-6 border border-zinc-100 shadow-sm group-hover:-translate-y-2 transition-transform duration-500">
                <Lightning size={32} weight="duotone" />
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">Nền tảng Quản trị Doanh nghiệp</h3>
              <p className="text-zinc-500 text-lg max-w-md">Xây dựng hệ thống CMMS (Quản lý bảo trì) và EPMS (Quản lý điện năng), kết nối dữ liệu máy lên Cloud.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              {['Data Synchronization', 'Predictive Maintenance', 'Energy Optimization'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full border border-zinc-100 shadow-sm">
                  <CheckCircle size={20} className="text-brand-500" weight="fill" />
                  <span className="font-medium text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  // Track scroll position of this specific card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"] // Animation plays while the top of the card moves from the bottom of the viewport to 60% up the viewport
  })

  // Smooth out the scroll raw value with a spring to prevent any stutter
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Map progress (0 to 1) to y translation and opacity
  const y = useTransform(smoothProgress, [0, 1], [150, 0])
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="mb-32 last:mb-0"
    >
      <div className="relative p-6 md:p-10 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 group/card overflow-hidden z-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#3b82f6,#14b8a6,#8b5cf6)] animate-[spin_6s_linear_infinite] z-[-2] opacity-100"></div>
        <div className="absolute inset-[1.5px] bg-white/90 backdrop-blur-xl border border-white/50 rounded-[calc(2.5rem-1.5px)] z-[-1] transition-colors duration-500 group-hover/card:bg-white/95"></div>
        <div className="w-full lg:w-[55%] aspect-[16/10] rounded-[2rem] overflow-hidden relative bg-zinc-100 group">
          <img
            src={project.img}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover rounded-xl scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="w-full lg:w-[45%] flex flex-col py-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 text-xs font-semibold tracking-wider text-zinc-600 uppercase mb-6 self-start border border-zinc-200">
            {project.type}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight tracking-tight">{project.name}</h3>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed font-light">{project.desc}</p>
          <button className="relative overflow-hidden inline-flex items-center gap-3 w-max px-8 py-4 text-white rounded-full font-medium transition-all z-10 group hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#8b5cf6,#ec4899)] animate-[spin_3s_linear_infinite] z-[-2] opacity-100"></div>
            <div className="absolute inset-[2px] bg-zinc-900 group-hover:bg-zinc-800 transition-colors rounded-full z-[-1]"></div>
            Xem chi tiết <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedWork() {
  const projects = [
    {
      name: "Tích hợp Robot Delta & Đóng thùng",
      type: "Tự Động Hóa · Robotics",
      desc: "Nâng cao năng suất với hệ thống gắp thả tự động bằng Robot Delta tốc độ cao, tích hợp máy gắp thùng (Case Packer) tự động khép kín.",
      img: "/robot.png"
    },
    {
      name: "Machine Vision: Đọc Date & Phát Hiện Lỗi",
      type: "AI & Machine Vision",
      desc: "Hệ thống thị giác máy tính công nghiệp (Cognex/Keyence) nhận diện, đọc OCR mã vạch/date, tự động loại bỏ sản phẩm lỗi không đạt chuẩn.",
      img: "/vision.png"
    },
    {
      name: "Hệ thống CMMS & Quản lý Bảo Trì",
      type: "Phần mềm doanh nghiệp",
      desc: "Nền tảng số hóa quy trình quản lý tài sản, bảo trì thiết bị và theo dõi đánh giá KPI nhân sự. Tích hợp biểu đồ trực quan.",
      img: "/dashboard.png"
    },
    {
      name: "Hệ thống Quản lý Điện năng (EPMS)",
      type: "Giám sát năng lượng",
      desc: "Giải pháp IoT giám sát điện năng tiêu thụ toàn nhà máy theo thời gian thực, lập báo cáo phân tích để tối ưu hóa chi phí vận hành.",
      img: "/epms.png"
    },
    {
      name: "Hệ thống Phân loại Sản phẩm Văn Minh",
      type: "Tự động hóa toàn diện",
      desc: "Giải pháp phân loại bưu kiện tự động sử dụng băng tải động cơ, tích hợp cân động và phần mềm quản lý kho.",
      img: "/sorting.png"
    }
  ]

  return (
    <section id="work" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-[1400px]">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-[4rem] font-bold text-zinc-900 tracking-tight mb-6">Dự Án Tiêu Biểu</h2>
          <p className="text-zinc-500 text-xl font-light max-w-2xl mx-auto">Những giải pháp thực tế đã triển khai mang lại giá trị vận hành bền vững.</p>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white pt-32 pb-12 px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div>
            <h2 className="text-6xl md:text-[5rem] font-bold text-zinc-900 mb-8 tracking-tighter leading-[1.1]">Let's build<br />something.</h2>
            <p className="text-2xl text-zinc-500 font-light mb-12 max-w-lg">Liên hệ ngay để thảo luận về giải pháp tối ưu cho doanh nghiệp của bạn.</p>
            <a href="mailto:manhquyhop2@gmail.com" className="relative overflow-hidden inline-flex items-center gap-4 px-10 py-5 text-white rounded-full font-medium text-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(20,184,166,0.3)] transition-all z-10 group">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#14b8a6,#2dd4bf)] animate-[spin_3s_linear_infinite] z-[-2]"></div>
              <div className="absolute inset-[2px] bg-brand-600 group-hover:bg-brand-500 transition-colors rounded-full z-[-1]"></div>
              Gửi Email <ArrowRight weight="bold" />
            </a>
          </div>
          <div className="relative p-12 rounded-[3rem] overflow-hidden z-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.06)] transition-all duration-500 group">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#ec4899,#3b82f6)] animate-[spin_6s_linear_infinite] z-[-2] opacity-100"></div>
            <div className="absolute inset-[1.5px] bg-white/80 backdrop-blur-xl border border-white/50 rounded-[calc(3rem-1.5px)] z-[-1] transition-colors duration-500 group-hover:bg-white/95"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-6 text-xl">Liên Hệ Trực Tiếp</h4>
                <ul className="space-y-4 text-zinc-500 font-light text-lg">
                  <li>
                    <a href="tel:0984130234" className="hover:text-brand-600 transition-colors flex items-center gap-3"><Phone /> 0984 130 234</a>
                  </li>
                  <li>
                    <a href="https://zalo.me/0984130234" target="_blank" rel="noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-3"><ChatCircle /> Zalo</a>
                  </li>
                  <li>
                    <a href="mailto:manhquyhop2@gmail.com" className="hover:text-brand-600 transition-colors flex items-center gap-3"><EnvelopeSimple /> Email</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-6 text-xl">Mạng xã hội</h4>
                <ul className="space-y-4 text-zinc-500 font-light text-lg">
                  <li>
                    <a href="https://m.me/0984130234" target="_blank" rel="noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-3"><FacebookLogo /> Facebook</a>
                  </li>
                  <li>
                    <a href="https://tiktok.com/@la_manhdey" target="_blank" rel="noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-3"><TiktokLogo /> TikTok</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@manhdev94" target="_blank" rel="noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-3"><YoutubeLogo /> YouTube</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-3"><LinkedinLogo /> LinkedIn</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-3"><GithubLogo /> GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-16 pb-8 border-t border-zinc-100">
          <div className="relative group cursor-default mb-6">
            {/* Vòng oval phát sáng */}
            <div className="absolute inset-0 border-[1.5px] border-brand-500/20 rounded-[100%] blur-[2px] scale-110 group-hover:border-brand-400/60 group-hover:blur-[4px] group-hover:scale-115 transition-all duration-700"></div>
            <div className="absolute inset-0 border-[0.5px] border-brand-300/40 rounded-[100%] scale-105 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="flex flex-col items-center justify-center px-16 py-8 bg-gradient-to-b from-white/80 to-white/30 backdrop-blur-md rounded-[100%] border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(20,184,166,0.1)] transition-all duration-700 relative overflow-hidden">
               <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_70%,#14b8a6_100%)] opacity-0 group-hover:opacity-15 animate-[spin_4s_linear_infinite] rounded-[100%] transition-opacity duration-700"></div>
               
               <div className="flex items-center gap-3 mb-2 relative z-10">
                 <span className="text-3xl text-zinc-300 font-light group-hover:text-brand-300 transition-colors duration-500">©</span>
                 <span className="text-5xl font-signature tracking-wider text-zinc-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-blue-600 transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-md">Mạnh Trần</span>
               </div>
               
               <div className="flex items-center gap-4 w-full mb-3 relative z-10">
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-300 group-hover:to-brand-300 transition-colors duration-500"></div>
                 <span className="text-lg font-mono font-semibold tracking-[0.25em] text-zinc-500 group-hover:text-brand-500 transition-colors duration-500">2026</span>
                 <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-300 group-hover:to-brand-300 transition-colors duration-500"></div>
               </div>
               
               <div className="text-[0.65rem] font-bold tracking-[0.35em] text-zinc-400 group-hover:text-zinc-500 uppercase mb-4 relative z-10 transition-colors duration-500">
                 All Rights Reserved
               </div>
               
               <div className="text-sm font-bold tracking-[0.15em] text-zinc-600 group-hover:text-brand-600 bg-zinc-50/80 group-hover:bg-brand-50/80 px-5 py-1.5 rounded-full border border-zinc-200 group-hover:border-brand-200/60 shadow-sm transition-all duration-500 relative z-10">
                 0984.130.234
               </div>
            </div>
          </div>
          
          <div className="text-zinc-400 font-mono text-sm mt-4">
            Trần Văn Mạnh | FullStack Developer
          </div>
        </div>
      </div>
    </footer>
  )
}

function FloatingContact({ isOpen, setIsOpen }) {
  const toggleOpen = () => setIsOpen(!isOpen)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  const contacts = [
    { name: "Zalo", icon: <ChatCircle weight="fill" />, color: "bg-gradient-to-r from-blue-400 to-[#0068FF]", shadow: "shadow-blue-500/40", url: "https://zalo.me/0984130234" },
    { name: "Facebook", icon: <FacebookLogo weight="fill" />, color: "bg-gradient-to-r from-blue-600 to-[#0866FF]", shadow: "shadow-blue-600/40", url: "https://m.me/0984130234" },
    { name: "TikTok", icon: <TiktokLogo weight="fill" />, color: "bg-gradient-to-r from-zinc-800 to-black", shadow: "shadow-black/40", url: "https://tiktok.com/@la_manhdey" },
    { name: "YouTube", icon: <YoutubeLogo weight="fill" />, color: "bg-gradient-to-r from-red-500 to-[#FF0000]", shadow: "shadow-red-500/40", url: "https://www.youtube.com/@manhdev94" },
    { name: "Email", icon: <EnvelopeSimple weight="fill" />, color: "bg-gradient-to-r from-brand-400 to-brand-600", shadow: "shadow-brand-500/40", url: "mailto:manhquyhop2@gmail.com" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.5, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 18 }
    },
    exit: { opacity: 0, scale: 0.8, y: 10, transition: { duration: 0.2 } }
  }

  return (
    <div ref={contactRef} className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-5">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-3 origin-bottom-right"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, x: -8 }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white shadow-xl ${contact.shadow} ${contact.color} border border-white/20 backdrop-blur-md relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="text-sm font-semibold tracking-wide z-10">{contact.name}</span>
                <span className="text-2xl z-10">{contact.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center relative group"
      >
        {/* Lớp viền tỏa sáng lan rộng bảy sắc cầu vồng */}
        <div className="absolute inset-[-12px] bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#06b6d4] rounded-full blur-[16px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

        {/* Nút bấm chính */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.6),0_10px_25px_rgba(236,72,153,0.5)] border border-white/50 flex items-center justify-center text-white z-10 overflow-hidden">

          {/* Nền lốc xoáy đa sắc (Conic Gradient Spinning) */}
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#ec4899,#a855f7,#3b82f6,#2dd4bf,#facc15,#ec4899)] animate-[spin_4s_linear_infinite]"></div>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative z-10">
                <X size={34} weight="bold" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group-hover:animate-bounce relative z-10"
              >
                <ChatTeardropDots size={38} weight="fill" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  )
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <AnimatedBackground />
      <main className="font-sans selection:bg-brand-200 selection:text-brand-900 overflow-visible">
        <HeroSection onContactClick={() => setIsContactOpen(true)} />
        <BentoGrid />
        <FeaturedWork />
        <Footer />
      </main>
      <FloatingContact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  )
}

export default App
