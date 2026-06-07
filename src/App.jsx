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
  Phone
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
  "Tự động hóa PLC",
  "Phát triển Website",
  "Ứng dụng Mobile",
  "Machine Vision",
  "Phần mềm CMMS",
  "Hệ thống EPMS"
];

function HeroSection() {
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
                  transition={{ duration: 0.5, ease: "circOut" }}
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
            <a href="#work" className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-medium shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
              Khám Phá Dự Án <ArrowRight weight="bold" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 glass-panel text-zinc-900 rounded-full font-medium hover:bg-white transition-all duration-300 border-zinc-200">
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
            className="md:col-span-2 glass-card p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-zinc-900 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
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
            className="glass-card p-10 rounded-[2rem] flex flex-col justify-between group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-zinc-100 group-hover:-translate-y-2 transition-transform duration-500">
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
            className="glass-card p-10 rounded-[2rem] flex flex-col justify-between group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm border border-zinc-100 group-hover:-translate-y-2 transition-transform duration-500">
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
            className="md:col-span-4 glass-card p-10 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between group overflow-hidden relative bg-gradient-to-r from-white to-zinc-50/50"
          >
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[url('/dashboard.png')] bg-cover bg-left opacity-[0.08] mix-blend-multiply group-hover:scale-105 transition-transform duration-1000"></div>
            
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
      <div className="bg-white/80 backdrop-blur-xl border border-white p-6 md:p-10 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-shadow duration-500">
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
          <button className="inline-flex items-center gap-3 w-max px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all group-btn">
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
            <h2 className="text-6xl md:text-[5rem] font-bold text-zinc-900 mb-8 tracking-tighter leading-[1.1]">Let's build<br/>something.</h2>
            <p className="text-2xl text-zinc-500 font-light mb-12 max-w-lg">Liên hệ ngay để thảo luận về giải pháp tối ưu cho doanh nghiệp của bạn.</p>
            <a href="mailto:manhquyhop2@gmail.com" className="inline-flex items-center gap-4 px-10 py-5 bg-brand-600 text-white rounded-full font-medium text-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(20,184,166,0.3)] transition-all">
              Gửi Email <ArrowRight weight="bold" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 glass-card p-12 rounded-[3rem]">
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
                  <a href="https://m.me/0984130234" target="_blank" rel="noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-3"><FacebookLogo /> Messenger</a>
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
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
          <p className="text-zinc-400 font-light">© 2026 Trần Văn Mạnh. All rights reserved.</p>
          <div className="text-zinc-400 font-mono text-sm mt-4 md:mt-0">
            Ứng dụng TVM | Developer
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <AnimatedBackground />
      <main className="font-sans selection:bg-brand-200 selection:text-brand-900 overflow-visible">
        <HeroSection />
        <BentoGrid />
        <FeaturedWork />
        <Footer />
      </main>
    </>
  )
}

export default App
