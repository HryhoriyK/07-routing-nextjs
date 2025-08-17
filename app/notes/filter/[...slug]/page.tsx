import { fetchNotes } from '@/lib/api';
import type { FetchNotesResponse } from '@/lib/api';
import { notFound } from 'next/navigation';
import Notes from './Notes.client';

interface Props {
  params: { slug: string[] };
}

const NotesByTag = async ({ params }: Props) => {
  const [tag] = params.slug || [];

  if (!tag) {
    notFound();
  }

  const filterTag = tag === 'all' ? undefined : tag;

  let initialData: FetchNotesResponse = {
    notes: [],
    totalPages: 1,
    currentPage: 1,
  };
  
  try {
    initialData = await fetchNotes(1, 12, filterTag);
  } catch (error) {
    console.error('Failed to fetch notes for tag:', filterTag, error);
  }

  return (
    <div>
      <Notes initialData={initialData} initialTag={filterTag} />
    </div>
  );
};

export default NotesByTag;