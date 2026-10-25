import { useEffect, useMemo, useState } from "react"
import "./App.css"


const API_URL = "https://api.sampleapis.com/countries/countries"

export default function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("All")

  const fetchCountries = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error("API failed: " + res.status)
      const data = await res.json()
      // ye API thoda different format deti hai
      const formatted = data.map((c, index) => ({
        cca3: c.id || c.name + index,
        name: { common: c.name },
        capital: [c.capital],
        region: c.region || "Unknown",
        population: c.population || 0,
        flags: { png: c.media?.flag || `https://flagcdn.com/w320/${c.alpha2Code?.toLowerCase()}.png` }
      }))
      setCountries(formatted)
    } catch (err) {
      console.error(err)
      setError("Failed to load countries")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const name = c.name?.common || ""
      const capital = c.capital?.[0] || ""
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase()) || capital.toLowerCase().includes(search.toLowerCase())
      const matchesRegion = region === "All" || c.region === region
      return matchesSearch && matchesRegion
    })
  }, [countries, search, region])

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div>
            <h1>Country Explorer</h1>
            <p>Stable API - No CORS Issue</p>
          </div>
          <span className="badge">{filtered.length} countries</span>
        </div>
        <div className="controls">
          <input type="text" placeholder="Search by country or capital..." value={search} onChange={(e) => setSearch(e.target.value)} className="search" />
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="filter">
            <option value="All">All Regions</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </header>

      <main className="grid">
        {loading && Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="card skeleton-card">
            <div className="skeleton flag-skeleton" />
            <div className="skeleton line" />
          </div>
        ))}
        {!loading && error && (
  <div className="error-box">
    <h2>Something went wrong</h2>
    <p>{error}</p>
    <button onClick={fetchCountries} className="retry">Try Again</button>
  </div>
)}
        {!loading && !error && filtered.map((c) => (
          <article key={c.cca3} className="card">
            <img src={c.flags.png} alt={c.name.common} className="flag" loading="lazy" onError={(e) => e.target.style.display = 'none'} />
            <div className="card-body">
              <h2>{c.name.common}</h2>
              <p><strong>Capital:</strong> {c.capital?.[0] || "N/A"}</p>
              <p><strong>Region:</strong> {c.region}</p>
              <p><strong>Population:</strong> {c.population?.toLocaleString()}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}