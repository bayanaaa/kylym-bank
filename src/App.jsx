import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Foooter/Footer";
import Rates from "./pages/Rates/Rates";
import Contacts from "./pages/Contacts/Contacts";
import Credits from "./pages/Credits/Credits";
import Cards from "./components/Cards/Cards";
import BankCard from "./pages/BankCard/BankCard";
import Tariffs from "./pages/Tariffs/Tariffs";
import Transfers from "./pages/Transfers/Transfers";
import CardApp from "./pages/Applications/Card/CardApp";
import CreditApp from "./pages/Applications/Credit/CreditApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchange-rates" element={<Rates />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/credits" element={<Credits />} />
          {/* <Route path="/card" element={<Cards />} /> */}
          <Route path="/cards" element={<BankCard />} />
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/card-application" element={<CardApp />} />
          <Route path="/credit-application" element={<CreditApp />} />
          <Route path="/transfers" element={<Transfers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
