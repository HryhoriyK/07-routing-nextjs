import css from "./layout.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar}: Props) => {
  return (
    <section className={css.container}>
      <aside className={css.sidebarTags}>{sidebar}</aside>
      <div className={css.sidebar}>{children}</div>
    </section>
  );
};

export default NotesLayout;