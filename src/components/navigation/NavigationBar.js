import { Search } from './Search';
import { Logo } from './Logo';
import NumberOfResults from './NumberOfResults';

export function NavigationBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumberOfResults movies={movies} />
    </nav>
  );
}
