

export const toUpperCaseUtil = ( parameter:string ) => {

  const processedParam = parameter.charAt(0).toUpperCase() + parameter.slice(1);

  return processedParam

}
