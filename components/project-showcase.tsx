import React from "react";

export function ProjectShowcase({ 
    icon, 
    title, 
    subtitle,
    href,
    children 
}: { 
    icon: React.ReactNode,
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    href?: string,
}) {
    return (
        <a className={`flex flex-col rounded-lg p-4 bg-neutral-800 transition-all hover:bg-neutral-700 w-xl max-w-[85vw] lg:w-3xl`} href={href ?? ""} target="_blank">
            <div className="flex flex-1 flex-col items-center">
                {icon}
                <h2
                    className="text-lg font-bold"
                >
                    {title}
                </h2>
                <p
                    className="text-center max-w-xl font-semibold"
                >
                    {subtitle}
                </p>
            </div>
            <p className="p-2 font-medium text-center">
                {children}
            </p>
        </a>
    )
}