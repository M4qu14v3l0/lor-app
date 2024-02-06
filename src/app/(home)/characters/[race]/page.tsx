
// Not Found , ERROR PAGES

import { CharacterGrid } from "@/components";
import { getDataCharacterByRace, toUpperCaseUtil } from "@/utils";

import { Pagination } from "@/components";

// params, serachParams

interface Props {
  params: {
    race: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function RacesPage( {params , searchParams}:Props ) {

  const race = toUpperCaseUtil(params.race);
  const data = await getDataCharacterByRace(race);

  // Start pagination in first page
  const page = searchParams['page'] ?? '1'
  // Showing 6 elements
  const dataPerPage = 10


  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * dataPerPage // 0, 5, 10 ...
  const end = start + dataPerPage // 5, 10, 15 ...

  // const totalData = data.length
  const entries = data.slice(start, end)

  return (
    <div className="grid place-content-center">
      <CharacterGrid characters={entries}/>
      
      <Pagination totalItems={data.length} itemPerPage={dataPerPage}/>
    </div>
  );
}