import { ArrowUpIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop} className={`fixed bottom-10 right-10 bg-primary text-white p-2 rounded-full transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}
        >
            <ArrowUpIcon className="h-6 w-6" />
        </button>
    );
};

export default ScrollToTopButton;
