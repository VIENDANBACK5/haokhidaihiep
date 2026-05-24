import { useState } from 'react';
import { generateSpeech, playAudio } from '../services/ttsService';
import { characters } from '../data/characters';

export default function Generals() {
  const [selectedGeneral, setSelectedGeneral] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('Tất Cả');

  const handleVoiceOver = async (quote: string, voice: string) => {
    if (isPlaying) return;
    setIsPlaying(true);
    try {
      const base64 = await generateSpeech(quote, voice as any);
      if (base64) {
        playAudio(base64);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsPlaying(false);
    }
  };

  const filteredGenerals = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'Tất Cả' || character.type === filterType;
    return matchesSearch && matchesType;
  });

  const selectedGeneralData = characters.find(g => g.id === selectedGeneral);

  return (
    <main className="pt-28 pb-12 px-6 md:px-12 grain-overlay min-h-screen">
      {/* Hero Header */}
      <header className="mb-12 relative">
        <div className="max-w-4xl">
          <p className="text-secondary font-headline uppercase tracking-[0.3em] text-sm mb-4">Thư Viện Anh Hùng</p>
          <h2 className="text-5xl md:text-7xl font-headline font-black text-on-surface mb-6 drop-shadow-md">DANH TƯỚNG ĐẠI VIỆT</h2>
          <div className="h-1 w-24 bg-primary-container mb-6"></div>
          <p className="text-on-surface-variant max-w-2xl text-lg font-light leading-relaxed">
            Hội tụ những bậc kỳ tài mưu lược, những vị anh hùng đã dựng xây và bảo vệ giang sơn gấm vóc qua nghìn năm văn hiến.
          </p>
        </div>
        <div className="absolute top-0 right-0 opacity-10 hidden xl:block">
          <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 100" }}>swords</span>
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10 items-center justify-between border-b border-outline-variant/30 pb-6">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Tất Cả', 'Tướng', 'Đơn Vị', 'Kế Sách', 'Bẫy', 'Sự Kiện', 'Mệnh Lệnh'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-6 py-2 font-headline uppercase text-xs tracking-wider border transition-all whitespace-nowrap ${
                filterType === type
                  ? 'bg-primary-container text-tertiary-fixed border-secondary/20 shadow-lg'
                  : 'bg-surface-container-high text-on-surface-variant border-transparent hover:bg-surface-container-highest'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 border border-outline-variant/20 shrink-0">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface outline-none"
            placeholder="Tìm kiếm..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredGenerals.length > 0 ? filteredGenerals.map(character => (
          <div
            key={character.id}
            className="group relative aspect-[3/4] bg-surface-container-high border-t-4 border-[#D4AF37] shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer overflow-hidden"
            onClick={() => setSelectedGeneral(character.id)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/50 via-transparent to-transparent z-10"></div>
            <div className="w-full h-full bg-[#131313]/20 flex items-center justify-center">
              {character.image ? (
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  alt={character.name}
                  src={character.image}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-container-highest">
                  <span className="material-symbols-outlined text-6xl text-outline/30">image_not_supported</span>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <span className="text-secondary text-[10px] font-sans font-extrabold uppercase tracking-[0.2em] mb-1 block">{character.type} {character.subtype ? `(${character.subtype})` : ''}</span>
              <h3 className="text-2xl font-sans font-black text-on-surface group-hover:text-secondary transition-colors uppercase">{character.name}</h3>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-secondary/40 opacity-50"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-secondary/40 opacity-50"></div>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-secondary/20 mb-4">person_search</span>
            <p className="text-secondary/60 font-headline uppercase tracking-widest">Không tìm thấy phù hợp</p>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {selectedGeneral && selectedGeneralData && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-surface overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(139,0,0,0.5)] border border-secondary/20">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#131313]/40 flex items-center justify-center">
              {selectedGeneralData.image ? (
                <img
                  className="w-full h-full object-cover object-top"
                  alt={selectedGeneralData.name}
                  src={selectedGeneralData.image}
                />
              ) : (
                <span className="material-symbols-outlined text-6xl text-outline/30">image_not_supported</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/40"></div>
            </div>
            {/* Right Side: Content */}
            <div className="flex-1 bg-tertiary-fixed text-on-tertiary-fixed p-10 parchment-texture overflow-y-auto relative">
              <button
                className="absolute top-6 right-6 text-on-tertiary-fixed/40 hover:text-primary-container transition-colors"
                onClick={() => setSelectedGeneral(null)}
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
              <div className="mb-8">
                <h2 className="text-4xl font-sans font-black uppercase text-primary-container mb-2">{selectedGeneralData.name}</h2>
                <p className="font-sans tracking-widest text-xs font-extrabold text-on-tertiary-fixed-variant">
                  {selectedGeneralData.type} {selectedGeneralData.subtype ? `- ${selectedGeneralData.subtype}` : ''}
                </p>
              </div>
              <div className="space-y-8">
                {/* Biography Section */}
                {selectedGeneralData.biography && (
                  <div>
                    <h4 className="font-headline text-sm font-bold border-b border-primary-container/20 pb-2 mb-4">TIỂU SỬ</h4>
                    <p className="text-sm leading-relaxed text-justify">
                      {selectedGeneralData.biography}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
