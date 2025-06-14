
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { commissionRates as initialRates } from '@/lib/mock-data';
import { useToast } from '@/components/ui/use-toast';

const CommissionSettings: React.FC = () => {
    const [rates, setRates] = useState(initialRates);
    const { toast } = useToast();

    const handleRateChange = (id: string, value: string) => {
        const numericValue = Number(value);
        if (numericValue >= 0 && numericValue <= 100) {
            setRates(rates.map(rate => rate.id === id ? { ...rate, rate: numericValue } : rate));
        }
    };

    const handleSave = () => {
        // Here you would typically make an API call to save the new rates
        console.log('Saving rates:', rates);
        toast({
            title: "Commissions Updated",
            description: "New commission rates have been saved.",
        });
    };

    return (
        <Card className="soft-glow-shadow">
            <CardHeader>
                <CardTitle>Platform Commission Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {rates.map(rate => (
                    <div key={rate.id} className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={rate.id} className="text-right">{rate.category}</Label>
                        <div className="col-span-2 flex items-center gap-2">
                            <Input
                                id={rate.id}
                                type="number"
                                value={rate.rate}
                                onChange={(e) => handleRateChange(rate.id, e.target.value)}
                                className="w-24"
                            />
                            <span className="text-muted-foreground">%</span>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                 <Button onClick={handleSave} className="ml-auto">Save Changes</Button>
            </CardFooter>
        </Card>
    );
};

export default CommissionSettings;
