import { Button } from "@/components/ui/button";
import google from "../../src/assets/google.svg";
import github from "../../src/assets/github.svg";
import { useNavigate } from "react-router-dom";
import catchana from "../assets/catchana.svg";

function Connection() {
  const navigate = useNavigate();
  const githubRedirect = `http://localhost:3333/github/redirect`;

  return (
    <div className="w-screen h-screen flex">
      <img src={catchana} className="w-1/2 h-full object-cover"></img>
      <div className="w-1/2 h-full bg-white flex items-center justify-center flex-col">
        <div className="h-1/3 w-1/2 bg-white flex items-center flex-col justify-around">
          <div className="flex-col">
            <h1 className="text-3xl w-full flex justify-center ">
              Créer un compte
            </h1>
            <p className="text-sm text-gray-500">
              Choisissez votre méthode d’authentification
            </p>
          </div>
          <Button
            onClick={() => navigate("/workspace")}
            className="w-full bg-white border text-back text-base border-gray-300 rounded-md"
          >
            <img className="h-6 w-6 mr-2" src={google} alt="google"></img> Gmail
          </Button>
          <div className="flex justify-around w-full">
            <div className="flex items-center w-full">
              <div className="flex-grow h-[1px] bg-gray-300"></div>
              <span className="px-2 text-lg text-gray-500">
                ou continuez avec
              </span>
              <div className="flex-grow h-[1px] bg-gray-300"></div>
            </div>
          </div>
          <Button
            onClick={() => (window.location.href = githubRedirect)}
            className="w-full bg-white border text-back text-base border-gray-300 rounded-md"
          >
            <img className="h-6 w-6 mr-2" src={github} alt="google"></img> Git
            Hub
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Connection;
