import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { mainNavigation } from '@/constants/navigation'

function Navbar({ isActive }) {
  return (
    <div className="hidden border-t border-slate-100 lg:block">
      <Container>
        <nav className="flex h-10 items-center justify-center gap-10">
          {mainNavigation.map((item) => {
            const active = isActive(item)
            return <Link key={item.label} to={item.href} className={`flex h-full items-center border-b-2 text-sm font-medium transition ${active ? 'border-primary-600 text-primary-700' : 'border-transparent text-slate-600 hover:text-primary-600'}`}>{item.label}</Link>
          })}
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
