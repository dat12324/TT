import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { mainNavigation, productCategories } from '@/constants/navigation'

function MobileMenu({ open, isActive, onClose }) {
  return (
    <div className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'}`}>
      <Container className="py-3">
        <nav className="grid grid-cols-2 gap-1">
          {mainNavigation.map((item) => <Link key={item.label} to={item.href} onClick={onClose} className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${isActive(item) ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-primary-50 hover:text-primary-700'}`}>{item.label}</Link>)}
        </nav>
        <div className="mt-2 grid grid-cols-2 gap-1 border-t border-slate-100 pt-2">
          <Link to="/profile/orders" onClick={onClose} className="rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50">Đơn hàng</Link>
          <Link to="/login" onClick={onClose} className="rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50">Tài khoản</Link>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {productCategories.map((item) => <Link key={item.label} to={item.href} onClick={onClose} className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-primary-200 hover:text-primary-700">{item.label}</Link>)}
        </div>
      </Container>
    </div>
  )
}

export default MobileMenu
