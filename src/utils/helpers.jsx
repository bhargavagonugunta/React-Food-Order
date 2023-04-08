export function findRestro(allRestro,searchtext) {
    const filterdata = allRestro.filter((restro)=>
        restro.data.name.includes(searchtext)
    );
    return filterdata;
}