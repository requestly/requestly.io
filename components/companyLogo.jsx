import React, { useCallback, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import { filesByCountry, getCountryName } from "../utils/utils";

const CompanyLogo = () => {
  //country of visitor
  const [currentCountry, setCurrentCountry] = useState("");
  //set the no. of images countrywise
  const [logoCount, setLogoCount] = useState(0);
  const [loading, setLoading] = useState(true);

  //setting logoCount
  const setCount = useCallback((country) => {
    if (country === "") setLoading(false);
    //checking if country is included
    else if (filesByCountry[country] !== undefined) {
      setLogoCount(filesByCountry[country]);
      setLoading(false);
    } else if (country !== "" && filesByCountry[country] === undefined) {
      //if country not included show default logos
      setLoading(false);
    }
  }, []);

  const setCountryName = useCallback(async () => {
    const countryName = await getCountryName();
    setCurrentCountry(countryName);
    setCount(countryName);
  }, [setCount]);

  useEffect(() => {
    setCountryName();
  }, [setCountryName]);

  //return logos country wise
  const returnCountryLogos = () => {
    return [...Array(logoCount)].map((_, index) => {
      return (
        <span key={index} className="customerLogo mr-3 mx-lg-5">
          <img
            height="130px"
            width="130px"
            alt="logo"
            src={`/assets/img/countries-customer-brand/${currentCountry}/customerLogo-${index}.svg`}
          />
        </span>
      );
    });
  };

  //returns 10 - (count) logos from default group
  const returnDefaultLogos = () => {
    return [...Array(10 - logoCount)].map((_, index) => {
      return (
        <span key={index} className="customerLogo mr-3 mx-lg-5">
          <img
            height="130px"
            width="130px"
            alt="Customer Logo"
            src={`/assets/img/customer-brand/customerLogo-${index}.svg`}
          />
        </span>
      );
    });
  };

  return (
    <div className="text-center ">
      {loading ? (
        <div className="mr-lg-6 mr-6 my-6">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        [returnCountryLogos(), returnDefaultLogos()]
      )}
    </div>
  );
};

export default CompanyLogo;
