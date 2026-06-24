import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, DeviceMobile, GithubLogo, LinkedinLogo, EnvelopeSimple, Lightning, Factory, Eye, FacebookLogo, ChatCircle, Phone, TiktokLogo, YoutubeLogo, X, ChatTeardropDots, Cpu, WifiHigh, Sun, Moon } from '@phosphor-icons/react'

// ===== NAVBAR =====
function Navbar({theme,onToggleTheme}) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const isDark = theme === 'dark'
  return (
    <header style={{position:'fixed',top:0,left:0,right:0,zIndex:100,transition:'all 0.4s',background:scrolled?'var(--nav-bg-scrolled)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid var(--nav-border)':'none'}}>
      <div className='nav-shell' style={{maxWidth:1280,margin:'0 auto',padding:'0 32px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,borderRadius:8,background:'linear-gradient(135deg,#06b6d4,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center'}}><Cpu size={18} color='white' weight='fill'/></div>
          <span style={{fontWeight:700,fontSize:16,color:'var(--text-primary)',letterSpacing:'-0.02em'}}>Mạnh Trần<span style={{color:'#06b6d4'}}>.</span></span>
        </div>
        <nav className='nav-menu' style={{display:'flex',gap:32}}>
          {[['#expertise','Kỹ Năng'],['#work','Dự Án'],['#about','Về Tôi'],['#contact','Liên Hệ']].map(([href,label]) => (
            <a key={href} href={href} className='nav-link'>{label}</a>
          ))}
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <button className='theme-toggle' type='button' onClick={onToggleTheme} aria-label={isDark?'Bật chế độ sáng':'Bật chế độ tối'} title={isDark?'Bật chế độ sáng':'Bật chế độ tối'}>
            {isDark ? <Sun size={18} weight='bold'/> : <Moon size={18} weight='bold'/>}
          </button>
          <a href='#contact' className='btn-primary nav-cta' style={{padding:'8px 20px',fontSize:13}}>Liên Hệ</a>
        </div>
      </div>
    </header>
  )
}

// ===== HERO =====
const ROLES = ['PLC & Automation','Machine Vision','IoT & SCADA','Web & App Dev','CMMS & EPMS']
function HeroSection() {
  const [ri, setRi] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY,[0,600],[0,80])
  const op = useTransform(scrollY,[0,400],[1,0])
  useEffect(() => { const t=setInterval(()=>setRi(p=>(p+1)%ROLES.length),2800); return ()=>clearInterval(t) },[])
  return (
    <section style={{minHeight:'100dvh',display:'flex',alignItems:'center',paddingTop:80,paddingBottom:60,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(6,182,212,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.03) 1px,transparent 1px)',backgroundSize:'50px 50px',pointerEvents:'none'}}></div>
      <div className='orb' style={{width:600,height:600,top:-200,left:-200,background:'radial-gradient(circle,rgba(6,182,212,0.12),transparent 70%)'}}></div>
      <div className='orb' style={{width:500,height:500,bottom:-100,right:-100,background:'radial-gradient(circle,rgba(139,92,246,0.1),transparent 70%)'}}></div>
      <motion.div className='hero-grid' style={{y:y1,opacity:op,maxWidth:1280,margin:'0 auto',padding:'0 32px',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
        <div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{marginBottom:24}}>
            <span className='tag-cyan'><span style={{width:6,height:6,borderRadius:'50%',background:'#22d3ee',display:'inline-block'}}></span>Sẵn sàng nhận dự án</span>
          </motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} style={{fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:900,lineHeight:1.1,letterSpacing:'-0.03em',color:'var(--text-primary)',marginBottom:16}}>
            Trần Văn Mạnh
          </motion.h1>
          <div style={{height:56,overflow:'hidden',marginBottom:16}}>
            <AnimatePresence mode='wait'>
              <motion.div key={ri} initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-40,opacity:0}} transition={{duration:0.25}} className='gradient-text-cyan' style={{fontSize:'clamp(1.5rem,3vw,2.5rem)',fontWeight:700}}>{ROLES[ri]}</motion.div>
            </AnimatePresence>
          </div>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} style={{fontSize:18,color:'var(--text-secondary)',lineHeight:1.7,maxWidth:480,marginBottom:40}}>Nơi tư duy công nghiệp và logic máy móc hòa quyện cùng giao diện phần mềm trực quan.</motion.p>
          <motion.div className='hero-actions' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}} style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <a href='#work' className='btn-primary'>Khám phá dự án <ArrowRight weight='bold' size={16}/></a>
            <a href='#contact' className='btn-secondary'>Liên hệ ngay</a>
          </motion.div>
          <motion.div className='hero-stats' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} style={{display:'flex',gap:32,marginTop:48}}>
            {[['8+','Năm KN'],['50+','Dự án'],['20+','Khách hàng']].map(([n,l])=>(
              <div key={l}><div className='stat-number'>{n}</div><div style={{fontSize:12,color:'var(--text-muted)',marginTop:4,letterSpacing:'0.05em',textTransform:'uppercase'}}>{l}</div></div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:0.9,filter:'blur(20px)'}} animate={{opacity:1,scale:1,filter:'blur(0)'}} transition={{duration:1.2,delay:0.3}} style={{position:'relative',display:'flex',justifyContent:'center'}}>
          <div className='scan-container' style={{width:'100%',maxWidth:520,borderRadius:24,overflow:'hidden',border:'1px solid rgba(6,182,212,0.1)',boxShadow:'0 0 60px rgba(6,182,212,0.08)'}}>
            <motion.img animate={{y:[-8,8,-8]}} transition={{repeat:Infinity,duration:7,ease:'easeInOut'}} src='/hero.png' alt='Automation' style={{width:'100%',objectFit:'cover',mixBlendMode:'luminosity',opacity:0.9}}/>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ===== TICKER =====
const TECH=['PLC Siemens','Robot Delta','Cognex Vision','SCADA WinCC','React.js','Node.js','IoT MQTT','Keyence','SQL Server','Firebase','Electron','Python']
function SkillTicker() {
  return (
    <div style={{padding:'20px 0',borderTop:'1px solid var(--footer-border)',borderBottom:'1px solid var(--footer-border)',overflow:'hidden',background:'rgba(6,182,212,0.04)'}}>
      <div className='ticker-wrap'>
        <div className='ticker-content animate-ticker'>
          {[...TECH,...TECH].map((t,i)=>(
            <span key={i} style={{fontSize:13,fontWeight:600,letterSpacing:'0.06em',color:'var(--text-muted)',textTransform:'uppercase',display:'flex',alignItems:'center',gap:16}}>{t}<span style={{color:'rgba(6,182,212,0.7)'}}>•</span></span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ===== EXPERTISE (BENTO) =====
const CARDS=[
  {icon:<Factory size={32} weight='duotone'/>,title:'Tự Động Hóa',desc:'PLC, robot delta tốc độ cao, băng chuyền, case packer & hệ thống phân loại thông minh.',color:'#06b6d4',span:2},
  {icon:<Eye size={32} weight='duotone'/>,title:'Machine Vision',desc:'Xử lý ảnh công nghiệp, OCR, phát hiện lỗi với Cognex & Keyence.',color:'#8b5cf6',span:1},
  {icon:<DeviceMobile size={32} weight='duotone'/>,title:'Web & App Dev',desc:'Ứng dụng React, Electron, Node.js chuyên nghiệp.',color:'#ec4899',span:1},
  {icon:<Lightning size={32} weight='duotone'/>,title:'CMMS & EPMS',desc:'Quản lý bảo trì thiết bị và giám sát điện năng toàn nhà máy theo thời gian thực.',color:'#f59e0b',span:2},
  {icon:<WifiHigh size={32} weight='duotone'/>,title:'IoT & SCADA',desc:'Kết nối máy móc lên cloud, dashboard realtime với MQTT & Firebase.',color:'#10b981',span:2},
]
function ExpertiseSection() {
  return (
    <section id='expertise' style={{padding:'100px 0',position:'relative'}}>
      <div className='section-container' style={{maxWidth:1280,margin:'0 auto',padding:'0 32px'}}>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{textAlign:'center',marginBottom:64}}>
          <span className='tag-cyan' style={{marginBottom:16,display:'inline-flex'}}>Hệ sinh thái kỹ năng</span>
          <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,letterSpacing:'-0.03em',color:'var(--text-primary)',marginTop:12}}>Chuyên Môn & Công Nghệ</h2>
          <p style={{color:'var(--text-secondary)',fontSize:18,marginTop:12,maxWidth:500,margin:'12px auto 0'}}>Nền tảng vững chắc từ phần cứng công nghiệp đến hệ thống phần mềm đám mây.</p>
        </motion.div>
        <div className='expertise-grid' style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,autoRows:'auto'}}>
          {CARDS.map((c,i)=>(
            <motion.div key={i} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,type:'spring',stiffness:80}} className='glass-dark card-lift expertise-card' style={{gridColumn:'span '+c.span,borderRadius:20,padding:32,position:'relative',overflow:'hidden',minHeight:200}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 80% 20%,'+c.color+'08,transparent 70%)',pointerEvents:'none'}}></div>
              <div style={{width:52,height:52,borderRadius:14,background:c.color+'15',border:'1px solid '+c.color+'25',display:'flex',alignItems:'center',justifyContent:'center',color:c.color,marginBottom:20}}>{c.icon}</div>
              <h3 style={{fontSize:20,fontWeight:700,color:'var(--text-primary)',marginBottom:10,letterSpacing:'-0.02em'}}>{c.title}</h3>
              <p style={{color:'var(--text-secondary)',fontSize:14,lineHeight:1.6}}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== PROJECTS =====
const PROJECTS=[
  {name:'Robot Delta & Đóng Thùng',type:'Automation · Robotics',desc:'Hệ thống gắp thả tự động bằng Robot Delta tốc độ cao, tích hợp Case Packer tự động khép kín, nâng cao năng suất 300%.',img:'/robot.png',color:'#06b6d4',tags:['PLC','Robot Delta','HMI']},
  {name:'Machine Vision: OCR & Lỗi',type:'AI · Machine Vision',desc:'Thị giác máy tính công nghiệp nhận diện, đọc OCR mã vạch/date code, tự động loại bỏ sản phẩm lỗi với độ chính xác 99.8%.',img:'/vision.png',color:'#8b5cf6',tags:['Cognex','Keyence','Python']},
  {name:'CMMS - Quản lý Bảo Trì',type:'Enterprise Software',desc:'Số hóa quy trình quản lý tài sản, bảo trì thiết bị và theo dõi KPI nhân sự. Dashboard trực quan realtime.',img:'/dashboard.png',color:'#ec4899',tags:['React','Node.js','SQL']},
  {name:'EPMS - Giám Sát Điện Năng',type:'IoT · Energy',desc:'Giải pháp IoT giám sát điện năng toàn nhà máy theo thời gian thực, báo cáo phân tích tối ưu chi phí vận hành.',img:'/epms.png',color:'#f59e0b',tags:['IoT','MQTT','Firebase']},
  {name:'Phân Loại Sản Phẩm Tự Động',type:'Full Automation',desc:'Hệ thống phân loại bưu kiện tự động với băng tải động cơ, cân động tốc độ cao và phần mềm quản lý kho tích hợp.',img:'/sorting.png',color:'#10b981',tags:['PLC','Vision','SCADA']},
]
function ProjectCard({p,index}) {
  const ref=useRef(null)
  const {scrollYProgress}=useScroll({target:ref,offset:['0 1','0.6 1']})
  const smooth=useSpring(scrollYProgress,{stiffness:100,damping:30})
  const y=useTransform(smooth,[0,1],[100,0])
  const op=useTransform(smooth,[0,1],[0,1])
  const isEven=index%2===0
  return (
    <motion.div ref={ref} style={{y,opacity:op,marginBottom:60}} className='glass-dark project-shell' style2={{borderRadius:24,overflow:'hidden',border:'1px solid var(--glass-border)'}}>
      <div className='project-layout' style={{display:'grid',gridTemplateColumns:isEven?'55% 45%':'45% 55%',minHeight:360,borderRadius:24,overflow:'hidden',border:'1px solid var(--glass-border)',background:'var(--project-bg)'}}>
        <div className='project-image-wrap' style={{order:isEven?0:1}}>
          <img src={p.img} alt={p.name}/>
          <div className='project-image-overlay'></div>
        </div>
        <div className='project-copy' style={{padding:40,display:'flex',flexDirection:'column',justifyContent:'center',order:isEven?1:0}}>
          <div style={{marginBottom:16,display:'flex',gap:8,flexWrap:'wrap'}}>
            <span style={{fontSize:11,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:p.color,background:p.color+'15',border:'1px solid '+p.color+'30',padding:'4px 12px',borderRadius:100}}>{p.type}</span>
          </div>
          <h3 style={{fontSize:'clamp(1.4rem,2.5vw,1.8rem)',fontWeight:800,color:'var(--text-primary)',marginBottom:12,letterSpacing:'-0.02em'}}>{p.name}</h3>
          <p style={{color:'var(--text-secondary)',fontSize:15,lineHeight:1.7,marginBottom:24}}>{p.desc}</p>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:28}}>
            {p.tags.map(t=>(<span key={t} className='skill-chip'>{t}</span>))}
          </div>
          <button className='btn-secondary' style={{width:'fit-content',fontSize:13}}>Xem chi tiết <ArrowRight size={14}/></button>
        </div>
      </div>
    </motion.div>
  )
}
function ProjectsSection() {
  return (
    <section id='work' style={{padding:'100px 0'}}>
      <div className='section-container' style={{maxWidth:1280,margin:'0 auto',padding:'0 32px'}}>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{textAlign:'center',marginBottom:64}}>
          <span className='tag-cyan' style={{marginBottom:16,display:'inline-flex'}}>Portfolio</span>
          <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,letterSpacing:'-0.03em',color:'var(--text-primary)',marginTop:12}}>Dự Án Tiêu Biểu</h2>
          <p style={{color:'var(--text-secondary)',fontSize:18,marginTop:12}}>Những giải pháp thực tế đã triển khai mang lại giá trị vận hành bền vững.</p>
        </motion.div>
        {PROJECTS.map((p,i)=>(<ProjectCard key={i} p={p} index={i}/>))}
      </div>
    </section>
  )
}

// ===== ABOUT =====
function AboutSection() {
  const skills=[['PLC / HMI',90],['Robot & Vision',85],['Web Dev',88],['IoT / Cloud',80],['CMMS / EPMS',92]]
  return (
    <section id='about' style={{padding:'100px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent,rgba(6,182,212,0.02),transparent)',pointerEvents:'none'}}></div>
      <div className='section-container about-grid' style={{maxWidth:1280,margin:'0 auto',padding:'0 32px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
        <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <span className='tag-cyan' style={{marginBottom:16,display:'inline-flex'}}>Về tôi</span>
          <h2 style={{fontSize:'clamp(2rem,3.5vw,2.8rem)',fontWeight:800,color:'var(--text-primary)',letterSpacing:'-0.03em',marginTop:12,marginBottom:20}}>Kỹ sư tự động hóa<br/><span className='gradient-text-cyan'>& phát triển phần mềm</span></h2>
          <p style={{color:'var(--text-secondary)',fontSize:16,lineHeight:1.8,marginBottom:16}}>Với hơn 8 năm kinh nghiệm trong ngành tự động hóa công nghiệp, tôi chuyên tích hợp hệ thống robot, PLC và phát triển phần mềm quản trị doanh nghiệp.</p>
          <p style={{color:'var(--text-secondary)',fontSize:16,lineHeight:1.8,marginBottom:32}}>Từng triển khai dự án tại các nhà máy lớn tại Việt Nam, mang lại giải pháp tối ưu hóa quy trình sản xuất và giảm chi phí vận hành.</p>
          <div className='about-actions' style={{display:'flex',gap:16}}>
            <a href='tel:0984130234' className='btn-primary' style={{fontSize:14}}>Gọi ngay <Phone size={16}/></a>
            <a href='https://zalo.me/0984130234' className='btn-secondary' style={{fontSize:14}}>Zalo <ChatCircle size={16}/></a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <div className='glass-dark' style={{borderRadius:20,padding:32}}>
            <h4 style={{fontSize:14,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:24}}>Năng lực chuyên môn</h4>
            {skills.map(([name,pct],i)=>(
              <div key={i} style={{marginBottom:20}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                  <span style={{fontSize:14,fontWeight:600,color:'var(--text-primary)'}}>{name}</span>
                  <span style={{fontSize:13,fontFamily:'JetBrains Mono,monospace',color:'#22d3ee'}}>{pct}%</span>
                </div>
                <div style={{height:4,borderRadius:100,background:'var(--progress-track)',overflow:'hidden'}}>
                  <motion.div initial={{width:0}} whileInView={{width:pct+'%'}} viewport={{once:true}} transition={{duration:1,delay:i*0.15,ease:'easeOut'}} className='progress-bar'></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ===== CONTACT =====
function ContactSection() {
  return (
    <section id='contact' style={{padding:'100px 0'}}>
      <div className='contact-container' style={{maxWidth:900,margin:'0 auto',padding:'0 32px'}}>
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='glass-dark contact-panel' style={{borderRadius:28,padding:'60px 48px',textAlign:'center',position:'relative',overflow:'hidden',border:'1px solid rgba(6,182,212,0.1)'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 50% 0%,rgba(6,182,212,0.08),transparent 60%)',pointerEvents:'none'}}></div>
          <span className='tag-cyan' style={{marginBottom:20,display:'inline-flex'}}>Liên hệ</span>
          <h2 style={{fontSize:'clamp(2rem,4vw,3.5rem)',fontWeight:900,letterSpacing:'-0.03em',color:'var(--text-primary)',marginTop:12,marginBottom:16}}>Hãy cùng xây dựng<br/><span className='gradient-text-cyan'>điều gì đó tuyệt vời</span></h2>
          <p style={{color:'var(--text-secondary)',fontSize:18,maxWidth:480,margin:'0 auto 40px'}}>Liên hệ ngay để thảo luận về giải pháp tối ưu cho doanh nghiệp của bạn.</p>
          <div className='contact-actions' style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginBottom:48}}>
            <a href='mailto:manhquyhop2@gmail.com' className='btn-primary'>Gửi Email <EnvelopeSimple weight='bold' size={18}/></a>
            <a href='tel:0984130234' className='btn-secondary'>0984 130 234 <Phone size={16}/></a>
          </div>
          <div className='social-links' style={{display:'flex',justifyContent:'center',gap:24,flexWrap:'wrap'}}>
            {[{icon:<ChatCircle size={20}/>,label:'Zalo',url:'https://zalo.me/0984130234'},{icon:<FacebookLogo size={20}/>,label:'Facebook',url:'https://m.me/0984130234'},{icon:<TiktokLogo size={20}/>,label:'TikTok',url:'https://tiktok.com/@la_manhdey'},{icon:<YoutubeLogo size={20}/>,label:'YouTube',url:'https://www.youtube.com/@manhdev94'},{icon:<GithubLogo size={20}/>,label:'GitHub',url:'#'},{icon:<LinkedinLogo size={20}/>,label:'LinkedIn',url:'#'}].map(({icon,label,url})=>(
              <a key={label} href={url} target='_blank' rel='noreferrer' style={{display:'flex',alignItems:'center',gap:8,color:'var(--text-secondary)',textDecoration:'none',fontSize:14,fontWeight:500,padding:'8px 16px',borderRadius:10,border:'1px solid var(--glass-border)',transition:'all 0.3s'}} onMouseOver={e=>{e.currentTarget.style.color='#0891b2';e.currentTarget.style.borderColor='rgba(6,182,212,0.45)'}} onMouseOut={e=>{e.currentTarget.style.color='var(--text-secondary)';e.currentTarget.style.borderColor='var(--glass-border)'}}>{icon}{label}</a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer style={{borderTop:'1px solid var(--footer-border)',padding:'32px',textAlign:'center'}}>
      <p style={{color:'var(--text-muted)',fontSize:13,fontFamily:'JetBrains Mono,monospace'}}>© 2026 Trần Văn Mạnh • FullStack Automation Developer • 0984.130.234</p>
    </footer>
  )
}
// ===== FLOATING CONTACT =====
function FloatingContact({isOpen,setIsOpen}) {
  const ref=useRef(null)
  useEffect(()=>{
    const fn=(e)=>{ if(ref.current&&!ref.current.contains(e.target)) setIsOpen(false) }
    if(isOpen) document.addEventListener('mousedown',fn)
    return ()=>document.removeEventListener('mousedown',fn)
  },[isOpen,setIsOpen])
  const contacts=[
    {name:'Zalo',icon:<ChatCircle weight='fill' size={22}/>,bg:'linear-gradient(135deg,#0068FF,#4facfe)',url:'https://zalo.me/0984130234'},
    {name:'Facebook',icon:<FacebookLogo weight='fill' size={22}/>,bg:'linear-gradient(135deg,#0866FF,#4facfe)',url:'https://m.me/0984130234'},
    {name:'TikTok',icon:<TiktokLogo weight='fill' size={22}/>,bg:'linear-gradient(135deg,#010101,#69C9D0)',url:'https://tiktok.com/@la_manhdey'},
    {name:'YouTube',icon:<YoutubeLogo weight='fill' size={22}/>,bg:'linear-gradient(135deg,#FF0000,#ff6b6b)',url:'https://www.youtube.com/@manhdev94'},
    {name:'Email',icon:<EnvelopeSimple weight='fill' size={22}/>,bg:'linear-gradient(135deg,#06b6d4,#8b5cf6)',url:'mailto:manhquyhop2@gmail.com'},
  ]
  return (
    <div ref={ref} className='floating-contact' style={{position:'fixed',bottom:32,right:32,zIndex:1000,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:12}}>
      <AnimatePresence>
        {isOpen&&(
          <motion.div key='menu' initial={{opacity:0,scale:0.8,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.8,y:20}} style={{display:'flex',flexDirection:'column',gap:10}}>
            {contacts.map((c,i)=>(
              <motion.a key={i} href={c.url} target='_blank' rel='noreferrer' initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:40}} transition={{delay:i*0.06}} whileHover={{scale:1.05,x:-4}} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 18px',borderRadius:14,color:'white',textDecoration:'none',fontSize:14,fontWeight:600,background:c.bg,boxShadow:'0 4px 20px rgba(0,0,0,0.3)',border:'1px solid rgba(255,255,255,0.15)'}}>
                {c.icon}{c.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={()=>setIsOpen(!isOpen)} whileHover={{scale:1.1}} whileTap={{scale:0.9}} style={{width:60,height:60,borderRadius:'50%',border:'none',cursor:'pointer',position:'relative',overflow:'visible'}}>
        <div style={{position:'absolute',inset:-8,borderRadius:'50%',background:'conic-gradient(#ec4899,#8b5cf6,#06b6d4,#ec4899)',filter:'blur(12px)',opacity:0.7,animation:'spin 3s linear infinite'}}></div>
        <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'conic-gradient(#ec4899,#8b5cf6,#06b6d4,#ec4899)',animation:'spin 3s linear infinite',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <AnimatePresence mode='wait'>
            {isOpen?(<motion.div key='x' initial={{rotate:-90,scale:0}} animate={{rotate:0,scale:1}} exit={{rotate:90,scale:0}}><X size={26} color='white' weight='bold'/></motion.div>)
            :(<motion.div key='chat' initial={{rotate:90,scale:0}} animate={{rotate:0,scale:1}} exit={{rotate:-90,scale:0}}><ChatTeardropDots size={28} color='white' weight='fill'/></motion.div>)}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  )
}
// ===== APP =====
function App() {
  const [open,setOpen]=useState(false)
  const [theme,setTheme]=useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme}/>
      <main>
        <HeroSection/>
        <SkillTicker/>
        <ExpertiseSection/>
        <div style={{height:1,background:'linear-gradient(90deg,transparent,rgba(6,182,212,0.2),transparent)',margin:'0 32px'}}></div>
        <ProjectsSection/>
        <div style={{height:1,background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)',margin:'0 32px'}}></div>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
      </main>
      <FloatingContact isOpen={open} setIsOpen={setOpen}/>
    </>
  )
}
export default App
