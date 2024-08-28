"use client";

import { Button } from "@/components/ui/button";
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
import React, { useState } from "react";
import { updateKanban } from "@/lib/kanban.request";

const EditKanban = React.forwardRef<HTMLButtonElement, DialogCardProps>(
  (props, ref) => {
    const { titleCard, id } = props;
    const queryClient = useQueryClient();

    const [title, setTitle] = useState<string>(titleCard);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const mutation = useMutation({
      mutationFn: (data: { title: string; id: number }) =>
        updateKanban({ id, title: data.title }),
      onError: (error) => {
        console.log(error);
      },
      onSuccess: async () => {
        setIsDialogOpen(false);
        queryClient.invalidateQueries({ queryKey: ["kanban"] });
      },
    });

    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            ref={ref}
            variant="ghost"
            className="flex items-center justify-start  px-2 py-1.5 rounded-sm h-8 w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <PencilLine className="w-4 h-4 mr-2" />
            Éditer
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              Modifier le nom du Kanban
            </DialogTitle>
            <DialogDescription>Modifier le nom du Kanban</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-start gap-4 mb-2 py-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              defaultValue={titleCard}
              placeholder={"Nom du projet"}
              className="col-span-3 text-gray-500"
              onChange={(e) => setTitle(e.target.value)}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={(event) => {
                event.stopPropagation();
                mutation.mutate({
                  id: id,
                  title: title,
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
);

export default EditKanban;
