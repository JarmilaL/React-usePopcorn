import { WatchedBox } from './watched/WatchedBox';
import { ListBox } from './list/ListBox';

export function Main({ movies }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}
