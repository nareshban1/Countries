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
    <CardContainer to={`/details/${name}`}>
      <FlagImage src={image} alt={name} />
      <CountryDetails>
        <CountryName>{name}</CountryName>
        <CountryInfo>
          <CountryInfoItem>
            Population:&nbsp;
            <CountryInfoData>{population}</CountryInfoData>
          </CountryInfoItem>
          <CountryInfoItem>
            Region:&nbsp;
            <CountryInfoData>{region}</CountryInfoData>
          </CountryInfoItem>
          <CountryInfoItem>
            Capital:&nbsp;
            <CountryInfoData>{capital}</CountryInfoData>
          </CountryInfoItem>
        </CountryInfo>
      </CountryDetails>
    </CardContainer>
  );
};

export default CountryCard;
