// Integrations
import { addAmplitude, addPostHog, initGA } from "../config/integrations";
import { initializeFirebase } from "../utils/firebase";
import React, { useEffect } from "react";

const Init = () => {
  useEffect(() => {
    // Firebase
    initializeFirebase();

    // GA
    initGA(process.env.NEXT_PUBLIC_GA_KEY);

    // Amplitude
    addAmplitude();
    
    // PostHog
    addPostHog();
  }, []);

  return <></>;
};

export default Init;
