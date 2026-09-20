import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchResults from "./SearchResults";
import Navbar from "./components/Navbar";
import "./index.css";
import PaymentPage from "./payments/PaymentPage";
import PaymentSuccess from "./payments/PaymentSuccess";
import DocumentsPage from "./payments/DocumentsPage";
import AnalyticsDashboard from "./analytics/AnalyticsDashboard";
import PaymentReceipt from "./receipt/PaymentReceipt";
import BookingsPage from "./bookings/BookingsPage";
import PaymentFailure from "./payments/PaymentFailure";
import TransactionHistory from "./transactions/TransactionHistory";


/* =========================================================
   SIMPLE PAGE COMPONENT
========================================================= */

function SimplePage({ title, description }) {
  return (
    <div className="simple-page-wrapper">

      <Navbar />

      <main className="simple-page">

        <div className="simple-page-content">

          <span className="section-label">
            RealEstate
          </span>

          <h1>{title}</h1>

          <p>{description}</p>

          <button
            className="simple-page-button"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            ← Back to Home
          </button>

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   BUY
========================================================= */

function Buy() {
  return (
    <SimplePage
      title="Buy Properties"
      description="Explore properties available for purchase in your preferred location."
    />
  );
}


/* =========================================================
   RENT
========================================================= */

function Rent() {
  return (
    <SimplePage
      title="Rent Properties"
      description="Find apartments, villas, houses and other properties available for rent."
    />
  );
}


/* =========================================================
   SELL
========================================================= */

function Sell() {
  return (
    <SimplePage
      title="Sell Your Property"
      description="List your property and connect with potential buyers through RealEstate."
    />
  );
}


/* =========================================================
   LOGIN
========================================================= */

function Login() {
  return (
    <SimplePage
      title="Login"
      description="Login functionality will be connected to the authentication module."
    />
  );
}


/* =========================================================
   REGISTER
========================================================= */

function Register() {
  return (
    <SimplePage
      title="Create Your Account"
      description="Registration functionality will be connected to the authentication module."
    />
  );
}


/* =========================================================
   AGENTS
========================================================= */

function Agents() {
  return (
    <SimplePage
      title="Our Agents"
      description="Find real estate agents who can help you discover your perfect property."
    />
  );
}


/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return (
    <SimplePage
      title="Contact Us"
      description="Get in touch with the RealEstate team for property-related assistance."
    />
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* SEARCH RESULTS */}

        <Route
          path="/search-results"
          element={<SearchResults />}
        />


        {/* BUY */}

        <Route
          path="/buy"
          element={<Buy />}
        />


        {/* RENT */}

        <Route
          path="/rent"
          element={<Rent />}
        />


        {/* SELL */}

        <Route
          path="/sell"
          element={<Sell />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* AGENTS */}

        <Route
          path="/agents"
          element={<Agents />}
        />


        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* PAYMENT */}
        <Route
          path="/payment"
          element={<PaymentPage />}
        />

      {/* payment success */}
        <Route
          path="/payment-success"
            element={<PaymentSuccess />}
          />

          {/* Documents page */}
          <Route
           path="/documents"
           element={<DocumentsPage />}
          />   

               {/*analytics page  */}
          <Route
          path="/analytics"
          element={<AnalyticsDashboard />}
         /> 

          {/* receipt */}
      <Route
       path="/payment-receipt"
       element={<PaymentReceipt />}
      />

      {/* bookings pagw */}
      <Route
       path="/bookings"
       element={<BookingsPage />}
     />

    {/* payment failur */}
       <Route
         path="/payment-failure"
         element={<PaymentFailure />}
       />

      {/* transactions */}
      <Route
        path="/transactions"
        element={<TransactionHistory />}
      />

      </Routes>

     

    </BrowserRouter>

  );
}


export default App;