import { Character } from "@/interfaces"

interface Props{
  page: string | string[]
  dataPerPage: number
  data: Character[]
}

export const PaginationUtil = ( {page , dataPerPage ,data }: Props) => {
  const start = (Number(page) - 1) * dataPerPage
  const end = start + dataPerPage
  const entries = data.slice(start, end)

  return {
    entries
  }
}
