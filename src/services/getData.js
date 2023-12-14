export const getData = ({setData, currentPage, setLoading}) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=10`)
      .then(async res => await res.json())
      .then((res) => setData(res))
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  };