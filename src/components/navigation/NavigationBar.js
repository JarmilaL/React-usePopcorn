import { Search } from './Search';
import { Logo } from './Logo';
import NumberOfResults from './NumberOfResults';

export function NavigationBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumberOfResults />
    </nav>
  );
}
