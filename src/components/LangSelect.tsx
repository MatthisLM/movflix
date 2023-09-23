
import { FC } from "react";
import { Select } from "antd";
import { TfiWorld } from "react-icons/tfi"

const LangSelector: FC = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <TfiWorld className="text-brandYellow"/>
            <Select
                className="!w-16"
                defaultValue="en"
                style={{ width: 120 }}
                onChange={handleChange}
                bordered={false}
                options={[
                { value: 'en', label: 'EN' },
                { value: 'ar', label: 'AR' },
                { value: 'eu', label: 'EU' },
                { value: 'te', label: 'TE' },
            ]}
            />
      </>
)};

export default LangSelector;
