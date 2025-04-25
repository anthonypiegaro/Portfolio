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

function PrettyTextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const { className, ...rest } = props

    return (
        <textarea 
            className={`border rounded-md p-2 appearance-none resize-none outline-none focus:outline-none focus:ring-0 ${className ?? ""}`}
            {...rest}
        />
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
            <div className="w-full md:w-[45%]">
                <label>name</label>
                <PrettyInput 
                    type="name"
                    name="name"
                    className="w-full" 
                    required
                />
            </div>
            <div className="w-full md:w-[45%]">
                <label>email</label>
                <PrettyInput 
                    type="email" 
                    name="email" 
                    className="w-full"
                    required
                />
            </div>
            <div className="w-full">
                <label>message</label>
                <PrettyTextArea 
                    name="message" 
                    className="w-full"
                    rows={7}
                    required
                />
            </div>
            <div>
                <button 
                    className="border rounded-md p-2 transition-all hover:border-sky-500 hover:text-sky-500 hover:border-2"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}