import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const AvatarDropdown: React.FC<{ username: string,gender:string, onLogout: () => void }> = ({gender, username, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const route = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handleLogout = () => {
        onLogout();
        setIsOpen(false);
        route.push("/")
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 text-white cursor-pointer focus:outline-none">
                <div className="rounded-full h-[43px] w-[43px] bg-white p-1 flex items-center justify-center"><Image src={`/assets/images/${gender}.png`} height={50} width={50} alt="pria" /></div>

            </button>
            {isOpen && (
               <div ref={dropdownRef} className="absolute right-0 px-3 py-3 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-md">
               <button style={{ width: `${username.length * 10}px` }} onClick={handleLogout} className="block text-right px-1 py-2 text-gray-800 hover:bg-gray-100">{username}</button>
               <hr className="my-1 border-gray-200" />
               <button onClick={handleLogout} className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
           </div>
           
            )}
        </div>
    );
};

export default AvatarDropdown