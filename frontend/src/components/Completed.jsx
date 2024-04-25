import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Completed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
          <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="font-bold text-xl text-center">
              Transfer Successful
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center pb-5">
                <div className="bg-green-600 rounded-full h-12 w-12 text-white flex justify-center items-center">
                  <div className="mt-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-9 h-9 pb-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <Button
                onClick={async () => {
                  navigate("/dashboard");
                }}
                label={"Return To Dashboard"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
