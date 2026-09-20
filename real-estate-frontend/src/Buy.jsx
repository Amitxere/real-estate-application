import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Hyderabad",
    category: "Villa",
    price: "₹85 Lakhs",
    beds: 4,
    baths: 3,
    area: "2,400 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Hyderabad",
    category: "Apartment",
    price: "₹75 Lakhs",
    beds: 3,
    baths: 2,
    area: "1,650 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Family Apartment",
    location: "Pune",
    category: "Apartment",
    price: "₹68 Lakhs",
    beds: 3,
    baths: 2,
    area: "1,450 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Independent House",
    location: "Bengaluru",
    category: "Independent House",
    price: "₹1.2 Crores",
    beds: 4,
    baths: 3,
    area: "2,100 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Premium Villa",
    location: "Pune",
    category: "Villa",
    price: "₹1.1 Crores",
    beds: 4,
    baths: 4,
    area: "2,800 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Residential Plot",
    location: "Hyderabad",
    category: "Plot",
    price: "₹45 Lakhs",
    beds: 0,
    baths: 0,
    area: "2,000 sq.ft",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
];

const cities = [
  {
    name: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Pune",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80",
  },
];

function Buy() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [city, setCity] = useState("All Cities");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [activeTab, setActiveTab] = useState("list");

  const filteredProperties = properties.filter((property) => {
    const locationMatch =
      location.trim() === "" ||
      property.location
        .toLowerCase()
        .includes(location.trim().toLowerCase());

    const cityMatch =
      city === "All Cities" || property.location === city;

    const categoryMatch =
      category === "" || property.category === category;

    let budgetMatch = true;

    if (budget === "Below ₹50 Lakhs") {
      budgetMatch = property.price === "₹45 Lakhs";
    }

    if (budget === "₹50 Lakhs - ₹1 Crore") {
      budgetMatch =
        property.price === "₹68 Lakhs" ||
        property.price === "₹75 Lakhs" ||
        property.price === "₹85 Lakhs";
    }

    if (budget === "₹1 Crore - ₹2 Crores") {
      budgetMatch =
        property.price === "₹1.1 Crores" ||
        property.price === "₹1.2 Crores";
    }

    return (
      locationMatch &&
      cityMatch &&
      categoryMatch &&
      budgetMatch
    );
  });

  const handleCityClick = (cityName) => {
    setCity(cityName);
    setLocation("");
    window.scrollTo({
      top: document.querySelector(".buy-properties-section")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="buy-page">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="buy-reference-hero">

        <div className="buy-reference-overlay">

          <div className="buy-reference-content">

            <h1>Find a Home Find Happiness</h1>

            <p>
              Discover beautiful real estate properties across India
            </p>

            {/* LIST / MAP */}

            <div className="buy-view-tabs">

              <button
                className={
                  activeTab === "list"
                    ? "buy-view-tab active"
                    : "buy-view-tab"
                }
                onClick={() => setActiveTab("list")}
              >
                ☷ List
              </button>

              <button
                className={
                  activeTab === "map"
                    ? "buy-view-tab active"
                    : "buy-view-tab"
                }
                onClick={() => setActiveTab("map")}
              >
                ⌖ Map
              </button>

            </div>

            {/* SEARCH */}

            <div className="buy-reference-search">

              <div className="buy-city-select">

                <span>⌖</span>

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>All Cities</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Chennai</option>
                </select>

              </div>

              <div className="buy-location-input">

                <input
                  type="text"
                  placeholder="Enter a location, builder or project"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

              </div>

              <button
                className="buy-reference-search-button"
                onClick={() =>
                  document
                    .querySelector(".buy-properties-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                🔍 Search
              </button>

            </div>

          </div>

        </div>

        {/* DOWN ARROW */}

        <button
          className="buy-down-arrow"
          onClick={() =>
            document
              .querySelector(".buy-city-section")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          ↓
        </button>

      </section>


      {/* =====================================================
          INDIA CITIES
      ===================================================== */}

      <section className="buy-city-section">

        <div className="buy-city-container">

          <p className="buy-city-heading">
            Property in India - Find your home in 12+ cities across India
          </p>

          <div className="buy-city-grid">

            {cities.map((item) => (
              <button
                className="buy-city-card"
                key={item.name}
                onClick={() => handleCityClick(item.name)}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="buy-city-overlay">
                  <span>Projects in {item.name}</span>
                </div>

              </button>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="buy-filter-section">

        <div className="buy-filter-container">

          <div className="buy-filter-title">

            <div>
              <span className="buy-small-label">
                BUY PROPERTIES
              </span>

              <h2>Find Your Property</h2>
            </div>

            <span className="buy-result-count">
              {filteredProperties.length} Properties
            </span>

          </div>


          <div className="buy-filter-bar">

            <div className="buy-filter-item">

              <label>Property Type</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Independent House">
                  Independent House
                </option>
                <option value="Plot">Plot</option>
              </select>

            </div>


            <div className="buy-filter-item">

              <label>Budget</label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Any Budget</option>

                <option value="Below ₹50 Lakhs">
                  Below ₹50 Lakhs
                </option>

                <option value="₹50 Lakhs - ₹1 Crore">
                  ₹50 Lakhs - ₹1 Crore
                </option>

                <option value="₹1 Crore - ₹2 Crores">
                  ₹1 Crore - ₹2 Crores
                </option>

              </select>

            </div>


            <button
              className="buy-clear-button"
              onClick={() => {
                setLocation("");
                setCity("All Cities");
                setCategory("");
                setBudget("");
              }}
            >
              Clear Filters
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROPERTY LIST
      ===================================================== */}

      <section className="buy-properties-section">

        <div className="buy-properties-container">

          <div className="buy-properties-heading">

            <div>

              <span className="buy-small-label">
                PROPERTIES
              </span>

              <h2>Properties for Sale</h2>

            </div>

          </div>


          {activeTab === "map" ? (

            <div className="buy-map-placeholder">

              <div className="buy-map-icon">
                ⌖
              </div>

              <h3>Property Map</h3>

              <p>
                Map view will be connected to the property
                location service in the next stage.
              </p>

              <button
                onClick={() => setActiveTab("list")}
              >
                View Property List
              </button>

            </div>

          ) : filteredProperties.length > 0 ? (

            <div className="buy-property-grid">

              {filteredProperties.map((property) => (

                <article
                  className="buy-property-card"
                  key={property.id}
                >

                  <div className="buy-property-image-wrapper">

                    <img
                      src={property.image}
                      alt={property.title}
                    />

                    <span className="buy-property-badge">
                      For Sale
                    </span>

                    <button className="buy-favorite">
                      ♡
                    </button>

                  </div>


                  <div className="buy-property-content">

                    <div className="buy-property-price">
                      {property.price}
                    </div>

                    <h3>
                      {property.title}
                    </h3>

                    <p className="buy-property-location">
                      📍 {property.location}
                    </p>


                    <div className="buy-property-details">

                      <span>
                        🛏 {property.beds} Beds
                      </span>

                      <span>
                        🛁 {property.baths} Baths
                      </span>

                      <span>
                        📐 {property.area}
                      </span>

                    </div>


                    <button
                      className="buy-view-button"
                      onClick={() =>
                        navigate("/property-details")
                      }
                    >
                      View Details →
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="buy-no-results">

              <h3>
                No properties found
              </h3>

              <p>
                Try changing your location,
                city, property type or budget.
              </p>

              <button
                onClick={() => {
                  setLocation("");
                  setCity("All Cities");
                  setCategory("");
                  setBudget("");
                }}
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Buy;