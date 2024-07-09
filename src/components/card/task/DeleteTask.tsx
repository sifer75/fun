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
import React, { useState } from "react";
import { DialogCardDeleteProps } from "@/lib/dialogCard.utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/lib/task.request";

const DeleteTask = React.forwardRef<HTMLButtonElement, DialogCardDeleteProps>(
  ({ dialogTitle, label, id }, ref) => {
    const { toast } = useToast();

    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const mutation = useMutation({
      mutationFn: (id: number) => deleteTask(id),
      onError: (error) => {
        console.log(error);
      },
      onSuccess: async () => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
        setIsDialogOpen(false);
        queryClient.invalidateQueries({ queryKey: ["task"] });
      },
    });

    const handleDelete = () => {
      mutation.mutate(id);
      setIsDialogOpen(false);
    };

    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            ref={ref}
            variant="ghost"
            className="flex items-center justify-start px-2 rounded-sm h-8 w-fit"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-3xl">{dialogTitle}</DialogTitle>
            <DialogDescription>
              Cette action est irréversible !
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
                {label}
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="destructive" onClick={() => handleDelete()}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
);
export default DeleteTask;
