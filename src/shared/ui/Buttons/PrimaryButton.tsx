import { Button, type ButtonProps } from 'antd';

interface PrimaryButtonI extends ButtonProps{
    children: React.ReactNode
}

export default function PrimaryButtonUI({children, ...props}: PrimaryButtonI) {
    return (
        <>
            <Button type="primary" size='large' className="
            flex justify-center gap-3 items-center
            !bg-[var(--color-btn-primary)]
            !text-[var(--color-white)]
            hover:!bg-[var(--color-btn-primary-hover)]
            active:!bg-[var(--color-btn-primary-active)]
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
