import { Header } from "./Header";
import { Card } from "./Card";
import { Subscription } from "./EmailSubs";
import Hero from "./Hero";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <div>
        <main>
          <h1 className="title">Loop</h1>
          <div className="container">
            <Card
              src={"images/Alum-red-face.jpg"}
              cardTitle={"(PRODUCT)RED Aluminium Case with Braided Solo Loop"}
              cardtDesc={
                "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy."
              }
              reducedPrice={"$399"}
              actualPrice={"$449"}
            />
            <Card
              src={"images/black-unity.jpg"}
              cardTitle={"Graphite Stainless Steel Case with Braided Solo Loop"}
              cardtDesc={
                "The stainless steel case is durable and polished to a shiny, mirror-like finish."
              }
              reducedPrice={"$699"}
              actualPrice={"$749"}
            />
            <Card
              src={"images/Alum-silver.jpg"}
              cardTitle={"Silver Aluminum Case with Sport Loop"}
              cardtDesc={
                "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy."
              }
              reducedPrice={"$449"}
              actualPrice={"$499"}
            />
          </div>
        </main>
        <main>
          <h1 className="title">Hermès</h1>
          <div className="container">
            <Card
              src={"images/hermes8s-complex-noir.jpg"}
              cardTitle={
                "Space Black Stainless Steel Case with H Diagonal Single Tour"
              }
              cardtDesc={
                "The H Diagonal band features the signature Hermès H through microperforations in the leather, creating a subtle and sporty pattern."
              }
              reducedPrice={"$1,309"}
              actualPrice={"$1,409"}
            />
            <Card
              src={"images/hermes8s-luckyhorse-bleulin.jpg"}
              cardTitle={
                "Silver Stainless Steel Case with Attelage Double Tour"
              }
              cardtDesc={
                "The Attelage Double Tour wraps delicately around the wrist, and features an elongated lug that references the stirrups on an Hermès saddle."
              }
              reducedPrice={"$1,299"}
              actualPrice={"$1,399"}
            />
            <Card
              src={"images/hermes8s-complex-noirprint.jpg"}
              cardTitle={
                "Silver Stainless Steel Case with Gourmette Double Tour"
              }
              cardtDesc={
                "The Gourmette Double Tour band features the iconic Hermès chain in supple, handcrafted leather and wraps gracefully twice around the wrist"
              }
              reducedPrice={"$1,659"}
              actualPrice={"$1,759"}
            />
          </div>
        </main>
      </div>
      <Subscription />
    </>
  );
}
