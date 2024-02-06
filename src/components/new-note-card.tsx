export function NewNoteCard() {
  return (
    <button className="rounded-md text-left outline-none bg-slate-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Adicionar nota</span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2" />
    </button>
  );
}
