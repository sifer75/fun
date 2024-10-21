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
import { CreateMission } from "@/lib/task.request";
import { DateProps } from "@/lib/cards.utils";

const DateTask = React.forwardRef<HTMLButtonElement>(() => {
  const queryClient = useQueryClient();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const startTime = "00h00";
  const endTime = "00h00";

  const mutation = useMutation({
    mutationFn: (data: DateProps) => CreateMission(data),
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
        from: date.from.toISOString(),
        to: date.to.toISOString(),
        startTime,
        endTime,
      };
      mutation.mutate(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, endTime, startTime]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"ghost"}
          className={cn(
            "w-2/3 border rounded-lg justify-start text-left font-normal p-2 z-50",
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
});

export default DateTask;
