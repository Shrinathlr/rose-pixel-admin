
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  { name: 'Client A', comment: 'Absolutely stunning photos, highly recommend!', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', rating: 5 },
  { name: 'Client B', comment: 'Very professional and delivered on time.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', rating: 5 },
];

const ReviewsCard = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: '500ms' }}>
      <CardHeader>
        <CardTitle>Client Reviews</CardTitle>
        <CardDescription>What your clients are saying.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviews.map((review) => (
          <div key={review.name} className="flex gap-4">
            <Avatar>
              <AvatarImage src={review.avatar} />
              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.name}</p>
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ReviewsCard;
