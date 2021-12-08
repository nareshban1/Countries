import { useState, useEffect } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import Filter from "../../components/Filter/Filter";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchCountries } from "../../utilities/api";
import { Container } from "../../utilities/commonStyles";
import { CountryGrid, FormContainer, HomePageContainer } from "./HomeStyles";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.com/v2/all");

  const getCountryData = (url) => {
    fetchCountries(url).then((res) => {
      setCountries(res.data);
    });
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
        <FormContainer>
          <SearchForm setUrl={setUrl} />
          <Filter setUrl={setUrl} />
        </FormContainer>
        <CountryGrid>
          {countries?.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
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
