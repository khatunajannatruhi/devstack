import Header from './ui/Header';
import FooterBlock from './ui/FooterBlock';
import TopBanner from './ui/TopBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-base-content bg-base-100">
      <Header />
      <main className="flex-grow">
        <TopBanner />
      </main>
      <FooterBlock />
    </div>
  );
}

export default App;
