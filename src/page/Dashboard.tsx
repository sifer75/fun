import { Planet, Plus } from "iconoir-react";

function Dashboard() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-8 bg-red-100">
        <div className="flex flex-col gap-2 bg-blue-100">
          <h1 className="font-medium text-2xl">Dashboard</h1>
          <p className="text-[#71717A] text-sm">
            Fuga nam voluptatibus ullam excepturi consectetur iusto blanditiis
            in. Deleniti dolore pariatur excepturi ullam facilis. Atque
            laudantium laudantium inventore assumenda natus. Voluptas atque
            sequi officiis commodi esse illo animi. Reiciendis esse ex error
            temporibus cupiditate quia quam.
          </p>
        </div>
        <div className="w-full h-full flex flex-row gap-7">
          <div className="bg-gray-100 w-2/3 h-full"></div>
          <div className="h-full flex flex-col gap-4">
            <div className="w-max flex flex-col justify-between items-end gap-4">
              <button className="bg-[#0D0D0D] flex flex-row items-center gap-2.5 w-fit px-4 py-2 rounded-lg">
                <Plus className="w-4 h-4 text-white" />
                <p className="text-white text-sm leading-8">
                  Ajouter une tâche
                </p>
              </button>
              <div className="w-full h-fit border-2 border-selectionButton rounded-xl flex flex-col gap-2.5 p-4">
                <h2 className="font-bold">Ajouter la dependance NPM</h2>
                <div>
                  <p>Ajouter la dependance NPM Framer Motion pour</p>
                  <p>pouvoir faire des animations stylés de fou malade</p>
                </div>
                <p className="text-sm text-textGray">
                  Creé par Fabien le 25/05/2024 à 08h00
                </p>
              </div>
              <div className="w-full h-fit border-2 border-selectionButton rounded-xl flex flex-col gap-2.5 p-4">
                <h2 className="font-bold">Ajouter la dependance NPM</h2>
                <div>
                  <p>Ajouter la dependance NPM Framer Motion pour</p>
                  <p>pouvoir faire des animations stylés de fou malade</p>
                </div>
                <p className="text-sm text-textGray">
                  Creé par Fabien le 25/05/2024 à 08h00
                </p>
              </div>
              <div className="w-fit h-fit border-2 border-selectionButton rounded-xl flex flex-col gap-2.5 p-4">
                <h2 className="font-bold">Ajouter la dependance NPM</h2>
                <div>
                  <p>Ajouter la dependance NPM Framer Motion pour</p>
                  <p>pouvoir faire des animations stylés de fou malade</p>
                </div>
                <p className="text-sm text-textGray">
                  Creé par Fabien le 25/05/2024 à 08h00
                </p>
              </div>
            </div>
            <div className="bg-orange-100 h-full w-full grid grid-cols-2 grid-row-2 gap-2.5">
              <div className="bg-[#C0A7D9] rounded-xl p-4 gap-4 flex flex-col justify-between">
                <p className="font-bold text-xl text-white leading-8">
                  Workspace 1
                </p>
                <Planet />
                <div className="text-sm text-white">
                  <p>10 tâches</p>
                  <p>3 en cours</p>
                </div>
              </div>
              <div className="bg-[#F2F1DF] rounded-xl p-4 gap-4 flex flex-col justify-between">
                <p className="font-bold text-xl leading-8">Workspace 2</p>
                <Planet />
                <div className="text-sm">
                  <p>10 tâches</p>
                  <p>3 en cours</p>
                </div>
              </div>
              <div className="bg-[#73726E] rounded-xl p-4 gap-4 flex flex-col justify-between">
                <p className="font-bold text-xl text-white leading-8">
                  Workspace 3
                </p>
                <Planet />
                <div className="text-sm text-white">
                  <p>10 tâches</p>
                  <p>3 en cours</p>
                </div>
              </div>
              <div className="bg-[#0D0D0D] rounded-xl p-4 gap-4 flex flex-col justify-center items-center">
                <Plus className="w-6 h-6 text-white" />
                <p className="font-bold text-sm leading-4 text-center text-white w-full">
                  Nouveau Workspace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
