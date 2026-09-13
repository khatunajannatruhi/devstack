export default function MyStackPanel({ selectedTechs, handleRemove, handleClearAll }) {
  return (
    <aside className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-2xl lg:sticky top-28">
      <div className="border-b border-base-200 pb-4 mb-4">
        <h3 className="text-xl font-extrabold">Your Tech Stack</h3>
        <p className="text-sm text-base-content/60 font-medium mt-1">{selectedTechs.length} Technology Selected</p>
      </div>
      
      {selectedTechs.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center text-base-content/50">
          <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-base-content/30" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="font-bold mb-1">Stack is empty</p>
          <p className="text-sm">Select technologies from the left to build your stack.</p>
        </div>
      ) : (
        <div>
          <button 
            className="btn btn-sm btn-error btn-outline w-full mb-4 rounded-md" 
            onClick={handleClearAll}
          >
            Clear Stack
          </button>
          
          <div className="space-y-3">
            {selectedTechs.map(tech => (
              <div key={tech.id} className="flex items-center justify-between p-3 bg-base-200 border border-base-300 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <figure className="w-10 h-10 bg-base-100 border border-base-200 rounded p-1 flex justify-center items-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </figure>
                  <div>
                    <h4 className="font-bold text-sm leading-none mb-1">{tech.name}</h4>
                    <span className="text-xs font-medium opacity-60">{tech.category}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(tech.id)}
                  className="btn btn-xs btn-square btn-ghost hover:bg-error/20 text-error"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
