import { EmployeeCard } from "../../components/UI";

export default function PlanPage() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-10">
            {/* Titel */}
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
                👥 Alle Mitarbeiter
            </h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(10)].map((_, index) => (
                    <EmployeeCard
                        key={index}
                        workTime={10}
                        name={`Mitarbeiter ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
