import { Camera, Mail, MapPin, MessageCircle, Phone, Play, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

const groups = [{ title: 'Chính sách', links: ['Chính sách mua hàng', 'Chính sách bảo hành', 'Chính sách đổi trả', 'Chính sách bảo mật'] }, { title: 'Hỗ trợ khách hàng', links: ['Hướng dẫn mua hàng', 'Hướng dẫn thanh toán', 'Tra cứu đơn hàng', 'Câu hỏi thường gặp'] }]

function Footer() {
  return <footer className="bg-slate-950 text-slate-300"><Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16"><div><Link to="/" className="flex items-center gap-2 text-white"><span className="grid size-10 place-items-center rounded-xl bg-primary-600"><Smartphone size={22} /></span><span className="text-xl font-black">TLU<span className="text-rose-400">Phone</span></span></Link><p className="mt-4 text-sm leading-6 text-slate-400">Hệ thống bán lẻ điện thoại chính hãng, mang đến sản phẩm chất lượng cùng dịch vụ tận tâm.</p><div className="mt-5 flex gap-2"><SocialLink label="Facebook" icon={MessageCircle} /><SocialLink label="Instagram" icon={Camera} /><SocialLink label="Youtube" icon={Play} /></div></div>{groups.map((group) => <div key={group.title}><h3 className="font-bold text-white">{group.title}</h3><ul className="mt-4 space-y-3 text-sm text-slate-400">{group.links.map((link) => <li key={link}><Link to="/" className="hover:text-white">{link}</Link></li>)}</ul></div>)}<div><h3 className="font-bold text-white">Liên hệ</h3><ul className="mt-4 space-y-4 text-sm text-slate-400"><li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-rose-400" size={18} /><span>123 Nguyễn Văn Linh, Hải Châu, Đà Nẵng</span></li><li className="flex items-center gap-3"><Phone className="shrink-0 text-rose-400" size={18} /><a href="tel:19001234" className="hover:text-white">1900 1234</a></li><li className="flex items-center gap-3"><Mail className="shrink-0 text-rose-400" size={18} /><a href="mailto:support@tluphone.vn" className="hover:text-white">support@tluphone.vn</a></li></ul></div></Container><div className="border-t border-slate-800"><Container className="py-5 text-center text-xs text-slate-500 sm:text-sm">© 2026 TLUPhone. Xây dựng phục vụ đồ án tốt nghiệp.</Container></div></footer>
}

function SocialLink({ label, icon: Icon }) { return <a href="#" aria-label={label} className="grid size-9 place-items-center rounded-lg bg-slate-800 text-slate-300 hover:bg-primary-600 hover:text-white"><Icon size={17} /></a> }

export default Footer
