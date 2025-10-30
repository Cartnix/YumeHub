export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-17">
            {children}
        </div>
    )
}