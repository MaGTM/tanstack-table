import { Image } from '@shared/ui/image'
import clsx from 'clsx'
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'

import { useRegistrationStore } from '../models/registration.store'
import type { SliderItem } from '../models/registration.types'
import { UserType } from '../models/registration.types'
import { sliderSpecialistData, sliderUserData } from '../models/slider.data'

const INTERVAL = 3000

export const Slider = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isChangingType, setIsChangingType] = useState(false)

  const { type } = useRegistrationStore()

  const { currentData, totalItems } = useMemo((): {
    currentData: SliderItem[]
    totalItems: number
  } => {
    const data = type === UserType.Specialist ? sliderSpecialistData : sliderUserData

    return {
      currentData: data,
      totalItems: data.length,
    }
  }, [type])

  const interval = useRef<ReturnType<typeof setInterval>>()

  const nextSlider = () => {
    setCurrentSlide((previousState) => previousState + 1)
  }

  const selectSlide = (slide: number) => {
    clearInterval(interval.current)
    setCurrentSlide(slide)
    interval.current = setInterval(() => nextSlider(), INTERVAL)
  }

  useEffect(() => {
    setCurrentSlide(1)
    setIsChangingType(true)
    const timeout = setTimeout(() => {
      setIsChangingType(false)
    }, 50)
    interval.current = setInterval(() => nextSlider(), INTERVAL)

    return () => {
      clearInterval(interval.current)
      clearTimeout(timeout)
    }
  }, [type])

  useEffect(() => {
    if (currentSlide > totalItems) {
      selectSlide(1)
    }
  }, [currentSlide, totalItems])

  return (
    <div className="absolute h-full w-full overflow-hidden rounded-l-[4.86rem]">
      <div
        className={clsx(
          'relative flex h-full transition-[right]',
          isChangingType ? 'duration-0' : 'duration-500',
        )}
        style={{
          right: `calc(100% * ${currentSlide - 1})`,
        }}
      >
        {currentData?.map((item, index) => (
          <React.Fragment key={item.title}>
            <Image
              alt="slider"
              responsive
              src={item.img}
              loading="lazy"
              style={{ height: '100%', objectFit: 'cover', aspectRatio: '3/4' }}
            />
            <div
              className="absolute bottom-0 h-[65%] w-full bg-gradient-to-b from-transparent via-black-70 to-black-70 pl-[2.08rem] pt-[3rem] text-white"
              style={{
                left: `calc(100% * ${index})`,
              }}
            >
              <h3 className="text-heading-1 font-medium">{item.title}</h3>
              <p className="mt-[0.69rem] text-small">{item.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="absolute bottom-[2.08rem] right-[1.74rem] z-10 flex gap-[0.35rem]">
        {currentData?.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={clsx(
              'h-[0.41667rem] w-[0.41667rem] rounded-full',
              currentSlide - 1 === index ? 'bg-primary' : 'bg-white',
            )}
            onClick={() => selectSlide(index + 1)}
          />
        ))}
      </div>
    </div>
  )
})
