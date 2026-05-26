import React, { useState, useMemo, useEffect } from "react";
import { Hymn, ViewState } from "./types";
import { HYMNS, CATEGORIES } from "./constants";
import { HymnList } from "./components/HymnList";
import { HymnDetail } from "./components/HymnDetail";
import { AccuracyDashboard } from "./components/AccuracyDashboard";
import { fetchHymnFromArchive } from "./services/gemini";
import { useOrganPlayer } from "./hooks/useOrganPlayer";
import { ReactiveVisualizer } from "./components/ReactiveVisualizer";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "./services/firebase";
import {
  Search,
  Book,
  Heart,
  Menu,
  Grid,
  Music,
  Sparkles,
  X,
  Info,
  Library,
  Loader2,
  Volume2,
} from "lucide-react";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>("list");
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null);
  const [allHymns, setAllHymns] = useState<Hymn[]>(() => {
    try {
      const savedOverrides = localStorage.getItem("hymn_overrides");
      if (savedOverrides) {
        const overrides = JSON.parse(savedOverrides);
        return HYMNS.map((h) =>
          overrides[h.id] ? { ...h, ...overrides[h.id] } : h,
        );
      }
    } catch (e) {
      console.error("Error loading hymn overrides", e);
    }
    return HYMNS;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchingArchive, setIsSearchingArchive] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing favorites from localStorage", e);
      return [];
    }
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const organPlayer = useOrganPlayer();

  const handleUpdateHymn = async (updated: Hymn) => {
    setAllHymns((prev) => prev.map((h) => (h.id === updated.id ? updated : h)));
    setSelectedHymn((prev) =>
      prev && prev.id === updated.id ? updated : prev,
    );
    try {
      const savedOverrides = localStorage.getItem("hymn_overrides");
      const overrides = savedOverrides ? JSON.parse(savedOverrides) : {};
      overrides[updated.id] = {
        verses: updated.verses,
        chorus: updated.chorus,
        author: updated.author,
        tune: updated.tune,
        melody: updated.melody,
        title: updated.title,
      };
      localStorage.setItem("hymn_overrides", JSON.stringify(overrides));
    } catch (e) {
      console.error("Error saving hymn override", e);
    }

    try {
      const docRef = doc(db, "hymn_overrides", String(updated.id));
      await setDoc(docRef, {
        id: updated.id,
        number: updated.number,
        title: updated.title,
        category: updated.category,
        verses: updated.verses,
        chorus: updated.chorus || null,
        author: updated.author || null,
        tune: updated.tune || null,
        melody: updated.melody || null,
        isVerified: updated.isVerified || false,
        verifiedAt: updated.verifiedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `hymn_overrides/${updated.id}`);
    }
  };

  useEffect(() => {
    // Listen to real-time Cloud Firestore accuracy scan modifications across all devices
    const overridesCol = collection(db, "hymn_overrides");
    const unsubscribe = onSnapshot(
      overridesCol,
      (snapshot) => {
        const overridesMap: Record<number, Partial<Hymn>> = {};
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const hymnId = Number(docSnap.id) || data.id;
          if (hymnId) {
            overridesMap[hymnId] = {
              verses: data.verses,
              chorus: data.chorus || undefined,
              author: data.author || undefined,
              tune: data.tune || undefined,
              melody: data.melody || undefined,
              title: data.title || undefined,
              isVerified: data.isVerified,
              verifiedAt: data.verifiedAt,
            };
          }
        });

        // Stably merge global accuracy overrides on top of the default offline traditional dataset
        setAllHymns(() => {
          return HYMNS.map((h) => {
            const override = overridesMap[h.id];
            return override ? { ...h, ...override } : h;
          });
        });

        // Ensure currently viewed hymn on screen updates live across all devices
        setSelectedHymn((prev) => {
          if (prev && overridesMap[prev.id]) {
            return {
              ...prev,
              ...overridesMap[prev.id],
            } as Hymn;
          }
          return prev;
        });
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, "hymn_overrides");
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const filteredHymns = useMemo(() => {
    let list = allHymns;

    if (currentView === "favorites" || showFavoritesOnly) {
      list = allHymns.filter((h) => favorites.includes(h.id));
    }

    if (selectedCategory !== "All") {
      list = list.filter((h) => h.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.number.toString() === q ||
          h.tune?.toLowerCase().includes(q) ||
          h.verses.some((v) => v.toLowerCase().includes(q)),
      );
    }

    return list;
  }, [searchQuery, favorites, currentView, selectedCategory]);

  const handleSelectHymn = (hymn: Hymn) => {
    setSelectedHymn(hymn);
    setCurrentView("detail");
  };

  const handleArchiveRetrieval = async () => {
    if (!searchQuery) return;
    setIsSearchingArchive(true);
    const result = await fetchHymnFromArchive(searchQuery);
    setIsSearchingArchive(false);

    if (result) {
      handleSelectHymn(result);
    } else {
      alert(
        "Could not find this hymn in the sacred archive. Please check the number.",
      );
    }
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-900 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Book className="text-white" size={20} />
              </div>
              <div>
                <h1 className="font-bold text-gray-900 tracking-tight leading-none mb-1">
                  IOM Hymnal
                </h1>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Archive Edition
                </p>
              </div>
            </div>
            <button
              onClick={closeSidebar}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <p className="px-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Navigation
            </p>
            <SidebarLink
              icon={<Library size={20} />}
              label="The Full 858"
              active={currentView === "list" && selectedCategory === "All"}
              onClick={() => {
                setCurrentView("list");
                setSelectedCategory("All");
                setShowFavoritesOnly(false);
                closeSidebar();
              }}
            />
            <SidebarLink
              icon={<Heart size={20} />}
              label="Saved Verses"
              active={currentView === "favorites"}
              onClick={() => {
                setCurrentView("favorites");
                setShowFavoritesOnly(false);
                closeSidebar();
              }}
            />
            <SidebarLink
              icon={<Grid size={20} />}
              label="Liturgy Index"
              active={currentView === "categories"}
              onClick={() => {
                setCurrentView("categories");
                setShowFavoritesOnly(false);
                closeSidebar();
              }}
            />
            <SidebarLink
              icon={<Sparkles size={20} />}
              label="Accuracy Suite"
              active={currentView === "accuracy-verify"}
              onClick={() => {
                setCurrentView("accuracy-verify");
                setShowFavoritesOnly(false);
                closeSidebar();
              }}
            />

            <div className="pt-6">
              <p className="px-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                Sacred Groups
              </p>
              <div className="grid grid-cols-1 gap-1 px-2">
                {CATEGORIES.slice(1, 10).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentView("list");
                      setShowFavoritesOnly(false);
                      closeSidebar();
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-all ${selectedCategory === cat ? "bg-indigo-50 text-indigo-700" : "text-gray-500 hover:bg-gray-50"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-50">
            <div
              className={`rounded-3xl p-5 text-white relative overflow-hidden group transition-all ${isOffline ? "bg-gray-400" : "bg-gradient-to-br from-indigo-950 to-indigo-800"}`}
            >
              <div className="relative z-10">
                <h4 className="font-black text-[10px] mb-1 uppercase tracking-widest text-indigo-300">
                  Archive Retrieval
                </h4>
                <p className="text-[11px] text-indigo-100/80 mb-3 leading-tight">
                  {isOffline
                    ? "Archive unavailable while offline."
                    : "Access all 600+ hymns instantly via search."}
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${isOffline ? "bg-gray-300" : "bg-green-400 animate-pulse"}`}
                  ></div>
                  <span
                    className={`text-[9px] font-bold uppercase ${isOffline ? "text-gray-200" : "text-green-400"}`}
                  >
                    {isOffline ? "Offline" : "Live Index Connected"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative">
        {currentView === "accuracy-verify" ? (
          <AccuracyDashboard
            hymns={allHymns}
            favorites={favorites}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onUpdateHymn={handleUpdateHymn}
            onBack={() => setCurrentView("list")}
          />
        ) : currentView === "detail" && selectedHymn ? (
          <HymnDetail
            hymn={selectedHymn}
            isFavorite={favorites.includes(selectedHymn.id)}
            onToggleFavorite={toggleFavorite}
            onBack={() => {
              setCurrentView("list");
              setSelectedHymn(null);
            }}
            organPlayer={organPlayer}
            onUpdateHymn={handleUpdateHymn}
          />
        ) : (
          <>
            {/* Header */}
            <header className="bg-white border-b border-gray-100 px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-4 sm:gap-5 sticky top-0 z-30 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 lg:hidden text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    <Menu size={24} />
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
                      {currentView === "favorites" || showFavoritesOnly
                        ? selectedCategory === "All"
                          ? "Saved Verses"
                          : `Saved in ${selectedCategory}`
                        : selectedCategory === "All"
                          ? "Sacred Hymnal"
                          : selectedCategory}
                    </h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1.5">
                      Full English 858+ Edition
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all ${showFavoritesOnly ? "bg-red-50 border-red-100 text-red-600 shadow-sm" : "bg-gray-50 border-gray-100 text-gray-400 hover:text-gray-600"}`}
                  >
                    <Heart
                      size={14}
                      fill={showFavoritesOnly ? "currentColor" : "none"}
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {showFavoritesOnly ? "Favorites On" : "All Hymns"}
                    </span>
                  </button>
                  <div className="bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100 flex items-center gap-2">
                    <Library size={14} className="text-indigo-600" />
                    <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">
                      {filteredHymns.length} Local
                    </span>
                  </div>
                  {isOffline && (
                    <div className="bg-amber-50 px-4 py-2 rounded-2xl border border-amber-100 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">
                        Offline Mode
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative group flex gap-2">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Enter hymn number (e.g. 450) or title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-100 border-2 border-transparent focus:bg-white focus:border-indigo-100 rounded-2xl py-4.5 pl-14 pr-4 text-sm font-bold transition-all outline-none text-gray-800 placeholder:text-gray-400 shadow-sm"
                  />
                </div>
                {searchQuery && filteredHymns.length === 0 && (
                  <button
                    onClick={handleArchiveRetrieval}
                    disabled={isSearchingArchive || isOffline}
                    className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 rounded-2xl flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-100 active:scale-95 disabled:opacity-50"
                  >
                    {isSearchingArchive ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Sparkles size={16} />
                    )}
                    {isSearchingArchive
                      ? "Archiving..."
                      : isOffline
                        ? "Offline"
                        : "Get from Archive"}
                  </button>
                )}
              </div>
            </header>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto pb-10 bg-gray-50/50">
              {currentView === "categories" ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentView("list");
                      }}
                      className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-3xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all aspect-square group"
                    >
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                        <Grid size={24} />
                      </div>
                      <span className="font-black text-gray-700 text-[10px] text-center uppercase tracking-widest">
                        {cat}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Beautiful 100% Accuracy Verification Banner */}
                  <div className="mx-4 mt-4 p-5 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/15 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-in fade-in duration-500">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Sparkles size={12} className="text-amber-600 fill-amber-500 animate-pulse animate-duration-1000" />
                        <span className="text-[9px] font-black uppercase text-amber-800 tracking-widest leading-none">Traditional Verification Suite</span>
                      </div>
                      <h4 className="font-extrabold text-xs text-amber-950">100% Accuracy Verification Engine</h4>
                      <p className="text-[11px] text-amber-900/60 font-bold leading-relaxed">
                        Scan {selectedCategory === 'All' ? 'all' : `the ${selectedCategory}`} core traditional hymns to verify lyrics, restore missing chorus pieces, and correct author credits automatically using Gemini.
                      </p>
                    </div>
                    <button 
                      onClick={() => {
                        setCurrentView('accuracy-verify');
                      }}
                      className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-black text-[9px] uppercase tracking-widest rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 self-stretch sm:self-auto text-center"
                    >
                      Launch Suite Scanner
                    </button>
                  </div>

                  <HymnList
                    hymns={filteredHymns}
                    onSelect={handleSelectHymn}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    organPlayer={organPlayer}
                  />
                </div>
              )}

              {filteredHymns.length === 0 &&
                !isSearchingArchive &&
                searchQuery && (
                  <div className="flex flex-col items-center justify-center py-20 px-10 text-center space-y-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
                      <Library size={48} />
                    </div>
                    <div className="max-w-xs">
                      <h4 className="text-xl font-black text-gray-900 mb-2 tracking-tight">
                        Not in Local Core
                      </h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {isOffline
                          ? `Hymn "${searchQuery}" isn't in our local cache. Connect to the internet to retrieve it from the Sacred Archive.`
                          : `Hymn "${searchQuery}" isn't in our quick-access cache. Try retrieving it from the Sacred Archive.`}
                      </p>
                    </div>
                    {!isOffline && (
                      <button
                        onClick={handleArchiveRetrieval}
                        className="px-8 py-4 bg-white border-2 border-indigo-100 rounded-3xl text-indigo-700 font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-50 hover:bg-indigo-50 transition-all flex items-center gap-3"
                      >
                        <Sparkles size={16} /> Look up in Full 600+ Archive
                      </button>
                    )}
                  </div>
                )}
            </div>
          </>
        )}

        {/* Global Now Playing Bar */}
        {(organPlayer.isPlaying || organPlayer.isLoadingAudio) &&
          currentView !== "detail" && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg animate-in slide-in-from-bottom-12 duration-700">
              <div className="bg-indigo-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 overflow-hidden relative">
                  {organPlayer.isLoadingAudio ? (
                    <Loader2
                      className="animate-spin text-indigo-400"
                      size={24}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ReactiveVisualizer
                        analyser={organPlayer.analyser}
                        isPlaying={organPlayer.isPlaying}
                        width={48}
                        height={48}
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-black text-indigo-300 uppercase tracking-widest mb-0.5">
                    {organPlayer.isLoadingAudio
                      ? "Preparing Sacred Tune..."
                      : "Now Playing Organ"}
                  </p>
                  <h5 className="font-bold truncate text-sm">
                    {allHymns.find((h) => h.id === organPlayer.playingHymnId)
                      ?.title || "Sacred Hymn"}
                  </h5>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 border-l border-white/10">
                  <Volume2 size={14} className="text-indigo-300" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={organPlayer.volume}
                    onChange={(e) =>
                      organPlayer.setVolume(parseFloat(e.target.value))
                    }
                    className="w-20 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                  />
                </div>

                <button
                  onClick={organPlayer.stopAudio}
                  className="w-10 h-10 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center border border-red-500/20 hover:bg-red-500/30 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          )}
      </main>
    </div>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon,
  label,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
      w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-bold text-sm
      ${active ? "bg-indigo-900 text-white shadow-xl shadow-indigo-200/50" : "text-gray-500 hover:bg-gray-50 hover:text-indigo-600"}
    `}
  >
    <span className={`${active ? "text-indigo-300" : "text-gray-300"}`}>
      {icon}
    </span>
    {label}
  </button>
);

export default App;
