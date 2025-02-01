import Form from '@/components/Form';
import { DialogTrigger, Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { listUsers } from '@/services/listDestination';
import { IDestination } from '@/types/IDestination';
import { useEffect, useState } from 'react';

export default function DestinationsList() {
  const [destinations, setDestinations] = useState<IDestination[]>([]);

  useEffect(() => {
    async function fetchDestinations() {
      const destinations = await listUsers();
      setDestinations(destinations);
    }
    fetchDestinations();
  }, [])

	return (
		<div className="space-y-4 m-16">

      <Dialog>
        <DialogTrigger className={cn('border p-2 rounded-md bg-sky-100 text-black')}>Add new Destiny</DialogTrigger>
        <DialogContent className={cn('flex flex-col items-center justify-center')}>
          <DialogTitle>New Destiny</DialogTitle>
          <DialogDescription>
            Add your destiny informations
          </DialogDescription>
          <Form />
        </DialogContent>
      </Dialog>

			{destinations.map((destination) => (
				<div
					className={cn(
						'border p-4 rounded-md flex items-center justify-between',
					)}
				>
					<span className='text-center'>{destination.name}</span>
					<span className={cn('text-center')}>{destination.city}</span>
					<span className='text-center'>{destination.state}</span>
					<span className='text-center'>{destination.country}</span>
				</div>
			))}
		</div>
	);
}
