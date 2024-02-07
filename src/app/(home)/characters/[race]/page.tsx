import { CharacterGrid, Searcher } from "@/components";
import { PaginationUtil, getDataCharacterByRace, toUpperCaseUtil } from "@/utils";

import { Pagination } from "@/components";
import { BackgroundImageByFilter } from "@/components/shared/background-image/BackgroundImage";
import { Metadata } from "next";

interface Props {
  params: {
    race: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: "Characters of the lord of the rings",
  description: "This application is a test",
};

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
  // Get elements per page
  const { entries} = PaginationUtil({page:page , data:data, dataPerPage:dataPerPage})

  return (
    <BackgroundImageByFilter filter={race} style="grid place-content-center" >
      <Searcher />
        <CharacterGrid characters={entries}/>
      <Pagination totalItems={data.length} itemPerPage={dataPerPage}/>
    </BackgroundImageByFilter>
  );
}