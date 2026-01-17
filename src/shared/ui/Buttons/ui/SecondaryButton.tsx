import { Button, type ButtonProps } from 'antd';


interface SecondaryButtonI extends ButtonProps{
    children: React.ReactNode
}

export const SecondaryButton = ({ children, className, ...props }: SecondaryButtonI) => {
    return (
        <Button
            type="primary"
            size="large"
            className={`
                !bg-[var(--color-offwhite)]
                !text-[var(--color-dark-1)]
                hover:!bg-[var(--color-btn-secondary-hover)]
                active:!bg-[var(--color-btn-secondary-active)]
                !border-none
                rounded-xl
                transition-colors
                duration-200
                ${className || ""}
            `}
            {...props}
        >
            {children}
        </Button>
    );
}
