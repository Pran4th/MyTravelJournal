import React from "react";
import Header from "./Header";
import Main from "./Main";
import Data from "./Data";

export default function App() {
  const Mains = Data.map(item => (
    <Main
      key={item.id}
      img={item.img}
      location={item.location}
      locationpoint={item.locationpoint}
      title={item.title}
      date={item.date}
      description={item.description}
    />
  ));

  return (
    <div>
      <Header />
      <section className="Main-list">
        {Mains}
      </section>
    </div>
  );
}
