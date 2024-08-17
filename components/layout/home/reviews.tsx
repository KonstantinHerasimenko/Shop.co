'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { review } from '@/app/types';
import Container from '@/components/layout/container';
import reviews from '@/data/reviews.json';
import users from '@/data/users.json';
import Rating from '../rating';
import { ArrowLeft, ArrowRight } from 'lucide-react';


export default function Reviews() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)
  const [animationDuration, setAnimationDuration] = useState(500)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  function changeSlideIndex(changeBy: number) {
    if (animationDuration === 0) {
      setAnimationDuration(500)
    }
    setSlideIndex((prev) =>
      (prev + changeBy) * slideNumber < -reviews.length ||
      (prev + changeBy + 1) * slideNumber > reviews.length
        ? prev
        : prev + changeBy
    )
  }

  useLayoutEffect(() => {
		setContainerWidth(containerRef.current!.clientWidth)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setSlideNumber(Math.trunc(containerWidth / 400))
    }

		handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [containerWidth])

  useEffect(() => {
    const isAtEdges = {
      left: slideIndex * slideNumber <= -reviews.length,
      right: (slideIndex + 1) * slideNumber >= reviews.length,
    }

    setTimeout(() => {
      setAnimationDuration((prev) => (isAtEdges.right || isAtEdges.left ? 0 : prev))
    }, 500)

    setSlideIndex((prev) => {
      if (animationDuration === 0) {
        if (isAtEdges.right) {
          return -1
        } else if (isAtEdges.left) {
          return 0
        }
      }
      return prev
    })
  }, [slideIndex, slideNumber, animationDuration])

  const reviewCards = reviews.concat(reviews).map((review: review,index) => {
    return (
      <li
        key={`review${review.id}`}
        className="py-7 px-8 border-black-01 text-black border-1 rounded-2.5xl relative"
        style={{ width: `${(containerWidth - (slideNumber - 1) * 20) / slideNumber}px` }}
      >
        <Rating rating={review.rating} className="mb-5" />
        <h4 className="text-body-2 font-bold capitalize mb-4">
          {users[review.userId-1].name.first} {users[review.userId-1].name.last.slice(0,1)}.
        </h4>
        <p className="text-body-3">
          {'"'}
          {review.body}
          {'"'}
        </p>
      </li>
    )
  })

  return (
    <section className="mb-20">
      <Container>
        <div className="flex justify-between items-baseline mb-10">
          <h2 className="text-heading-2 uppercase font-bold">our happy customers</h2>
          <label className="flex gap-4.5">
            <button onClick={() => changeSlideIndex(-1)}>
              <ArrowLeft strokeWidth={2}/></button>
            <button onClick={() => changeSlideIndex(1)}><ArrowRight strokeWidth={2}/></button>
          </label>
        </div>

        <div className="w-full overflow-x-hidden" ref={containerRef}>
          <ul
            className="inline-flex relative gap-5 ease-in-out text-white text-5xl"
            style={{
              transform: `translateX(${(containerWidth+20) * -slideIndex}px)`,
              right: `calc((100% + 20px)* ${reviews.length / slideNumber})`,
              transitionDuration: `${animationDuration}ms`,
            }}
          >
            {reviewCards}
          </ul>
        </div>
      </Container>
    </section>
  )
}

/*
	const reviews = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
	const [slideNumber, setSlideNumber] = useState(0)
	const [slideIndex, setSlideIndex] = useState(0)
	const [animationDuration, setAnimationDuration] = useState(500)

	function changeSlideNumber() {
		setSlideNumber(Math.trunc(window.innerWidth / 400))
	}

	function changeSlideIndex(changeBy: number) {
		if (animationDuration === 0) {
			setAnimationDuration(500)
		}
		setSlideIndex(prev => ((prev + changeBy) * slideNumber < -reviews.length || (prev + changeBy + 1) * slideNumber > reviews.length ? prev : prev + changeBy))
	}

	useEffect(() => {
		changeSlideNumber()

		const handleResize = () => {
			changeSlideNumber()
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		const isAtEdges = { left: slideIndex * slideNumber <= -reviews.length, right: (slideIndex + 1) * slideNumber >= reviews.length }

		setTimeout(() => {
			setAnimationDuration(prev => (isAtEdges.right || isAtEdges.left ? 0 : prev))
		}, 500)

		setSlideIndex(prev => {
			if (animationDuration === 0) {
				if (isAtEdges.right) {
					return -1
				} else if (isAtEdges.left) {
					return 0
				}
			}
			return prev
		})
	}, [slideIndex, reviews.length, slideNumber, animationDuration])

	//reviews.slice(0, reviews.length % slideNumber + 1)
	const slides = reviews.concat(reviews).map((elem, index) => {
		return (
			<div
				key={index}
				className="bg-red-600 h-48 flex items-center justify-center"
				style={{
					width: `${(window.innerWidth - (slideNumber - 1) * 20) / slideNumber}px`,
				}}>
				{elem}
			</div>
		)
	})

	return (
		<div className="overflow-x-hidden w-screen">
			<div
				className="inline-flex relative gap-5 ease-in-out text-white text-5xl"
				style={{
					transform: `translateX(calc(${-100 * slideIndex}vw - ${20 * slideIndex}px))`,
					right: `calc(${(reviews.length / slideNumber) * 100}vw + ${(20 * reviews.length) / slideNumber}px)`,
					transitionDuration: `${animationDuration}ms`,
				}}>
				{slides}
			</div>
			<button onClick={() => changeSlideIndex(-1)}>{'<'}</button>
			<button onClick={() => changeSlideIndex(1)}>{'>'}</button>
		</div>
	)
*/