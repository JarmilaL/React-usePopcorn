import { WatchedBox } from './watched/WatchedBox';
import { ListBox } from './list/ListBox';

export function Main() {
  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
    </main>
  );
}
