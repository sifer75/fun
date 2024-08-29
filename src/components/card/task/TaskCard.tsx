import { Plus, PlusCircle, Suggestion } from "iconoir-react";
import imgTest from "../../../assets/Frame88.png";
import { TaskProps } from "@/lib/cards.utils";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { format } from "date-fns";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { TaskProps } from "@/lib/cards.utils";
// import { Ellipsis } from "lucide-react";
// import DeleteTask from "./DeleteTask";
// import EditTask from "./EditTask";
// import DateTask from "./DateTask";

// function TaskCard({ title, description, id, color, from, to }: TaskProps) {
//   const fromDate = from;
//   const toDate = to;
//   const dateFrom = from ? new Date(fromDate as string) : null;
//   const dateTo = to ? new Date(toDate as string) : null;
//   const formattedDateFrom = dateFrom
//     ? format(dateFrom, "dd/MM")
//     : format(Date.now(), "dd/MM");
//   const formattedDateTo = dateTo ? format(dateTo, "dd/MM") : "N/A";
//   if (!id) return <div>id non trouvé</div>;

//   return (
//     <Card className="w-40 md:w-48 lg:w-72 rounded-2xl mb-8">
//       <CardHeader
//         className={`pr-3 rounded-t-lg flex ${color} justify-start pb-10 pt-5 sm:py-5`}
//       >
//         <CardTitle className="flex flex-col w-full">
//           <div className="flex items-center justify-center">
//             <p className="truncate w-24 sm:w-32 md:w-40 lg:w-64 h-7">{title}</p>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost">
//                   <Ellipsis />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuItem asChild>
//                   <EditTask
//                     titleCard={title}
//                     descriptionCard={description}
//                     id={id}
//                   ></EditTask>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <DateTask id={id} />
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem asChild>
//                   <DeleteTask title={title} id={id} />
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//           <p className="text-xs">
//             de {formattedDateFrom} jusqu'à {formattedDateTo}
//           </p>
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="pt-5">
//         <CardDescription className="flex flex-col overflow-y-scroll">
//           {description}
//         </CardDescription>
//       </CardContent>
//     </Card>
//   );
// }

// export default TaskCard;

function TaskCard({ title, description, id }: TaskProps) {
  return (
    <div
      className="border border-[#D9D9D9] rounded-xl w-80 bg-white p-3 flex flex-col gap-5"
      data-swapy-item={id}
    >
      <div className="w-full flex flex-row gap-4">
        <div className="w-full flex flex-wrap gap-1">
          <span className="text-[#D12525] text-sm bg-[#D12525]/20 w-fit px-3 rounded inline-flex items-center">
            Development
          </span>
          <span className="text-[#9052FC] text-sm bg-[#9052FC]/20 w-fit px-3 rounded inline-flex items-center">
            Product
          </span>
          <span className="text-[#E3E700] text-sm bg-[#E3E700]/20 w-fit px-3 rounded inline-flex items-center">
            Marketing
          </span>
          <span className="text-[#E3E700] text-sm bg-[#E3E700]/20 w-fit px-3 rounded inline-flex items-center">
            Marketing
          </span>
        </div>
        <div>
          <Plus className="w-5 h-5 bg-[#D9D9D9] rounded-md" />
        </div>
      </div>
      <div className="w-full h-32">
        <img src={imgTest} alt="imgTask" className="w-full h-32"></img>
      </div>
      <div className="flex flex-col gap-2.5">
        <h2 className="leading-5 text-xl font-bold text-[#000000]">{title}</h2>
        <p className="text-sm text-[#71717A]">{description}</p>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <PlusCircle className="h-9 w-9" />
        <div className="flex flex-row items-center gap-1.5">
          <Suggestion className="w-4 h-4" />
          <span className="text-sm leading-3">2</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
