import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Trash2Icon } from "lucide-react";

const JobsCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
  const { user } = useUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job.title}

          {isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
            {job.company && <img src={job.company.logo_url} className="h-6" />}
            <div>
                <MapPinIcon size={15} /> {job.location}
            </div>
        </div>
        <hr />
        {job.description}
      </CardContent>
    </Card>
  );
};

export default JobsCard;
