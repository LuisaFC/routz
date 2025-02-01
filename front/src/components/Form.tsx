import { useForm } from "react-hook-form"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IDestination } from "@/types/IDestination";

export default function Form() {

  const {register, handleSubmit} = useForm<IDestination>()


  return(
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col gap-2 w-96">
        <div>
          <Input
            placeholder="Name"
            {...register('name')}
          />
        </div>

        <div>
          <Input
            placeholder="City"
            {...register('city')}
          />
        </div>

        <div>
          <Input
            placeholder="State"
            {...register('state')}
          />
        </div>

        <div>
          <Input
            placeholder="Country"
            {...register('country')}
          />
        </div>

        <Button className="mt-4">Add</Button>
      </form>
    </div>
  )
}
