import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskDate } from "@/lib/task.request";

interface taskDateProps {
  id: number;
}

const DateTask = React.forwardRef<HTMLButtonElement, taskDateProps>(
  (props, ref) => {
    const queryClient = useQueryClient();
    const { id } = props;

    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(),
    });

    const mutation = useMutation({
      mutationFn: (data: { id: number; from: string; to: string }) =>
        updateTaskDate(data),
      onError: (error) => {
        console.log(error);
      },
      onSuccess: async () => {
        queryClient.invalidateQueries({ queryKey: ["task"] });
      },
    });

    useEffect(() => {
      if (date?.from && date?.to) {
        const data = {
          id: id,
          from: date.from.toISOString(),
          to: date.to.toISOString(),
        };
        mutation.mutate(data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date, id]);

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            id="date"
            variant={"ghost"}
            className={cn(
              "w-full justify-start text-left font-normal p-2 z-50",
              !date && "text-muted-foreground"
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    );
  }
);

export default DateTask;
