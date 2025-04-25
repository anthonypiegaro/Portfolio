export function PrettyLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const { children, ...rest } = props

    return (
        <a 
            className="cursor-pointer transition-all underline hover:no-underline hover:text-sky-500 hover:font-semibold"
            {...rest}
        >
            {children}
        </a>
    )
}