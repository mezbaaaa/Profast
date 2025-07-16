import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown, RefreshCw } from 'lucide-react'

const Pricing = () => {
  const { register, handleSubmit, reset } = useForm()
  const [price, setPrice] = useState(null)

  const onSubmit = (data) => {
    const weight = parseFloat(data.weight)
    let calculated = 0

    if (data.parcelType && data.destination && weight > 0) {
      calculated = 50 + weight * 10
    }

    setPrice(`${calculated || 0} Tk`)
  }

  return (
    <div className='shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-3xl my-12 py-20 px-6 md:px-28'>
      <div className='max-w-3xl mx-auto space-y-4'>
        <h1 className='font-extrabold text-5xl text-[#03373D]'>Pricing Calculator</h1>
        <p className='text-[#606060]'>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business
          shipments — we deliver on time, every time.
        </p>
      </div>

      <hr className='border-gray-300 mt-6' />

      <p className='text-center my-8 text-2xl font-extrabold text-[#03373D]'>Calculate Your Cost</p>

      {/* Bottom Section */}
      <div className='grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto'>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 w-full'>
          {/* Parcel Type */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Parcel type</label>
            <div className='relative'>
              <select
                {...register('parcelType', { required: true })}
                className='w-full border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#CAEB66]'
              >
                <option value=''>Select Parcel type</option>
                <option value='document'>Document</option>
                <option value='box'>Box</option>
              </select>
              <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
            </div>
          </div>

          {/* Delivery Destination */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Delivery Destination</label>
            <div className='relative'>
              <select
                {...register('destination', { required: true })}
                className='w-full border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#CAEB66]'
              >
                <option value=''>Select Delivery Destination</option>
                <option value='inside'>Inside City</option>
                <option value='outside'>Outside City</option>
              </select>
              <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Weight (KG)</label>
            <input
              type='number'
              step='0.1'
              {...register('weight', { required: true })}
              placeholder='Contact'
              className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CAEB66]'
            />
          </div>

          {/* Buttons */}
          <div className='flex items-center gap-4 pt-2'>
            <button
              type='button'
              onClick={() => {
                reset()
                setPrice(null)
              }}
              className='flex cursor-pointer items-center justify-center px-5 py-2 border border-[#CAEB66] text-[#3a3a3a] rounded-md hover:bg-[#CAEB66]/20 transition'
            >
              <RefreshCw size={16} className='mr-1' />
              Reset
            </button>

            <button
              type='submit'
              className='bg-[#CAEB66] text-black font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-[#b7d95a] transition'
            >
              Calculate
            </button>
          </div>
        </form>

        {/* Price Display */}
        <div className='flex justify-center items-center w-full h-full'>
          {price && <h1 className='text-5xl font-bold text-black'>{price}</h1>}
        </div>
      </div>
    </div>
  )
}

export default Pricing
