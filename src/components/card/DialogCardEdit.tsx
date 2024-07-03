import { Button } from "@/components/ui/button";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { PencilLine } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogCardProps } from "@/lib/dialogCard.utils";

function DialogCardEdit({
  dialogTitle,
  dialogDescription,
  labelName,
  labelDescription,
}: DialogCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-between w-full px-2 py-1.5 rounded-sm h-8"
        >
          <PencilLine className="w-4 h-4 mr-2" />
          <span>Éditer</span>
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4 mb-2">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              defaultValue={labelName}
              className="col-span-3 text-gray-500"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea placeholder={labelDescription} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Ajouter</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCardEdit;
