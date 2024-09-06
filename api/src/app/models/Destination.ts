import { model, Schema } from 'mongoose'

export const Destination = model('Destination', new Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  locale: {
    required: true,
    type: {
      lat: {
        type: String,
        required: true
      },
      long: {
        type: String,
        required: true
      }
    }
  },
}))
