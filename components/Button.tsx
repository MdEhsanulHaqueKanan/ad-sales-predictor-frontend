
import React from 'react';

interface ButtonProps {
    id: string;
    isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = ({ id, isLoading }) => {
    return (
        <button
            id={id}
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 transition-all duration-300 ease-in-out disabled:bg-slate-600 disabled:cursor-not-allowed group"
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Predicting...
                </>
            ) : (
               <>
                <span className="group-hover:scale-105 transition-transform duration-300">Predict Sales</span>
                <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
               </>
            )}
        </button>
    );
};
