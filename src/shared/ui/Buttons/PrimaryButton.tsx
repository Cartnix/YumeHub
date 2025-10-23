import { Button } from 'antd';


export default function PrimaryButtonUI() {
    return (
        <>
            <Button type="primary" size='large' className="
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
        ">
                Log in
            </Button>
        </>
    );
};
