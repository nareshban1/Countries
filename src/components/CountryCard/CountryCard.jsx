import {
  CardContainer,
  CountryDetails,
  CountryInfo,
  CountryInfoData,
  CountryInfoItem,
  CountryName,
  FlagImage,
} from "./CountryCardStyles";

const CountryCard = ({ name, image, population, region, capital }) => {
  return (
    <CardContainer>
      <FlagImage src={image} alt={name} />
      <CountryDetails>
        <CountryName>{name}</CountryName>
        <CountryInfo>
          <CountryInfoItem>
            Population:
            <CountryInfoData>{population}</CountryInfoData>
          </CountryInfoItem>
          <CountryInfoItem>
            Region:
            <CountryInfoData>{region}</CountryInfoData>
          </CountryInfoItem>
          <CountryInfoItem>
            Capital:
            <CountryInfoData>{capital}</CountryInfoData>
          </CountryInfoItem>
        </CountryInfo>
      </CountryDetails>
    </CardContainer>
  );
};

export default CountryCard;
