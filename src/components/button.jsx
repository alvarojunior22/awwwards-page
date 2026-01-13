

export default function Button({title, id, leftIcon, righIcon, containerClass }) {
  return (
    <button id={id} className={`group relative z-10 rounded-full w-fit cursor-pointer overflow-hidden bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>
          {title}
        </div>
      </span>
      {righIcon}
    </button>
  )
}
