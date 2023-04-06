import Loader from './Loader'
import type { MouseEventHandler } from 'react'

type Props = {
  addNewCard: MouseEventHandler<HTMLButtonElement>
  loading: boolean
}

const AddButton = ({ addNewCard, loading }: Props) => {
  return (
    <button
      disabled={loading}
      onClick={addNewCard}
      className='submit-btn h-12 w-full mt-6 text-slate-50 p-2 bg-sky-500/100 rounded-md'
    >
      {loading ? <Loader /> : 'Add new Yu-Gi-Oh card'}
    </button>
  )
}

export default AddButton

