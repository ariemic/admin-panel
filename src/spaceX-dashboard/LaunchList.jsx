import { useEffect, useState } from 'react';
// arf - shorcut

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLaunches();
  }, []);

  async function fetchLaunches() {
    setLoading(true);
    const url = 'https://api.spacexdata.com/v4/launches/query';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        options: {
          limit: 6,
          sort: {
            date_utc: 'desc',
          },
        },
      }),
    });

    const data = await response.json();
    setLaunches(data.docs); // Note: results are in the docs property
    setLoading(false);
  }

  if (loading) {
    return <p>Launches are fetching! Keep calm.</p>;
  }
  return (
    <div className="mt-4 ml-8 flex flex-col items-center">
      <h1 className="mb-3 text-3xl">List of Launches</h1>
      <div>
        {launches.map((launch) => {
          return (
            <div key={launch.id}>
              <h3>Name: {launch.name}</h3>
              <ul className="mb-3 list-disc">
                <li>Date: {launch.date_utc}</li>
                <li>Upcoming: {launch.upcoming ? 'yeah' : 'not soon'}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LaunchList;
