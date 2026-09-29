import { Search } from 'lucide-react'

function SearchInput({ id, value, onChange, onSubmit, placeholder = 'Tìm kiếm...', compact = false, className = '' }) {
  return (
    <form onSubmit={onSubmit} className={`relative ${className}`}>
      <label htmlFor={id} className="sr-only">Tìm kiếm</label>
      <input id={id} value={value} onChange={onChange} placeholder={placeholder} className={`${compact ? 'h-10 pr-11' : 'h-11 pr-12'} w-full rounded-xl border border-slate-200 bg-slate-50 pl-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100`} />
      <button type="submit" aria-label="Tìm kiếm" className={`absolute right-1 top-1 grid ${compact ? 'size-8' : 'size-9'} place-items-center rounded-lg bg-primary-600 text-white transition hover:bg-primary-700`}><Search size={compact ? 17 : 18} /></button>
    </form>
  )
}

export default SearchInput
