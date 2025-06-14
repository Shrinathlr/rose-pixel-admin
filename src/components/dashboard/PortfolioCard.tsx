
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const images = [
  "photo-1649972904349-6e44c42644a7",
  "photo-1581091226825-a6a2a5aee158",
  "photo-1519389950473-47ba0277781c",
  "photo-1500673922987-e212871fec22",
];

const PortfolioCard = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>My Portfolio</CardTitle>
          <CardDescription>Your sample work for clients to see.</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Photo
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img} className="overflow-hidden rounded-lg">
              <img
                src={`https://images.unsplash.com/${img}?&w=400&h=400&q=80&fit=crop`}
                alt="Portfolio image"
                className="h-full w-full object-cover aspect-square transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
