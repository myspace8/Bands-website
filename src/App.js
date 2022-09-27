import Button from './ButtonList';
import { useEffect, useState } from 'react';
import {ghanaInfo, usaInfo, chinaInfo, nigeriaInfo} from './data'; // TODO: A way to import all data e.g import all from './data'
import InfoList from './InfoList';

export default function App() {
  const [selected, setSelected] = useState("ghana");
  const [data, setData] = useState([]);

  const countryList = [
    {
      id: "ghana",
      country: "Ghana"
    },
    {
      id: "usa",
      country: "USA"
    },
    {
      id: "china",
      country: "China"
    },
    {
      id: "nigeria",
      country: "Nigeria"
    }
  ];

  
  useEffect(() => {
    switch (selected) {
      case "ghana":
        setData(ghanaInfo);
        break;
      case "usa":
        setData(usaInfo);
        break;
      case "china":
        setData(chinaInfo);
        break;
      case "nigeria":
        setData(nigeriaInfo);
        break;
      default:
        setData(ghanaInfo);
    }
  },[selected]);

  return (
    <main>
      <div>
        {data.map((d) => (
            <InfoList 
            flag={d.src}
            continent={d.continent} 
            language={d.language} 
            population={d.population} 
            key={d.id}
            />
        ))}
      </div>

      <ul className="btnContainer">
        {countryList.map((country) => (
          <Button 
          country={country.country} 
          active={selected === country.id} 
          setSelected={setSelected}
          id={country.id}
          key={country.id}
           />
        ))}
      </ul>
    </main>
  );
}


