import {useRef} from "react";
import {FiX} from "react-icons/fi";

const FileInput = ({label, placeholder, onChange, value, ...props}
) => {

    const fileInputRef = useRef(undefined)
    const handleClick = (ref) => ref.current.click()
    const handleDelete = () => onChange(null)

    return (
        <div className={"w-full flex flex-col gap-[10px]"}>

            <h4 className={"text-text-black font-medium"}>
                {label}
            </h4>

            <div className={"relative w-full h-[130px]"}>

                {
                    value && <FiX
                        size={"22px"}
                        className={"absolute z-10 top-[30px] right-[30px] stroke-white"}
                        onClick={handleDelete}
                    />
                }

                <div
                    className={"flex items-center justify-center border-dashed border-2" +
                        " border-main-blue w-full h-full rounded-xl overflow-clip bg-background-light-blue"}
                    onClick={() => handleClick(fileInputRef)}
                >
                    {
                        value ? (
                            <img
                                className={"w-full h-full object-fill"}
                                src={value}
                                alt={'/'}
                            />
                        ) : (
                            <h4 className={"text-main-blue font-medium"}>
                                {placeholder}
                            </h4>
                        )
                    }

                </div>
                <input
                    {...props}
                    onChange={onChange}
                    onClick={(event) => event.target.value = null}
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    type={"file"}
                />
            </div>

        </div>
    )

}

export default FileInput