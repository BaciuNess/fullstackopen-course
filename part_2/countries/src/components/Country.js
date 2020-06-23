import React from 'react';

const Country = ({country, lenghtOfCountries}) => {
  console.log(country);
  if (lenghtOfCountries === 1) {
    return (
      <>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>

        <h3>Languages</h3>
        <ul>
          {country.languages.map(language => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
        </ul>
        <br />
        <img alt={country.name} src={country.flag} width="200px" />
      </>
    );
  } else {
    return <li>{country.name}</li>;
  }
};

export default Country;
