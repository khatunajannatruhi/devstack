import { useState, useEffect } from 'react';
import Header from './ui/Header';
import FooterBlock from './ui/FooterBlock';
import TopBanner from './ui/TopBanner';
import TechnologyItem from './ui/TechnologyItem';
import MyStackPanel from './ui/MyStackPanel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [techList, setTechList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTechData = async () => {
      try {
        const response = await fetch('/techData.json');
        const data = await response.json();
        // Artificial delay for loading spinner
        setTimeout(() => {
          setTechList(data);
          setIsLoading(false);
        }, 600);
      } catch (error) {
        console.error("Failed to load technologies", error);
        setIsLoading(false);
      }
    };
    
    loadTechData();
  }, []);

  const [selectedTechs, setSelectedTechs] = useState([]);

  const handleSelectTech = (item) => {
    if (selectedTechs.some(t => t.id === item.id)) {
      toast.warn(`You have already selected ${item.name}`);
      return;
    }
    setSelectedTechs(prev => [...prev, item]);
    toast.success(`${item.name} has been added successfully`);
  };

  const handleRemoveItem = (id) => {
    const itemToRemove = selectedTechs.find(t => t.id === id);
    setSelectedTechs(prev => prev.filter(tech => tech.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} was removed`);
    }
  };

  const handleClearStack = () => {
    setSelectedTechs([]);
    toast.error("All technologies cleared");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-base-content bg-base-100">
      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
      <Header />
      <main className="flex-grow pb-16">
        <TopBanner />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold tracking-tight">Explore the Stack</h2>
          </div>
          
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-64 gap-4">
              <span className="loading loading-bars loading-lg text-secondary"></span>
              <p className="text-gray-500 font-medium">Loading technologies...</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techList.map((item) => (
                  <TechnologyItem 
                    key={item.id}
                    item={item}
                    handleSelect={handleSelectTech}
                    alreadyAdded={selectedTechs.some(t => t.id === item.id)}
                  />
                ))}
              </div>
              
              <div className="w-full lg:w-[320px] shrink-0">
                <MyStackPanel 
                  selectedTechs={selectedTechs}
                  handleRemove={handleRemoveItem}
                  handleClearAll={handleClearStack}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterBlock />
    </div>
  );
}

export default App;
