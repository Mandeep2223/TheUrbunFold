import { useState, useEffect, useMemo, useCallback, useRef } from "react";

// ─── STATIC DATA (Backend aane tak yahi use karenge) ───────────────────────
const RAW_PRODUCTS = [
  { id: 1, name: "Nike Air Max 270", category: "Shoes", price: 8999, rating: 4.5, stock: 10, image: "👟", tag: "bestseller" },
  { id: 2, name: "Adidas Ultraboost 22", category: "Shoes", price: 12499, rating: 4.8, stock: 5, image: "👟", tag: "new" },
  { id: 3, name: "Levi's 511 Slim Jeans", category: "Clothing", price: 3499, rating: 4.3, stock: 20, image: "👖", tag: null },
  { id: 4, name: "H&M Oversized Hoodie", category: "Clothing", price: 1999, rating: 4.1, stock: 15, image: "👕", tag: "sale" },
  { id: 5, name: "boAt Airdopes 141", category: "Electronics", price: 1299, rating: 4.2, stock: 30, image: "🎧", tag: "bestseller" },
  { id: 6, name: "Samsung Galaxy Buds2", category: "Electronics", price: 6999, rating: 4.6, stock: 8, image: "🎧", tag: "new" },
  { id: 7, name: "Fastrack Analog Watch", category: "Accessories", price: 2199, rating: 4.0, stock: 12, image: "⌚", tag: null },
  { id: 8, name: "Wildcraft Backpack 30L", category: "Accessories", price: 1799, rating: 4.4, stock: 18, image: "🎒", tag: "sale" },
  { id: 9, name: "Puma RS-X Sneakers", category: "Shoes", price: 7499, rating: 4.3, stock: 7, image: "👟", tag: "new" },
  { id: 10, name: "Noise ColorFit Pro 3", category: "Electronics", price: 2999, rating: 4.1, stock: 25, image: "⌚", tag: "bestseller" },
  { id: 11, name: "United Colors Polo", category: "Clothing", price: 899, rating: 3.9, stock: 40, image: "👕", tag: "sale" },
  { id: 12, name: "Skybags Campus Bag", category: "Accessories", price: 1299, rating: 4.2, stock: 22, image: "🎒", tag: null },
];

const CATEGORIES = ["All", "Shoes", "Clothing", "Electronics", "Accessories"];

// ─── CHILD COMPONENT: ProductCard ──────────────────────────────────────────
// useCallback explain: addToCart function yahan prop k roop mein aata hai
// agar parent mein useCallback na ho, toh har parent render pe naya function
// banta hai, aur ProductCard bhi re-render hota hai (even if React.memo use ho)
const ProductCard = ({ product, onAddToCart, cartCount }) => {
  const isInCart = cartCount > 0;

  return (
    <div style={styles.card}>
      {product.tag && (
        <span style={{ ...styles.badge, ...(styles.badgeVariants[product.tag] || {}) }}>
          {product.tag === "bestseller" ? "🔥 Bestseller" : product.tag === "new" ? "✨ New" : "🏷️ Sale"}
        </span>
      )}

      <div style={styles.cardImage}>{product.image}</div>

      <div style={styles.cardBody}>
        <p style={styles.cardCategory}>{product.category}</p>
        <h3 style={styles.cardName}>{product.name}</h3>

        <div style={styles.ratingRow}>
          <span style={styles.stars}>{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
          <span style={styles.ratingNum}>({product.rating})</span>
        </div>

        <div style={styles.cardFooter}>
          <span style={styles.price}>₹{product.price.toLocaleString("en-IN")}</span>
          <button
            style={{ ...styles.addBtn, ...(isInCart ? styles.addBtnActive : {}) }}
            onClick={() => onAddToCart(product)}
          >
            {isInCart ? `✓ Added (${cartCount})` : "+ Cart"}
          </button>
        </div>

        {product.stock <= 8 && (
          <p style={styles.stockWarn}>⚠️ Sirf {product.stock} bacha!</p>
        )}
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function ProductsPage() {

  // ── useState: Saara reactive data yahan ──────────────────────────────────
  const [products, setProducts] = useState([]);          // product list
  const [loading, setLoading] = useState(true);          // loading state
  const [searchQuery, setSearchQuery] = useState("");    // search bar value
  const [selectedCategory, setSelectedCategory] = useState("All"); // filter
  const [sortBy, setSortBy] = useState("default");       // sort option
  const [cart, setCart] = useState({});                  // { productId: count }
  const [toast, setToast] = useState(null);              // toast message

  // ── useRef: Search input ko auto-focus karna ─────────────────────────────
  // useRef kyun? kyunki hum directly DOM element pakad rahe hain
  // agar useState use karte toh unnecessary re-render hota
  const searchRef = useRef(null);

  // ── useEffect: Data "fetch" simulate karna ───────────────────────────────
  // useEffect kyun? Component mount hone ke baad side effect hai ye
  // dependency array [] = sirf ek baar chalega (jaise API call hoti hai)
  useEffect(() => {
    setLoading(true);
    // API call ki jagah setTimeout se simulate kar rahe hain
    const timer = setTimeout(() => {
      setProducts(RAW_PRODUCTS);
      setLoading(false);
    }, 1200); // 1.2 second fake loading

    return () => clearTimeout(timer); // cleanup: agar component unmount ho
  }, []); // [] = sirf once, mount pe

  // useEffect: Auto-focus search bar jab loading khatam ho
  useEffect(() => {
    if (!loading && searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading]); // loading change hone pe chalega

  // ── useMemo: Filtered + sorted products ──────────────────────────────────
  // useMemo kyun? Ye expensive calculation hai — 1000 products pe bina memo ke
  // har keypress pe full filter+sort chalega. useMemo cache karta hai result
  // aur sirf tab recalculate karta hai jab dependencies change hon
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "price_low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price_high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);
  // ↑ Sirf tab recalculate hoga jab ye 4 cheezein change hon

  // ── useCallback: Add to cart function ────────────────────────────────────
  // useCallback kyun? Ye function ProductCard ko prop ke roop mein jaata hai
  // Bina useCallback ke har ProductsPage render pe naya function reference banta hai
  // Iska matlab ProductCard bhi re-render hoga (waste!)
  // useCallback se same function reference rehta hai jab tak [cart] same ho
  const handleAddToCart = useCallback((product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));

    // Toast dikhaao
    setToast(`✅ "${product.name}" cart mein add ho gaya!`);
    setTimeout(() => setToast(null), 2500);
  }, []); // cart ko dependency nahi chahiye kyunki setCart(prev => ...) use kar rahe hain

  // ── Total cart items (simple derived state) ──────────────────────────────
  const totalCartItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={styles.page}>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>🛍️ ShopKaro</h1>
          <p style={styles.tagline}>Desi prices, desi vibe</p>
        </div>
        <div style={styles.cartBtn}>
          🛒 Cart
          {totalCartItems > 0 && (
            <span style={styles.cartBadge}>{totalCartItems}</span>
          )}
        </div>
      </header>

      {/* Controls: Search + Filter + Sort */}
      <div style={styles.controls}>
        {/* Search — useRef se ye input auto-focus hoga */}
        <input
          ref={searchRef}  // ← yahan useRef ka use ho raha hai
          type="text"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />

        {/* Category Filter */}
        <div style={styles.categoryRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.catBtn,
                ...(selectedCategory === cat ? styles.catBtnActive : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={styles.sortSelect}
        >
          <option value="default">Sort: Default</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Rating: Best First</option>
        </select>
      </div>

      <p style={styles.resultCount}>
        {loading ? "" : `${filteredProducts.length} products mile`}
      </p>

      {/* Products Grid */}
      {loading ? (
        <div style={styles.loadingBox}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Products load ho rahe hain...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div style={styles.empty}>
          <p style={styles.emptyText}>😕 Koi product nahi mila "{searchQuery}"</p>
          <button style={styles.resetBtn} onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}   // ← useCallback wala function
              cartCount={cart[product.id] || 0}
            />
          ))}
        </div>
      )}

      {/* Toast Notification */}
      {toast && <div style={styles.toast}>{toast}</div>}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes toastIn { from { opacity:0; transform:translateY(40px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}

// ─── STYLES ────────────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#f0ede8",
    fontFamily: "'DM Sans', sans-serif",
    paddingBottom: 60,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 40px",
    borderBottom: "1px solid #1e1e1e",
    background: "#0f0f0f",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerLeft: { display: "flex", flexDirection: "column", gap: 2 },
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 28,
    fontWeight: 800,
    color: "#f5c842",
    letterSpacing: "-0.5px",
  },
  tagline: { fontSize: 12, color: "#666", letterSpacing: 1 },
  cartBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: 12,
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer",
    color: "#f0ede8",
    position: "relative",
    fontFamily: "'DM Sans', sans-serif",
  },
  cartBadge: {
    background: "#f5c842",
    color: "#0f0f0f",
    borderRadius: "50%",
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 700,
  },
  controls: {
    padding: "24px 40px 0",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  searchInput: {
    width: "100%",
    padding: "14px 20px",
    borderRadius: 14,
    border: "1.5px solid #2a2a2a",
    background: "#161616",
    color: "#f0ede8",
    fontSize: 16,
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s",
  },
  categoryRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  catBtn: {
    padding: "8px 20px",
    borderRadius: 30,
    border: "1.5px solid #2a2a2a",
    background: "transparent",
    color: "#999",
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
  },
  catBtnActive: {
    background: "#f5c842",
    color: "#0f0f0f",
    border: "1.5px solid #f5c842",
    fontWeight: 700,
  },
  sortSelect: {
    alignSelf: "flex-start",
    padding: "10px 16px",
    borderRadius: 10,
    border: "1.5px solid #2a2a2a",
    background: "#161616",
    color: "#f0ede8",
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
  },
  resultCount: {
    padding: "14px 40px 0",
    fontSize: 13,
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 20,
    padding: "20px 40px",
    animation: "fadeIn 0.4s ease",
  },
  card: {
    background: "#161616",
    border: "1px solid #1e1e1e",
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.2s, border-color 0.2s",
    animation: "slideUp 0.3s ease both",
  },
  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 700,
    zIndex: 1,
    letterSpacing: 0.5,
  },
  badgeVariants: {
    bestseller: { background: "#ff6b35", color: "#fff" },
    new: { background: "#3b82f6", color: "#fff" },
    sale: { background: "#22c55e", color: "#fff" },
  },
  cardImage: {
    fontSize: 70,
    textAlign: "center",
    padding: "32px 20px 16px",
    background: "#111",
    userSelect: "none",
  },
  cardBody: { padding: "16px 18px 20px" },
  cardCategory: { fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 },
  cardName: { fontSize: 15, fontWeight: 600, lineHeight: 1.3, marginBottom: 8, color: "#f0ede8" },
  ratingRow: { display: "flex", alignItems: "center", gap: 6, marginBottom: 14 },
  stars: { color: "#f5c842", fontSize: 13, letterSpacing: -1 },
  ratingNum: { fontSize: 12, color: "#666" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: "#f5c842",
    fontFamily: "'Syne', sans-serif",
  },
  addBtn: {
    padding: "8px 14px",
    borderRadius: 10,
    border: "none",
    background: "#252525",
    color: "#f0ede8",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
  },
  addBtnActive: {
    background: "#f5c842",
    color: "#0f0f0f",
  },
  stockWarn: { fontSize: 11, color: "#f87171", marginTop: 8 },
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
    gap: 20,
  },
  spinner: {
    width: 44,
    height: 44,
    border: "3px solid #2a2a2a",
    borderTop: "3px solid #f5c842",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  loadingText: { color: "#555", fontSize: 15 },
  empty: { textAlign: "center", padding: 80 },
  emptyText: { fontSize: 18, color: "#555", marginBottom: 20 },
  resetBtn: {
    padding: "10px 24px",
    borderRadius: 10,
    border: "1.5px solid #f5c842",
    background: "transparent",
    color: "#f5c842",
    cursor: "pointer",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
  },
  toast: {
    position: "fixed",
    bottom: 30,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#f5c842",
    color: "#0f0f0f",
    padding: "14px 24px",
    borderRadius: 14,
    fontSize: 14,
    fontWeight: 600,
    zIndex: 999,
    animation: "toastIn 0.3s ease",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 30px rgba(245,200,66,0.3)",
  },
};
