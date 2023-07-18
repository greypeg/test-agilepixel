import { useState, useEffect } from 'react';

const useResponsivity = () => {
    const [isOnMobile, setIsOnMobile] = useState(true);
    useEffect(() => {
        /*Check the screen size on every render, prevent possible bugs by
        checking the screen size and setting the isOnMobile when necessary.
        */
        function handleResize() {
            if (window.innerWidth >= 800) {
                setIsOnMobile(false);
            }
            else { setIsOnMobile(true) }
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        //Cleanup the useEffect when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isOnMobile;
}
export default useResponsivity;