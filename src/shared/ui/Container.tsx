export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative mx-auto w-full max-w-[1600px] px-10">
            {children}
        </div>
    )
}