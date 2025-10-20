import { Button } from 'antd';


export default function SecondaryButtonUI() {
    return (
        <>
            <Button type="primary" size='large' className="
            !bg-[#f2f2f2]
            !text-[#1b1b1b]
            hover:!bg-[#e6e6e6]
            active:!bg-[#d9d9d9]
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
