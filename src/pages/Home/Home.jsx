import { useState, useEffect } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import { fetchCountries } from "../../utilities/api";
import { Container } from "../../utilities/commonStyles";
import { CountryGrid, HomePageContainer } from "./HomeStyles";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");

  const getCountryData = (url) => {
    fetchCountries(url).then((res) => {
      setCountries(res.data);
    });
    setCountries();
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getCountryData(url);
    }

    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <HomePageContainer>
      <Container>
        <CountryGrid>
          {countries?.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name?.official}
              image={country.flags?.png}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          ))}
        </CountryGrid>
      </Container>
    </HomePageContainer>
  );
};

export default Home;
