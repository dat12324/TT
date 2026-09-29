import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '@/components/common/Container'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/mockData/products'

function ProductsPage() {
  const [params] = useSearchParams()
  const [sort, setSort] = useState(params.get('sort') || 'default')
  const query = params.get('search')?.toLowerCase() || ''
  const brand = params.get('brand')?.toLowerCase() || ''
  const items = useMemo(() => products.filter((item) => (!query || `${item.name} ${item.brand}`.toLowerCase().includes(query)) && (!brand || item.brand.toLowerCase() === brand)).sort((a, b) => sort === 'price-asc' ? a.discountPrice - b.discountPrice : sort === 'price-desc' ? b.discountPrice - a.discountPrice : sort === 'best-selling' ? b.sold - a.sold : sort === 'newest' ? Number(b.isNew) - Number(a.isNew) : a.id - b.id), [brand, query, sort])
  return <Container className="py-8"><p className="text-sm text-slate-500">Trang chủ / Điện thoại</p><div className="mb-6 mt-3 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-3xl font-bold text-slate-900">Điện thoại</h1><p className="mt-1 text-sm text-slate-500">Chọn smartphone phù hợp với nhu cầu và ngân sách của bạn.</p></div><select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"><option value="default">Sắp xếp mặc định</option><option value="price-asc">Giá thấp đến cao</option><option value="price-desc">Giá cao đến thấp</option><option value="best-selling">Bán chạy nhất</option><option value="newest">Mới nhất</option></select></div><p className="mb-4 text-sm text-slate-500">Tìm thấy {items.length} sản phẩm</p>{items.length ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">{items.map((item) => <ProductCard key={item.id} product={item} />)}</div> : <div className="rounded-xl border border-dashed p-12 text-center text-slate-500">Không tìm thấy sản phẩm phù hợp.</div>}</Container>
}

export default ProductsPage
