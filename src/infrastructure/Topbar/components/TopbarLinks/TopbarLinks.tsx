import { FunctionComponent } from 'react'
import NavItem from '@/infrastructure/Topbar/components/TopbarLinks/components/NavItem'

const categories = [
  { name: 'Rowery', url: '/sklep/rowery' },
  { name: 'Serwis', url: '/serwis' },
  { name: 'Kontakt', url: '/kontakt' }
] as const

const TopbarLinks: FunctionComponent = () => (
  <>
    {categories.map(
      ({ name, url }) => (
        <NavItem key={url} url={url} title={name}/>
      )
    )}
  </>
)


export default TopbarLinks
