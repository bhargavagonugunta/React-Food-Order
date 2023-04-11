export function findRestro(allRestro,searchtext) {
    const filterdata = allRestro.filter((restro)=>
        restro.data.name.toLowerCase().startsWith(searchtext)
    );
    return filterdata;
}