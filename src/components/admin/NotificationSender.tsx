
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const NotificationSender: React.FC = () => {
    const { toast } = useToast();

    const handleSend = () => {
        // Here you would typically make an API call to send the notification
        toast({
            title: "Notification Sent",
            description: "Your broadcast has been successfully sent.",
        });
    }

    return (
        <Card className="soft-glow-shadow">
            <CardHeader>
                <CardTitle>Send a Broadcast</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="audience">Audience</Label>
                    <Select>
                        <SelectTrigger id="audience">
                            <SelectValue placeholder="Select an audience" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Users</SelectItem>
                            <SelectItem value="photographers">All Photographers</SelectItem>
                            <SelectItem value="clients">All Clients</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here." rows={6} />
                </div>
            </CardContent>
            <CardFooter>
                 <Button onClick={handleSend} className="ml-auto flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Notification
                 </Button>
            </CardFooter>
        </Card>
    );
};

export default NotificationSender;
