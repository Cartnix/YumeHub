import type { YearDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import type { CheckboxProps } from 'antd';
import { Checkbox } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export function SeasonDropDown({ title }: YearDropDownI) {

    return (
        <DropDown title={title}>
            <div className="flex gap-2 mt-2 flex-wrap flex-col">
                <Checkbox onChange={onChange} className="!text-amber-50 !text-xl">Winter</Checkbox>
                <Checkbox onChange={onChange} className="!text-amber-50 !text-xl">Spring</Checkbox>
                <Checkbox onChange={onChange} className="!text-amber-50 !text-xl">Summer</Checkbox>
                <Checkbox onChange={onChange} className="!text-amber-50 !text-xl">Autumn</Checkbox>
                <Checkbox onChange={onChange} className="!text-amber-50 !text-xl">Full</Checkbox>
            </div>
        </DropDown>
    );
}
