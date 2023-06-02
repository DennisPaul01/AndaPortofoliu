import React from "react";
import { Typography, Link } from "@mui/material";

const ContactComponent = () => {
  const phoneNumber = "XXX-XXXX-XXXX";

  return (
    <Typography variant="body1">
      If you're interested in working with me to either bring your new brand to
      life or give your current one a much-needed refresh, contact me on{" "}
      <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>.
    </Typography>
  );
};

export default ContactComponent;
