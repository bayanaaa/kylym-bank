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
import AllDeposits from "./components/Deposit/AllDeposits/AllDeposits";
import OnlineDeposit from "./components/Deposit/OnlineDeposit/OnlineDeposit";
import ExpressDeposit from "./components/Deposit/ExpressDeposit/ExpressDeposit";
import DepositApp from "./pages/Applications/Deposit/DepositApp";
import AllCredits from "./components/Credit/AllCredits/AllCredits";
import OnlineCredit from "./components/Credit/OnlineCredit/OnlineCredit";
import AutoCredit from "./components/Credit/AutoCredit/AutoCredit";
import ExpressCredit from "./components/Credit/ExpressCredit/ExpressCredit";
import MoreDetailed from "./pages/MoreDetailed/MoreDetailed";

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
          <Route path="/more-detailed" element={<MoreDetailed />} />
          <Route path="/all-deposits" element={<AllDeposits />} />
          <Route path="/all-credits" element={<AllCredits />} />
          <Route path="/express-credit" element={<ExpressCredit />} />
          <Route path="/auto-credit" element={<AutoCredit />} />
          <Route path="/online-credit" element={<OnlineCredit />} />
          <Route path="/online-deposit" element={<OnlineDeposit />} />
          <Route path="/express-deposit" element={<ExpressDeposit />} />
          <Route path="/card-application" element={<CardApp />} />
          <Route path="/credit-application" element={<CreditApp />} />
          <Route path="/deposit-application" element={<DepositApp />} />
          <Route path="/transfers" element={<Transfers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
