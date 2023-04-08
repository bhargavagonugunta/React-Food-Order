

const Simmer = ()=>{ 
    return (<>
        <div><h1>Data is loading......... Please Wait</h1></div>
            
        <div className="flex flex-wrap">
    
       {Array(15).fill("").map((e, index )=>(<div key={index} className="w-[200px] h-[250px] p-4 m-2 rounded-lg shadow-2xl bg-gray-300 "></div>))} 
        </div>
        </>
    )
}
export default Simmer;