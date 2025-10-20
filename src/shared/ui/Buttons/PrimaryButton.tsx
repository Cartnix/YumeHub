import { Button } from 'antd';


export default function PrimaryButton() {
    return (
        <>
            <Button type="primary" size='large' className="
            !bg-[#1b1b1b]
            !text-white
            hover:!bg-[#242424]
            active:!bg-[#0f0f0f]
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
