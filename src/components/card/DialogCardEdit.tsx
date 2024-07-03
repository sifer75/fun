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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateWorkspace } from "@/lib/workspace.request";
import { useState } from "react";

function DialogCardEdit({
  dialogTitle,
  dialogDescription,
  labelName,
  labelDescription,
  id,
  onClose,
}: DialogCardProps) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>(labelName);
  const [description, setDescription] = useState<string>(labelDescription);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (data: {
      title: string;
      description: string;
      id: number | undefined;
    }) =>
      updateWorkspace({ id, title: data.title, description: data.description }),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      setIsDialogOpen(false);
      onClose();
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
              placeholder={"Nom du projet"}
              className="col-span-3 text-gray-500"
              onChange={(e) => handleChangeTitle(e)}
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              defaultValue={labelDescription}
              placeholder={"Description du projet"}
              className="col-span-3"
              onChange={(e) => {
                handleChangeDescription(e);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({
                id: id,
                title: title,
                description: description,
              });
            }}
          >
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCardEdit;
