import React from "react";

export default function useActivateProfile() {
  const [loading, setLoading] = React.useState(false);

  async function activateProfile() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return { loading, activateProfile };
}
