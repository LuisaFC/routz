import Form from '@/components/Form';
import { DialogTrigger, Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const destinations = [
	{
		name: 'New York City',
		state: 'New York',
		city: 'New York',
		country: 'United States',
		locale: {
			lat: '40.7128',
			long: '-74.0060',
		},
	},
	{
		name: 'Paris',
		state: 'Île-de-France',
		city: 'Paris',
		country: 'France',
		locale: {
			lat: '48.8566',
			long: '2.3522',
		},
	},
	{
		name: 'Tokyo',
		state: 'Kantō',
		city: 'Tokyo',
		country: 'Japan',
		locale: {
			lat: '35.6895',
			long: '139.6917',
		},
	},
	{
		name: 'Rio de Janeiro',
		state: 'Rio de Janeiro',
		city: 'Rio de Janeiro',
		country: 'Brazil',
		locale: {
			lat: '-22.9068',
			long: '-43.1729',
		},
	},
	{
		name: 'Sydney',
		state: 'New South Wales',
		city: 'Sydney',
		country: 'Australia',
		locale: {
			lat: '-33.8688',
			long: '151.2093',
		},
	},
];

export default function DestinationsList() {
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
