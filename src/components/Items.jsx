import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function items({text, id, isComplete, deleteTodo, toggle}){
    return(
        <>
        <div className='flex 
    items-center my-2 gap-2'>
      <div onClick={()=>toggle(id)} className='flex flex-1 items-center 
      cursor-pointer'>
            
            {isComplete ? <CheckCircleIcon  className="w-7" style={{color:"orange"}}/> :
             <RadioButtonUncheckedIcon />}

            <p className='text-slate-700 ml-4 text-[17px]'> {text}</p>
      </div>

        <DeleteOutlineOutlinedIcon onClick={()=>{deleteTodo(id)}
    } className='w-3.5 cursor-pointer'/>

    </div>
        </>
    )
}