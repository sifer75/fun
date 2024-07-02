import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

interface DialogCardDeleteProps {
  dialogTitle: string;
  label: string;
}

const DialogCardDelete = React.forwardRef<HTMLButtonElement, DialogCardDeleteProps>(({ dialogTitle, label }, ref) => {
  const { toast } = useToast();

  const handleDelete = () => {
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={ref}
          variant="ghost"
          className="flex items-center justify-start w-full px-2 py-1.5 rounded-sm h-8"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          <span>Supprimer</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">{dialogTitle}</DialogTitle>
          <DialogDescription>Cette action est irréversible !</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              {label}
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={handleDelete}>
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
})

export default DialogCardDelete;
