import { Button } from 'antd';


export default function PrimaryButtonUI() {
    return (
        <>
            <Button type="primary" size='large' className="
            !bg-[#363333]
            !text-white
            hover:!bg-[#302727]
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
