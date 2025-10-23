import { Button } from 'antd';


export default function SecondaryButtonUI() {
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
        ">
                Get Started
            </Button>
        </>
    );
};
