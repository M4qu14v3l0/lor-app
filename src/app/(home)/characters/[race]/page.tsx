
// Not Found , ERROR PAGES

import { CharacterGrid } from "@/components";
import { getDataCharacterByRace, toUpperCaseUtil } from "@/utils";

// params, serachParams

interface Props {
  params: {
    race: string;
  }
}

export default async function RacesPage( {params}:Props ) {

  const race = toUpperCaseUtil(params.race)
  const data = await getDataCharacterByRace(race)

  return (
    <div >
      <CharacterGrid characters={data}/>
    </div>
  );
}