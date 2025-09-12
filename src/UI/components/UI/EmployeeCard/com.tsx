
type props={
    workTime:number,
    name:string,
    className?: string
}

export default function EmployeeCard({name,workTime}:props){
    return(
        <div className={`flex flex-col shadow-lg p-4  cursor-pointer rounded min-w-[20%] hover:bg-primary-500 transition-colors duration-200`}>
           <p>
               {name}
           </p>
            <p>
                {workTime}
            </p>

        </div>
    )
}