import React, { useState, useEffect } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

const FormButton = ({ email, category }) => {
  const [label, setLabel] = useState("Submit");
  const [classes, setClasses] = useState("btn mt-3 btn-primary");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLabel("Submit");
    setClasses("btn mt-3 btn-primary");
    setLoading(false);
  }, [email]);

  const updateButton = (type) => {
    const currentClasses = classes.split(" ");
    currentClasses.pop();
    currentClasses.push(type);
    const finalClassString = currentClasses.join(" ");
    setClasses(finalClassString);
  };

  const sendRequest = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    setLoading(true);
    setLabel("Submitting . . .");

    const functions = getFunctions();
    const freeOptionsEnquiry = httpsCallable(functions, "freeOptionsEnquiry");

    freeOptionsEnquiry({ email, category }).then((result) => {
      const resp = result.data;
      setLabel(resp.message);

      if (resp.status == 200) {
        updateButton("btn-success");
      } else {
        updateButton("btn-danger");
      }
    });
  };

  return (
    <button className={classes} onClick={sendRequest}>
      {label}
    </button>
  );
};

export default FormButton;
