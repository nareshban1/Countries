import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchCountries } from "../../utilities/api";
import {
  BackButton,
  CountryBorderContainer,
  CountryBorders,
  CountryBorderTitle,
  CountryData,
  CountryDetails,
  CountryFlag,
  CountryInfo,
  CountryInfoContainer,
  CountryInfoLeft,
  CountryInfoRight,
  CountryName,
  DetailsContainer,
} from "./DetailsStyle";
const Details = () => {
  const params = useParams();

  const [country, setCountry] = useState([]);
  const getCountryData = (url) => {
    fetchCountries(url).then((res) => {
      setCountry(res?.data);
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getCountryData(
        `https://restcountries.com/v2/name/${params.name}?fullText=true`
      );
    }

    return () => {
      mounted = false;
    };
  }, [params.name]);

  return (
    <DetailsContainer>
      <BackButton></BackButton>
      <CountryDetails>
        <CountryFlag src={country[0]?.flags?.png} />
        <CountryInfoContainer>
          <CountryName>{country[0]?.name}</CountryName>
          <CountryInfo>
            <CountryInfoLeft>
              <CountryData>Native Name:{country[0]?.nativeName}</CountryData>
              <CountryData>
                Population:{country[0]?.languages?.nativeName}
              </CountryData>
              <CountryData>Region:{country[0]?.region}</CountryData>
              <CountryData>Sub Region:{country[0]?.subregion}</CountryData>
              <CountryData>Capital:{country[0]?.capital}</CountryData>
            </CountryInfoLeft>
            <CountryInfoRight>
              <CountryData>
                Top Level Domain:{country[0]?.topLevelDomain}
              </CountryData>
              <CountryData>
                Currencies:
                {country[0]?.currencies?.map((currency, index) => (
                  <>{currency.name}</>
                ))}
              </CountryData>
              <CountryData>
                Languages:
                {country[0]?.languages?.map((language, index) => (
                  <>{language.name}</>
                ))}
              </CountryData>
            </CountryInfoRight>
          </CountryInfo>
          <CountryBorderContainer>
            <CountryBorderTitle></CountryBorderTitle>
            <CountryBorders></CountryBorders>
          </CountryBorderContainer>
        </CountryInfoContainer>
      </CountryDetails>
    </DetailsContainer>
  );
};

export default Details;
