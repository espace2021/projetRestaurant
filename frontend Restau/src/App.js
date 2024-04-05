import React, { useState } from 'react';
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import ArticlesComponent from './Components/Articles/ArticlesComponent';
import CategoriesComponent from './Components/Categories/CategoriesComponent';
import CommandeComponent from './Components/Commande/CommandeComponent';
import VerifierCommandeComponent from './Components/Commande/VerifierCommandeComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import NavBarComponent from './Components/NavBar/NavBarComponent';
import SocieteComponent from './Components/Societes/SocietesComponent';


function App() {
  const [societeCode, setSocieteCode] = useState("Societe")

  function handleCallback(childData) {
    setSocieteCode(childData)
  }

  return (
    <div>
      <BrowserRouter>
        <NavBarComponent codeSociete={societeCode} />
        <div style={{ marginBottom: "80px" }}>
          {/* <Router> */}
          <Route path="/Societes" component={() => { return <SocieteComponent parentCallback={handleCallback} /> }} />
          <Route path="/" exact render={() => { return <Redirect to="/Societes" /> }} />
          <Route path="/Categories/:societeCode" exact component={(e) => { return <Redirect to={`/Categories/${e.match.params["societeCode"]}/0`} /> }} />
          <Route path="/Categories/:societeCode/:indexCateg" exact component={() => { return <CategoriesComponent parentCallback={handleCallback} /> }} />
          <Route path="/Articles/:societeCode/:codeCateg" exact component={() => { return <ArticlesComponent parentCallback={handleCallback} /> }} />
          <Route path="/Articles/:societeCode/:codeCateg/:indexArt" exact component={() => { return <ArticlesComponent parentCallback={handleCallback} /> }} />
          <Route path="/VerifierCommande/:societeCode" exact component={() => { return <VerifierCommandeComponent parentCallback={handleCallback}></VerifierCommandeComponent> }} />
          <Route path="/Commande/:societeCode" exact component={() => { return <CommandeComponent parentCallback={handleCallback}></CommandeComponent> }} />
          <Route path="/Commande/:societeCode/:codeCateg" exact component={() => { return <CommandeComponent parentCallback={handleCallback}></CommandeComponent> }} />

          {/* </Router> */}
        </div>

        <FooterComponent />
      </BrowserRouter>
    </div>

  )
}

export default App;
