/*
 * Subscribe end user to
 * SendInBlue
 */
import axios from "axios";

const API_KEY = process.env.SENDINBLUE_KEY;
const LIST_ID = 47;

// POST email to sib list
const subscribeUser = (email_address) => {
  const uri = `https://api.sendinblue.com/v3/contacts/`;

  return axios.post(
    uri,
    {
      email: email_address,
      listIds: [LIST_ID],
      updateEnabled: false,
    },
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": API_KEY,
      },
    }
  );
};

export default subscribeUser;
