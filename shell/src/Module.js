const ModulePage = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://swapi.dev/api/people/${personId}`);
      })
      .catch((error) => console.log(error));
  }, [personId]);

  return (
    <>
      {!isLoading && (
        <>
          { JSON.stringify(data) }
        </>
      )}
    </>
  );
};