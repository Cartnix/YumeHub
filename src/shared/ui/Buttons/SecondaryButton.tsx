import { Button } from 'antd';


export default function SecondaryButtonUI() {
    return (
        <>
            <Button type="primary" size='large' className="
            !bg-[#f2f2f2]
            !text-[#1b1b1b]
            hover:!bg-[#d3c8c8]
            active:!bg-[#b4a1a1]
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
