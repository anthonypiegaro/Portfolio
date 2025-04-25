function PrettyInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...rest } = props

    return (
        <>
            <input 
                className={`border rounded-md p-2 appearance-none outline-none focus:outline-none focus:ring-0 ${className ?? ""}`}
                {...rest}
            />
        </>
    )
}

export function ContactForm() {
    return (
        <form 
            action="https://formsubmit.co/anthonypiegaro.dev@gmail.com" 
            method="POST" 
            className="flex flex-col p-4 gap-y-4 md:flex-row md:flex-wrap md:justify-between"
        >
            <div className="w-full text-lg font-semibold">Contact Me</div>
            <PrettyInput 
                type="name" 
                name="name" 
                className="w-full md:w-[45%]" 
                required
            />
            <PrettyInput 
                type="email" 
                name="email" 
                className="w-full md:w-[45%]"
                required
            />
            <PrettyInput 
                type="message" 
                name="message" 
                className="w-full" 
                required
            />
        </form>
    )
}