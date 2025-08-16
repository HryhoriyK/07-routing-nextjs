import Link from 'next/link';
import { getTags } from '@/lib/api';
import css from './default.module.css';

const NotesSidebar = async () => {
  const tags = await getTags();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {tags.map((tag) => (
        <li key={tag.id} className={css.menuItem}>
          <Link href={`/notes/filter/${tag.id}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;