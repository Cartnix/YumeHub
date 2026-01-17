interface CheckBoxUIProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export const CheckBox = ({
    checked,
    onChange,
    disabled,
}: CheckBoxUIProps) => {
    return (
        <span className="inline-flex items-center">
            <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
                className="peer sr-only"
            />

            <span
                className={`
                relative flex h-5 w-5 items-center justify-center rounded 
                border-[var(--color-gray-2)]
                ${checked ? "bg-white border-0" : "bg-transparent border-2"}
                transition-colors
            `}
            >
                <svg
                    className={`h-4 w-4 transition-opacity ${checked ? "opacity-100" : "opacity-0"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth={3}
                >
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </span>

        </span>
    );
}
