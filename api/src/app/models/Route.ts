import { model, Schema } from 'mongoose'

export const Route = model('Route', new Schema({
  name: {
    type: String,
    required: true
  },
  destinations: {
    type: [{
      destination: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Destination'
      },
    }],
  }
}));
