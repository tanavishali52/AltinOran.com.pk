import { useEffect, useState } from 'react'

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [arabicText, setArabicText] = useState('')
  const [urduText, setUrduText] = useState('')
  const [showUrdu, setShowUrdu] = useState(false)

  const fullArabicText = 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ'
  const fullUrduText = 'اللہ کے نام سے شروع جو نہایت مہربان، رحم والا ہے'

  useEffect(() => {
    // Lock body scroll when modal is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    }

    // Typing animation for Arabic text (faster speed)
    let arabicIndex = 0
    const arabicTimer = setInterval(() => {
      if (arabicIndex < fullArabicText.length) {
        setArabicText(fullArabicText.substring(0, arabicIndex + 1))
        arabicIndex++
      } else {
        clearInterval(arabicTimer)
        // Start Urdu typing after Arabic is complete (small delay)
        setTimeout(() => {
          setShowUrdu(true)
          let urduIndex = 0
          const urduTimer = setInterval(() => {
            if (urduIndex < fullUrduText.length) {
              setUrduText(fullUrduText.substring(0, urduIndex + 1))
              urduIndex++
            } else {
              clearInterval(urduTimer)
              // Close modal after both texts are typed (wait 1 second after Urdu completes)
              setTimeout(() => {
                setIsVisible(false)
                document.body.style.overflow = ''
              }, 1000)
            }
          }, 30) // Very fast typing speed for Urdu (30ms per character)
        }, 200) // Short delay before starting Urdu
      }
    }, 40) // Very fast typing speed for Arabic (40ms per character)

    return () => {
      clearInterval(arabicTimer)
      document.body.style.overflow = ''
    }
  }, [isVisible, fullArabicText, fullUrduText])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center animate-fade-in">
      {/* Background with Construction Theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/client-img/WC-BAnner-2-scaled.jpg')`
        }}
      />
      
      {/* Content Container */}
      <div className="relative max-w-4xl w-full px-4 md:px-8 py-12 md:py-16 text-center animate-scale-in">
        {/* Logo */}
        <div className="mb-8 md:mb-10 flex justify-center">
          <img 
            src="/logo_design_final-removebg-preview.png" 
            alt="ALTIN ORAN Logo" 
            className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Arabic Text with Typing Effect */}
        <div className="mb-8 md:mb-10 min-h-[140px] md:min-h-[200px] flex flex-col items-center justify-center bg-gradient-to-r from-transparent via-white/5 to-transparent py-8 rounded-lg">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-0 md:mb-1" 
            dir="rtl" 
            style={{ 
              fontFamily: 'Arial, sans-serif', 
              lineHeight: '2',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            {arabicText}
            <span className="animate-pulse text-primary ml-2">|</span>
          </h1>

          {/* Urdu Translation with Typing Effect - Directly below Arabic */}
          {showUrdu && (
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium mt-1 md:mt-2" 
              dir="rtl"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              {urduText}
              <span className="animate-pulse text-primary ml-2">|</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="mt-10 md:mt-12">
          <p className="text-lg md:text-xl text-gray-300 font-semibold tracking-wide">
            ALTIN ORAN ENGINEERING
          </p>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Building Excellence Since 1995
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="w-48 md:w-64 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-primary rounded-full animate-progress shadow-lg"
              style={{
                animation: 'progress 4s linear forwards'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
