export const getData = async ({setData, currentPage, setLoading}) => {
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=10`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };