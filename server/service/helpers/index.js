async function getAll(Schema, category, page) {
  let arr = await Schema.find();

  if (category) {
    arr = arr.filter((item) => item.category === category);
  }

  const end = page * 10;
  const start = end - 10;

  const total = arr.length;

  return { arr: arr.slice(start, end), total };
}

module.exports = { getAll };
