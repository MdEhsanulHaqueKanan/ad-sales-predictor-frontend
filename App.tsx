// F:\...\scalable-ml-service_-ad-sales-predictor\App.tsx

import React, { useState } from 'react';
import { AdData } from './types';
// We no longer need the geminiService
// import { predictAdSales } from './services/geminiService'; 
import { Input } from './components/Input';
import { Select } from './components/Select';
import { Button } from './components/Button';
import { Illustration } from './components/Illustration';
import { DollarSign, BarChart2, MousePointerClick, Eye, Target, Users, Calendar, Laptop, Tag, MapPin, Search } from './components/Icons';

const App: React.FC = () => {
    const initialState: AdData = {
        Clicks: '',
        Impressions: '',
        Cost: '',
        Leads: '',
        Conversions: '',
        Ad_Date: '',
        Device: 'Desktop',
        Campaign_Name: 'Data Analytics Course', // Pre-fill with a valid value
        Location: 'hyderabad',             // Pre-fill with a valid value
        Keyword: 'data analytics course',     // Pre-fill with a valid value
    };

    const [formData, setFormData] = useState<AdData>(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);
        setError(null);

        // --- THIS IS THE UPDATED LOGIC ---
        try {
            // The API endpoint for our Vercel serverless function
            const API_ENDPOINT = 'https://scalable-ad-sales-predictor.onrender.com/predict';

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Send the raw form data directly
                body: JSON.stringify(formData) 
            });
            
            const predictionResult = await response.json();

            if (!response.ok) {
                // If the server returns an error, display it
                throw new Error(predictionResult.error || 'An unknown error occurred');
            }
            
            // Format and display the successful prediction
            const formattedResult = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(predictionResult.sale_amount_prediction);
            setResult(formattedResult);

        } catch (err: any) {
            setError(`Prediction failed: ${err.message}`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
        // --- END OF UPDATED LOGIC ---
    };

    return (
        // The rest of the JSX is unchanged
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4">
            <div className="animated-gradient absolute inset-0 -z-10"></div>
            
            <main className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Scalable ML Service
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-4">
                        Ad Sales Predictor
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto lg:mx-0">
                        Leverage the power of generative AI to forecast ad sales with high accuracy. Input your campaign metrics to receive an instant data-driven prediction and optimize your marketing strategy.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                         <Illustration />
                    </div>
                </div>

                <div className="w-full max-w-lg mx-auto">
                    <form
                        id="prediction-form"
                        onSubmit={handleSubmit}
                        className="bg-slate-900/40 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-2xl shadow-black/20"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input id="clicks" name="Clicks" type="number" placeholder="e.g., 1500" value={formData.Clicks} onChange={handleChange} icon={<MousePointerClick />} />
                            <Input id="impressions" name="Impressions" type="number" placeholder="e.g., 100000" value={formData.Impressions} onChange={handleChange} icon={<Eye />} />
                            <Input id="cost" name="Cost" type="text" placeholder="$200" value={formData.Cost} onChange={handleChange} icon={<DollarSign />} />
                            <Input id="leads" name="Leads" type="number" placeholder="e.g., 80" value={formData.Leads} onChange={handleChange} icon={<Users />} />
                            <Input id="conversions" name="Conversions" type="number" placeholder="e.g., 50" value={formData.Conversions} onChange={handleChange} icon={<Target />} />
                            <Input id="ad_date" name="Ad_Date" type="date" value={formData.Ad_Date} onChange={handleChange} icon={<Calendar />} />
                            <Select id="device" name="Device" value={formData.Device} onChange={handleChange} options={['Desktop', 'Mobile', 'Tablet']} icon={<Laptop />} />
                            <Input id="campaign_name" name="Campaign_Name" type="text" placeholder="Summer Sale 2024" value={formData.Campaign_Name} onChange={handleChange} icon={<Tag />} />
                            <Input id="location" name="Location" type="text" placeholder="e.g., California" value={formData.Location} onChange={handleChange} icon={<MapPin />} />
                            <Input id="keyword" name="Keyword" type="text" placeholder="e.g., running shoes" value={formData.Keyword} onChange={handleChange} icon={<Search />} />
                        </div>
                        
                        <div className="mt-6">
                            <Button id="submit-button" isLoading={isLoading} />
                        </div>

                        {(result || error) && (
                            <div className="mt-6 text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700 transition-opacity duration-500 animate-fade-in">
                                {result && (
                                    <>
                                        <p className="text-sm text-cyan-400 font-medium">Predicted Sales Amount</p>
                                        <p id="result-text" className="text-3xl font-bold text-white">{result}</p>
                                    </>
                                )}
                                {error && (
                                     <p id="result-text" className="text-lg font-semibold text-red-400">{error}</p>
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default App;