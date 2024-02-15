import { NoteCard } from "./components/note-card";

export function App() {

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200"> Adicionar nota</span>
          <p className="text-sm leading-6 text-slate-400">Grave uma nota em audio que sera convertida para texto automaticamente</p>

        </div>

        <NoteCard/>
        <NoteCard/>
  
 
      </div>
    </div>
  )

}

