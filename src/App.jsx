import Header from './ui/Header';
import FooterBlock from './ui/FooterBlock';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-base-content bg-base-100">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <h1 className="text-3xl font-bold">A-5 Dev Stack (Student 2 - Header & Footer Ready)</h1>
        </div>
      </main>
      <FooterBlock />
    </div>
  );
}

export default App;
