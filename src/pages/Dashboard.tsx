import ProfileCard from "@/components/dashboard/ProfileCard";
import AvailabilityCard from "@/components/dashboard/AvailabilityCard";
import EarningsCard from "@/components/dashboard/EarningsCard";
import JobRequestCard from "@/components/dashboard/JobRequestCard";
import PortfolioCard from "@/components/dashboard/PortfolioCard";
import ReviewsCard from "@/components/dashboard/ReviewsCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate("/auth");
      }
    });
  }, [navigate]);

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
