
// Not Found , ERROR PAGES

// params, serachParams

interface Props {
  params: {
    race: string;
  }
}

export default function RacesPage( {params}:Props ) {

  console.log(params.race)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      <h1>{params.race}</h1>
    </div>
  );
}