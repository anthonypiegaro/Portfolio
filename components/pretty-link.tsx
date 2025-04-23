export function PrettyLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a 
            className="cursor-pointer transition-all underline hover:no-underline hover:text-sky-500 hover:font-semibold"
            href={href}
        >
            {children}
        </a>
    )
}