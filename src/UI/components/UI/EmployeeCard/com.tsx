type Props = {
    workTime: number;
    name: string;
    className?: string;
};

export default function EmployeeCard({ name, workTime, className }: Props) {
    return (
        <div
            className={`flex flex-col items-start gap-2 bg-white shadow-md border border-gray-200 rounded-xl p-5 cursor-pointer 
      hover:shadow-lg hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 ${className}`}
        >
            {/* Name */}
            <p className="text-lg font-semibold text-gray-800 tracking-wide">
                {name}
            </p>

            {/* Arbeitszeit */}
            <p className="text-sm font-medium text-gray-500">
                ⏱ {workTime} Stunden
            </p>
        </div>
    );
}
