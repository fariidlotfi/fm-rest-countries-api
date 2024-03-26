import "./CountryCard.css";

const CountryCard = (props) => {
  const { name, image, population, region, capital } = props;

  return (
    <article className="country_card">
      <img src={image} alt={name} className="country_card__image" />
      <div className="country_card__info">
        <h3 className="country_card__title">{name}</h3>
        <ul className="country_card__statics">
          <li className="country_card__bold_text">
            Population:{" "}
            <span className="country_card__noraml_text">
              {population.toLocaleString()}
            </span>
          </li>
          <li className="country_card__bold_text">
            Region: <span className="country_card__noraml_text">{region}</span>
          </li>
          <li className="country_card__bold_text">
            Capital:{" "}
            <span className="country_card__noraml_text">{capital}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CountryCard;
