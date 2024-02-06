
// Not Found , ERROR PAGES

import { CharacterGrid, Searcher } from "@/components";
import { PaginationUtil, getDataCharacterByRace, toUpperCaseUtil } from "@/utils";

import { Pagination } from "@/components";


// params, serachParams

interface Props {
  params: {
    race: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function RacesPage( {params , searchParams}:Props ) {

  // Transform race format
  const race = toUpperCaseUtil(params.race);
  // Name param exists ?
  const name = searchParams['name'] 
  // Start pagination in first page
  const page = searchParams['page'] ?? '1'
  const data = await getDataCharacterByRace( {param:race, name:name});
  // Showing 10 elements
  const dataPerPage = 10
  // mocked, skipped and limited in the real app
  const { entries} = PaginationUtil({page:page , data:data, dataPerPage:dataPerPage})

  return (
    <div className="grid pt-20 place-content-center">
      
      <Searcher />
      <CharacterGrid characters={entries}/>
      <Pagination totalItems={data.length} itemPerPage={dataPerPage}/>
    </div>
  );
}