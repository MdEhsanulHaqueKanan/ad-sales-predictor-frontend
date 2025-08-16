
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    icon: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ id, name, icon, ...props }) => {
    const label = name.replace(/_/g, ' ');
    return (
        <div className="relative">
            <label htmlFor={id} className="block text-xs font-medium text-slate-400 mb-1">{label}</label>
            <div className="absolute inset-y-0 left-0 top-5 flex items-center pl-3 pointer-events-none text-slate-500">
                {icon}
            </div>
            <input
                id={id}
                name={name}
                required
                className="w-full pl-10 pr-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-sm"
                {...props}
            />
        </div>
    );
};
