module.exports = async (payloadEnable) => {
  return payloadEnable.map((item) => ({
    id: item.id,
    advertiser_name: item.advertiser_name,
    premium: item.premium,
    state: "disable",
    starts_at: item.starts_at,
    ends_at: item.ends_at,
    description: item.description,
    url: item.url,
  }));
};
