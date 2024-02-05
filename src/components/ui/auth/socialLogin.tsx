import { FcGoogle } from "react-icons/fc";

import { Button } from "../button";
import { FaGithub } from "react-icons/fa";

export const SocialLogin = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Button className="w-full py-4 " variant={"secondary"}>
        <FcGoogle className=" text-2xl" />
      </Button>
      <Button  variant={"default"} className="w-full">
        <FaGithub className="text-2xl" />
      </Button>
    </div>
  );
};
