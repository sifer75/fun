import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { WorkspaceProps } from "@/lib/cards.utils";
import { createWorkspace } from "@/lib/workspace.request";

function CreateWorkspace({ titleTypeCard }: { titleTypeCard: string }) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (data: WorkspaceProps) => createWorkspace(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["workspace"],
      });
      setIsDialogOpen(false);
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
        <Button>
          <span>Création du {titleTypeCard}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            Créer un {titleTypeCard}
          </DialogTitle>
          <DialogDescription>
            Ajouter un nouveau {titleTypeCard}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4 mb-2">
            <Label htmlFor="name" className="text-right">
              Titre
            </Label>
            <Input
              id="name"
              placeholder={`Nom du ${titleTypeCard}`}
              className="col-span-3 text-gray-500"
              onChange={(e) => handleChangeTitle(e)}
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              placeholder={`Décrire le ${titleTypeCard}`}
              className="col-span-3"
              onChange={(e) => handleChangeDescription(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({ title, description });
            }}
          >
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateWorkspace;
