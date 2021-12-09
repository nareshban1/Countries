import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchCountries } from "../../utilities/api";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Container } from "../../utilities/commonStyles";
import {
  BackButton,
  BorderList,
  CountryBorderContainer,
  CountryBorders,
  CountryBorderTitle,
  CountryData,
  CountryDetails,
  CountryFlag,
  CountryFlagContainer,
  CountryInfo,
  CountryInfoContainer,
  CountryInfoData,
  CountryInfoLeft,
  CountryInfoRight,
  CountryName,
  DetailsContainer,
} from "./DetailsStyle";
const Details = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState([]);
  const [neighbours, setNeighbours] = useState([]);
  const getCountryData = (url) => {
    fetchCountries(url).then((res) => {
      setCountry(res?.data);
    });
  };

  const getNeighborData = (url) => {
    fetchCountries(url).then((res) => {
      setNeighbours(res?.data);
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

  useEffect(() => {
    let mounted = true;

    let borders = [];
    if (country[0]?.borders) {
      console.log("hi");
      for (const neighbour of country[0]?.borders) {
        borders.push(neighbour);
      }
      if (mounted) {
        getNeighborData(`https://restcountries.com/v2/alpha?codes=${borders}`);
      }
    }

    return () => {
      mounted = false;
    };
  }, [country]);

  return (
    <DetailsContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          <HiOutlineArrowNarrowLeft />
          &nbsp; Back
        </BackButton>
        <CountryDetails>
          <CountryFlagContainer>
            <CountryFlag src={country[0]?.flags?.png} />
          </CountryFlagContainer>
          <CountryInfoContainer>
            <CountryName>{country[0]?.name}</CountryName>
            <CountryInfo>
              <CountryInfoLeft>
                <CountryData>
                  Native Name: &nbsp;
                  <CountryInfoData>{country[0]?.nativeName}</CountryInfoData>
                </CountryData>
                <CountryData>
                  Population:&nbsp;
                  <CountryInfoData>
                    {country[0]?.languages?.nativeName}
                  </CountryInfoData>
                </CountryData>
                <CountryData>
                  Region:&nbsp;
                  <CountryInfoData>{country[0]?.region}</CountryInfoData>
                </CountryData>
                <CountryData>
                  Sub Region:&nbsp;
                  <CountryInfoData>{country[0]?.subregion}</CountryInfoData>
                </CountryData>
                <CountryData>
                  Capital:&nbsp;
                  <CountryInfoData>{country[0]?.capital}</CountryInfoData>
                </CountryData>
              </CountryInfoLeft>
              <CountryInfoRight>
                <CountryData>
                  Top Level Domain:&nbsp;
                  <CountryInfoData>
                    {country[0]?.topLevelDomain}
                  </CountryInfoData>
                </CountryData>
                <CountryData>
                  Currencies:&nbsp;
                  <CountryInfoData>
                    {country[0]?.currencies?.map((currency, index) => (
                      <>{(index ? ", " : "") + currency.name}</>
                    ))}
                  </CountryInfoData>
                </CountryData>
                <CountryData>
                  Languages:&nbsp;
                  <CountryInfoData>
                    {country[0]?.languages?.map((language, index) => (
                      <>{(index ? ", " : "") + language.name}</>
                    ))}
                  </CountryInfoData>
                </CountryData>
              </CountryInfoRight>
            </CountryInfo>
            {neighbours.length ? (
              <>
                <CountryBorderContainer>
                  <CountryBorderTitle>Border Countries</CountryBorderTitle>
                  <BorderList>
                    {neighbours?.map((neighbour, index) => (
                      <CountryBorders
                        to={`/details/${neighbour.name}`}
                        key={index}
                      >
                        {neighbour.name}
                      </CountryBorders>
                    ))}
                  </BorderList>
                </CountryBorderContainer>
              </>
            ) : null}
          </CountryInfoContainer>
        </CountryDetails>
      </Container>
    </DetailsContainer>
  );
};

export default Details;
