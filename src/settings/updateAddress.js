const updateAddress = (addressInner) => {
  if (!addressInner)
    return { city: "Unknown City", country: "Unknown Country" };

  const addressArr = addressInner.split(" ").slice(3, 5);
  const city = addressArr[0]?.replace(",", "") || "Unknown City";
  const country = addressArr[1] || "Unknown Country";

  return { city, country };
};

export default updateAddress;
