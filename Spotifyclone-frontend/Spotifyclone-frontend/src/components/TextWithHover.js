import { Icon } from "@iconify/react/dist/iconify.js";

const TextWhithHover= ({iconName,displayText,active}) =>{
    return <div className="flex items-center justify-start" >
        <div className="px-5 py-2">
            <Icon 
               icon={iconName} 
               color={active ? "white" :"gray"}
               fontSize={25}
            />
        </div>
        <div
             className={`${
                active ? "text-white" : "text-gray-400"
             }text-5m font-semibold hover:text-white`}>
            {displayText}
        </div>
    </div>
    
};
export default TextWhithHover ;