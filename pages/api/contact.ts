import { NextApiHandler } from "next";
import axios from "axios";
import querystring from "querystring";

const contact: NextApiHandler = async (req, res) => {
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLSf0MYTvjeXY3UTv3rrKF1YrEQRJDuI3AfOgiPFXTW1qZaC3JA/formResponse";
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  console.log("inside");
  const response = await axios.post(link, querystring.stringify(req.body), {
    headers: headers,
  });

  if (response.status === 200) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
};

export default contact;
