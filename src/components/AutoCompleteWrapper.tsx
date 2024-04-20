import { useState } from "react";
import { AutoComplete, type Option } from "./AutoComplete";
import { regions } from "@/constants/regions";

export const AutoCompleteWrapper = () => {
    const [value, setValue] = useState<Option>({ value: "", label: "" });
    console.log(value);

    return (
        <div className="absolute w-[420px] h-[48px] top-0 right-0 mx-[140px] my-[48px]">
            <AutoComplete
                options={regions}
                emptyMessage="Не найдено"
                placeholder="Введите название региона"
                isLoading={false}
                onValueChange={setValue}
                value={value}
                disabled={false}
            />
        </div>
    );
};
