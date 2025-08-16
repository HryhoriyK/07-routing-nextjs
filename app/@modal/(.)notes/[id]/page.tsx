import { fetchNoteById } from '@/lib/api';
import NotePreview from '@/components/NotePreview/NotePreview';
import css from '@/components/NotePreview/NotePreview.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreviewPage = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <NotePreview>
      <h2 className={css.header}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      </NotePreview>
  );
};

export default NotePreviewPage;