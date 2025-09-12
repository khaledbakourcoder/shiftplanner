import {EmployeeCard} from "../../components/UI";

export default function PlanPage(){
    return(
        <section>
            <h1> Alle Mitarbeiter</h1>
            <div className={"flex flex-wrap items-center justify-between max-w-screen gap-4"} >
                {[1,2,3,4,5,6,7,8,9,10].map((_,index)=>
                    <EmployeeCard key={index} workTime={10} name={`Mitarbeiter ${++index}`}/>

                )}




            </div>
        </section>
    )
}