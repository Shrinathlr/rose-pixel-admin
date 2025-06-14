
import ProfileCard from "@/components/dashboard/ProfileCard";
import AvailabilityCard from "@/components/dashboard/AvailabilityCard";
import EarningsCard from "@/components/dashboard/EarningsCard";
import JobRequestCard from "@/components/dashboard/JobRequestCard";
import PortfolioCard from "@/components/dashboard/PortfolioCard";
import ReviewsCard from "@/components/dashboard/ReviewsCard";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <ProfileCard />
          <AvailabilityCard />
          <EarningsCard />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <JobRequestCard />
          <PortfolioCard />
          <ReviewsCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
