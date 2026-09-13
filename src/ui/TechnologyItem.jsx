export default function TechnologyItem({ item, handleSelect, alreadyAdded }) {
  return (
    <div className="card bg-base-100 shadow-lg border border-base-200 hover:shadow-2xl transition-all duration-300">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <figure className="w-14 h-14 bg-gray-50 rounded-md flex items-center justify-center p-2">
            <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
          </figure>
          <div className="badge badge-accent badge-outline font-medium text-xs">{item.badge}</div>
        </div>
        
        <h2 className="card-title mt-4 text-2xl">{item.name}</h2>
        <p className="text-gray-500 text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="badge badge-ghost text-xs">{item.category}</div>
          <div className="badge badge-ghost text-xs font-bold">{item.difficulty}</div>
        </div>
        
        <div className="divider my-2"></div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 font-bold text-yellow-500">
            <span>★</span>
            <span className="text-black dark:text-white">{item.rating}</span>
          </div>
          <button 
            onClick={() => handleSelect(item)} 
            disabled={alreadyAdded}
            className={`btn btn-sm rounded-md ${alreadyAdded ? 'btn-disabled bg-gray-200 text-gray-500' : 'bg-brand-gradient text-white border-transparent'}`}
          >
            {alreadyAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
}
