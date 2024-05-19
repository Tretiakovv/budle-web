import {useRef} from "react";
import {FiPlus, FiX} from "react-icons/fi";
import {cn} from "../../../../utils/cn";

const inputCV = [
    "flex items-center justify-center border-dashed border-2",
    "border-main-blue w-full h-[160px] rounded-xl overflow-clip bg-background-light-blue",
    "group-hover:bg-blue-100 group-hover:text-blue-600 transition duration-200 "
]

const FileInput = ({label, placeholder, onChange, value, ...props}) => {

    const fileInputRef = useRef(undefined)
    const handleClick = (ref) => ref.current.click()
    const handleDelete = () => onChange(null)

    return (
        <div className={"w-full flex flex-col gap-[10px] hover:cursor-pointer group"}>
            <div className={"relative w-full h-[130px]"}>
                {
                    value && <FiX
                        size={"22px"}
                        className={"absolute z-10 top-[30px] right-[30px] stroke-white"}
                        onClick={handleDelete}
                    />
                }
                <div
                    className={cn(inputCV)}
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
                            <div className={'flex flex-row items-center gap-2'}>
                                <FiPlus size={'20px'} className={'text-main-blue'}/>
                                <h4 className={"text-main-blue text-base font-medium"}>
                                    {placeholder}
                                </h4>
                            </div>
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