import React from "react";

export default function Form({ condition, children }: { condition: boolean, children: React.ReactNode }) {
    return (
        <div className={`absolute top-1/2 ${condition ? 'left-1/2 opacity-100' : 'left-0 opacity-0'} transition-all duration-150 transform -translate-x-1/2 -translate-y-1/2`}>
            <div className="flex flex-col items-center gap-6">
                {children}
            </div>
        </div>
    )
}