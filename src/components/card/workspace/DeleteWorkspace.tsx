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
import { deleteWorkspace } from "@/lib/workspace.request";

const DeleteWorkspace = React.forwardRef<
  HTMLButtonElement,
  DialogCardDeleteProps
>(({ dialogTitle, label, id }, ref) => {
  const { toast } = useToast();

  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (id: number) => deleteWorkspace(id),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      toast({
        title: "Scheduled: Catch up ",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
      setIsDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          ref={ref}
          variant="ghost"
          className="flex items-center justify-start px-2 py-1.5 rounded-sm h-8 w-full"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Supprimer
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
          <Button
            variant="destructive"
            onClick={() => {
              mutation.mutate(id);
            }}
          >
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export default DeleteWorkspace;
