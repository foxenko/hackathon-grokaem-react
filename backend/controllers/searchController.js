const searchController = (req, res) => {
  try {
    const results = [
      { title: "тачка 1", description: "Описание тачки 1", link: "#" },
      { title: "тачка 2", description: "Описание тачки 2", link: "#" },
    ];
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = searchController;
