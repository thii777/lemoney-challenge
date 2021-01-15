const isValidFields = (data, fields) => {
  let missingData = [];

  if (data) {
    const errors = fields.filter((field) => {
      if (!data[field]) return field;
    });

    missingData.push(...errors);

    if (missingData.length) return { error: missingData };
  }

  return data;
};

module.exports = { isValidFields };
