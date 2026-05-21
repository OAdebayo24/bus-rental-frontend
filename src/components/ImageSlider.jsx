import { useEffect, useState } from "react"

const ImageSlider = ({slides}) => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIdx === 0
    const newIdx = isFirstSlide ? slides.length - 1 : currentIdx -1
    setCurrentIdx(newIdx)
  }

  const goToNext = () => {
    const isLastIdx = currentIdx === slides.length -1
    const newIdx = isLastIdx ? 0 : currentIdx +1
    setCurrentIdx(newIdx)
  }

  const goToSlide = (slideIdx) => {
    setCurrentIdx(slideIdx)
  }

  useEffect (() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [currentIdx])


  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
        <img className="w-full h-full object-cover object-center transition-opacity duration-500" src={slides[currentIdx].url} />
        <section className="">
          <div onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer z-10
                flex items-center justify-center w-10 h-10 rounded-full
                bg-white/20 backdrop-blur-sm border border-white/30
                text-white text-xl font-bold
                hover:bg-white/40 transition-all duration-200 select-none">❰</div>
          <div onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer z-10
                flex items-center justify-center w-10 h-10 rounded-full
                bg-white/20 backdrop-blur-sm border border-white/30
                text-white text-xl font-bold
                hover:bg-white/40 transition-all duration-200 select-none">❱</div>
        </section>
        
        <section className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, slideIdx) => (
            <div
              key={slideIdx}
              onClick={() => goToSlide(slideIdx)}
              className="cursor-pointer w-2 h-2 rounded-full transition-all duration-300"
            >
              ●
            </div>
          ))}
        </section>
    </div>
    </>
  )

}

export default ImageSlider