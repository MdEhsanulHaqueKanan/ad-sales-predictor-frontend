
import React from 'react';

export const Illustration: React.FC = () => (
    <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgb(34, 211, 238)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(13, 71, 161)', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(29, 78, 216)', stopOpacity: 1 }} />
            </linearGradient>
             <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <g filter="url(#glow)" opacity="0.6">
            <circle cx="100" cy="100" r="20" fill="url(#grad1)" />

            <path d="M 100 80 L 50 50" stroke="url(#grad2)" strokeWidth="2" fill="none"/>
            <path d="M 100 80 L 150 50" stroke="url(#grad2)" strokeWidth="2" fill="none"/>

            <path d="M 100 120 L 50 150" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
            <path d="M 100 120 L 150 150" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
            
            <circle cx="50" cy="50" r="10" fill="url(#grad2)" />
            <circle cx="150" cy="50" r="10" fill="url(#grad2)" />
            <circle cx="50" cy="150" r="10" fill="url(#grad1)" />
            <circle cx="150" cy="150" r="10" fill="url(#grad1)" />

            <path d="M 50 50 L 50 150" stroke="#4a5568" strokeWidth="1.5" strokeDasharray="4" fill="none"/>
            <path d="M 150 50 L 150 150" stroke="#4a5568" strokeWidth="1.5" strokeDasharray="4" fill="none"/>
            <path d="M 50 50 L 150 50" stroke="#4a5568" strokeWidth="1.5" strokeDasharray="4" fill="none"/>
            <path d="M 50 150 L 150 150" stroke="#4a5568" strokeWidth="1.5" strokeDasharray="4" fill="none"/>

             <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="5,5" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
             </circle>
             <circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad2)" strokeWidth="1" strokeDasharray="3,3" opacity="0.7">
                 <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="15s" repeatCount="indefinite" />
             </circle>
        </g>
    </svg>
);
