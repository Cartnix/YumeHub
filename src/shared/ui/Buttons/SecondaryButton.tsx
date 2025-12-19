import { Button, type ButtonProps } from 'antd';


interface SecondaryButtonI extends ButtonProps{
    children: React.ReactNode
}

export default function SecondaryButtonUI({children, ...props}: SecondaryButtonI) {
    return (
        <>
            <Button type="primary" size='large' className="
            !bg-[var(--color-offwhite)]
            !text-[var(--color-dark-1)]
            hover:!bg-[var(--color-btn-secondary-hover)]
            active:!bg-[var(--color-btn-secondary-active)]
            !border-none
            !outline-none
            !shadow-none
            focus:!shadow-none
            active:!shadow-none
            focus:!outline-none
            rounded-xl
            transition-colors
            duration-200
        " {...props}>
                {children}
            </Button>
        </>
    );
};
