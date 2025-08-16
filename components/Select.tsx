
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    name: string;
    options: string[];
    icon: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ id, name, options, icon, ...props }) => {
    const label = name.replace(/_/g, ' ');
    return (
        <div className="relative">
            <label htmlFor={id} className="block text-xs font-medium text-slate-400 mb-1">{label}</label>
             <div className="absolute inset-y-0 left-0 top-5 flex items-center pl-3 pointer-events-none text-slate-500">
                {icon}
            </div>
            <select
                id={id}
                name={name}
                required
                className="w-full pl-10 pr-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-sm appearance-none"
                {...props}
            >
                {options.map(option => (
                    <option key={option} value={option} className="bg-slate-800 text-white">{option}</option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 top-5 flex items-center px-2 pointer-events-none text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </div>
    );
};
