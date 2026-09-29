import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Headphones, Menu, PackageSearch, ShoppingCart, Smartphone, UserRound, X } from 'lucide-react'
import Container from '@/components/common/Container'
import SearchInput from '@/components/common/SearchInput'
import { productCategories } from '@/constants/navigation'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const isActive = (item) => location.pathname === item.href.split('?')[0] && (item.href.includes('?') ? location.search === item.href.slice(item.href.indexOf('?')) : !location.search)
  const handleSearch = (event) => { event.preventDefault(); navigate(searchTerm.trim() ? `/products?search=${encodeURIComponent(searchTerm.trim())}` : '/products'); setIsMobileMenuOpen(false) }
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return <header className="sticky top-0 z-40 bg-white shadow-[0_2px_14px_rgba(15,23,42,0.07)]">
    <div className="hidden border-b border-slate-100 bg-slate-50/90 py-1.5 text-xs text-slate-600 sm:block"><Container className="flex items-center justify-between"><p>Miễn phí giao hàng toàn quốc cho đơn từ 2 triệu</p><a href="tel:19001234" className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-primary-600"><Headphones size={14} /> Tư vấn: 1900 1234</a></Container></div>
    <Container><div className="flex h-16 items-center gap-2 lg:h-[72px] lg:gap-3">
      <button type="button" onClick={() => setIsMobileMenuOpen((value) => !value)} className="grid size-10 shrink-0 place-items-center rounded-xl text-slate-700 hover:bg-slate-100 lg:hidden" aria-label="Menu">{isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      <Link to="/" className="mr-1 flex shrink-0 items-center gap-2" onClick={closeMobileMenu}><span className="grid size-9 place-items-center rounded-xl bg-primary-600 text-white lg:size-10"><Smartphone size={21} /></span><span className="hidden text-xl font-black tracking-[-0.04em] text-slate-900 sm:inline lg:hidden xl:inline">TLU<span className="text-primary-600">Phone</span></span></Link>
      <div className="relative hidden lg:block"><button type="button" onClick={() => setIsCategoryOpen((value) => !value)} className="flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-primary-600"><Menu size={18} /> Danh mục <ChevronDown size={15} className={isCategoryOpen ? 'rotate-180' : ''} /></button>{isCategoryOpen && <div className="absolute left-0 top-[calc(100%+10px)] w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl">{productCategories.map((item) => <Link key={item.label} to={item.href} onClick={() => setIsCategoryOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700">Điện thoại {item.label}</Link>)}</div>}</div>
      <SearchInput id="header-search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onSubmit={handleSearch} placeholder="Bạn cần tìm điện thoại nào?" className="hidden min-w-0 flex-1 md:block" />
      <div className="ml-auto flex items-center gap-1"><HeaderAction href="/profile/orders" icon={PackageSearch} label="Đơn hàng" /><HeaderAction href="/login" icon={UserRound} label="Tài khoản" /><Link to="/cart" className="flex h-11 items-center gap-2 rounded-xl px-2.5 text-slate-700 hover:bg-primary-50 hover:text-primary-700"><ShoppingCart size={22} /><span className="hidden text-xs font-semibold xl:inline">Giỏ hàng</span></Link></div>
    </div><SearchInput id="mobile-search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onSubmit={handleSearch} placeholder="Tìm điện thoại, thương hiệu..." compact className="pb-3 md:hidden" /></Container>
    <Navbar isActive={isActive} /><MobileMenu open={isMobileMenuOpen} isActive={isActive} onClose={closeMobileMenu} />
  </header>
}

function HeaderAction({ href, icon: Icon, label }) { return <Link to={href} className="hidden h-11 items-center gap-2 rounded-xl px-2.5 text-slate-700 hover:bg-primary-50 hover:text-primary-700 lg:flex"><Icon size={21} /><span className="hidden text-xs font-semibold xl:inline">{label}</span></Link> }

export default Header
